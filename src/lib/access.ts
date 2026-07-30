export const ACCESS_COOKIE = "dy_access";

/**
 * Mots de passe d'accès au site.
 * Définis via SITE_PASSWORD sur Vercel, séparés par des virgules.
 * Ex : SITE_PASSWORD="stationf,blast"
 */
export function sitePasswords(): string[] {
  return (process.env.SITE_PASSWORD ?? "")
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
}

export function isValidPassword(value: string): boolean {
  if (!value) return false;
  return sitePasswords().includes(value);
}
