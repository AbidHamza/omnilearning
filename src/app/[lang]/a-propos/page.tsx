import type { Metadata } from "next";
import LegalDocument from "@/components/legal-document";
import { LocaleLink } from "@/i18n/navigation";
import {
  buildLegalMetadata,
  getLegalPage,
  resolveLegalLocale,
} from "@/lib/legal-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildLegalMetadata(lang, "/a-propos", "aPropos");
}

const cta = {
  fr: { courses: "Parcourir les formations", support: "Soutenir la plateforme" },
  en: { courses: "Browse the courses", support: "Support the platform" },
  ar: { courses: "تصفّح الدورات", support: "ادعم المنصّة" },
} as const;

export default async function AProposPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLegalLocale(lang);
  const labels = cta[locale];
  return (
    <LegalDocument page={getLegalPage(lang, "aPropos")}>
      <div className="flex flex-wrap gap-3">
        <LocaleLink
          href="/formations"
          className="inline-flex rounded-[3px] bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
        >
          {labels.courses}
        </LocaleLink>
        <LocaleLink
          href="/soutenir"
          className="inline-flex rounded-[3px] border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
        >
          {labels.support}
        </LocaleLink>
      </div>
    </LegalDocument>
  );
}
