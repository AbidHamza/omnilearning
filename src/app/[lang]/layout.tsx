import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, DM_Sans, Cairo } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "@/lib/session";
import { I18nProvider } from "@/i18n/provider";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localeDir, locales } from "@/i18n/config";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OmniLearn — Apprenez à votre rythme",
  description:
    "Des formations tech gratuites et de qualité : développement, cybersécurité, data, design et plus. Apprenez où vous voulez, quand vous voulez.",
};

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

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${bricolage.variable} ${dmSans.variable} ${cairo.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <I18nProvider locale={lang} dict={dict} dir={dir}>
          <SessionProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SessionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
