import { isLocale, defaultLocale } from "@/i18n/config";
import { getAdminDashboard, requireRole } from "@/lib/dal";
import AdminClient from "./admin-client";
import type { Metadata } from "next";

// Écran privé : derrière une session, sans contenu public. Il n'a rien à faire
// dans un index, et une canonique n'aurait aucun sens sur une page dont le
// contenu change avec le compte connecté.
export const metadata: Metadata = { robots: { index: false, follow: false } };


export default async function AdminDashboard({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  // Garde serveur autoritaire : seul un ADMIN réel (DB) passe. Non connecté ->
  // /connexion ; autre rôle -> son espace. Plus aucune donnée de démo n'est servie.
  await requireRole(locale, ["admin"]);

  const data = await getAdminDashboard();
  if (!data) {
    // requireRole a déjà filtré, donc on n'arrive ici qu'en cas d'incohérence DB.
    return null;
  }

  return (
    <AdminClient
      pending={data.pending}
      stats={data.stats}
      recentUsers={data.recentUsers}
    />
  );
}
