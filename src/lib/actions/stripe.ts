"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getStripe, priceIdForTier, type SupportTier } from "@/lib/stripe";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3005";

export type CheckoutResult = { ok: false; error: string };

/**
 * Démarre un Checkout Stripe pour un palier d'abonnement, puis redirige vers
 * l'URL Stripe. Renvoie une erreur exploitable côté UI si Stripe n'est pas
 * encore configuré (mode démo) ou si l'utilisateur n'est pas connecté.
 */
export async function createCheckoutAction(tier: SupportTier): Promise<CheckoutResult> {
  const stripe = getStripe();
  if (!stripe) {
    return { ok: false, error: "Les paiements ne sont pas encore activés. Réessayez plus tard." };
  }

  const priceId = priceIdForTier(tier);
  if (!priceId) {
    return { ok: false, error: "Ce palier n'est pas encore configuré." };
  }

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return { ok: false, error: "Connectez-vous pour soutenir la plateforme." };
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return { ok: false, error: "Compte introuvable." };

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
    success_url: `${APP_URL}/fr/soutenir?status=success`,
    cancel_url: `${APP_URL}/fr/soutenir?status=cancel`,
    metadata: { userId, tier },
    subscription_data: { metadata: { userId, tier } },
  });

  if (!checkout.url) {
    return { ok: false, error: "Impossible de démarrer le paiement." };
  }
  redirect(checkout.url);
}

/** Ouvre le portail client Stripe (gérer/annuler l'abonnement). */
export async function openBillingPortalAction(): Promise<CheckoutResult> {
  const stripe = getStripe();
  if (!stripe) return { ok: false, error: "Paiements non activés." };

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "Connectez-vous d'abord." };

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user?.stripeCustomerId) {
    return { ok: false, error: "Aucun abonnement à gérer." };
  }

  const portal = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${APP_URL}/fr/soutenir`,
  });
  redirect(portal.url);
}
