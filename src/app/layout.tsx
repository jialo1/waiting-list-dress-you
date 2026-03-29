import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dress You - Ton avatar IA pour essayer tes vêtements",
  description:
    "Crée ton avatar IA et essaye tes vêtements virtuellement avant de les acheter. Rejoins la liste d'attente.",
  keywords: ["mode", "IA", "avatar", "vêtements", "essayage virtuel", "dress you"],
  openGraph: {
    title: "Dress You - Ton avatar IA pour essayer tes vêtements",
    description:
      "Crée ton avatar IA et essaye tes vêtements virtuellement. Rejoins la liste d'attente.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${nunitoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
