"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export interface DraftPayload {
  category?: string;
  name?: string;
  description?: string;
  level?: string;
  skills?: string;
  prerequisites?: string;
  structure?: string;
  activities?: { type: string; instruction: string }[];
  uploads?: { field: string; url: string; name: string }[];
  submit?: boolean;
}

// Persiste un brouillon de formation en DB (création ou soumission).
// Réservé aux formateurs/admin connectés.
export async function saveDraftAction(payload: DraftPayload) {
  const session = await auth();
  const userId = session?.user?.id;
  const role = session?.user?.role;
  if (!userId) return { ok: false as const, error: "Connectez-vous." };
  if (role !== "INSTRUCTOR" && role !== "ADMIN") {
    return { ok: false as const, error: "Réservé aux formateurs." };
  }

  const draft = await prisma.courseDraft.create({
    data: {
      authorId: userId,
      category: payload.category ?? null,
      name: payload.name ?? null,
      description: payload.description ?? null,
      level: payload.level ?? null,
      skills: payload.skills ?? null,
      prerequisites: payload.prerequisites ?? null,
      structure: payload.structure ?? null,
      activities: payload.activities ? JSON.stringify(payload.activities) : null,
      uploads: payload.uploads ? JSON.stringify(payload.uploads) : null,
      status: payload.submit ? "SUBMITTED" : "DRAFT",
    },
  });

  return { ok: true as const, id: draft.id };
}
