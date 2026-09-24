// Structure d'une formation telle que le formateur la saisit, avant qu'un admin
// ne la publie. Ce module est importé côté navigateur (l'assistant de création)
// et côté serveur (brouillon, modération) : pas de dépendance à Prisma ici.

export type DraftLessonType = "video" | "text" | "quiz" | "scorm";

export interface DraftQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface DraftLesson {
  title: string;
  type: DraftLessonType;
  /** Durée annoncée, en minutes. */
  durationMin: number;
  /** Contenu de la leçon en texte (markdown léger). */
  body?: string;
  /** Vidéo envoyée par le formateur (URL servie par /api/upload). */
  videoUrl?: string;
  videoName?: string;
  questions?: DraftQuestion[];
  /** Paquet SCORM envoyé par le formateur (dézippé par /api/upload/scorm). */
  scormPackagePath?: string;
  scormEntryPath?: string;
  scormVersion?: string;
}

export interface DraftModule {
  title: string;
  lessons: DraftLesson[];
}

/** Seuil de réussite d'un quiz, commun au serveur et à l'écran de résultat. */
export const QUIZ_PASS_RATIO = 0.7;

export const MAX_MODULES = 30;
export const MAX_LESSONS_PER_MODULE = 40;
export const MAX_QUESTIONS = 30;

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function minutes(v: unknown): number {
  const n = typeof v === "number" ? v : Number(v);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(600, Math.round(n));
}

function cleanQuestion(q: unknown): DraftQuestion | null {
  if (!q || typeof q !== "object") return null;
  const o = q as Record<string, unknown>;
  const prompt = str(o.prompt, 500);
  const options = Array.isArray(o.options)
    ? o.options.map((x) => str(x, 300)).filter(Boolean).slice(0, 6)
    : [];
  if (!prompt || options.length < 2) return null;
  const idx = typeof o.correctIndex === "number" ? o.correctIndex : Number(o.correctIndex);
  const correctIndex = Number.isInteger(idx) && idx >= 0 && idx < options.length ? idx : 0;
  const explanation = str(o.explanation, 1000);
  return { prompt, options, correctIndex, ...(explanation ? { explanation } : null) };
}

function cleanLesson(l: unknown): DraftLesson | null {
  if (!l || typeof l !== "object") return null;
  const o = l as Record<string, unknown>;
  const title = str(o.title, 200);
  if (!title) return null;
  const type: DraftLessonType =
    o.type === "video" || o.type === "quiz" || o.type === "scorm" ? o.type : "text";
  const body = str(o.body, 60_000);
  const videoUrl = str(o.videoUrl, 500);
  const videoName = str(o.videoName, 200);
  const scormPackagePath = str(o.scormPackagePath, 500);
  const scormEntryPath = str(o.scormEntryPath, 500);
  const scormVersion = str(o.scormVersion, 20);
  const questions = Array.isArray(o.questions)
    ? o.questions.map(cleanQuestion).filter((q): q is DraftQuestion => q !== null).slice(0, MAX_QUESTIONS)
    : [];
  return {
    title,
    type,
    durationMin: minutes(o.durationMin),
    ...(body ? { body } : null),
    ...(videoUrl && videoUrl.startsWith("/") ? { videoUrl } : null),
    ...(videoName ? { videoName } : null),
    ...(type === "quiz" && questions.length ? { questions } : null),
    ...(type === "scorm" && scormPackagePath.startsWith("/") ? { scormPackagePath } : null),
    ...(type === "scorm" && scormEntryPath.startsWith("/") ? { scormEntryPath } : null),
    ...(type === "scorm" && scormVersion ? { scormVersion } : null),
  };
}

/**
 * Nettoie ce qui arrive du navigateur : titres tronqués, types inconnus ramenés
 * à « texte », questions sans deux propositions écartées. Rien ne part en base
 * sans passer par ici.
 */
export function sanitizeCurriculum(input: unknown): DraftModule[] {
  if (!Array.isArray(input)) return [];
  const out: DraftModule[] = [];
  for (const m of input.slice(0, MAX_MODULES)) {
    if (!m || typeof m !== "object") continue;
    const o = m as Record<string, unknown>;
    const title = str(o.title, 200);
    const lessons = Array.isArray(o.lessons)
      ? o.lessons.map(cleanLesson).filter((l): l is DraftLesson => l !== null).slice(0, MAX_LESSONS_PER_MODULE)
      : [];
    if (!title && lessons.length === 0) continue;
    out.push({ title: title || "Module", lessons });
  }
  return out;
}

export function parseCurriculum(raw: string | null | undefined): DraftModule[] {
  if (!raw) return [];
  try {
    return sanitizeCurriculum(JSON.parse(raw));
  } catch {
    return [];
  }
}

export function countLessons(modules: DraftModule[]): number {
  return modules.reduce((n, m) => n + m.lessons.length, 0);
}

export function totalMinutes(modules: DraftModule[]): number {
  return modules.reduce(
    (n, m) => n + m.lessons.reduce((s, l) => s + l.durationMin, 0),
    0,
  );
}

/**
 * Un quiz sans question ne se corrige pas, une vidéo sans fichier ni texte
 * n'affiche rien : ces leçons ne passent pas la soumission.
 */
export function curriculumProblems(modules: DraftModule[]): string[] {
  const problems: string[] = [];
  modules.forEach((m, mi) => {
    m.lessons.forEach((l, li) => {
      const where = `${mi + 1}.${li + 1}`;
      if (l.type === "quiz" && (!l.questions || l.questions.length === 0)) {
        problems.push(`quiz:${where}`);
      }
      if (l.type === "video" && !l.videoUrl && !l.body) {
        problems.push(`video:${where}`);
      }
      if (l.type === "text" && !l.body) {
        problems.push(`text:${where}`);
      }
      if (l.type === "scorm" && (!l.scormPackagePath || !l.scormEntryPath)) {
        problems.push(`scorm:${where}`);
      }
    });
  });
  return problems;
}
