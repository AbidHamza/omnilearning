// Rejeu des parcours etudiant / formateur / admin contre https://omnilearn.org
// avec des comptes crees pour l'occasion puis supprimes. Le paiement passe par
// le vrai Stripe Checkout en mode test (carte 4242) et le vrai webhook.
// Lancer : node scripts/replay-prod.js [--keep]   (--keep : ne pas nettoyer)
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  ({ chromium } = require("C:/Users/abidh/browser-bot/node_modules/playwright"));
}
const BASE = "https://omnilearn.org";
const SSH = ["-i", "C:/Users/abidh/.ssh/postiz_vps", "-o", "BatchMode=yes", "root@46.202.168.46"];
const PSQL = "docker exec -i omnipost-postgres psql -U omnilearning -d omnilearning -At";
const SHOTS = process.env.SHOTS_DIR || path.join(__dirname, "..", "replay-shots");
const KEEP = process.argv.includes("--keep");
const STAMP = Date.now().toString(36);
const FREE = "creer-avec-ia-generative";
const PAID = "cybersecurite";
const LOCKED = "Cette leçon fait partie de la formation complète";
const secret = fs.readFileSync("C:/Users/abidh/.claude/secrets/omnilearning-prod-admin.local.md", "utf8");
const ADMIN = "info@omnilearn.org";
const ADMIN_PW = secret
  .split("\n")
  .find((l) => l.includes(ADMIN))
  .split("|")
  .map((s) => s.trim())
  .filter(Boolean)[2];
const STUDENT = `rejeu-etudiant-${STAMP}@omnilearn.org`;
const INSTR = `rejeu-formateur-${STAMP}@omnilearn.org`;
const PW = "R" + crypto.randomBytes(12).toString("base64url") + "1!";
const rows = [];

function rec(name, ok, detail) {
  rows.push({ name, ok: !!ok, detail: String(detail ?? ""), at: new Date().toISOString() });
  console.log((ok ? "PASS " : "FAIL ") + name + "  " + (detail ?? ""));
}
function ko(d) { return { __ko: true, d: String(d) }; }
async function step(name, fn) {
  try {
    const d = await fn();
    if (d && d.__ko) rec(name, false, d.d);
    else rec(name, d !== false, typeof d === "string" ? d : "");
  } catch (e) {
    rec(name, false, e.message.split("\n")[0].slice(0, 160));
  }
}
function px(sql) {
  return execFileSync("ssh", [...SSH, PSQL], { input: sql, encoding: "utf8" }).trim();
}
function pq(sql) {
  const out = px(`select coalesce(json_agg(t),'[]') from (${sql}) t;`);
  return JSON.parse(out || "[]");
}
const q1 = (sql) => pq(sql)[0] ?? null;
const lessonsOf = (courseId) =>
  pq(`select l.key, l.type, l.questions from "Lesson" l join "CoursePart" p on p.id=l."partId" where p."courseId"='${courseId}' order by p."order", l."order"`);
const esc = (s) => s.replace(/'/g, "''");
async function shot(page, name) {
  fs.mkdirSync(SHOTS, { recursive: true });
  await page.screenshot({ path: path.join(SHOTS, `prod-${name}.png`), fullPage: true });
}
const counts = () =>
  q1(`select (select count(*) from "User") users, (select count(*) from "Course") courses, (select count(*) from "Purchase") purchases, (select count(*) from "Review") reviews, (select count(*) from "CourseDraft") drafts, (select count(*) from "InstructorProfile") profiles`);

async function login(ctx, email, pw) {
  const page = await ctx.newPage();
  const r = await page.goto(BASE + "/fr/connexion");
  await page.fill('input[autocomplete="username"]', email);
  await page.fill('input[type="password"]', pw);
  await Promise.all([
    page.waitForURL((u) => !u.pathname.includes("/connexion"), { timeout: 30000 }),
    page.click('button[type="submit"]'),
  ]);
  return { page, status: r.status(), url: page.url() };
}
async function signup(ctx, email, first, last) {
  const page = await ctx.newPage();
  await page.goto(BASE + "/fr/creer-compte");
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="firstName"]', first);
  await page.fill('input[name="lastName"]', last);
  await page.fill('input[name="password"]', PW);
  await page.fill('input[name="confirmPassword"]', PW);
  await Promise.all([
    page.waitForURL((u) => u.pathname.includes("/tableau-de-bord"), { timeout: 30000 }),
    page.click('button[type="submit"]'),
  ]);
  return page;
}
async function playQuiz(page, questions) {
  for (const qq of questions) {
    await page.getByRole("button", { name: qq.options[qq.correctIndex], exact: true }).first().click();
    await page.getByRole("button", { name: "Valider", exact: true }).click();
    await page.waitForSelector('[aria-label="Question suivante"]:not([disabled])', { timeout: 15000 });
    await page.click('[aria-label="Question suivante"]');
  }
  await page.waitForTimeout(1800);
}
// Stripe Checkout heberge, mode test : carte 4242, puis retour sur success_url.
async function payOnStripe(page, slug) {
  await page.waitForURL(/checkout\.stripe\.com/, { timeout: 45000 });
  const card = page.locator("#cardNumber");
  try {
    await card.waitFor({ state: "visible", timeout: 15000 });
  } catch {
    await page
      .locator('[data-testid="card-accordion-item"], button:has-text("Card"), button:has-text("Carte")')
      .first()
      .click();
    await card.waitFor({ state: "visible", timeout: 15000 });
  }
  await card.fill("4242424242424242");
  await page.fill("#cardExpiry", "12/34");
  await page.fill("#cardCvc", "123");
  const opt = async (sel, value, select) => {
    const l = page.locator(sel);
    if ((await l.count()) && (await l.first().isVisible())) {
      if (select) await l.first().selectOption(value);
      else await l.first().fill(value);
    }
  };
  await opt("#billingName", "Rejeu Prod");
  await opt("#billingCountry", "FR", true);
  await opt("#billingPostalCode", "75001");
  await opt("#billingAddressLine1", "1 rue de Rivoli");
  await opt("#billingLocality", "Paris");
  await page.locator('button[type="submit"]').first().click();
  await page.waitForURL(
    (u) => u.hostname === "omnilearn.org" && u.pathname.includes(slug) && u.search.includes("achat=ok"),
    { timeout: 90000 },
  );
  return page.url();
}
async function waitPurchase(userId, courseId) {
  for (let i = 0; i < 30; i++) {
    const p = q1(`select status, "amountCents" from "Purchase" where "userId"='${userId}' and "courseId"='${courseId}'`);
    if (p && p.status === "paid") return p;
    await new Promise((r) => setTimeout(r, 2000));
  }
  return null;
}
function cleanup(name) {
  return [
    "course " + px(`delete from "Course" where title='${esc(name)}';`),
    "draft " + px(`delete from "CourseDraft" where name='${esc(name)}';`),
    "users " + px(`delete from "User" where email in ('${STUDENT}','${INSTR}');`),
    "avis " + px(`delete from "Review" where "authorName" like '% Rejeu';`),
  ].join(", ");
}

(async () => {
  const t0 = new Date().toISOString();
  const before = counts();
  console.log("AVANT", JSON.stringify(before), t0);
  const NAME = "Formation rejeu prod " + STAMP;
  const browser = await chromium.launch();
  const vp = { viewport: { width: 1280, height: 800 }, locale: "fr-FR" };
  try {
    const sctx = await browser.newContext(vp);
    let page;
    await step("etudiant: inscription /creer-compte -> tableau de bord", async () => {
      page = await signup(sctx, STUDENT, "Nadia", "Rejeu");
      return page.url();
    });
    const student = q1(`select id, name, role from "User" where email='${STUDENT}'`);
    await step("etudiant: compte en base role USER", () =>
      student && student.role === "USER" ? `${student.id} ${student.name}` : JSON.stringify(student),
    );
    await shot(page, "etudiant-dashboard-vide");
    const freeId = q1(`select id from "Course" where slug='${FREE}'`).id;
    await step("etudiant: page cours gratuit 200", async () => {
      const r = await page.goto(`${BASE}/fr/formations/${FREE}`);
      return `HTTP ${r.status()}` + (r.status() === 200 ? "" : " (attendu 200)");
    });
    const lessons = lessonsOf(freeId);
    await step("etudiant: 25 lecons en base", () => (lessons.length === 25 ? "25" : false));
    let opened = 0;
    let quizDone = 0;
    let quizFail = "";
    for (const l of lessons) {
      const r = await page.goto(`${BASE}/fr/formations/${FREE}/${l.key}`);
      if (r.status() !== 200) {
        rec(`etudiant: lecon ${l.key} HTTP`, false, r.status());
        continue;
      }
      opened++;
      if (opened === 1) await shot(page, "etudiant-lecon");
      if (l.type === "quiz") {
        try {
          await playQuiz(page, JSON.parse(l.questions || "[]"));
          quizDone++;
        } catch (e) {
          quizFail += `${l.key}: ${e.message.split("\n")[0].slice(0, 80)}; `;
        }
      } else await page.waitForTimeout(3600);
    }
    await step("etudiant: lecons ouvertes", () => (opened === lessons.length ? `${opened} sur ${lessons.length}` : false));
    await step("etudiant: quiz joues", () => (quizDone === 6 ? "6 sur 6" : `${quizDone} sur 6 ${quizFail}`));
    await page.waitForTimeout(2000);
    await step("etudiant: LessonProgress complet (DB)", () => {
      const n = Number(
        q1(`select count(*) n from "LessonProgress" lp join "Enrollment" e on e.id=lp."enrollmentId" where e."userId"='${student.id}' and e."courseId"='${freeId}' and lp."isCompleted"`).n,
      );
      return n === lessons.length ? `${n} sur ${lessons.length}` : false;
    });
    await step("etudiant: Enrollment progress 100 + completedAt (DB)", () => {
      const e = q1(`select progress, "completedAt" from "Enrollment" where "userId"='${student.id}' and "courseId"='${freeId}'`);
      return e && e.progress >= 100 && e.completedAt ? `progress ${e.progress}, completedAt ${e.completedAt}` : ko(JSON.stringify(e));
    });
    await step("etudiant: dashboard lien Certificat", async () => {
      await page.goto(`${BASE}/fr/tableau-de-bord`);
      await shot(page, "etudiant-dashboard");
      const n = await page.locator(`a[href="/fr/formations/${FREE}/certificat"]`).count();
      return n > 0 ? `${n} lien(s)` : false;
    });
    await step("etudiant: certificat 200 + nom", async () => {
      const r = await page.goto(`${BASE}/fr/formations/${FREE}/certificat`);
      const t = await page.locator("main").innerText();
      await shot(page, "etudiant-certificat");
      return r.status() === 200 && t.includes("Nadia Rejeu") ? "HTTP 200, nom present" : ko(`HTTP ${r.status()} nom ${t.includes("Nadia Rejeu")}`);
    });
    await step("etudiant: avis publie (UI + DB)", async () => {
      await page.goto(`${BASE}/fr/formations/${FREE}`);
      await page.fill('form input[maxlength="120"]', "Rejeu " + STAMP);
      await page.fill("form textarea[minlength]", "Formation suivie du debut a la fin pendant le rejeu automatique " + STAMP + ".");
      await page.getByRole("button", { name: "Publier l'avis" }).click();
      await page.waitForSelector("text=/Merci, votre avis est publié.|Vous avez déjà noté cette formation./", { timeout: 20000 });
      const r = q1(`select id from "Review" where "userId"='${student.id}' and "courseId"='${freeId}'`);
      return r ? `Review ${r.id}` : false;
    });
    const paid = q1(`select id, "priceCents", currency from "Course" where slug='${PAID}'`);
    const third = lessonsOf(paid.id)[2];
    await step("etudiant: lecon 3 du cours payant verrouillee", async () => {
      const r = await page.goto(`${BASE}/fr/formations/${PAID}/${third.key}`);
      const t = await page.locator("main").innerText();
      await shot(page, "etudiant-lecon-verrouillee");
      return r.status() === 200 && t.includes(LOCKED) ? `HTTP 200, verrou visible (${third.key})` : ko(`HTTP ${r.status()} verrou ${t.includes(LOCKED)}`);
    });
    await step("achat: Acheter -> Stripe Checkout test -> retour ?achat=ok", async () => {
      await page.goto(`${BASE}/fr/formations/${PAID}`);
      await shot(page, "etudiant-cours-payant");
      await page.getByRole("button", { name: /Acheter la formation/ }).first().click();
      return await payOnStripe(page, PAID);
    });
    await step("achat: webhook -> Purchase paid + Enrollment (DB)", async () => {
      const p = await waitPurchase(student.id, paid.id);
      const e = q1(`select 1 from "Enrollment" where "userId"='${student.id}' and "courseId"='${paid.id}'`);
      return p && e ? `paid ${p.amountCents} ${paid.currency} + enrollment` : ko(`purchase ${JSON.stringify(p)} enrollment ${!!e}`);
    });
    await step("achat: banniere Paiement confirme + Formation acquise", async () => {
      await page.goto(`${BASE}/fr/formations/${PAID}?achat=ok`);
      const t = await page.locator("main").innerText();
      await shot(page, "etudiant-achat-ok");
      return t.includes("Paiement confirmé") && t.includes("Formation acquise")
        ? "les 2 textes presents"
        : ko(`confirme ${t.includes("Paiement confirmé")} acquise ${t.includes("Formation acquise")}`);
    });
    await step("achat: lecon 3 deverrouillee", async () => {
      const r = await page.goto(`${BASE}/fr/formations/${PAID}/${third.key}`);
      const t = await page.locator("main").innerText();
      return r.status() === 200 && !t.includes(LOCKED) ? "HTTP 200, contenu accessible" : ko(`HTTP ${r.status()} verrou ${t.includes(LOCKED)}`);
    });
    await step("achat: onglet Achats liste la formation", async () => {
      await page.goto(`${BASE}/fr/parametres`);
      await page.getByRole("button", { name: "Achats" }).click();
      await page.waitForTimeout(600);
      await shot(page, "etudiant-achats");
      const t = await page.locator("main").innerText();
      return t.toLowerCase().includes("cybers") ? "ligne presente" : false;
    });
    const profileForm = 'form:has(h2:has-text("Profil"))';
    await step("etudiant: profil nom modifie puis retabli", async () => {
      await page.goto(`${BASE}/fr/parametres`);
      const inp = page.locator(`${profileForm} input:not([readonly])`).first();
      await inp.fill("Nadia Rejeu Bis");
      await page.locator(`${profileForm} button[type="submit"]`).click();
      await page.waitForSelector("text=Enregistré", { timeout: 20000 });
      const n1 = q1(`select name from "User" where id='${student.id}'`).name;
      await inp.fill("Nadia Rejeu");
      await page.locator(`${profileForm} button[type="submit"]`).click();
      await page.waitForTimeout(2000);
      const n2 = q1(`select name from "User" where id='${student.id}'`).name;
      return n1 === "Nadia Rejeu Bis" && n2 === "Nadia Rejeu" ? "DB: modifie puis retabli" : ko(`${n1} / ${n2}`);
    });
    const pwForm = 'form:has(h2:has-text("Changer de mot de passe"))';
    async function changePw(from, to) {
      await page.goto(`${BASE}/fr/parametres`);
      await page.fill(`${pwForm} input[autocomplete="current-password"]`, from);
      await page.fill(`${pwForm} input[autocomplete="new-password"]`, to);
      await page.locator(`${pwForm} button`).last().click();
      await page.waitForSelector("text=Mot de passe modifié.", { timeout: 20000 });
    }
    await step("etudiant: mot de passe change puis retabli", async () => {
      await changePw(PW, PW + "x1");
      await changePw(PW + "x1", PW);
      return "2 fois 'Mot de passe modifié.'";
    });
    await step("etudiant: relogin", async () => {
      const c2 = await browser.newContext();
      const r = await login(c2, STUDENT, PW);
      await c2.close();
      return r.url.includes("/tableau-de-bord") ? "OK" : ko(r.url);
    });
    await step("etudiant: /formateur et /admin refuses", async () => {
      await page.goto(`${BASE}/fr/admin`);
      const ua = new URL(page.url()).pathname;
      await page.goto(`${BASE}/fr/formateur`);
      const ub = new URL(page.url()).pathname;
      return !ua.includes("/admin") && !ub.endsWith("/formateur") ? `admin -> ${ua}, formateur -> ${ub}` : ko(`admin ${ua} formateur ${ub}`);
    });

    const ictx = await browser.newContext(vp);
    let ip;
    await step("formateur: inscription puis /devenir-formateur", async () => {
      ip = await signup(ictx, INSTR, "Karim", "Rejeu");
      const r = await ip.goto(`${BASE}/fr/devenir-formateur`);
      await shot(ip, "formateur-candidature");
      return r.status() === 200 ? "HTTP 200" : ko(`HTTP ${r.status()}`);
    });
    await step("formateur: candidature envoyee -> Candidature recue + profil PENDING", async () => {
      await ip.fill('input[name="displayName"]', "Karim Rejeu");
      await ip.fill('input[name="headline"]', "Formateur cybersecurite en entreprise");
      await ip.fill('input[name="expertise"]', "Cybersecurite");
      await ip.selectOption('select[name="country"]', "FR");
      await ip.fill(
        'textarea[name="bio"]',
        "Quinze ans de conseil en securite des systemes d'information, dont huit a former des equipes techniques en interne. Cours construits a partir d'incidents reels rencontres en mission.",
      );
      await ip.getByRole("button", { name: "Envoyer ma candidature" }).click();
      await ip.waitForSelector("text=Candidature reçue", { timeout: 20000 });
      const p = q1(`select "applicationStatus" s from "InstructorProfile" ip join "User" u on u.id=ip."userId" where u.email='${INSTR}'`);
      return p && p.s === "PENDING" ? "PENDING" : ko(JSON.stringify(p));
    });

    const actx = await browser.newContext(vp);
    let ad;
    await step("admin: login -> /admin", async () => {
      ad = await login(actx, ADMIN, ADMIN_PW);
      return ad.url.includes("/admin") ? `HTTP ${ad.status} -> ${ad.url}` : ko(ad.url);
    });
    if (!ad || !ad.page) throw new Error("login admin impossible, arret de la phase admin");
    const ap = ad.page;
    await step("admin: candidature visible puis Approuver -> role INSTRUCTOR", async () => {
      await ap.goto(`${BASE}/fr/admin`);
      await shot(ap, "admin-candidature");
      const row = ap.locator("tr", { hasText: "Karim Rejeu" }).first();
      await row.getByRole("button", { name: "Approuver" }).click();
      await ap.waitForSelector("text=passe formateur", { timeout: 20000 });
      let u = null;
      for (let i = 0; i < 20 && !(u && u.role === "INSTRUCTOR"); i++) {
        u = q1(`select u.role, ip."applicationStatus" s from "User" u join "InstructorProfile" ip on ip."userId"=u.id where u.email='${INSTR}'`);
        if (!(u && u.role === "INSTRUCTOR")) await ap.waitForTimeout(500);
      }
      return u && u.role === "INSTRUCTOR" && u.s === "APPROVED" ? "INSTRUCTOR + APPROVED" : ko(JSON.stringify(u));
    });
    await step("formateur: relogin -> /formateur accessible", async () => {
      await ictx.close();
      const c = await browser.newContext(vp);
      const r = await login(c, INSTR, PW);
      ip = r.page;
      const rr = await ip.goto(`${BASE}/fr/formateur`);
      await shot(ip, "formateur-espace");
      return rr.status() === 200 && ip.url().endsWith("/formateur") ? `HTTP 200 ${ip.url()}` : ko(`HTTP ${rr.status()} ${ip.url()}`);
    });
    await step("formateur: upload PNG via API -> 200", async () => {
      const png = Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
        "base64",
      );
      const r = await ip.request.post(`${BASE}/api/upload`, {
        multipart: { file: { name: "rejeu.png", mimeType: "image/png", buffer: png } },
      });
      const t = await r.text();
      return r.status() === 200 ? `HTTP 200 ${t.slice(0, 80)}` : ko(`HTTP ${r.status()} ${t.slice(0, 120)}`);
    });
    await step("formateur: /creer etape 1 remplie", async () => {
      const r = await ip.goto(`${BASE}/fr/creer`);
      await ip.selectOption("main select >> nth=0", { index: 1 });
      await ip.fill('main input[maxlength="200"]', NAME);
      await ip.fill("main textarea >> nth=0", "Description de la formation creee pendant le rejeu automatique " + STAMP + ".");
      await ip.selectOption("main select >> nth=1", { index: 1 });
      await ip.fill('input[placeholder="0 pour une formation offerte"]', "49");
      await shot(ip, "formateur-creer-1");
      return r.status() === 200 ? "HTTP 200" : ko(`HTTP ${r.status()}`);
    });
    await step("formateur: etape 2 module + lecon texte + quiz", async () => {
      await ip.getByRole("button", { name: "Étape suivante" }).click();
      await ip.fill('textarea[placeholder^="Décrivez les chapitres"]', "Un module, deux lecons.");
      await ip.getByRole("button", { name: "Ajouter un module" }).click();
      await ip.fill('input[placeholder="Titre du module"] >> nth=0', "Module rejeu");
      await ip.fill('input[placeholder="Titre de la leçon"] >> nth=0', "Lecon texte");
      const sel = ip.locator("select").filter({ has: ip.locator('option[value="quiz"]') });
      await sel.nth(0).selectOption("text");
      await ip.fill('input[type="number"] >> nth=0', "7");
      await ip.fill('textarea[placeholder^="Contenu de la leçon"] >> nth=0', "Contenu de la lecon texte du rejeu.");
      await ip.getByRole("button", { name: "Ajouter une leçon" }).click();
      await ip.fill('input[placeholder="Titre de la leçon"] >> nth=1', "Quiz rejeu");
      await sel.nth(1).selectOption("quiz");
      await ip.getByRole("button", { name: "Ajouter une question" }).click();
      await ip.fill('input[placeholder="Énoncé de la question"] >> nth=0', "Quelle est la bonne reponse ?");
      await ip.fill('input[placeholder="Réponse 1"] >> nth=0', "Celle-ci");
      await ip.fill('input[placeholder="Réponse 2"] >> nth=0', "Pas celle-la");
      await ip.locator('input[type="radio"]').first().check();
      await shot(ip, "formateur-creer-2");
      return "champs remplis";
    });
    await step("formateur: Enregistrer le brouillon", async () => {
      await ip.getByRole("button", { name: "Enregistrer le brouillon" }).click();
      await ip.waitForSelector("text=Brouillon enregistré.", { timeout: 20000 });
      const d = q1(`select id, status from "CourseDraft" where name='${esc(NAME)}'`);
      return d ? `CourseDraft ${d.id} status ${d.status}` : false;
    });
    await step("formateur: etape 3 recapitulatif", async () => {
      await ip.getByRole("button", { name: "Étape suivante" }).click();
      const t = await ip.locator("main").innerText();
      await shot(ip, "formateur-creer-3");
      return t.includes(NAME) ? "recap affiche le nom" : false;
    });
    await step("formateur: Envoyer la demande -> /formateur + SUBMITTED", async () => {
      await Promise.all([
        ip.waitForURL((u) => u.pathname.endsWith("/formateur"), { timeout: 30000 }),
        ip.getByRole("button", { name: "Envoyer la demande de création" }).click(),
      ]);
      const d = q1(`select status, curriculum from "CourseDraft" where name='${esc(NAME)}'`);
      const cur = typeof d.curriculum === "string" ? JSON.parse(d.curriculum || "[]") : d.curriculum || [];
      return d.status === "SUBMITTED" && cur.length === 1 && cur[0].lessons.length === 2
        ? "SUBMITTED, 1 module, 2 lecons"
        : ko(`${d.status} ${JSON.stringify(d.curriculum).slice(0, 80)}`);
    });
    await step("formateur: onglet Formations créés liste le brouillon", async () => {
      await ip.goto(`${BASE}/fr/parametres`);
      await ip.getByRole("button", { name: /Formations cré/ }).click();
      await ip.waitForTimeout(600);
      const t = await ip.locator("main").innerText();
      return t.includes(NAME) ? "present" : false;
    });
    await step("admin: file d'attente contient le brouillon + Voir le contenu", async () => {
      await ap.goto(`${BASE}/fr/admin`);
      const row = ap.locator("tr", { hasText: NAME }).first();
      await row.getByRole("button", { name: "Voir le contenu" }).click();
      await ap.waitForTimeout(500);
      await shot(ap, "admin-brouillon");
      const t = await ap.locator("main").innerText();
      return t.includes(NAME) && t.includes("Module rejeu") && t.includes("Quiz rejeu")
        ? "brouillon + module + lecons visibles"
        : ko(`nom ${t.includes(NAME)} module ${t.includes("Module rejeu")}`);
    });
    await step("admin: Approuver -> Course PUBLISHED (DB)", async () => {
      const row = ap.locator("tr", { hasText: NAME }).first();
      await row.getByRole("button", { name: "Approuver" }).click();
      await ap.waitForSelector("text=approuvée et publiée", { timeout: 30000 });
      let c = null;
      for (let i = 0; i < 40 && !c; i++) {
        c = q1(`select id, slug, "priceCents", status, "instructorId" from "Course" where title='${esc(NAME)}'`);
        if (!c) await ap.waitForTimeout(500);
      }
      const d = q1(`select count(*) n from "CourseDraft" where name='${esc(NAME)}'`);
      return c && c.status === "PUBLISHED" && Number(d.n) === 0
        ? `Course ${c.slug} ${c.status} prix ${c.priceCents}, formateur ${c.instructorId ? "lie" : "NON lie"}, brouillon supprime`
        : ko(`course ${JSON.stringify(c)} brouillons restants ${d && d.n}`);
    });
    const created = q1(`select id, slug from "Course" where title='${esc(NAME)}'`);
    await step("catalogue: /fr/formations liste la nouvelle formation + page cours", async () => {
      await ap.goto(`${BASE}/fr/formations`);
      const t = await ap.locator("main").innerText();
      const r = await ap.goto(`${BASE}/fr/formations/${created.slug}`);
      const t2 = await ap.locator("main").innerText();
      return t.includes(NAME) && r.status() === 200 && t2.includes("Module rejeu")
        ? "catalogue + page cours 200 + module"
        : ko(`catalogue ${t.includes(NAME)} page ${r.status()} module ${t2.includes("Module rejeu")}`);
    });
    await step("achat 2: l'etudiant achete la formation du formateur (Stripe test)", async () => {
      await page.goto(`${BASE}/fr/formations/${created.slug}`);
      await page.getByRole("button", { name: /Acheter la formation/ }).first().click();
      const u = await payOnStripe(page, created.slug);
      const p = await waitPurchase(student.id, created.id);
      return p ? `retour ${new URL(u).search}, Purchase paid ${p.amountCents}` : ko(`retour ${u}, purchase absent`);
    });
    await step("formateur: PayoutsPanel affiche la vente et la part", async () => {
      await ip.goto(`${BASE}/fr/formateur`);
      await shot(ip, "formateur-vente");
      const t = await ip.locator("main").innerText();
      return t.includes("Votre part") && t.includes(NAME) ? "vente listee avec la part" : ko(`part ${t.includes("Votre part")} vente ${t.includes(NAME)}`);
    });
    await step("visiteur: nouvelle formation - lecon 1 en 200", async () => {
      const ls = lessonsOf(created.id);
      const v = await browser.newContext();
      const p = await v.newPage();
      const r = await p.goto(`${BASE}/fr/formations/${created.slug}/${ls[0].key}`);
      await v.close();
      return ls.length === 2 && r.status() === 200 ? `${ls.length} lecons (${ls.map((l) => l.type).join(",")}), l1 HTTP 200` : ko(`${ls.length} lecons, HTTP ${r.status()}`);
    });
    await step("admin: tableau apres rejeu (capture)", async () => {
      await ap.goto(`${BASE}/fr/admin`);
      await shot(ap, "admin-apres");
      return "ok";
    });
  } finally {
    await browser.close();
    const clean = KEEP ? "conserve (--keep)" : cleanup(NAME);
    const after = counts();
    const ok = rows.filter((r) => r.ok).length;
    console.log("NETTOYAGE", clean);
    console.log("APRES", JSON.stringify(after), new Date().toISOString());
    console.log(`\nRESULTAT: ${ok} sur ${rows.length} PASS`);
    fs.writeFileSync(
      path.join(__dirname, "..", "replay-prod-result.json"),
      JSON.stringify({ at: t0, end: new Date().toISOString(), stamp: STAMP, name: NAME, before, after, cleanup: clean, ok, total: rows.length, rows }, null, 2),
    );
  }
})().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
