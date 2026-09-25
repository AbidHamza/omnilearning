import "server-only";
import { cache } from "react";
import { prisma } from "@/lib/db";
import { getCourses } from "@/lib/courses";
import type { Course } from "@/lib/types";

type PathText = { title?: string; summary?: string; description?: string };

export interface LearningPathView {
  slug: string;
  title: string;
  summary: string;
  description: string;
  courses: Course[];
  updatedAt: Date;
}

function translated(raw: string | null, locale: string | undefined): PathText {
  if (!raw || !locale || locale === "fr") return {};
  try {
    const v = JSON.parse(raw);
    const t = v && typeof v === "object" ? (v as Record<string, unknown>)[locale] : undefined;
    return t && typeof t === "object" ? (t as PathText) : {};
  } catch {
    return {};
  }
}

/**
 * Parcours publiés, chacun avec ses formations dans l'ordre voulu. Une
 * formation dépubliée disparaît du parcours au lieu d'y laisser un lien mort ;
 * un parcours qui n'a plus aucune formation publiée n'est pas listé.
 */
export const getPaths = cache(async (locale?: string): Promise<LearningPathView[]> => {
  const [rows, courses] = await Promise.all([
    prisma.learningPath.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
      include: {
        courses: {
          orderBy: { position: "asc" },
          select: { course: { select: { slug: true } } },
        },
      },
    }),
    getCourses(locale),
  ]);
  const bySlug = new Map(courses.map((c) => [c.slug, c]));

  return rows
    .map((r) => {
      const t = translated(r.i18n, locale);
      return {
        slug: r.slug,
        title: t.title || r.title,
        summary: t.summary || r.summary,
        description: t.description || r.description,
        updatedAt: r.updatedAt,
        courses: r.courses
          .map((pc) => bySlug.get(pc.course.slug))
          .filter((c): c is Course => Boolean(c)),
      };
    })
    .filter((p) => p.courses.length > 0);
});

export async function getPath(
  slug: string,
  locale?: string,
): Promise<LearningPathView | undefined> {
  return (await getPaths(locale)).find((p) => p.slug === slug);
}
