import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPaths } from "@/lib/paths";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { alternatesFor, pageUrl, shareCard, siteName } from "@/lib/site";

export async function generateMetadata(
  props: PageProps<"/[lang]/parcours">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const t = await getDictionary(locale);
  const title = t.paths.title;
  const description = t.paths.metaDescription;

  return {
    title,
    description,
    alternates: alternatesFor(locale, "/parcours"),
    openGraph: {
      type: "website",
      siteName,
      title: `${title} · ${siteName}`,
      description,
      url: pageUrl(locale, "/parcours"),
      locale,
      images: [shareCard(locale)],
    },
  };
}

export default async function PathsPage(props: PageProps<"/[lang]/parcours">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const p = t.paths;
  const paths = await getPaths(lang);

  return (
    <div className="container-page py-10 lg:py-14">
      <h1 className="text-3xl text-ink sm:text-[2.5rem]">{p.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{p.lead}</p>

      {paths.length === 0 ? (
        <p className="mt-10 text-sm text-muted">{p.empty}</p>
      ) : (
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {paths.map((path) => (
            <li key={path.slug} className="grid gap-4 py-7 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <h2 className="font-display text-xl font-semibold">
                  <Link href={localePath(lang, `/parcours/${path.slug}`)} className="hover:underline">
                    {path.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed">{path.summary}</p>
                <ol className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted">
                  {path.courses.map((c, i) => (
                    <li key={c.slug}>
                      {i > 0 && <span aria-hidden className="me-2">/</span>}
                      {c.title}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex items-center gap-4 md:flex-col md:items-end">
                <span className="text-sm text-muted">
                  {path.courses.length} {p.coursesCount}
                </span>
                <Link
                  href={localePath(lang, `/parcours/${path.slug}`)}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep"
                >
                  {p.open}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
