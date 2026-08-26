"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getStripe, priceIdForTier, type SupportTier } from "@/lib/stripe";
import { siteUrl } from "@/lib/site";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

// Origine des URL de retour Stripe. En prod, `siteUrl` est verrouille sur le
// domaine de la plateforme ; l'override ne sert qu'au dev (localhost) et a une
// preprod. L'ancien defaut « localhost:3005 » renvoyait l'acheteur dans le vide
// des que la variable manquait sur le serveur.
const APP_URL = process.env.NEXT_PUBLIC_APP_URL?.trim() || siteUrl;

/**
 * Erreurs renvoyees a l'interface. Un CODE, pas une phrase : la page de soutien
 * existe en trois langues, et un anglophone qui clique « Support » n'a pas a
 * lire un message en francais au moment de payer.
 */
export type CheckoutError =
  | "paymentsOff"
  | "tierOff"
  | "signInFirst"
  | "accountMissing"
  | "checkoutFailed"
  | "noSubscription";

export type CheckoutResult = { ok: false; error: CheckoutError };

/** Page de retour apres paiement, dans la langue ou l'achat a ete lance. */
function supportUrl(locale: string, suffix = ""): string {
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  return `${APP_URL}/${l}/soutenir${suffix}`;
}

/**
 * Démarre un Checkout Stripe pour un palier d'abonnement, puis redirige vers
 * l'URL Stripe. Renvoie une erreur exploitable côté UI si Stripe n'est pas
 * encore configuré (mode démo) ou si l'utilisateur n'est pas connecté.
 */
export async function createCheckoutAction(
  tier: SupportTier,
  locale: string = defaultLocale,
): Promise<CheckoutResult> {
  const stripe = getStripe();
  if (!stripe) return { ok: false, error: "paymentsOff" };

  const priceId = priceIdForTier(tier);
  if (!priceId) return { ok: false, error: "tierOff" };

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "signInFirst" };

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return { ok: false, error: "accountMissing" };

  // Crée (ou réutilise) le client Stripe.
  let customerId = user.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name ?? undefined,
      metadata: { userId },
    });
    customerId = customer.id;
    await prisma.user.update({ where: { id: userId }, data: { stripeCustomerId: customerId } });
  }

  const checkout = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: supportUrl(locale, "?status=success"),
    cancel_url: supportUrl(locale, "?status=cancel"),
    metadata: { userId, tier },
    subscription_data: { metadata: { userId, tier } },
  });

  if (!checkout.url) return { ok: false, error: "checkoutFailed" };
  redirect(checkout.url);
}

/** Ouvre le portail client Stripe (gérer/annuler l'abonnement). */
export async function openBillingPortalAction(
  locale: string = defaultLocale,
): Promise<CheckoutResult> {
  const stripe = getStripe();
  if (!stripe) return { ok: false, error: "paymentsOff" };

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "signInFirst" };

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user?.stripeCustomerId) return { ok: false, error: "noSubscription" };

  const portal = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: supportUrl(locale),
  });
  redirect(portal.url);
}
