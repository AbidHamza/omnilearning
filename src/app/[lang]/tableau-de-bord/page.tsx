import Link from "next/link";
import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getCourses } from "@/lib/courses";
import { requireRole } from "@/lib/dal";
import { auth } from "@/lib/auth";
import { getGamification, getXpByDay } from "@/lib/gamification";
import { allLessons } from "@/lib/courses";
import type { Course } from "@/lib/types";
import CourseCard from "@/components/course-card";
import GamificationPanel from "@/components/gamification-panel";
import ProgressChart from "@/components/progress-chart";
import { BoltIcon, ClockIcon, LayersIcon } from "@/components/icons";
import type { Metadata } from "next";

// Écran privé : derrière une session, sans contenu public. Il n'a rien à faire
// dans un index, et une canonique n'aurait aucun sens sur une page dont le
// contenu change avec le compte connecté.
export const metadata: Metadata = { robots: { index: false, follow: false } };


export default async function DashboardPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const d = dict.dashboard;

  // Garde serveur : tableau de bord = espace privé d'un utilisateur connecté.
  const { user: currentUser } = await requireRole(locale, [
    "etudiant",
    "formateur",
    "admin",
  ]);
  const session = await auth();
  const userId = session?.user?.id ?? null;
  const [gamification, xpByDay] = userId
    ? await Promise.all([getGamification(userId), getXpByDay(userId, 14)])
    : [null, []];
  const allCourses = await getCourses();
  const bySlug = new Map(allCourses.map((c) => [c.slug, c]));

  // Point de reprise réel : `lastLesson` stocke une KEY de leçon (ex. "l7").
  // Tolérant aux anciennes valeurs (titre) : match par titre en secours, puis
  // repli sur la première leçon du cours.
  function resumeLesson(course: Course, lastLesson: string) {
    const lessons = allLessons(course);
    return (
      lessons.find((l) => l.id === lastLesson) ??
      lessons.find((l) => l.title === lastLesson) ??
      lessons[0]
    );
  }

  const enrolled = currentUser.enrolled
    .map((e) => ({ ...e, course: bySlug.get(e.slug) }))
    .filter((e): e is typeof e & { course: NonNullable<typeof e.course> } =>
      Boolean(e.course),
    );

  const totalHours = enrolled.reduce((s, e) => s + e.course.hours, 0);
  const totalQuiz = enrolled.reduce(
    (s, e) =>
      s +
      e.course.parts.reduce(
        (n, p) => n + p.lessons.filter((l) => l.type === "quiz").length,
        0
      ),
    0
  );

  const enrolledSlugs = new Set(currentUser.enrolled.map((e) => e.slug));
  const recommended = allCourses.filter((c) => !enrolledSlugs.has(c.slug)).slice(0, 4);

  const totals = [
    { label: `${totalHours} ${d.unitHours}`, icon: ClockIcon },
    { label: `${enrolled.length} ${d.unitCourses}`, icon: LayersIcon },
    { label: `${totalQuiz} ${d.unitQuizzes}`, icon: BoltIcon },
  ];

  return (
    <div className="container-page py-10">
      <p className="font-mono text-xs text-muted-soft">
        <span className="text-primary">$</span> whoami # {currentUser.name.split(" ")[0]}
      </p>
      <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight">
        {d.titleLead} <span className="text-primary">{d.titleAccent}</span>
      </h1>

      {/* Ligne 1 : cours suivis + objectif hebdo */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-[var(--radius-card)] bg-surface p-6">
          <h2 className="text-sm text-muted">{d.enrolledTitle}</h2>
          <div className="mt-4 space-y-6">
            {enrolled.slice(0, 2).map((e) => {
              const resume = resumeLesson(e.course, e.lastLesson);
              const totalLessons = e.course.parts.reduce(
                (n, p) => n + p.lessons.length,
                0
              );
              return (
                <div key={e.slug}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">
                      {e.course.title}
                    </h3>
                    <span className="shrink-0 text-xs text-muted">
                      {e.completedLessons}/{totalLessons} {dict.course.lessonsCount}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-bg">
                      <div
                        className="h-full rounded-[3px] bg-primary"
                        style={{ width: `${e.progress}%` }}
                      />
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-muted">
                      {e.progress}%
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="min-w-0 truncate text-xs text-muted-soft">
                      {resume ? resume.title : ""}
                    </span>
                    <Link
                      href={
                        resume
                          ? `/formations/${e.slug}/${resume.id}`
                          : `/formations/${e.slug}`
                      }
                      className="shrink-0 rounded-full border border-line bg-bg px-5 py-1.5 text-sm font-semibold transition hover:border-primary hover:text-primary-dark"
                    >
                      {d.resume}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {gamification ? (
          <GamificationPanel
            data={gamification}
            leaderboardHref={`/${locale}/classement`}
            dict={dict}
          />
        ) : (
          <section className="rounded-[var(--radius-card)] bg-surface p-6">
            <h2 className="text-sm text-muted">{d.progressTitle}</h2>
            <p className="mt-2 text-sm text-muted">{d.progressConnect}</p>
          </section>
        )}
      </div>

      {/* Progression */}
      <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold">{d.progressionHeading}</h2>
          <Link
            href="/formations"
            className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm font-semibold transition hover:border-primary"
          >
            {d.seeMore}
          </Link>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-[200px_1fr]">
          <div className="rounded-xl bg-bg p-5">
            <p className="text-sm text-muted">{d.total}</p>
            <ul className="mt-4 space-y-4">
              {totals.map((t) => (
                <li key={t.label} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-primary-dark">
                    <t.icon width={17} height={17} />
                  </span>
                  <span className="font-semibold">{t.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <ProgressChart data={xpByDay} />
        </div>
      </section>

      {/* Suivre de nouvelles formations */}
      <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6">
        <h2 className="font-display text-xl font-bold">{d.recommendTitle}</h2>
        <p className="mt-1 text-sm text-muted">
          {enrolled[0]
            ? d.recommendBecause.replace("{title}", enrolled[0].course.title)
            : d.recommendDefault}
        </p>
        <div className="no-scrollbar -mx-6 mt-5 flex gap-4 overflow-x-auto px-6 pb-1">
          {recommended.map((c) => (
            <CourseCard
              key={c.slug}
              course={c}
              labels={dict.card}
              locale={locale}
              variant="compact"
              className="w-[230px] shrink-0 bg-bg"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
