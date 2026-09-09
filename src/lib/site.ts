// Constantes globales du site, partagées par les métadonnées, le sitemap et le manifeste.
// Domaine canonique = omnilearn.org (plateforme e-learning). Ne concerne QUE le SEO
// (canonical/og/sitemap), jamais l'authentification (AUTH_URL vit dans l'environnement).
import { defaultLocale, locales, type Locale } from "@/i18n/config";

const CANONICAL_ORIGIN = "https://omnilearn.org";

// omnilearning.tech est un AUTRE site (activité conseil). Une prod a tourné des mois
// avec NEXT_PUBLIC_SITE_URL pointant dessus : chaque page de la plateforme se déclarait
// dupliquée d'une URL qui rend 404, et le sitemap listait 33 URL du mauvais domaine.
// L'override reste possible pour une préprod, mais ce domaine-là est refusé.
const FORBIDDEN_HOSTS = ["omnilearning.tech"];

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return CANONICAL_ORIGIN;
  try {
    const host = new URL(raw).hostname.replace(/^www\./, "");
    if (FORBIDDEN_HOSTS.includes(host)) return CANONICAL_ORIGIN;
  } catch {
    return CANONICAL_ORIGIN;
  }
  return raw.replace(/\/$/, "");
}

export const siteUrl = resolveSiteUrl();
export const siteName = "OmniLearn";

/**
 * Alternates d'une page : canonique AUTO-RÉFÉRENTE + hreflang des trois langues.
 *
 * À poser page par page, jamais dans un layout : une `alternates.canonical`
 * déclarée dans `[lang]/layout.tsx` est héritée par toutes les pages filles qui
 * ne redéfinissent pas `generateMetadata` : c'est ce qui a fait déclarer à
 * /fr/formations/cybersecurite qu'elle était un doublon de /fr.
 *
 * `path` est le chemin SANS préfixe de locale : "" pour l'accueil,
 * "/formations/prompt-engineering-ia" pour une fiche cours.
 */
export function alternatesFor(locale: Locale, path = "") {
  const clean = path && !path.startsWith("/") ? `/${path}` : path;
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}${clean}`]),
  );
  languages["x-default"] = `${siteUrl}/${defaultLocale}${clean}`;
  return { canonical: `${siteUrl}/${locale}${clean}`, languages };
}

/**
 * Carte de partage, une par langue, rendue depuis la charte de l'interface
 * (fond charbon, vert phosphore, JetBrains Mono). Les chiffres qu'elle affiche
 * sont ceux du catalogue publié.
 *
 * À reposer dans CHAQUE `openGraph` de page : Next remplace l'objet du layout
 * au lieu de le compléter, donc une page qui déclare son og:url sans image
 * perd la carte et ressort en bloc gris sur LinkedIn ou WhatsApp.
 */
const shareAlt: Record<Locale, string> = {
  fr: "OmniLearn · 12 formations, 295 leçons, 73 heures",
  en: "OmniLearn · 12 courses, 295 lessons, 73 hours",
  ar: "OmniLearn · 12 دورة و295 درسًا و73 ساعة",
};

export function shareCard(locale: Locale) {
  return {
    url: `${siteUrl}/og-${locale}.png`,
    width: 1200,
    height: 630,
    alt: shareAlt[locale],
    type: "image/png",
  };
}

/** URL absolue d'une page dans une langue donnée (og:url, JSON-LD, sitemap). */
export function pageUrl(locale: Locale, path = ""): string {
  const clean = path && !path.startsWith("/") ? `/${path}` : path;
  return `${siteUrl}/${locale}${clean}`;
}
