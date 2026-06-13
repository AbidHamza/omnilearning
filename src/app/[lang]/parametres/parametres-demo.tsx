"use client";

import { useSession } from "@/lib/session";
import { courses } from "@/lib/data";
import ParametresClient, { type BillingState } from "./parametres-client";

// Mode démo : utilisé quand aucune session NextAuth n'est active. Lit le rôle et
// l'utilisateur de démo (localStorage) et résout les titres de cours depuis les
// données de démo. La page connectée passe par ParametresClient directement.
const demoCourseTitles: Record<string, string> = Object.fromEntries(
  courses.map((c) => [c.slug, c.title]),
);

export default function ParametresDemo({ billing }: { billing: BillingState }) {
  const { role, user } = useSession();
  if (!user) return null;
  return (
    <ParametresClient
      role={role}
      user={user}
      courseTitles={demoCourseTitles}
      billing={billing}
    />
  );
}
