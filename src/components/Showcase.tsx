"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LanguageProvider";

const flowScreens = [
  "/images/app/flow-1-signup.png",
  "/images/app/flow-2-profile.png",
  "/images/app/flow-3-creation.png",
  "/images/app/flow-4-avatar.png",
  "/images/app/flow-5-feed.png",
];

const avatarScreens = [
  "/images/app/avatar-a.png",
  "/images/app/avatar-b.png",
  "/images/app/avatar-c.png",
  "/images/app/avatar-d.png",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Showcase() {
  const { t } = useTranslation();

  return (
    <section id="showcase" className="bg-off-white py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 text-[11px] uppercase tracking-[4px] text-warm-grey"
            >
              {t.showcase.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-bold leading-[1.15] text-charcoal md:text-5xl"
            >
              {t.showcase.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-sm text-[15px] italic leading-relaxed text-medium-grey lg:mt-0 lg:shrink-0 lg:text-right"
          >
            {t.showcase.subtitle}
          </motion.p>
        </div>

        {/* Le parcours, écran par écran */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0"
        >
          {t.showcase.screens.map((screen, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              className="w-[190px] shrink-0 snap-start sm:w-[210px] lg:w-auto"
            >
              <div className="relative aspect-[1320/2868] overflow-hidden rounded-[22px] bg-sage/40 ring-1 ring-medium-grey/15">
                <Image
                  src={flowScreens[i]}
                  alt={screen.title}
                  fill
                  sizes="(min-width: 1024px) 210px, 200px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-charcoal">
                {screen.title}
              </h3>
              <p className="mt-0.5 text-sm italic text-medium-grey">
                {screen.caption}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Fidèle à chaque morphologie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 rounded-3xl bg-dark p-7 sm:p-9 md:mt-20 md:p-10"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold leading-tight text-off-white md:text-3xl">
              {t.showcase.diversityTitle}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-stone">
              {t.showcase.diversityDescription}
            </p>
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-10 md:gap-5"
          >
            {avatarScreens.map((src) => (
              <motion.li
                key={src}
                variants={itemVariants}
                className="relative aspect-[3/5] overflow-hidden rounded-2xl bg-charcoal"
              >
                <Image
                  src={src}
                  alt={t.showcase.diversityTitle}
                  fill
                  sizes="(min-width: 640px) 260px, 45vw"
                  className="object-cover object-bottom"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
