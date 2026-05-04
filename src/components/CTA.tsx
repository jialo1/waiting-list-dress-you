"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LanguageProvider";

export default function CTA() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [successKey, setSuccessKey] = useState<"successTitle" | "alreadySubscribed">("successTitle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setSuccessKey(data.status === "already_subscribed" ? "alreadySubscribed" : "successTitle");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(t.hero.errorServer);
      }
    } catch {
      setStatus("error");
      setErrorMessage(t.hero.errorConnection);
    }
  }

  return (
    <section className="relative py-24 md:py-32 bg-dark overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-[11px] uppercase tracking-[4px] text-sage font-semibold bg-sage/10 px-5 py-2 rounded-full mb-8 border border-sage/15"
        >
          {t.cta.badge}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-bold text-off-white leading-tight mb-4"
        >
          {t.cta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-stone text-lg leading-relaxed mb-10 max-w-lg mx-auto"
        >
          {t.cta.description}
        </motion.p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-charcoal rounded-2xl px-8 py-6 max-w-md mx-auto border border-medium-grey/20"
            >
              <div className="text-2xl mb-2 text-sage">&#10003;</div>
              <p className="text-off-white font-semibold text-lg">{t.cta[successKey]}</p>
              <p className="text-stone text-sm mt-2">
                {t.cta.successHint}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.cta.placeholder}
                required
                className="w-full sm:flex-1 bg-charcoal rounded-full border border-medium-grey/25 px-6 py-3.5 text-off-white placeholder:text-medium-grey text-[15px] focus:outline-none focus:border-sage/40 transition-colors duration-300"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sage text-dark font-bold text-[15px] hover:bg-sage-mid transition-colors duration-300 disabled:opacity-60 cursor-pointer whitespace-nowrap"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                    {t.cta.submitting}
                  </span>
                ) : (
                  t.cta.submit
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-red-400 mt-4"
          >
            {errorMessage}
          </motion.p>
        )}
      </div>
    </section>
  );
}
