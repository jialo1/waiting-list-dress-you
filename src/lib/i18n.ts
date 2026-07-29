export type Locale = "fr" | "en";

export const LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

export type Translations = {
  nav: { discover: string };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    placeholder: string;
    successTitle: string;
    alreadySubscribed: string;
    successHint: string;
    socialProof: string;
    errorRequired: string;
    errorInvalid: string;
    errorServer: string;
    errorConnection: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    stats: ReadonlyArray<{ value: string; description: string }>;
    footnote: string;
  };
  features: {
    eyebrow: string;
    title: string;
    items: ReadonlyArray<{ title: string; description: string }>;
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    soonLabel: string;
    steps: ReadonlyArray<{ title: string; description: string; soon?: boolean }>;
  };
  showcase: {
    eyebrow: string;
    title: string;
    subtitle: string;
    screens: ReadonlyArray<{ title: string; caption: string }>;
    diversityTitle: string;
    diversityDescription: string;
  };
  vision: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: ReadonlyArray<{ title: string; description: string }>;
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    placeholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    alreadySubscribed: string;
    successHint: string;
  };
  footer: {
    tagline: string;
    followUs: string;
    copyright: string;
    privacy: string;
    tos: string;
  };
  languageSwitcher: { label: string };
};

export const translations: Record<Locale, Translations> = {
  fr: {
    nav: {
      discover: "Découvrir",
    },
    hero: {
      badge: "Bientôt disponible",
      title1: "Essaye tes vêtements",
      title2: "sans les enfiler",
      description:
        "Crée ton avatar IA, ajoute tes pièces préférées et compose tes tenues en quelques secondes. Inscris-toi pour un accès anticipé.",
      placeholder: "ton@exemple.com",
      successTitle: "Tu es sur la liste !",
      alreadySubscribed: "Tu es déjà sur la liste !",
      successHint: "On te tient au courant très vite.",
      socialProof: "Rejoins les premiers inscrits",
      errorRequired: "Email requis.",
      errorInvalid: "Email invalide.",
      errorServer: "Erreur serveur. Réessaye.",
      errorConnection: "Erreur de connexion. Réessaye.",
    },
    problem: {
      eyebrow: "Le problème",
      title: "S'habiller en ligne aujourd'hui, c'est compliqué.",
      stats: [
        {
          value: "25–35 %",
          description:
            "des articles mode sont retournés, le plus souvent parce que la taille ne va pas : on achète sans savoir si ça tombe bien.",
        },
        {
          value: "4 à 5",
          description:
            "apps à jongler juste pour vivre sa vie mode. Aucune ne te connaît vraiment.",
        },
        {
          value: "96 %",
          description:
            "de la Gen Z achète sur mobile : la mode est devenue une habitude quotidienne.",
        },
      ],
      footnote:
        "Dress You réunit tout ça en une seule app : essaie n'importe quelle pièce à ta vraie taille, avant de payer.",
    },
    features: {
      eyebrow: "Dress You",
      title: "Nos fonctionnalités",
      items: [
        {
          title: "Crée ton avatar IA",
          description: "Crée ton avatar IA fidèle à ta morphologie en une photo.",
        },
        {
          title: "Ajoute tes pièces",
          description:
            "Colle les liens de tes vêtements pour remplir ton e-dressing dans l'app : des tenues issues de ton dressing te sont proposées quand tu veux, selon ton mood.",
        },
        {
          title: "Essaye & combine",
          description:
            "Sur ton avatar, essaie des vêtements du e-commerce, compose des tenues et vois le rendu avant d'acheter.",
        },
        {
          title: "Notre feed",
          description:
            "Découvre des looks, inspire-toi, partage les tiens avec tes liens et gagne de l'argent grâce à l'affiliation.",
        },
      ],
    },
    ecosystem: {
      eyebrow: "L'écosystème",
      title: "Une seule app, du coup de cœur à la revente.",
      subtitle:
        "L'achat est épisodique, l'habitude est quotidienne. Chaque geste nourrit le suivant.",
      soonLabel: "Bientôt",
      steps: [
        {
          title: "Inspiration sur le feed",
          description: "La communauté et l'algo te servent des looks faits pour toi.",
        },
        {
          title: "Tes pièces préférées",
          description: "Tu cliques, tu enregistres, ton dressing se remplit.",
        },
        {
          title: "Essayage à ta taille",
          description: "Sur ton mannequin IA, à ta morphologie réelle, sans te tromper.",
        },
        {
          title: "Achat & outfits IA",
          description: "Le styliste compose tes meilleures tenues au quotidien.",
        },
        {
          title: "Revends",
          description: "Ce que tu ne portes plus repart, et la boucle recommence.",
          soon: true,
        },
      ],
    },
    showcase: {
      eyebrow: "L'application",
      title: "L'app, en vrai.",
      subtitle:
        "Du profil au feed : chaque écran tourne déjà en beta privée.",
      screens: [
        { title: "Créer un compte", caption: "En quelques secondes" },
        { title: "Profil & mensurations", caption: "Ta vraie taille" },
        { title: "Création du mannequin", caption: "Ton avatar IA" },
        { title: "Ton mannequin IA", caption: "Prêt à essayer" },
        { title: "Feed communauté", caption: "Partage & inspiration" },
      ],
      diversityTitle: "Fidèle à chaque morphologie.",
      diversityDescription:
        "Ton mannequin est généré à partir de tes mesures et de ta photo — pas d'un gabarit standard.",
    },
    vision: {
      eyebrow: "La vision",
      title: "Plus personne n'achètera un vêtement sans l'avoir vu sur soi.",
      description:
        "L'IA rend enfin la mode personnelle, instantanée et fidèle à la vraie taille de chacun. On en fait le nouveau standard.",
      pillars: [
        {
          title: "La bonne taille, d'abord",
          description: "Chaque pièce sur ton avatar réel. La fin de l'achat à l'aveugle.",
        },
        {
          title: "La confiance, pas la pression",
          description: "S'habiller doit redevenir un plaisir, jamais une anxiété.",
        },
        {
          title: "Elle grandit avec toi",
          description: "Plus tu l'utilises, mieux elle te connaît.",
        },
      ],
    },
    cta: {
      badge: "Liste d'attente",
      title: "Prêt(e) à révolutionner ton dressing ?",
      description:
        "Inscris-toi maintenant et sois parmi les premiers à découvrir Dress You dès le lancement.",
      placeholder: "ton@exemple.com",
      submit: "Rejoindre la liste",
      submitting: "Envoi...",
      successTitle: "Tu es sur la liste !",
      alreadySubscribed: "Tu es déjà sur la liste !",
      successHint: "On te tient au courant très vite.",
    },
    footer: {
      tagline: "Ton avatar IA pour essayer tes vêtements avant de les acheter.",
      followUs: "Suivez-nous",
      copyright: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      tos: "CGU",
    },
    languageSwitcher: {
      label: "Langue",
    },
  },
  en: {
    nav: {
      discover: "Discover",
    },
    hero: {
      badge: "Coming soon",
      title1: "Try on your clothes",
      title2: "without putting them on",
      description:
        "Create your AI avatar, add your favorite pieces and compose outfits in seconds. Sign up for early access.",
      placeholder: "you@example.com",
      successTitle: "You're on the list!",
      alreadySubscribed: "You're already on the list!",
      successHint: "We'll keep you posted very soon.",
      socialProof: "Join the first signups",
      errorRequired: "Email required.",
      errorInvalid: "Invalid email.",
      errorServer: "Server error. Try again.",
      errorConnection: "Connection error. Try again.",
    },
    problem: {
      eyebrow: "The problem",
      title: "Shopping for clothes online is broken.",
      stats: [
        {
          value: "25–35%",
          description:
            "of fashion items get returned, most often because the size is wrong: you buy without knowing how it will fit.",
        },
        {
          value: "4 to 5",
          description:
            "apps to juggle just to live your fashion life. None of them really knows you.",
        },
        {
          value: "96%",
          description:
            "of Gen Z shops on mobile: fashion has become a daily, mobile habit.",
        },
      ],
      footnote:
        "Dress You brings it all into one app: try any piece on at your real size, before you pay.",
    },
    features: {
      eyebrow: "Dress You",
      title: "Our features",
      items: [
        {
          title: "Create your AI avatar",
          description:
            "Build an AI avatar that matches your body from a single photo.",
        },
        {
          title: "Add your pieces",
          description:
            "Paste links to your clothes to fill your digital wardrobe — outfit ideas built from your own pieces are surfaced whenever you want, matched to your mood.",
        },
        {
          title: "Try on & combine",
          description:
            "Try e-commerce items on your avatar, build outfits and see the result before you buy.",
        },
        {
          title: "Our feed",
          description:
            "Discover looks, get inspired, share yours with your links and earn through affiliate.",
        },
      ],
    },
    ecosystem: {
      eyebrow: "The ecosystem",
      title: "One app, from the first crush to the resale.",
      subtitle:
        "Buying is occasional, the habit is daily. Every step feeds the next one.",
      soonLabel: "Soon",
      steps: [
        {
          title: "Inspiration in the feed",
          description: "The community and the algorithm serve you looks made for you.",
        },
        {
          title: "Your favorite pieces",
          description: "You tap, you save, your wardrobe fills up.",
        },
        {
          title: "Try on at your size",
          description: "On your AI model, built from your real measurements. No guesswork.",
        },
        {
          title: "Buy & AI outfits",
          description: "The stylist puts together your best looks, every day.",
        },
        {
          title: "Resell",
          description: "What you no longer wear moves on, and the loop starts again.",
          soon: true,
        },
      ],
    },
    showcase: {
      eyebrow: "The app",
      title: "The app, for real.",
      subtitle:
        "From profile to feed: every screen is already running in private beta.",
      screens: [
        { title: "Create an account", caption: "In a few seconds" },
        { title: "Profile & measurements", caption: "Your real size" },
        { title: "Building your model", caption: "Your AI avatar" },
        { title: "Your AI model", caption: "Ready to try on" },
        { title: "Community feed", caption: "Share & get inspired" },
      ],
      diversityTitle: "True to every body.",
      diversityDescription:
        "Your model is generated from your own measurements and photo — not from a standard template.",
    },
    vision: {
      eyebrow: "The vision",
      title: "Nobody will buy a garment again without seeing it on themselves.",
      description:
        "AI finally makes fashion personal, instant and true to everyone's real size. We're making it the new standard.",
      pillars: [
        {
          title: "The right size, first",
          description: "Every piece on your real avatar. The end of blind shopping.",
        },
        {
          title: "Confidence, not pressure",
          description: "Getting dressed should be a pleasure again, never anxiety.",
        },
        {
          title: "It grows with you",
          description: "The more you use it, the better it knows you.",
        },
      ],
    },
    cta: {
      badge: "Waitlist",
      title: "Ready to reinvent your wardrobe?",
      description:
        "Sign up now and be among the first to discover Dress You at launch.",
      placeholder: "you@example.com",
      submit: "Join the waitlist",
      submitting: "Sending...",
      successTitle: "You're on the list!",
      alreadySubscribed: "You're already on the list!",
      successHint: "We'll keep you posted very soon.",
    },
    footer: {
      tagline: "Your AI avatar to try on clothes before buying them.",
      followUs: "Follow us",
      copyright: "All rights reserved.",
      privacy: "Privacy policy",
      tos: "Terms of service",
    },
    languageSwitcher: {
      label: "Language",
    },
  },
};
