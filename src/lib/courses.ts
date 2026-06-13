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

/** Liste plate des leçons d'un cours, avec le titre de la partie (compat data.ts). */
export function allLessons(course: Course) {
  return course.parts.flatMap((p) =>
    p.lessons.map((l) => ({ ...l, partTitle: p.title })),
  );
}

export const popularSlugs = [
  "commencer-le-html",
  "figma-avance",
  "javascript-cours-expert",
  "debuter-en-cpp",
  "cybersecurite",
  "devenir-product-owner",
];
