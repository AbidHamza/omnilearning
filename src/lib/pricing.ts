/**
 * Barème de la place de marché. Deux choses vivent ici, et rien d'autre :
 * le prix d'amorçage de chaque formation maison (posé une seule fois, à la
 * création de la ligne en base — l'admin reste maître du prix ensuite), et le
 * partage des recettes appliqué à une vente.
 *
 * Les montants sont en centimes. Un prix en flottant finit toujours par
 * produire un 58,99999999 $ quelque part dans une addition.
 */

export type AccessType = "FREE" | "PAID";

/** Part qui revient au formateur, en % de l'encaissement TTC. */
export const DEFAULT_REVENUE_SHARE_PCT = 70;

/**
 * Devise de référence de la place de marché. Stripe la veut en minuscules.
 * Le prix est posé en dollars ; Adaptive Pricing (actif sur le compte Stripe)
 * l'affiche et l'encaisse au Checkout dans la devise locale de l'acheteur.
 */
export const DEFAULT_CURRENCY = "usd";

/** Prix par niveau, en centimes. Sert d'amorçage, pas de règle figée. */
const PRICE_BY_LEVEL: Record<string, number> = {
  Débutant: 3900,
  Intermédiaire: 5900,
  Avancé: 8900,
};

/**
 * Formations maison laissées gratuites. Une porte d'entrée sans carte
 * bancaire : c'est elle qui crée le compte, l'achat vient après.
 */
const FREE_SLUGS = new Set(["creer-avec-ia-generative"]);

/** Prix d'amorçage d'une formation maison, d'après son slug et son niveau. */
export function seedPricing(slug: string, level: string): {
  accessType: AccessType;
  priceCents: number;
  currency: string;
} {
  if (FREE_SLUGS.has(slug)) {
    return { accessType: "FREE", priceCents: 0, currency: DEFAULT_CURRENCY };
  }
  return {
    accessType: "PAID",
    priceCents: PRICE_BY_LEVEL[level] ?? 5900,
    currency: DEFAULT_CURRENCY,
  };
}

/**
 * Découpage d'une vente. Arrondi à l'entier inférieur côté formateur : la
 * plateforme absorbe le centime restant plutôt que de reverser plus qu'elle
 * n'encaisse, ce que Stripe refuserait au moment du transfert.
 */
export function splitAmount(
  amountCents: number,
  revenueSharePct: number,
): { instructorAmountCents: number; platformFeeCents: number } {
  const pct = Math.min(100, Math.max(0, revenueSharePct));
  const instructorAmountCents = Math.floor((amountCents * pct) / 100);
  return {
    instructorAmountCents,
    platformFeeCents: amountCents - instructorAmountCents,
  };
}

/** Prix affiché. `locale` pilote le séparateur et la place du symbole. */
export function formatPrice(
  cents: number,
  currency = DEFAULT_CURRENCY,
  locale = "fr",
): string {
  const tag = locale === "ar" ? "ar" : locale === "en" ? "en" : "fr-FR";
  return new Intl.NumberFormat(tag, {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

/** Prix plancher accepté par Stripe en USD (0,50 $). En dessous : refus. */
export const MIN_PRICE_CENTS = 50;
/** Plafond de garde-fou côté formulaire (5 000 $). */
export const MAX_PRICE_CENTS = 500_000;
