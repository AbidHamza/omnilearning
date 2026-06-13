import { isLocale, defaultLocale } from "@/i18n/config";
import { getInstructorDashboard, getBillingState, requireRole } from "@/lib/dal";
import { getCourses } from "@/lib/courses";
import type { User } from "@/lib/types";
import ParametresClient from "./parametres-client";

export default async function ParametresPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  // Garde serveur : tout utilisateur authentifié (étudiant, formateur, admin).
  const { role, user } = await requireRole(locale, ["etudiant", "formateur", "admin"]);
  const billing = await getBillingState();

  // Formateur/admin : enrichir avec les vraies formations créées + stats.
  let enriched: User = user;
  if (role === "formateur" || role === "admin") {
    const dash = await getInstructorDashboard();
    if (dash) enriched = { ...user, created: dash.created, stats: dash.stats };
  }

  // Résoudre les titres des cours suivis (slug -> titre) depuis la DB.
  const courses = await getCourses();
  const courseTitles = Object.fromEntries(courses.map((c) => [c.slug, c.title]));

  return (
    <ParametresClient
      role={role}
      user={enriched}
      courseTitles={courseTitles}
      billing={billing}
    />
  );
}
