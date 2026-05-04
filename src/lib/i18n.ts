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
  features: {
    eyebrow: string;
    title: string;
    items: ReadonlyArray<{ title: string; description: string }>;
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
