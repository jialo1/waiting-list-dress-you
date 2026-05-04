"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LogoMark } from "./Logo";
import { useTranslation } from "@/lib/LanguageProvider";
import { LOCALES, Locale } from "@/lib/i18n";

export default function Navbar() {
  const { locale, setLocale, t } = useTranslation();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#E2E4DE] backdrop-blur-md border-b border-medium-grey/25"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/" className="block">
            <LogoMark className="h-10 w-auto max-h-10 max-w-[min(240px,58vw)]" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-5"
        >
          <a
            href="#features"
            className="text-sm text-charcoal/80 hover:text-charcoal transition-colors duration-300 font-medium"
          >
            {t.nav.discover}
          </a>

          <div
            role="group"
            aria-label={t.languageSwitcher.label}
            className="flex items-center rounded-full border border-medium-grey/30 bg-off-white/60 p-0.5"
          >
            {LOCALES.map((code: Locale) => {
              const active = code === locale;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  aria-pressed={active}
                  className={`text-[11px] font-semibold uppercase tracking-[1px] px-2.5 py-1 rounded-full transition-colors duration-200 cursor-pointer ${
                    active
                      ? "bg-charcoal text-off-white"
                      : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
