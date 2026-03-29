"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const phoneScreens = [
  { src: "/images/1.png", alt: "DressYou - Écran d'accueil" },
  { src: "/images/2.png", alt: "DressYou - Votre dressing digital" },
  { src: "/images/3.png", alt: "DressYou - Explorez et inspirez-vous" },
  { src: "/images/4.png", alt: "DressYou - Connexion" },
];

function PhoneCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % phoneScreens.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-[260px] md:w-[300px] animate-scale-in">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2px]">
        {phoneScreens.map((screen, i) => (
          <div
            key={screen.src}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1)" : "scale(0.95)",
            }}
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {phoneScreens.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "w-6 h-2 bg-sage"
                : "w-2 h-2 bg-stone/30 hover:bg-stone/50"
            }`}
          />
        ))}
      </div>

      {/* Glow effect behind phone */}
      <div className="absolute -inset-10 bg-sage/8 rounded-full blur-3xl -z-10" />
    </div>
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
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-sage/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-stone/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full py-16">
          {/* Left: Phone carousel */}
          <div className="flex justify-center order-2 lg:order-1">
            <PhoneCarousel />
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="inline-block text-[11px] uppercase tracking-[4px] text-sage font-semibold bg-sage/10 px-5 py-2 rounded-full mb-8 border border-sage/15">
                Bientôt disponible
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white leading-[1.1] mb-6 animate-fade-up delay-100">
              Essaye tes vêtements{" "}
              <span className="text-stone">sans les enfiler</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-stone leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-up delay-200">
              Crée ton avatar IA, ajoute tes pièces préférées et compose tes
              tenues en quelques secondes. Inscris-toi pour un accès anticipé.
            </p>

            {/* Waitlist form */}
            {status === "success" ? (
              <div className="animate-scale-in bg-charcoal rounded-2xl px-8 py-6 max-w-md mx-auto lg:mx-0 border border-medium-grey/20">
                <div className="text-2xl mb-2 text-sage">&#10003;</div>
                <p className="text-off-white font-semibold text-lg">{message}</p>
                <p className="text-stone text-sm mt-2">
                  On te tient au courant très vite.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-center max-w-md mx-auto lg:mx-0 bg-charcoal rounded-full border border-medium-grey/25 p-1.5 animate-fade-up delay-300"
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
              </form>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400 mt-3 animate-fade-in">{message}</p>
            )}

            {/* Social proof */}
            {status !== "success" && (
              <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start animate-fade-up delay-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone to-warm-grey border-2 border-dark" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage-mid to-stone border-2 border-dark" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-warm-grey to-medium-grey border-2 border-dark" />
                </div>
                <span className="text-sm text-warm-grey">
                  Rejoins les premiers inscrits
                </span>
              </div>
            )}

            {/* Social media links */}
            <div className="flex items-center gap-5 mt-8 justify-center lg:justify-start animate-fade-up delay-500">
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
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
        <div className="w-6 h-10 rounded-full border-2 border-stone/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-stone/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
