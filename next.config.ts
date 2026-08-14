import type { NextConfig } from "next";

const SITE_HOST = "dressyouapp.com";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
  async redirects() {
    return [
      // l'ancien domaine renvoie vers le nouveau, en conservant le chemin
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?dygroup\\.co" }],
        destination: `https://${SITE_HOST}/:path*`,
        permanent: true,
      },
      // www vers le domaine nu, pour n'avoir qu'une seule adresse
      {
        source: "/:path*",
        has: [{ type: "host", value: `www\\.${SITE_HOST.replace(".", "\\.")}` }],
        destination: `https://${SITE_HOST}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
