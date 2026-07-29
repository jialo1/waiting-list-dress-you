"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LanguageProvider";

const icons = [
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" key="return">
      <path d="M3 12a9 9 0 0115.5-6.2M21 12a9 9 0 01-15.5 6.2" />
      <path d="M18.5 2.5v3.5H15" />
      <path d="M5.5 21.5V18H9" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" key="apps">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" key="mobile">
      <rect x="6.5" y="2" width="11" height="20" rx="2.5" />
      <path d="M10.5 5.5h3" />
      <path d="M11 18.5h2" />
    </svg>
  ),
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Problem() {
  const { t } = useTranslation();

  return (
    <section id="problem" className="bg-sage/40 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-[11px] uppercase tracking-[4px] text-warm-grey"
        >
          {t.problem.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-3xl text-3xl font-bold leading-[1.15] text-charcoal md:mb-16 md:text-5xl"
        >
          {t.problem.title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {t.problem.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="flex h-full flex-col rounded-3xl bg-off-white p-7 sm:p-8"
            >
              <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-icon-bg/60 text-monogram-stroke">
                {icons[i]}
              </span>
              <span className="mb-3 block text-4xl font-bold leading-none tracking-tight text-charcoal sm:text-5xl">
                {stat.value}
              </span>
              <p className="text-[15px] leading-relaxed text-medium-grey">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 rounded-3xl bg-dark px-7 py-6 text-[15px] leading-relaxed text-stone sm:px-8 lg:mt-8"
        >
          {t.problem.footnote}
        </motion.p>
      </div>
    </section>
  );
}
