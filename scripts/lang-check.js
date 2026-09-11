// Verifie la langue servie par omnilearn.org selon la langue du navigateur
// (Accept-Language), le cookie NEXT_LOCALE et le selecteur de langue.
// La detection est celle du navigateur, pas une geolocalisation IP.
const { execFileSync } = require("child_process");
let chromium;
try { ({ chromium } = require("playwright")); } catch { ({ chromium } = require("C:/Users/abidh/browser-bot/node_modules/playwright")); }
const BASE = process.env.BASE || "https://omnilearn.org";
const rows = [];
const rec = (name, ok, d) => { rows.push({ name, ok, d }); console.log((ok ? "PASS " : "FAIL ") + name + "  " + d); };
const CASES = [
  { locale: "en-US", tz: "America/New_York", path: "/en", lang: "en", hero: "Learn the tech skills" },
  { locale: "en-GB", tz: "Europe/London", path: "/en", lang: "en", hero: "Learn the tech skills" },
  { locale: "fr-FR", tz: "Europe/Paris", path: "/fr", lang: "fr", hero: "Apprenez les compétences" },
  { locale: "fr-BE", tz: "Europe/Brussels", path: "/fr", lang: "fr", hero: "Apprenez les compétences" },
  { locale: "ar-MA", tz: "Africa/Casablanca", path: "/ar", lang: "ar", dir: "rtl" },
  { locale: "de-DE", tz: "Europe/Berlin", path: "/fr", lang: "fr", hero: "Apprenez les compétences", note: "langue non prise en charge -> defaut fr" },
];
(async () => {
  const browser = await chromium.launch();
  for (const c of CASES) {
    const ctx = await browser.newContext({ locale: c.locale, timezoneId: c.tz, viewport: { width: 1280, height: 800 } });
    const page = await ctx.newPage();
    await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
    const path = new URL(page.url()).pathname.replace(/\/$/, "");
    const htmlLang = await page.getAttribute("html", "lang");
    const dir = await page.getAttribute("html", "dir");
    const cookie = (await ctx.cookies()).find((k) => k.name === "NEXT_LOCALE");
    const h1 = (await page.locator("h1").first().innerText().catch(() => "")).replace(/\s+/g, " ");
    const heroOk = c.hero ? h1.includes(c.hero) : true;
    const dirOk = c.dir ? dir === c.dir : true;
    rec(`navigateur ${c.locale} -> ${c.path}`, path === c.path && htmlLang === c.lang && cookie?.value === c.lang && heroOk && dirOk,
      `path ${path}, html lang=${htmlLang}${dir ? " dir=" + dir : ""}, cookie ${cookie?.value}, h1 "${h1.slice(0, 50)}"${c.note ? " (" + c.note + ")" : ""}`);
    await ctx.close();
  }
  // Priorite du cookie sur la langue du navigateur
  {
    const ctx = await browser.newContext({ locale: "en-US" });
    await ctx.addCookies([{ name: "NEXT_LOCALE", value: "fr", domain: "omnilearn.org", path: "/" }]);
    const page = await ctx.newPage();
    await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
    const p = new URL(page.url()).pathname;
    rec("cookie fr prime sur navigateur en-US", p.startsWith("/fr"), `path ${p}`);
    await ctx.close();
  }
  // Selecteur de langue : /fr -> /en, puis la racine suit le choix
  {
    const ctx = await browser.newContext({ locale: "fr-FR" });
    const page = await ctx.newPage();
    await page.goto(BASE + "/fr", { waitUntil: "domcontentloaded" });
    const sw = page.locator('[aria-label="Langue"], [aria-label="Language"]').first();
    let detail = "";
    let ok = false;
    if (await sw.count()) {
      const tag = await sw.evaluate((el) => el.tagName);
      if (tag === "SELECT") await sw.selectOption("en");
      else { await sw.click(); await page.getByRole("button", { name: "English", exact: true }).click(); }
      await page.waitForURL(/\/en(\/|$)/, { timeout: 15000 });
      const cookie = (await ctx.cookies()).find((k) => k.name === "NEXT_LOCALE");
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      const p = new URL(page.url()).pathname;
      ok = p.startsWith("/en") && cookie?.value === "en";
      detail = `selecteur ${tag}, cookie ${cookie?.value}, racine -> ${p}`;
    } else detail = "selecteur introuvable";
    rec("selecteur de langue fr -> en, cookie pose, racine suit", ok, detail);
    await ctx.close();
  }
  // Fuite de francais sur les pages anglaises
  {
    const ctx = await browser.newContext({ locale: "en-US" });
    const page = await ctx.newPage();
    const FR = /\b(Formations?|Se connecter|Créer mon compte|Apprenez|Tableau de bord|Devenir formateur|Accueil|Rechercher|Mot de passe)\b/;
    const pages = ["/en", "/en/formations", "/en/formations/cybersecurite", "/en/connexion", "/en/creer-compte", "/en/devenir-formateur", "/en/a-propos", "/en/contact", "/en/classement"];
    const leaks = [];
    let visited = 0;
    for (const p of pages) {
      const r = await page.goto(BASE + p, { waitUntil: "domcontentloaded" });
      if (r.status() !== 200) { leaks.push(`${p}: HTTP ${r.status()}`); continue; }
      visited++;
      const text = await page.locator("body").innerText();
      const m = text.match(FR);
      if (m) leaks.push(`${p}: "${m[0]}"`);
    }
    rec("pages /en sans jeton francais", leaks.length === 0, `${visited} sur ${pages.length} pages en 200, fuites: ${leaks.length ? leaks.join("; ") : "aucune"}`);
    await ctx.close();
  }
  await browser.close();
  // Sans navigateur : redirection HTTP selon Accept-Language
  for (const [al, exp] of [["en-US,en;q=0.9", "/en"], ["fr-FR,fr;q=0.9,en;q=0.8", "/fr"], ["ar,fr;q=0.5", "/ar"], ["ja-JP", "/fr"], ["en-GB,en;q=0.9,fr;q=0.8", "/en"]]) {
    const out = execFileSync("curl", ["-s", "-o", require("os").devNull, "-D", "-", "-H", `Accept-Language: ${al}`, BASE + "/"], { encoding: "utf8" });
    const loc = (out.match(/^location:\s*(\S+)/im) || [])[1] || "";
    const st = (out.match(/HTTP\/\S+\s+(\d+)/) || [])[1];
    const setc = (out.match(/set-cookie:\s*NEXT_LOCALE=(\w+)/i) || [])[1];
    rec(`curl Accept-Language "${al}" -> ${exp}`, st?.startsWith("3") && loc.replace(/\/$/, "").endsWith(exp), `HTTP ${st}, Location ${loc}, cookie ${setc}`);
  }
  const ok = rows.filter((r) => r.ok).length;
  console.log(`\nRESULTAT LANGUE: ${ok} sur ${rows.length} PASS  (${new Date().toISOString()})`);
  require("fs").writeFileSync(require("path").join(__dirname, "..", "lang-check-result.json"), JSON.stringify({ at: new Date().toISOString(), ok, total: rows.length, rows }, null, 2));
})();
