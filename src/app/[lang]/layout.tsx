import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, DM_Sans, Cairo } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "@/lib/session";
import { getCurrentUser } from "@/lib/dal";
import { I18nProvider } from "@/i18n/provider";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, localeDir, locales, type Locale } from "@/i18n/config";
import { siteName, siteUrl } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    title: "OmniLearn — Apprenez les compétences tech de demain",
    description:
      "Des formations tech gratuites et de qualité : développement, cybersécurité, data, design et plus. Apprenez où vous voulez, quand vous voulez.",
  },
  en: {
    title: "OmniLearn — Learn tomorrow's tech skills",
    description:
      "Free, high-quality tech courses: development, cybersecurity, data, design and more. Learn wherever you want, whenever you want.",
  },
  ar: {
    title: "OmniLearn — تعلّم مهارات الغد التقنية",
    description:
      "دورات تقنية مجانية وعالية الجودة: تطوير، أمن سيبراني، بيانات، تصميم والمزيد. تعلّم أينما ومتى شئت.",
  },
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const seo = seoByLocale[locale];
  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}`]),
  ) as Record<string, string>;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: seo.title, template: `%s · ${siteName}` },
    description: seo.description,
    applicationName: siteName,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...languages, "x-default": `/${defaultLocale}` },
    },
    openGraph: {
      type: "website",
      siteName,
      title: seo.title,
      description: seo.description,
      url: `/${locale}`,
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
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
      className={`${bricolage.variable} ${dmSans.variable} ${cairo.variable} h-full`}
    >
      <head>
        {/* Applique le thème avant la première peinture pour éviter le flash clair en mode sombre. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <I18nProvider locale={lang} dict={dict} dir={dir}>
          <SessionProvider serverRole={session?.role} serverUser={session?.user}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SessionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
