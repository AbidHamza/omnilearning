"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { parseConsent, readRawConsent, serverConsent, subscribeConsent } from "@/lib/consent";

// Meta Pixel (Facebook/Instagram Ads) pour omnilearn.org.
// Il ne s'initialise jamais au chargement : le composant ne rend rien tant
// que le choix stocké par le bandeau ne vaut pas "granted". Contrairement à
// GA4, Meta n'a pas de mode sans cookie, donc ici c'est tout ou rien.
// Identifiant lu depuis NEXT_PUBLIC_META_PIXEL_ID (voir .env.example).
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1505740464038855";

export function MetaPixel() {
  const stored = useSyncExternalStore(subscribeConsent, readRawConsent, serverConsent);

  if (!PIXEL_ID || parseConsent(stored) !== "granted") return null;

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
