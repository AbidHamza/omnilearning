import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import PrintButton from "@/components/print-button";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getCompletedEnrollment, getCurrentUser } from "@/lib/dal";
import { formatDate } from "@/lib/intl";
import { siteName } from "@/lib/site";

export const metadata: Metadata = { robots: { index: false, follow: false } };

const printCss = `@media print {
  body { visibility: hidden; }
  .certificate-sheet, .certificate-sheet * { visibility: visible; }
  .certificate-sheet { position: fixed; inset: 0; margin: 0; border: 0; }
}`;

export default async function CertificatePage(
  props: PageProps<"/[lang]/formations/[slug]/certificat">,
) {
  const { lang, slug } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const c = dict.certificate;

  const me = await getCurrentUser();
  if (!me) {
    redirect(
      localePath(
        locale,
        `/connexion?next=${encodeURIComponent(`/formations/${slug}/certificat`)}`,
      ),
    );
  }
  const cert = await getCompletedEnrollment(slug);
  if (!cert) notFound();

  return (
    <div className="container-page py-10">
      <style>{printCss}</style>
      <article className="certificate-sheet mx-auto max-w-3xl border border-line bg-surface px-8 py-12 sm:px-14 sm:py-16">
        <p className="text-xs uppercase tracking-wide text-muted">{siteName}</p>
        <h1 className="mt-4 font-display text-3xl tracking-tight">{c.title}</h1>

        <p className="mt-10 text-sm text-muted">{c.issuedTo}</p>
        <p className="mt-1 font-display text-4xl font-semibold">{cert.userName}</p>

        <p className="mt-8 text-sm text-muted">{c.forCourse}</p>
        <p className="mt-1 text-2xl font-semibold">{cert.courseTitle}</p>

        <dl className="mt-8 border-t border-line text-sm">
          <div className="flex justify-between gap-6 border-b border-line py-2.5">
            <dt className="text-muted">{c.hoursLabel.replace("{n}", String(cert.hours))}</dt>
          </div>
          {cert.instructorName && (
            <div className="flex justify-between gap-6 border-b border-line py-2.5">
              <dt className="text-muted">{c.instructorLabel}</dt>
              <dd className="font-semibold">{cert.instructorName}</dd>
            </div>
          )}
          <div className="flex justify-between gap-6 border-b border-line py-2.5">
            <dt className="text-muted">{c.completedOn}</dt>
            <dd className="font-semibold">{formatDate(cert.completedAt, locale)}</dd>
          </div>
        </dl>

        <p className="mt-8 text-sm">{c.issuer}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted">{c.verifyNote}</p>
      </article>

      <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center gap-4">
        <PrintButton label={c.print} />
        <Link
          href={localePath(locale, `/formations/${slug}`)}
          className="text-sm font-semibold text-primary-dark hover:underline"
        >
          {c.back}
        </Link>
      </div>
    </div>
  );
}
