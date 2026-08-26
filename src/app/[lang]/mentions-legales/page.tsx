import type { Metadata } from "next";
import LegalDocument from "@/components/legal-document";
import { buildLegalMetadata, getLegalPage } from "@/lib/legal-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildLegalMetadata(lang, "/mentions-legales", "mentionsLegales");
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <LegalDocument page={getLegalPage(lang, "mentionsLegales")} />;
}
