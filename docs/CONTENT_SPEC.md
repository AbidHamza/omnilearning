# Spec contenu premium : cours OmniLearn (07/2026)

Référence commune pour toute passe d'écriture/enrichissement des cours (`src/lib/content/*.ts`). Objectif : des leçons qui justifient un abonnement payant (denses, illustrées, actionnables) et qui ne sentent pas la génération automatique.

## 1. Format technique (obligatoire)

- Un cours = un fichier `src/lib/content/<slug>.ts` qui exporte `const course: Course` (type dans `src/lib/types.ts`). Lire un fichier existant avant d'écrire : la convention est **chaînes double-quotes concaténées par `+` avec `\n`** (PAS de template literals, les backticks des blocs de code markdown casseraient la chaîne).
- Ne jamais changer : `slug`, les `key` de leçons existantes (`l1`, `l2`…), l'ordre des leçons existantes (les URLs publiques en dépendent). On peut AJOUTER des leçons en fin de partie avec des keys nouvelles.
- `image: "/covers/<slug>.svg"` (les covers SVG sont générées à part dans `public/covers/`).
- Après écriture : `npx tsc --noEmit -p .` doit passer sans erreur nouvelle sur ton fichier.

## 2. Markdown supporté dans `body`

Titres `##`/`###`, listes `-`, citations `>`, blocs de code ```` ```lang ````, `**gras**`, `` `code` ``, liens `[]()`, tableaux pipe simples (`| a | b |`), et le bloc figure ci-dessous. Rien d'autre (pas de HTML brut hors figure, pas d'emoji en titre).

## 3. Figures SVG (le différenciateur visuel)

Syntaxe : un bloc de code avec le langage `figure`. Première ligne = méta JSON, le reste = un `<svg>` autonome.

```figure
{"caption": "Le trajet d'une requête : du navigateur au serveur et retour"}
<svg viewBox="0 0 640 300" role="img"><title>Client et serveur</title>...</svg>
```

Règles SVG :
- `viewBox` uniquement (pas d'attributs width/height) ; proportions ~640×260 à 640×400.
- Couleurs : éléments neutres en `stroke="currentColor"` / `fill="currentColor"` (avec `opacity` 0.35 à 0.8 pour hiérarchiser) ; éléments à mettre en avant avec `class="fig-accent"` (stylé côté app). Aucune autre couleur en dur.
- Texte : `font-family="ui-monospace, monospace"`, taille ≥ 12, court (étiquettes, pas des phrases).
- Autonome : aucun href externe, pas de `<image>`, pas de script. Poids raisonnable (< ~4 Ko).
- Accessibilité : `role="img"` + `<title>`.
- Style maison : boîtes rectangulaires à coins droits ou légèrement arrondis (rx≤4), flèches simples, esprit diagramme technique/terminal. Pas de dégradés, pas d'ombres, pas de clipart.
- Quand : 1 à 2 figures par leçon conceptuelle (flux, architecture, comparaison, cycle). Pas de figure décorative forcée, si le concept est purement textuel, pas de figure.

## 4. Gabarit pédagogique (à VARIER, pas à photocopier)

Cible : leçons texte de **900 à 1 400 mots** (contre ~400 aujourd'hui). Ingrédients à doser selon la leçon :
- Une accroche concrète (situation réelle, bug vécu, chiffre précis) : jamais « Dans cette leçon, nous allons… ».
- Le concept expliqué par étapes, avec un exemple réel qui progresse (mêmes données d'un bout à l'autre de la leçon quand c'est possible).
- Une figure là où un débutant dessinerait sur un tableau blanc.
- Les pièges courants (« ce qui va te faire perdre une heure ») avec le message d'erreur exact quand il existe.
- Un mini-exercice « À toi » avec correction juste en dessous (citation `>` pour la correction).
- Une fin utile : soit 3 points à retenir, soit une ouverture vers la leçon suivante, pas les deux, pas systématique.
L'ordre et la présence de ces blocs doivent varier d'une leçon à l'autre. Deux leçons consécutives ne doivent pas avoir la même silhouette.

## 5. Anti-signature IA (bloquant)

- Interdits : tiret cadratin systématique, « plonger dans », « il convient de », « robuste », « fluide et intuitif », delve/leverage/seamless et équivalents FR, gras décoratif sur des mots-clés, paragraphes tous de la même longueur, conclusion qui répète l'intro.
- Obligatoires : tutoiement (comme l'existant), phrases de longueurs variées, détails concrets (noms d'outils réels, versions, prix réels, messages d'erreur exacts), une voix qui a un avis (« je te déconseille X parce que… »).
- Exactitude : aucune API/commande/fonction inventée. Si tu cites une commande, elle doit exister telle quelle.

## 6. Quiz

Shape JSON identique à l'existant. 4 à 6 questions par quiz, distracteurs plausibles (erreurs qu'un vrai débutant ferait), pas de « toutes les réponses ci-dessus ». La question doit tester la compréhension, pas la mémorisation d'un mot.

## 7. Métadonnées de cours

`hours` recalculé honnêtement (~5 min/leçon texte enrichie + quiz), `tagline`/`description`/`objectives`/`skills` retravaillés au même niveau de qualité que le body. `rating`/`learners`/`instructor` : conserver la convention existante du fichier.
