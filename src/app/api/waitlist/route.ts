import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "waitlist.json");

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

    const emails = await getEmails();

    if (emails.includes(email.toLowerCase())) {
      return NextResponse.json({
        message: "Tu es déjà sur la liste !",
      });
    }

    emails.push(email.toLowerCase());
    await saveEmails(emails);

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
