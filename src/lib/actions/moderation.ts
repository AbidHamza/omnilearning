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
import { countLessons, parseCurriculum, totalMinutes } from "@/lib/curriculum";
import { locales } from "@/i18n/config";

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

function splitList(raw: string | null): string | null {
  if (!raw) return null;
  const items = raw
    .split(/[,\n;]/)
    .map((s) => s.trim())
    .filter(Boolean);
  return items.length ? JSON.stringify(items) : null;
}

function refreshAll() {
  for (const l of locales) {
    revalidatePath(`/${l}/admin`);
    revalidatePath(`/${l}/formateur`);
    revalidatePath(`/${l}/formations`);
    revalidatePath(`/${l}`);
  }
}

type UploadRef = { field: string; url: string; name: string };

function parseUploads(raw: string | null): UploadRef[] {
  if (!raw) return [];
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v)
      ? v.filter(
          (u): u is UploadRef =>
            !!u && typeof u.url === "string" && typeof u.field === "string",
        )
      : [];
  } catch {
    return [];
  }
}

// Approuve ou refuse un brouillon soumis (CourseDraft SUBMITTED). Réservé aux
// admins. L'approbation publie un Course complet : parties, leçons, vidéos et
// quiz saisis par le formateur, couverture envoyée. Le refus repasse le
// brouillon en DRAFT, le formateur le retrouve dans son espace.
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
          instructorProfile: { select: { revenueSharePct: true, bio: true } },
        },
      },
    },
  });
  if (!draft) return { ok: false, error: "Brouillon introuvable." };
  if (draft.status !== "SUBMITTED") {
    return { ok: false, error: "Ce brouillon n'est plus en attente." };
  }

  if (!approved) {
    await prisma.courseDraft.update({
      where: { id: draftId },
      data: { status: "DRAFT" },
    });
    refreshAll();
    return { ok: true };
  }

  const modules = parseCurriculum(draft.curriculum);
  if (countLessons(modules) === 0) {
    return {
      ok: false,
      error: "Ce brouillon n'a aucune leçon : il ne peut pas être publié.",
    };
  }

  const title = draft.name?.trim() || "Formation sans titre";
  const baseSlug =
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || `formation-${draftId.slice(0, 6)}`;

  let slug = baseSlug;
  for (let i = 2; await prisma.course.findUnique({ where: { slug } }); i++) {
    slug = `${baseSlug}-${i}`;
  }

  const priceCents = finalPrice(priceCentsOverride, draft.priceCents);
  const sharePct =
    draft.author.instructorProfile?.revenueSharePct ?? DEFAULT_REVENUE_SHARE_PCT;

  const uploads = parseUploads(draft.uploads);
  const cover = uploads.find((u) => u.field === "cover")?.url;
  const trailer = uploads.find((u) => u.field === "video")?.url;

  // Les deux premières leçons restent ouvertes sans compte, comme pour les
  // formations maison : c'est ce que le catalogue annonce.
  let lessonIndex = 0;
  const contentTypes = new Set<string>();
  const parts = modules.map((m, order) => ({
    title: m.title,
    order,
    lessons: {
      create: m.lessons.map((l, lo) => {
        lessonIndex += 1;
        contentTypes.add(l.type);
        const questions = l.questions?.map((q, qi) => ({
          id: `q${qi + 1}`,
          prompt: q.prompt,
          options: q.options,
          correctIndex: q.correctIndex,
          ...(q.explanation ? { explanation: q.explanation } : null),
        }));
        // Une vidéo sans fichier : la première leçon reprend la bande-annonce
        // envoyée avec le brouillon, les autres affichent leur texte.
        const videoUrl = l.videoUrl ?? (lessonIndex === 1 ? trailer : undefined);
        return {
          key: `l${lessonIndex}`,
          title: l.title,
          type: l.type,
          duration: l.durationMin > 0 ? `${l.durationMin} min` : "",
          body: l.body ?? null,
          videoUrl: l.type === "video" ? (videoUrl ?? null) : null,
          videoDurationSec: l.type === "video" && l.durationMin ? l.durationMin * 60 : null,
          questions: questions?.length ? JSON.stringify(questions) : null,
          isFree: lessonIndex <= 2,
          order: lo,
        };
      }),
    },
  }));

  const objectives = splitList(draft.skills);

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
        instructorBio: draft.author.instructorProfile?.bio ?? null,
        instructorId: draft.author.id,
        image: cover ?? "/og.png",
        hours: Math.max(1, Math.ceil(totalMinutes(modules) / 60)),
        status: "PUBLISHED",
        accessType: priceCents > 0 ? "PAID" : "FREE",
        priceCents,
        currency: draft.currency || DEFAULT_CURRENCY,
        revenueSharePct: sharePct,
        pricingSeededAt: new Date(),
        skills: splitList(draft.skills),
        objectives,
        prerequisites: splitList(draft.prerequisites),
        contentTypes: JSON.stringify([...contentTypes]),
        parts: { create: parts },
      },
    }),
    prisma.courseDraft.delete({ where: { id: draftId } }),
  ]);

  refreshAll();
  return { ok: true };
}
