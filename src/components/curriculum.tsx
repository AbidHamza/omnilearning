"use client";

import Link from "next/link";
import { useState } from "react";
import type { Course } from "@/lib/types";
import { ChevronDown } from "./icons";
import LessonTypeIcon, { lessonTypeLabel } from "./lesson-type-icon";

export default function Curriculum({ course }: { course: Course }) {
  const [open, setOpen] = useState<Record<string, boolean>>(
    Object.fromEntries(course.parts.map((p, i) => [p.id, i === 0]))
  );

  return (
    <div className="space-y-6">
      {course.parts.map((part) => {
        const isOpen = open[part.id];
        return (
          <div key={part.id}>
            <button
              onClick={() => setOpen((o) => ({ ...o, [part.id]: !o[part.id] }))}
              className="flex w-full items-center gap-2 text-left"
            >
              <h3 className="text-lg font-semibold">{part.title}</h3>
              <ChevronDown
                className={`text-muted transition-transform ${
                  isOpen ? "" : "-rotate-90"
                }`}
              />
              <span className="ml-auto text-sm text-muted">
                {part.lessons.length} leçons
              </span>
            </button>

            {isOpen && (
              <div className="mt-3 space-y-3">
                {part.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/formations/${course.slug}/${lesson.id}`}
                    className="flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-bg p-4 transition-colors hover:border-primary"
                  >
                    <LessonTypeIcon type={lesson.type} className="h-10 w-10" />
                    <div className="min-w-0">
                      <div className="truncate font-medium">{lesson.title}</div>
                      <div className="text-sm text-muted">
                        {lessonTypeLabel(lesson.type)}
                      </div>
                    </div>
                    <span className="ml-auto shrink-0 text-sm text-muted">
                      {lesson.duration}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
