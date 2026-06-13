import { getAdminDashboard, type PendingDraft } from "@/lib/dal";
import { pendingValidations, platformStats, recentUsers } from "@/lib/data";
import AdminClient from "./admin-client";

export default async function AdminDashboard() {
  // Données réelles si l'admin est connecté, sinon données de démo (le sélecteur
  // de rôle reste utilisable pour les visiteurs).
  const data = await getAdminDashboard();

  if (data) {
    return (
      <AdminClient
        pending={data.pending}
        stats={data.stats}
        recentUsers={data.recentUsers}
        live
      />
    );
  }

  // Démo : on synthétise des ids stables pour la file (pas de modération DB).
  const demoPending: PendingDraft[] = pendingValidations.map((p, i) => ({
    ...p,
    id: `demo-${i}`,
  }));

  return (
    <AdminClient
      pending={demoPending}
      stats={platformStats}
      recentUsers={recentUsers}
      live={false}
    />
  );
}
