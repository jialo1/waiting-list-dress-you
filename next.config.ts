import type { NextConfig } from "next";

const SITE_HOST = "dressyouapp.com";

// La redirection de dygroup.co vers dressyouapp.com est désactivée tant que
// les serveurs de noms de dressyouapp.com ne sont pas revenus sur Vercel.
// Sans ça, les deux domaines tombent sur la page de parking GoDaddy.
const REDIRECT_OLD_DOMAIN = process.env.REDIRECT_OLD_DOMAIN === "1";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
  async redirects() {
    const rules = [
      // www vers le domaine nu, pour n'avoir qu'une seule adresse
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: `www\\.${SITE_HOST.replace(".", "\\.")}` }],
        destination: `https://${SITE_HOST}/:path*`,
        permanent: true,
      },
    ];

    if (REDIRECT_OLD_DOMAIN) {
      rules.unshift({
        source: "/:path*",
        has: [{ type: "host" as const, value: "(www\\.)?dygroup\\.co" }],
        destination: `https://${SITE_HOST}/:path*`,
        permanent: true,
      });
    }

    return rules;
  },
};

export default nextConfig;
