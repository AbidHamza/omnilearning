import { handlers } from "@/lib/auth";

// Route Handler NextAuth v5 (App Router). Gère signin/callback/session/csrf…
export const { GET, POST } = handlers;
