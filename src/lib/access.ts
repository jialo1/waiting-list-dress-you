export const ACCESS_COOKIE = "dy_access";

/**
 * Mot de passe d'accès au site.
 * Défini via la variable d'environnement SITE_PASSWORD sur Vercel.
 */
export function sitePassword(): string {
  return process.env.SITE_PASSWORD ?? "";
}
