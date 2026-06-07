import Link from "next/link";
import { notFound } from "next/navigation";
import { allLessons, courses, getCourse } from "@/lib/data";
import Quiz from "@/components/quiz";
import LessonTypeIcon, { lessonTypeLabel } from "@/components/lesson-type-icon";
import { PlayIcon } from "@/components/icons";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return courses.flatMap((c) =>
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
  const course = getCourse(slug);
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
          className="text-sm text-muted hover:text-ink"
        >
          ← {course.title}
        </Link>

        <div className="mt-3 flex items-center gap-2 text-sm text-muted">
          <span className="rounded-full bg-surface px-2.5 py-0.5">
            {lessonTypeLabel(lesson.type)}
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
            <Quiz questions={lesson.questions} />
          )}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
          {prev ? (
            <Link
              href={lp(`/formations/${course.slug}/${prev.id}`)}
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:bg-surface"
            >
              ← Précédent
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={lp(`/formations/${course.slug}/${next.id}`)}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Leçon suivante →
            </Link>
          ) : (
            <Link
              href={lp("/tableau-de-bord")}
              className="rounded-full bg-success px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Terminer la formation ✓
            </Link>
          )}
        </div>
      </div>

      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
          <div className="border-b border-line bg-surface px-4 py-3 text-sm font-semibold">
            Programme · {lessons.length} leçons
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
