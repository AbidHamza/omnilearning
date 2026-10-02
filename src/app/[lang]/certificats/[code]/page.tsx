import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { parseCertificateCode } from "@/lib/certificates";
import { prisma } from "@/lib/db";
import { formatDate } from "@/lib/intl";
import { siteName } from "@/lib/site";

export const dynamic = "force-dynamic";
// Le nom d'un apprenant ne s'indexe pas : la page se partage, elle ne se référence pas.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function PublicCertificatePage(
  props: PageProps<"/[lang]/certificats/[code]">,
) {
  const { lang, code: rawCode } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const code = parseCertificateCode(decodeURIComponent(rawCode));
  if (!code) notFound();

  // Seuls le nom, le cours, la date et la durée sortent d'ici, jamais l'e-mail.
  const cert = await prisma.certificate.findUnique({
    where: { code },
    select: {
      code: true,
      userName: true,
      issuedAt: true,
      course: { select: { title: true, hours: true } },
    },
  });
  if (!cert) notFound();

  const dict = await getDictionary(locale);
  const c = dict.certificate;

  return (
    <div className="container-page py-10">
      <article className="mx-auto max-w-3xl border border-line bg-surface px-8 py-12 sm:px-14 sm:py-16">
        <p className="text-xs uppercase tracking-wide text-muted">{siteName}</p>
        <h1 className="mt-4 font-display text-3xl tracking-tight">{c.authentic}</h1>
        <p className="mt-2 text-sm text-muted">{c.authenticNote}</p>

        <p className="mt-10 text-sm text-muted">{c.issuedToShort}</p>
        <p className="mt-1 break-words font-display text-4xl font-semibold">{cert.userName}</p>

        <p className="mt-8 text-sm text-muted">{c.forCourse}</p>
        <p className="mt-1 text-2xl font-semibold">{cert.course.title}</p>

        <dl className="mt-8 border-t border-line text-sm">
          <div className="flex justify-between gap-6 border-b border-line py-2.5">
            <dt className="text-muted">{c.durationLabel}</dt>
            <dd className="font-semibold">{c.hoursShort.replace("{n}", String(cert.course.hours))}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-line py-2.5">
            <dt className="text-muted">{c.issuedOn}</dt>
            <dd className="font-semibold">{formatDate(cert.issuedAt, locale)}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-line py-2.5">
            <dt className="text-muted">{c.codeLabel}</dt>
            <dd className="font-mono font-semibold">{cert.code}</dd>
          </div>
        </dl>

        <p className="mt-8 text-sm">{c.issuer}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted">{c.verifyNote}</p>
      </article>
      <div className="mx-auto mt-6 max-w-3xl">
        <Link
          href={localePath(locale, "/certificats/verifier")}
          className="text-sm font-semibold text-primary-dark hover:underline"
        >
          {c.verifyPageTitle}
        </Link>
      </div>
    </div>
  );
}
