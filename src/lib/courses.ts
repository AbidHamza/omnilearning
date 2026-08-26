import "server-only";
import { cache } from "react";
import { prisma } from "@/lib/db";
import type {
  Category,
  Course,
  CoursePart,
  Lesson,
  PublicQuizQuestion,
  QuizQuestion,
} from "@/lib/types";

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

/**
 * Métadonnées d'une leçon : tout ce qu'il faut pour afficher un sommaire, un
 * cadenas et une durée, SANS le corps du cours ni les quiz.
 *
 * C'est la seule chose qu'un catalogue a le droit de charger. Charger le tout
 * revenait à sérialiser 1,7 Mo de HTML sur /formations, dont 346 `correctIndex`
 * de quiz lisibles par n'importe quel visiteur avec Ctrl+U.
 */
const lessonMetaSelect = {
  key: true,
  title: true,
  type: true,
  duration: true,
  isFree: true,
} as const;

type LessonRow = {
  key: string;
  title: string;
  type: string;
  duration: string;
  isFree: boolean;
  /** Absents des requêtes de catalogue : seule la vue leçon les charge. */
  body?: string | null;
  videoLabel?: string | null;
  questions?: string | null;
  videoUrl?: string | null;
  videoPoster?: string | null;
  videoDurationSec?: number | null;
  captions?: string | null;
};

/**
 * Sous-titres stockés en JSON-string : { "fr": "/videos/x.fr.vtt", … }.
 * Toute valeur non conforme est ignorée plutôt que de casser la page : un
 * mauvais chemin de sous-titre ne doit jamais empêcher de lire la leçon.
 */
function parseCaptions(raw: string | null | undefined): Record<string, string> | undefined {
  if (!raw) return undefined;
  try {
    const v = JSON.parse(raw);
    if (!v || typeof v !== "object" || Array.isArray(v)) return undefined;
    const out: Record<string, string> = {};
    for (const [lang, src] of Object.entries(v as Record<string, unknown>)) {
      if (typeof src === "string" && src.trim()) out[lang] = src;
    }
    return Object.keys(out).length ? out : undefined;
  } catch {
    return undefined;
  }
}

type CourseRow = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  level: string;
  instructorName: string;
  instructorBio: string | null;
  hours: number;
  rating: number;
  learners: number;
  accent: string;
  image: string;
  language: string | null;
  software: string | null;
  prerequisites: string | null;
  summary: string | null;
  objectives: string | null;
  skills: string | null;
  contentTypes: string | null;
  parts: { id: string; title: string; lessons: LessonRow[] }[];
};

/** Sommaire seul : parties + métadonnées de leçons. */
const outlineInclude = {
  parts: {
    orderBy: { order: "asc" },
    select: {
      id: true,
      title: true,
      lessons: { orderBy: { order: "asc" }, select: lessonMetaSelect },
    },
  },
} as const;

/** Contenu complet : corps markdown + quiz. Réservé à la vue d'une leçon. */
const fullInclude = {
  parts: {
    orderBy: { order: "asc" },
    include: { lessons: { orderBy: { order: "asc" } } },
  },
} as const;

function toUiCourse(c: CourseRow): Course {
  const parts: CoursePart[] = c.parts.map((p) => ({
    id: p.id,
    title: p.title,
    lessons: p.lessons.map((l): Lesson => {
      const questions = parseQuestions(l.questions ?? null);
      const captions = parseCaptions(l.captions);
      // Les champs optionnels ne sont posés que s'ils existent. Une clé à
      // `undefined` traverse quand même le payload RSC : écrites pour les
      // 295 leçons du sommaire, ces clés vides pesaient ~46 Ko de rien du
      // tout sur /formations.
      return {
        id: l.key,
        title: l.title,
        type: l.type as Lesson["type"],
        duration: l.duration,
        isFree: l.isFree,
        ...(l.body ? { body: l.body } : null),
        ...(l.videoLabel ? { videoLabel: l.videoLabel } : null),
        ...(l.videoUrl ? { videoUrl: l.videoUrl } : null),
        ...(l.videoPoster ? { videoPoster: l.videoPoster } : null),
        ...(l.videoDurationSec ? { videoDurationSec: l.videoDurationSec } : null),
        ...(captions ? { captions } : null),
        ...(questions ? { questions } : null),
      };
    }),
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

/**
 * Catalogue des cours publiés, sommaire seul. Alimente l'accueil, /formations,
 * le tableau de bord et les paramètres : aucun de ces écrans n'affiche le corps
 * d'une leçon, donc aucun n'a de raison de le transporter jusqu'au navigateur.
 */
export const getCourses = cache(async (): Promise<Course[]> => {
  const rows = await prisma.course.findMany({
    where: { status: "PUBLISHED" },
    include: outlineInclude,
    orderBy: { createdAt: "asc" },
  });
  return rows.map(toUiCourse);
});

/** Fiche cours : métadonnées + sommaire, sans le contenu des leçons. */
export const getCourseOutline = cache(
  async (slug: string): Promise<Course | undefined> => {
    const c = await prisma.course.findUnique({
      where: { slug },
      include: outlineInclude,
    });
    return c ? toUiCourse(c) : undefined;
  },
);

/**
 * Cours complet, contenu des leçons inclus. À n'appeler que depuis la vue d'une
 * leçon, et à ne jamais passer tel quel à un composant client : les quiz
 * portent leur `correctIndex`. Pour l'affichage, voir `toPublicQuestions`.
 */
export const getCourse = cache(async (slug: string): Promise<Course | undefined> => {
  const c = await prisma.course.findUnique({
    where: { slug },
    include: fullInclude,
  });
  return c ? toUiCourse(c) : undefined;
});

/**
 * Questions d'un quiz débarrassées de leur réponse. C'est cette forme-là qui
 * part au navigateur ; la correction se fait côté serveur
 * (`checkQuizAnswerAction`), sur les données lues en base.
 */
export function toPublicQuestions(
  questions: QuizQuestion[] | undefined,
): PublicQuizQuestion[] {
  if (!questions) return [];
  return questions.map((q) => ({
    id: q.id,
    prompt: q.prompt,
    options: q.options,
  }));
}

/**
 * Questions complètes d'une leçon, réponses comprises. Server-only, lu par
 * l'action de correction, jamais rendu dans une page.
 */
export async function getLessonQuestions(
  courseSlug: string,
  lessonKey: string,
): Promise<QuizQuestion[]> {
  const lesson = await prisma.lesson.findFirst({
    where: { key: lessonKey, part: { course: { slug: courseSlug } } },
    select: { questions: true, isFree: true },
  });
  return parseQuestions(lesson?.questions ?? null) ?? [];
}

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
 * Avis d'un cours. Seuls les avis rattachés à un compte sortent d'ici : un
 * `userId` nul désigne un avis d'amorçage, écrit sans que personne n'ait suivi
 * le cours. Ces avis alimentaient la note affichée ET l'`aggregateRating` du
 * JSON-LD, donc l'étoile que Google reprend dans ses résultats : une note
 * fabriquée y devient une allégation publique (FTC 16 CFR Part 465). Le filtre
 * est ici plutôt qu'en base : les lignes restent lisibles côté admin, et un
 * avis réel s'affiche dès qu'un compte le signe.
 *
 * L'agrégat (moyenne, répartition) est calculé sur tous les avis retenus ; la
 * liste affichée privilégie la langue courante et retombe sur le pool complet
 * s'il y a trop peu d'avis traduits.
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
      where: { courseId: course.id, userId: { not: null } },
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
