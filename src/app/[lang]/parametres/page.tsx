import { getCurrentUser, getInstructorDashboard, getBillingState } from "@/lib/dal";
import { getCourses } from "@/lib/courses";
import type { User } from "@/lib/types";
import ParametresClient from "./parametres-client";
import ParametresDemo from "./parametres-demo";

export default async function ParametresPage() {
  const session = await getCurrentUser();
  const billing = await getBillingState();

  // Mode démo (non connecté) : on délègue au client qui lit le rôle de démo
  // (localStorage) et les données de démo via useSession.
  if (!session) {
    return <ParametresDemo billing={billing} />;
  }

  const { role, user } = session;

  // Formateur : enrichir avec les vraies formations créées + stats.
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
