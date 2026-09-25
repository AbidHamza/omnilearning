import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CourseCard from "@/components/course-card";
import Markdown from "@/components/markdown";
import { getPath } from "@/lib/paths";
import { getCurrentUser } from "@/lib/dal";
import { categoryName } from "@/i18n/category-name";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { alternatesFor, pageUrl, shareCard, siteName } from "@/lib/site";

export async function generateMetadata(
  props: PageProps<"/[lang]/parcours/[slug]">,
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const path = await getPath(slug, locale);
  if (!path) return {};

  return {
    title: path.title,
    description: path.summary,
    alternates: alternatesFor(locale, `/parcours/${slug}`),
    openGraph: {
      type: "website",
      siteName,
      title: `${path.title} · ${siteName}`,
      description: path.summary,
      url: pageUrl(locale, `/parcours/${slug}`),
      locale,
      images: [shareCard(locale)],
    },
  };
}

export default async function PathPage(props: PageProps<"/[lang]/parcours/[slug]">) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const [t, path, current] = await Promise.all([
    getDictionary(lang),
    getPath(slug, lang),
    getCurrentUser(),
  ]);
  if (!path) notFound();
  const p = t.paths;

  const progressBySlug = new Map(
    (current?.user.enrolled ?? []).map((e) => [e.slug, e.progress]),
  );
  const signedIn = Boolean(current);
  const doneCount = path.courses.filter((c) => (progressBySlug.get(c.slug) ?? 0) >= 100).length;

  return (
    <div className="container-page py-10 lg:py-14">
      <Link href={localePath(lang, "/parcours")} className="text-sm text-muted hover:underline">
        {p.back}
      </Link>
      <h1 className="mt-3 text-3xl text-ink sm:text-[2.5rem]">{path.title}</h1>
      <p className="mt-3 max-w-2xl text-lg">{path.summary}</p>
      {path.description && (
        <div className="mt-5 max-w-2xl text-sm leading-relaxed">
          <Markdown source={path.description} />
        </div>
      )}

      {signedIn && (
        <p className="mt-6 text-sm">
          <span className="font-semibold">{p.yourProgress}</span>{" "}<span className="tabular-nums">{doneCount}/{path.courses.length}</span>
        </p>
      )}

      <ol className="mt-10 space-y-10">
        {path.courses.map((c, i) => {
          const progress = progressBySlug.get(c.slug);
          return (
            <li key={c.slug} className="grid gap-5 md:grid-cols-[9rem_minmax(0,22rem)_1fr] md:items-start">
              <div className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
                {p.step} {i + 1}
              </div>
              <CourseCard
                course={{ ...c, category: categoryName(t, c.category) }}
                labels={t.card}
                locale={lang}
                variant="compact"
              />
              <div className="text-sm">
                <p className="leading-relaxed">{c.tagline}</p>
                {signedIn && (
                  <p className="mt-3 text-muted">
                    {progress === undefined
                      ? p.notStarted
                      : progress >= 100
                        ? p.done
                        : `${progress} %`}
                  </p>
                )}
                <Link
                  href={localePath(lang, `/formations/${c.slug}`)}
                  className="mt-4 inline-block font-semibold text-primary underline"
                >
                  {p.startCourse}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
