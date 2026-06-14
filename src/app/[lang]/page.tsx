import Link from "next/link";
import CourseCard from "@/components/course-card";
import CategoryIcon from "@/components/category-icon";
import { getCategories, getCourses, popularSlugs } from "@/lib/courses";
import {
  ArrowRightIcon,
  AwardIcon,
  CheckIcon,
  ChevronDown,
  ClockIcon,
  DocIcon,
  HeartIcon,
  LayersIcon,
  PlayIcon,
  QuizIcon,
  QuoteIcon,
  StarIcon,
  UsersIcon,
} from "@/components/icons";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath } from "@/i18n/config";
import { notFound } from "next/navigation";

const featureIcons = [LayersIcon, ClockIcon, StarIcon, AwardIcon];
const statIcons = [UsersIcon, LayersIcon, ClockIcon, HeartIcon];
const statValues = ["12 400+", "42", "180+", "96%"];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const lp = (path: string) => localePath(lang, path);

  const [allCourses, categories] = await Promise.all([getCourses(), getCategories()]);
  const bySlug = new Map(allCourses.map((c) => [c.slug, c]));
  const popular = popularSlugs
    .map((s) => bySlug.get(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const stats = [
    { value: statValues[0], label: t.home.statLearners },
    { value: statValues[1], label: t.home.statCourses },
    { value: statValues[2], label: t.home.statHours },
    { value: statValues[3], label: t.home.statSatisfaction },
  ];

  return (
    <div>
      {/* ── Hero : mesh clair + mockup produit ─────────────────────── */}
      <section className="relative overflow-hidden hero-mesh">
        <div className="pointer-events-none absolute inset-0 hero-grid" />
        <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          {/* Colonne texte */}
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-[3px] border border-primary/30 bg-brand-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              <span className="term-live" aria-hidden />
              {t.home.heroBadge}
            </span>
            <h1 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.4rem]">
              {t.home.heroTitle}{" "}
              <span className="relative whitespace-nowrap">
                <span className="text-primary">{t.home.heroHighlight}</span>
                <svg
                  className="absolute -bottom-1.5 start-0 w-full text-primary"
                  viewBox="0 0 300 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M3 9C61 4 147 3 297 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="term-cursor" aria-hidden />
            </h1>
            <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-muted sm:text-lg">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={lp("/creer-compte")}
                className="inline-flex items-center gap-2 rounded-[3px] border border-primary/40 bg-brand-soft px-5 py-3 font-mono text-sm font-semibold text-primary transition hover:bg-primary hover:text-[#04130a] hover:shadow-[0_0_22px_-2px_var(--color-brand-soft)]"
              >
                <span className="opacity-70">$</span>
                {t.home.heroCtaPrimary}
                <ArrowRightIcon width={16} height={16} className="rtl:rotate-180" />
              </Link>
              <Link
                href={lp("/formations")}
                className="inline-flex items-center gap-2 rounded-[3px] border border-line bg-surface px-5 py-3 font-mono text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
              >
                {t.home.heroCtaSecondary}
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 font-mono text-sm text-muted">
              <CheckIcon width={16} height={16} className="text-success" />
              {t.home.heroReassurance}
            </p>
          </div>

          {/* Colonne mockup produit — fenêtre terminal */}
          <div className="rise relative mx-auto w-full max-w-md lg:mx-0">
            {/* Bloom accent en arrière-plan, donne de la profondeur */}
            <div className="absolute -inset-x-3 -top-5 bottom-8 rounded-[10px] bg-gradient-to-br from-brand-soft to-transparent blur-2xl" />
            <div className="glass-card relative overflow-hidden rounded-[10px] border border-line-soft">
              {/* Barre de fenêtre terminal */}
              <div className="flex items-center gap-3 border-b border-line bg-bg/60 px-4 py-2.5">
                <span className="term-dots" aria-hidden>
                  <i /><i /><i />
                </span>
                <span className="truncate font-mono text-[11px] text-muted-soft">
                  omnilearn run ./formation
                </span>
                <span className="ms-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-primary">
                  <span className="term-live" aria-hidden /> session active
                </span>
              </div>
              {/* En-tête de la carte cours */}
              <div className="flex items-center gap-3 px-5 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-[3px] border border-line bg-bg text-primary">
                  <PlayIcon width={20} height={20} />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-[14px] font-bold text-ink">
                    {t.home.mockTitle}
                  </p>
                  <p className="truncate font-mono text-xs text-muted">
                    {t.home.mockSubtitle}
                  </p>
                </div>
                <span className="ms-auto rounded-[3px] border border-primary/30 bg-brand-soft px-2 py-1 font-mono text-[10px] font-bold uppercase text-primary">
                  {t.common.free}
                </span>
              </div>

              <div className="px-5 pb-5">
                {/* Barre de progression */}
                <div className="mt-5">
                  <div className="flex items-center justify-between font-mono text-[11px] font-semibold text-muted">
                    <span>{t.home.mockProgressLabel}</span>
                    <span className="text-primary">62%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-[2px] bg-surface-2">
                    <div className="h-full w-[62%] rounded-[2px] bg-primary" />
                  </div>
                </div>

                {/* Liste des leçons */}
                <ul className="mt-5 space-y-2.5">
                  <MockLesson
                    icon={<PlayIcon width={16} height={16} />}
                    label={t.home.mockLessonVideo}
                    done
                  />
                  <MockLesson
                    icon={<DocIcon width={16} height={16} />}
                    label={t.home.mockLessonText}
                    done
                  />
                  <MockLesson
                    icon={<QuizIcon width={16} height={16} />}
                    label={t.home.mockLessonQuiz}
                    active
                  />
                </ul>

                {/* Pied : meta */}
                <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 font-mono text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <ClockIcon width={14} height={14} />
                    {t.home.mockDuration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <LayersIcon width={14} height={14} />
                    {t.home.mockLevel}
                  </span>
                </div>
              </div>
            </div>

            {/* Pastille flottante : certificat */}
            <div className="absolute -bottom-5 end-2 flex items-center gap-2 rounded-[6px] border border-line bg-surface px-3.5 py-2.5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.7)]">
              <span className="grid h-8 w-8 place-items-center rounded-[3px] border border-primary/30 bg-brand-soft text-primary">
                <AwardIcon width={16} height={16} />
              </span>
              <div className="text-start">
                <p className="font-display text-[11px] font-bold leading-tight text-ink">
                  {t.home.featureTitles[3]}
                </p>
                <p className="font-mono text-[10px] leading-tight text-muted">
                  {t.home.mockProgressLabel} · 96%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bande de stats ─────────────────────────────────────────── */}
      <section className="section-dark border-y border-line">
        <div className="container-page py-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <div key={s.label} className="flex flex-col gap-2 text-center">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-[3px] border border-line bg-bg text-primary">
                    <Icon width={18} height={18} />
                  </span>
                  <span className="font-display text-3xl font-extrabold tracking-tight text-primary">
                    {s.value}
                  </span>
                  <span className="font-mono text-xs font-medium text-muted">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cours populaires ───────────────────────────────────────── */}
      <section className="bg-brand-band">
        <div className="container-page py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="rule-accent mb-4" />
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                {t.home.popularTitle}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                {t.home.popularSubtitle}
              </p>
            </div>
            <Link
              href={lp("/formations")}
              className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary-dark hover:underline sm:flex"
            >
              {t.common.viewAll}{" "}
              <ArrowRightIcon width={15} height={15} className="rtl:rotate-180" />
            </Link>
          </div>
          <div className="no-scrollbar -mx-6 mt-8 flex gap-4 overflow-x-auto px-6 pb-2">
            {popular.map((c) => (
              <CourseCard
                key={c.slug}
                course={c}
                labels={t.card}
                variant="compact"
                className="w-[230px] shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Thèmes ─────────────────────────────────────────────────── */}
      <section className="container-page py-16">
        <div className="max-w-xl">
          <span className="rule-accent mb-4" />
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {t.home.themesTitle}
          </h2>
          <p className="mt-2 text-sm text-muted sm:text-base">
            {t.home.themesSubtitle}
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={lp(`/formations?cat=${encodeURIComponent(cat.label)}`)}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-bg px-4 py-7 text-center transition hover:-translate-y-0.5 hover:border-brand hover:shadow-[0_16px_36px_-20px_rgba(10,21,29,0.4)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-primary-dark transition group-hover:bg-brand group-hover:text-ink">
                <CategoryIcon name={cat.icon} width={22} height={22} />
              </span>
              <span className="text-sm font-semibold leading-tight">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Pourquoi OmniLearn ─────────────────────────────────────── */}
      <section className="border-t border-line bg-surface">
        <div className="container-page py-16">
          <div className="max-w-xl">
            <span className="rule-accent mb-4" />
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t.home.whyTitle}
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              {t.home.whySubtitle}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.features.map((text, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded-2xl border border-line bg-bg p-6 transition hover:border-brand/60 hover:shadow-[0_16px_36px_-22px_rgba(10,21,29,0.4)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-primary-dark">
                    <Icon width={22} height={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {t.home.featureTitles[i]}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Témoignages ────────────────────────────────────────────── */}
      <section className="container-page py-16">
        <div className="max-w-xl">
          <span className="rule-accent mb-4" />
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {t.home.testimonialsTitle}
          </h2>
          <p className="mt-2 text-sm text-muted sm:text-base">
            {t.home.testimonialsSubtitle}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.home.testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-line bg-bg p-6 shadow-[0_18px_44px_-30px_rgba(10,21,29,0.45)]"
            >
              <QuoteIcon width={28} height={28} className="text-brand" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-sm font-bold text-primary-dark">
                  {initials(item.name)}
                </span>
                <div className="text-start">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Accès gratuit (pricing) ────────────────────────────────── */}
      <section className="border-t border-line bg-surface">
        <div className="container-page py-16">
          <div className="mx-auto max-w-xl text-center">
            <span className="rule-accent mb-4" />
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t.home.pricingTitle}
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              {t.home.pricingSubtitle}
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-lg">
            <div className="absolute -inset-2 rounded-[12px] bg-gradient-to-br from-brand-soft to-transparent blur-xl" />
            <div className="relative overflow-hidden rounded-[10px] border border-primary/30 bg-surface p-8 shadow-card">
              <span className="inline-flex items-center gap-2 rounded-[3px] border border-primary/30 bg-brand-soft px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.06em] text-primary">
                <span className="opacity-70">$</span>
                {t.home.pricingPlan}
              </span>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-5xl font-extrabold tracking-tight text-ink">
                  {t.home.pricingPrice}
                </span>
                <span className="pb-1.5 font-mono text-sm font-medium text-muted">
                  {t.home.pricingPeriod}
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {t.home.pricingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[3px] bg-brand-soft text-primary">
                      <CheckIcon width={13} height={13} />
                    </span>
                    <span className="font-sans text-sm leading-relaxed text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={lp("/creer-compte")}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[3px] border border-primary/40 bg-brand-soft px-6 py-3.5 font-mono text-sm font-semibold text-primary transition hover:bg-primary hover:text-[#04130a]"
              >
                <span className="opacity-70">$</span>
                {t.home.pricingCta}
                <ArrowRightIcon width={16} height={16} className="rtl:rotate-180" />
              </Link>
              <p className="mt-3 text-center font-mono text-xs text-muted">
                {t.home.pricingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="container-page py-16">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <span className="rule-accent mb-4" />
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t.home.faqTitle}
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              {t.home.faqSubtitle}
            </p>
          </div>
          <div className="mt-8 space-y-3">
            {t.home.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-line bg-bg px-5 open:border-brand/50 open:shadow-[0_14px_34px_-24px_rgba(10,21,29,0.4)]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-start font-display text-[15px] font-bold text-ink">
                  {item.q}
                  <ChevronDown
                    width={18}
                    height={18}
                    className="faq-chevron shrink-0 text-muted"
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final — invocation terminal ────────────────────────── */}
      <section className="container-page pb-20">
        <div className="section-dark relative overflow-hidden rounded-[10px] border border-line px-8 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute -top-16 start-1/4 h-56 w-56 rounded-full bg-brand-soft blur-3xl" />
            <div className="absolute -bottom-20 end-1/4 h-56 w-56 rounded-full bg-brand-soft blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-xl">
            <p className="mb-3 term-comment font-mono text-xs text-muted-soft">
              omnilearn --start
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-3 font-sans text-sm text-muted sm:text-base">
              {t.home.ctaSubtitle}
            </p>
            <Link
              href={lp("/creer-compte")}
              className="mt-7 inline-flex items-center gap-2 rounded-[3px] border border-primary/40 bg-brand-soft px-6 py-3.5 font-mono text-sm font-semibold text-primary transition hover:bg-primary hover:text-[#04130a] hover:shadow-[0_0_24px_-2px_var(--color-brand-soft)]"
            >
              <span className="opacity-70">$</span>
              {t.home.ctaButton}
              <ArrowRightIcon width={16} height={16} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Ligne de leçon dans le mockup produit du hero. */
function MockLesson({
  icon,
  label,
  done = false,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  done?: boolean;
  active?: boolean;
}) {
  return (
    <li
      className={`flex items-center gap-3 rounded-[3px] px-3 py-2.5 ${
        active ? "bg-brand-soft ring-1 ring-primary/40" : "bg-bg/40"
      }`}
    >
      <span
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-[3px] ${
          active ? "bg-primary text-[#04130a]" : "border border-line bg-bg text-primary"
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1 truncate font-mono text-[13px] font-medium text-ink">
        {label}
      </span>
      {done && (
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-[3px] bg-brand-soft text-primary">
          <CheckIcon width={12} height={12} />
        </span>
      )}
    </li>
  );
}

/* Initiales depuis un nom complet, pour l'avatar des témoignages. */
function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}
