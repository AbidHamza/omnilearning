import type {
  Course,
  CoursePart,
  CourseTranslation,
  Lesson,
  LessonTranslation,
} from "../../types";

/**
 * Catalogue libre : cours adaptés de sources sous licence ouverte, écrits en
 * français (la base, comme le reste du catalogue) et traduits en anglais et en
 * arabe dans la même source. Contrairement aux fixtures de `content/`, ils
 * partent en production : `prisma/seed.ts` les importe à chaque déploiement
 * sans jamais effacer une leçon, donc sans toucher à la progression des
 * apprenants.
 */
export type FreeLesson = Lesson & {
  i18n: { en: LessonTranslation; ar: LessonTranslation };
};

export type FreeCourse = Omit<Course, "parts" | "accessType" | "priceCents" | "currency"> & {
  parts: (Omit<CoursePart, "lessons"> & { lessons: FreeLesson[] })[];
  i18n: { en: CourseTranslation; ar: CourseTranslation };
  /** Provenance, relue avant chaque import : licence et version de la source. */
  source: {
    name: string;
    url: string;
    license: "MIT" | "CC-BY-4.0";
    /** Commit ou date de consultation de la version adaptée. */
    version: string;
  };
};
