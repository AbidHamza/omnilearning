"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { locales } from "@/i18n/config";

/** Codes traduits côté écran (dictionnaire `settings.profileErrors`). */
export type ProfileError =
  | "auth"
  | "nameEmpty"
  | "nameTooLong"
  | "oauthAccount"
  | "wrongPassword"
  | "tooShort"
  | "samePassword";

export type ProfileResult = { ok: true } | { ok: false; error: ProfileError };

const MIN_PASSWORD = 8;

function refresh() {
  for (const l of locales) revalidatePath(`/${l}/parametres`);
}

export async function updateProfileAction(rawName: string): Promise<ProfileResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "auth" };

  const name = rawName.trim().replace(/\s+/g, " ");
  if (!name) return { ok: false, error: "nameEmpty" };
  if (name.length > 80) return { ok: false, error: "nameTooLong" };

  await prisma.user.update({ where: { id: userId }, data: { name } });
  refresh();
  return { ok: true };
}

/**
 * Un compte ouvert par Google n'a pas de mot de passe local : on refuse plutôt
 * que d'en créer un silencieusement, ce qui ouvrirait une seconde porte que
 * l'utilisateur ne connaît pas.
 */
export async function changePasswordAction(
  current: string,
  next: string,
): Promise<ProfileResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "auth" };

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { password: true },
  });
  if (!user) return { ok: false, error: "auth" };
  if (!user.password) return { ok: false, error: "oauthAccount" };

  const matches = await bcrypt.compare(current, user.password);
  if (!matches) return { ok: false, error: "wrongPassword" };
  if (next.length < MIN_PASSWORD) return { ok: false, error: "tooShort" };
  if (next === current) return { ok: false, error: "samePassword" };

  const hash = await bcrypt.hash(next, 12);
  await prisma.user.update({ where: { id: userId }, data: { password: hash } });
  return { ok: true };
}
