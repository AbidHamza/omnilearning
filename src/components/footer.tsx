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
    <footer className="section-dark mt-24 text-white">
      <div className="container-page grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-ink">
              <GraduationIcon width={19} height={19} />
            </span>
            <span className="font-display text-[17px] font-extrabold">
              Omni<span className="font-medium text-brand">Learn</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            {t.footer.tagline}
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-brand">{c.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((it) => (
                <li key={it.label}>
                  <LocaleLink
                    href={it.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {it.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/45 sm:flex-row">
          <span>{t.footer.rights}</span>
          <span>{t.footer.motto}</span>
        </div>
      </div>
    </footer>
  );
}
