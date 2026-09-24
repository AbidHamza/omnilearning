import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import unzipper from "unzipper";

// Upload d'un paquet SCORM (1.2 ou 2004) : dézippage côté serveur, lecture du
// imsmanifest.xml pour retrouver la version et le point d'entrée, fichiers
// servis en statique sous /uploads/scorm/<id>/. Réservé aux formateurs/admin
// (même garde que /api/upload) — voir src/app/api/upload/scorm/route.ts.

export type ScormUploadResult = {
  scormPackagePath: string;
  scormEntryPath: string;
  scormVersion: string;
  name: string;
  size: number;
};

const MAX_SIZE = 200 * 1024 * 1024; // 200 Mo : un paquet SCORM reste léger

/**
 * Un chemin d'entrée d'archive ne se fait jamais confiance : une archive peut
 * contenir "../../etc" pour écrire hors du dossier cible (zip-slip). On rejette
 * tout chemin absolu ou qui remonte, plutôt que de laisser la librairie décider.
 */
function safeEntryPath(destRoot: string, entryPath: string): string | null {
  const normalized = entryPath.replace(/\\/g, "/").replace(/^\/+/, "");
  if (!normalized || normalized.includes("..")) return null;
  const resolved = path.resolve(destRoot, normalized);
  if (resolved !== destRoot && !resolved.startsWith(destRoot + path.sep)) return null;
  return resolved;
}

async function extractSafely(buffer: Buffer, destRoot: string): Promise<void> {
  const zip = await unzipper.Open.buffer(buffer);
  for (const entry of zip.files) {
    const dest = safeEntryPath(destRoot, entry.path);
    if (!dest) continue; // entrée hors du dossier cible : ignorée, pas d'écriture
    if (entry.type === "Directory") {
      await mkdir(dest, { recursive: true });
      continue;
    }
    await mkdir(path.dirname(dest), { recursive: true });
    const content = await entry.buffer();
    await writeFile(dest, content);
  }
}

async function findManifest(dir: string): Promise<string | null> {
  const direct = path.join(dir, "imsmanifest.xml");
  try {
    await readFile(direct);
    return direct;
  } catch {
    // certains paquets logent le manifeste dans un sous-dossier unique
  }
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const nested = path.join(dir, e.name, "imsmanifest.xml");
    try {
      await readFile(nested);
      return nested;
    } catch {
      continue;
    }
  }
  return null;
}

function parseManifest(xml: string): { version: string; entry: string } | null {
  const versionMatch = xml.match(/<schemaversion>\s*([^<]+?)\s*<\/schemaversion>/i);
  const rawVersion = versionMatch?.[1]?.trim() ?? "";
  const version = rawVersion.startsWith("1.2") ? "1.2" : "2004";

  // Ressource SCO déclarée en priorité (adlcp:scormtype="sco" ou scormType en
  // 2004) ; sinon la première ressource avec un point d'entrée.
  const scoMatch =
    xml.match(/<resource\b[^>]*adlcp:scorm[Tt]ype="sco"[^>]*\bhref="([^"]+)"/i) ??
    xml.match(/<resource\b[^>]*\bhref="([^"]+)"[^>]*adlcp:scorm[Tt]ype="sco"/i);
  const anyMatch = xml.match(/<resource\b[^>]*\bhref="([^"]+)"/i);
  const entry = (scoMatch ?? anyMatch)?.[1]?.trim();
  if (!entry) return null;
  return { version, entry };
}

export async function saveScormPackage(file: File): Promise<ScormUploadResult> {
  if (!file || file.size === 0) throw new Error("Fichier vide.");
  if (!/\.zip$/i.test(file.name)) throw new Error("Le paquet SCORM doit être une archive .zip.");
  if (file.size > MAX_SIZE) throw new Error("Archive trop volumineuse (200 Mo max).");

  const buffer = Buffer.from(await file.arrayBuffer());
  const id = randomUUID();
  const dir = path.join(process.cwd(), "public", "uploads", "scorm", id);
  await mkdir(dir, { recursive: true });

  await extractSafely(buffer, dir);

  const manifestPath = await findManifest(dir);
  if (!manifestPath) {
    throw new Error("Archive invalide : imsmanifest.xml introuvable.");
  }
  const xml = await readFile(manifestPath, "utf8");
  const parsed = parseManifest(xml);
  if (!parsed) {
    throw new Error("Manifeste SCORM illisible : aucune ressource avec point d'entrée.");
  }

  const manifestDir = path.dirname(manifestPath);
  const relBase = path.relative(dir, manifestDir).split(path.sep).filter(Boolean).join("/");
  const packageUrl = `/uploads/scorm/${id}${relBase ? `/${relBase}` : ""}`;
  const entryUrl = `${packageUrl}/${parsed.entry.replace(/\\/g, "/")}`;

  return {
    scormPackagePath: packageUrl,
    scormEntryPath: entryUrl,
    scormVersion: parsed.version,
    name: file.name,
    size: file.size,
  };
}
