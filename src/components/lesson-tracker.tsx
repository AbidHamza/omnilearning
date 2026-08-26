"use client";

import { useEffect, useRef } from "react";
import {
  markLessonCompleteAction,
  openLessonAction,
} from "@/lib/actions/progress";

// Suivi invisible d'une leçon ouverte par un utilisateur connecté :
//  - à l'ouverture : auto-enrollment + mémorisation du point de reprise ;
//  - après un court délai de lecture (vidéo/texte) : leçon marquée terminée.
// Les quiz passent `markComplete={false}` : c'est la réussite du quiz qui
// valide la leçon. No-op côté serveur si personne n'est connecté.
export default function LessonTracker({
  courseSlug,
  lessonKey,
  markComplete = true,
}: {
  courseSlug: string;
  lessonKey: string;
  markComplete?: boolean;
}) {
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;

    void openLessonAction(courseSlug, lessonKey);

    if (!markComplete) return;
    // Petit délai : on considère la leçon "vue" après quelques secondes.
    const id = setTimeout(() => {
      void markLessonCompleteAction(courseSlug, lessonKey);
    }, 3000);
    return () => clearTimeout(id);
  }, [courseSlug, lessonKey, markComplete]);

  return null;
}
