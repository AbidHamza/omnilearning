import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { parseCertificateCode } from "@/lib/certificates";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default async function VerifyCertificatePage(
  props: PageProps<"/[lang]/certificats/verifier">,
) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const c = dict.certificate;

  const sp = await props.searchParams;
  const rawQ = Array.isArray(sp.code) ? sp.code[0] : sp.code;
  const asked = typeof rawQ === "string" && rawQ.trim() !== "";
  const code = asked ? parseCertificateCode(rawQ) : null;

  if (code) {
    const hit = await prisma.certificate.findUnique({ where: { code }, select: { id: true } });
    if (hit) redirect(localePath(locale, `/certificats/${code}`));
  }
  const message = !asked ? null : !code ? c.verifyInvalid : c.verifyUnknown;

  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-lg">
        <span className="rule-accent mb-4" />
        <h1 className="text-3xl font-semibold">{c.verifyPageTitle}</h1>
        <p className="mt-3 text-sm text-muted">{c.verifyIntro}</p>
        <form method="get" className="mt-6">
          <label htmlFor="code" className="block text-sm font-medium">
            {c.verifyInput}
          </label>
          <input
            id="code"
            name="code"
            type="text"
            required
            autoComplete="off"
            spellCheck={false}
            defaultValue={asked ? rawQ : ""}
            placeholder="OL-AB12CD"
            className="field mt-2 font-mono"
          />
          <button
            type="submit"
            className="mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep"
          >
            {c.verifyButton}
          </button>
        </form>
        {message && (
          <p role="alert" className="mt-5 text-sm font-medium text-danger">
            {message}
          </p>
        )}
        <p className="mt-8 text-xs leading-relaxed text-muted">
          <Link href={localePath(locale, "/formations")} className="underline">
            {dict.common.explore}
          </Link>
        </p>
      </div>
    </div>
  );
}
