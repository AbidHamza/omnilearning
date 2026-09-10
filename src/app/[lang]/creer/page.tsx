import type { Metadata } from "next";
import { isLocale, defaultLocale } from "@/i18n/config";
import { getDraftForEdit, requireRole } from "@/lib/dal";
import CreerFormationClient from "./creer-client";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function CreerFormationPage({
  params,
  searchParams,
}: PageProps<"/[lang]/creer">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  await requireRole(locale, ["formateur", "admin"]);
  const sp = await searchParams;
  const initial = typeof sp.draft === "string" ? await getDraftForEdit(sp.draft) : null;
  return <CreerFormationClient initial={initial} />;
}
