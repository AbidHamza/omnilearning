import type { LessonType } from "@/lib/types";
import { DocIcon, PlayIcon, QuizIcon } from "./icons";

const map = {
  video: { Icon: PlayIcon, label: "Vidéo" },
  text: { Icon: DocIcon, label: "Texte" },
  quiz: { Icon: QuizIcon, label: "Quiz" },
} as const;

export function lessonTypeLabel(type: LessonType) {
  return map[type].label;
}

export default function LessonTypeIcon({
  type,
  className = "",
}: {
  type: LessonType;
  className?: string;
}) {
  const { Icon } = map[type];
  return (
    <span
      className={`grid place-items-center rounded-lg bg-surface text-muted ${className}`}
    >
      <Icon width={18} height={18} />
    </span>
  );
}
