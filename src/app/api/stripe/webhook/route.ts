import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

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
        const userId = s.metadata?.userId;
        const tier = s.metadata?.tier ?? "soutien";
        const subId = typeof s.subscription === "string" ? s.subscription : s.subscription?.id;
        if (userId && subId) {
          const sub = await stripe.subscriptions.retrieve(subId);
          await upsertSubscription(userId, tier, sub);
        }
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
