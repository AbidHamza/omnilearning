"use client";

import { GraduationIcon } from "./icons";
import { LocaleLink } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";

export default function Footer() {
  const t = useT();

  const cols = [
    {
      title: t.footer.colPages,
      items: [
        { label: t.footer.home, href: "/" },
        { label: t.nav.formations, href: "/formations" },
        { label: t.nav.dashboard, href: "/tableau-de-bord" },
        { label: t.nav.support, href: "/soutenir" },
      ],
    },
    {
      title: t.footer.colFormations,
      items: [
        { label: t.footer.catDev, href: "/formations?cat=Développement%20Web" },
        { label: t.footer.catCyber, href: "/formations?cat=Cybersécurité" },
        { label: t.footer.catData, href: "/formations?cat=Data%20engineering" },
        { label: t.footer.catDesign, href: "/formations?cat=Design%20UX" },
      ],
    },
    {
      title: t.footer.colAccount,
      items: [
        { label: t.common.signIn, href: "/connexion" },
        { label: t.common.createAccount, href: "/creer-compte" },
        { label: t.nav.settings, href: "/parametres" },
      ],
    },
  ];

  return (
    <footer className="section-dark mt-24 border-t border-line text-ink">
      <div className="container-page grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-[3px] border border-line bg-bg text-primary">
              <GraduationIcon width={18} height={18} />
            </span>
            <span className="font-display text-[16px] font-extrabold tracking-tight">
              <span className="text-primary">$</span> omni<span className="text-primary">learn</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-muted">
            {t.footer.tagline}
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="term-slashes text-xs font-semibold uppercase tracking-[0.06em] text-muted-soft">
              {c.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((it) => (
                <li key={it.label}>
                  <LocaleLink
                    href={it.href}
                    className="text-sm text-muted transition hover:text-primary"
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
          <span className="font-mono">EIN · Wyoming, USA</span>
          <span>{t.footer.motto}</span>
        </div>
      </div>
    </footer>
  );
}
