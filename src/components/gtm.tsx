// Google Tag Manager, gated par Consent Mode v2.
// Le refus par défaut (ad_storage/analytics_storage denied) est écrit en dur
// juste avant le chargement du conteneur GTM lui-même (pas dans un fichier
// séparé) pour qu'il soit impossible de charger l'un sans l'autre. GTM peut
// donc démarrer normalement : c'est Consent Mode qui empêche les tags GA4 de
// tirer tant que le visiteur n'a rien choisi. Un vrai <script> inline (pas
// next/script) pour être garanti présent dans le HTML servi par le serveur,
// dans cet ordre, même logique que le script anti-FOUC du thème plus bas
// dans layout.tsx.
export function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;

  return (
    <>
      <script
        id="consent-default"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}" +
            "gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});",
        }}
      />
      <script
        id="gtm-base"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
        }}
      />
    </>
  );
}

export function GoogleTagManagerNoscript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;

  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}
