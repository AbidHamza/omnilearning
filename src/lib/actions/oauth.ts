"use server";

import { signIn } from "@/lib/auth";

// Démarre un flux OAuth (Google/GitHub). Actif uniquement si les clés sont
// configurées dans l'env (voir .env.example) ; sinon le provider n'existe pas et
// NextAuth renvoie une erreur — le bouton reste alors purement décoratif.
export async function oauthSignIn(provider: "google" | "github", callbackUrl: string) {
  await signIn(provider, { redirectTo: callbackUrl });
}
