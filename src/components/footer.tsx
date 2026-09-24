"use client";

import { LocaleLink } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";
import Logo from "./logo";

export default function Footer() {
  const t = useT();

  const cols = [
    {
      title: t.footer.colPages,
      items: [
        { label: t.footer.home, href: "/" },
        { label: t.nav.formations, href: "/formations" },
        { label: t.nav.dashboard, href: "/tableau-de-bord" },
      ],
    },
    {
      title: t.footer.colLegal,
      items: [
        { label: t.footer.legalNotice, href: "/mentions-legales" },
        { label: t.footer.terms, href: "/cgu" },
        { label: t.footer.privacy, href: "/confidentialite" },
        { label: t.footer.instructorTerms, href: "/conditions-formateurs" },
      ],
    },
    {
      title: t.footer.colAccount,
      items: [
        { label: t.common.signIn, href: "/connexion" },
        { label: t.common.createAccount, href: "/creer-compte" },
        { label: t.teach.metaTitle, href: "/devenir-formateur" },
        { label: t.nav.settings, href: "/parametres" },
      ],
    },
  ];

  return (
    <footer className="mt-16 border-t border-line text-ink">
      <div className="container-page grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:py-16">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {t.footer.tagline}
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-ink">
              {c.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((it) => (
                <li key={it.label}>
                  <LocaleLink
                    href={it.href}
                    className="text-sm text-muted hover:text-ink hover:underline hover:underline-offset-4"
                  >
                    {it.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-soft sm:flex-row">
          <span>{t.footer.rights}</span>
          <span>OmniLearnConsultingCommerce LLC · Wyoming, USA</span>
          <span>{t.footer.motto}</span>
        </div>
      </div>
    </footer>
  );
}
