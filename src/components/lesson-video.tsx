"use client";

import { useCallback, useRef, useState } from "react";
import { markLessonCompleteAction } from "@/lib/actions/progress";
import { PlayIcon } from "@/components/icons";

export type CaptionTrack = {
  /** Code BCP-47 court : fr | en | ar */
  lang: string;
  src: string;
  /** Nom de la langue dans cette langue (endonyme), pas traduit. */
  label: string;
  isDefault?: boolean;
};

/**
 * Seuil de complétion. Un générique de fin, une question posée en dernière
 * minute : personne ne regarde les 100 % d'une vidéo. 90 % = "vue".
 */
const COMPLETE_AT = 0.9;

/**
 * Lecteur d'une leçon vidéo.
 *
 * Deux états, aucun troisième :
 *  - une source existe → vrai lecteur natif, affiche, sous-titré, avec une
 *    complétion basée sur ce qui a réellement été regardé ;
 *  - aucune source → un encart qui dit franchement que la vidéo arrive, et qui
 *    renvoie au texte de la leçon. L'ancien écran (un bouton ▶ sur un carré
 *    noir qui ne lançait rien) faisait passer une leçon écrite pour une vidéo
 *    cassée.
 */
export default function LessonVideo({
  src,
  poster,
  durationSec,
  tracks = [],
  courseSlug,
  lessonKey,
  labels,
}: {
  src?: string;
  poster?: string;
  durationSec?: number;
  tracks?: CaptionTrack[];
  courseSlug: string;
  lessonKey: string;
  labels: {
    preparing: string;
    preparingHint: string;
    noSupport: string;
    fallback: string;
  };
}) {
  const marked = useRef(false);
  const [watched, setWatched] = useState(0);

  // La complétion suit le point le plus avancé atteint, pas la position
  // courante : revenir en arrière pour revoir un passage ne doit pas
  // "dé-terminer" la leçon.
  const onTimeUpdate = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const v = e.currentTarget;
      const total = v.duration || durationSec || 0;
      if (!total || !Number.isFinite(total)) return;

      const ratio = v.currentTime / total;
      setWatched((prev) => (ratio > prev ? ratio : prev));

      if (!marked.current && ratio >= COMPLETE_AT) {
        marked.current = true;
        void markLessonCompleteAction(courseSlug, lessonKey);
      }
    },
    [courseSlug, lessonKey, durationSec],
  );

  const onEnded = useCallback(() => {
    if (marked.current) return;
    marked.current = true;
    void markLessonCompleteAction(courseSlug, lessonKey);
  }, [courseSlug, lessonKey]);

  if (!src) {
    return (
      <div className="rounded-[var(--radius-card)] border border-dashed border-line bg-surface px-6 py-10 text-center">
        <PlayIcon
          width={26}
          height={26}
          className="mx-auto text-muted-soft"
          aria-hidden
        />
        <p className="mt-3 font-semibold">{labels.preparing}</p>
        <p className="mx-auto mt-1 max-w-md text-sm text-muted">
          {labels.preparingHint}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden rounded-[var(--radius-card)] bg-ink">
        <video
          className="aspect-video w-full"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onTimeUpdate={onTimeUpdate}
          onEnded={onEnded}
        >
          <source src={src} type={src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
          {tracks.map((tr) => (
            <track
              key={tr.lang}
              kind="subtitles"
              src={tr.src}
              srcLang={tr.lang}
              label={tr.label}
              default={tr.isDefault}
            />
          ))}
          <p className="p-4 text-sm text-white/80">
            {labels.noSupport}{" "}
            <a href={src} className="underline">
              {labels.fallback}
            </a>
          </p>
        </video>
      </div>

      {/* Barre de progression de visionnage : montre où en est la complétion
          sans obliger à deviner le seuil. */}
      <div
        className="mt-2 h-1 w-full overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(watched * 100)}
      >
        <div
          className="h-full bg-primary transition-[width] duration-300"
          style={{ width: `${Math.min(100, Math.round(watched * 100))}%` }}
        />
      </div>
    </div>
  );
}
