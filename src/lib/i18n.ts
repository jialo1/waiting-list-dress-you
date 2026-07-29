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
    title: string;
    blocks: ReadonlyArray<{ title: string; description: string }>;
    footnote: string;
  };
  features: {
    title: string;
    items: ReadonlyArray<{ title: string; description: string }>;
  };
  ecosystem: {
    title: string;
    subtitle: string;
    soonLabel: string;
    steps: ReadonlyArray<{ title: string; description: string; soon?: boolean }>;
  };
  showcase: {
    title: string;
    subtitle: string;
    screens: ReadonlyArray<{ title: string; caption: string }>;
    diversityTitle: string;
    diversityDescription: string;
  };
  vision: {
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
      title1: "La nouvelle app mode",
      title2: "qui réinvente ton quotidien grâce à l'IA",
      description:
        "Grâce à l'IA, visualise chaque vêtement ou outfit sur toi avant d'acheter en ligne, compose tes tenues en quelques secondes, découvre les dernières tendances dans le feed, partage tes looks avec la communauté et, bientôt, achète ou revends tes vêtements en seconde main. Tout ça, dans une seule app.",
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
      title: "Marre d'acheter sans savoir si ça te va ?",
      blocks: [
        {
          title: "Commander sans pouvoir essayer",
          description:
            "Tu choisis une pièce sans savoir si c'est la bonne taille, ni ce que ça donne vraiment sur toi. Et impossible de voir ce qu'elle vaut avec les vêtements que tu as déjà dans ton dressing.",
        },
        {
          title: "Et cinq apps à jongler",
          description:
            "Une pour l'inspiration, une autre pour trouver les pièces que tu aimes, une troisième pour acheter ou revendre de la seconde main. Aucune ne te connaît vraiment.",
        },
      ],
      footnote:
        "Dress You, c'est l'app mode du quotidien qui réunit tout : essaie n'importe quelle pièce à ta vraie taille, compose tes tenues, inspire-toi — et bientôt, revends ta seconde main.",
    },
    features: {
      title: "Nos fonctionnalités",
      items: [
        {
          title: "Crée ton mannequin IA",
          description:
            "Crée un mannequin IA ultra-réaliste à partir d'une simple photo. Ajoute tes mensurations pour un essayage virtuel encore plus précis et des recommandations de taille personnalisées.",
        },
        {
          title: "Alimente ton e-dressing",
          description:
            "Importe facilement les vêtements que tu possèdes grâce à leurs liens. Retrouve tout ton dressing au même endroit et compose des tenues selon ton humeur en quelques secondes.",
        },
        {
          title: "Essaie & combine",
          description:
            "Essaie virtuellement n'importe quel vêtement avant de l'acheter et visualise le rendu sur ton mannequin IA. Combine-le ensuite avec les pièces de ton e-dressing pour créer tes tenues parfaites.",
        },
        {
          title: "Ton styliste IA",
          description:
            "Ton styliste IA connaît ton style, ta morphologie et ton dressing. Il te conseille, crée des tenues pour chaque occasion, prépare tes valises et retrouve n'importe quel vêtement à partir d'une simple photo grâce à la reconnaissance d'articles.",
        },
        {
          title: "Notre Feed",
          description:
            "Découvre un feed personnalisé grâce à un algorithme qui comprend tes goûts. Inspire-toi des looks de la communauté, partage les tiens et, bientôt, gagne des récompenses grâce à notre programme d'affiliation.",
        },
      ],
    },
    ecosystem: {
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
      diversityTitle: "Crée ton mannequin, super réaliste.",
      diversityDescription:
        "Généré à partir de ta photo et de tes mesures, pour un essayage conseillé à ta taille. Essaie toutes les pièces que tu veux sur toi, compose tes outfits depuis ton dressing, et bien plus encore.",
    },
    vision: {
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
      title1: "The new fashion app",
      title2: "that reinvents your everyday with AI",
      description:
        "With AI, see any garment or outfit on yourself before you buy online, put looks together in seconds, catch the latest trends in the feed, share your looks with the community and, soon, buy or resell your clothes second-hand. All of it, in a single app.",
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
      title: "Tired of buying without knowing if it fits?",
      blocks: [
        {
          title: "Ordering without trying on",
          description:
            "You pick a piece without knowing whether it's the right size, or what it actually looks like on you. And there's no way to see how it works with the clothes already in your wardrobe.",
        },
        {
          title: "And five apps to juggle",
          description:
            "One for inspiration, another to find the pieces you love, a third to buy or resell second-hand. None of them really knows you.",
        },
      ],
      footnote:
        "Dress You is the everyday fashion app that brings it all together: try any piece on at your real size, build your outfits, get inspired — and soon, resell your second-hand.",
    },
    features: {
      title: "Our features",
      items: [
        {
          title: "Create your AI model",
          description:
            "Build an ultra-realistic AI model from a single photo. Add your measurements for an even more accurate virtual try-on and personalized size recommendations.",
        },
        {
          title: "Fill your e-wardrobe",
          description:
            "Easily import the clothes you already own from their links. Find your whole wardrobe in one place and put outfits together to match your mood in seconds.",
        },
        {
          title: "Try on & combine",
          description:
            "Virtually try on any garment before you buy it and see how it looks on your AI model. Then combine it with pieces from your e-wardrobe to build your perfect outfits.",
        },
        {
          title: "Your AI stylist",
          description:
            "Your AI stylist knows your style, your body and your wardrobe. It gives you advice, builds outfits for every occasion, packs your suitcase and finds any garment from a single photo thanks to item recognition.",
        },
        {
          title: "Our Feed",
          description:
            "Discover a personalized feed powered by an algorithm that understands your taste. Get inspired by the community's looks, share your own and, soon, earn rewards through our affiliate program.",
        },
      ],
    },
    ecosystem: {
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
      diversityTitle: "Build your model, strikingly real.",
      diversityDescription:
        "Generated from your own photo and measurements, for a try-on with size guidance that matches you. Try on any piece you want, build outfits straight from your wardrobe, and much more.",
    },
    vision: {
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
