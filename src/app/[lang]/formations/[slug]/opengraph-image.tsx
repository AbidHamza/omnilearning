import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getCourseOutline } from "@/lib/courses";
import { defaultLocale, isLocale, localeDir } from "@/i18n/config";

// Carte de partage propre à chaque cours (og:image, Twitter). Les couvertures
// sont en SVG, que Facebook, LinkedIn et X refusent : on rend donc un PNG.
// Polices en .woff statiques dans assets/og : satori ne lit ni le woff2 ni
// les polices variables, et la Geist embarquée par next/og n'a pas l'arabe.
// Satori n'applique pas l'algorithme bidi : en arabe, les libellés tiennent en
// un mot et chaque fait est posé dans l'ordre visuel (mot puis nombre).

export const alt = "OmniLearn";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (f: string) => readFile(join(process.cwd(), "assets/og", f));

const hoursLabel = { fr: "h de cours", en: "h of lessons", ar: "ساعات" } as const;
const lessonsLabel = { fr: "leçons", en: "lessons", ar: "دروس" } as const;

export default async function Image(props: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const course = await getCourseOutline(slug, locale);
  const [sans700, sans400, cairo700, cairo400] = await Promise.all([
    font("public-sans-latin-700-normal.woff"),
    font("public-sans-latin-400-normal.woff"),
    font("cairo-arabic-700-normal.woff"),
    font("cairo-arabic-400-normal.woff"),
  ]);

  const title = course?.title ?? "OmniLearn";
  const tagline = course?.tagline ?? "";
  const lessons = course?.parts.reduce((n, p) => n + p.lessons.length, 0) ?? 0;
  const rtl = localeDir[locale] === "rtl";
  const fact = (n: number, label: string) => (rtl ? `${label} ${n}` : `${n} ${label}`);
  const facts = [
    course?.category,
    course?.hours ? fact(course.hours, hoursLabel[locale]) : null,
    lessons ? fact(lessons, lessonsLabel[locale]) : null,
  ].filter(Boolean);
  if (rtl) facts.reverse();
  const titleSize = title.length > 60 ? 54 : title.length > 36 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fbfbf9",
          color: "#1c1b18",
          padding: "72px 88px",
          fontFamily: "Public Sans, Cairo",
          position: "relative",
        }}
      >
        <svg
          width="560"
          height="560"
          viewBox="0 0 64 64"
          style={{ position: "absolute", top: -110, right: -120 }}
        >
          <path d="M39.17 13.33A20 20 0 1 0 50.67 24.83" fill="none" stroke="#fbe3df" strokeWidth="10" />
          <circle cx="46.14" cy="17.86" r="6.5" fill="#f7dfb0" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 64 64">
            <path d="M39.17 13.33A20 20 0 1 0 50.67 24.83" fill="none" stroke="#d42a1f" strokeWidth="10" />
            <circle cx="46.14" cy="17.86" r="6.5" fill="#f2b632" />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
            <span>Omni</span>
            <span style={{ color: "#d42a1f" }}>Learn</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
            maxWidth: 940,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          {tagline && (
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 30,
                lineHeight: 1.35,
                color: "#5f5e57",
              }}
            >
              {tagline}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex", color: "#5f5e57" }}>{facts.join("  ·  ")}</div>
          <div style={{ display: "flex", color: "#d42a1f", fontWeight: 700 }}>omnilearn.org</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Public Sans", data: sans700, weight: 700, style: "normal" },
        { name: "Public Sans", data: sans400, weight: 400, style: "normal" },
        { name: "Cairo", data: cairo700, weight: 700, style: "normal" },
        { name: "Cairo", data: cairo400, weight: 400, style: "normal" },
      ],
    },
  );
}
