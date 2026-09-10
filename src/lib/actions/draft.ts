"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { DEFAULT_CURRENCY, MAX_PRICE_CENTS, MIN_PRICE_CENTS } from "@/lib/pricing";
import {
  countLessons,
  curriculumProblems,
  sanitizeCurriculum,
  type DraftModule,
} from "@/lib/curriculum";
import { locales } from "@/i18n/config";

export interface DraftPayload {
  /** Brouillon existant à mettre à jour. Absent = création. */
  id?: string;
  category?: string;
  name?: string;
  description?: string;
  level?: string;
  skills?: string;
  prerequisites?: string;
  structure?: string;
  curriculum?: DraftModule[];
  activities?: { type: string; instruction: string }[];
  uploads?: { field: string; url: string; name: string }[];
  /** Prix proposé, en centimes. 0 = formation offerte. */
  priceCents?: number;
  submit?: boolean;
}

/**
 * Codes d'erreur traduits côté écran (dictionnaire `create.errors`). Les
 * chaînes en français ne sortent plus d'ici : la page existe en trois langues.
 */
export type DraftError =
  | "auth"
  | "role"
  | "notFound"
  | "noTitle"
  | "noDescription"
  | "noLesson"
  | "badLesson";

export type DraftResult =
  | { ok: true; id: string }
  | { ok: false; error: DraftError; detail?: string[] };

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

function refreshInstructorViews() {
  for (const l of locales) {
    revalidatePath(`/${l}/formateur`);
    revalidatePath(`/${l}/parametres`);
    revalidatePath(`/${l}/admin`);
  }
}

async function instructorSession(): Promise<
  { ok: true; userId: string } | { ok: false; error: DraftError }
> {
  const session = await auth();
  const userId = session?.user?.id;
  const role = session?.user?.role;
  if (!userId) return { ok: false, error: "auth" };
  if (role !== "INSTRUCTOR" && role !== "ADMIN") return { ok: false, error: "role" };
  return { ok: true, userId };
}

/**
 * Enregistre ou soumet un brouillon. Sans `id`, une ligne est créée ; avec un
 * `id`, la ligne est réécrite si elle appartient bien à l'auteur connecté. Une
 * soumission exige un titre, une description et au moins une leçon complète :
 * un cours publié sans leçon est une fiche vide vendue à un étudiant.
 */
export async function saveDraftAction(payload: DraftPayload): Promise<DraftResult> {
  const who = await instructorSession();
  if (!who.ok) return who;

  const curriculum = sanitizeCurriculum(payload.curriculum);
  const name = payload.name?.trim() ?? "";
  const description = payload.description?.trim() ?? "";

  if (payload.submit) {
    if (!name) return { ok: false, error: "noTitle" };
    if (!description) return { ok: false, error: "noDescription" };
    if (countLessons(curriculum) === 0) return { ok: false, error: "noLesson" };
    const problems = curriculumProblems(curriculum);
    if (problems.length) return { ok: false, error: "badLesson", detail: problems };
  }

  const data = {
    category: payload.category?.trim() || null,
    name: name || null,
    description: description || null,
    level: payload.level?.trim() || null,
    skills: payload.skills?.trim() || null,
    prerequisites: payload.prerequisites?.trim() || null,
    structure: payload.structure?.trim() || null,
    curriculum: curriculum.length ? JSON.stringify(curriculum) : null,
    activities: payload.activities?.length ? JSON.stringify(payload.activities) : null,
    uploads: payload.uploads?.length ? JSON.stringify(payload.uploads) : null,
    priceCents: sanePrice(payload.priceCents),
    currency: DEFAULT_CURRENCY,
    status: payload.submit ? "SUBMITTED" : "DRAFT",
  };

  if (payload.id) {
    const existing = await prisma.courseDraft.findFirst({
      where: { id: payload.id, authorId: who.userId },
      select: { id: true },
    });
    if (!existing) return { ok: false, error: "notFound" };
    await prisma.courseDraft.update({ where: { id: existing.id }, data });
    refreshInstructorViews();
    return { ok: true, id: existing.id };
  }

  const draft = await prisma.courseDraft.create({
    data: { authorId: who.userId, ...data },
  });
  refreshInstructorViews();
  return { ok: true, id: draft.id };
}

/**
 * Supprime un brouillon de son auteur. Un brouillon déjà publié n'existe plus
 * (la modération le remplace par un Course) : il n'y a donc rien d'irréversible
 * côté étudiant ici, seul le travail non soumis du formateur disparaît.
 */
export async function deleteDraftAction(
  draftId: string,
): Promise<{ ok: true } | { ok: false; error: DraftError }> {
  const who = await instructorSession();
  if (!who.ok) return who;
  const deleted = await prisma.courseDraft.deleteMany({
    where: { id: draftId, authorId: who.userId },
  });
  if (deleted.count === 0) return { ok: false, error: "notFound" };
  refreshInstructorViews();
  return { ok: true };
}
