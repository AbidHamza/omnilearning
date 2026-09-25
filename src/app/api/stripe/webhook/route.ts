import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import { DEFAULT_CURRENCY } from "@/lib/pricing";

// Webhook Stripe : synchronise l'état des abonnements en DB.
// Endpoint à déclarer dans le dashboard Stripe : <APP_URL>/api/stripe/webhook.

export async function POST(req: Request) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !webhookSecret) {
    return new Response("Stripe non configuré", { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) return new Response("Signature manquante", { status: 400 });

  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "signature invalide";
    return new Response(`Webhook error: ${msg}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const s = event.data.object as Stripe.Checkout.Session;
        // Deux tunnels passent par cet évènement : l'abonnement de soutien et
        // l'achat d'une formation. Le mode de la session tranche, pas le hasard
        // des métadonnées.
        if (s.mode === "payment" && s.metadata?.kind === "course_purchase") {
          await fulfillCoursePurchase(s);
          break;
        }
        const userId = s.metadata?.userId;
        const tier = s.metadata?.tier ?? "soutien";
        const subId = typeof s.subscription === "string" ? s.subscription : s.subscription?.id;
        if (userId && subId) {
          const sub = await stripe.subscriptions.retrieve(subId);
          await upsertSubscription(userId, tier, sub);
        }
        break;
      }
      case "checkout.session.expired": {
        const s = event.data.object as Stripe.Checkout.Session;
        if (s.metadata?.kind === "course_purchase") {
          // Session abandonnée : la ligne "pending" ne doit pas rester à traîner
          // et bloquer un nouvel essai d'achat.
          await prisma.purchase.deleteMany({
            where: { stripeCheckoutSessionId: s.id, status: "pending" },
          });
        }
        break;
      }
      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;
        const piId =
          typeof charge.payment_intent === "string"
            ? charge.payment_intent
            : charge.payment_intent?.id;
        if (piId) await revokeCoursePurchase(piId);
        break;
      }
      case "account.updated": {
        const account = event.data.object as Stripe.Account;
        await syncConnectAccount(account);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.userId ?? (await userIdFromCustomer(sub.customer));
        const tier = sub.metadata?.tier ?? "soutien";
        if (userId) await upsertSubscription(userId, tier, sub);
        break;
      }
      default:
        break;
    }
  } catch (err) {
    console.error("Stripe webhook handling error", err);
    return new Response("handler error", { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

async function userIdFromCustomer(
  customer: string | Stripe.Customer | Stripe.DeletedCustomer,
): Promise<string | null> {
  const customerId = typeof customer === "string" ? customer : customer.id;
  const user = await prisma.user.findUnique({ where: { stripeCustomerId: customerId } });
  return user?.id ?? null;
}

async function upsertSubscription(userId: string, tier: string, sub: Stripe.Subscription) {
  const priceId = sub.items.data[0]?.price.id ?? null;
  // periodEnd : présent sur l'item d'abonnement.
  const periodEnd = sub.items.data[0]?.current_period_end;
  await prisma.subscription.upsert({
    where: { stripeSubscriptionId: sub.id },
    update: {
      tier,
      status: sub.status,
      stripePriceId: priceId,
      currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
    },
    create: {
      userId,
      tier,
      stripeSubscriptionId: sub.id,
      stripePriceId: priceId,
      status: sub.status,
      currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
    },
  });
}

/**
 * Achat confirmé : la ligne Purchase passe à "paid" et l'inscription au cours
 * est créée dans la foulée, pour que l'acheteur retrouve le cours dans son
 * tableau de bord sans avoir à cliquer « s'inscrire ».
 *
 * Idempotent : Stripe rejoue un évènement autant de fois qu'il le juge utile,
 * et un rejeu ne doit ni dupliquer l'inscription ni réécrire la date de
 * paiement.
 */
async function fulfillCoursePurchase(s: Stripe.Checkout.Session) {
  const userId = s.metadata?.userId;
  const courseId = s.metadata?.courseId;
  if (!userId || !courseId) return;
  if (s.payment_status !== "paid") return;

  const paymentIntentId =
    typeof s.payment_intent === "string" ? s.payment_intent : s.payment_intent?.id;

  const existing = await prisma.purchase.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });
  if (existing?.status === "paid") return;

  const amountCents = s.amount_total ?? existing?.amountCents ?? 0;
  const currency = s.currency ?? existing?.currency ?? DEFAULT_CURRENCY;

  await prisma.purchase.upsert({
    where: { userId_courseId: { userId, courseId } },
    update: {
      status: "paid",
      amountCents,
      currency,
      stripeCheckoutSessionId: s.id,
      stripePaymentIntentId: paymentIntentId ?? null,
      paidAt: new Date(),
      refundedAt: null,
    },
    create: {
      userId,
      courseId,
      status: "paid",
      amountCents,
      currency,
      stripeCheckoutSessionId: s.id,
      stripePaymentIntentId: paymentIntentId ?? null,
      paidAt: new Date(),
    },
  });

  await prisma.enrollment.upsert({
    where: { userId_courseId: { userId, courseId } },
    update: {},
    create: { userId, courseId },
  });
}

/** Remboursement : l'accès se referme, la ligne reste pour la comptabilité. */
async function revokeCoursePurchase(paymentIntentId: string) {
  const purchase = await prisma.purchase.findUnique({
    where: { stripePaymentIntentId: paymentIntentId },
  });
  if (!purchase || purchase.status === "refunded") return;
  await prisma.purchase.update({
    where: { id: purchase.id },
    data: { status: "refunded", refundedAt: new Date() },
  });
}

/**
 * Compte Stripe Connect d'un formateur : on recopie les trois drapeaux qui
 * décident si on peut lui envoyer de l'argent. `charges_enabled` seul ne suffit
 * pas, un compte peut encaisser sans pouvoir être viré.
 */
async function syncConnectAccount(account: Stripe.Account) {
  const profile = await prisma.instructorProfile.findUnique({
    where: { stripeAccountId: account.id },
  });
  if (!profile) return;
  await prisma.instructorProfile.update({
    where: { id: profile.id },
    data: {
      chargesEnabled: Boolean(account.charges_enabled),
      payoutsEnabled: Boolean(account.payouts_enabled),
      detailsSubmitted: Boolean(account.details_submitted),
    },
  });
}
