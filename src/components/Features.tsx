"use client";

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" />
        <path d="M32 10l4-4M36 14l4-4" opacity="0.5" />
      </svg>
    ),
    title: "Crée ton avatar",
    description: "Une photo suffit. Notre IA génère ton double virtuel fidèle à ta morphologie.",
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
    description: "Importe tes vêtements depuis une photo ou notre catalogue de marques partenaires.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l5.09 10.32L40.18 16l-8.09 7.88 1.91 11.12L24 29.76 14 35l1.91-11.12L7.82 16l11.09-1.68L24 4z" />
      </svg>
    ),
    title: "Essaye & combine",
    description: "Visualise tes tenues sur ton avatar. Trouve le match parfait en quelques secondes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[11px] uppercase tracking-[4px] text-warm-grey text-center mb-4">
          Comment ça marche
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal text-center mb-16">
          Ton dressing connecté en 3 étapes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group text-center p-8 rounded-3xl bg-sage/50 hover:bg-sage transition-colors duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-icon-bg/50 text-monogram-stroke mb-6 group-hover:scale-105 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-[15px] text-medium-grey leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
