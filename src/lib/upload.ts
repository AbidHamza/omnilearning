import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

// Abstraction d'upload. Provider par défaut = "local" (écrit dans public/uploads,
// zéro setup). En prod, mettre UPLOAD_PROVIDER="s3" et implémenter le bloc S3
// (placeholder ci-dessous) avec les vars AWS_* ; voir .env.example.

export type UploadResult = { url: string; name: string; size: number };

const ALLOWED = /\.(svg|png|jpe?g|webp|gif|mp4|mov|webm|pdf)$/i;

export async function saveUpload(file: File): Promise<UploadResult> {
  if (!file || file.size === 0) throw new Error("Fichier vide.");
  if (!ALLOWED.test(file.name)) throw new Error("Type de fichier non autorisé.");

  const provider = process.env.UPLOAD_PROVIDER ?? "local";

  if (provider === "s3") {
    // En prod : uploader vers S3 avec @aws-sdk/client-s3 et renvoyer l'URL publique.
    // Laissé en TODO car nécessite les clés AWS (à fournir par Hamza).
    throw new Error("Upload S3 non configuré (clés AWS manquantes).");
  }

  // --- Provider local (dev) ---
  const ext = path.extname(file.name).toLowerCase();
  const filename = `${randomUUID()}${ext}`;
  const dir = path.join(process.cwd(), "public", "uploads");
  await mkdir(dir, { recursive: true });
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), bytes);

  return { url: `/uploads/${filename}`, name: file.name, size: file.size };
}
