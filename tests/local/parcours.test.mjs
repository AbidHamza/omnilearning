// Tests de parcours contre une instance locale branchée sur la base jetable.
// Lancer par `npm run test:local` (reset de la base, serveur frais, puis ce fichier).
// Variables : BASE_URL (serveur), DB_FILE (base de test, la même que celle du serveur).
import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
const ROOT = resolve(import.meta.dirname, "../..");
const Database = require(ROOT + "/node_modules/better-sqlite3");
const bcrypt = require(ROOT + "/node_modules/bcryptjs");
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  ({ chromium } = require("C:/Users/abidh/browser-bot/node_modules/playwright"));
}

const BASE = (process.env.BASE_URL || "http://localhost:3005").replace(/\/$/, "");
const DB_FILE = process.env.DB_FILE;
assert.ok(DB_FILE && /test/.test(DB_FILE), "DB_FILE doit désigner la base de test");
const db = new Database(DB_FILE);
const seed = readFileSync(ROOT + "/prisma/seed.ts", "utf8");
const PW = seed.match(/bcrypt\.hash\("([^"]+)"/)[1];

const EMAIL = "camille.test@example.org";
const NAME = "Camille Test";
const CERT_COURSE = "azure-fondamentaux-labs";
const LESSON_COURSE = "creer-avec-ia-generative";
const now = () => new Date().toISOString();
const CODE_RE = /OL-[A-HJ-NP-Z2-9]{6}/;

let browser, ctx, page, userId, certCode;
const course = (slug) => db.prepare("select id, title from Course where slug=?").get(slug);
const lessons = (courseId) =>
  db
    .prepare(
      'select l.id, l.key, l.type from Lesson l join CoursePart p on p.id=l.partId where p.courseId=? order by p."order", l."order"',
    )
    .all(courseId);

function enroll(courseId, fields = {}) {
  const row = { id: randomUUID(), userId, courseId, progress: 0, createdAt: now(), updatedAt: now(), ...fields };
  const cols = Object.keys(row);
  db.prepare(`insert into Enrollment (${cols.join(",")}) values (${cols.map(() => "?").join(",")})`).run(...Object.values(row));
  return row.id;
}

before(async () => {
  userId = randomUUID();
  db.prepare("delete from User where email=?").run(EMAIL);
  db.prepare(
    "insert into User (id,email,password,name,role,emailVerified,createdAt,updatedAt) values (?,?,?,?,?,?,?,?)",
  ).run(userId, EMAIL, await bcrypt.hash(PW, 10), NAME, "USER", now(), now(), now());
  browser = await chromium.launch();
  ctx = await browser.newContext({ locale: "fr-FR" });
  page = await ctx.newPage();
  await page.goto(BASE + "/fr/connexion");
  await page.fill('input[autocomplete="username"]', EMAIL);
  await page.fill('input[type="password"]', PW);
  await Promise.all([
    page.waitForURL((u) => !u.pathname.includes("/connexion"), { timeout: 20000 }),
    page.click('button[type="submit"]'),
  ]);
});

after(async () => {
  await browser?.close();
  db.close();
});

test("certificat : émis à la première visite, code OL-XXXXXX, idempotent", async () => {
  const c = course(CERT_COURSE);
  enroll(c.id, { progress: 100, completedAt: now() });
  const r = await page.goto(`${BASE}/fr/formations/${CERT_COURSE}/certificat`);
  assert.equal(r.status(), 200);
  const text = await page.locator("main").innerText();
  certCode = CODE_RE.exec(text)?.[0];
  assert.ok(certCode, "code absent de la page");
  assert.ok(text.includes(NAME));
  assert.match(await page.locator('a[href*="linkedin.com/sharing"]').getAttribute("href"), new RegExp(`certificats%2F${certCode}`));
  await page.goto(`${BASE}/fr/formations/${CERT_COURSE}/certificat`);
  assert.ok((await page.locator("main").innerText()).includes(certCode));
  const rows = db.prepare("select code from Certificate where userId=?").all(userId);
  assert.deepEqual(rows.map((x) => x.code), [certCode]);
});

test("page publique du certificat : nom, cours, durée, jamais l'e-mail, mention préservée", async () => {
  const anon = await browser.newContext();
  const p = await anon.newPage();
  const r = await p.goto(`${BASE}/fr/certificats/${certCode}`);
  assert.equal(r.status(), 200);
  const html = await p.content();
  const text = await p.locator("main").innerText();
  assert.ok(text.includes(NAME));
  assert.ok(text.includes(course(CERT_COURSE).title));
  assert.ok(text.includes(certCode));
  assert.ok(!html.includes(EMAIL) && !html.includes("example.org"), "e-mail exposé");
  assert.match(text, /ni une certification Microsoft/);
  assert.match(html, /name="robots" content="noindex/);
  await anon.close();
});

test("code inexistant ou mal formé : 404", async () => {
  for (const code of ["OL-ZZZZZZ", "OL-ABC", "abc", "OL-0O1I2A"]) {
    const r = await page.goto(`${BASE}/fr/certificats/${code}`);
    assert.equal(r.status(), 404, code);
  }
});

test("page vérifier : code valide redirige, inconnu et malformé affichent un message", async () => {
  await page.goto(`${BASE}/fr/certificats/verifier`);
  await page.fill("#code", certCode);
  await Promise.all([page.waitForURL(new RegExp(`/certificats/${certCode}$`)), page.click('button[type="submit"]')]);
  await page.goto(`${BASE}/fr/certificats/verifier?code=OL-ZZZZZZ`);
  assert.match(await page.locator('main p[role="alert"]').innerText(), /Aucune attestation/);
  await page.goto(`${BASE}/fr/certificats/verifier?code=nimporte`);
  assert.match(await page.locator('main p[role="alert"]').innerText(), /bon format/);
});

test("geste unique : terminer une leçon texte marque la progression et passe à la suivante", async () => {
  const c = course(LESSON_COURSE);
  const ls = lessons(c.id);
  assert.equal(ls[0].type, "text");
  const eid = enroll(c.id);
  await page.goto(`${BASE}/fr/formations/${LESSON_COURSE}/${ls[0].key}`);
  await Promise.all([
    page.waitForURL(new RegExp(`/${ls[1].key}$`), { timeout: 20000 }),
    page.getByRole("button", { name: "Terminer et passer à la suite" }).click(),
  ]);
  const lp = db.prepare("select isCompleted from LessonProgress where enrollmentId=? and lessonId=?").get(eid, ls[0].id);
  assert.equal(lp?.isCompleted, 1);
  const enr = db.prepare("select progress from Enrollment where id=?").get(eid);
  assert.ok(enr.progress > 0);
  // Rejouer le geste ne double rien.
  await page.goto(`${BASE}/fr/formations/${LESSON_COURSE}/${ls[0].key}`);
  await Promise.all([
    page.waitForURL(new RegExp(`/${ls[1].key}$`), { timeout: 20000 }),
    page.getByRole("button", { name: "Terminer et passer à la suite" }).click(),
  ]);
  const n = db.prepare("select count(*) n from LessonProgress where enrollmentId=? and lessonId=?").get(eid, ls[0].id).n;
  assert.equal(n, 1);
});

test("geste unique : pas de bouton sur une leçon quiz", async () => {
  const ls = lessons(course(LESSON_COURSE).id);
  const quiz = ls.find((l) => l.type === "quiz");
  await page.goto(`${BASE}/fr/formations/${LESSON_COURSE}/${quiz.key}`);
  assert.equal(await page.getByRole("button", { name: /Terminer et/ }).count(), 0);
});

test("geste unique : un visiteur sans accès ne peut pas terminer une leçon payante verrouillée", async () => {
  const c = course("cybersecurite");
  const ls = lessons(c.id);
  const locked = ls[2];
  await page.goto(`${BASE}/fr/formations/cybersecurite/${locked.key}`);
  assert.equal(await page.getByRole("button", { name: /Terminer et/ }).count(), 0);
  const n = db.prepare("select count(*) n from LessonProgress where lessonId=?").get(locked.id).n;
  assert.equal(n, 0);
});

for (const [lang, label] of [["fr", "Aller au contenu"], ["en", "Skip to content"], ["ar", "انتقل إلى المحتوى"]]) {
  test(`lien d'évitement /${lang} : premier Tab, cible #contenu`, async () => {
    const anon = await browser.newContext();
    const p = await anon.newPage();
    await p.goto(`${BASE}/${lang}`);
    await p.keyboard.press("Tab");
    const info = await p.evaluate(() => {
      const a = document.activeElement;
      const r = a.getBoundingClientRect();
      return { text: a.textContent.trim(), href: a.getAttribute("href"), w: r.width, h: r.height, top: r.top, left: r.left };
    });
    assert.equal(info.text, label);
    assert.equal(info.href, "#contenu");
    assert.ok(info.w > 20 && info.h > 10 && info.top >= 0, "invisible au focus");
    assert.equal(await p.locator("main#contenu").count(), 1);
    await anon.close();
  });
}

test("tableau de bord : meilleur score et dernières tentatives de quiz", async () => {
  await page.goto(`${BASE}/fr/tableau-de-bord`);
  assert.match(await page.locator("main").innerText(), /Aucune tentative/);
  const quiz = lessons(course(LESSON_COURSE).id).find((l) => l.type === "quiz");
  const ins = db.prepare(
    "insert into QuizAttempt (id,userId,lessonId,answers,score,maxScore,isPassed,completedAt) values (?,?,?,?,?,?,?,?)",
  );
  ins.run(randomUUID(), userId, quiz.id, "[]", 2, 5, 0, new Date(Date.now() - 3 * 86400000).toISOString());
  ins.run(randomUUID(), userId, quiz.id, "[]", 4, 5, 1, new Date(Date.now() - 1 * 86400000).toISOString());
  await page.goto(`${BASE}/fr/tableau-de-bord`);
  const text = await page.locator("main").innerText();
  assert.match(text, /Mes quiz/);
  assert.match(text, /Meilleur score\s*:\s*4 sur 5/);
  assert.match(text, /2 sur 5/);
  assert.match(text, /Réussi/);
  assert.match(text, /À retravailler/);
});

// Dernier : épuise la limite de l'IP locale, il faut redémarrer le serveur pour se reconnecter.
test("limite de connexion : 8 échecs, puis le bon mot de passe est refusé avec un message neutre", async () => {
  const anon = await browser.newContext();
  const p = await anon.newPage();
  const submit = async (pw) => {
    await p.goto(`${BASE}/fr/connexion`);
    await p.fill('input[autocomplete="username"]', EMAIL);
    await p.fill('input[type="password"]', pw);
    await p.click('button[type="submit"]');
    await p.waitForTimeout(900);
  };
  for (let i = 0; i < 8; i++) await submit("mauvais-mot-de-passe-" + i);
  await submit(PW);
  assert.ok(p.url().includes("/connexion"), "connexion acceptée malgré la limite");
  const text = await p.locator("main").innerText();
  assert.match(text, /Trop de tentatives de connexion/);
  assert.ok(!text.includes(PW));
  await anon.close();
});
