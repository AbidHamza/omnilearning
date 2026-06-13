import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, LOCALE_COOKIE } from "./i18n/config";

const COOKIE = LOCALE_COOKIE;

function negotiate(request: NextRequest): string {
  // 1) préférence mémorisée
  const cookie = request.cookies.get(COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  // 2) en-tête Accept-Language (ex: "ar,fr;q=0.8,en;q=0.5")
  const header = request.headers.get("accept-language");
  if (header) {
    const ranked = header
      .split(",")
      .map((part) => {
        const [tag, q] = part.trim().split(";q=");
        return { tag: tag.split("-")[0].toLowerCase(), q: q ? Number(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);
    for (const { tag } of ranked) {
      if (isLocale(tag)) return tag;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const locale = negotiate(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set(COOKIE, locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  // Ignore les fichiers internes, l'API, les assets et fichiers avec extension.
  matcher: ["/((?!_next|api|favicon.ico|.*\\.).*)"],
};
