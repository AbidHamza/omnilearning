// Google Tag Manager en Consent Mode v2 « basique » : le conteneur n'est pas
// téléchargé tant que le visiteur n'a pas accepté. En mode avancé, GTM partait
// au chargement et GA4 envoyait un ping sans cookie (gcs=G100) avant tout
// choix, ce que la checklist de livraison interdit (aucun appel avant
// consentement). Le script inline lit l'accord déjà stocké pour un visiteur qui
// revient ; sinon il expose window.__olmLoadGtm, appelé par applyConsent() au
// clic sur « Accepter ». Un vrai <script> inline (pas next/script) pour être
// garanti présent dans le HTML servi, même logique que le script anti-FOUC du
// thème dans layout.tsx.
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
            "gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'granted',security_storage:'granted'});",
        }}
      />
      <script
        id="gtm-base"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,i){var done=false;w.__olmLoadGtm=function(){if(done)return;done=true;w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;d.head.appendChild(j);};try{var c=JSON.parse(localStorage.getItem('olm_consent')||'null');if(c&&c.choice==='granted'&&Date.now()-c.ts<15552000000){gtag('consent','update',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});w.__olmLoadGtm();}}catch(e){}})(window,document,'${gtmId}');`,
        }}
      />
    </>
  );
}

