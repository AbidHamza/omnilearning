import type { Metadata } from "next";
import { LocaleLink } from "@/i18n/navigation";
import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { alternatesFor, pageUrl, shareCard, siteName } from "@/lib/site";
import { getMyApplicationState } from "@/lib/dal";
import { DEFAULT_REVENUE_SHARE_PCT } from "@/lib/pricing";
import ApplyForm from "./apply-form";

export async function generateMetadata(
  props: PageProps<"/[lang]/devenir-formateur">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const t = dict.teach;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(locale, "/devenir-formateur"),
    openGraph: {
      type: "website",
      siteName,
      title: `${t.metaTitle} · ${siteName}`,
      description: t.metaDescription,
      url: pageUrl(locale, "/devenir-formateur"),
      locale,
      images: [shareCard(locale)],
    },
  };
}

export default async function BecomeInstructorPage({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const t = dict.teach;

  // Trois états possibles : visiteur, candidat en attente, formateur approuvé.
  // Chacun voit autre chose que le formulaire, sinon il candidate deux fois.
  const me = await getMyApplicationState();

  return (
    <div className="container-page py-12">
      <span className="rule-accent mb-3" />
      <p className="font-mono text-xs uppercase tracking-widest text-muted-soft">
        {t.kicker}
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {t.titleLead} <span className="text-primary">{t.titleAccent}</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{t.intro}</p>

      {/* Barème */}
      <section className="mt-10 rounded-[var(--radius-card)] bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-6">
          <div className="font-display text-6xl font-extrabold text-primary">
            {DEFAULT_REVENUE_SHARE_PCT} %
          </div>
          <div className="max-w-xl">
            <h2 className="font-display text-xl font-bold">{t.shareTitle}</h2>
            <p className="mt-2 text-sm text-muted">{t.shareText}</p>
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">{t.stepsTitle}</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, idx) => (
            <li
              key={s.t}
              className="rounded-[var(--radius-card)] bg-surface p-5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft font-display font-extrabold text-primary-dark">
                {idx + 1}
              </span>
              <h3 className="mt-4 font-display font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Candidature */}
      <section
        id="candidature"
        className="mt-10 rounded-[var(--radius-card)] bg-surface p-6 sm:p-8"
      >
        {me === null ? (
          <>
            <h2 className="font-display text-2xl font-bold">{t.signInTitle}</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">{t.signInText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <LocaleLink
                href="/creer-compte"
                className="rounded-[3px] bg-primary px-8 py-3 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
              >
                {dict.signup.title}
              </LocaleLink>
              <LocaleLink
                href="/connexion"
                className="rounded-full border border-line px-8 py-3 text-sm font-semibold transition hover:border-primary"
              >
                {dict.auth.loginTitle}
              </LocaleLink>
            </div>
          </>
        ) : me.state === "PENDING" ? (
          <>
            <h2 className="font-display text-2xl font-bold">{t.successTitle}</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">{t.successText}</p>
          </>
        ) : me.state === "APPROVED" ? (
          <>
            <h2 className="font-display text-2xl font-bold">
              {t.errors.alreadyApproved}
            </h2>
            <LocaleLink
              href="/formateur"
              className="mt-5 inline-flex rounded-[3px] bg-primary px-8 py-3 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
            >
              {dict.nav.dashboard}
            </LocaleLink>
          </>
        ) : (
          <>
            <h2 className="font-display text-2xl font-bold">{t.formTitle}</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">{t.formIntro}</p>
            <div className="mt-6 max-w-2xl">
              <ApplyForm defaultName={me.name} />
            </div>
          </>
        )}
      </section>

      {/* Questions fréquentes */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">{t.faqTitle}</h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.faq.map((f) => (
            <div
              key={f.q}
              className="rounded-[var(--radius-card)] bg-surface p-5"
            >
              <dt className="font-display font-bold">{f.q}</dt>
              <dd className="mt-2 text-sm text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-muted">
          <LocaleLink
            href="/conditions-formateurs"
            className="underline underline-offset-4 transition hover:text-primary"
          >
            {t.termsLink}
          </LocaleLink>
        </p>
      </section>
    </div>
  );
}
