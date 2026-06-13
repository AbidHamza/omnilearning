"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, type ComponentProps } from "react";
import { localePath } from "./config";
import { useI18n } from "./provider";

type LinkProps = ComponentProps<typeof Link>;

/** <Link> qui préfixe automatiquement le href par la locale active. */
export function LocaleLink({ href, ...props }: LinkProps) {
  const { locale } = useI18n();
  const localized = typeof href === "string" ? localePath(locale, href) : href;
  return <Link href={localized} {...props} />;
}

/** Router dont push/replace préfixent le chemin par la locale active. */
export function useLocaleRouter() {
  const router = useRouter();
  const { locale } = useI18n();

  const push = useCallback(
    (path: string) => router.push(localePath(locale, path)),
    [router, locale],
  );
  const replace = useCallback(
    (path: string) => router.replace(localePath(locale, path)),
    [router, locale],
  );
  const refresh = useCallback(() => router.refresh(), [router]);

  return { push, replace, refresh };
}
