import { isLocale, defaultLocale } from "@/i18n/config";
import {
  getInstructorDashboard,
  getInstructorEnrollmentsByDay,
  getInstructorPayouts,
  requireRole,
} from "@/lib/dal";
import FormateurClient from "./formateur-client";
import type { Metadata } from "next";

// Écran privé : derrière une session, sans contenu public. Il n'a rien à faire
// dans un index, et une canonique n'aurait aucun sens sur une page dont le
// contenu change avec le compte connecté.
export const metadata: Metadata = { robots: { index: false, follow: false } };


export default async function FormateurDashboard({
  params,
  searchParams,
}: PageProps<"/[lang]">) {
  const { lang } = await params;
  const sp = await searchParams;
  const locale = isLocale(lang) ? lang : defaultLocale;

  // Garde serveur : formateur ou admin réel uniquement.
  const { user } = await requireRole(locale, ["formateur", "admin"]);

  const [data, payouts, enrollmentsByDay] = await Promise.all([
    getInstructorDashboard(),
    getInstructorPayouts(locale),
    getInstructorEnrollmentsByDay(14),
  ]);
  const name = data?.name ?? user.name;
  const created = data?.created ?? [];
  const stats = data?.stats ?? { started: 0, finished: 0, rating: 0 };

  // Stripe renvoie ici après l'onboarding : on le signale au panneau pour
  // qu'il relise l'état du compte, le webhook pouvant traîner de quelques
  // secondes.
  const justBack = sp.connect === "retour";

  return (
    <FormateurClient
      name={name}
      created={created}
      stats={stats}
      payouts={payouts}
      enrollmentsByDay={enrollmentsByDay}
      justBack={justBack}
    />
  );
}
