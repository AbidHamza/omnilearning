import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contentCourses as seedCourses } from "@/lib/content";
import {
  allLessons,
  getCourse,
  getCourseOutline,
  toPublicQuestions,
} from "@/lib/courses";
import { getCourseViewerState } from "@/lib/dal";
import { alternatesFor, pageUrl, siteName } from "@/lib/site";
import Quiz from "@/components/quiz";
import Markdown from "@/components/markdown";
import LessonTypeIcon from "@/components/lesson-type-icon";
import LessonTracker from "@/components/lesson-tracker";
import LessonVideo, { type CaptionTrack } from "@/components/lesson-video";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  LockIcon,
} from "@/components/icons";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return seedCourses.flatMap((c) =>
    c.parts.flatMap((p) =>
      p.lessons.map((l) => ({ slug: c.slug, lessonId: l.id }))
    )
  );
}

export async function generateMetadata(
  props: PageProps<"/[lang]/formations/[slug]/[lessonId]">,
): Promise<Metadata> {
  const { lang, slug, lessonId } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const outline = await getCourseOutline(slug);
  const lesson = outline && allLessons(outline).find((l) => l.id === lessonId);
  if (!outline || !lesson) return {};

  const path = `/formations/${outline.slug}/${lesson.id}`;
  const description = `${lesson.title}, ${lesson.duration}. ${outline.tagline}`;
  return {
    title: `${lesson.title} · ${outline.title}`,
    description,
    alternates: alternatesFor(locale, path),
    openGraph: {
      type: "article",
      siteName,
      title: `${lesson.title} · ${outline.title}`,
      description,
      url: pageUrl(locale, path),
      locale,
    },
  };
}

/**
 * Nom de chaque langue DANS cette langue. Un menu de sous-titres qui propose
 * « Arabe » à un arabophone est un menu traduit à l'envers : les pistes se
 * nomment toujours par leur endonyme, quelle que soit la langue de la page.
 */
const CAPTION_LABELS: Record<string, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

/** Pistes <track> d'une leçon, celle de la langue courante activée par défaut. */
function captionTracks(
  captions: Record<string, string> | undefined,
  locale: string,
): CaptionTrack[] {
  if (!captions) return [];
  return Object.entries(captions).map(([lang, src]) => ({
    lang,
    src,
    label: CAPTION_LABELS[lang] ?? lang,
    isDefault: lang === locale,
  }));
}

/**
 * Extrait un teaser en texte brut (~maxWords mots) d'un body markdown :
 * on retire les blocs de code/figures, la syntaxe inline et les titres pour
 * ne garder que des phrases lisibles. Sert à la vue verrouillée ; le body
 * complet n'est JAMAIS envoyé à un visiteur non connecté.
 */
function teaserFromMarkdown(source: string, maxWords = 40): string {
  const noFences = source.replace(/```[\s\S]*?```/g, " ");
  const plain = noFences
    .split("\n")
    .filter((line) => !/^\s*(#{1,6}\s|>|\||[-*]\s|\d+\.\s)/.test(line))
    .join(" ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const words = plain.split(" ").filter(Boolean);
  if (words.length <= maxWords) return plain;
  return words.slice(0, maxWords).join(" ") + "…";
}

export default async function LessonPage(
  props: PageProps<"/[lang]/formations/[slug]/[lessonId]">
) {
  const { lang, slug, lessonId } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const c = t.course;
  const lp = (path: string) => localePath(lang, path);
  const course = await getCourse(slug);
  if (!course) notFound();

  const lessons = allLessons(course);
  const idx = lessons.findIndex((l) => l.id === lessonId);
  if (idx === -1) notFound();

  const lesson = lessons[idx];
  const prev = lessons[idx - 1];
  const next = lessons[idx + 1];

  const viewer = await getCourseViewerState(course.slug);
  const completed = new Set(viewer.completedKeys);
  // Garde serveur : leçon non gratuite + visiteur anonyme = vue verrouillée.
  const locked = !lesson.isFree && !viewer.isAuthenticated;

  // Chemin de retour NON préfixé par la locale : useLocaleRouter.push() du
  // formulaire de connexion re-préfixe lui-même.
  const nextParam = encodeURIComponent(`/formations/${course.slug}/${lessonId}`);

  return (
    <div className="container-page grid gap-10 py-8 lg:grid-cols-[1fr_320px]">
      <div className="min-w-0">
        <Link
          href={lp(`/formations/${course.slug}`)}
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
        >
          <ArrowLeftIcon width={15} height={15} className="rtl:rotate-180" />
          {course.title}
        </Link>

        <div className="mt-3 flex items-center gap-2 text-sm text-muted">
          <span className="rounded-full bg-surface px-2.5 py-0.5">
            {t.lessonType[lesson.type]}
          </span>
          <span>· {lesson.duration}</span>
          {locked && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-xs">
              <LockIcon width={12} height={12} />
              {c.lockedBadge}
            </span>
          )}
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {lesson.title}
        </h1>

        {locked ? (
          <div className="mt-6 max-w-2xl">
            {lesson.body && (
              <p className="text-ink/80">{teaserFromMarkdown(lesson.body)}</p>
            )}

            <div className="mt-6 overflow-hidden rounded-[var(--radius-card)] border border-line">
              <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              </div>
              <div className="bg-bg px-5 py-6 font-mono text-sm" dir="ltr">
                <p>
                  <span className="text-primary">$</span>{" "}
                  <span className="text-muted">
                    open {course.slug}/{lesson.id}
                  </span>
                </p>
                <p className="mt-2 text-ink">
                  {c.lockedPrompt}
                  <span className="term-cursor" aria-hidden />
                </p>
              </div>
              <div className="border-t border-line px-5 py-5">
                <p className="flex items-center gap-2 font-semibold">
                  <LockIcon width={16} height={16} className="text-primary" />
                  {c.lockedTitle}
                </p>
                <p className="mt-2 text-sm text-muted">{c.lockedText}</p>
                <p className="mt-1 text-sm text-muted">{c.freeTeaser}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={lp(`/creer-compte?next=${nextParam}`)}
                    className="inline-flex items-center gap-2 rounded-[3px] bg-primary px-5 py-2.5 text-sm font-semibold text-[#04130a] hover:bg-primary-deep"
                  >
                    {c.lockedCreate}
                    <ArrowRightIcon width={16} height={16} className="rtl:rotate-180" />
                  </Link>
                  <Link
                    href={lp(`/connexion?next=${nextParam}`)}
                    className="inline-flex items-center gap-2 rounded-[3px] border border-line px-5 py-2.5 text-sm font-semibold hover:bg-surface"
                  >
                    {c.lockedSignIn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-6">
              {lesson.type === "video" && (
                <div className="space-y-4">
                  <LessonVideo
                    src={lesson.videoUrl}
                    poster={lesson.videoPoster}
                    durationSec={lesson.videoDurationSec}
                    tracks={captionTracks(lesson.captions, lang)}
                    courseSlug={course.slug}
                    lessonKey={lesson.id}
                    labels={{
                      preparing: c.videoPreparing,
                      preparingHint: c.videoPreparingHint,
                      noSupport: c.videoNoSupport,
                      fallback: c.videoDownload,
                    }}
                  />
                  {/* Ce que la vidéo montre, en une ligne : utile avant de la
                      lancer, et c'est le seul repère quand elle n'est pas
                      encore tournée. */}
                  {lesson.videoLabel && (
                    <p className="max-w-2xl text-sm text-muted">{lesson.videoLabel}</p>
                  )}
                  {lesson.body && (
                    <Markdown source={lesson.body} className="max-w-2xl text-ink/90" />
                  )}
                </div>
              )}

              {lesson.type === "text" && lesson.body && (
                <Markdown source={lesson.body} className="max-w-2xl text-ink/90" />
              )}

              {lesson.type === "quiz" && lesson.questions && (
                <Quiz
                  // Sans les reponses : la correction est demandee au serveur.
                  questions={toPublicQuestions(lesson.questions)}
                  courseSlug={course.slug}
                  lessonKey={lesson.id}
                />
              )}
            </div>

            {/* Auto-enrollment + point de reprise. La complétion automatique
                ne vaut que pour une leçon écrite : un quiz se valide en le
                réussissant, une vidéo en la regardant (le lecteur s'en charge
                à 90 %). Marquer « terminé » une vidéo de 20 min au bout de
                3 secondes ne mesurait rien du tout. */}
            <LessonTracker
              courseSlug={course.slug}
              lessonKey={lesson.id}
              markComplete={
                lesson.type !== "quiz" &&
                !(lesson.type === "video" && Boolean(lesson.videoUrl))
              }
            />
          </>
        )}

        <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
          {prev ? (
            <Link
              href={lp(`/formations/${course.slug}/${prev.id}`)}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:bg-surface"
            >
              <ArrowLeftIcon width={16} height={16} className="rtl:rotate-180" />
              {c.prevLesson}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={lp(`/formations/${course.slug}/${next.id}`)}
              className="inline-flex items-center gap-2 rounded-[3px] bg-primary px-5 py-2.5 text-sm font-semibold text-[#04130a] hover:bg-primary-deep"
            >
              {c.nextLesson}
              <ArrowRightIcon width={16} height={16} className="rtl:rotate-180" />
            </Link>
          ) : (
            <Link
              href={lp("/tableau-de-bord")}
              className="inline-flex items-center gap-2 rounded-[3px] bg-success px-5 py-2.5 text-sm font-semibold text-[#04130a] hover:opacity-90"
            >
              {c.finish}
              <CheckIcon width={16} height={16} />
            </Link>
          )}
        </div>
      </div>

      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
          <div className="border-b border-line bg-surface px-4 py-3 text-sm font-semibold">
            {c.programLabel} · {lessons.length} {c.lessonsCount}
          </div>
          {!viewer.isAuthenticated && (
            <div className="border-b border-line bg-bg px-4 py-2.5 text-xs text-muted">
              {c.freeTeaser}
            </div>
          )}
          <div className="max-h-[70vh] overflow-y-auto">
            {course.parts.map((part) => (
              <div key={part.id} className="border-b border-line last:border-0">
                <div className="bg-bg px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  {part.title}
                </div>
                {part.lessons.map((l) => {
                  const active = l.id === lessonId;
                  const isLocked = !viewer.isAuthenticated && !l.isFree;
                  const isDone = completed.has(l.id);
                  return (
                    <Link
                      key={l.id}
                      href={lp(`/formations/${course.slug}/${l.id}`)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                        active
                          ? "bg-primary-soft"
                          : "bg-bg hover:bg-surface"
                      }`}
                    >
                      <LessonTypeIcon type={l.type} className="h-8 w-8" />
                      <span
                        className={`line-clamp-2 flex-1 ${
                          active ? "font-semibold text-primary" : ""
                        } ${isLocked ? "text-muted" : ""}`}
                      >
                        {l.title}
                      </span>
                      {isLocked && (
                        <LockIcon
                          width={14}
                          height={14}
                          className="shrink-0 text-muted"
                          aria-label={c.lockedBadge}
                        />
                      )}
                      {isDone && (
                        <CheckIcon
                          width={14}
                          height={14}
                          className="shrink-0 text-success"
                          aria-label={c.completedLabel}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
