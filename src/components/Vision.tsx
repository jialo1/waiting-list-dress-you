"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LanguageProvider";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const pillarVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Vision() {
  const { t } = useTranslation();

  return (
    <section id="vision" className="bg-charcoal py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-[11px] uppercase tracking-[4px] text-warm-grey"
        >
          {t.vision.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-3xl font-bold leading-[1.15] text-off-white md:text-5xl"
        >
          {t.vision.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-stone md:text-lg"
        >
          {t.vision.description}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-8 border-t border-medium-grey/25 pt-10 sm:grid-cols-3 md:mt-16 md:gap-10"
        >
          {t.vision.pillars.map((pillar, i) => (
            <motion.div key={i} variants={pillarVariants}>
              <h3 className="mb-2.5 text-lg font-bold text-off-white">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-grey">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
