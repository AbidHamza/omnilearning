import "server-only";
import { cache } from "react";
import { prisma } from "@/lib/db";
import type { Category, Course, CoursePart, Lesson, QuizQuestion } from "@/lib/types";

// Accès DB pour le catalogue, renvoyés dans la forme UI exacte (src/lib/types).
// Remplace les tableaux en mémoire de data.ts (qui sert désormais de source de seed).

function parseArr(value: string | null): string[] | undefined {
  if (!value) return undefined;
  try {
    const v = JSON.parse(value);
    return Array.isArray(v) ? (v as string[]) : undefined;
  } catch {
    return undefined;
  }
}

function parseQuestions(value: string | null): QuizQuestion[] | undefined {
  if (!value) return undefined;
  try {
    const v = JSON.parse(value);
    return Array.isArray(v) ? (v as QuizQuestion[]) : undefined;
  } catch {
    return undefined;
  }
}

type DbCourse = Awaited<ReturnType<typeof fetchCourseRows>>[number];

function fetchCourseRows() {
  return prisma.course.findMany({
    where: { status: "PUBLISHED" },
    include: { parts: { orderBy: { order: "asc" }, include: { lessons: { orderBy: { order: "asc" } } } } },
    orderBy: { createdAt: "asc" },
  });
}

function toUiCourse(c: DbCourse): Course {
  const parts: CoursePart[] = c.parts.map((p) => ({
    id: p.id,
    title: p.title,
    lessons: p.lessons.map(
      (l): Lesson => ({
        id: l.key,
        title: l.title,
        type: l.type as Lesson["type"],
        duration: l.duration,
        body: l.body ?? undefined,
        videoLabel: l.videoLabel ?? undefined,
        questions: parseQuestions(l.questions),
      }),
    ),
  }));

  return {
    slug: c.slug,
    title: c.title,
    tagline: c.tagline,
    description: c.description,
    category: c.category,
    level: c.level as Course["level"],
    instructor: c.instructorName,
    instructorBio: c.instructorBio ?? undefined,
    hours: c.hours,
    rating: c.rating,
    learners: c.learners,
    accent: c.accent,
    image: c.image,
    language: c.language ?? undefined,
    software: c.software ?? undefined,
    prerequisites: parseArr(c.prerequisites),
    summary: parseArr(c.summary),
    objectives: parseArr(c.objectives),
    skills: parseArr(c.skills),
    contentTypes: parseArr(c.contentTypes),
    parts,
  };
}

export const getCourses = cache(async (): Promise<Course[]> => {
  const rows = await fetchCourseRows();
  return rows.map(toUiCourse);
});

export const getCourse = cache(async (slug: string): Promise<Course | undefined> => {
  const c = await prisma.course.findUnique({
    where: { slug },
    include: { parts: { orderBy: { order: "asc" }, include: { lessons: { orderBy: { order: "asc" } } } } },
  });
  return c ? toUiCourse(c) : undefined;
});

export const getCategories = cache(async (): Promise<Category[]> => {
  const rows = await prisma.category.findMany({ orderBy: { label: "asc" } });
  return rows.map((c) => ({ id: c.slug, label: c.label, icon: c.icon }));
});

export interface CourseReview {
  id: string;
  authorName: string;
  authorInitials: string;
  rating: number;
  title: string | null;
  body: string;
  createdAt: Date;
}

export interface ReviewSummary {
  count: number;
  average: number; // arrondi au dixième
  distribution: Record<number, number>; // note (1..5) -> nombre d'avis
  reviews: CourseReview[]; // sélection à afficher
}

/**
 * Avis d'un cours : l'agrégat (moyenne, répartition) est calculé sur TOUS les
 * avis ; la liste affichée privilégie la langue courante et retombe sur le pool
 * complet s'il y a trop peu d'avis traduits.
 */
export const getReviews = cache(
  async (slug: string, locale: string): Promise<ReviewSummary> => {
    const empty: ReviewSummary = {
      count: 0,
      average: 0,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      reviews: [],
    };
    const course = await prisma.course.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (!course) return empty;

    const all = await prisma.review.findMany({
      where: { courseId: course.id },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });
    if (all.length === 0) return empty;

    const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let sum = 0;
    for (const r of all) {
      distribution[r.rating] = (distribution[r.rating] ?? 0) + 1;
      sum += r.rating;
    }

    const localized = all.filter((r) => r.locale === locale);
    const display = (localized.length >= 3 ? localized : all).slice(0, 8);

    return {
      count: all.length,
      average: Math.round((sum / all.length) * 10) / 10,
      distribution,
      reviews: display.map((r) => ({
        id: r.id,
        authorName: r.authorName,
        authorInitials: r.authorInitials,
        rating: r.rating,
        title: r.title,
        body: r.body,
        createdAt: r.createdAt,
      })),
    };
  },
);

/** Liste plate des leçons d'un cours, avec le titre de la partie (compat data.ts). */
export function allLessons(course: Course) {
  return course.parts.flatMap((p) =>
    p.lessons.map((l) => ({ ...l, partTitle: p.title })),
  );
}

export const popularSlugs = [
  "commencer-le-html",
  "javascript-cours-expert",
  "figma-avance",
  "prompt-engineering-ia",
  "cybersecurite",
  "devenir-product-owner",
];
