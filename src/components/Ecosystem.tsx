"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LanguageProvider";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Ecosystem() {
  const { t } = useTranslation();

  return (
    <section id="ecosystem" className="bg-sage/40 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-3xl font-bold leading-[1.15] text-charcoal md:text-5xl"
            >
              {t.ecosystem.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-sm text-[15px] italic leading-relaxed text-medium-grey lg:mt-0 lg:shrink-0 lg:text-right"
          >
            {t.ecosystem.subtitle}
          </motion.p>
        </div>

        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
        >
          {t.ecosystem.steps.map((step, i) => (
            <motion.li key={i} variants={stepVariants} className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-4xl font-bold leading-none text-stone/60 md:text-5xl">
                  {i + 1}
                </span>
                <span
                  aria-hidden
                  className="h-px flex-1 bg-stone/30 lg:hidden"
                />
              </div>
              <h3 className="mb-2 flex flex-wrap items-center gap-2 text-lg font-bold text-charcoal">
                {step.title}
                {step.soon && (
                  <span className="rounded-full border border-medium-grey/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[1.5px] text-medium-grey">
                    {t.ecosystem.soonLabel}
                  </span>
                )}
              </h3>
              <p className="text-[15px] leading-relaxed text-medium-grey">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
