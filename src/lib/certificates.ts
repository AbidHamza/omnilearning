import { randomInt } from "node:crypto";
import { prisma } from "@/lib/db";

// Alphabet sans 0, O, 1, I : un code recopié à la main ne se confond pas.
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CODE_RE = /^OL-[A-HJ-NP-Z2-9]{6}$/;

/** Code public tiré au hasard : 32^6 valeurs, aucune séquence à deviner. */
export function newCertificateCode(): string {
  let s = "";
  for (let i = 0; i < 6; i++) s += ALPHABET[randomInt(ALPHABET.length)];
  return `OL-${s}`;
}

/** Normalise une saisie (casse, espaces, tiret oublié) ; null si le format est faux. */
export function parseCertificateCode(input: string | null | undefined): string | null {
  if (!input) return null;
  const raw = input.trim().toUpperCase().replace(/\s+/g, "");
  const code = /^OL[A-Z0-9]{6}$/.test(raw) ? `OL-${raw.slice(2)}` : raw;
  return CODE_RE.test(code) ? code : null;
}

/**
 * Émet le certificat d'une inscription achevée. Idempotent : un second appel
 * rend le certificat déjà émis. Une collision de code (improbable) retente.
 */
export async function issueCertificate(userId: string, courseId: string) {
  const existing = await prisma.certificate.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });
  if (existing) return existing;

  const enrollment = await prisma.enrollment.findUnique({
    where: { userId_courseId: { userId, courseId } },
    select: { completedAt: true, user: { select: { name: true, email: true } } },
  });
  if (!enrollment?.completedAt) return null;
  const userName = enrollment.user.name?.trim() || enrollment.user.email.split("@")[0];

  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      return await prisma.certificate.create({
        data: {
          code: newCertificateCode(),
          userId,
          courseId,
          userName,
          issuedAt: enrollment.completedAt,
        },
      });
    } catch {
      // Course concurrente sur (user, course) ou collision de code.
      const again = await prisma.certificate.findUnique({
        where: { userId_courseId: { userId, courseId } },
      });
      if (again) return again;
    }
  }
  return null;
}

/** Rattrapage : un certificat pour chaque inscription déjà achevée. Idempotent. */
export async function backfillCertificates(): Promise<{ scanned: number; created: number }> {
  const done = await prisma.enrollment.findMany({
    where: { completedAt: { not: null } },
    select: { userId: true, courseId: true },
  });
  let created = 0;
  for (const e of done) {
    const had = await prisma.certificate.findUnique({
      where: { userId_courseId: { userId: e.userId, courseId: e.courseId } },
      select: { id: true },
    });
    if (had) continue;
    if (await issueCertificate(e.userId, e.courseId)) created++;
  }
  return { scanned: done.length, created };
}
