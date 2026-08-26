import type { Metadata } from "next";
import LegalDocument from "@/components/legal-document";
import {
  buildLegalMetadata,
  getLegalPage,
  legalEmail,
  resolveLegalLocale,
} from "@/lib/legal-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildLegalMetadata(lang, "/contact", "contact");
}

const ctaLabel = {
  fr: "Écrire à info@omnilearn.org",
  en: "Email info@omnilearn.org",
  ar: "راسلنا على info@omnilearn.org",
} as const;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLegalLocale(lang);
  return (
    <LegalDocument page={getLegalPage(lang, "contact")}>
      <a
        href={`mailto:${legalEmail}`}
        className="inline-flex rounded-[3px] bg-primary px-8 py-3 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
      >
        {ctaLabel[locale]}
      </a>
    </LegalDocument>
  );
}
