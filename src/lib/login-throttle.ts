import { headers } from "next/headers";

// Limite des échecs de connexion : 8 par fenêtre de 15 minutes, comptés
// séparément par e-mail et par adresse IP. En mémoire : un seul processus
// (pm2) sert l'application, et un redémarrage remet les compteurs à zéro,
// ce qui ne coûte à un attaquant qu'une fenêtre de plus.
export const LOGIN_MAX_FAILURES = 8;
export const LOGIN_WINDOW_MS = 15 * 60 * 1000;

const failures = new Map<string, number[]>();
const MAX_KEYS = 10_000;

function recent(key: string, now: number): number[] {
  const list = (failures.get(key) ?? []).filter((t) => now - t < LOGIN_WINDOW_MS);
  if (list.length) failures.set(key, list);
  else failures.delete(key);
  return list;
}

const keysFor = (email: string, ip: string) => [`e:${email.trim().toLowerCase()}`, `i:${ip}`];

/** Adresse du client vue par le proxy : x-real-ip, sinon le dernier maillon de x-forwarded-for. */
export async function clientIp(): Promise<string> {
  try {
    const h = await headers();
    const real = h.get("x-real-ip")?.trim();
    if (real) return real;
    const xff = h.get("x-forwarded-for");
    if (xff) return xff.split(",").pop()!.trim();
  } catch {
    // Hors requête (script, test unitaire) : pas d'adresse, seul l'e-mail compte.
  }
  return "inconnue";
}

export function isLoginBlocked(email: string, ip: string, now = Date.now()): boolean {
  return keysFor(email, ip).some((k) => recent(k, now).length >= LOGIN_MAX_FAILURES);
}

export function recordLoginFailure(email: string, ip: string, now = Date.now()): void {
  if (failures.size > MAX_KEYS) {
    for (const k of failures.keys()) recent(k, now);
    if (failures.size > MAX_KEYS) failures.clear();
  }
  for (const k of keysFor(email, ip)) {
    const list = recent(k, now);
    list.push(now);
    failures.set(k, list);
  }
}

/** Une connexion réussie efface le compteur de l'e-mail, pas celui de l'IP. */
export function clearLoginFailures(email: string): void {
  failures.delete(`e:${email.trim().toLowerCase()}`);
}

/** Pour les tests. */
export function resetLoginThrottle(): void {
  failures.clear();
}
