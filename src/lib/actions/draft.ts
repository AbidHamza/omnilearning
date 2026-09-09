"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { DEFAULT_CURRENCY, MAX_PRICE_CENTS, MIN_PRICE_CENTS } from "@/lib/pricing";

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
  /** Prix proposé, en centimes. 0 = formation offerte. */
  priceCents?: number;
  submit?: boolean;
}

// Persiste un brouillon de formation en DB (création ou soumission).
// Réservé aux formateurs/admin connectés.
/**
 * Un prix arrive d'un champ de formulaire : il peut être vide, négatif, à
 * virgule ou à six chiffres. Rien ne part en base sans passer par ici.
 */
function sanePrice(value: number | undefined): number {
  if (!value || !Number.isFinite(value) || value <= 0) return 0;
  const cents = Math.round(value);
  if (cents < MIN_PRICE_CENTS) return MIN_PRICE_CENTS;
  if (cents > MAX_PRICE_CENTS) return MAX_PRICE_CENTS;
  return cents;
}

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
      priceCents: sanePrice(payload.priceCents),
      currency: DEFAULT_CURRENCY,
      status: payload.submit ? "SUBMITTED" : "DRAFT",
    },
  });

  return { ok: true as const, id: draft.id };
}
