export type LessonType = "video" | "text" | "quiz";

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
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
  questions?: QuizQuestion[];
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
  lastLesson: string;
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
