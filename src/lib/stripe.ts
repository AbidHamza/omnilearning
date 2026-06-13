import "server-only";
import Stripe from "stripe";

// Client Stripe paresseux : on ne le crée que si la clé est présente, pour que le
// build et le mode démo fonctionnent sans clé. Renvoie null si non configuré.
let cached: Stripe | null = null;

export function getStripe(): Stripe | null {
  if (cached) return cached;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  cached = new Stripe(key, { apiVersion: "2026-05-27.dahlia" });
  return cached;
}

export function stripeEnabled(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

// Paliers de la page "soutenir" -> price_id Stripe (depuis l'env).
export type SupportTier = "soutien" | "mecene" | "partenaire";

export function priceIdForTier(tier: SupportTier): string | undefined {
  switch (tier) {
    case "soutien":
      return process.env.STRIPE_PRICE_SOUTIEN || undefined;
    case "mecene":
      return process.env.STRIPE_PRICE_MECENE || undefined;
    case "partenaire":
      return process.env.STRIPE_PRICE_PARTENAIRE || undefined;
  }
}
