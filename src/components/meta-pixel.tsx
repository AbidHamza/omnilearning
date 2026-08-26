"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// Meta Pixel (Facebook/Instagram Ads) pour omnilearn.org.
// Ne s'initialise JAMAIS au chargement : on attend soit un choix "granted"
// déjà en mémoire (localStorage, posé par consent-banner.tsx), soit
// l'événement "olm-consent" émis quand le visiteur clique "J'accepte".
// Lu depuis NEXT_PUBLIC_META_PIXEL_ID (voir .env.example).
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1505740464038855";
const STORAGE_KEY = "olm_consent";
const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 6;

function hasStoredConsent(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { choice: string; ts: number };
    return parsed.choice === "granted" && Date.now() - parsed.ts <= SIX_MONTHS_MS;
  } catch {
    return false;
  }
}

export function MetaPixel() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!PIXEL_ID) return;
    if (hasStoredConsent()) setReady(true);
    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (detail === "granted") setReady(true);
    };
    window.addEventListener("olm-consent", onConsent);
    return () => window.removeEventListener("olm-consent", onConsent);
  }, []);

  if (!PIXEL_ID || !ready) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

export default MetaPixel;
