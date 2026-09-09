"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { DEFAULT_REVENUE_SHARE_PCT } from "@/lib/pricing";

export interface ApplyPayload {
  displayName?: string;
  headline?: string;
  bio?: string;
  expertise?: string;
  website?: string;
  country?: string;
}

/** Codes rendus à l'interface ; la phrase se lit dans le dictionnaire. */
export type ApplyError =
  | "signInFirst"
  | "alreadyPending"
  | "alreadyApproved"
  | "nameMissing"
  | "bioTooShort"
  | "saveFailed";

export type ApplyResult = { ok: true } | { ok: false; error: ApplyError };

const MIN_BIO = 80;

function clean(value: string | undefined, max: number): string | null {
  const v = value?.trim();
  if (!v) return null;
  return v.slice(0, max);
}

/**
 * Candidature publique au statut de formateur. Elle n'accorde aucun droit :
 * elle crée une fiche PENDING que l'espace admin approuve ou refuse. Le rôle
 * du compte ne bascule à INSTRUCTOR qu'à l'approbation, jamais ici.
 */
export async function applyAsInstructorAction(
  payload: ApplyPayload,
): Promise<ApplyResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "signInFirst" };

  const displayName = clean(payload.displayName, 80);
  if (!displayName) return { ok: false, error: "nameMissing" };

  const bio = clean(payload.bio, 4000);
  if (!bio || bio.length < MIN_BIO) return { ok: false, error: "bioTooShort" };

  const existing = await prisma.instructorProfile.findUnique({
    where: { userId },
    select: { id: true, applicationStatus: true },
  });
  if (existing?.applicationStatus === "PENDING") {
    return { ok: false, error: "alreadyPending" };
  }
  if (existing?.applicationStatus === "APPROVED") {
    return { ok: false, error: "alreadyApproved" };
  }

  const data = {
    displayName,
    headline: clean(payload.headline, 160),
    bio,
    expertise: clean(payload.expertise, 300),
    website: clean(payload.website, 300),
    country: (clean(payload.country, 2) ?? "FR").toUpperCase(),
    applicationStatus: "PENDING",
    reviewedAt: null,
  };

  try {
    if (existing) {
      // Refus précédent : la candidature se rejoue sur la même fiche.
      await prisma.instructorProfile.update({ where: { id: existing.id }, data });
    } else {
      await prisma.instructorProfile.create({
        data: { ...data, userId, revenueSharePct: DEFAULT_REVENUE_SHARE_PCT },
      });
    }
  } catch {
    return { ok: false, error: "saveFailed" };
  }

  revalidatePath("/fr/admin");
  return { ok: true };
}

export type ReviewResult = { ok: true } | { ok: false; error: string };

/**
 * Décision de l'admin sur une candidature. L'approbation fait deux choses en une
 * transaction : la fiche passe APPROVED et le compte devient INSTRUCTOR. Un
 * refus ne rétrograde jamais un compte déjà formateur.
 */
export async function reviewInstructorApplicationAction(
  profileId: string,
  approved: boolean,
  revenueSharePct?: number,
): Promise<ReviewResult> {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    return { ok: false, error: "Réservé aux administrateurs." };
  }

  const profile = await prisma.instructorProfile.findUnique({
    where: { id: profileId },
    select: { id: true, userId: true, applicationStatus: true },
  });
  if (!profile) return { ok: false, error: "Candidature introuvable." };
  if (profile.applicationStatus !== "PENDING") {
    return { ok: false, error: "Cette candidature est déjà tranchée." };
  }

  const share =
    typeof revenueSharePct === "number" &&
    Number.isFinite(revenueSharePct) &&
    revenueSharePct >= 30 &&
    revenueSharePct <= 95
      ? Math.round(revenueSharePct)
      : DEFAULT_REVENUE_SHARE_PCT;

  if (!approved) {
    await prisma.instructorProfile.update({
      where: { id: profile.id },
      data: { applicationStatus: "REJECTED", reviewedAt: new Date() },
    });
    revalidatePath("/fr/admin");
    return { ok: true };
  }

  await prisma.$transaction([
    prisma.instructorProfile.update({
      where: { id: profile.id },
      data: {
        applicationStatus: "APPROVED",
        reviewedAt: new Date(),
        revenueSharePct: share,
      },
    }),
    prisma.user.update({
      where: { id: profile.userId },
      data: { role: "INSTRUCTOR" },
    }),
  ]);

  revalidatePath("/fr/admin");
  revalidatePath("/fr/formateur");
  return { ok: true };
}
