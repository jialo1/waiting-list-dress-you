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

async function saveEmails(emails: string[]): Promise<boolean> {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2));
    return true;
  } catch (err) {
    console.error(
      "[waitlist] Impossible d'écrire waitlist.json (souvent lecture seule en prod, ex. Vercel) :",
      err
    );
    return false;
  }
}

async function notifyDiscord(subscriberEmail: string) {
  try {
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
  } catch (err) {
    console.error("[waitlist] Discord exception :", err);
  }
}

async function notifyResendEmail(subscriberEmail: string) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return;

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: RESEND_FROM,
      to: [NOTIFY_TO],
      subject: "Nouvelle inscription - Dress You (liste d'attente)",
      replyTo: NOTIFY_TO,
      html: `
      <p>Une nouvelle personne vient de s'inscrire à la liste d'attente Dress You.</p>
      <p><strong>Email :</strong> ${escapeHtml(subscriberEmail)}</p>
      <p style="color:#666;font-size:12px;margin-top:24px;">Message automatique envoyé depuis le site Dress You.</p>
    `,
    });

    if (error) {
      console.error("[waitlist] Erreur Resend :", JSON.stringify(error, null, 2));
    } else if (data?.id) {
      console.info("[waitlist] Email Resend envoyé, id :", data.id);
    }
  } catch (err) {
    console.error("[waitlist] Resend exception :", err);
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
  console.info("[waitlist] step:start", {
    hasResendKey: Boolean(process.env.RESEND_API_KEY),
    hasDiscord: Boolean(process.env.DISCORD_WEBHOOK_URL),
    notifyTo: NOTIFY_TO,
    from: RESEND_FROM,
  });
  try {
    let body: unknown;
    try {
      body = await request.json();
      console.info("[waitlist] step:body-parsed");
    } catch (e) {
      console.error("[waitlist] step:body-parse-failed", e);
      return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
    }

    const email =
      typeof body === "object" && body !== null && "email" in body
        ? (body as { email: unknown }).email
        : undefined;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email requis." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    const normalized = email.toLowerCase();
    console.info("[waitlist] step:email-validated", normalized);

    let emails: string[] = [];
    try {
      emails = await getEmails();
      console.info("[waitlist] step:emails-loaded", emails.length);
    } catch (e) {
      console.error("[waitlist] step:emails-load-failed", e);
    }

    if (emails.includes(normalized)) {
      return NextResponse.json({
        status: "already_subscribed",
        message: "Tu es déjà sur la liste !",
      });
    }

    emails.push(normalized);

    let persisted = false;
    try {
      persisted = await saveEmails(emails);
      console.info("[waitlist] step:emails-saved", persisted);
    } catch (e) {
      console.error("[waitlist] step:emails-save-failed", e);
    }

    try {
      await notifyTeamNewSignup(normalized);
      console.info("[waitlist] step:notify-done");
    } catch (e) {
      console.error("[waitlist] step:notify-failed", e);
    }

    return NextResponse.json({
      status: "subscribed",
      message: "Bienvenue sur la liste !",
      ...(persisted ? { count: emails.length } : {}),
    });
  } catch (err) {
    console.error("[waitlist] step:fatal", err);
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
