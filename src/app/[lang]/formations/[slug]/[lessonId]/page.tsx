import Link from "next/link";
import { notFound } from "next/navigation";
import { courses as seedCourses } from "@/lib/data";
import { allLessons, getCourse } from "@/lib/courses";
import Quiz from "@/components/quiz";
import LessonTypeIcon from "@/components/lesson-type-icon";
import LessonTracker from "@/components/lesson-tracker";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, PlayIcon } from "@/components/icons";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return seedCourses.flatMap((c) =>
    c.parts.flatMap((p) =>
      p.lessons.map((l) => ({ slug: c.slug, lessonId: l.id }))
    )
  );
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
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {lesson.title}
        </h1>

        <div className="mt-6">
          {lesson.type === "video" && (
            <div className="space-y-4">
              <div className="relative grid aspect-video place-items-center overflow-hidden rounded-[var(--radius-card)] bg-ink">
                <button className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-ink shadow-lg transition-transform hover:scale-105">
                  <PlayIcon width={28} height={28} />
                </button>
                <span className="absolute bottom-4 inset-inline-start-4 text-sm text-white/70">
                  {lesson.videoLabel ?? c.videoFallback}
                </span>
              </div>
              {lesson.body && (
                <p className="leading-relaxed text-muted">{lesson.body}</p>
              )}
            </div>
          )}

          {lesson.type === "text" && (
            <article className="max-w-2xl leading-relaxed text-ink/90">
              <p>{lesson.body}</p>
            </article>
          )}

          {lesson.type === "quiz" && lesson.questions && (
            <Quiz
              questions={lesson.questions}
              courseSlug={course.slug}
              lessonKey={lesson.id}
            />
          )}
        </div>

        {/* Marque la leçon (vidéo/texte) comme terminée pour un utilisateur connecté. */}
        {lesson.type !== "quiz" && (
          <LessonTracker courseSlug={course.slug} lessonKey={lesson.id} />
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
          <div className="max-h-[70vh] overflow-y-auto">
            {course.parts.map((part) => (
              <div key={part.id} className="border-b border-line last:border-0">
                <div className="bg-bg px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  {part.title}
                </div>
                {part.lessons.map((l) => {
                  const active = l.id === lessonId;
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
                        }`}
                      >
                        {l.title}
                      </span>
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
