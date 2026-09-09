import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JetBrains_Mono, IBM_Plex_Sans, Cairo } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "@/lib/session";
import { getCurrentUser } from "@/lib/dal";
import { I18nProvider } from "@/i18n/provider";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, localeDir, locales, type Locale } from "@/i18n/config";
import { shareCard, siteName, siteUrl } from "@/lib/site";
import MetaPixel from "@/components/meta-pixel";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/gtm";
import ConsentBanner from "@/components/consent-banner";

// Design system « TERMINAL / DEV-STUDIO » :
// - JetBrains Mono = LA VOIX (titres, nav, boutons, libellés UI, chiffres, code).
// - IBM Plex Sans = prose longue UNIQUEMENT (paragraphes, leads, descriptions).
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "OmniLearn · Apprenez les compétences tech de demain",
    description:
      "Formations tech gamifiées : développement, cybersécurité, data, design, IA. Les premières leçons de chaque cours sont en accès libre ; le compte débloque les quiz notés et le suivi de progression.",
  },
  en: {
    title: "OmniLearn · Learn tomorrow's tech skills",
    description:
      "Gamified tech courses: development, cybersecurity, data, design, AI. The first lessons of every course are open to everyone; an account unlocks quizzes and progress tracking.",
  },
  ar: {
    title: "OmniLearn · تعلّم مهارات الغد التقنية",
    description:
      "دورات تقنية بأسلوب الألعاب: تطوير، أمن سيبراني، بيانات، تصميم، ذكاء اصطناعي. الدروس الأولى من كل دورة متاحة للجميع، والحساب يفتح الاختبارات المقيَّمة وتتبّع التقدّم.",
  },
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const seo = seoByLocale[locale];

  // Volontairement PAS d'`alternates` ni d'`openGraph.url` ici : Next hérite les
  // métadonnées du layout à toutes les pages filles sans `generateMetadata`, donc
  // une canonique posée à ce niveau ferait déclarer à chaque page qu'elle est un
  // doublon de l'accueil. Chaque page pose la sienne via `alternatesFor()`.
  return {
    metadataBase: new URL(siteUrl),
    title: { default: seo.title, template: `%s · ${siteName}` },
    description: seo.description,
    applicationName: siteName,
    openGraph: {
      type: "website",
      siteName,
      title: seo.title,
      description: seo.description,
      locale,
      images: [shareCard(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteUrl}/og-${locale}.png`],
    },
  };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const dir = localeDir[lang];
  const session = await getCurrentUser();

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${plexSans.variable} ${cairo.variable} h-full`}
    >
      <head>
        {/* Terminal = dark-first : sombre par défaut. La classe `.light` (mode
            « paper ») n'est posée que si l'utilisateur a EXPLICITEMENT choisi
            clair. Appliqué avant la première peinture pour éviter tout flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
        <GoogleTagManager />
        <MetaPixel />
      </head>
      <body className="paper-grain flex min-h-full flex-col">
        <GoogleTagManagerNoscript />
        <I18nProvider locale={lang} dict={dict} dir={dir}>
          <SessionProvider serverRole={session?.role} serverUser={session?.user}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SessionProvider>
        </I18nProvider>
        <ConsentBanner lang={lang} />
      </body>
    </html>
  );
}
