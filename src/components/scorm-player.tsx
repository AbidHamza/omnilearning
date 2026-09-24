"use client";

import { useEffect, useState } from "react";
import { Scorm12API, Scorm2004API } from "scorm-again";
import { saveScormProgressAction } from "@/lib/actions/progress";

type Scorm12Instance = InstanceType<typeof Scorm12API>;
type Scorm2004Instance = InstanceType<typeof Scorm2004API>;

const DONE_1_2 = new Set(["completed", "passed"]);
const DONE_2004 = new Set(["completed", "passed"]);

/**
 * Lecteur SCORM : expose l'API (window.API / window.API_1484_11) que le
 * paquet ira chercher lui-même dans les fenêtres parentes, puis persiste le
 * cmi complet à chaque commit du paquet. La complétion vient du statut que le
 * paquet pose lui-même (cmi.core.lesson_status / cmi.completion_status +
 * cmi.success_status), jamais d'un minuteur ou d'un scroll.
 */
export default function ScormPlayer({
  courseSlug,
  lessonKey,
  entryPath,
  version,
  initialCmiJson,
}: {
  courseSlug: string;
  lessonKey: string;
  entryPath: string;
  version?: string;
  initialCmiJson?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const is2004 = version === "2004";
    const api: Scorm12Instance | Scorm2004Instance = is2004
      ? new Scorm2004API({})
      : new Scorm12API({});

    if (initialCmiJson) {
      try {
        api.loadFromJSON(JSON.parse(initialCmiJson));
      } catch {
        // cmi corrompu ou d'un format antérieur : on repart à vide plutôt que
        // de bloquer l'affichage du lecteur.
      }
    }

    const commit = () => {
      const cmiJson = api.renderCMIToJSONString();
      const isCompleted = is2004
        ? DONE_2004.has((api as Scorm2004Instance).cmi.completion_status) ||
          DONE_2004.has((api as Scorm2004Instance).cmi.success_status)
        : DONE_1_2.has((api as Scorm12Instance).cmi.core.lesson_status);
      void saveScormProgressAction({ courseSlug, lessonKey, cmiJson, isCompleted });
    };

    if (is2004) {
      api.on("Commit", commit);
      api.on("Terminate", commit);
      (window as unknown as { API_1484_11?: unknown }).API_1484_11 = api;
    } else {
      api.on("LMSCommit", commit);
      api.on("LMSFinish", commit);
      (window as unknown as { API?: unknown }).API = api;
    }

    setReady(true);

    return () => {
      if (is2004) {
        delete (window as unknown as { API_1484_11?: unknown }).API_1484_11;
      } else {
        delete (window as unknown as { API?: unknown }).API;
      }
    };
  }, [courseSlug, lessonKey, initialCmiJson, version]);

  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink">
      {ready && (
        <iframe
          src={entryPath}
          className="aspect-video w-full"
          title={lessonKey}
        />
      )}
    </div>
  );
}
