# Brief de rédaction : cours OmniLearning (à lire avant d'écrire)

Tu rédiges **un cours complet, réel et publiable** pour une plateforme e-learning en production. Pas un squelette, pas du remplissage. Un apprenant doit pouvoir suivre le cours en entier et vraiment apprendre.

## Sortie attendue

Un seul fichier TypeScript, encodage UTF-8, à l'emplacement qu'on te donne, de la forme :

```ts
import type { Course } from "../types";

const course: Course = { /* ... */ };

export default course;
```

Le type `Course` (ne rien inventer d'autre) :

```ts
type LessonType = "video" | "text" | "quiz";
interface QuizQuestion { id: string; prompt: string; options: string[]; correctIndex: number; explanation?: string; }
interface Lesson { id: string; title: string; type: LessonType; duration: string; body?: string; videoLabel?: string; questions?: QuizQuestion[]; }
interface CoursePart { id: string; title: string; lessons: Lesson[]; }
interface Course {
  slug: string; title: string; tagline: string; description: string;
  category: string; level: "Débutant" | "Intermédiaire" | "Avancé";
  instructor: string; instructorBio?: string;
  hours: number; rating: number; learners: number; accent: string; image: string;
  language?: string; software?: string;
  prerequisites?: string[]; summary?: string[]; objectives?: string[]; skills?: string[]; contentTypes?: string[];
  parts: CoursePart[];
}
```

## Règles de structure

- **4 à 6 parties**, chacune **3 à 6 leçons**. Total visé : 15 à 28 leçons. `hours` cohérent avec le volume (compte ~12-18 min de travail réel par leçon).
- Alterne les types. **Privilégie `text`** (contenu écrit riche) et `quiz`. Utilise `video` seulement quand une démonstration à l'écran est réellement impliquée : et **même là, remplis `body`** avec les notes/le transcript écrit de la démo (il n'y a pas de fichier vidéo réel, le `body` EST le cours). Mets un `videoLabel` parlant.
- **Chaque partie se termine par un `quiz`** de 3 à 5 questions qui teste vraiment la compréhension (pas des questions triviales de définition). `explanation` obligatoire sur chaque question, et elle doit apprendre quelque chose.
- `id` des leçons : `l1`, `l2`… (uniques dans le cours, séquentiels à travers toutes les parties). `id` des parties : `p1`, `p2`… `id` des questions : `q1`, `q2`… (uniques dans le cours).
- Les leçons `text`/`video` : `body` de **250 à 600 mots**, en **Markdown** (voir ci-dessous). Pas de leçon vide, pas de `body` d'une phrase.

## Markdown autorisé dans `body` (le moteur ne rend que ça)

- Titres `## ` et `### ` (jamais `# `, réservé au titre de la leçon).
- Paragraphes séparés par une ligne vide.
- Listes `- ` (à puces) et `1. ` (ordonnées).
- **gras** avec `**...**`, `code inline` avec des backticks.
- Blocs de code avec ``` ```lang ``` … ``` ``` (précise le langage : js, python, bash, html, css…).
- Citations / encadrés « à retenir » avec `> `.
- Liens `[texte](https://...)` : uniquement vers des ressources réelles et vérifiables (doc officielle MDN, docs d'un outil…). En cas de doute, pas de lien.

Écris le `body` comme une chaîne TypeScript. **Utilise un template literal** (backticks) pour gérer les retours à la ligne et les blocs de code proprement. Attention à échapper les backticks internes des blocs de code ; préfère écrire les exemples de code sans triples backticks imbriqués en conflit : dans un template literal TS, un bloc ```` ``` ```` de Markdown pose problème. **Solution imposée** : n'utilise PAS de template literal si tu mets des blocs de code ; à la place, construis le `body` avec des chaînes normales concaténées et `\n` explicites. Exemple :

```ts
body:
  "## Titre\n\n" +
  "Un paragraphe d'explication concret.\n\n" +
  "```js\nconst x = 42;\nconsole.log(x);\n```\n\n" +
  "- point un\n- point deux\n",
```

C'est verbeux mais ça compile sans piège d'échappement. Respecte-le.

## Qualité éditoriale : anti-signature IA (impératif, vérifié)

Le texte ne doit ressembler à rien de généré. Il doit passer GPTZero/Originality sans alerte, et surtout être **utile**.

- **Bannir** : « dans un monde en constante évolution », « il convient de noter », « force est de constater », « plonger/plongeons dans », « à l'ère de », « que ce soit… ou… », « non seulement… mais aussi ». Bannir les mots-tics : delve, leverage, seamless, robust, elevate, unlock, foster, tapestry, « véritable », « incontournable ».
- **Pas** de tiret cadratin (—) en ponctuation systématique, pas d'emoji dans les titres, pas de **gras** décoratif sur des mots-clés au hasard, pas de conclusion qui répète l'intro.
- **Varie** la longueur des phrases. Aie une voix, un point de vue, des opinions tranchées quand c'est justifié. Donne des **exemples concrets, des chiffres réels, des cas précis, des pièges vécus**. Un formateur qui a fait le métier, pas un résumé Wikipédia.
- **Exactitude technique** : aucune API, fonction, commande ou chiffre inventé. Si tu montres du code, il doit tourner. Si tu cites une version/un prix/une stat, qu'elle soit plausible et réelle. Mieux vaut ne pas citer que citer faux.
- Français correct et naturel. Le `tagline`, la `description`, les `objectives`, `skills` : concrets et spécifiques au cours, pas des généralités interchangeables.

## Champs méta

- `rating` entre 4.4 et 4.9 (une décimale). `learners` un entier plausible (few hundred → few thousand). `hours` cohérent. `accent` : un hex agréable lié au thème. `image` : une URL Unsplash `https://images.unsplash.com/photo-XXXX?w=800&q=80` pertinente (utilise un ID de photo Unsplash réel et thématique ; si tu n'es pas sûr d'un ID, réutilise-en un générique tech/éducation).
- `instructor` : un nom crédible (personne fictive mais réaliste). `instructorBio` : 1-2 phrases spécifiques et humaines.
- `contentTypes` : reflète ce que tu as vraiment mis (ex. `["Leçons écrites", "Quiz interactifs", "Études de cas"]`).
- `summary` : une ligne par partie. `objectives` : 4-6 résultats d'apprentissage concrets. `skills` : 4-6 compétences. `prerequisites` : honnête.

Livre un fichier qui compile et qu'on peut lire avec fierté.
