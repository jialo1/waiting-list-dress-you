"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const phoneScreens = [
  { src: "/images/1.png", alt: "DressYou - Écran d'accueil" },
  { src: "/images/2.png", alt: "DressYou - Votre dressing digital" },
  { src: "/images/3.png", alt: "DressYou - Explorez et inspirez-vous" },
  { src: "/images/4.png", alt: "DressYou - Connexion" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

function PhoneCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % phoneScreens.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  function goTo(i: number) {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 0.92,
      x: dir > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.92,
      x: dir > 0 ? -40 : 40,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[280px] md:w-[300px]"
    >
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={phoneScreens[current].src}
              alt={phoneScreens[current].alt}
              fill
              className="object-contain"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {phoneScreens.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            animate={{
              width: i === current ? 24 : 8,
              backgroundColor: i === current ? "var(--color-sage)" : "rgba(181,177,164,0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-2 rounded-full cursor-pointer"
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-10 bg-sage/8 rounded-full blur-3xl -z-10" />
    </motion.div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

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
        setMessage(data.message || "Tu es sur la liste !");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur de connexion. Réessaye.");
    }
  }

  return (
    <section className="relative min-h-screen bg-dark overflow-hidden pt-16">
      {/* Decorative gradient orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 -left-40 w-[500px] h-[500px] bg-sage/8 rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-stone/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full py-10 lg:py-16">
          {/* Phone carousel */}
          <div className="flex justify-center order-1 lg:order-1">
            <PhoneCarousel />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-block text-[11px] uppercase tracking-[4px] text-sage font-semibold bg-sage/10 px-5 py-2 rounded-full mb-5 lg:mb-8 border border-sage/15">
                Bientôt disponible
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-off-white leading-[1.1] mb-4 lg:mb-6"
            >
              Essaye tes vêtements{" "}
              <span className="text-stone">sans les enfiler</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base lg:text-lg text-stone leading-relaxed mb-6 lg:mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Crée ton avatar IA, ajoute tes pièces préférées et compose tes
              tenues en quelques secondes. Inscris-toi pour un accès anticipé.
            </motion.p>

            {/* Waitlist form */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-charcoal rounded-2xl px-8 py-6 max-w-md mx-auto lg:mx-0 border border-medium-grey/20"
                >
                  <div className="text-2xl mb-2 text-sage">&#10003;</div>
                  <p className="text-off-white font-semibold text-lg">{message}</p>
                  <p className="text-stone text-sm mt-2">
                    On te tient au courant très vite.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  custom={3}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit}
                  className="flex items-center max-w-md mx-auto lg:mx-0 bg-charcoal rounded-full border border-medium-grey/25 p-1.5"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ton@email.com"
                    required
                    className="flex-1 bg-transparent px-5 py-3 text-off-white placeholder:text-medium-grey text-[15px] focus:outline-none min-w-0"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-11 h-11 rounded-full bg-sage flex items-center justify-center hover:bg-sage-mid transition-colors duration-300 disabled:opacity-60 cursor-pointer shrink-0"
                  >
                    {status === "loading" ? (
                      <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                    ) : (
                      <svg
                        className="w-5 h-5 text-dark"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-red-400 mt-3"
              >
                {message}
              </motion.p>
            )}

            {/* Social proof */}
            {status !== "success" && (
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mt-5 lg:mt-8 justify-center lg:justify-start"
              >
                <div className="flex -space-x-2">
                  <Image src="https://randomuser.me/api/portraits/women/90.jpg" alt="Inscrite" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-dark object-cover" />
                  <Image src="https://randomuser.me/api/portraits/men/75.jpg" alt="Inscrit" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-dark object-cover" />
                  <Image src="https://randomuser.me/api/portraits/women/79.jpg" alt="Inscrite" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-dark object-cover" />
                </div>
                <span className="text-sm text-warm-grey">
                  Rejoins les premiers inscrits
                </span>
              </motion.div>
            )}

            {/* Social media links */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5 mt-5 lg:mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://www.instagram.com/dressyouapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-medium-grey/25 hover:border-stone/50 hover:bg-charcoal transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-[18px] h-[18px] text-stone group-hover:text-off-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-medium-grey/25 hover:border-stone/50 hover:bg-charcoal transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-[18px] h-[18px] text-stone group-hover:text-off-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-medium-grey/25 hover:border-stone/50 hover:bg-charcoal transition-all duration-300"
                aria-label="Twitter / X"
              >
                <svg className="w-[18px] h-[18px] text-stone group-hover:text-off-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-stone/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-stone/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
