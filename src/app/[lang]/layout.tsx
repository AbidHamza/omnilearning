import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JetBrains_Mono, Public_Sans, Newsreader, Cairo } from "next/font/google";
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
import { GoogleTagManager } from "@/components/gtm";
import ConsentBanner from "@/components/consent-banner";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Code blocks in lessons only.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    title: "OmniLearn · Cours en ligne écrits par des praticiens",
    description:
      "Des cours en ligne écrits par des formateurs indépendants et relus avant publication. Les deux premières leçons de chaque cours s'ouvrent sans compte ; un compte gratuit débloque les quiz notés et le suivi de progression.",
  },
  en: {
    title: "OmniLearn · Online courses written by practitioners",
    description:
      "Online courses written by independent instructors and reviewed before they go live. The first two lessons of every course open without an account; a free account adds graded quizzes and saved progress.",
  },
  ar: {
    title: "OmniLearn · دورات عبر الإنترنت يكتبها ممارسون",
    description:
      "دورات عبر الإنترنت يكتبها مدرّبون مستقلّون وتُراجَع قبل نشرها. يُفتح أوّل درسين من كل دورة دون حساب، والحساب المجاني يفتح الاختبارات المقيَّمة وحفظ التقدّم.",
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
      className={`${publicSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} ${cairo.variable} h-full`}
    >
      <head>
        {/* Light by default; `.dark` only when the visitor picked it. Runs
            before first paint so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <GoogleTagManager />
        <MetaPixel />
      </head>
      <body className="flex min-h-full flex-col">
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
