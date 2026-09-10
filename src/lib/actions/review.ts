"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { locales, isLocale, defaultLocale } from "@/i18n/config";

/** Codes traduits côté écran (dictionnaire `reviews.errors`). */
export type ReviewError =
  | "auth"
  | "courseMissing"
  | "notEnrolled"
  | "alreadyReviewed"
  | "badRating"
  | "bodyTooShort";

export type ReviewResult = { ok: true } | { ok: false; error: ReviewError };

const MIN_BODY = 20;
const MAX_BODY = 2000;

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "");
  return letters.join("") || "??";
}

/**
 * Un avis par compte et par cours, réservé à qui suit le cours (inscription)
 * ou l'a payé. Le nom affiché vient du compte au moment du dépôt : c'est ce
 * que les visiteurs liront, et ce que la plateforme peut justifier.
 */
export async function submitReviewAction(
  slug: string,
  rating: number,
  title: string,
  body: string,
  locale: string,
): Promise<ReviewResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "auth" };

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { ok: false, error: "badRating" };
  }
  const cleanBody = body.trim().slice(0, MAX_BODY);
  if (cleanBody.length < MIN_BODY) return { ok: false, error: "bodyTooShort" };
  const cleanTitle = title.trim().slice(0, 120);

  const course = await prisma.course.findFirst({
    where: { slug, status: "PUBLISHED" },
    select: { id: true },
  });
  if (!course) return { ok: false, error: "courseMissing" };

  const [enrollment, purchase] = await Promise.all([
    prisma.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId: course.id } },
      select: { id: true },
    }),
    prisma.purchase.findUnique({
      where: { userId_courseId: { userId, courseId: course.id } },
      select: { status: true },
    }),
  ]);
  if (!enrollment && purchase?.status !== "paid") {
    return { ok: false, error: "notEnrolled" };
  }

  const existing = await prisma.review.findFirst({
    where: { courseId: course.id, userId },
    select: { id: true },
  });
  if (existing) return { ok: false, error: "alreadyReviewed" };

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { name: true, email: true },
  });
  const authorName = user?.name?.trim() || user?.email?.split("@")[0] || "Membre";

  await prisma.review.create({
    data: {
      courseId: course.id,
      userId,
      authorName,
      authorInitials: initials(authorName),
      rating,
      title: cleanTitle || null,
      body: cleanBody,
      locale: isLocale(locale) ? locale : defaultLocale,
    },
  });

  for (const l of locales) revalidatePath(`/${l}/formations/${slug}`);
  return { ok: true };
}
