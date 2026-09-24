"use client";

import { LocaleLink } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";

export default function NotFound() {
  const t = useT();
  return (
    <div className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <div className="text-6xl font-bold text-primary">404</div>
        <h1 className="mt-4 text-2xl font-bold">{t.notFound.title}</h1>
        <p className="mt-2 text-muted">{t.notFound.text}</p>
        <LocaleLink
          href="/"
          className="mt-6 inline-block rounded-[3px] bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep"
        >
          {t.notFound.back}
        </LocaleLink>
      </div>
    </div>
  );
}
