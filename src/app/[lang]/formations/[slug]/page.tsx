import Link from "next/link";
import { notFound } from "next/navigation";
import { contentCourses as seedCourses } from "@/lib/content";
import { allLessons, getCourse, getReviews } from "@/lib/courses";
import CourseReviews from "@/components/course-reviews";
import { PlayIcon, UserIcon } from "@/components/icons";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath } from "@/i18n/config";

export function generateStaticParams() {
  // Slugs canoniques (seed) pour le pré-rendu ; le contenu est lu en DB au build.
  return seedCourses.map((c) => ({ slug: c.slug }));
}

export default async function CoursePage(
  props: PageProps<"/[lang]/formations/[slug]">,
) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const lp = (path: string) => localePath(lang, path);
  const course = await getCourse(slug);
  if (!course) notFound();

  const lessons = allLessons(course);
  const firstLesson = lessons[0];
  const reviews = await getReviews(course.slug, lang);
  const reviewsTitle =
    lang === "en" ? "Reviews" : lang === "ar" ? "التقييمات" : "Avis des apprenants";

  const c = t.course;
  const meta = [
    `${c.durationLabel} : ${course.hours} ${c.hoursUnit}`,
    course.language && `${c.languageLabel} : ${course.language}`,
    `${c.levelLabel} : ${course.level}`,
    course.software && `${c.softwareLabel} : ${course.software}`,
  ].filter(Boolean) as string[];

  return (
    <div className="container-page py-12">
      <Link
        href={lp("/formations")}
        className="font-mono text-sm text-muted transition hover:text-primary"
      >
        ← {c.backToAll}
      </Link>

      <p className="mt-4 font-mono text-xs text-muted-soft">
        <span className="text-primary">$</span> cat ./formations/{course.slug}
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-[2.6rem]">
        {course.title}
      </h1>

      {/* Méta */}
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
        {meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* Prérequis */}
      {course.prerequisites && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted">{c.prerequisites}</span>
          {course.prerequisites.map((p) => (
            <span
              key={p}
              className="rounded-[3px] border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted"
            >
              {p}
            </span>
          ))}
        </div>
      )}

      {/* Description + vidéo */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-xl font-bold">{c.description}</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            {course.description}
          </p>
        </div>
        <button
          className="group relative grid aspect-video place-items-center overflow-hidden rounded-[var(--radius-card)] text-white"
          style={{ background: course.accent }}
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-ink transition-transform group-hover:scale-105">
            <PlayIcon width={26} height={26} />
          </span>
          <span className="absolute bottom-3 inset-inline-start-4 text-xs text-white/80">
            {c.trailer}
          </span>
        </button>
      </div>

      {/* Sommaire */}
      {course.summary && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">{c.summary}</h2>
          <ul className="mt-4 space-y-2">
            {course.parts.map((part) => (
              <li key={part.id}>
                <Link
                  href={lp(`/formations/${course.slug}/${part.lessons[0]?.id}`)}
                  className="text-[15px] text-primary-dark underline-offset-4 hover:underline"
                >
                  {part.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Objectifs */}
      {course.objectives && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">{c.objectives}</h2>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] text-muted marker:text-brand">
            {course.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Compétences */}
      {course.skills && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">{c.skills}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {course.skills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Type de contenu */}
      {course.contentTypes && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">{c.contentType}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {course.contentTypes.map((ct) => (
              <span
                key={ct}
                className="rounded-full border border-line px-4 py-2 text-sm"
              >
                {ct}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Formateur */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">{c.instructorTitle}</h2>
        <div className="mt-5 flex gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-soft text-primary-dark">
            <UserIcon width={26} height={26} />
          </span>
          <div>
            <div className="font-display font-bold">{course.instructor}</div>
            {course.instructorBio && (
              <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted">
                {course.instructorBio}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Avis */}
      <CourseReviews summary={reviews} title={reviewsTitle} />

      {/* CTA */}
      {firstLesson && (
        <div className="mt-14 flex justify-center">
          <Link
            href={lp(`/formations/${course.slug}/${firstLesson.id}`)}
            className="rounded-[3px] bg-primary px-10 py-3.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
          >
            {c.start}
          </Link>
        </div>
      )}
    </div>
  );
}
