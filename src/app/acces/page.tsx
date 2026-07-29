import type { Metadata } from "next";
import AccessGate from "@/components/AccessGate";

export const metadata: Metadata = {
  title: "Dress You",
  robots: { index: false, follow: false },
};

export default function AccesPage() {
  return <AccessGate />;
}
