import { getInstructorDashboard } from "@/lib/dal";
import { instructorUser } from "@/lib/data";
import FormateurClient from "./formateur-client";

export default async function FormateurDashboard() {
  // Données réelles si le formateur est connecté, sinon les données de démo
  // (le sélecteur de rôle de démo reste utilisable pour les visiteurs).
  const data = await getInstructorDashboard();
  const name = data?.name ?? instructorUser.name;
  const created = data?.created ?? instructorUser.created ?? [];
  const stats = data?.stats ?? instructorUser.stats ?? { started: 0, finished: 0, rating: 0 };

  return <FormateurClient name={name} created={created} stats={stats} />;
}
