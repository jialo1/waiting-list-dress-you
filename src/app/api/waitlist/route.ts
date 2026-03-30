import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { Resend } from "resend";

const DATA_FILE = path.join(process.cwd(), "waitlist.json");

const NOTIFY_TO = process.env.WAITLIST_NOTIFY_EMAIL ?? "info@dygroup.co";
const RESEND_FROM =
  process.env.RESEND_FROM ?? "Dress You <onboarding@resend.dev>";

async function getEmails(): Promise<string[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveEmails(emails: string[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2));
}

async function notifyDiscord(subscriberEmail: string) {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `**Dress You** - Nouvelle inscription liste d'attente\n\`${subscriberEmail}\``,
    }),
  });

  if (!res.ok) {
    console.error("[waitlist] Erreur Discord webhook :", res.status, await res.text());
  }
}

async function notifyResendEmail(subscriberEmail: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: [NOTIFY_TO],
    subject: "Nouvelle inscription - Dress You (liste d'attente)",
    html: `
      <p>Une nouvelle personne vient de s'inscrire à la liste d'attente Dress You.</p>
      <p><strong>Email :</strong> ${escapeHtml(subscriberEmail)}</p>
      <p style="color:#666;font-size:12px;margin-top:24px;">Message automatique envoyé depuis le site Dress You.</p>
    `,
  });

  if (error) {
    console.error("[waitlist] Erreur Resend :", error);
  }
}

async function notifyTeamNewSignup(subscriberEmail: string) {
  const hasDiscord = Boolean(process.env.DISCORD_WEBHOOK_URL);
  const hasResend = Boolean(process.env.RESEND_API_KEY);

  if (!hasDiscord && !hasResend) {
    console.warn(
      "[waitlist] Aucune notification : ajoute DISCORD_WEBHOOK_URL (gratuit) ou RESEND_API_KEY sur Vercel."
    );
    return;
  }

  await Promise.all([
    notifyDiscord(subscriberEmail),
    notifyResendEmail(subscriberEmail),
  ]);
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email requis." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    const normalized = email.toLowerCase();
    const emails = await getEmails();

    if (emails.includes(normalized)) {
      return NextResponse.json({
        message: "Tu es déjà sur la liste !",
      });
    }

    emails.push(normalized);
    await saveEmails(emails);

    await notifyTeamNewSignup(normalized);

    return NextResponse.json({
      message: "Bienvenue sur la liste !",
      count: emails.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Réessaye." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const emails = await getEmails();
  return NextResponse.json({ count: emails.length });
}
