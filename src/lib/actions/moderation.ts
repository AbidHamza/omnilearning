"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  DEFAULT_CURRENCY,
  DEFAULT_REVENUE_SHARE_PCT,
  MAX_PRICE_CENTS,
  MIN_PRICE_CENTS,
} from "@/lib/pricing";

export type ModerationResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Prix retenu à la publication : celui que l'admin saisit s'il en saisit un,
 * sinon celui proposé par le formateur. Un prix hors bornes est ramené dans
 * les bornes plutôt que refusé : la file de modération ne doit pas se bloquer
 * sur une faute de frappe.
 */
function finalPrice(override: number | undefined, proposed: number): number {
  const raw = override === undefined ? proposed : override;
  if (!Number.isFinite(raw) || raw <= 0) return 0;
  const cents = Math.round(raw);
  if (cents < MIN_PRICE_CENTS) return MIN_PRICE_CENTS;
  if (cents > MAX_PRICE_CENTS) return MAX_PRICE_CENTS;
  return cents;
}

// Approuve ou refuse un brouillon de formation soumis (CourseDraft SUBMITTED).
// Réservé aux admins. L'approbation publie un Course minimal lié à l'auteur ;
// le refus repasse le brouillon en DRAFT (renvoyé au formateur).
export async function moderateDraftAction(
  draftId: string,
  approved: boolean,
  priceCentsOverride?: number,
): Promise<ModerationResult> {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    return { ok: false, error: "Réservé aux administrateurs." };
  }

  const draft = await prisma.courseDraft.findUnique({
    where: { id: draftId },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          instructorProfile: { select: { revenueSharePct: true } },
        },
      },
    },
  });
  if (!draft) return { ok: false, error: "Brouillon introuvable." };
  if (draft.status !== "SUBMITTED") {
    return { ok: false, error: "Ce brouillon n'est plus en attente." };
  }

  if (!approved) {
    // Refus : renvoyé au formateur en l'état de brouillon.
    await prisma.courseDraft.update({
      where: { id: draftId },
      data: { status: "DRAFT" },
    });
    revalidatePath("/fr/admin");
    return { ok: true };
  }

  // Approbation : publie un Course à partir des champs du brouillon.
  const title = draft.name?.trim() || "Formation sans titre";
  const baseSlug =
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || `formation-${draftId.slice(0, 6)}`;

  // Garantit l'unicité du slug.
  let slug = baseSlug;
  for (let i = 2; await prisma.course.findUnique({ where: { slug } }); i++) {
    slug = `${baseSlug}-${i}`;
  }

  // Le prix décide de tout le reste : accessType, part formateur, devise.
  // Un cours à 0 reste FREE, personne n'a de session Stripe à créer pour lui.
  const priceCents = finalPrice(priceCentsOverride, draft.priceCents);
  const sharePct =
    draft.author.instructorProfile?.revenueSharePct ?? DEFAULT_REVENUE_SHARE_PCT;

  await prisma.$transaction([
    prisma.course.create({
      data: {
        slug,
        title,
        tagline: draft.description?.slice(0, 120) ?? title,
        description: draft.description ?? "",
        category: draft.category ?? "Général",
        level: draft.level ?? "Débutant",
        instructorName: draft.author.name ?? "Formateur",
        instructorId: draft.author.id,
        image: "/og.png",
        status: "PUBLISHED",
        accessType: priceCents > 0 ? "PAID" : "FREE",
        priceCents,
        currency: draft.currency || DEFAULT_CURRENCY,
        revenueSharePct: sharePct,
        // Le prix vient d'être tranché à la main : le seed de prix n'a plus
        // rien à faire sur cette ligne.
        pricingSeededAt: new Date(),
        skills: draft.skills ? JSON.stringify(draft.skills.split(",").map((s) => s.trim())) : null,
        prerequisites: draft.prerequisites
          ? JSON.stringify(draft.prerequisites.split(",").map((s) => s.trim()))
          : null,
      },
    }),
    prisma.courseDraft.delete({ where: { id: draftId } }),
  ]);

  revalidatePath("/fr/admin");
  return { ok: true };
}
