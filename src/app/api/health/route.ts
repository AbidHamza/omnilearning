import { prisma } from "@/lib/db";

// Sonde de disponibilité. Un 200 sur la page d'accueil ne prouve rien : le
// rendu peut être servi depuis le cache pendant que la base est tombée. Cette
// route compte réellement une ligne, donc elle échoue quand Postgres échoue.
// Aucune donnée sensible n'en sort : un état, un nombre, une durée.

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const started = Date.now();
  try {
    const courses = await prisma.course.count({ where: { status: "PUBLISHED" } });
    return Response.json(
      {
        status: "ok",
        database: "ok",
        publishedCourses: courses,
        latencyMs: Date.now() - started,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
          "X-Robots-Tag": "noindex",
        },
      },
    );
  } catch {
    return Response.json(
      { status: "degraded", database: "unreachable", latencyMs: Date.now() - started },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store, max-age=0",
          "X-Robots-Tag": "noindex",
        },
      },
    );
  }
}
