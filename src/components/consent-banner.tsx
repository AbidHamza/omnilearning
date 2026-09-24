"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Locale } from "@/i18n/config";
import {
  applyConsent,
  parseConsent,
  subscribeConsent,
  readRawConsent,
  saveConsent,
  serverConsent,
  type Choice,
} from "@/lib/consent";

// Un simple oui/non gardé 6 mois. Pas de mur de préférences par catégorie :
// le site ne pose que de la mesure d'audience et le pixel Meta, un choix
// binaire couvre le besoin sans sur-ingénierie.

const copy: Record<string, { text: string; accept: string; decline: string; manage: string; reopen: string }> = {
  fr: {
    text:
      "On mesure l'audience du site (GA4) et, si vous dites oui, on affine aussi la pub Meta. Rien n'est déposé sur votre appareil avant votre réponse, et votre choix tient 6 mois.",
    accept: "J'accepte",
    decline: "Je refuse",
    manage: "Gérer",
    reopen: "Cookies",
  },
  en: {
    text:
      "We measure site traffic (GA4) and, if you say yes, we also tune Meta ads. Nothing is stored on your device before you answer, and your choice sticks for 6 months.",
    accept: "Accept",
    decline: "Decline",
    manage: "Manage",
    reopen: "Cookies",
  },
  ar: {
    text:
      "نقيس زيارات الموقع (GA4)، وإذا وافقت نضبط إعلانات Meta أيضًا. لا يُحفظ شيء على جهازك قبل ردّك، واختيارك يبقى محفوظًا 6 أشهر.",
    accept: "أوافق",
    decline: "أرفض",
    manage: "إدارة",
    reopen: "الكوكيز",
  },
};

export default function ConsentBanner({ lang }: { lang: Locale }) {
  // Le choix vit dans localStorage, pas dans ce composant : on le lit à la
  // source. Le rendu serveur et la première passe d'hydratation voient
  // « pas encore répondu », donc le bandeau complet, ce qui est justement
  // l'état d'un premier visiteur.
  const stored = useSyncExternalStore(subscribeConsent, readRawConsent, serverConsent);
  const choice = parseConsent(stored);
  const [reopened, setReopened] = useState(false);
  const open = reopened || choice === null;

  // Visiteur qui revient avec un accord déjà en mémoire : Consent Mode est
  // reparti du refus par défaut au chargement, il faut lui repasser l'accord.
  useEffect(() => {
    const known = parseConsent(readRawConsent());
    if (known) applyConsent(known);
  }, []);

  const t = copy[lang] ?? copy.en;

  function respond(next: Choice) {
    saveConsent(next);
    setReopened(false);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setReopened(true)}
          aria-label={t.manage}
          style={{
            position: "fixed",
            left: 14,
            bottom: 14,
            zIndex: 60,
            fontSize: 11,
            fontFamily: "var(--font-sans)",
            color: "var(--color-muted)",
            background: "var(--color-surface)",
            border: "1px solid var(--color-line)",
            borderRadius: 3,
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
            margin: choice !== null ? "0 auto 0 14px" : undefined,
            background: "var(--color-surface)",
            border: "1px solid var(--color-line)",
            borderRadius: 4,
            padding: "14px 16px",
            boxShadow: "0 6px 20px rgba(40,30,15,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontFamily: "var(--font-sans)",
          }}
        >
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "var(--color-ink)" }}>{t.text}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => respond("denied")}
              style={{
                flex: "1 1 auto",
                padding: "8px 14px",
                borderRadius: 3,
                border: "1px solid var(--color-line)",
                background: "transparent",
                color: "var(--color-ink)",
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
                borderRadius: 3,
                border: "1px solid var(--color-primary)",
                background: "var(--color-primary)",
                color: "var(--color-on-primary)",
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
