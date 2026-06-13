"use client";

import { useEffect, useRef } from "react";
import { markLessonCompleteAction } from "@/lib/actions/progress";

// Marque une leçon vidéo/texte comme terminée quand un utilisateur connecté la
// consulte. Invisible. No-op si l'utilisateur n'est pas connecté (action serveur).
export default function LessonTracker({
  courseSlug,
  lessonKey,
}: {
  courseSlug: string;
  lessonKey: string;
}) {
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;
    // Petit délai : on considère la leçon "vue" après quelques secondes.
    const id = setTimeout(() => {
      void markLessonCompleteAction(courseSlug, lessonKey);
    }, 3000);
    return () => clearTimeout(id);
  }, [courseSlug, lessonKey]);

  return null;
}
