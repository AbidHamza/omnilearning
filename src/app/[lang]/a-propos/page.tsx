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
  fr: { courses: "Parcourir les formations", support: "Devenir formateur" },
  en: { courses: "Browse the courses", support: "Teach on OmniLearn" },
  ar: { courses: "تصفّح الدورات", support: "درِّس على OmniLearn" },
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
          className="btn-red px-6 text-sm"
        >
          {labels.courses}
        </LocaleLink>
        <LocaleLink
          href="/devenir-formateur"
          className="btn-soft px-6"
        >
          {labels.support}
        </LocaleLink>
      </div>
    </LegalDocument>
  );
}
