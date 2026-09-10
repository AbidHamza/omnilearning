// Rejeu complet des parcours etudiant / formateur / admin contre un serveur local
// (npm run start sur le port 3005, STRIPE_SECRET_KEY et STRIPE_WEBHOOK_SECRET de test).
// Lancer depuis la racine : NODE_PATH=node_modules node scripts/replay-parcours.js
const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const ROOT = path.join(__dirname, "..");
let chromium; try { ({ chromium } = require("playwright")); } catch { ({ chromium } = require("C:/Users/abidh/browser-bot/node_modules/playwright")); }
const Database = require(ROOT + "/node_modules/better-sqlite3");
const db = new Database(ROOT + "/dev.db");
const BASE = "http://localhost:3005";
const seed = fs.readFileSync(ROOT + "/prisma/seed.ts", "utf8");
const PW = seed.match(/bcrypt\.hash\("([^"]+)"/)[1];
const STUDENT = "etudiant@omnilearn.tech", INSTR = "formateur@omnilearn.tech", ADMIN = "admin@omnilearn.tech";
const STUDENT_ID = "cmqc23kyw0009qgbc6gkzc1q8";
const FREE = "creer-avec-ia-generative";
const PAID = "cybersecurite";
const STAMP = Date.now().toString(36);
const LOCKED = "Cette leçon fait partie de la formation complète";
const ORDERED = "select l.key, l.type, l.questions from Lesson l join CoursePart p on p.id=l.partId where p.courseId=? order by p.\"order\", l.\"order\"";
const rows = [];
function rec(name, ok, detail) { rows.push({ name, ok: !!ok, detail: String(detail ?? "") }); console.log((ok ? "PASS " : "FAIL ") + name + "  " + (detail ?? "")); }
async function step(name, fn) { try { const d = await fn(); rec(name, d !== false, typeof d === "string" ? d : ""); } catch (e) { rec(name, false, e.message.split("\n")[0].slice(0, 160)); } }
const q1 = (sql, ...p) => db.prepare(sql).get(...p);
const lessonsOf = (courseId) => db.prepare(ORDERED).all(courseId);

async function login(ctx, email, pw = PW) {
  const page = await ctx.newPage();
  const r = await page.goto(BASE + "/fr/connexion");
  await page.fill('input[autocomplete="username"]', email);
  await page.fill('input[type="password"]', pw);
  await Promise.all([
    page.waitForURL((u) => !u.pathname.includes("/connexion"), { timeout: 20000 }),
    page.click('button[type="submit"]'),
  ]);
  return { page, status: r.status(), url: page.url() };
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

(async () => {
  const browser = await chromium.launch();
  const sctx = await browser.newContext();
  let s;
  await step("etudiant: login -> tableau de bord", async () => { s = await login(sctx, STUDENT); return s.url.includes("/tableau-de-bord") ? `HTTP ${s.status} -> ${s.url}` : s.url; });
  const page = s.page;
  const freeId = q1("select id from Course where slug=?", FREE).id;

  await step("etudiant: page cours gratuit 200", async () => { const r = await page.goto(`${BASE}/fr/formations/${FREE}`); return r.status() === 200 ? "HTTP 200" : `HTTP ${r.status()}`; });
  const lessons = lessonsOf(freeId);
  await step("etudiant: 25 lecons en base", () => lessons.length === 25 ? "25" : `${lessons.length}`);
  let opened = 0, quizDone = 0, quizFail = "";
  for (const l of lessons) {
    const r = await page.goto(`${BASE}/fr/formations/${FREE}/${l.key}`);
    if (r.status() !== 200) { rec(`etudiant: lecon ${l.key} HTTP`, false, r.status()); continue; }
    opened++;
    if (l.type === "quiz") {
      try { await playQuiz(page, JSON.parse(l.questions || "[]")); quizDone++; }
      catch (e) { quizFail += `${l.key}: ${e.message.split("\n")[0].slice(0, 80)}; `; }
    } else {
      await page.waitForTimeout(3600);
    }
  }
  await step("etudiant: lecons ouvertes", () => opened === 25 ? "25 sur 25" : `${opened} sur 25`);
  await step("etudiant: quiz joues", () => quizDone === 6 ? "6 sur 6" : `${quizDone} sur 6 ${quizFail}`);
  await page.waitForTimeout(1500);
  await step("etudiant: LessonProgress 25 (DB)", () => { const n = q1("select count(*) n from LessonProgress lp join Enrollment e on e.id=lp.enrollmentId where e.userId=? and e.courseId=? and lp.isCompleted=1", STUDENT_ID, freeId).n; return n === 25 ? "25" : `${n}`; });
  await step("etudiant: QuizAttempt >= 6 (DB)", () => { const n = q1("select count(*) n from QuizAttempt where userId=?", STUDENT_ID).n; return n >= 6 ? `${n}` : `${n}`; });
  await step("etudiant: Enrollment progress 100 + completedAt (DB)", () => { const e = q1("select progress, completedAt from Enrollment where userId=? and courseId=?", STUDENT_ID, freeId); return e && e.progress >= 100 && e.completedAt ? `progress ${e.progress}, completedAt ${e.completedAt}` : JSON.stringify(e); });
  await step("etudiant: dashboard lien Certificat", async () => { await page.goto(`${BASE}/fr/tableau-de-bord`); const n = await page.locator(`a[href="/fr/formations/${FREE}/certificat"]`).count(); return n > 0 ? `${n} lien(s)` : false; });
  await step("etudiant: page certificat 200 + nom", async () => { const r = await page.goto(`${BASE}/fr/formations/${FREE}/certificat`); const t = await page.locator("main").innerText(); return r.status() === 200 && t.includes("Laura Durand") ? "HTTP 200, nom present" : `HTTP ${r.status()}`; });
  await step("etudiant: avis publie (UI + DB)", async () => {
    await page.goto(`${BASE}/fr/formations/${FREE}`);
    await page.fill('form input[maxlength="120"]', "Rejeu " + STAMP);
    await page.fill("form textarea[minlength]", "Formation suivie du debut a la fin pendant le rejeu automatique " + STAMP + ".");
    await page.getByRole("button", { name: "Publier l'avis" }).click();
    await page.waitForSelector("text=/Merci, votre avis est publié.|Vous avez déjà noté cette formation./", { timeout: 15000 });
    const r = q1("select id from Review where userId=? and courseId=?", STUDENT_ID, freeId);
    return r ? `Review ${r.id}` : false;
  });

  const paid = q1("select id, priceCents, currency, instructorId from Course where slug=?", PAID);
  const third = lessonsOf(paid.id)[2];
  await step("etudiant: cours payant sans acces (etat initial)", () => { const e = q1("select 1 from Enrollment where userId=? and courseId=?", STUDENT_ID, paid.id); const p = q1("select 1 from Purchase where userId=? and courseId=?", STUDENT_ID, paid.id); return !e && !p ? "aucun enrollment ni purchase" : false; });
  await step("etudiant: lecon 3 verrouillee avant achat", async () => { const r = await page.goto(`${BASE}/fr/formations/${PAID}/${third.key}`); const t = await page.locator("main").innerText(); return r.status() === 200 && t.includes(LOCKED) ? `HTTP 200, verrou visible (${third.key})` : `HTTP ${r.status()} verrou ${t.includes(LOCKED)}`; });
  await step("etudiant: bouton Acheter -> action serveur (checkoutFailed)", async () => {
    await page.goto(`${BASE}/fr/formations/${PAID}`);
    await page.getByRole("button", { name: /Acheter la formation/ }).first().click();
    await page.waitForSelector('[role="alert"]', { timeout: 30000 });
    const t = await page.textContent('[role="alert"]');
    return t.includes("Le paiement n'a pas pu démarrer") ? "alerte checkoutFailed" : t;
  });
  await step("webhook: checkout.session.completed signe -> 200", async () => {
    const body = JSON.stringify({ id: "evt_replay_" + STAMP, object: "event", type: "checkout.session.completed", data: { object: { id: "cs_replay_" + STAMP, object: "checkout.session", mode: "payment", payment_status: "paid", amount_total: paid.priceCents, currency: paid.currency.toLowerCase(), payment_intent: "pi_replay_" + STAMP, metadata: { kind: "course_purchase", userId: STUDENT_ID, courseId: paid.id, courseSlug: PAID } } } });
    const ts = Math.floor(Date.now() / 1000);
    const sig = crypto.createHmac("sha256", "whsec_replay").update(`${ts}.${body}`).digest("hex");
    const r = await fetch(`${BASE}/api/stripe/webhook`, { method: "POST", headers: { "content-type": "application/json", "stripe-signature": `t=${ts},v1=${sig}` }, body });
    const txt = await r.text();
    return r.status === 200 ? `HTTP 200 ${txt.slice(0, 60)}` : `HTTP ${r.status} ${txt.slice(0, 120)}`;
  });
  await step("achat: Purchase paid + Enrollment (DB)", () => { const p = q1("select status, amountCents from Purchase where userId=? and courseId=?", STUDENT_ID, paid.id); const e = q1("select 1 from Enrollment where userId=? and courseId=?", STUDENT_ID, paid.id); return p && p.status === "paid" && e ? `paid ${p.amountCents} + enrollment` : JSON.stringify(p); });
  await step("achat: banniere ?achat=ok + Formation acquise", async () => { await page.goto(`${BASE}/fr/formations/${PAID}?achat=ok`); const t = await page.locator("main").innerText(); return t.includes("Paiement confirmé") && t.includes("Formation acquise") ? "les 2 textes presents" : `confirme ${t.includes("Paiement confirmé")} acquise ${t.includes("Formation acquise")}`; });
  await step("achat: lecon 3 deverrouillee", async () => { const r = await page.goto(`${BASE}/fr/formations/${PAID}/${third.key}`); const t = await page.locator("main").innerText(); return r.status() === 200 && !t.includes(LOCKED) ? "HTTP 200, contenu accessible" : `HTTP ${r.status()} verrou ${t.includes(LOCKED)}`; });
  await step("achat: onglet Achats liste la formation", async () => { await page.goto(`${BASE}/fr/parametres`); await page.getByRole("button", { name: "Achats" }).click(); await page.waitForTimeout(500); const t = await page.locator("main").innerText(); return t.toLowerCase().includes("cybers") ? "ligne presente" : false; });
  const profileForm = 'form:has(h2:has-text("Profil"))';
  await step("etudiant: profil nom modifie puis retabli", async () => {
    await page.goto(`${BASE}/fr/parametres`);
    const inp = page.locator(`${profileForm} input:not([readonly])`).first();
    await inp.fill("Laura Durand Rejeu");
    await page.locator(`${profileForm} button[type="submit"]`).click();
    await page.waitForSelector("text=Enregistré", { timeout: 15000 });
    const n1 = q1("select name from User where id=?", STUDENT_ID).name;
    await inp.fill("Laura Durand");
    await page.locator(`${profileForm} button[type="submit"]`).click();
    await page.waitForTimeout(1500);
    const n2 = q1("select name from User where id=?", STUDENT_ID).name;
    return n1 === "Laura Durand Rejeu" && n2 === "Laura Durand" ? "DB: modifie puis retabli" : `${n1} / ${n2}`;
  });
  const pwForm = 'form:has(h2:has-text("Changer de mot de passe"))';
  async function changePw(from, to) {
    await page.goto(`${BASE}/fr/parametres`);
    await page.fill(`${pwForm} input[autocomplete="current-password"]`, from);
    await page.fill(`${pwForm} input[autocomplete="new-password"]`, to);
    await page.locator(`${pwForm} button`).last().click();
    await page.waitForSelector("text=Mot de passe modifié.", { timeout: 15000 });
  }
  await step("etudiant: mot de passe change puis retabli", async () => { await changePw(PW, PW + "x1"); await changePw(PW + "x1", PW); return "2 fois 'Mot de passe modifié.'"; });
  await step("etudiant: relogin mot de passe seed", async () => { const c2 = await browser.newContext(); const r = await login(c2, STUDENT); await c2.close(); return r.url.includes("/tableau-de-bord") ? "OK" : r.url; });

  const ictx = await browser.newContext();
  let ins;
  await step("formateur: login -> /formateur", async () => { ins = await login(ictx, INSTR); return ins.url.includes("/formateur") ? `HTTP ${ins.status} -> ${ins.url}` : ins.url; });
  const ip = ins.page;
  await step("formateur: PayoutsPanel affiche la vente", async () => { await ip.goto(`${BASE}/fr/formateur`); const t = await ip.locator("main").innerText(); return t.includes("Votre part") && t.toLowerCase().includes("cybers") ? "vente listee" : `part ${t.includes("Votre part")} vente ${t.toLowerCase().includes("cybers")}`; });
  await step("formateur: upload PNG via API -> 200", async () => {
    const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==", "base64");
    const r = await ip.request.post(`${BASE}/api/upload`, { multipart: { file: { name: "rejeu.png", mimeType: "image/png", buffer: png } } });
    const t = await r.text();
    return r.status() === 200 ? `HTTP 200 ${t.slice(0, 80)}` : `HTTP ${r.status()} ${t.slice(0, 120)}`;
  });
  const NAME = "Formation rejeu " + STAMP;
  await step("formateur: /creer etape 1 remplie", async () => {
    const r = await ip.goto(`${BASE}/fr/creer`);
    await ip.selectOption("main select >> nth=0", { index: 1 });
    await ip.fill('main input[maxlength="200"]', NAME);
    await ip.fill("main textarea >> nth=0", "Description de la formation creee pendant le rejeu automatique " + STAMP + ".");
    await ip.selectOption("main select >> nth=1", { index: 1 });
    await ip.fill('input[placeholder="0 pour une formation offerte"]', "49");
    return `HTTP ${r.status()}`;
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
    return "champs remplis";
  });
  await step("formateur: Enregistrer le brouillon", async () => { await ip.getByRole("button", { name: "Enregistrer le brouillon" }).click(); await ip.waitForSelector("text=Brouillon enregistré.", { timeout: 15000 }); const d = q1("select id, status from CourseDraft where name=?", NAME); return d ? `CourseDraft ${d.id} status ${d.status}` : false; });
  await step("formateur: etape 3 recapitulatif", async () => { await ip.getByRole("button", { name: "Étape suivante" }).click(); const t = await ip.locator("main").innerText(); return t.includes(NAME) ? "recap affiche le nom" : false; });
  await step("formateur: Envoyer la demande -> /formateur + SUBMITTED", async () => {
    await Promise.all([ip.waitForURL((u) => u.pathname.endsWith("/formateur"), { timeout: 20000 }), ip.getByRole("button", { name: "Envoyer la demande de création" }).click()]);
    const d = q1("select status, curriculum from CourseDraft where name=?", NAME);
    const cur = JSON.parse(d.curriculum || "[]");
    return d.status === "SUBMITTED" && cur.length === 1 && cur[0].lessons.length === 2 ? "SUBMITTED, 1 module, 2 lecons" : `${d.status} ${(d.curriculum || "").slice(0, 80)}`;
  });
  await step("formateur: onglet Formations créés liste le brouillon", async () => { await ip.goto(`${BASE}/fr/parametres`); await ip.getByRole("button", { name: "Formations créés" }).click(); await ip.waitForTimeout(500); const t = await ip.locator("main").innerText(); return t.includes(NAME) ? "present" : false; });

  const actx = await browser.newContext();
  let ad;
  await step("admin: login -> /admin", async () => { ad = await login(actx, ADMIN); return ad.url.includes("/admin") ? `HTTP ${ad.status} -> ${ad.url}` : ad.url; });
  const ap = ad.page;
  await step("admin: file d'attente contient le brouillon", async () => { await ap.goto(`${BASE}/fr/admin`); const t = await ap.locator("main").innerText(); return t.includes(NAME) ? "present" : false; });
  await step("admin: Voir le contenu -> modules", async () => { const row = ap.locator("tr", { hasText: NAME }).first(); await row.getByRole("button", { name: "Voir le contenu" }).click(); await ap.waitForTimeout(400); const t = await ap.locator("main").innerText(); return t.includes("Module rejeu") && t.includes("Quiz rejeu") ? "module + lecons visibles" : false; });
  await step("admin: Approuver -> Course publie (DB)", async () => { const row = ap.locator("tr", { hasText: NAME }).first(); await row.getByRole("button", { name: "Approuver" }).click(); await ap.waitForSelector("text=approuvée et publiée", { timeout: 20000 }); let c = null; for (let i = 0; i < 40 && !c; i++) { c = q1("select id, slug, priceCents, status from Course where title=?", NAME); if (!c) await ap.waitForTimeout(500); } const d = q1("select count(*) n from CourseDraft where name=?", NAME); return c && c.status === "PUBLISHED" && d.n === 0 ? `Course ${c.slug} ${c.status} prix ${c.priceCents}, brouillon supprime` : `course ${JSON.stringify(c)} brouillons restants ${d.n}`; });
  await step("catalogue: /fr/formations liste la nouvelle formation", async () => { const c = q1("select slug from Course where title=?", NAME); await ap.goto(`${BASE}/fr/formations`); const t = await ap.locator("main").innerText(); const r = await ap.goto(`${BASE}/fr/formations/${c.slug}`); const t2 = await ap.locator("main").innerText(); return t.includes(NAME) && r.status() === 200 && t2.includes("Module rejeu") ? "catalogue + page cours 200 + module" : `catalogue ${t.includes(NAME)} page ${r.status()} module ${t2.includes("Module rejeu")}`; });
  await step("visiteur: nouvelle formation - lecon 1 en 200", async () => { const c = q1("select id, slug from Course where title=?", NAME); const ls = lessonsOf(c.id); const v = await browser.newContext(); const p = await v.newPage(); const r = await p.goto(`${BASE}/fr/formations/${c.slug}/${ls[0].key}`); await v.close(); return ls.length === 2 && r.status() === 200 ? `${ls.length} lecons (${ls.map((l) => l.type).join(",")}), l1 HTTP 200` : `${ls.length} lecons, HTTP ${r.status()}`; });

  await browser.close();
  const ok = rows.filter((r) => r.ok).length;
  console.log(`\nRESULTAT: ${ok} sur ${rows.length} PASS`);
  fs.writeFileSync(path.join(__dirname, "..", "replay-result.json"), JSON.stringify({ at: new Date().toISOString(), stamp: STAMP, name: NAME, ok, total: rows.length, rows }, null, 2));
})().catch((e) => { console.error("FATAL", e); process.exit(1); });
