"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AccessGate() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/acces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.reload();
        return;
      }
      setStatus("error");
      setPassword("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-off-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm text-center"
      >
        <Image
          src="/logo.png"
          alt="Dress You"
          width={612}
          height={330}
          priority
          className="mx-auto mb-10 h-16 w-auto object-contain"
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Mot de passe"
            aria-label="Mot de passe"
            aria-invalid={status === "error"}
            className={`w-full rounded-full border bg-sage/25 px-6 py-3.5 text-center text-[15px] text-charcoal placeholder:text-warm-grey focus:outline-none transition-colors duration-300 ${
              status === "error"
                ? "border-red-500/60"
                : "border-medium-grey/25 focus:border-charcoal/40"
            }`}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full cursor-pointer rounded-full bg-dark px-8 py-3.5 text-[15px] font-bold text-off-white transition-colors duration-300 hover:bg-charcoal disabled:opacity-60"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-off-white/30 border-t-off-white" />
                Vérification...
              </span>
            ) : (
              "Entrer"
            )}
          </button>
        </form>

        <p
          role="status"
          className={`mt-4 text-sm text-red-600 transition-opacity duration-200 ${
            status === "error" ? "opacity-100" : "opacity-0"
          }`}
        >
          Mot de passe incorrect.
        </p>
      </motion.div>
    </main>
  );
}
