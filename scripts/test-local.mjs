// Banc de tests local : base jetable, serveur de production frais, tests de parcours.
// Prérequis : `npm run build` fait. node scripts/test-local.mjs [--replay] [--smoke]
//   --smoke  rejoue aussi tests/smoke.test.mjs contre ce serveur
//   --replay rejoue aussi scripts/replay-parcours.js (serveur redémarré, limite de connexion remise à zéro)
import { spawn, spawnSync } from "node:child_process";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const PORT = process.env.TEST_PORT || "3015";
const BASE_URL = `http://127.0.0.1:${PORT}`;
const args = new Set(process.argv.slice(2));

const reset = spawnSync(process.execPath, ["scripts/test-reset.mjs"], { cwd: root, stdio: "inherit" });
if (reset.status !== 0) process.exit(reset.status ?? 1);
const DB_FILE = resolve(root, ".test/test.db").replaceAll("\\", "/");
const env = {
  ...process.env,
  DATABASE_URL: `file:${DB_FILE}`,
  DB_FILE,
  BASE_URL,
  NODE_PATH: resolve(root, "node_modules"),
  PORT,
};

let server;
async function startServer() {
  server = spawn("npx", ["next", "start", "-p", PORT, "-H", "127.0.0.1"], { cwd: root, env, shell: true, stdio: "ignore" });
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(BASE_URL + "/fr", { redirect: "manual" });
      if (r.status < 500) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("serveur de test injoignable");
}
function stopServer() {
  if (!server) return;
  spawnSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
  server = undefined;
}
const run = (cmd, a) => spawnSync(cmd, a, { cwd: root, env, stdio: "inherit", shell: true }).status ?? 1;

let code = 0;
try {
  await startServer();
  if (args.has("--smoke")) code ||= run("node", ["--test", "tests/smoke.test.mjs"]);
  code ||= run("node", ["--test", "tests/local/parcours.test.mjs"]);
  if (args.has("--replay")) {
    stopServer();
    await startServer();
    code ||= run("node", ["scripts/replay-parcours.js"]);
  }
} finally {
  stopServer();
}
process.exit(code);
