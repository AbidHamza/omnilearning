// Source unique du choix cookies : une entrée localStorage, un événement DOM
// quand elle change. Le bandeau et le pixel Meta la lisent tous les deux par
// useSyncExternalStore au lieu d'en recopier la valeur dans un useState, sinon
// chacun garde sa propre version de la vérité et il faut les resynchroniser à
// la main depuis un effet.

export type Choice = "granted" | "denied";

const STORAGE_KEY = "olm_consent";
const EVENT = "olm-consent";
const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 6;

export function subscribeConsent(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  // Un autre onglet du site qui répond au bandeau écrit la même clé.
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

// Rend la chaîne brute et pas un objet : useSyncExternalStore compare par
// Object.is, un objet reparsé à chaque appel relancerait le rendu en boucle.
export function readRawConsent(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

// Côté serveur il n'y a pas de localStorage : on rend l'état « pas encore
// répondu », qui est aussi celui de tout premier visiteur.
export function serverConsent(): null {
  return null;
}

export function parseConsent(raw: string | null): Choice | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { choice?: string; ts?: number };
    if (typeof parsed.ts !== "number") return null;
    if (Date.now() - parsed.ts > SIX_MONTHS_MS) return null;
    return parsed.choice === "granted" ? "granted" : "denied";
  } catch {
    return null;
  }
}

// Consent Mode v2 : on ne remonte que l'accord. Le refus est déjà l'état par
// défaut écrit en dur dans le HTML par gtm.tsx, le repousser ne changerait
// rien. L'accord charge aussi GTM, qui n'est jamais téléchargé avant.
export function applyConsent(choice: Choice) {
  if (choice !== "granted") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    __olmLoadGtm?: () => void;
  };
  w.gtag?.("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  w.__olmLoadGtm?.();
}

export function saveConsent(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
  } catch {
    // localStorage indisponible (navigation privée stricte) : le bandeau se
    // réaffichera au prochain chargement, rien de cassé.
  }
  applyConsent(choice);
  window.dispatchEvent(new CustomEvent(EVENT, { detail: choice }));
}
