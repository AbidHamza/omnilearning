import "server-only";
import { cache } from "react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { toUiRole } from "@/lib/roles";
import type { Role, User } from "@/lib/types";

function initials(name: string | null | undefined, email: string): string {
  const src = (name ?? email).trim();
  const parts = src.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return src.slice(0, 2).toUpperCase();
}

/**
 * Session vérifiée + utilisateur en forme UI (avec inscriptions/progression DB).
 * Mémoïsé par render React. Renvoie null si non connecté.
 */
export const getCurrentUser = cache(
  async (): Promise<{ role: Role; user: User } | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return null;

    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        enrollments: { include: { course: { select: { slug: true } } } },
      },
    });
    if (!dbUser) return null;

    const role = toUiRole(dbUser.role);
    const user: User = {
      name: dbUser.name ?? dbUser.email,
      email: dbUser.email,
      initials: initials(dbUser.name, dbUser.email),
      role,
      enrolled: dbUser.enrollments.map((e) => ({
        slug: e.course.slug,
        progress: e.progress,
        lastLesson: e.lastLesson ?? "",
      })),
      certificates: [],
    };

    return { role, user };
  },
);
