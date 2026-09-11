"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { siteUrl } from "@/lib/site";
import { splitAmount, MIN_PRICE_CENTS } from "@/lib/pricing";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL?.trim() || siteUrl;

/**
 * Codes d'erreur renvoyés à l'interface. Jamais une phrase : le catalogue est
 * trilingue, la phrase se lit dans le dictionnaire de la page.
 */
export type PurchaseError =
  | "paymentsOff"
  | "signInFirst"
  | "courseMissing"
  | "freeCourse"
  | "alreadyOwned"
  | "priceMissing"
  | "checkoutFailed";

export type PurchaseResult = { ok: false; error: PurchaseError };

const SUBMIT_NOTICE: Record<Locale, string> = {
  fr: "Accès immédiat au cours après paiement. Vous acceptez de perdre votre droit de rétractation dès la première leçon payante ouverte. Remboursement sur demande sous 14 jours tant qu'aucune leçon payante n'est ouverte.",
  en: "The course opens straight after payment. You accept losing your right of withdrawal once the first paid lesson is opened. Refund on request within 14 days as long as no paid lesson has been opened.",
  ar: "يُفتح الوصول إلى الدورة فور الدفع. وتقبل فقدان حقّ الانسحاب بمجرّد فتح أوّل درس مدفوع. ويمكن طلب الاسترداد خلال 14 يومًا ما دام لم يُفتح أي درس مدفوع.",
};

function submitNotice(locale: string): string {
  return SUBMIT_NOTICE[isLocale(locale) ? locale : defaultLocale];
}

function courseUrl(locale: string, slug: string, suffix = ""): string {
  const l: Locale = isLocale(locale) ? locale : defaultLocale;
  return `${APP_URL}/${l}/formations/${slug}${suffix}`;
}

/**
 * Achat unique d'une formation. Trois montages possibles selon l'état du
 * formateur :
 *
 * - formateur avec un compte Stripe Connect actif → charge de destination :
 *   l'argent arrive sur le compte plateforme, `application_fee_amount` retient
 *   la commission, le reste est reversé au formateur par Stripe.
 * - formateur sans compte connecté (ou cours de la maison) → encaissement
 *   plateforme simple, le partage se règle hors Stripe.
 *
 * Dans les deux cas le découpage est figé dans la ligne Purchase au moment de
 * l'achat : changer le barème plus tard ne réécrit pas les ventes passées.
 */
export async function createCoursePurchaseAction(
  slug: string,
  locale: string = defaultLocale,
): Promise<PurchaseResult> {
  const stripe = getStripe();
  if (!stripe) return { ok: false, error: "paymentsOff" };

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "signInFirst" };

  const course = await prisma.course.findUnique({
    where: { slug },
    select: {
      id: true,
      slug: true,
      title: true,
      tagline: true,
      i18n: true,
      accessType: true,
      priceCents: true,
      currency: true,
      revenueSharePct: true,
      instructorId: true,
      instructor: {
        select: {
          instructorProfile: {
            select: {
              stripeAccountId: true,
              chargesEnabled: true,
              revenueSharePct: true,
            },
          },
        },
      },
    },
  });
  if (!course) return { ok: false, error: "courseMissing" };
  if (course.accessType !== "PAID") return { ok: false, error: "freeCourse" };
  if (course.priceCents < MIN_PRICE_CENTS) return { ok: false, error: "priceMissing" };

  const existing = await prisma.purchase.findUnique({
    where: { userId_courseId: { userId, courseId: course.id } },
  });
  if (existing?.status === "paid") return { ok: false, error: "alreadyOwned" };

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return { ok: false, error: "signInFirst" };

  let customerId = user.stripeCustomerId;
  if (!customerId) {
    // Clé révoquée, compte suspendu, Stripe indisponible : l'appel jette. Sans
    // ce filet l'action serveur remonte une erreur brute et le bouton paraît
    // mort, l'acheteur ne sait pas quoi faire.
    let customer;
    try {
      customer = await stripe.customers.create({
        email: user.email,
        name: user.name ?? undefined,
        metadata: { userId },
      });
    } catch (e) {
      console.error("[achat] creation client Stripe refusee", e);
      return { ok: false, error: "checkoutFailed" };
    }
    customerId = customer.id;
    await prisma.user.update({
      where: { id: userId },
      data: { stripeCustomerId: customerId },
    });
  }

  const profile = course.instructor?.instructorProfile ?? null;
  const connected =
    profile?.stripeAccountId && profile.chargesEnabled ? profile.stripeAccountId : null;
  // Le taux du cours prime : il a été figé à la publication. Le profil ne sert
  // que de repli pour un cours créé avant l'existence du champ.
  const sharePct = course.revenueSharePct ?? profile?.revenueSharePct ?? 70;
  const { instructorAmountCents, platformFeeCents } = splitAmount(course.priceCents, sharePct);

  // Le titre de référence est en français ; les traductions vivent dans la
  // colonne i18n. Un JSON cassé ne doit jamais empêcher de payer : on retombe
  // sur le français.
  const tr = readTranslation(course.i18n, locale);
  const productName = tr.title || course.title || slug;
  const productDesc = tr.tagline || course.tagline || '';

  // Stripe Tax ne s'active pas depuis le code : tant que la TVA n'est pas
  // paramétrée côté compte, l'appel échoue. Le drapeau laisse basculer sans
  // redéployer, et l'adresse n'est demandée que si la taxe est calculée.
  const taxOn = process.env.STRIPE_AUTOMATIC_TAX === "1";

  let checkout: Stripe.Checkout.Session;
  try {
    checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: customerId,
      ...(taxOn
        ? {
            automatic_tax: { enabled: true },
            billing_address_collection: "required" as const,
          }
        : {}),
      // Livraison immédiate : la renonciation au délai de rétractation doit être
      // lue avant de payer, pas après.
      custom_text: { submit: { message: submitNotice(locale) } },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: course.currency,
            unit_amount: course.priceCents,
            product_data: {
              name: productName,
              ...(productDesc ? { description: productDesc.slice(0, 300) } : {}),
            },
          },
        },
      ],
      success_url: courseUrl(locale, slug, "?achat=ok"),
      cancel_url: courseUrl(locale, slug, "?achat=annule"),
      metadata: {
        kind: "course_purchase",
        userId,
        courseId: course.id,
        courseSlug: slug,
        sharePct: String(sharePct),
      },
      payment_intent_data: {
        metadata: {
          kind: "course_purchase",
          userId,
          courseId: course.id,
          courseSlug: slug,
        },
        ...(connected
          ? {
              transfer_data: { destination: connected },
              application_fee_amount: platformFeeCents,
            }
          : {}),
      },
    });
  } catch (e) {
    console.error("[achat] session de paiement refusee par Stripe", e);
    return { ok: false, error: "checkoutFailed" };
  }

  if (!checkout.url) return { ok: false, error: "checkoutFailed" };

  // Ligne "pending" écrite AVANT la redirection : si le webhook arrive avant le
  // retour du navigateur, il trouve la ligne à passer en "paid" au lieu d'en
  // créer une seconde.
  await prisma.purchase.upsert({
    where: { userId_courseId: { userId, courseId: course.id } },
    update: {
      status: "pending",
      amountCents: course.priceCents,
      currency: course.currency,
      platformFeeCents,
      instructorAmountCents,
      instructorAccountId: connected,
      stripeCheckoutSessionId: checkout.id,
    },
    create: {
      userId,
      courseId: course.id,
      status: "pending",
      amountCents: course.priceCents,
      currency: course.currency,
      platformFeeCents,
      instructorAmountCents,
      instructorAccountId: connected,
      stripeCheckoutSessionId: checkout.id,
    },
  });

  redirect(checkout.url);
}

/** Colonne i18n : { en: { title, tagline, … }, ar: { … } }. */
function readTranslation(
  raw: string | null | undefined,
  locale: string,
): { title?: string; tagline?: string } {
  if (!raw || locale === "fr") return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, { title?: string; tagline?: string }>;
    return parsed[locale] ?? {};
  } catch {
    return {};
  }
}
