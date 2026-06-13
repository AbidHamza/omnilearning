import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email("Adresse e-mail invalide.")),
  password: z.string().min(1, "Mot de passe requis."),
});

export const signUpSchema = z.object({
  firstName: z.string().trim().min(1, "Prénom requis."),
  lastName: z.string().trim().min(1, "Nom requis."),
  email: z.string().trim().toLowerCase().pipe(z.email("Adresse e-mail invalide.")),
  password: z.string().min(8, "Au moins 8 caractères."),
  // Pas de champ "role" : un compte créé via le formulaire public est TOUJOURS un
  // étudiant (USER). Formateur/admin sont attribués en base par un administrateur.
});

export type SignUpInput = z.infer<typeof signUpSchema>;
