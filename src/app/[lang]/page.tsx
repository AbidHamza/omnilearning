import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/course-card";
import CategoryIcon from "@/components/category-icon";
import { categories, popularSlugs, getCourse } from "@/lib/data";
import {
  ArrowRightIcon,
  AwardIcon,
  ClockIcon,
  LayersIcon,
  StarIcon,
} from "@/components/icons";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath } from "@/i18n/config";
import { notFound } from "next/navigation";

const featureIcons = [LayersIcon, ClockIcon, StarIcon, AwardIcon];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const lp = (path: string) => localePath(lang, path);

  const popular = popularSlugs
    .map(getCourse)
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div>
      {/* Hero — image plein cadre */}
      <section className="relative h-[420px] w-full overflow-hidden sm:h-[480px]">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
          alt={t.home.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" />
        <div className="container-page relative flex h-full flex-col justify-center">
          <div className="max-w-xl rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/30">
              {t.home.heroBadge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              {t.home.heroTitle}{" "}
              <span className="text-brand">{t.home.heroHighlight}</span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={lp("/formations")}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                {t.common.explore}
                <ArrowRightIcon width={16} height={16} />
              </Link>
              <Link
                href={lp("/creer-compte")}
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                {t.common.createAccount}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cours populaires — bande teal */}
      <section className="bg-brand-band">
        <div className="container-page py-12">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              {t.home.popularTitle}
            </h2>
            <Link
              href={lp("/formations")}
              className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary-dark hover:underline sm:flex"
            >
              {t.common.viewAll} <ArrowRightIcon width={15} height={15} />
            </Link>
          </div>
          <div className="no-scrollbar -mx-6 mt-6 flex gap-4 overflow-x-auto px-6 pb-2">
            {popular.map((c) => (
              <CourseCard
                key={c.slug}
                course={c}
                variant="compact"
                className="w-[220px] shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Thèmes */}
      <section className="container-page py-16">
        <h2 className="text-2xl font-bold tracking-tight">
          {t.home.themesTitle}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={lp(`/formations?cat=${encodeURIComponent(cat.label)}`)}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-bg px-4 py-7 text-center transition hover:border-brand hover:shadow-[0_12px_30px_-16px_rgba(10,21,29,0.35)]"
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

      {/* Pourquoi */}
      <section className="border-t border-line bg-surface">
        <div className="container-page py-16">
          <h2 className="text-2xl font-bold tracking-tight">
            {t.home.whyTitle}
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.features.map((text, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={i} className="flex flex-col gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bg text-primary-dark ring-1 ring-line">
                    <Icon width={22} height={22} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-muted">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
