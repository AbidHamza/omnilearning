export const locales = ["fr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

// Sens d'écriture : l'arabe se lit de droite à gauche.
export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Nom du cookie lu par le proxy (middleware) pour mémoriser la langue choisie. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Persiste la locale choisie dans un cookie (1 an) afin que le proxy serve la
 * bonne langue aux prochaines visites. Côté client uniquement ; sans effet si
 * `document` est indisponible. Isolé ici (hors composant) pour ne pas heurter
 * les règles d'immutabilité du React Compiler sur `document.cookie`.
 */
export function setLocaleCookie(locale: Locale): void {
  if (typeof document === "undefined") return;
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${oneYear};samesite=lax`;
}

/**
 * Préfixe un chemin interne par la locale active.
 * Les liens externes, ancres et mailto sont laissés intacts.
 */
export function localePath(locale: Locale, path: string): string {
  if (!path.startsWith("/")) return path; // http(s), #, mailto…
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Retire le préfixe de locale d'un chemin (ex: /fr/formations -> /formations). */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}
