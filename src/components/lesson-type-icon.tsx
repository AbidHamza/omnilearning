import type { LessonType } from "@/lib/types";
import { DocIcon, PlayIcon, QuizIcon } from "./icons";

// Les libellés de type de leçon sont gérés via i18n (t.lessonType.*).
const iconByType = {
  video: PlayIcon,
  text: DocIcon,
  quiz: QuizIcon,
} as const;

export default function LessonTypeIcon({
  type,
  className = "",
}: {
  type: LessonType;
  className?: string;
}) {
  const Icon = iconByType[type];
  return (
    <span
      className={`grid place-items-center rounded-[16px] bg-surface text-muted ${className}`}
      aria-hidden="true"
    >
      <Icon width={18} height={18} />
    </span>
  );
}
