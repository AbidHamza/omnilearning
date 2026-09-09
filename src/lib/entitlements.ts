import "server-only";
import { cache } from "react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

/**
 * Droit d'accès à une formation, calculé côté serveur et lui seul.
 *
 * Avant, une leçon se déverrouillait dès qu'un compte existait : créer un
 * compte gratuit ouvrait le catalogue entier. Le verrou tient maintenant sur
 * trois choses, dans cet ordre : la leçon est-elle offerte, la formation est-
 * elle gratuite, et sinon existe-t-il un achat payé au nom de ce compte.
 */
export interface CourseAccess {
  isAuthenticated: boolean;
  /** Formation gratuite : l'inscription suffit. */
  isFreeCourse: boolean;
  /** Un Purchase en statut `paid` existe pour ce couple compte/formation. */
  hasPurchase: boolean;
  /** Auteur de la formation ou administrateur : accès de service. */
  isOwner: boolean;
  /** Verdict : le corps des leçons non offertes peut-il être rendu ? */
  canAccessFullCourse: boolean;
  /** Ce que l'appel à l'action doit proposer. */
  priceCents: number;
  currency: string;
  accessType: "FREE" | "PAID";
}

const anonymous = (
  accessType: "FREE" | "PAID",
  priceCents: number,
  currency: string,
): CourseAccess => ({
  isAuthenticated: false,
  isFreeCourse: accessType === "FREE",
  hasPurchase: false,
  isOwner: false,
  canAccessFullCourse: false,
  priceCents,
  currency,
  accessType,
});

/**
 * Mémoïsé par rendu : la fiche cours, la page leçon et le fil d'Ariane posent
 * la même question trois fois, ça ne fait qu'une requête.
 */
export const getCourseAccess = cache(
  async (courseSlug: string): Promise<CourseAccess> => {
    const course = await prisma.course.findUnique({
      where: { slug: courseSlug },
      select: {
        id: true,
        accessType: true,
        priceCents: true,
        currency: true,
        instructorId: true,
      },
    });
    if (!course) return anonymous("PAID", 0, "eur");

    const accessType = course.accessType === "PAID" ? "PAID" : "FREE";
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return anonymous(accessType, course.priceCents, course.currency);

    const isOwner =
      session?.user?.role === "ADMIN" ||
      (Boolean(course.instructorId) && course.instructorId === userId);

    const purchase = isOwner
      ? null
      : await prisma.purchase.findUnique({
          where: { userId_courseId: { userId, courseId: course.id } },
          select: { status: true },
        });
    const hasPurchase = purchase?.status === "paid";

    return {
      isAuthenticated: true,
      isFreeCourse: accessType === "FREE",
      hasPurchase,
      isOwner,
      canAccessFullCourse: accessType === "FREE" || hasPurchase || isOwner,
      priceCents: course.priceCents,
      currency: course.currency,
      accessType,
    };
  },
);

/**
 * Verrou d'une leçon. Une leçon marquée `isFree` reste ouverte à tout le monde,
 * y compris à un visiteur sans compte : c'est l'échantillon qui donne envie
 * d'acheter, il n'a aucune raison d'exiger une inscription.
 */
export function isLessonLocked(
  lessonIsFree: boolean | undefined,
  access: CourseAccess,
): boolean {
  if (lessonIsFree) return false;
  return !access.canAccessFullCourse;
}

/**
 * Vérification brute, sans cache ni session : appelée par les actions serveur
 * qui ont déjà l'identifiant en main (lecture de quiz, suivi de progression).
 */
export async function hasCourseAccess(
  userId: string,
  courseSlug: string,
): Promise<boolean> {
  const course = await prisma.course.findUnique({
    where: { slug: courseSlug },
    select: { id: true, accessType: true, instructorId: true },
  });
  if (!course) return false;
  if (course.accessType !== "PAID") return true;
  if (course.instructorId && course.instructorId === userId) return true;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });
  if (user?.role === "ADMIN") return true;
  const purchase = await prisma.purchase.findUnique({
    where: { userId_courseId: { userId, courseId: course.id } },
    select: { status: true },
  });
  return purchase?.status === "paid";
}
