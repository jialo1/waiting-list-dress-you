"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" />
        <path d="M32 10l4-4M36 14l4-4" opacity="0.5" />
      </svg>
    ),
    title: "Crée ton avatar IA",
    description: "Crée ton avatar IA fidèle à ta morphologie en une photo.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6L30 18H18L24 6Z" />
        <rect x="14" y="18" width="20" height="24" rx="2" />
        <path d="M20 18V14a4 4 0 018 0v4" />
      </svg>
    ),
    title: "Ajoute tes pièces",
    description: "Ajoute tes vêtements depuis une photo ou le catalogue.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="6" width="30" height="36" rx="2" />
        <path d="M24 6v36" />
        <path d="M21 11a3 3 0 016 0" />
        <path d="M24 14v3" />
        <path d="M16 19h16" />
        <path d="M17 27h2M29 27h2" />
      </svg>
    ),
    title: "Essaye & combine",
    description:
      "Sur ton avatar, essaie des vêtements du e-commerce, compose des tenues et vois le rendu avant d'acheter — depuis ton téléphone.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <path d="M8 24h32" />
        <path d="M24 8c-6.5 4.5-6.5 27.5 0 32M24 8c6.5 4.5 6.5 27.5 0 32" />
      </svg>
    ),
    title: "Notre feed",
    description:
      "Découvre des looks, inspire-toi, partage les tiens avec tes liens et gagne de l'argent grâce à l'affiliation.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="bg-off-white py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-center text-[11px] uppercase tracking-[4px] text-warm-grey"
        >
          Dress You
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center text-2xl font-bold text-charcoal md:mb-16 md:text-3xl"
        >
          Nos fonctionnalités
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group flex h-full flex-col items-center justify-start rounded-3xl bg-sage/50 p-6 text-center transition-colors duration-500 hover:bg-sage sm:p-7 md:p-8"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="mx-auto mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-icon-bg/50 text-monogram-stroke sm:mb-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center [&>svg]:h-10 [&>svg]:w-10 [&>svg]:shrink-0">
                  {feature.icon}
                </span>
              </motion.div>
              <h3 className="mb-2.5 w-full shrink-0 text-lg font-bold text-charcoal sm:mb-3">
                {feature.title}
              </h3>
              <p className="w-full text-[15px] leading-relaxed text-medium-grey">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
