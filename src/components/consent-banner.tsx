"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";

// Stocke un simple oui/non pendant 6 mois. Pas de wall de préférences par
// catégorie ici : le site ne pose que de la mesure d'audience + le pixel Meta,
// donc un choix binaire couvre le besoin sans sur-ingénierie.
const STORAGE_KEY = "olm_consent";
const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 6;

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { choice: Choice; ts: number };
    if (Date.now() - parsed.ts > SIX_MONTHS_MS) return null;
    return parsed.choice === "granted" ? "granted" : "denied";
  } catch {
    return null;
  }
}

function writeChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
  } catch {
    // localStorage indisponible (navigation privée stricte) : le bandeau
    // se réaffichera au prochain chargement, ce n'est pas grave.
  }
}

function pushConsentUpdate(choice: Choice) {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (choice === "granted") {
    gtag?.("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  }
  window.dispatchEvent(new CustomEvent("olm-consent", { detail: choice }));
}

const copy: Record<string, { text: string; accept: string; decline: string; manage: string; reopen: string }> = {
  fr: {
    text:
      "On mesure l'audience du site (GA4) et, si vous dites oui, on affine aussi la pub Meta. Rien ne se déclenche avant votre réponse, et votre choix tient 6 mois.",
    accept: "J'accepte",
    decline: "Je refuse",
    manage: "Gérer",
    reopen: "Cookies",
  },
  en: {
    text:
      "We measure site traffic (GA4) and, if you say yes, we also tune Meta ads. Nothing runs before you answer, and your choice sticks for 6 months.",
    accept: "Accept",
    decline: "Decline",
    manage: "Manage",
    reopen: "Cookies",
  },
  ar: {
    text:
      "نقيس زيارات الموقع (GA4)، وإذا وافقت نضبط إعلانات Meta أيضًا. لا شيء يعمل قبل ردّك، واختيارك يبقى محفوظًا 6 أشهر.",
    accept: "أوافق",
    decline: "أرفض",
    manage: "إدارة",
    reopen: "الكوكيز",
  },
};

export default function ConsentBanner({ lang }: { lang: Locale }) {
  // Ouvert par défaut : tant qu'on n'a pas lu le localStorage (donc dans le
  // HTML rendu serveur, avant hydratation), on part du principe qu'aucun
  // choix n'a encore été fait ; c'est le cas pour tout premier visiteur, et
  // c'est justement le cas qui doit afficher le bandeau complet tout de
  // suite plutôt qu'après coup.
  const [open, setOpen] = useState(true);
  const [hasChoice, setHasChoice] = useState(false);

  useEffect(() => {
    const stored = readChoice();
    if (stored) {
      pushConsentUpdate(stored);
      setHasChoice(true);
      setOpen(false);
    }
  }, []);

  const t = copy[lang] ?? copy.en;

  function respond(choice: Choice) {
    writeChoice(choice);
    pushConsentUpdate(choice);
    setHasChoice(true);
    setOpen(false);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.manage}
          style={{
            position: "fixed",
            left: 14,
            bottom: 14,
            zIndex: 60,
            fontSize: 11,
            fontFamily: "var(--font-jetbrains), monospace",
            color: "rgba(255,255,255,0.55)",
            background: "rgba(20,20,24,0.55)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 6,
            padding: "5px 9px",
            cursor: "pointer",
          }}
        >
          {t.reopen}
        </button>
      )}
      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.manage}
          style={{
            position: "fixed",
            left: 14,
            right: 14,
            bottom: 14,
            zIndex: 70,
            maxWidth: 560,
            margin: hasChoice ? "0 auto 0 14px" : undefined,
            background: "#0f1115",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 10,
            padding: "14px 16px",
            boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontFamily: "var(--font-plex-sans), system-ui, sans-serif",
          }}
        >
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}>{t.text}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => respond("denied")}
              style={{
                flex: "1 1 auto",
                padding: "8px 14px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.22)",
                background: "transparent",
                color: "rgba(255,255,255,0.85)",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {t.decline}
            </button>
            <button
              type="button"
              onClick={() => respond("granted")}
              style={{
                flex: "1 1 auto",
                padding: "8px 14px",
                borderRadius: 6,
                border: "1px solid #4ef08a",
                background: "#4ef08a",
                color: "#07090c",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
