"use server";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { prisma } from "@/lib/db";
import { signIn, signOut } from "@/lib/auth";
import { signInSchema, signUpSchema } from "@/lib/validations";
import { toUiRole } from "@/lib/roles";
import type { Role } from "@/lib/types";

export type AuthResult =
  | { ok: true; role: Role }
  | { ok: false; error: string };

/** Connexion par identifiants (email/mot de passe). */
export async function loginAction(formData: FormData): Promise<AuthResult> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { ok: false, error: "Identifiants invalides." };
  }

  try {
    // redirect:false → on gère la navigation côté client (locale).
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { ok: false, error: "E-mail ou mot de passe incorrect." };
    }
    throw error;
  }

  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  return { ok: true, role: toUiRole(user?.role) };
}

/** Création de compte puis connexion automatique. */
export async function signupAction(formData: FormData): Promise<AuthResult> {
  const parsed = signUpSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  });
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Données invalides." };
  }

  const { firstName, lastName, email, password, role } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { ok: false, error: "Un compte existe déjà avec cet e-mail." };
  }

  const hashed = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      email,
      name: `${firstName} ${lastName}`.trim(),
      password: hashed,
      role: role === "formateur" ? "INSTRUCTOR" : "USER",
    },
  });

  try {
    await signIn("credentials", { email, password, redirect: false });
  } catch {
    // Compte créé mais auto-login échoué : l'utilisateur pourra se connecter.
    return { ok: true, role: role === "formateur" ? "formateur" : "etudiant" };
  }

  return { ok: true, role: role === "formateur" ? "formateur" : "etudiant" };
}

/** Déconnexion. */
export async function logoutAction(): Promise<void> {
  await signOut({ redirect: false });
}
