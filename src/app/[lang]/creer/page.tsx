import { isLocale, defaultLocale } from "@/i18n/config";
import { requireRole } from "@/lib/dal";
import CreerFormationClient from "./creer-client";

export default async function CreerFormationPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  // Garde serveur : création de formation réservée aux formateurs/admin.
  await requireRole(locale, ["formateur", "admin"]);

  return <CreerFormationClient />;
}
