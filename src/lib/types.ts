export type LessonType = "video" | "text" | "quiz";

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

/**
 * Question telle qu'elle part au navigateur : l'énoncé et les propositions,
 * jamais la bonne réponse. La correction est rendue par le serveur une fois la
 * réponse soumise (voir `checkQuizAnswerAction`).
 */
export type PublicQuizQuestion = Omit<QuizQuestion, "correctIndex" | "explanation">;

/** Verdict renvoyé par le serveur après soumission d'une réponse. */
export interface QuizVerdict {
  correct: boolean;
  correctIndex: number;
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  duration: string;
  body?: string;
  videoLabel?: string;
  /** Source jouable (MP4 progressif ou manifeste HLS). Vide = pas encore tournée. */
  videoUrl?: string;
  /** Image d'attente 16:9. Sans elle, le lecteur affiche un carré noir. */
  videoPoster?: string;
  /** Durée réelle en secondes (le champ `duration` reste l'étiquette lisible). */
  videoDurationSec?: number;
  /** Pistes de sous-titres par langue : { fr: "/videos/x.fr.vtt", en: "…" }. */
  captions?: Record<string, string>;
  questions?: QuizQuestion[];
  /** Accès libre sans compte (les 2 premières leçons de chaque cours). */
  isFree?: boolean;
}

export interface CoursePart {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  instructor: string;
  instructorBio?: string;
  hours: number;
  rating: number;
  learners: number;
  accent: string;
  image: string;
  language?: string;
  software?: string;
  prerequisites?: string[];
  summary?: string[];
  objectives?: string[];
  skills?: string[];
  contentTypes?: string[];
  parts: CoursePart[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface EnrolledCourse {
  slug: string;
  progress: number;
  /** Key de la dernière leçon consultée (ex. "l7") ; anciennes valeurs = titre. */
  lastLesson: string;
  /** Nombre de leçons terminées (LessonProgress isCompleted). */
  completedLessons: number;
}

export type Role = "visiteur" | "etudiant" | "formateur" | "admin";

export type CourseStatus = "online" | "pending" | "draft";

export interface CreatedCourse {
  title: string;
  status: CourseStatus;
  started: number;
  finished: number;
}

export interface InstructorStats {
  started: number;
  finished: number;
  rating: number;
}

export interface User {
  name: string;
  email: string;
  initials: string;
  role: Role;
  enrolled: EnrolledCourse[];
  certificates: { course: string; date: string }[];
  created?: CreatedCourse[];
  stats?: InstructorStats;
}

export interface PendingCourse {
  title: string;
  instructor: string;
  category: string;
  level: string;
  submitted: string;
}

export interface PlatformUser {
  name: string;
  initials: string;
  role: string;
  joined: string;
}
