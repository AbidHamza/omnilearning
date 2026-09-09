"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getStripe } from "@/lib/stripe";
import { siteUrl } from "@/lib/site";
import { DEFAULT_REVENUE_SHARE_PCT } from "@/lib/pricing";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL?.trim() || siteUrl;

/** Codes rendus à l'interface ; la phrase se lit dans le dictionnaire. */
export type ConnectError =
  | "paymentsOff"
  | "signInFirst"
  | "notInstructor"
  | "noProfile"
  | "notApproved"
  | "noAccount"
  | "linkFailed";

export type ConnectResult = { ok: false; error: ConnectError };

function localeOf(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

function dashboardUrl(locale: string, suffix = ""): string {
  return `${APP_URL}/${localeOf(locale)}/formateur${suffix}`;
}

/**
 * Ouvre ou reprend l'inscription Stripe Connect (compte Express) du formateur.
 *
 * Le compte appartient au formateur, pas à la plateforme : c'est lui qui saisit
 * son identité, son IBAN et ses informations fiscales chez Stripe. Tant que
 * `charges_enabled` n'est pas revenu vrai par l'événement `account.updated`,
 * l'achat d'une de ses formations reste encaissé par la plateforme sans
 * reversement automatique — le code de `purchase.ts` en dépend.
 *
 * Le lien d'inscription Stripe est à usage unique et expire vite : on le
 * régénère à chaque appel plutôt que de le stocker.
 */
export async function startConnectOnboardingAction(
  locale: string = defaultLocale,
): Promise<ConnectResult> {
  const stripe = getStripe();
  if (!stripe) return { ok: false, error: "paymentsOff" };

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "signInFirst" };
  if (session.user.role !== "INSTRUCTOR" && session.user.role !== "ADMIN") {
    return { ok: false, error: "notInstructor" };
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      email: true,
      name: true,
      instructorProfile: {
        select: {
          id: true,
          applicationStatus: true,
          stripeAccountId: true,
          country: true,
          displayName: true,
        },
      },
    },
  });
  if (!user) return { ok: false, error: "signInFirst" };

  // Un admin ou un formateur promu à la main peut ne pas avoir de fiche : on la
  // crée déjà approuvée, son rôle valant décision.
  let profile = user.instructorProfile;
  if (!profile) {
    profile = await prisma.instructorProfile.create({
      data: {
        userId,
        displayName: user.name?.trim() || user.email,
        applicationStatus: "APPROVED",
        revenueSharePct: DEFAULT_REVENUE_SHARE_PCT,
        reviewedAt: new Date(),
      },
      select: {
        id: true,
        applicationStatus: true,
        stripeAccountId: true,
        country: true,
        displayName: true,
      },
    });
  }
  if (profile.applicationStatus !== "APPROVED") {
    return { ok: false, error: "notApproved" };
  }

  let accountId = profile.stripeAccountId;
  if (!accountId) {
    try {
      const account = await stripe.accounts.create({
        type: "express",
        country: profile.country || "FR",
        email: user.email,
        business_type: "individual",
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
        business_profile: {
          name: profile.displayName,
          product_description: "Formations en ligne vendues sur OmniLearning.",
        },
        metadata: { userId, profileId: profile.id },
      });
      accountId = account.id;
      await prisma.instructorProfile.update({
        where: { id: profile.id },
        data: { stripeAccountId: accountId },
      });
    } catch {
      return { ok: false, error: "linkFailed" };
    }
  }

  let url: string;
  try {
    const link = await stripe.accountLinks.create({
      account: accountId,
      // refresh_url est rappelé quand le lien a expiré : il renvoie sur le
      // tableau de bord, d'où le formateur relance l'action et reçoit un lien neuf.
      refresh_url: dashboardUrl(locale, "?connect=reprendre"),
      return_url: dashboardUrl(locale, "?connect=retour"),
      type: "account_onboarding",
    });
    url = link.url;
  } catch {
    return { ok: false, error: "linkFailed" };
  }

  redirect(url);
}

/**
 * Ouvre le tableau de bord Stripe Express du formateur (versements, pièces
 * justificatives, coordonnées bancaires). Ne marche qu'une fois le compte créé.
 */
export async function openConnectDashboardAction(
  locale: string = defaultLocale,
): Promise<ConnectResult> {
  const stripe = getStripe();
  if (!stripe) return { ok: false, error: "paymentsOff" };

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "signInFirst" };

  const profile = await prisma.instructorProfile.findUnique({
    where: { userId },
    select: { stripeAccountId: true },
  });
  if (!profile?.stripeAccountId) return { ok: false, error: "noAccount" };

  let url: string;
  try {
    const link = await stripe.accounts.createLoginLink(profile.stripeAccountId);
    url = link.url;
  } catch {
    return { ok: false, error: "linkFailed" };
  }

  redirect(url);
}

/**
 * Rapatrie l'état réel du compte Connect depuis Stripe et le recopie dans la
 * fiche. Le webhook `account.updated` fait déjà ce travail ; cette action sert
 * au retour d'inscription, quand le formateur revient avant que l'événement
 * n'ait été reçu.
 */
export async function refreshConnectStatusAction(
  locale: string = defaultLocale,
): Promise<ConnectResult | { ok: true }> {
  const stripe = getStripe();
  if (!stripe) return { ok: false, error: "paymentsOff" };

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "signInFirst" };

  const profile = await prisma.instructorProfile.findUnique({
    where: { userId },
    select: { id: true, stripeAccountId: true },
  });
  if (!profile?.stripeAccountId) return { ok: false, error: "noAccount" };

  try {
    const account = await stripe.accounts.retrieve(profile.stripeAccountId);
    await prisma.instructorProfile.update({
      where: { id: profile.id },
      data: {
        chargesEnabled: account.charges_enabled ?? false,
        payoutsEnabled: account.payouts_enabled ?? false,
        detailsSubmitted: account.details_submitted ?? false,
      },
    });
  } catch {
    return { ok: false, error: "linkFailed" };
  }

  revalidatePath(`/${localeOf(locale)}/formateur`);
  return { ok: true };
}
