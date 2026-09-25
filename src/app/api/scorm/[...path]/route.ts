import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { canUseLesson } from "@/lib/entitlements";

// Sert les fichiers des paquets SCORM derrière la même règle d'accès que la
// leçon. Ils étaient servis en statique depuis public/uploads/scorm : un
// visiteur non connecté ouvrait le contenu d'une formation payante par simple
// URL. next.config.ts réécrit /uploads/scorm/* vers cette route avant la
// lecture de public/, l'URL vue par le navigateur ne change donc pas et les
// chemins relatifs internes au paquet continuent de se résoudre.

const ROOT = path.join(process.cwd(), "public", "uploads", "scorm");

const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".xsd": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".vtt": "text/vtt; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".eot": "application/vnd.ms-fontobject",
  ".pdf": "application/pdf",
  ".swf": "application/x-shockwave-flash",
};

const notFound = () => new Response("Not found", { status: 404 });

async function mayRead(packageId: string): Promise<boolean> {
  const session = await auth();
  const userId = session?.user?.id ?? null;
  const role = session?.user?.role;
  if (role === "ADMIN") return true;

  const prefix = `/uploads/scorm/${packageId}`;
  const lessons = await prisma.lesson.findMany({
    where: {
      type: "scorm",
      OR: [{ scormPackagePath: prefix }, { scormPackagePath: { startsWith: prefix + "/" } }],
    },
    select: { isFree: true, part: { select: { course: { select: { slug: true } } } } },
  });
  // Paquet pas encore rattaché à une leçon publiée : c'est un brouillon en
  // cours de création, visible des seuls formateurs.
  if (lessons.length === 0) return role === "INSTRUCTOR";
  for (const l of lessons) {
    if (await canUseLesson(userId, l.part.course.slug, l.isFree)) return true;
  }
  return false;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const segments = (await params).path ?? [];
  const [packageId, ...rest] = segments;
  if (!packageId || !/^[A-Za-z0-9_-]+$/.test(packageId) || rest.length === 0) return notFound();

  const pkgRoot = path.join(ROOT, packageId);
  const file = path.resolve(pkgRoot, ...rest);
  if (!file.startsWith(pkgRoot + path.sep)) return notFound();

  if (!(await mayRead(packageId))) return new Response("Forbidden", { status: 403 });

  try {
    const info = await stat(file);
    if (!info.isFile()) return notFound();
    const body = await readFile(file);
    return new Response(new Uint8Array(body), {
      headers: {
        "content-type": TYPES[path.extname(file).toLowerCase()] ?? "application/octet-stream",
        "content-length": String(info.size),
        // Contenu sous licence : jamais dans un cache partagé.
        "cache-control": "private, max-age=300",
        "x-content-type-options": "nosniff",
      },
    });
  } catch {
    return notFound();
  }
}
