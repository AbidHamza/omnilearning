"use client";

import Link from "next/link";
import { useState } from "react";
import type { Course } from "@/lib/types";
import { CheckIcon, ChevronDown, LockIcon } from "./icons";
import LessonTypeIcon from "./lesson-type-icon";
import { useT } from "@/i18n/provider";
import { localePath, type Locale } from "@/i18n/config";

// Programme détaillé d'un cours (accordéon par partie). Pour un visiteur
// anonyme, les leçons hors accès libre portent un cadenas ; pour un membre,
// les leçons terminées portent une coche (completedKeys vient du serveur).
export default function Curriculum({
  course,
  locale,
  isAuthenticated = false,
  completedKeys = [],
}: {
  course: Course;
  locale: Locale;
  isAuthenticated?: boolean;
  completedKeys?: string[];
}) {
  const t = useT();
  const completed = new Set(completedKeys);
  const [open, setOpen] = useState<Record<string, boolean>>(
    Object.fromEntries(course.parts.map((p, i) => [p.id, i === 0]))
  );

  return (
    <div className="space-y-6">
      {!isAuthenticated && (
        <p className="flex items-center gap-2 rounded-[var(--radius-card)] border border-line bg-surface px-4 py-3 text-sm text-muted">
          <LockIcon width={15} height={15} className="shrink-0 text-primary" />
          {t.course.freeTeaser}
        </p>
      )}

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
              <span className="ms-auto text-sm text-muted">
                {part.lessons.length} {t.curriculum.lessonsCount}
              </span>
            </button>

            {isOpen && (
              <div className="mt-3 space-y-3">
                {part.lessons.map((lesson) => {
                  const isLocked = !isAuthenticated && !lesson.isFree;
                  const isDone = completed.has(lesson.id);
                  return (
                    <Link
                      key={lesson.id}
                      href={localePath(
                        locale,
                        `/formations/${course.slug}/${lesson.id}`
                      )}
                      className="flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-bg p-4 transition-colors hover:border-primary"
                    >
                      <LessonTypeIcon type={lesson.type} className="h-10 w-10" />
                      <div className="min-w-0">
                        <div
                          className={`truncate font-medium ${
                            isLocked ? "text-muted" : ""
                          }`}
                        >
                          {lesson.title}
                        </div>
                        <div className="text-sm text-muted">
                          {t.lessonType[lesson.type]}
                          {!isAuthenticated && lesson.isFree && (
                            <span className="text-primary">
                              {" "}
                              · {t.course.freeBadge}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="ms-auto flex shrink-0 items-center gap-2 text-sm text-muted">
                        {lesson.duration}
                        {isLocked && (
                          <LockIcon
                            width={15}
                            height={15}
                            aria-label={t.course.lockedBadge}
                          />
                        )}
                        {isDone && (
                          <CheckIcon
                            width={15}
                            height={15}
                            className="text-success"
                            aria-label={t.course.completedLabel}
                          />
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
