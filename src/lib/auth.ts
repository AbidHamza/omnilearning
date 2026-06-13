import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

// Rôles applicatifs en base : USER (étudiant) | INSTRUCTOR (formateur) | ADMIN.
export type AppRole = "USER" | "INSTRUCTOR" | "ADMIN";

// Étend le type de session pour exposer id + role.
declare module "next-auth" {
  interface Session {
    user: { id: string; role: AppRole } & DefaultSession["user"];
  }
  interface User {
    role?: AppRole;
  }
}

// Providers OAuth activés uniquement si les clés sont présentes (sinon décoratifs).
// NextAuth v5 lit automatiquement AUTH_GOOGLE_ID / AUTH_GITHUB_ID, etc.
const oauthProviders = [];
if (process.env.AUTH_GOOGLE_ID) oauthProviders.push(Google);
if (process.env.AUTH_GITHUB_ID) oauthProviders.push(GitHub);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  // App auto-hébergée (VPS) derrière un proxy connu : on fait confiance à l'hôte.
  trustHost: true,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/fr/connexion",
  },
  providers: [
    ...oauthProviders,
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const email = (credentials?.email as string | undefined)?.trim().toLowerCase();
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) return null;

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role as AppRole,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = (user.role ?? "USER") as AppRole;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = (token.role ?? "USER") as AppRole;
      }
      return session;
    },
  },
});
