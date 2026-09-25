#!/usr/bin/env node
// Bascule Stripe test -> live pour omnilearn.org, en une commande.
//
//   node deploy/stripe_live_setup.mjs            lecture seule : dit ce qui manque et ce qui serait cree
//   node deploy/stripe_live_setup.mjs --apply    cree produit, prix, webhook live puis met a jour les .env et relance pm2
//   node deploy/stripe_live_setup.mjs --test     meme lecture seule contre la cle test (calibrage du script)
//
// Entree : C:/Users/abidh/.claude/secrets/omnilearning-prod.env doit porter
// STRIPE_LIVE_SECRET_KEY (sk_live_ ou rk_live_) et STRIPE_LIVE_PUBLISHABLE_KEY (pk_live_).
// Aucune valeur secrete n'est jamais affichee.
// Idempotent : produit retrouve par metadata, prix par lookup_key, webhook par URL.

import fs from "node:fs";
import { execFileSync } from "node:child_process";

const SECRETS = "C:/Users/abidh/.claude/secrets/omnilearning-prod.env";
const SSH = ["-i", "C:/Users/abidh/.ssh/postiz_vps", "-o", "BatchMode=yes", "root@46.202.168.46"];
const REMOTE_ENV = "/opt/omnilearning/.env";
const WEBHOOK_URL = "https://omnilearn.org/api/stripe/webhook";
const STRIPE_VERSION = "2026-05-27.dahlia";
const EVENTS = [
  "checkout.session.completed",
  "checkout.session.expired",
  "charge.refunded",
  "account.updated",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
  "invoice.paid",
  "invoice.payment_failed",
  "invoice.payment_succeeded",
];
// Montants mensuels arrondis par devise, base USD. Meme grille que les prix test du 2026-09-25.
const TIERS = {
  soutien: { usd: 500, eur: 500, gbp: 400, cad: 700, aud: 800, chf: 500, aed: 1900, sar: 1900, mad: 5000 },
  mecene: { usd: 1500, eur: 1500, gbp: 1200, cad: 2000, aud: 2300, chf: 1400, aed: 5500, sar: 5600, mad: 15000 },
  partenaire: { usd: 5000, eur: 5000, gbp: 4000, cad: 7000, aud: 7500, chf: 4500, aed: 18500, sar: 19000, mad: 50000 },
};
const NICKNAMES = { soutien: "Soutien", mecene: "Mécène", partenaire: "Partenaire" };

const APPLY = process.argv.includes("--apply");
const TEST = process.argv.includes("--test");
if (APPLY && TEST) throw new Error("--apply et --test sont exclusifs");

const readEnv = (text) =>
  Object.fromEntries(
    text
      .split(/\r?\n/)
      .map((l) => l.match(/^([A-Z_]+)=(.*)$/))
      .filter(Boolean)
      .map((m) => [m[1], m[2].replace(/^["']|["']$/g, "")]),
  );
const env = readEnv(fs.readFileSync(SECRETS, "utf8"));
const key = TEST ? env.STRIPE_SECRET_KEY : env.STRIPE_LIVE_SECRET_KEY;
const pk = TEST ? env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY : env.STRIPE_LIVE_PUBLISHABLE_KEY;

const stop = (msg) => {
  console.log("STOP :", msg);
  process.exit(2);
};
if (!key) stop("STRIPE_LIVE_SECRET_KEY absente du fichier de secrets.");
if (!TEST && !/^(sk|rk)_live_/.test(key)) stop("STRIPE_LIVE_SECRET_KEY n'est pas une cle live.");
if (!TEST && !/^pk_live_/.test(pk || "")) stop("STRIPE_LIVE_PUBLISHABLE_KEY absente ou pas live.");

function form(obj, prefix = "") {
  return Object.entries(obj).flatMap(([k, v]) => {
    const name = prefix ? `${prefix}[${k}]` : k;
    if (Array.isArray(v)) return v.map((x, i) => `${encodeURIComponent(`${name}[${i}]`)}=${encodeURIComponent(x)}`);
    if (v && typeof v === "object") return form(v, name);
    return [`${encodeURIComponent(name)}=${encodeURIComponent(v)}`];
  });
}
async function api(method, path, body) {
  const r = await fetch("https://api.stripe.com/v1/" + path, {
    method,
    headers: {
      Authorization: "Bearer " + key,
      "Content-Type": "application/x-www-form-urlencoded",
      "Stripe-Version": STRIPE_VERSION,
    },
    body: body ? form(body).join("&") : undefined,
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`${method} ${path} -> ${r.status} ${j.error?.message}`);
  return j;
}

const acct = await api("GET", "account");
console.log(
  `compte ${acct.id} pays=${acct.country} devise=${acct.default_currency} charges=${acct.charges_enabled} virements=${acct.payouts_enabled}`,
);
if (!TEST && !acct.charges_enabled) stop("le compte live n'accepte pas encore de paiements (activation Stripe a finir).");

// Produit
const products = await api("GET", "products/search?query=" + encodeURIComponent("metadata['omnilearn_key']:'support'"));
let product = products.data[0];
if (!product && TEST) product = { id: "prod_UhCRcrY9AfRp7s" };
console.log("produit :", product ? product.id : "a creer");
if (!product && APPLY) {
  product = await api("POST", "products", {
    name: "Soutenir OmniLearn",
    metadata: { omnilearn_key: "support" },
  });
  console.log("  cree", product.id);
}

// Prix
const priceIds = {};
for (const [tier, amounts] of Object.entries(TIERS)) {
  const lk = `omnilearn_${tier}_monthly_usd`;
  const found = await api("GET", `prices?active=true&lookup_keys[0]=${lk}`);
  let price = found.data[0];
  console.log(`prix ${tier} :`, price ? `${price.id} (${price.currency} ${price.unit_amount})` : "a creer");
  if (!price && APPLY) {
    const { usd, ...others } = amounts;
    price = await api("POST", "prices", {
      product: product.id,
      currency: "usd",
      unit_amount: usd,
      recurring: { interval: "month" },
      lookup_key: lk,
      nickname: NICKNAMES[tier],
      currency_options: Object.fromEntries(Object.entries(others).map(([c, a]) => [c, { unit_amount: a }])),
    });
    console.log("  cree", price.id);
  }
  if (price) priceIds[tier] = price.id;
}

// Webhook : le secret de signature n'est rendu qu'a la creation.
const hooks = await api("GET", "webhook_endpoints?limit=100");
let hook = hooks.data.find((w) => w.url === WEBHOOK_URL && w.status === "enabled");
let hookSecret = null;
console.log("webhook :", hook ? `${hook.id} (${hook.enabled_events.length} evenements)` : "a creer");
if (hook && !TEST) {
  const missing = EVENTS.filter((e) => !hook.enabled_events.includes(e));
  if (missing.length) console.log("  evenements manquants :", missing.join(","));
  if (APPLY && !env.STRIPE_LIVE_WEBHOOK_SECRET)
    stop("webhook live deja present mais son secret n'est pas dans STRIPE_LIVE_WEBHOOK_SECRET ; le copier depuis le dashboard.");
  hookSecret = env.STRIPE_LIVE_WEBHOOK_SECRET;
}
if (!hook && APPLY) {
  hook = await api("POST", "webhook_endpoints", {
    url: WEBHOOK_URL,
    enabled_events: EVENTS,
    api_version: STRIPE_VERSION,
    description: "omnilearn.org",
  });
  hookSecret = hook.secret;
  console.log("  cree", hook.id);
}

if (!APPLY) {
  console.log("lecture seule, rien ecrit. Relancer avec --apply pour basculer.");
  process.exit(0);
}

// Ecriture des .env : les valeurs test sont gardees sous STRIPE_TEST_* pour un retour arriere.
const stamp = new Date().toISOString().slice(0, 10);
const live = {
  STRIPE_SECRET_KEY: key,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: pk,
  STRIPE_WEBHOOK_SECRET: hookSecret,
  STRIPE_PRICE_SOUTIEN: priceIds.soutien,
  STRIPE_PRICE_MECENE: priceIds.mecene,
  STRIPE_PRICE_PARTENAIRE: priceIds.partenaire,
};
function patch(text) {
  const cur = readEnv(text);
  let out = text;
  for (const [k, v] of Object.entries(live)) {
    if (!v) throw new Error(`valeur manquante pour ${k}`);
    if (cur[k] && !/_live_/.test(cur[k]) && !cur[`STRIPE_TEST_${k.replace(/^(NEXT_PUBLIC_)?STRIPE_/, "")}`])
      out += `\nSTRIPE_TEST_${k.replace(/^(NEXT_PUBLIC_)?STRIPE_/, "")}=${cur[k]}`;
    const re = new RegExp(`^${k}=.*$`, "m");
    out = re.test(out) ? out.replace(re, `${k}=${v}`) : out + `\n${k}=${v}`;
  }
  if (hookSecret && !/^STRIPE_LIVE_WEBHOOK_SECRET=/m.test(out)) out += `\nSTRIPE_LIVE_WEBHOOK_SECRET=${hookSecret}`;
  return out.endsWith("\n") ? out : out + "\n";
}

fs.copyFileSync(SECRETS, `${SECRETS}.bak-${stamp}-live`);
fs.writeFileSync(SECRETS, patch(fs.readFileSync(SECRETS, "utf8")));
const reread = readEnv(fs.readFileSync(SECRETS, "utf8"));
console.log("secrets locaux :", reread.STRIPE_SECRET_KEY === key ? "OK" : "ECART");

const ssh = (cmd, input) => execFileSync("ssh", [...SSH, cmd], { input, encoding: "utf8" });
const remote = ssh(`cp ${REMOTE_ENV} ${REMOTE_ENV}.bak-${stamp}-live && cat ${REMOTE_ENV}`);
ssh(`cat > ${REMOTE_ENV}`, patch(remote));
ssh(`cp ${REMOTE_ENV} /opt/omnilearning/.next/standalone/.env && bash /opt/omnilearning/deploy/start_pm2.sh >/dev/null`);
const check = readEnv(ssh(`cat ${REMOTE_ENV}`));
console.log("env VPS :", check.STRIPE_SECRET_KEY === key && check.STRIPE_PRICE_MECENE === priceIds.mecene ? "OK" : "ECART");
const health = await fetch("https://omnilearn.org/api/health");
console.log("sante :", health.status);
console.log("Bascule faite. Retour arriere : restaurer les fichiers .bak-" + stamp + "-live puis start_pm2.sh.");
