import { isLocale, defaultLocale } from "@/i18n/config";
import { getInstructorDashboard, requireRole } from "@/lib/dal";
import FormateurClient from "./formateur-client";

export default async function FormateurDashboard({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  // Garde serveur : formateur ou admin réel uniquement.
  const { user } = await requireRole(locale, ["formateur", "admin"]);

  const data = await getInstructorDashboard();
  const name = data?.name ?? user.name;
  const created = data?.created ?? [];
  const stats = data?.stats ?? { started: 0, finished: 0, rating: 0 };

  return <FormateurClient name={name} created={created} stats={stats} />;
}
