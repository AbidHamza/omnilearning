import Link from "next/link";
import { isLocale, defaultLocale } from "@/i18n/config";
import { getCourses } from "@/lib/courses";
import { requireRole } from "@/lib/dal";
import CourseCard from "@/components/course-card";
import ProgressChart from "@/components/progress-chart";
import { BoltIcon, ClockIcon, LayersIcon, PencilIcon } from "@/components/icons";

const strike = [
  { day: "Lun.", on: false },
  { day: "Mar.", on: true },
  { day: "Mer.", on: true },
  { day: "Jeu.", on: true },
  { day: "Ven.", on: false },
  { day: "Sam.", on: true },
  { day: "Dim.", on: false },
];

export default async function DashboardPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  // Garde serveur : tableau de bord = espace privé d'un utilisateur connecté.
  const { user: currentUser } = await requireRole(locale, [
    "etudiant",
    "formateur",
    "admin",
  ]);
  const allCourses = await getCourses();
  const bySlug = new Map(allCourses.map((c) => [c.slug, c]));

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
    { label: `${totalHours} heures`, icon: ClockIcon },
    { label: `${enrolled.length} formations`, icon: LayersIcon },
    { label: `${totalQuiz} quiz`, icon: BoltIcon },
  ];

  return (
    <div className="container-page py-10">
      <span className="rule-accent mb-3" />
      <p className="text-sm text-muted">Bienvenue {currentUser.name.split(" ")[0]}</p>
      <h1 className="mt-1 text-4xl font-semibold">
        Votre <span className="font-accent text-primary">tableau de bord</span>
      </h1>

      {/* Ligne 1 : cours suivis + objectif hebdo */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-[var(--radius-card)] bg-surface p-6">
          <h2 className="text-sm text-muted">Les cours suivis</h2>
          <div className="mt-4 space-y-6">
            {enrolled.slice(0, 2).map((e) => {
              const first = e.course.parts[0]?.lessons[0];
              return (
                <div key={e.slug}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">
                      {e.course.title}
                    </h3>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-bg">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${e.progress}%` }}
                      />
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-muted">
                      {e.progress}%
                    </span>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Link
                      href={first ? `/formations/${e.slug}/${first.id}` : `/formations/${e.slug}`}
                      className="rounded-full border border-line bg-bg px-5 py-1.5 text-sm font-semibold transition hover:border-primary hover:text-primary-dark"
                    >
                      Continuez
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-[var(--radius-card)] bg-surface p-6">
          <h2 className="text-sm text-muted">Objectif hebdomadaire</h2>
          <p className="mt-2 font-display font-bold">1 jour de strike</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {strike.map((s) => (
              <div
                key={s.day}
                className={`flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-xl text-[11px] ${
                  s.on
                    ? "bg-brand-soft text-primary-dark ring-1 ring-brand"
                    : "bg-bg text-muted-soft"
                }`}
              >
                <BoltIcon
                  width={16}
                  height={16}
                  className={s.on ? "text-primary" : "text-muted-soft"}
                />
                {s.day}
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-end">
            <button className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-4 py-1.5 text-sm font-semibold transition hover:border-primary">
              <PencilIcon width={14} height={14} />
              Modifier
            </button>
          </div>
        </section>
      </div>

      {/* Progression */}
      <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold">Progression</h2>
          <Link
            href="/formations"
            className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm font-semibold transition hover:border-primary"
          >
            Voir plus
          </Link>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-[200px_1fr]">
          <div className="rounded-xl bg-bg p-5">
            <p className="text-sm text-muted">Total</p>
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
          <ProgressChart />
        </div>
      </section>

      {/* Suivre de nouvelles formations */}
      <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6">
        <h2 className="font-display text-xl font-bold">
          Suivre de nouvelles formations
        </h2>
        <p className="mt-1 text-sm text-muted">
          Parce que vous avez suivi «&nbsp;Javascript - cours expert&nbsp;»
        </p>
        <div className="no-scrollbar -mx-6 mt-5 flex gap-4 overflow-x-auto px-6 pb-1">
          {recommended.map((c) => (
            <CourseCard
              key={c.slug}
              course={c}
              variant="compact"
              className="w-[230px] shrink-0 bg-bg"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
