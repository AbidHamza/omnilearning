import type { Course } from "../types";

const course: Course = {
  slug: "javascript-cours-expert",
  title: "JavaScript moderne : de solide à expert",
  tagline:
    "Coercion, closures, this, prototypes, event loop : les règles réelles du moteur, vérifiables dans la spec, pas des recettes de blog.",
  description:
    "Un cours pour développeurs qui écrivent déjà du JavaScript et veulent arrêter de deviner. On démonte les règles réelles du langage : coercion et les quatre algorithmes d'égalité, hoisting et TDZ, closures vues depuis les environnements lexicaux, prototypes et classes (champs privés #, static blocks), style fonctionnel avec les apports récents (Object.groupBy d'ES2024, les iterator helpers d'ES2025, toSorted), puis l'asynchronisme depuis l'event loop : microtâches contre macrotâches, cycle de vie d'une Promise, async/await, combinateurs, Promise.withResolvers et AbortSignal.timeout. Chaque affirmation est vérifiable dans la spec ECMAScript ou sur MDN, chaque sortie console est exacte, chaque message d'erreur est celui que V8 affiche vraiment. Testé sur Node 22 et un navigateur de 2025.",
  category: "Développement Web",
  level: "Avancé",
  instructor: "Thomas Lefèvre",
  instructorBio:
    "Développeur JavaScript depuis 2011, il a passé six ans à maintenir des applications front à fort trafic et forme des équipes sur les subtilités du langage et de l'asynchronisme.",
  hours: 6,
  rating: 4.8,
  learners: 5610,
  accent: "#0ca8d3",
  image: "/covers/javascript-cours-expert.svg",
  language: "Français",
  software: "Node.js 22+, un navigateur récent, VS Code",
  prerequisites: [
    "Écrire des fonctions et manipuler des objets/tableaux en JavaScript",
    "Avoir déjà utilisé le DOM ou une petite API Node",
    "Savoir ouvrir la console du navigateur ou lancer un script Node",
  ],
  summary: [
    "Partie 1 : Types, coercion, portée et hoisting",
    "Partie 2 : Closures et le mot-clé this",
    "Partie 3 : Prototypes, héritage et classes ES",
    "Partie 4 : Données, style fonctionnel et immutabilité",
    "Partie 5 : Asynchronisme en profondeur",
    "Partie 6 : Modules, patterns et performance",
  ],
  objectives: [
    "Prédire le résultat d'une comparaison ou d'une coercion sans lancer le code, en citant la règle de la spec qui s'applique",
    "Expliquer une closure en termes d'environnements lexicaux et diagnostiquer les fuites mémoire qu'elle peut causer",
    "Déterminer la valeur de this dans n'importe quel appel, y compris bind sur bind et les fonctions fléchées",
    "Lire une chaîne de prototypes dans les DevTools et savoir ce que class ajoute vraiment (champs #, static, brand checks)",
    "Dérouler l'ordre d'exécution exact d'un code mêlant setTimeout, Promises et await via l'event loop",
    "Choisir entre Promise.all, race, allSettled, any et les API 2024-2025 (withResolvers, AbortSignal.timeout) selon le besoin",
  ],
  skills: [
    "Coercion et algorithmes d'égalité",
    "Closures et modèle mémoire",
    "this et binding",
    "Programmation fonctionnelle moderne",
    "Event loop, Promises et async/await",
    "Modules ES et patterns",
  ],
  contentTypes: ["Leçons écrites", "Quiz interactifs", "Études de cas"],
  parts: [
    {
      id: "p1",
      title: "Partie 1 : Types, coercion, portée et hoisting",
      lessons: [
        {
          id: "l1",
          title: "Les types primitifs et le piège de typeof",
          type: "text",
          duration: "17 min",
          body:
            "## Un test de panier qui échoue pour 0,00000000000000004\n\n" +
            "Un test unitaire sur un total de panier qui compare `0.1 + 0.2 === 0.3` échoue. Pas parfois : toujours. Tape-le dans n'importe quelle console :\n\n" +
            "```js\n" +
            "0.1 + 0.2            // 0.30000000000000004\n" +
            "0.1 + 0.2 === 0.3    // false\n" +
            "```\n\n" +
            "Ce n'est pas un bug de JavaScript. `number` est un flottant IEEE 754 sur 64 bits, et 0.1 n'a pas de représentation binaire exacte, exactement comme 1/3 n'a pas d'écriture décimale finie. Python et Java font pareil avec leurs doubles. Ce qui est propre à JavaScript, c'est qu'il n'a qu'un seul type numérique flottant pour tout : pas d'entier 32 bits séparé, pas de décimal. D'où l'intérêt de connaître précisément ses types, leurs limites, et l'outil d'inspection `typeof` avec ses mensonges.\n\n" +
            "## Sept primitifs, et tout le reste est objet\n\n" +
            "La spec (§6.1) définit sept types primitifs : `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`. Tout le reste est un objet, y compris les tableaux, les fonctions, les dates et les regex. Un primitif est immuable : `\"abc\".toUpperCase()` ne modifie pas la chaîne, il en crée une nouvelle.\n\n" +
            "Détail que peu de gens savent expliquer : si `\"abc\"` est un primitif sans propriétés, pourquoi `\"abc\".length` marche ? Parce que le moteur crée à la volée un objet wrapper `String` temporaire (l'opération ToObject de la spec), lit la propriété dessus, puis le jette. C'est l'auto-boxing. Conséquence mesurable : écrire une propriété sur un primitif ne sert à rien, et en mode strict (donc dans tout module ES) ça lève :\n\n" +
            "```js\n" +
            "\"use strict\";\n" +
            "const s = \"abc\";\n" +
            "s.foo = 1; // TypeError: Cannot create property 'foo' on string 'abc'\n" +
            "```\n\n" +
            "## typeof : sept réponses justes, deux mensonges\n\n" +
            "```js\n" +
            "typeof \"bonjour\"    // \"string\"\n" +
            "typeof 42           // \"number\"\n" +
            "typeof 42n          // \"bigint\"\n" +
            "typeof true         // \"boolean\"\n" +
            "typeof undefined    // \"undefined\"\n" +
            "typeof Symbol()     // \"symbol\"\n" +
            "typeof function(){} // \"function\"\n" +
            "typeof null         // \"object\"  <-- le bug historique\n" +
            "typeof []           // \"object\"  <-- vrai mais inutile\n" +
            "```\n\n" +
            "`typeof null === \"object\"` est un bug de la première implémentation de 1995 : les valeurs étaient taguées par leurs bits de poids faible, `null` était un pointeur nul, tag 0, donc « object ». Une correction a été proposée puis rejetée par TC39 parce qu'elle cassait trop de sites. Le comportement est aujourd'hui gravé dans la table de la spec (§13.5.3). Pour tester `null`, compare directement : `x === null`. Pour un tableau : `Array.isArray(v)`, qui traverse même les frontières de realm (iframe), contrairement à `v instanceof Array`.\n\n" +
            "Curiosité de spécialiste, utile en entretien : dans un navigateur, `typeof document.all` renvoie `\"undefined\"` alors que l'objet existe. C'est la seule valeur du web avec le slot interne [[IsHTMLDDA]], une violation volontaire de la spec ECMAScript inscrite dans la spec HTML pour ne pas casser les détections de vieux Internet Explorer.\n\n" +
            "## Les limites réelles de number\n\n" +
            "Un double 64 bits représente exactement les entiers jusqu'à `Number.MAX_SAFE_INTEGER`, soit 9 007 199 254 740 991 (2^53 − 1). Au-delà, les entiers se confondent :\n\n" +
            "```js\n" +
            "2 ** 53 === 2 ** 53 + 1  // true (!)\n" +
            "```\n\n" +
            "C'est le genre de piège qui explose quand un identifiant de base de données (un id Twitter/X, par exemple) dépasse 2^53 et arrive en JSON : deux ids distincts deviennent le même number. La parade moderne, c'est `bigint` : `42n`, précision entière arbitraire. Mais on ne mélange pas les deux types :\n\n" +
            "```js\n" +
            "1n + 1\n" +
            "// TypeError: Cannot mix BigInt and other types, use explicit conversions\n" +
            "1n + BigInt(1)  // 2n\n" +
            "```\n\n" +
            "Pour comparer des flottants, oublie l'égalité stricte et compare à un epsilon : `Math.abs(a - b) < Number.EPSILON` (EPSILON vaut environ 2.22e-16). Pour de l'argent, travaille en centimes entiers, je te déconseille les flottants pour tout ce qui finit sur une facture.\n\n" +
            "## NaN, le number qui ne s'égale pas lui-même\n\n" +
            "`typeof NaN` renvoie `\"number\"`, et `NaN === NaN` vaut `false`. C'est la seule valeur du langage non égale à elle-même, un héritage direct d'IEEE 754. Détection fiable : `Number.isNaN(v)`. Jamais le vieux `isNaN()` global, qui convertit d'abord son argument :\n\n" +
            "```js\n" +
            "Number.isNaN(NaN)    // true\n" +
            "Number.isNaN(\"abc\")  // false : c'est une chaîne, pas NaN\n" +
            "isNaN(\"abc\")         // true : \"abc\" est converti en NaN d'abord, trompeur\n" +
            "```\n\n" +
            "Dans la même famille de bizarreries : il existe deux zéros, `0` et `-0`. `0 === -0` vaut `true`, mais `1 / -0` vaut `-Infinity`. La fonction `Object.is` applique un troisième algorithme d'égalité (SameValue) qui distingue les deux cas que `===` traite mal :\n\n" +
            "```js\n" +
            "Object.is(NaN, NaN)  // true\n" +
            "Object.is(0, -0)     // false\n" +
            "```\n\n" +
            "On recroisera ces algorithmes à la leçon suivante, parce que `includes`, `Set` et `Map` en utilisent un quatrième.\n\n" +
            "## symbol, en deux mots\n\n" +
            "Un `Symbol()` est une clé de propriété garantie unique : `Symbol(\"id\") === Symbol(\"id\")` vaut `false`, la description entre parenthèses n'est qu'une étiquette de debug. On s'en sert pour poser des métadonnées sur un objet sans risquer de collision avec ses clés, et le langage lui-même expose ses points d'extension ainsi (`Symbol.iterator`, `Symbol.hasInstance`). Sache que ça existe et que `typeof` le reconnaît, on le recroisera avec les itérateurs.\n\n" +
            "## À toi\n\n" +
            "Sans exécuter : que renvoie `typeof typeof 42` ?\n\n" +
            "> `\"string\"`. `typeof 42` s'évalue d'abord et produit la chaîne `\"number\"`. Puis `typeof \"number\"` s'applique à cette chaîne : `\"string\"`. L'opérateur renvoie toujours une chaîne, donc `typeof typeof x` vaut `\"string\"` pour absolument n'importe quel `x`, même non déclaré.\n\n" +
            "Trois choses à garder : `typeof` ment sur `null` et ne distingue pas les tableaux ; les entiers ne sont sûrs que jusqu'à 2^53 − 1, au-delà c'est `bigint` ; `Number.isNaN` et `Object.is` couvrent les cas où `===` trahit. Référence : [typeof sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof).\n",
        },
        {
          id: "l2",
          title: "Coercion, == contre === et les comparaisons qui piègent",
          type: "text",
          duration: "18 min",
          body:
            "## null >= 0 est vrai, null == 0 est faux\n\n" +
            "Vérifie par toi-même :\n\n" +
            "```js\n" +
            "null > 0    // false\n" +
            "null == 0   // false\n" +
            "null >= 0   // true (!)\n" +
            "```\n\n" +
            "Si ta réaction est « ce langage est absurde », cette leçon est pour toi. Ces trois lignes suivent des règles écrites noir sur blanc dans la spec, et elles sont peu nombreuses. Les comparaisons relationnelles (`>`, `>=`, `<`, `<=`) convertissent leurs opérandes en nombre : `null` devient `0`, et `0 >= 0` est vrai. L'égalité lâche `==`, elle, suit un algorithme différent (IsLooselyEqual, §7.2.13) qui dit explicitement que `null` n'est lâchement égal qu'à `undefined`, à rien d'autre. Deux algorithmes, deux réponses. Une fois qu'on sait ça, tout le reste se déduit.\n\n" +
            "## L'égalité stricte d'abord\n\n" +
            "`===` (IsStrictlyEqual, §7.2.14) ne convertit rien : types différents, résultat `false`, point. Ses deux seules bizarreries viennent d'IEEE 754, pas de la coercion : `NaN === NaN` est faux, `0 === -0` est vrai. Pour les objets, `===` compare les références : deux objets distincts au contenu identique ne sont jamais égaux.\n\n" +
            "```js\n" +
            "{ a: 1 } === { a: 1 }  // false : deux objets distincts en mémoire\n" +
            "```\n\n" +
            "## L'égalité lâche, les vraies règles\n\n" +
            "`==` compare comme `===` quand les types sont identiques. Sinon, il convertit selon trois règles :\n\n" +
            "- `null == undefined` vaut `true`, et ces deux-là ne sont lâchement égaux à rien d'autre. C'est même un idiome propre : `x == null` teste « null ou undefined » en une expression.\n" +
            "- Nombre contre chaîne : la chaîne passe en nombre (`\"1\" == 1` est vrai, `\"\" == 0` aussi car `Number(\"\")` vaut 0).\n" +
            "- Un booléen est d'abord converti en nombre (`true` → 1, `false` → 0), puis on recommence.\n" +
            "- Un objet comparé à un primitif passe par ToPrimitive : le moteur appelle `valueOf`, puis `toString`. Pour un tableau, ça donne sa jointure par virgules : `[] → \"\"`, `[5] → \"5\"`.\n\n" +
            "```js\n" +
            "0 == \"\"      // true : \"\" -> 0\n" +
            "0 == \"0\"     // true : \"0\" -> 0\n" +
            "\"\" == \"0\"    // false : deux chaînes, aucune conversion\n" +
            "null == 0    // false : null n'est égal qu'à undefined\n" +
            "[] == 0      // true : [] -> \"\" -> 0\n" +
            "```\n\n" +
            "Les trois premières lignes prouvent que `==` n'est pas transitif : `0` est égal à `\"\"` et à `\"0\"`, qui ne sont pas égaux entre eux. C'est exactement le genre de bug qui survit trois sprints dans une validation de formulaire.\n\n" +
            "Le cas d'école des entretiens combine tout :\n\n" +
            "```js\n" +
            "[] == ![]   // true\n" +
            "```\n\n" +
            "Déroulé : `![]` s'évalue d'abord. Un tableau est truthy, donc `![]` vaut `false`. Reste `[] == false` : le booléen devient `0`, le tableau passe par ToPrimitive et devient `\"\"`, puis `0`. `0 == 0` : vrai. Aucune magie, quatre règles appliquées dans l'ordre.\n\n" +
            "## Truthy, falsy : la liste ferme\n\n" +
            "Dans un `if`, un `&&`, un `||` ou un `!`, la valeur passe par ToBoolean. Il y a exactement huit valeurs falsy : `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined`, `NaN`. Tout le reste est truthy, y compris `\"0\"`, `\"false\"`, `[]`, `{}` et `new Boolean(false)` (un objet wrapper est un objet, donc truthy, encore une raison de ne jamais utiliser `new Boolean`).\n\n" +
            "## Les quatre algorithmes d'égalité, la vue d'ensemble\n\n" +
            "La spec définit quatre égalités, et tu les utilises toutes les quatre sans le savoir :\n\n" +
            "| Algorithme | Utilisé par | NaN = NaN ? | 0 = -0 ? |\n" +
            "| --- | --- | --- | --- |\n" +
            "| IsLooselyEqual | `==` | non | oui |\n" +
            "| IsStrictlyEqual | `===`, `switch`, `indexOf` | non | oui |\n" +
            "| SameValue | `Object.is` | oui | non |\n" +
            "| SameValueZero | `includes`, `Set`, clés de `Map` | oui | oui |\n\n" +
            "Conséquence concrète et méconnue :\n\n" +
            "```js\n" +
            "[NaN].indexOf(NaN)   // -1 : introuvable (IsStrictlyEqual)\n" +
            "[NaN].includes(NaN)  // true (SameValueZero)\n" +
            "```\n\n" +
            "Si tu cherches des NaN dans un tableau avec `indexOf`, tu ne les trouveras jamais. `includes` (ES2016) a corrigé ça en changeant d'algorithme.\n\n" +
            "## ?? contre || pour les valeurs par défaut\n\n" +
            "`port || 3000` remplace toute valeur falsy, donc écrase un `0` légitime. `port ?? 3000` (ES2020) ne se déclenche que sur `null` et `undefined`. Il existe aussi l'affectation `port ??= 3000`. Détail de syntaxe : mélanger `??` avec `||` ou `&&` sans parenthèses est interdit par la grammaire, le moteur lève `SyntaxError: Unexpected token '??'`. Écris `(a || b) ?? c`.\n\n" +
            "Ma règle en production : `===` partout, une exception assumée pour `x == null`, `??` pour les défauts. Et surtout, savoir lire `==` dans le code des autres, parce qu'il y en a.\n\n" +
            "## À toi\n\n" +
            "Sans exécuter : `\"10\" > \"9\"` renvoie quoi ? Et `\"10\" > 9` ?\n\n" +
            "> `\"10\" > \"9\"` vaut `false` : deux chaînes se comparent lexicographiquement, caractère par caractère, et `\"1\"` vient avant `\"9\"`. `\"10\" > 9` vaut `true` : dès qu'un opérande est un nombre, l'autre est converti en nombre, et 10 > 9. Le même opérateur applique deux logiques selon les types. C'est la cause classique des tris cassés sur des nombres stockés en chaînes.\n",
        },
        {
          id: "l3",
          title: "Portée, hoisting, TDZ et le choix var/let/const",
          type: "text",
          duration: "17 min",
          body:
            "## Deux phases, pas une\n\n" +
            "Le moteur ne lit pas ton code ligne à ligne en partant de zéro. Pour chaque portée (fonction, bloc, module), il fait deux passes : une phase de création où il recense toutes les déclarations et prépare les emplacements mémoire, puis la phase d'exécution. Le « hoisting » n'est pas un déplacement magique du code vers le haut, c'est cette phase de création. Ce qui varie entre `var`, `let`, `const`, `function` et `class`, c'est ce qui se passe entre la création et la ligne de déclaration.\n\n" +
            "### var : créé ET initialisé à undefined\n\n" +
            "```js\n" +
            "console.log(a); // undefined, pas d'erreur\n" +
            "var a = 1;\n" +
            "```\n\n" +
            "Pendant la phase de création, `a` existe déjà et vaut `undefined`. Autre propriété de `var` : il ignore les blocs. Sa portée est la fonction englobante (ou le global), donc une `var` déclarée dans un `if` fuit hors du `if`. Deux comportements hérités de 1995 qui transforment des fautes de frappe en bugs silencieux.\n\n" +
            "### let et const : créés mais NON initialisés\n\n" +
            "`let` et `const` sont bien recensés pendant la phase de création (ils sont hissés, contrairement à ce qu'on lit souvent), mais l'emplacement reste non initialisé jusqu'à la ligne de déclaration. Cette fenêtre s'appelle la Temporal Dead Zone. Y accéder lève une erreur dont le message est explicite dans V8 :\n\n" +
            "```js\n" +
            "console.log(b); // ReferenceError: Cannot access 'b' before initialization\n" +
            "let b = 1;\n" +
            "```\n\n" +
            "La preuve que `let` est hissé, et pas simplement « inexistant avant sa ligne » :\n\n" +
            "```js\n" +
            "let x = \"dehors\";\n" +
            "{\n" +
            "  console.log(x); // ReferenceError: Cannot access 'x' before initialization\n" +
            "  let x = \"dedans\";\n" +
            "}\n" +
            "```\n\n" +
            "Si le `let x` intérieur n'était pas hissé, le `console.log` afficherait `\"dehors\"`. Au lieu de ça, la déclaration du bloc masque la variable externe dès l'entrée dans le bloc, et la zone morte s'étend du début du bloc à la ligne de déclaration. Autre victime collatérale : `typeof` n'est plus une opération sûre. `typeof variableJamaisDeclaree` renvoie gentiment `\"undefined\"`, mais `typeof x` dans la TDZ de `x` lève la même ReferenceError.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Cycle de vie compare : var est utilisable (a undefined) des l'entree dans la portee, let traverse une zone morte ou tout acces leve une ReferenceError\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\"><title>Hoisting : var contre let et la Temporal Dead Zone</title>\n" +
            "<text x=\"150\" y=\"30\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"14\" fill=\"currentColor\">var a = 1</text>\n" +
            "<text x=\"490\" y=\"30\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"14\" fill=\"currentColor\">let b = 1</text>\n" +
            "<line x1=\"36\" y1=\"48\" x2=\"36\" y2=\"296\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<polygon points=\"36,304 31,292 41,292\" fill=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<text x=\"48\" y=\"60\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">entree dans la portee</text>\n" +
            "<rect x=\"90\" y=\"70\" width=\"120\" height=\"100\" fill=\"currentColor\" opacity=\"0.15\"/>\n" +
            "<text x=\"150\" y=\"124\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">undefined</text>\n" +
            "<rect x=\"90\" y=\"186\" width=\"120\" height=\"100\" fill=\"currentColor\" opacity=\"0.35\"/>\n" +
            "<text x=\"150\" y=\"240\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">1</text>\n" +
            "<rect x=\"430\" y=\"70\" width=\"120\" height=\"100\" fill=\"none\" stroke-dasharray=\"5 4\" class=\"fig-accent\" stroke-width=\"2\"/>\n" +
            "<text x=\"490\" y=\"112\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" class=\"fig-accent\">TDZ</text>\n" +
            "<text x=\"490\" y=\"132\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" class=\"fig-accent\">acces = ReferenceError</text>\n" +
            "<rect x=\"430\" y=\"186\" width=\"120\" height=\"100\" fill=\"currentColor\" opacity=\"0.35\"/>\n" +
            "<text x=\"490\" y=\"240\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">1</text>\n" +
            "<line x1=\"70\" y1=\"178\" x2=\"580\" y2=\"178\" stroke=\"currentColor\" stroke-dasharray=\"4 4\" opacity=\"0.6\"/>\n" +
            "<text x=\"320\" y=\"170\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">ligne de declaration</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "La TDZ n'est pas une punition, c'est un garde-fou : elle transforme un ordre d'initialisation cassé en erreur franche à l'exécution, au lieu d'un `undefined` qui se propage trois couches plus loin.\n\n" +
            "### const gèle la liaison, pas la valeur\n\n" +
            "```js\n" +
            "const user = { nom: \"Ada\" };\n" +
            "user.nom = \"Grace\"; // autorisé : on mute l'objet\n" +
            "user = {};          // TypeError: Assignment to constant variable.\n" +
            "```\n\n" +
            "`const` interdit la réassignation de la variable, rien d'autre. Pour rendre l'objet lui-même intouchable, il faut `Object.freeze`, on y revient dans la partie 4.\n\n" +
            "## Le piège de la boucle, et pourquoi let le règle vraiment\n\n" +
            "```js\n" +
            "for (var i = 0; i < 3; i++) {\n" +
            "  setTimeout(() => console.log(i), 0);\n" +
            "}\n" +
            "// 3, 3, 3\n" +
            "```\n\n" +
            "Un seul `i`, partagé par les trois callbacks, qui vaut 3 quand ils s'exécutent enfin. Avec `let`, on obtient `0, 1, 2`, et ce n'est pas un hasard d'implémentation : la spec impose de créer un nouvel environnement de liaison à chaque itération (l'opération s'appelle CreatePerIterationEnvironment) et d'y recopier la valeur courante de `i`. Trois itérations, trois `i` distincts, chaque closure capture le sien. Ce mécanisme précis nourrit la leçon sur les closures.\n\n" +
            "Corollaire : `for (const x of liste)` est parfaitement légal, chaque tour crée une nouvelle liaison. En revanche `for (const i = 0; i < 3; i++)` plante au premier `i++` avec le TypeError vu plus haut.\n\n" +
            "## Fonctions et classes\n\n" +
            "Une déclaration `function f() {}` est entièrement hissée : corps compris, utilisable avant sa ligne. C'est pratique pour organiser un module avec les fonctions d'aide en bas. Une `class`, non : elle suit la règle de la TDZ, comme `let`. Et une fonction stockée dans une `const` suit la règle de la `const`.\n\n" +
            "Dernier terrain miné : déclarer une `function` à l'intérieur d'un `if` a des sémantiques différentes en mode strict et non strict (l'annexe B de la spec existe uniquement pour documenter ces horreurs de compatibilité). Ne le fais jamais ; affecte une fonction fléchée à une `const` si tu as besoin de conditionnel.\n\n" +
            "## Les paramètres par défaut ont leur propre TDZ\n\n" +
            "La TDZ n'est pas une bizarrerie réservée à `let` : c'est la règle générale d'initialisation des liaisons, et elle s'applique aussi aux paramètres. Les défauts s'évaluent de gauche à droite, chaque paramètre naissant l'un après l'autre dans une portée intermédiaire :\n\n" +
            "```js\n" +
            "function creerRect(largeur = hauteur, hauteur = 10) {\n" +
            "  return largeur * hauteur;\n" +
            "}\n" +
            "creerRect();\n" +
            "// ReferenceError: Cannot access 'hauteur' before initialization\n" +
            "creerRect(5); // 50 : le defaut de largeur n'est jamais evalue\n" +
            "```\n\n" +
            "Dans l'autre sens, `function f(largeur = 10, hauteur = largeur * 2)` fonctionne : `largeur` est déjà initialisée quand `hauteur` en a besoin. Retiens le principe plutôt que le cas particulier : toute liaison (`let`, `const`, `class`, paramètre) existe dès l'entrée dans sa portée mais reste inaccessible jusqu'à son initialisation, et l'erreur porte toujours le même message.\n\n" +
            "## À toi\n\n" +
            "Que fait ce code ?\n\n" +
            "```js\n" +
            "function demo() {\n" +
            "  console.log(valeur);\n" +
            "  if (true) {\n" +
            "    var valeur = 10;\n" +
            "  }\n" +
            "}\n" +
            "demo();\n" +
            "```\n\n" +
            "> Il affiche `undefined`, sans erreur. Le `var` est hissé à l'échelle de la fonction entière, bloc `if` ou pas : `valeur` existe dès la première ligne de `demo`, initialisée à `undefined`. Remplace `var` par `let` et tu obtiens `ReferenceError: valeur is not defined`, car le `let` reste confiné au bloc `if` : au moment du `console.log`, aucune variable `valeur` n'existe dans la portée.\n\n" +
            "Règle finale, sans nuance : `const` par défaut, `let` quand tu réassignes, `var` jamais. Détails sur [let (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let).\n",
        },
        {
          id: "l4",
          title: "Quiz : types, coercion et portée",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q1",
              prompt: "Quel test détecte de façon fiable qu'une valeur est exactement NaN ?",
              options: [
                "value === NaN",
                "isNaN(value)",
                "Number.isNaN(value)",
                "typeof value === \"NaN\"",
              ],
              correctIndex: 2,
              explanation:
                "NaN n'est égal à rien, pas même à lui-même, donc value === NaN est toujours faux. isNaN() convertit d'abord son argument et renvoie true sur \"abc\". Seul Number.isNaN teste sans conversion. typeof NaN vaut d'ailleurs \"number\".",
            },
            {
              id: "q2",
              prompt: "Que vaut l'expression \"\" == \"0\" ?",
              options: ["true", "false", "0", "une TypeError"],
              correctIndex: 1,
              explanation:
                "Quand == compare deux chaînes, il n'y a aucune conversion : il compare les chaînes telles quelles, et \"\" diffère de \"0\", donc false. C'est ce qui rend == non transitif, car 0 == \"\" et 0 == \"0\" sont pourtant tous deux vrais.",
            },
            {
              id: "q3",
              prompt: "Que fait cette boucle : for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0) ?",
              options: [
                "Affiche 0, 1, 2",
                "Affiche 3, 3, 3",
                "Affiche 0, 0, 0",
                "Lève une ReferenceError",
              ],
              correctIndex: 1,
              explanation:
                "Avec var il n'existe qu'un seul i partagé par tous les callbacks. Les setTimeout s'exécutent après la boucle, quand i vaut déjà 3. Avec let, la spec impose une liaison neuve par itération (CreatePerIterationEnvironment) et on obtient 0, 1, 2.",
            },
            {
              id: "q4",
              prompt: "Pourquoi accéder à une variable let avant sa déclaration lève-t-il une erreur, contrairement à var ?",
              options: [
                "let n'est pas hissé du tout",
                "let est hissé mais reste non initialisé dans la Temporal Dead Zone",
                "let n'existe qu'au moment de son assignation",
                "C'est un bug des moteurs modernes",
              ],
              correctIndex: 1,
              explanation:
                "let et const sont recensés à la phase de création comme var, mais sans être pré-initialisés à undefined. Entre le début du bloc et la ligne de déclaration, tout accès lève ReferenceError: Cannot access 'x' before initialization. Même typeof n'est plus sûr dans cette zone.",
            },
            {
              id: "q5",
              prompt: "Avec const config = { port: 3000 }, quelle opération est autorisée ?",
              options: [
                "config = { port: 8080 }",
                "config.port = 8080",
                "Aucune, const gèle tout",
                "Les deux",
              ],
              correctIndex: 1,
              explanation:
                "const gèle la liaison, pas la valeur pointée. Réassigner config lève TypeError: Assignment to constant variable., mais muter une propriété de l'objet est permis. Pour figer l'objet lui-même, il faut Object.freeze.",
            },
            {
              id: "q27",
              prompt: "Un tableau contient des NaN. Lequel de ces appels les trouve ?",
              options: [
                "tableau.indexOf(NaN) !== -1",
                "tableau.includes(NaN)",
                "tableau.find((x) => x === NaN)",
                "Aucun, NaN est introuvable dans un tableau",
              ],
              correctIndex: 1,
              explanation:
                "indexOf utilise l'égalité stricte, pour laquelle NaN n'est jamais égal à NaN : il renvoie -1. Le prédicat x === NaN est toujours faux pour la même raison. includes utilise l'algorithme SameValueZero, qui considère NaN égal à NaN : il renvoie true.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Partie 2 : Closures et le mot-clé this",
      lessons: [
        {
          id: "l5",
          title: "Closures : la mécanique et les vrais cas d'usage",
          type: "text",
          duration: "17 min",
          body:
            "## Une fonction se souvient d'où elle est née\n\n" +
            "Une closure, c'est une fonction qui garde l'accès aux variables de la portée où elle a été définie, même après que cette portée a fini de s'exécuter. Ce n'est pas une option qu'on active : chaque fonction JavaScript porte, dans un slot interne que la spec appelle [[Environment]], une référence vers l'environnement lexical de sa naissance. Quand le moteur cherche une variable, il regarde dans l'environnement de la fonction, puis remonte de parent en parent jusqu'au global. Cette chaîne d'environnements, c'est toute la mécanique. Tu peux d'ailleurs la voir : dans Chrome, `console.dir(maFonction)` affiche une entrée `[[Scopes]]` avec le contenu exact de ce que la fonction retient.\n\n" +
            "### Un compteur privé\n\n" +
            "```js\n" +
            "function creerCompteur() {\n" +
            "  let n = 0;\n" +
            "  return {\n" +
            "    incr() { n += 1; return n; },\n" +
            "    valeur() { return n; },\n" +
            "  };\n" +
            "}\n" +
            "const c = creerCompteur();\n" +
            "c.incr();   // 1\n" +
            "c.incr();   // 2\n" +
            "c.n;        // undefined : n n'est pas une propriété de l'objet\n" +
            "c.valeur(); // 2 : les deux méthodes partagent le MÊME n\n" +
            "```\n\n" +
            "`n` a survécu au retour de `creerCompteur` parce que deux fonctions la référencent encore. Et le détail qui compte : `incr` et `valeur` ferment sur le même environnement, donc sur la même variable. C'est de l'encapsulation réelle, garantie par le moteur, pas par une convention d'underscore. Chaque appel de `creerCompteur()` crée un environnement neuf : deux compteurs créés séparément sont totalement indépendants.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Apres le return, l'environnement de creerCompteur survit parce que incr et valeur le referencent encore ; c ne voit que les deux fonctions, jamais n\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Closure : deux fonctions retiennent l'environnement de leur naissance</title>\n" +
            "<rect x=\"20\" y=\"20\" width=\"420\" height=\"260\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.4\" rx=\"3\"/>\n" +
            "<text x=\"32\" y=\"42\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">portee du module</text>\n" +
            "<rect x=\"44\" y=\"58\" width=\"370\" height=\"200\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\" rx=\"3\"/>\n" +
            "<text x=\"56\" y=\"80\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">environnement de creerCompteur()</text>\n" +
            "<text x=\"56\" y=\"96\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">(appel termine, environnement vivant)</text>\n" +
            "<rect x=\"66\" y=\"140\" width=\"100\" height=\"40\" fill=\"none\" class=\"fig-accent\" stroke-width=\"2\" rx=\"3\"/>\n" +
            "<text x=\"116\" y=\"165\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" class=\"fig-accent\">n = 2</text>\n" +
            "<rect x=\"250\" y=\"116\" width=\"140\" height=\"36\" fill=\"currentColor\" opacity=\"0.15\" rx=\"3\"/>\n" +
            "<text x=\"320\" y=\"139\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">incr()</text>\n" +
            "<rect x=\"250\" y=\"190\" width=\"140\" height=\"36\" fill=\"currentColor\" opacity=\"0.15\" rx=\"3\"/>\n" +
            "<text x=\"320\" y=\"213\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">valeur()</text>\n" +
            "<line x1=\"250\" y1=\"134\" x2=\"176\" y2=\"156\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<polygon points=\"170,158 181,151 183,161\" fill=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<line x1=\"250\" y1=\"208\" x2=\"176\" y2=\"170\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<polygon points=\"170,167 182,166 178,176\" fill=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<rect x=\"500\" y=\"140\" width=\"110\" height=\"44\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"555\" y=\"167\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">const c</text>\n" +
            "<line x1=\"500\" y1=\"150\" x2=\"394\" y2=\"134\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<polygon points=\"388,133 400,130 399,140\" fill=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<line x1=\"500\" y1=\"174\" x2=\"394\" y2=\"204\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<polygon points=\"388,206 398,199 401,209\" fill=\"currentColor\" opacity=\"0.7\"/>\n" +
            "</svg>\n" +
            "```\n\n" +
            "### Figer un paramètre : la factory\n\n" +
            "```js\n" +
            "function multiplicateur(facteur) {\n" +
            "  return (x) => x * facteur;\n" +
            "}\n" +
            "const doubler = multiplicateur(2);\n" +
            "const tripler = multiplicateur(3);\n" +
            "doubler(10); // 20\n" +
            "tripler(10); // 30\n" +
            "```\n\n" +
            "Même code, deux environnements : chaque fonction retournée capture son propre `facteur`. C'est le principe de l'application partielle, et c'est aussi comme ça que fonctionnent la mémoïsation ou le `debounce` de la partie 6.\n\n" +
            "```js\n" +
            "function memoise(fn) {\n" +
            "  const cache = new Map();\n" +
            "  return (arg) => {\n" +
            "    if (!cache.has(arg)) cache.set(arg, fn(arg));\n" +
            "    return cache.get(arg);\n" +
            "  };\n" +
            "}\n" +
            "```\n\n" +
            "Le `cache` est invisible de l'extérieur et survit entre les appels. Trois lignes, un vrai outil.\n\n" +
            "### Le piège : on capture la variable, pas sa valeur\n\n" +
            "Une closure ne photographie pas une valeur à l'instant T, elle garde un lien vers la variable. La boucle `var` de la leçon précédente échouait exactement pour ça : trois callbacks fermés sur le même `i`. Avant `let`, on isolait la valeur avec une IIFE :\n\n" +
            "```js\n" +
            "for (var i = 0; i < 3; i++) {\n" +
            "  (function (copie) {\n" +
            "    setTimeout(() => console.log(copie), 0);\n" +
            "  })(i);\n" +
            "}\n" +
            "// 0, 1, 2\n" +
            "```\n\n" +
            "Aujourd'hui, `let` fait ce travail tout seul. Mais le principe reste valable dès que tu fermes sur une variable qui change : gestionnaires d'événements dans une boucle, callbacks asynchrones dans un `while`, etc.\n\n" +
            "### Le coût mémoire, version précise\n\n" +
            "Tant qu'une closure vit, l'environnement capturé ne peut pas être libéré par le ramasse-miettes. Et il y a un raffinement V8 qui surprend même des seniors : toutes les closures nées dans une même portée partagent un unique objet Context. Si UNE fonction capture une grosse donnée, TOUTES les fonctions nées dans cette portée maintiennent le Context en vie, donc la grosse donnée avec.\n\n" +
            "```js\n" +
            "function initialiser() {\n" +
            "  const gros = new Array(1_000_000).fill(\"x\"); // ~8 Mo\n" +
            "  const log = () => console.log(gros.length);   // capture gros\n" +
            "  const ping = () => \"pong\";                    // ne capture rien... en apparence\n" +
            "  document.addEventListener(\"click\", ping);\n" +
            "  return ping;\n" +
            "}\n" +
            "```\n\n" +
            "Ici `log` meurt à la fin de l'appel, mais `ping` reste accroché au listener, `ping` référence le Context partagé, et le Context retient `gros` parce que `log` en avait besoin. Résultat : 8 Mo bloqués par une fonction qui renvoie `\"pong\"`. Le correctif est toujours le même : retirer les listeners devenus inutiles (`removeEventListener`, ou l'option `{ signal }` d'un AbortController), et éviter de fermer sur de gros objets quand un champ suffit (`const taille = gros.length` puis fermer sur `taille`).\n\n" +
            "### Détacher une méthode-closure : ça marche, et ce n'est pas un hasard\n\n" +
            "```js\n" +
            "const { incr, valeur } = creerCompteur();\n" +
            "incr();\n" +
            "incr();\n" +
            "valeur(); // 2, aucun contexte perdu\n" +
            "```\n\n" +
            "Extrais comme ça les méthodes d'une instance de classe et tu récoltes un `this` cassé (leçon suivante) ; ici, rien ne casse. La raison tient en une phrase : ces fonctions atteignent leur état par la chaîne d'environnements, figée à leur création, et non par `this`, décidé à chaque appel. C'est ce qui rend les objets à base de closures si agréables à passer en callback : `setTimeout(c.incr, 1000)` fonctionne tel quel, sans `bind`. La contrepartie : chaque appel de la factory fabrique un jeu complet de fonctions, là où une classe partage les siennes via le prototype. Ma règle : closures pour les objets rares à état réellement privé (stores, connexions), classes pour les objets en grande série.\n\n" +
            "## À toi\n\n" +
            "Sans exécuter, que renvoie ce code ?\n\n" +
            "```js\n" +
            "const fns = [];\n" +
            "let mot = \"un\";\n" +
            "fns.push(() => mot);\n" +
            "mot = \"deux\";\n" +
            "fns.push(() => mot);\n" +
            "console.log(fns[0](), fns[1]());\n" +
            "```\n\n" +
            "> `deux deux`. Les deux fonctions ferment sur la même variable `mot`, pas sur sa valeur au moment du `push`. Quand on les appelle, `mot` vaut `\"deux\"`, donc les deux renvoient `\"deux\"`. Pour figer `\"un\"`, il aurait fallu une liaison distincte : `const capture = mot; fns.push(() => capture);`.\n\n" +
            "Trois points : chaque fonction retient son environnement de naissance via [[Environment]] ; plusieurs fonctions nées ensemble partagent les mêmes variables (et le même Context V8, gare aux fuites) ; on capture des variables, jamais des valeurs.\n",
        },
        {
          id: "l6",
          title: "this : quatre règles et le cas des fonctions fléchées",
          type: "text",
          duration: "18 min",
          body:
            "## this dépend du site d'appel, pas de la définition\n\n" +
            "La confusion sur `this` vient d'une intuition importée de Java ou C# : « this désigne l'objet courant ». Faux en JavaScript. Pour une fonction classique, `this` est un paramètre implicite, fixé au moment de l'appel par la forme syntaxique de cet appel. La même fonction, appelée de quatre façons, reçoit quatre `this` différents. Quatre règles couvrent tout, plus une exception (les flèches) qui les ignore toutes.\n\n" +
            "### Règle 1 : appel de méthode\n\n" +
            "```js\n" +
            "const user = {\n" +
            "  nom: \"Ada\",\n" +
            "  direBonjour() { return `Bonjour, ${this.nom}`; },\n" +
            "};\n" +
            "user.direBonjour(); // \"Bonjour, Ada\" : this === user\n" +
            "```\n\n" +
            "Ce qui compte, c'est ce qu'il y a à gauche du point AU MOMENT de l'appel. Pas où la fonction a été écrite.\n\n" +
            "### Règle 2 : appel simple\n\n" +
            "Appelée sans objet devant, une fonction reçoit `undefined` comme `this` en mode strict (donc dans tout module ES et toute classe), ou l'objet global en mode non strict. C'est la règle qui casse les méthodes détachées :\n\n" +
            "```js\n" +
            "const f = user.direBonjour;\n" +
            "f(); // TypeError: Cannot read properties of undefined (reading 'nom')\n" +
            "```\n\n" +
            "Ce message V8 exact, tu le rencontreras dès que tu passes une méthode en callback : `setTimeout(user.direBonjour, 100)` détache la fonction exactement pareil. Le point de la ligne du `setTimeout` ne compte pas ; ce qui compte, c'est que le timer l'appellera plus tard en appel simple.\n\n" +
            "Variante sournoise que j'aime poser en entretien : `(0, user.direBonjour)()` plante aussi. L'opérateur virgule évalue et renvoie la fonction seule, débarrassée de son objet ; il ne reste qu'un appel simple.\n\n" +
            "### Règle 3 : call, apply, bind\n\n" +
            "```js\n" +
            "f.call(user);              // \"Bonjour, Ada\" : this impose, appel immediat\n" +
            "f.apply(user);             // idem, arguments en tableau\n" +
            "const lie = f.bind(user);\n" +
            "lie();                     // \"Bonjour, Ada\", quel que soit l'appel futur\n" +
            "lie.call({ nom: \"X\" });    // \"Bonjour, Ada\" : bind gagne contre call\n" +
            "f.bind(user).bind({ nom: \"X\" })(); // \"Bonjour, Ada\" : le premier bind gagne\n" +
            "```\n\n" +
            "Un `bind` est définitif : la fonction retournée a son `this` scellé, un second `bind` ou un `call` ultérieur ne peuvent plus le changer. La spec décrit ça via les fonctions « bound » qui court-circuitent la résolution normale de `this`.\n\n" +
            "### Règle 4 : new\n\n" +
            "`new F()` crée un objet neuf et l'installe comme `this` pendant l'exécution de `F`. Et dans l'ordre de priorité, `new` bat même `bind` : `new (F.bind(obj))()` ignore `obj` et utilise l'objet fraîchement créé. La hiérarchie complète, de la plus forte à la plus faible : `new`, puis `bind`, puis `call`/`apply`, puis l'appel de méthode, puis l'appel simple.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Resolution de this pour une fonction classique : on regarde la forme de l'appel, dans cet ordre de priorite ; la fleche court-circuite tout\"}\n" +
            "<svg viewBox=\"0 0 640 340\" role=\"img\"><title>Arbre de decision : quelle valeur pour this selon le site d'appel</title>\n" +
            "<rect x=\"220\" y=\"16\" width=\"200\" height=\"38\" fill=\"currentColor\" opacity=\"0.15\" rx=\"3\"/>\n" +
            "<text x=\"320\" y=\"40\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">comment est-elle appelee ?</text>\n" +
            "<line x1=\"320\" y1=\"54\" x2=\"85\" y2=\"110\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<line x1=\"320\" y1=\"54\" x2=\"245\" y2=\"110\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<line x1=\"320\" y1=\"54\" x2=\"400\" y2=\"110\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<line x1=\"320\" y1=\"54\" x2=\"556\" y2=\"110\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<rect x=\"20\" y=\"110\" width=\"130\" height=\"36\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"85\" y=\"133\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">new F()</text>\n" +
            "<rect x=\"175\" y=\"110\" width=\"140\" height=\"36\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"245\" y=\"133\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">bind / call</text>\n" +
            "<rect x=\"340\" y=\"110\" width=\"120\" height=\"36\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"400\" y=\"133\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">obj.f()</text>\n" +
            "<rect x=\"486\" y=\"110\" width=\"140\" height=\"36\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"556\" y=\"133\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">f() tout seul</text>\n" +
            "<line x1=\"85\" y1=\"146\" x2=\"85\" y2=\"186\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<line x1=\"245\" y1=\"146\" x2=\"245\" y2=\"186\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<line x1=\"400\" y1=\"146\" x2=\"400\" y2=\"186\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<line x1=\"556\" y1=\"146\" x2=\"556\" y2=\"186\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<text x=\"85\" y=\"208\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">l'objet cree</text>\n" +
            "<text x=\"245\" y=\"208\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">l'objet impose</text>\n" +
            "<text x=\"400\" y=\"208\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">obj</text>\n" +
            "<text x=\"556\" y=\"208\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">undefined (strict)</text>\n" +
            "<text x=\"320\" y=\"244\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">priorite : new &gt; bind &gt; call/apply &gt; obj.f() &gt; f()</text>\n" +
            "<rect x=\"70\" y=\"268\" width=\"500\" height=\"48\" fill=\"none\" class=\"fig-accent\" stroke-width=\"2\" stroke-dasharray=\"5 4\" rx=\"3\"/>\n" +
            "<text x=\"320\" y=\"288\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" class=\"fig-accent\">fonction flechee : pas de this propre</text>\n" +
            "<text x=\"320\" y=\"306\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" class=\"fig-accent\">elle prend celui du scope englobant, l'appel ne compte pas</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "### Les fonctions fléchées n'ont pas de this\n\n" +
            "Une flèche n'a pas de liaison `this` du tout : quand son corps mentionne `this`, la résolution remonte lexicalement, comme pour n'importe quelle variable capturée par closure. Les deux leçons de cette partie décrivent donc le même mécanisme.\n\n" +
            "```js\n" +
            "const compteur = {\n" +
            "  n: 0,\n" +
            "  demarrer() {\n" +
            "    setInterval(() => { this.n += 1; }, 1000);\n" +
            "    // la fleche emprunte le this de demarrer(), donc compteur\n" +
            "  },\n" +
            "};\n" +
            "```\n\n" +
            "Avec une `function` classique dans le `setInterval`, `this` aurait été `undefined` (règle 2). La flèche règle le problème sans `bind`. Les contreparties sont nettes : jamais de flèche comme méthode d'objet littéral (son `this` serait celui du module, pas l'objet), jamais comme constructeur (`new (() => {})()` lève `TypeError: ... is not a constructor`), et `call`/`bind` sur une flèche n'ont aucun effet sur son `this`.\n\n" +
            "Dans une classe, le champ-flèche est l'idiome standard pour les handlers : `onClick = () => { this.compteur++ }` capture le `this` de l'instance. Coût réel à connaître : une fonction par instance, au lieu d'une seule méthode partagée sur le prototype. Sur dix boutons, on s'en fiche ; sur cent mille objets, ça se mesure.\n\n" +
            "Dernier cas concret : `addEventListener(\"click\", function () { ... })` reçoit comme `this` l'élément écouté (le DOM appelle ton handler avec `handleEvent`-style binding). La même chose avec une flèche reçoit le `this` du scope englobant. Les deux sont utiles, à condition de choisir en connaissance de cause ; moi je préfère `event.currentTarget`, qui dit ce qu'il fait.\n\n" +
            "## À toi\n\n" +
            "```js\n" +
            "const obj = {\n" +
            "  valeur: 42,\n" +
            "  lire: () => this.valeur,\n" +
            "};\n" +
            "console.log(obj.lire());\n" +
            "```\n\n" +
            "> Dans un module ES : `TypeError: Cannot read properties of undefined (reading 'valeur')`, et dans un script non-module au niveau global : `undefined`. Piège dans le piège : la règle 1 (appel de méthode) ne s'applique pas, car une flèche ignore son site d'appel. Son `this` est celui du scope où l'objet littéral a été écrit : `undefined` dans un module, `window`/`globalThis` dans un script classique. Un objet littéral ne crée jamais de scope pour `this`. Méthode d'objet = syntaxe raccourcie `lire() { ... }`, flèche = callbacks.\n\n" +
            "La question à te poser devant n'importe quel `this` : « comment cette fonction sera-t-elle appelée ? ». Fonction classique : la réponse donne `this` via les quatre règles. Flèche : mauvaise question, regarde une ligne au-dessus. Détails sur [this (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/this).\n",
        },
        {
          id: "l7",
          title: "Quiz : closures et this",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q6",
              prompt: "Dans creerCompteur qui retourne { incr, valeur } fermant sur une variable locale n, pourquoi n est-elle inaccessible depuis l'extérieur ?",
              options: [
                "Parce que n est déclarée avec const",
                "Parce que n reste dans la portée de la fonction, capturée uniquement par les méthodes retournées",
                "Parce que le mot-clé private est appliqué implicitement",
                "Parce que n est supprimée après le return",
              ],
              correctIndex: 1,
              explanation:
                "n vit dans l'environnement lexical de creerCompteur. Seules les fonctions définies à l'intérieur (incr, valeur) le référencent via leur slot [[Environment]]. Rien de l'extérieur n'a de chemin vers n : c'est de l'encapsulation par closure, indépendante de const ou let.",
            },
            {
              id: "q7",
              prompt: "const f = user.direBonjour; f(); échoue avec un TypeError. Pourquoi ?",
              options: [
                "direBonjour n'existe pas",
                "En appel simple, this vaut undefined en mode strict, donc this.nom plante",
                "f est en lecture seule",
                "bind est obligatoire pour toute méthode",
              ],
              correctIndex: 1,
              explanation:
                "En affectant la méthode à f puis en l'appelant seule, on perd le lien avec user. C'est l'appel qui fixe this : appel simple en mode strict donne this = undefined, et lire this.nom lève TypeError: Cannot read properties of undefined (reading 'nom'). f.call(user) ou user.direBonjour() corrigent.",
            },
            {
              id: "q8",
              prompt: "Que vaut this dans f.bind(a).bind(b)() ?",
              options: [
                "b, le dernier bind gagne",
                "a, le premier bind est définitif et les suivants sont sans effet",
                "undefined",
                "Une TypeError est levée",
              ],
              correctIndex: 1,
              explanation:
                "bind produit une fonction dont this est scellé. Re-binder cette fonction ne remplace pas le this déjà fixé : le second bind n'agit que sur une enveloppe qui délègue à la première. Seul new est plus prioritaire que bind.",
            },
            {
              id: "q9",
              prompt: "Pourquoi utilise-t-on une fonction fléchée dans setInterval(() => this.n++, 1000) à l'intérieur d'une méthode ?",
              options: [
                "Pour la performance",
                "Parce que la flèche n'a pas son propre this et garde celui de la méthode englobante",
                "Parce que setInterval refuse les fonctions classiques",
                "Pour éviter le hoisting",
              ],
              correctIndex: 1,
              explanation:
                "Une fonction classique passée à setInterval serait appelée en mode simple, avec this = undefined. La fonction fléchée n'a pas de liaison this : la résolution remonte lexicalement jusqu'à la méthode, donc l'objet. C'est plus propre qu'un bind manuel.",
            },
            {
              id: "q28",
              prompt: "const obj = { n: 1, lire: () => this.n }. Que renvoie obj.lire() dans un module ES ?",
              options: [
                "1, car lire est appelée sur obj",
                "Une erreur ou undefined : la flèche prend le this du module, pas obj, car un objet littéral ne crée pas de scope",
                "NaN",
                "1, car les flèches copient this à la création de l'objet",
              ],
              correctIndex: 1,
              explanation:
                "La règle de l'appel de méthode ne s'applique qu'aux fonctions classiques. Une flèche résout this lexicalement : ici, le scope du module, où this vaut undefined. L'objet littéral englobant ne compte pas, seul un scope de fonction compte. Pour une méthode, utiliser la syntaxe lire() { return this.n; }.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Partie 3 : Prototypes, héritage et classes ES",
      lessons: [
        {
          id: "l8",
          title: "La chaîne de prototypes, le vrai modèle objet",
          type: "text",
          duration: "17 min",
          body:
            "## Pourquoi [1,2,3].map existe alors que ton tableau ne l'a pas\n\n" +
            "Ouvre une console et tape `Object.getOwnPropertyNames([1, 2, 3])`. Tu obtiens `[\"0\", \"1\", \"2\", \"length\"]`. Pas de `map`, pas de `filter`, pas de `push`. Pourtant `[1,2,3].map(x => x * 2)` marche. Ces méthodes vivent ailleurs : sur `Array.prototype`, un objet unique que tous les tableaux du programme référencent. Quand tu lis une propriété qu'un objet n'a pas, le moteur remonte de prototype en prototype jusqu'à `null`. Cette chaîne est TOUT le mécanisme d'héritage de JavaScript : pas de copie, une délégation à la lecture.\n\n" +
            "### Le lien réel : Object.getPrototypeOf\n\n" +
            "```js\n" +
            "const animal = {\n" +
            "  respirer() { return `${this.nom} respire`; },\n" +
            "};\n" +
            "const chien = Object.create(animal);\n" +
            "chien.nom = \"Rex\";\n" +
            "chien.respirer(); // \"Rex respire\"\n" +
            "Object.getPrototypeOf(chien) === animal; // true\n" +
            "```\n\n" +
            "`chien` n'a pas de méthode `respirer`. Le moteur la trouve sur `animal`, un cran plus haut, et l'appelle avec `this` égal à `chien` : la règle de l'appel de méthode de la leçon précédente s'applique à l'objet de départ, pas à celui où la méthode a été trouvée. C'est ce détail qui rend la délégation utilisable : une méthode définie une fois travaille sur les données de chaque objet qui la délègue.\n\n" +
            "Tu croiseras aussi `obj.__proto__`. C'est un accesseur hérité de `Object.prototype`, standardisé a posteriori dans l'annexe B de la spec pour compatibilité web. Ne l'utilise pas en code neuf : `Object.getPrototypeOf` pour lire, `Object.create` pour construire. Quant à `Object.setPrototypeOf` sur un objet existant, MDN le signale sans ambages comme une opération très lente : changer le prototype casse les caches internes du moteur (les inline caches qui rendent les lectures de propriétés rapides). Choisis le prototype à la création, ne le change pas après.\n\n" +
            "### new et les fonctions constructeurs\n\n" +
            "```js\n" +
            "function Animal(nom) {\n" +
            "  this.nom = nom;\n" +
            "}\n" +
            "Animal.prototype.respirer = function () {\n" +
            "  return `${this.nom} respire`;\n" +
            "};\n" +
            "const a = new Animal(\"Mia\");\n" +
            "a.respirer(); // \"Mia respire\"\n" +
            "```\n\n" +
            "Ce que fait `new` en quatre temps : créer un objet vide ; poser son prototype sur `Animal.prototype` ; exécuter `Animal` avec `this` sur cet objet ; renvoyer l'objet (sauf si le constructeur renvoie explicitement un autre objet, cas tordu mais légal). Une seule fonction `respirer` existe en mémoire, partagée par toutes les instances. Définir les méthodes dans le constructeur en créerait une copie par objet : c'est le premier gaspillage mémoire des codebases jQuery-era.\n\n" +
            "```figure\n" +
            "{\"caption\": \"rex.respirer() : introuvable sur rex et sur Chien.prototype, trouvee sur Animal.prototype ; this reste rex. La chaine finit toujours sur null\"}\n" +
            "<svg viewBox=\"0 0 640 330\" role=\"img\"><title>Chaine de prototypes : lookup de rex.respirer()</title>\n" +
            "<rect x=\"40\" y=\"20\" width=\"250\" height=\"44\" fill=\"currentColor\" opacity=\"0.15\" rx=\"3\"/>\n" +
            "<text x=\"165\" y=\"47\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">rex { nom, race }</text>\n" +
            "<rect x=\"40\" y=\"92\" width=\"250\" height=\"44\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"165\" y=\"119\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Chien.prototype { aboyer }</text>\n" +
            "<rect x=\"40\" y=\"164\" width=\"250\" height=\"44\" fill=\"none\" class=\"fig-accent\" stroke-width=\"2\" rx=\"3\"/>\n" +
            "<text x=\"165\" y=\"191\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" class=\"fig-accent\">Animal.prototype { respirer }</text>\n" +
            "<rect x=\"40\" y=\"236\" width=\"250\" height=\"44\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"165\" y=\"263\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Object.prototype { toString... }</text>\n" +
            "<text x=\"165\" y=\"318\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.7\">null</text>\n" +
            "<line x1=\"165\" y1=\"64\" x2=\"165\" y2=\"86\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"165,92 160,82 170,82\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<line x1=\"165\" y1=\"136\" x2=\"165\" y2=\"158\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"165,164 160,154 170,154\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<line x1=\"165\" y1=\"208\" x2=\"165\" y2=\"230\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"165,236 160,226 170,226\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<line x1=\"165\" y1=\"280\" x2=\"165\" y2=\"302\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"165,308 160,298 170,298\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"330\" y=\"47\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">1. respirer ? non</text>\n" +
            "<text x=\"330\" y=\"119\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">2. respirer ? non</text>\n" +
            "<text x=\"330\" y=\"185\" font-family=\"ui-monospace, monospace\" font-size=\"12\" class=\"fig-accent\">3. trouvee ! appel avec this = rex</text>\n" +
            "<text x=\"330\" y=\"263\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">(jamais atteinte ici)</text>\n" +
            "<text x=\"330\" y=\"85\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">[[Prototype]]</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "### Masquage : l'écriture ne remonte pas la chaîne\n\n" +
            "La délégation ne joue qu'à la lecture. Écrire crée toujours une propriété propre sur l'objet de départ :\n\n" +
            "```js\n" +
            "const b = new Animal(\"Rex\");\n" +
            "b.respirer = function () { return \"version locale\"; };\n" +
            "b.respirer();  // \"version locale\" : masque la version du prototype\n" +
            "a.respirer();  // \"Mia respire\" : les autres instances rien vu\n" +
            "delete b.respirer;\n" +
            "b.respirer();  // \"Rex respire\" : le masque enlevé, la delegation reprend\n" +
            "```\n\n" +
            "Et `delete` ne supprime que les propriétés propres : `delete b.respirer` une seconde fois renvoie `true` mais ne touche pas `Animal.prototype.respirer`. Croire que `delete` peut retirer une méthode héritée est une erreur classique de revue de code.\n\n" +
            "### Propre ou héritée : Object.hasOwn\n\n" +
            "```js\n" +
            "Object.hasOwn(a, \"nom\");       // true : propriete propre\n" +
            "Object.hasOwn(a, \"respirer\");  // false : elle est sur le prototype\n" +
            "\"respirer\" in a;               // true : l'operateur in remonte la chaine\n" +
            "```\n\n" +
            "`Object.hasOwn` (ES2022) remplace l'idiome défensif `Object.prototype.hasOwnProperty.call(obj, cle)`, nécessaire parce qu'un objet peut avoir une clé nommée `hasOwnProperty` ou être créé avec `Object.create(null)`, sans prototype du tout. Ces objets « nus » sont d'ailleurs un outil légitime : un dictionnaire sans aucune clé héritée, insensible aux collisions avec `toString` ou `constructor`. On les recroisera : `Object.groupBy` d'ES2024 en renvoie un.\n\n" +
            "Pour finir, `instanceof` ne fait que parcourir cette même chaîne : `rex instanceof Animal` vérifie si `Animal.prototype` apparaît quelque part dans les prototypes successifs de `rex`.\n\n" +
            "### __proto__, l'accesseur zombie\n\n" +
            "Tu verras encore `obj.__proto__` dans de vieux tutos. C'est un accesseur hérité de `Object.prototype`, standardisé seulement dans l'annexe B de la spec (la section « compatibilité web », legacy assumé). Trois raisons de ne plus l'utiliser : il n'existe pas sur les objets à prototype `null` (`Object.create(null).__proto__` vaut `undefined` au lieu de renvoyer le prototype), il peut être supprimé de `Object.prototype` par n'importe quel code de la page, et écrire dedans coûte la même désoptimisation que `Object.setPrototypeOf`. Les remplaçants : `Object.getPrototypeOf(obj)` en lecture, `Object.create` à la construction.\n\n" +
            "Exception à connaître : la clé `__proto__` DANS un littéral (`const chien = { __proto__: animal, nom: \"Rex\" }`) est une syntaxe à part entière, dans le corps principal de la spec, sans pénalité de performance, qui fixe le prototype à la création. C'est même la façon la plus directe d'écrire ce que `Object.create` rendrait verbeux.\n\n" +
            "## À toi\n\n" +
            "Un collègue écrit `Array.prototype.dernier = function () { return this[this.length - 1]; };` pour pouvoir faire `[1,2,3].dernier()`. Ça marche. Pourquoi est-ce quand même une mauvaise idée ?\n\n" +
            "> Deux raisons. D'abord la collision : si le langage ajoute un jour `dernier` (c'est arrivé : l'ajout de `Array.prototype.includes` a cassé MooTools, et `flatten` a dû être renommé `flat` à cause du même framework, l'épisode est connu sous le nom SmooshGate). Ensuite la portée : la modification affecte TOUS les tableaux de l'application, y compris ceux des bibliothèques tierces. La forme moderne du besoin existe déjà : `arr.at(-1)` (ES2022). Étendre les prototypes natifs est réservé aux polyfills qui implémentent une spec existante.\n\n" +
            "Détails sur [l'héritage et la chaîne de prototypes (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).\n",
        },
        {
          id: "l9",
          title: "Classes ES : extends, super, static et champs privés",
          type: "text",
          duration: "17 min",
          body:
            "## Du sucre, mais vérifiable\n\n" +
            "Les classes ES2015 n'introduisent pas un nouveau modèle objet : elles habillent la chaîne de prototypes. La preuve tient en deux lignes :\n\n" +
            "```js\n" +
            "class Animal {\n" +
            "  respirer() { return `${this.nom} respire`; }\n" +
            "}\n" +
            "typeof Animal;                        // \"function\"\n" +
            "Object.hasOwn(Animal.prototype, \"respirer\"); // true\n" +
            "```\n\n" +
            "Une classe EST une fonction, et ses méthodes atterrissent sur son `prototype`, exactement comme à la leçon précédente. Ce que `class` ajoute, ce sont des garanties : corps toujours en mode strict, méthodes non énumérables (`Object.keys(new Animal())` ne liste pas `respirer`, contrairement à l'époque des constructeurs artisanaux), TDZ comme `let` (pas de hoisting utilisable), et un verrou d'appel :\n\n" +
            "```js\n" +
            "Animal(\"Mia\");\n" +
            "// TypeError: Class constructor Animal cannot be invoked without 'new'\n" +
            "```\n\n" +
            "### extends et super\n\n" +
            "```js\n" +
            "class Chien extends Animal {\n" +
            "  constructor(nom, race) {\n" +
            "    super(nom); // obligatoire avant tout acces a this\n" +
            "    this.race = race;\n" +
            "  }\n" +
            "  presenter() {\n" +
            "    return `${super.respirer()} et aboie`; // super.methode() : version du parent\n" +
            "  }\n" +
            "}\n" +
            "const rex = new Chien(\"Rex\", \"Berger\");\n" +
            "rex.presenter(); // \"Rex respire et aboie\"\n" +
            "```\n\n" +
            "Dans une classe dérivée, accéder à `this` avant `super()` lève exactement :\n\n" +
            "```js\n" +
            "// ReferenceError: Must call super constructor in derived class\n" +
            "// before accessing 'this' or returning from derived constructor\n" +
            "```\n\n" +
            "Ce n'est pas une convention de style : dans une sous-classe, c'est le constructeur parent qui crée réellement l'objet `this` (le mécanisme permet même d'hériter d'`Array` ou d'`Error` proprement). Tant qu'il n'a pas tourné, il n'y a littéralement rien à toucher. `extends` câble deux chaînes d'un coup : `Chien.prototype` délègue à `Animal.prototype` (pour les instances), et `Chien` délègue à `Animal` (pour les statiques).\n\n" +
            "### Champs privés # : du privé garanti par le moteur\n\n" +
            "```js\n" +
            "class CompteBancaire {\n" +
            "  #solde = 0;\n" +
            "  deposer(montant) {\n" +
            "    if (montant <= 0) throw new Error(\"Montant invalide\");\n" +
            "    this.#solde += montant;\n" +
            "    return this.#solde;\n" +
            "  }\n" +
            "  get solde() {\n" +
            "    return this.#solde;\n" +
            "  }\n" +
            "}\n" +
            "const c = new CompteBancaire();\n" +
            "c.deposer(100);\n" +
            "c.solde;  // 100, via le getter\n" +
            "c.#solde; // SyntaxError: Private field '#solde' must be declared in an enclosing class\n" +
            "```\n\n" +
            "Note bien : une erreur de SYNTAXE, pas d'exécution. Le nom `#solde` n'existe tout simplement pas comme clé de propriété accessible ; il n'apparaît ni dans `Object.keys`, ni dans `JSON.stringify`, ni dans une boucle `for...in`. C'est plus fort que la convention `_solde` (qui ne protège rien) et plus fort que la closure (qui ne marche pas avec l'héritage et les méthodes de prototype).\n\n" +
            "ES2022 ajoute le « brand check », le test d'appartenance ergonomique :\n\n" +
            "```js\n" +
            "class CompteBancaire {\n" +
            "  #solde = 0;\n" +
            "  static estUnCompte(obj) {\n" +
            "    return #solde in obj; // true seulement pour une vraie instance\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "Contrairement à `instanceof`, ce test ne peut pas être trompé en bricolant la chaîne de prototypes : soit l'objet est passé par ce constructeur, soit non.\n\n" +
            "### static, et les static blocks\n\n" +
            "`static` attache membre ou méthode à la classe elle-même. L'usage type, la factory nommée :\n\n" +
            "```js\n" +
            "class Temperature {\n" +
            "  constructor(celsius) { this.celsius = celsius; }\n" +
            "  static depuisFahrenheit(f) {\n" +
            "    return new Temperature((f - 32) * 5 / 9);\n" +
            "  }\n" +
            "  static ZERO_ABSOLU = -273.15;\n" +
            "}\n" +
            "Temperature.depuisFahrenheit(212).celsius; // 100\n" +
            "```\n\n" +
            "ES2022 ajoute aussi les blocs d'initialisation statique, exécutés une fois au chargement de la classe, pratiques quand un champ statique demande plus qu'une expression :\n\n" +
            "```js\n" +
            "class Config {\n" +
            "  static valeurs;\n" +
            "  static {\n" +
            "    const brut = lireFichierConfig();\n" +
            "    Config.valeurs = Object.freeze(brut);\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "### Mon avis sur l'usage\n\n" +
            "Une classe se justifie quand tu as un état ET des invariants à protéger (le `#solde` qui ne doit jamais devenir négatif), ou une vraie hiérarchie (des erreurs métier qui étendent `Error`). Pour un simple sac de fonctions, un module suffit ; pour un simple sac de données, un objet littéral suffit. Les codebases qui enrobent tout dans des classes par réflexe Java produisent des singletons déguisés et des `this` perdus dans les callbacks.\n\n" +
            "### Étendre Error proprement\n\n" +
            "Le cas où `extends` est indiscutable : les erreurs métier.\n\n" +
            "```js\n" +
            "class ErreurApi extends Error {\n" +
            "  constructor(message, options) {\n" +
            "    super(message, options);\n" +
            "    this.name = \"ErreurApi\";\n" +
            "  }\n" +
            "}\n" +
            "try {\n" +
            "  await appelerApi();\n" +
            "} catch (err) {\n" +
            "  throw new ErreurApi(\"Synchronisation impossible\", { cause: err });\n" +
            "}\n" +
            "```\n\n" +
            "Deux détails font la différence entre une hiérarchie utile et du bruit. `this.name` d'abord : sans lui, l'erreur s'affiche `Error: Synchronisation impossible` dans les logs et tu perds le type au premier coup d'œil. L'option `cause` ensuite (ES2022) : elle chaîne l'erreur d'origine sans l'écraser, `err.cause` te rend la panne réseau initiale sous le message métier, stack comprise. Avant `cause`, on concaténait les messages et on perdait la trace d'origine ; maintenant les deux survivent. Et côté consommateur, `err instanceof ErreurApi` fonctionne, précisément parce que `instanceof` parcourt la chaîne de prototypes vue à la leçon précédente.\n\n" +
            "## À toi\n\n" +
            "Pourquoi `JSON.stringify(new CompteBancaire())` renvoie-t-il `\"{}\"` alors que l'objet a bien un solde ?\n\n" +
            "> Deux mécanismes se cumulent. `#solde` est un champ privé : invisible pour toute API extérieure à la classe, y compris `JSON.stringify`. Et le getter `solde` est défini sur le prototype, or `JSON.stringify` ne sérialise que les propriétés propres et énumérables. Résultat : objet vide. Pour sérialiser proprement, ajoute une méthode `toJSON() { return { solde: this.#solde }; }` : `JSON.stringify` l'appelle automatiquement si elle existe.\n",
        },
        {
          id: "l10",
          title: "Quiz : prototypes et classes",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q10",
              prompt: "Quand chien = Object.create(animal) et qu'on appelle chien.respirer() défini sur animal, à quoi vaut this dans respirer ?",
              options: [
                "À animal, l'objet qui porte la méthode",
                "À chien, l'objet sur lequel l'appel a été fait",
                "À undefined",
                "À l'objet global",
              ],
              correctIndex: 1,
              explanation:
                "Le moteur trouve respirer en remontant la chaîne jusqu'à animal, mais this reste déterminé par l'appel : chien.respirer() fixe this sur chien. La délégation ne change pas la règle du this de méthode ; l'objet de départ est conservé.",
            },
            {
              id: "q11",
              prompt: "Pourquoi place-t-on les méthodes sur Constructeur.prototype plutôt que dans le constructeur ?",
              options: [
                "Par convention esthétique",
                "Pour qu'une seule copie de la méthode soit partagée par toutes les instances au lieu d'une par objet",
                "Parce que le constructeur n'accepte pas de fonctions",
                "Pour les rendre privées",
              ],
              correctIndex: 1,
              explanation:
                "Définir une méthode dans le constructeur en recrée une par instance, ce qui gaspille de la mémoire. Sur le prototype, la fonction existe une seule fois et toutes les instances y accèdent par la chaîne. Les classes le font automatiquement.",
            },
            {
              id: "q12",
              prompt: "Dans une sous-classe avec extends, que se passe-t-il si le constructeur accède à this avant d'appeler super(...) ?",
              options: [
                "Rien, this est déjà disponible",
                "Une ReferenceError, car this n'existe pas tant que super n'a pas été appelé",
                "this vaut undefined mais le code continue",
                "Le constructeur parent est appelé automatiquement",
              ],
              correctIndex: 1,
              explanation:
                "Dans une classe dérivée, c'est le constructeur parent qui crée l'objet this. Y accéder avant lève ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor. D'où super(nom) en première ligne.",
            },
            {
              id: "q13",
              prompt: "Quel est l'intérêt d'un champ privé #solde par rapport à une convention _solde ?",
              options: [
                "Aucun, c'est cosmétique",
                "#solde est réellement inaccessible hors de la classe, garanti par le moteur, alors que _solde reste public",
                "#solde est plus rapide à l'exécution",
                "#solde rend le champ statique",
              ],
              correctIndex: 1,
              explanation:
                "Le préfixe underscore est une simple convention : rien n'empêche d'écrire obj._solde. Le # est appliqué par le langage ; accéder à #solde hors de la classe est une erreur de syntaxe, avant même l'exécution. Le champ n'apparaît ni dans Object.keys ni dans JSON.stringify.",
            },
            {
              id: "q29",
              prompt: "rex hérite de respirer() via son prototype. Que fait delete rex.respirer ?",
              options: [
                "Supprime la méthode pour toutes les instances",
                "Renvoie true mais ne change rien : delete n'agit que sur les propriétés propres, et respirer est héritée",
                "Lève une TypeError",
                "Détache rex de son prototype",
              ],
              correctIndex: 1,
              explanation:
                "delete ne supprime que les propriétés propres de l'objet visé. respirer vit sur le prototype, donc delete rex.respirer renvoie true (rien ne s'y opposait) sans aucun effet : la méthode reste accessible par délégation. Seul delete sur le prototype lui-même la retirerait, pour tout le monde.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Partie 4 : Données, style fonctionnel et immutabilité",
      lessons: [
        {
          id: "l11",
          title: "map, filter, reduce : penser en transformations",
          type: "text",
          duration: "18 min",
          body:
            "## Décrire le résultat plutôt que la boucle\n\n" +
            "Le trio `map`, `filter`, `reduce` remplace l'immense majorité des boucles `for`. L'intérêt n'est pas la mode : ces méthodes ne mutent pas le tableau d'origine, renvoient une nouvelle valeur et se lisent comme une phrase. Tu décris la transformation, pas la mécanique d'itération. Et depuis ES2024-2025, deux ajouts du langage rendent obsolètes des patterns entiers de `reduce` : on les voit en fin de leçon.\n\n" +
            "### map : un pour un\n\n" +
            "```js\n" +
            "const prix = [10, 20, 30];\n" +
            "const ttc = prix.map((p) => p * 1.2);\n" +
            "// [12, 24, 36], prix inchangé\n" +
            "```\n\n" +
            "Même longueur, chaque élément transformé. Simple, sauf un piège célèbre : le callback de `map` reçoit TROIS arguments (élément, index, tableau). Passer directement une fonction qui a un deuxième paramètre optionnel produit des résultats délirants :\n\n" +
            "```js\n" +
            "[\"1\", \"7\", \"11\"].map(parseInt); // [1, NaN, 3]\n" +
            "```\n\n" +
            "`parseInt(chaine, base)` reçoit l'index comme base : `parseInt(\"1\", 0)` vaut 1 (base 0 = auto), `parseInt(\"7\", 1)` vaut NaN (base 1 n'existe pas), `parseInt(\"11\", 2)` vaut 3 (11 en binaire). Le correctif : `arr.map(Number)` ou `arr.map((s) => parseInt(s, 10))`. Ce bug précis a son propre folklore sur Stack Overflow.\n\n" +
            "### filter : garder ce qui passe le test\n\n" +
            "```js\n" +
            "const nombres = [1, 2, 3, 4, 5, 6];\n" +
            "const pairs = nombres.filter((n) => n % 2 === 0); // [2, 4, 6]\n" +
            "```\n\n" +
            "Le prédicat est évalué en truthy/falsy, ce qui permet l'idiome compact `arr.filter(Boolean)` pour éliminer `null`, `undefined`, `\"\"` et `0` d'un coup. Compact, mais à double tranchant si le `0` était une donnée légitime.\n\n" +
            "### reduce : tout condenser en une valeur\n\n" +
            "```js\n" +
            "const panier = [\n" +
            "  { nom: \"Livre\", prix: 15 },\n" +
            "  { nom: \"Stylo\", prix: 3 },\n" +
            "  { nom: \"Sac\", prix: 25 },\n" +
            "];\n" +
            "const total = panier.reduce((acc, article) => acc + article.prix, 0);\n" +
            "// 43\n" +
            "```\n\n" +
            "Le second argument, `0`, est la valeur initiale de l'accumulateur. Ne l'omets jamais : sans lui, `reduce` prend le premier élément comme point de départ et commence à l'indice 1, ce qui donne des bugs de type quand les éléments sont des objets, et sur un tableau vide lève exactement `TypeError: Reduce of empty array with no initial value`. Un tableau vide, c'est ce que renvoie n'importe quel filtre trop strict un vendredi soir : le crash arrive en production, pas en dev.\n\n" +
            "### Grouper : reduce hier, Object.groupBy aujourd'hui\n\n" +
            "Le regroupement par clé était LE cas d'école de `reduce` :\n\n" +
            "```js\n" +
            "const gens = [\n" +
            "  { nom: \"Ada\", ville: \"Paris\" },\n" +
            "  { nom: \"Alan\", ville: \"Lyon\" },\n" +
            "  { nom: \"Grace\", ville: \"Paris\" },\n" +
            "];\n" +
            "const parVille = gens.reduce((acc, p) => {\n" +
            "  (acc[p.ville] ??= []).push(p);\n" +
            "  return acc;\n" +
            "}, {});\n" +
            "```\n\n" +
            "ES2024 intègre le besoin au langage :\n\n" +
            "```js\n" +
            "const parVille = Object.groupBy(gens, (p) => p.ville);\n" +
            "// { Paris: [{...Ada}, {...Grace}], Lyon: [{...Alan}] }\n" +
            "```\n\n" +
            "Deux détails d'expert : l'objet renvoyé est créé avec un prototype `null` (pas de `toString` hérité, pas de collision de clés, exactement les objets « nus » de la partie 3), et si ta clé n'est pas une chaîne, `Map.groupBy` fait la même chose avec une `Map`, en comparant les clés par SameValueZero. Disponible dans Node 21+ et tous les navigateurs depuis 2024.\n\n" +
            "### ES2025 : les iterator helpers, la paresse en natif\n\n" +
            "Chaque maillon d'une chaîne `filter().map().slice()` matérialise un tableau intermédiaire complet. ES2025 dote les itérateurs des mêmes verbes, en évaluation paresseuse :\n\n" +
            "```js\n" +
            "const troisPremiersCarresPairs = nombres.values()\n" +
            "  .filter((n) => n % 2 === 0)\n" +
            "  .map((n) => n * n)\n" +
            "  .take(3)\n" +
            "  .toArray();\n" +
            "```\n\n" +
            "Aucun tableau intermédiaire : chaque élément traverse toute la chaîne un par un, et `take(3)` arrête la consommation dès le troisième résultat, même sur une source d'un million d'éléments. Sur un tableau de 10 éléments, ça ne change rien (et c'est même un poil plus lent, l'infrastructure d'itération a un coût fixe). Sur un flux volumineux ou infini (un générateur), c'est la différence entre O(n) mémoire et O(1). Disponible Node 22+ et Chrome/Firefox/Safari 2024-2025 ; vérifie ta cible avant de t'en servir sans transpilation.\n\n" +
            "### Ordre de grandeur honnête\n\n" +
            "Sur 1 million de nombres, une chaîne `filter + map + reduce` fait trois passes et deux allocations intermédiaires ; une boucle `for...of` unique fait une passe et zéro allocation, et sera typiquement 2 à 4 fois plus rapide dans un microbenchmark. Ça semble énorme et ça ne l'est pas : on parle de passer de ~15 ms à ~5 ms, une fois, sur un million d'éléments. Écris lisible d'abord ; ne réécris en boucle que ce qu'un profil désigne comme point chaud exécuté en rafale.\n\n" +
            "## À toi\n\n" +
            "Sans exécuter : que renvoie `[1, 2, 3].reduce((acc, x) => acc + x)` (sans valeur initiale) ? Et `[].reduce((acc, x) => acc + x)` ?\n\n" +
            "> Le premier renvoie `6` : sans initiale, `acc` démarre à 1 (premier élément) et l'itération commence à 2. Le second lève `TypeError: Reduce of empty array with no initial value`. Le contrat de `reduce` change selon la présence du second argument, c'est le seul des trois du trio à avoir ce comportement à double détente. Fournis toujours l'initiale.\n",
        },
        {
          id: "l12",
          title: "Déstructuration, spread et rest",
          type: "text",
          duration: "17 min",
          body:
            "## Extraire et rassembler proprement\n\n" +
            "La déstructuration et l'opérateur `...` sont partout dans le code moderne. Bien utilisés, ils réduisent le bruit et clarifient les intentions. Mal compris, ils produisent deux familles de bugs : le crash de déstructuration sur `undefined`, et la copie superficielle prise pour une copie profonde. On va traiter les deux, avec le modèle mémoire qui explique tout.\n\n" +
            "### Déstructurer un objet\n\n" +
            "```js\n" +
            "const user = { nom: \"Ada\", age: 36, ville: \"Paris\" };\n" +
            "const { nom, ville } = user;\n" +
            "const { nom: prenom, pays = \"France\" } = user;\n" +
            "// prenom = \"Ada\", pays = \"France\" (clé absente)\n" +
            "```\n\n" +
            "Renommage et défaut dans la même expression. Précision qui piège tout le monde : le défaut ne s'applique QUE sur `undefined`, pas sur `null` :\n\n" +
            "```js\n" +
            "const { a = 5 } = { a: null };      // a === null, pas 5\n" +
            "const { b = 5 } = { b: undefined }; // b === 5\n" +
            "```\n\n" +
            "Même sémantique que les paramètres par défaut des fonctions. Si ton API renvoie des `null`, tes défauts de déstructuration ne te protègent pas.\n\n" +
            "Dans une signature de fonction, la déstructuration donne des options nommées, mais ajoute un défaut global sinon l'appel sans argument crashe avec un message V8 très reconnaissable :\n\n" +
            "```js\n" +
            "function creerLien({ href, texte } = {}) { /* ... */ }\n" +
            "// sans le = {} :\n" +
            "// creerLien() -> TypeError: Cannot destructure property 'href'\n" +
            "//                of 'undefined' as it is undefined.\n" +
            "```\n\n" +
            "### Tableaux, rest, spread\n\n" +
            "```js\n" +
            "const [premier, , troisieme] = [10, 20, 30]; // on saute une position\n" +
            "let a = 1, b = 2;\n" +
            "[a, b] = [b, a]; // échange sans variable temporaire\n" +
            "const [tete, ...queue] = [1, 2, 3, 4]; // tete = 1, queue = [2, 3, 4]\n" +
            "function somme(...nombres) { return nombres.reduce((s, n) => s + n, 0); }\n" +
            "const etendu = [...queue, 5]; // [2, 3, 4, 5]\n" +
            "const config = { ...defauts, timeout: 5000 }; // fusion, la droite écrase\n" +
            "```\n\n" +
            "Le même `...` rassemble en position de réception (rest) et déploie en position d'émission (spread). Le spread de tableau fonctionne sur tout itérable, y compris les chaînes, avec une subtilité Unicode : il découpe par points de code, pas par unités UTF-16. `\"👍\".length` vaut 2 (paire de surrogates), mais `[...\"👍\"]` donne `[\"👍\"]`, longueur 1. Pour compter des caractères visibles, le spread est plus juste que `.length` (et pour les cas durs type drapeaux ou accents combinés, il faut `Intl.Segmenter`).\n\n" +
            "### Le modèle mémoire : références contre valeurs\n\n" +
            "Une variable ne contient jamais un objet. Elle contient soit un primitif (copié à chaque affectation), soit une référence vers un objet stocké dans le tas. Le spread copie ces contenus de premier niveau : les primitifs sont dupliqués, les références sont recopiées TELLES QUELLES, pointant vers les mêmes objets.\n\n" +
            "```js\n" +
            "const original = { nom: \"Ada\", roles: [\"admin\"] };\n" +
            "const copie = { ...original };\n" +
            "copie.nom = \"Grace\";      // sans effet sur original : primitif copié\n" +
            "copie.roles.push(\"user\"); // original.roles vaut [\"admin\", \"user\"] !\n" +
            "```\n\n" +
            "```figure\n" +
            "{\"caption\": \"Apres { ...original } : le primitif nom est duplique, mais les deux proprietes roles referencent LE MEME tableau dans le tas\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Copie superficielle : variables, references et tas</title>\n" +
            "<text x=\"150\" y=\"32\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.7\">variables</text>\n" +
            "<text x=\"470\" y=\"32\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.7\">tas (objets)</text>\n" +
            "<rect x=\"40\" y=\"56\" width=\"180\" height=\"40\" fill=\"currentColor\" opacity=\"0.15\" rx=\"3\"/>\n" +
            "<text x=\"130\" y=\"81\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">original : ref A</text>\n" +
            "<rect x=\"40\" y=\"120\" width=\"180\" height=\"40\" fill=\"currentColor\" opacity=\"0.15\" rx=\"3\"/>\n" +
            "<text x=\"130\" y=\"145\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">copie : ref B</text>\n" +
            "<rect x=\"330\" y=\"48\" width=\"280\" height=\"56\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"470\" y=\"71\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">A { nom: \"Ada\",</text>\n" +
            "<text x=\"470\" y=\"91\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">roles: ref C }</text>\n" +
            "<rect x=\"330\" y=\"112\" width=\"280\" height=\"56\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"470\" y=\"135\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">B { nom: \"Ada\" (dupliqué),</text>\n" +
            "<text x=\"470\" y=\"155\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">roles: ref C }</text>\n" +
            "<rect x=\"330\" y=\"212\" width=\"280\" height=\"44\" fill=\"none\" class=\"fig-accent\" stroke-width=\"2\" rx=\"3\"/>\n" +
            "<text x=\"470\" y=\"239\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" class=\"fig-accent\">C [ \"admin\" ]  &lt;- partagé !</text>\n" +
            "<line x1=\"220\" y1=\"76\" x2=\"324\" y2=\"76\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"330,76 320,71 320,81\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<line x1=\"220\" y1=\"140\" x2=\"324\" y2=\"140\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"330,140 320,135 320,145\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<line x1=\"530\" y1=\"104\" x2=\"490\" y2=\"206\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"488,212 486,200 496,203\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<line x1=\"530\" y1=\"168\" x2=\"505\" y2=\"206\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"502,212 501,200 511,204\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "</svg>\n" +
            "```\n\n" +
            "### La copie profonde moderne : structuredClone\n\n" +
            "`structuredClone(obj)` (navigateurs récents, Node 17+) clone en profondeur, gère les `Date`, `Map`, `Set`, `ArrayBuffer` et même les références circulaires. Ses limites sont franches : une fonction ou un nœud DOM dans l'objet lève une `DataCloneError` (« could not be cloned »). Le vieux `JSON.parse(JSON.stringify(obj))` est pire sur tous les plans : il perd silencieusement les `undefined`, transforme les `Date` en chaînes, les `Map` en `{}`, `NaN` et `Infinity` en `null`, et explose sur les cycles avec `TypeError: Converting circular structure to JSON`. Je te déconseille de l'écrire en 2026 ailleurs que dans un projet legacy.\n\n" +
            "### Déstructurer sans déclarer : le piège des accolades\n\n" +
            "Réaffecter des variables EXISTANTES par déstructuration d'objet demande des parenthèses :\n\n" +
            "```js\n" +
            "let nom, ville;\n" +
            "{ nom, ville } = user;   // SyntaxError: Unexpected token '='\n" +
            "({ nom, ville } = user); // OK\n" +
            "```\n\n" +
            "Sans parenthèses, le moteur lit `{` en début d'instruction comme l'ouverture d'un BLOC, pas d'un motif. Les tableaux n'ont pas ce problème, mais ils ont pire : l'insertion automatique de point-virgule. Si la ligne précédente n'est pas terminée, `[a, b] = [b, a]` se colle à elle :\n\n" +
            "```js\n" +
            "const total = calculer()\n" +
            "[a, b] = [b, a];\n" +
            "// lu comme : const total = calculer()[a, b] = [b, a]\n" +
            "// TypeError si calculer() renvoie undefined, sinon comportement absurde\n" +
            "```\n\n" +
            "Deux instructions parfaitement valides isolément, un désastre une fois juxtaposées : c'est LE cas qui justifie les points-virgules, ou au minimum un formateur qui tranche pour toi.\n\n" +
            "## À toi\n\n" +
            "Que vaut `retirerVille(user)` puis `user.ville` après ce code ?\n\n" +
            "```js\n" +
            "function retirerVille({ ville, ...reste }) {\n" +
            "  return reste;\n" +
            "}\n" +
            "const user = { nom: \"Ada\", ville: \"Paris\" };\n" +
            "const sans = retirerVille(user);\n" +
            "```\n\n" +
            "> `sans` vaut `{ nom: \"Ada\" }` et `user.ville` vaut toujours `\"Paris\"`. Le rest en déstructuration crée un objet NEUF avec les propriétés restantes : c'est l'idiome standard pour « omettre une clé sans muter », bien plus propre que `delete user.ville` qui modifierait l'original (et dégraderait ses performances d'accès, on y revient en partie 6).\n",
        },
        {
          id: "l13",
          title: "Immutabilité : pourquoi et comment concrètement",
          type: "text",
          duration: "16 min",
          body:
            "## Le tri qui a cassé la liste\n\n" +
            "Symptôme réel, vu en revue de code : un composant affiche un classement trié, et depuis son ajout, un AUTRE écran affiche les mêmes données dans le mauvais ordre. Le coupable :\n\n" +
            "```js\n" +
            "const classement = scores.sort((a, b) => b.points - a.points);\n" +
            "```\n\n" +
            "`sort` trie EN PLACE et renvoie le même tableau : `classement === scores` vaut `true`. L'auteur croyait créer une copie triée ; il a réordonné la donnée partagée de toute l'application. Voilà exactement la classe de bugs que l'immutabilité élimine : l'action à distance, où une mutation ici casse un affichage là-bas.\n\n" +
            "### La discipline, en deux exemples\n\n" +
            "```js\n" +
            "// mutation cachée : l'appelant ne s'y attend pas\n" +
            "function ajouterRole(user, role) {\n" +
            "  user.roles.push(role);\n" +
            "  return user;\n" +
            "}\n" +
            "// version immuable : on reconstruit chaque niveau modifié\n" +
            "function ajouterRole(user, role) {\n" +
            "  return { ...user, roles: [...user.roles, role] };\n" +
            "}\n" +
            "```\n\n" +
            "Deux spreads, et l'original reste intact. Note le point technique hérité de la leçon précédente : on ne copie QUE les niveaux qu'on modifie. Les autres branches de l'objet restent partagées par référence, et c'est voulu : c'est le partage structurel, peu coûteux en mémoire, et sans danger tant que personne ne mute.\n\n" +
            "C'est aussi ce qui rend l'immutabilité si rentable avec React ou tout système à détection de changement : comparer `ancienEtat === nouvelEtat` coûte une instruction. Si les références diffèrent, quelque chose a changé ; si elles sont égales, rien n'a changé, garanti. Sans immutabilité, il faudrait comparer récursivement chaque champ.\n\n" +
            "### ES2023 : les versions non destructives natives\n\n" +
            "Les méthodes qui mutent en place sont à connaître par cœur : `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, `fill`, `copyWithin`. Depuis ES2023, quatre équivalents renvoient une copie modifiée sans toucher l'original :\n\n" +
            "```js\n" +
            "const scores = [3, 1, 2];\n" +
            "scores.toSorted();          // [1, 2, 3], scores intact\n" +
            "scores.toReversed();        // [2, 1, 3]\n" +
            "scores.toSpliced(1, 1);     // [3, 2] : copie sans l'element d'indice 1\n" +
            "scores.with(0, 99);         // [99, 1, 2] : copie avec l'indice 0 remplace\n" +
            "```\n\n" +
            "Disponibles partout depuis mi-2023 (Node 20+). Avant, l'idiome était `[...arr].sort(...)`. Le tri du bug d'ouverture s'écrit donc `scores.toSorted((a, b) => b.points - a.points)` et l'histoire s'arrête là.\n\n" +
            "Piège dans le piège du tri, tant qu'on y est : sans comparateur, `sort` convertit les éléments en CHAÎNES et compare lexicographiquement. `[10, 9, 1].sort()` renvoie `[1, 10, 9]`. Pour des nombres, le comparateur `(a, b) => a - b` n'est pas optionnel.\n\n" +
            "### Object.freeze : verrou superficiel\n\n" +
            "```js\n" +
            "\"use strict\";\n" +
            "const config = Object.freeze({ theme: \"clair\", limites: { max: 10 } });\n" +
            "config.theme = \"sombre\";\n" +
            "// TypeError: Cannot assign to read only property 'theme' of object '#<Object>'\n" +
            "config.limites.max = 99; // passe ! freeze ne gele que le premier niveau\n" +
            "```\n\n" +
            "En mode non strict, l'écriture échoue en silence, ce qui est pire. Et le gel est superficiel : les objets imbriqués restent mutables, il faut geler récursivement pour un verrou complet. En pratique, je réserve `Object.freeze` aux constantes de configuration au chargement du module ; pour l'état applicatif, la discipline des spreads (ou une bibliothèque comme Immer, qui te laisse écrire du code mutatif et produit des copies immuables) suffit largement.\n\n" +
            "### Le coût, honnêtement\n\n" +
            "Chaque mise à jour immuable alloue de nouveaux objets, que le ramasse-miettes devra collecter. Sur des mises à jour d'interface (dizaines par seconde, objets de quelques Ko), c'est indétectable. Sur une boucle serrée qui reconstruit un tableau d'un million d'éléments à chaque frame, c'est un vrai problème, et une structure mutable locale à la fonction est le bon choix : l'immutabilité est un contrat aux frontières (arguments reçus, valeurs retournées, état partagé), pas une interdiction de muter tes propres variables locales.\n\n" +
            "### const, seal, freeze : trois verrous qui ne ferment pas la même porte\n\n" +
            "Confusion classique en entretien : `const` ne rend RIEN immuable. Il verrouille la LIAISON (plus de réassignation possible), pas la valeur :\n\n" +
            "```js\n" +
            "const scores = [3, 1, 2];\n" +
            "scores.push(4); // parfaitement legal\n" +
            "scores = [];    // TypeError: Assignment to constant variable.\n" +
            "```\n\n" +
            "À l'étage au-dessus, `Object.seal(obj)` interdit d'ajouter ou de supprimer des propriétés mais laisse modifier les valeurs existantes ; `Object.freeze` interdit les trois. Les tests associés existent : `Object.isSealed`, `Object.isFrozen`. Et aucun des deux ne touche les collections : geler une `Map` gèle l'objet Map lui-même (ses propriétés), pas son contenu interne, et `map.set` continue de fonctionner. Pour une collection réellement immuable, pas d'API native : expose une copie, ou seulement des méthodes de lecture (le pattern closure de la partie 2).\n\n" +
            "## À toi\n\n" +
            "Ce code corrige-t-il le bug du classement ? `const classement = [...scores].sort((a, b) => b.points - a.points);`\n\n" +
            "> Oui, pour le tri : `[...scores]` crée un tableau neuf, `sort` mute la copie, l'original garde son ordre. Mais attention au faux sentiment de sécurité : la copie est superficielle, les OBJETS du classement restent partagés avec `scores`. Trier ne pose pas de problème ; écrire `classement[0].points = 0` modifierait aussi l'objet dans `scores`. Copie de la structure et copie des éléments sont deux décisions distinctes.\n",
        },
        {
          id: "l14",
          title: "Quiz : données, fonctionnel et immutabilité",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q14",
              prompt: "Pourquoi passer une valeur initiale à reduce, comme reduce((acc, x) => ..., 0) ?",
              options: [
                "C'est purement décoratif",
                "Sans elle, reduce prend le premier élément comme départ et lève une TypeError sur un tableau vide",
                "Elle rend reduce plus rapide",
                "Elle est obligatoire syntaxiquement",
              ],
              correctIndex: 1,
              explanation:
                "Sans valeur initiale, reduce utilise le premier élément comme accumulateur et commence à l'indice 1 ; sur un tableau vide, il lève TypeError: Reduce of empty array with no initial value. Fournir l'initiale sécurise le cas vide et clarifie le type du résultat.",
            },
            {
              id: "q15",
              prompt: "Après const copie = { ...original } où original.roles est un tableau, puis copie.roles.push(\"x\"), que contient original.roles ?",
              options: [
                "Le tableau d'origine sans \"x\"",
                "Le tableau avec \"x\", car le spread est superficiel et le tableau reste partagé",
                "Une erreur est levée",
                "undefined",
              ],
              correctIndex: 1,
              explanation:
                "Le spread ne copie qu'un niveau : les primitifs sont dupliqués, les références recopiées telles quelles. Les deux propriétés roles pointent vers le même tableau dans le tas. Pour isoler aussi le niveau imbriqué : { ...original, roles: [...original.roles] } ou structuredClone.",
            },
            {
              id: "q16",
              prompt: "Quelle méthode trie un tableau sans modifier l'original ?",
              options: [
                "arr.sort()",
                "arr.reverse()",
                "arr.toSorted()",
                "arr.splice()",
              ],
              correctIndex: 2,
              explanation:
                "sort, reverse et splice mutent le tableau en place (et sort renvoie la MÊME référence, piège classique). toSorted, ajouté en ES2023 avec toReversed, toSpliced et with, renvoie un nouveau tableau trié et laisse l'original intact.",
            },
            {
              id: "q17",
              prompt: "Quelle est la limite de Object.freeze(obj) ?",
              options: [
                "Il ralentit toutes les lectures",
                "Il ne gèle que le premier niveau ; les objets imbriqués restent modifiables",
                "Il supprime les propriétés",
                "Il transforme l'objet en tableau",
              ],
              correctIndex: 1,
              explanation:
                "Object.freeze est superficiel : il empêche d'ajouter, supprimer ou réassigner les propriétés directes (TypeError en mode strict, échec silencieux sinon), mais un objet ou tableau imbriqué reste mutable. Un gel profond demande d'appliquer freeze récursivement.",
            },
            {
              id: "q30",
              prompt: "Que renvoie [\"1\", \"7\", \"11\"].map(parseInt) ?",
              options: [
                "[1, 7, 11]",
                "[1, NaN, 3]",
                "[NaN, NaN, NaN]",
                "Une SyntaxError",
              ],
              correctIndex: 1,
              explanation:
                "map passe trois arguments à son callback : élément, index, tableau. parseInt reçoit donc l'index comme base : parseInt(\"1\", 0) = 1, parseInt(\"7\", 1) = NaN (base 1 invalide), parseInt(\"11\", 2) = 3 (binaire). Correctif : map(Number) ou map((s) => parseInt(s, 10)).",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Partie 5 : L'asynchrone en profondeur",
      lessons: [
        {
          id: "l15",
          title: "L'event loop : comprendre enfin l'ordre d'exécution",
          type: "text",
          duration: "19 min",
          body:
            "## Le quiz d'entretien que tout le monde rate\n\n" +
            "```js\n" +
            "console.log(\"1\");\n" +
            "setTimeout(() => console.log(\"2\"), 0);\n" +
            "Promise.resolve().then(() => console.log(\"3\"));\n" +
            "console.log(\"4\");\n" +
            "// 1, 4, 3, 2\n" +
            "```\n\n" +
            "Le `setTimeout` à 0 ms passe APRÈS la promesse. Si tu sais expliquer pourquoi sans réciter, tu comprends l'event loop ; sinon, cette leçon est la plus rentable du cours, parce que ce mécanisme explique la moitié des bugs asynchrones que tu croiseras.\n\n" +
            "### Le modèle : une pile, des files\n\n" +
            "JavaScript exécute ton code sur UN seul thread, avec une pile d'appels (call stack). Les opérations lentes (timer, réseau, disque) sont déléguées à l'hôte : les API du navigateur ou les threads internes de Node. Quand elles aboutissent, leurs callbacks ne s'exécutent pas immédiatement : ils sont mis en file d'attente. L'event loop est la boucle qui, dès que la pile est vide, prend le prochain callback en file et l'exécute.\n\n" +
            "Le point que 90 % des tutoriels survolent : il y a DEUX files, avec des priorités différentes.\n\n" +
            "- La file des macrotâches : callbacks de `setTimeout`/`setInterval`, événements DOM, I/O.\n" +
            "- La file des microtâches : callbacks de `.then`/`.catch`/`.finally`, `queueMicrotask`, `MutationObserver`.\n\n" +
            "La règle de la spec HTML : après chaque macrotâche (y compris le script initial), la file des microtâches est vidée ENTIÈREMENT avant de passer à la macrotâche suivante. Une microtâche qui planifie une microtâche prolonge cette vidange ; c'est pour ça qu'une chaîne de promesses peut affamer les timers.\n\n" +
            "```figure\n" +
            "{\"caption\": \"L'event loop : la pile execute, l'hote delegue, et les microtaches passent TOUJOURS avant la prochaine macrotache\"}\n" +
            "<svg viewBox=\"0 0 640 340\" role=\"img\"><title>Event loop : call stack, API hote, files macro et micro</title>\n" +
            "<rect x=\"30\" y=\"40\" width=\"170\" height=\"130\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"115\" y=\"28\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">call stack</text>\n" +
            "<rect x=\"42\" y=\"130\" width=\"146\" height=\"28\" fill=\"currentColor\" opacity=\"0.15\" rx=\"3\"/>\n" +
            "<text x=\"115\" y=\"149\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">script en cours</text>\n" +
            "<rect x=\"440\" y=\"40\" width=\"170\" height=\"70\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"525\" y=\"28\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">API hote</text>\n" +
            "<text x=\"525\" y=\"68\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">setTimeout, fetch,</text>\n" +
            "<text x=\"525\" y=\"88\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">evenements DOM</text>\n" +
            "<rect x=\"360\" y=\"170\" width=\"250\" height=\"44\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"485\" y=\"197\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">macrotaches : [ timeout cb ]</text>\n" +
            "<rect x=\"360\" y=\"240\" width=\"250\" height=\"44\" fill=\"none\" class=\"fig-accent\" stroke-width=\"2\" rx=\"3\"/>\n" +
            "<text x=\"485\" y=\"267\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" class=\"fig-accent\">microtaches : [ then cb ]</text>\n" +
            "<text x=\"485\" y=\"310\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" class=\"fig-accent\">videe ENTIEREMENT d'abord</text>\n" +
            "<line x1=\"200\" y1=\"70\" x2=\"434\" y2=\"70\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"440,70 430,65 430,75\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"310\" y=\"60\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">delegue</text>\n" +
            "<line x1=\"470\" y1=\"110\" x2=\"470\" y2=\"164\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"470,170 465,160 475,160\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<line x1=\"360\" y1=\"262\" x2=\"120\" y2=\"180\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"115,178 127,177 122,187\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"210\" y=\"245\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">event loop : pile vide ?</text>\n" +
            "<text x=\"210\" y=\"263\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">micro d'abord, puis macro</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "Relis le quiz d'ouverture avec ce modèle : `1` et `4` s'affichent pendant la macrotâche « script ». À la fin du script, la pile se vide ; l'event loop vide les microtâches, donc `3`. Ensuite seulement, la macrotâche du timer : `2`.\n\n" +
            "### async/await dans ce modèle\n\n" +
            "Une fonction `async` s'exécute de façon SYNCHRONE jusqu'au premier `await`, puis rend la main ; la suite est replanifiée en microtâche :\n\n" +
            "```js\n" +
            "async function f() {\n" +
            "  console.log(\"A\");\n" +
            "  await null;\n" +
            "  console.log(\"C\");\n" +
            "}\n" +
            "f();\n" +
            "console.log(\"B\");\n" +
            "// A, B, C\n" +
            "```\n\n" +
            "`await` n'endort rien : il découpe ta fonction en deux, et la seconde moitié devient une microtâche.\n\n" +
            "### Les pièges de timing à connaître\n\n" +
            "- `setTimeout(fn, 0)` ne garantit pas 0 ms : c'est un délai MINIMUM, exécuté quand la pile est vide et les microtâches épuisées. Dans les navigateurs, les timeouts imbriqués au-delà de 5 niveaux sont de plus clampés à 4 ms minimum (spec HTML), et les onglets en arrière-plan sont throttlés à 1 s ou plus.\n" +
            "- Une tâche synchrone longue bloque TOUT : timers, rendus, clics. Si un calcul prend 800 ms, l'interface gèle 800 ms. Aucune promesse ne « parallélise » du calcul pur ; pour ça il faut un Worker (partie 6).\n" +
            "- Sous Node, `process.nextTick` passe encore avant les microtâches de promesses : réserve-le aux bibliothèques, `queueMicrotask` est l'équivalent standard.\n" +
            "- La famine de microtâches est réelle : une boucle qui fait `Promise.resolve().then(boucle)` ne rend JAMAIS la main aux macrotâches. Le même code avec `setTimeout(boucle, 0)` laisse respirer le rendu.\n\n" +
            "## À toi\n\n" +
            "Dans quel ordre s'affichent les lettres ?\n\n" +
            "```js\n" +
            "setTimeout(() => console.log(\"a\"), 0);\n" +
            "Promise.resolve()\n" +
            "  .then(() => console.log(\"b\"))\n" +
            "  .then(() => console.log(\"c\"));\n" +
            "queueMicrotask(() => console.log(\"d\"));\n" +
            "console.log(\"e\");\n" +
            "```\n\n" +
            "> `e, b, d, c, a`. Le script affiche `e`. Vidange des microtâches dans l'ordre d'enfilement : `b` (déjà planifié), puis `d` ; le `.then` de `c` n'est enfilé QUE quand `b` se termine, donc il passe après `d`, mais toujours dans la même vidange. Le timer `a` ferme la marche. Si tu as mis `d` après `c`, tu viens d'apprendre que chaque maillon d'une chaîne `.then` est une microtâche distincte, pas un bloc.\n",
        },
        {
          id: "l16",
          title: "Les Promises : états, chaînage et cycle de vie",
          type: "text",
          duration: "18 min",
          body:
            "## Un objet, trois états, aucune magie\n\n" +
            "Une Promise n'est ni un thread ni un callback amélioré : c'est un objet qui représente une valeur future, avec une machine à états minuscule. Elle naît `pending`, puis passe UNE seule fois soit à `fulfilled` (avec une valeur), soit à `rejected` (avec une raison). Une fois settled, plus rien ne la change : les `resolve` ou `reject` suivants sont ignorés en silence.\n\n" +
            "```js\n" +
            "const p = new Promise((resolve, reject) => {\n" +
            "  setTimeout(() => resolve(\"donnees\"), 1000);\n" +
            "});\n" +
            "```\n\n" +
            "Détail que peu de gens savent : l'executor (la fonction passée au constructeur) s'exécute de façon SYNCHRONE, immédiatement. Seuls les callbacks de `.then` sont différés :\n\n" +
            "```js\n" +
            "console.log(\"avant\");\n" +
            "new Promise((resolve) => {\n" +
            "  console.log(\"executor\");\n" +
            "  resolve();\n" +
            "}).then(() => console.log(\"then\"));\n" +
            "console.log(\"apres\");\n" +
            "// avant, executor, apres, then\n" +
            "```\n\n" +
            "Même sur une promesse déjà résolue, `.then` passe par la file des microtâches. La spec garantit ainsi qu'un callback est TOUJOURS asynchrone : pas de code « parfois sync, parfois async », la source de bugs que Node appelait « releasing Zalgo » à l'époque des callbacks.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Cycle de vie : pending se fixe UNE fois ; then/catch reagissent, finally passe dans les deux cas\"}\n" +
            "<svg viewBox=\"0 0 640 280\" role=\"img\"><title>Cycle de vie d'une Promise</title>\n" +
            "<rect x=\"40\" y=\"110\" width=\"140\" height=\"48\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"110\" y=\"139\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">pending</text>\n" +
            "<rect x=\"300\" y=\"40\" width=\"160\" height=\"48\" fill=\"none\" class=\"fig-accent\" stroke-width=\"2\" rx=\"3\"/>\n" +
            "<text x=\"380\" y=\"69\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" class=\"fig-accent\">fulfilled</text>\n" +
            "<rect x=\"300\" y=\"180\" width=\"160\" height=\"48\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\" rx=\"3\"/>\n" +
            "<text x=\"380\" y=\"209\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">rejected</text>\n" +
            "<line x1=\"180\" y1=\"120\" x2=\"294\" y2=\"70\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"300,68 289,72 293,80\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"225\" y=\"78\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">resolve(v)</text>\n" +
            "<line x1=\"180\" y1=\"148\" x2=\"294\" y2=\"198\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"300,200 289,196 293,188\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"225\" y=\"196\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">reject(e)</text>\n" +
            "<line x1=\"460\" y1=\"64\" x2=\"554\" y2=\"64\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"560,64 550,59 550,69\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"595\" y=\"69\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">then</text>\n" +
            "<line x1=\"460\" y1=\"204\" x2=\"554\" y2=\"204\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"560,204 550,199 550,209\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"595\" y=\"209\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">catch</text>\n" +
            "<text x=\"380\" y=\"144\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">settled : ne change plus</text>\n" +
            "<text x=\"380\" y=\"262\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">finally : execute dans les deux cas</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "### Le chaînage : chaque then crée une promesse neuve\n\n" +
            "```js\n" +
            "fetch(\"/api/user\")\n" +
            "  .then((res) => res.json())\n" +
            "  .then((user) => fetch(\"/api/commandes/\" + user.id))\n" +
            "  .then((res) => res.json())\n" +
            "  .catch((err) => console.error(\"Echec :\", err.message))\n" +
            "  .finally(() => cacherSpinner());\n" +
            "```\n\n" +
            "Trois règles font tout le système :\n\n" +
            "- `.then` renvoie une NOUVELLE promesse, résolue avec la valeur de retour du callback. Retourner une valeur la propage ; retourner une promesse insère son attente dans la chaîne (c'est l'aplatissement automatique : jamais de promesse de promesse).\n" +
            "- Un `throw` dans un callback rejette la promesse renvoyée. Le rejet saute tous les `.then` suivants jusqu'au premier `.catch`, qui, s'il retourne normalement, REMET la chaîne sur la voie fulfilled.\n" +
            "- `.finally` ne reçoit rien et transmet le règlement tel quel ; parfait pour le nettoyage (spinner, verrou), inutilisable pour transformer la valeur.\n\n" +
            "Le bug de débutant à bannir : oublier le `return`. `p.then((v) => { traiter(v); })` renvoie une promesse résolue avec `undefined`, et le maillon suivant reçoit `undefined` au lieu du résultat. Une heure de debug garantie la première fois.\n\n" +
            "### ES2024 : Promise.withResolvers\n\n" +
            "Quand la résolution vient d'AILLEURS (un événement, un message WebSocket), on sortait `resolve` de l'executor à la main. C'est maintenant du langage :\n\n" +
            "```js\n" +
            "const { promise, resolve, reject } = Promise.withResolvers();\n" +
            "socket.addEventListener(\"message\", (e) => resolve(e.data), { once: true });\n" +
            "const premierMessage = await promise;\n" +
            "```\n\n" +
            "Node 22+, tous les navigateurs 2024. Ne t'en sers pas pour envelopper du code qui pourrait être une simple chaîne : c'est l'outil des ponts entre monde événementiel et monde promesse.\n\n" +
            "Dernier réflexe d'hygiène : une promesse rejetée sans aucun `.catch` (ni `await` dans un `try`) finit en rejet non géré. Le navigateur émet l'événement `unhandledrejection` ; Node, lui, TERMINE le processus par défaut avec un rapport `UnhandledPromiseRejection`. Toute chaîne qui part « dans le vide » doit se terminer par un `.catch`, même minimal.\n\n" +
            "## À toi\n\n" +
            "Que logge ce code ?\n\n" +
            "```js\n" +
            "Promise.reject(new Error(\"boom\"))\n" +
            "  .catch((e) => 42)\n" +
            "  .then((v) => console.log(\"valeur :\", v));\n" +
            "```\n\n" +
            "> `valeur : 42`. Le `.catch` a géré le rejet et a retourné normalement : la promesse qu'il renvoie est FULFILLED avec 42, et le `.then` suivant s'exécute. Un `catch` n'est pas une fin de chaîne, c'est un aiguillage : pour re-signaler l'erreur au reste de la chaîne, il faudrait relancer avec `throw e`.\n",
        },
        {
          id: "l17",
          title: "async/await : le confort et ses pièges",
          type: "text",
          duration: "17 min",
          body:
            "## Le sucre le plus utile du langage\n\n" +
            "`async/await` ne remplace pas les promesses : il les habille. Une fonction `async` renvoie TOUJOURS une promesse (même `async function f() { return 42; }` renvoie une promesse de 42), et `await` suspend la fonction jusqu'au règlement, en rendant la main à l'event loop pendant l'attente (leçon 15). Le gain, c'est que le flux de contrôle normal fonctionne à nouveau : `try/catch`, boucles, retours anticipés.\n\n" +
            "```js\n" +
            "async function chargerCommandes(userId) {\n" +
            "  try {\n" +
            "    const res = await fetch(\"/api/commandes/\" + userId);\n" +
            "    if (!res.ok) {\n" +
            "      throw new Error(\"HTTP \" + res.status);\n" +
            "    }\n" +
            "    return await res.json();\n" +
            "  } catch (err) {\n" +
            "    console.error(\"Chargement impossible :\", err.message);\n" +
            "    return [];\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "Deux pièges dans ces dix lignes. D'abord `fetch` : il ne rejette QUE sur erreur réseau. Un 404 ou un 500 est une promesse FULFILLED, avec `res.ok` à false. Sans le test `res.ok`, tu parses joyeusement une page d'erreur HTML et tu récoltes un `SyntaxError` de JSON trois lignes plus loin, loin de la vraie cause.\n\n" +
            "Ensuite `return await` : hors `try/catch`, `return maPromesse` suffit (l'appelant attendra pareil). Mais DANS un `try`, la différence est fonctionnelle : avec `return res.json()` sans `await`, si le parsing rejette, le rejet se produit APRÈS la sortie du `try` et échappe à ton `catch`. `return await` garde l'erreur attrapable localement. La règle ESLint `no-return-await` déconseillait `return await` partout ; elle a été dépréciée précisément parce que dans un `try`, il est correct.\n\n" +
            "### Séquentiel ou parallèle : le choix qui coûte des secondes\n\n" +
            "```js\n" +
            "// sequentiel : ~400 ms si chaque appel prend 200 ms\n" +
            "const user = await fetchUser();\n" +
            "const meteo = await fetchMeteo();\n" +
            "// parallele : ~200 ms, les deux partent immediatement\n" +
            "const [user2, meteo2] = await Promise.all([fetchUser(), fetchMeteo()]);\n" +
            "```\n\n" +
            "`await` en série additionne les latences. Quand les requêtes sont indépendantes, lance-les d'abord (l'appel crée la promesse et démarre le travail), attends ensuite. Sur une page qui fait 5 appels API à 200 ms, c'est 1 s contre 200 ms : la différence est visible à l'œil nu, aucun benchmark nécessaire.\n\n" +
            "### Le piège forEach, en entretien et en prod\n\n" +
            "```js\n" +
            "const ids = [1, 2, 3];\n" +
            "ids.forEach(async (id) => {\n" +
            "  const data = await fetchDetail(id);\n" +
            "  console.log(data);\n" +
            "});\n" +
            "console.log(\"fini\");\n" +
            "// \"fini\" s'affiche AVANT le moindre detail\n" +
            "```\n\n" +
            "`forEach` ignore la valeur de retour de son callback : les trois promesses partent, personne ne les attend, et les erreurs éventuelles deviennent des rejets non gérés. Les correctifs, selon l'intention :\n\n" +
            "```js\n" +
            "// sequentiel, ordre garanti\n" +
            "for (const id of ids) {\n" +
            "  console.log(await fetchDetail(id));\n" +
            "}\n" +
            "// parallele, on attend tout\n" +
            "const details = await Promise.all(ids.map((id) => fetchDetail(id)));\n" +
            "```\n\n" +
            "`map` + `Promise.all` est l'idiome standard du parallèle. Nuance d'expert : sur 500 ids, ça ouvre 500 requêtes simultanées, et ton API va répondre 429. Pour un vrai volume, il faut limiter la concurrence (une bibliothèque comme `p-limit`, ou des lots de 10) ; le langage ne fournit pas encore de limiteur natif.\n\n" +
            "### Les erreurs qu'on laisse fuir\n\n" +
            "Une fonction `async` appelée sans `await` ni `.catch` est une bombe silencieuse. Sous Node, un rejet non géré affiche un rapport `UnhandledPromiseRejection` précisant « This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled » et termine le processus. Les endroits classiques où ça arrive : un handler d'événement (`button.addEventListener(\"click\", async () => ...)`), un callback de `setInterval`, le top-level d'un script. Dans ces positions « fire and forget », mets un `try/catch` interne : personne d'autre ne rattrapera.\n\n" +
            "## À toi\n\n" +
            "Combien de temps prend `principale()`, si chaque tache prend 100 ms ?\n\n" +
            "```js\n" +
            "async function principale() {\n" +
            "  const a = tache(\"a\");\n" +
            "  const b = tache(\"b\");\n" +
            "  return [await a, await b];\n" +
            "}\n" +
            "```\n\n" +
            "> Environ 100 ms, pas 200. Les deux appels `tache(...)` démarrent AVANT le premier `await` : les promesses courent déjà en parallèle, les `await` successifs ne font qu'encaisser les résultats. C'est le pattern « lance d'abord, attends ensuite » sans `Promise.all`. Sa limite : si `a` rejette pendant que `b` n'est pas encore attendue, on peut se retrouver avec un rejet non géré sur `b` ; `Promise.all([tache(\"a\"), tache(\"b\")])` gère ce cas proprement, c'est pour ça qu'on le préfère.\n",
        },
        {
          id: "l18",
          title: "Orchestrer : all, allSettled, race, any",
          type: "text",
          duration: "17 min",
          body:
            "## Quatre combinateurs, quatre contrats\n\n" +
            "Le langage fournit quatre fonctions statiques pour coordonner plusieurs promesses. Elles se ressemblent et ne sont PAS interchangeables : chacune a un contrat de succès et d'échec différent, et choisir la mauvaise donne des bugs subtils, pas des erreurs franches.\n\n" +
            "| Combinateur | Réussit quand | Échoue quand | Cas d'usage |\n" +
            "| --- | --- | --- | --- |\n" +
            "| `Promise.all` | toutes réussissent | UNE échoue (fail-fast) | données interdépendantes |\n" +
            "| `Promise.allSettled` | toujours (jamais de rejet) | jamais | lot d'opérations indépendantes |\n" +
            "| `Promise.race` | la 1re SETTLED gagne | si la 1re settled est un rejet | timeout, course simple |\n" +
            "| `Promise.any` | la 1re FULFILLED gagne | toutes échouent (AggregateError) | premier miroir qui répond |\n\n" +
            "### all : tout ou rien\n\n" +
            "```js\n" +
            "const [user, commandes, avis] = await Promise.all([\n" +
            "  fetchUser(id), fetchCommandes(id), fetchAvis(id),\n" +
            "]);\n" +
            "```\n\n" +
            "Résultats dans l'ORDRE des promesses passées, pas dans l'ordre d'arrivée. Fail-fast : au premier rejet, `all` rejette immédiatement avec CETTE erreur. Les autres promesses ne sont pas annulées pour autant, elles continuent en arrière-plan : une promesse, une fois lancée, ne s'annule pas de l'extérieur.\n\n" +
            "### allSettled : le rapport complet\n\n" +
            "```js\n" +
            "const resultats = await Promise.allSettled(urls.map((u) => fetch(u)));\n" +
            "for (const r of resultats) {\n" +
            "  if (r.status === \"fulfilled\") { traiter(r.value); }\n" +
            "  else { console.warn(\"echec :\", r.reason.message); }\n" +
            "}\n" +
            "```\n\n" +
            "Jamais de rejet : chaque entrée devient `{ status: \"fulfilled\", value }` ou `{ status: \"rejected\", reason }`. C'est le bon choix quand un échec partiel est acceptable, l'envoi de 20 notifications par exemple : perdre les 19 autres parce que la 7e a échoué (ce que ferait `all`) serait absurde.\n\n" +
            "### race et le timeout\n\n" +
            "`race` règle sur la PREMIÈRE promesse settled, succès ou échec. Son usage historique, le timeout :\n\n" +
            "```js\n" +
            "const res = await Promise.race([\n" +
            "  fetch(\"/api/lente\"),\n" +
            "  new Promise((_, reject) =>\n" +
            "    setTimeout(() => reject(new Error(\"Timeout 3s\")), 3000)),\n" +
            "]);\n" +
            "```\n\n" +
            "Honnêteté technique : perdre la course n'ANNULE pas la requête, elle continue de consommer le réseau. La version moderne annule vraiment :\n\n" +
            "```js\n" +
            "const res = await fetch(\"/api/lente\", { signal: AbortSignal.timeout(3000) });\n" +
            "// au-dela de 3 s : rejet avec une DOMException nommee TimeoutError\n" +
            "```\n\n" +
            "`AbortSignal.timeout` est disponible partout depuis 2022-2023 (Node 17.3+). Je te déconseille le pattern `race` + timer pour les requêtes HTTP en 2026 : il laisse fuir des connexions.\n\n" +
            "### any et AggregateError\n\n" +
            "`any` veut UN succès, n'importe lequel : les rejets sont ignorés tant qu'il reste de l'espoir. Si TOUTES échouent :\n\n" +
            "```js\n" +
            "await Promise.any([\n" +
            "  Promise.reject(new Error(\"a\")),\n" +
            "  Promise.reject(new Error(\"b\")),\n" +
            "]);\n" +
            "// AggregateError: All promises were rejected\n" +
            "// err.errors -> [Error: a, Error: b]\n" +
            "```\n\n" +
            "L'`AggregateError` porte le tableau `errors` avec chaque échec individuel : logge-le, sinon tu ne sauras jamais pourquoi les miroirs sont tous tombés.\n\n" +
            "### Les cas limites qui trahissent en production\n\n" +
            "- `Promise.all([])` : fulfilled immédiatement avec `[]`. Sain.\n" +
            "- `Promise.any([])` : rejette immédiatement (AggregateError), personne ne peut gagner.\n" +
            "- `Promise.race([])` : reste PENDING pour toujours. Un `await` dessus ne revient jamais, sans erreur ni log. Si ta liste de promesses peut être vide (résultat d'un filtre), teste-la avant.\n\n" +
            "Et une nouveauté ES2025 pour fiabiliser les frontières : `Promise.try(fn)` exécute `fn` immédiatement et capture aussi bien un `throw` synchrone qu'un rejet asynchrone dans la même chaîne `.catch`. Avant, une fonction qui lançait AVANT de renvoyer sa promesse échappait au `.catch` ; `Promise.try` uniformise les deux mondes (Node 23+, navigateurs 2024-2025).\n\n" +
            "## À toi\n\n" +
            "Tu envoies 50 emails via `envoyer(email)` qui renvoie une promesse. Cahier des charges : tous doivent être tentés, et tu veux la liste des échecs à la fin. Quel combinateur, et pourquoi pas `Promise.all` ?\n\n" +
            "> `Promise.allSettled(emails.map(envoyer))`, puis un filtre sur `status === \"rejected\"` pour collecter les `reason`. `Promise.all` rejette au PREMIER échec : ton code de compte rendu ne s'exécuterait pas et tu perdrais le rapport des 49 autres (déjà parties, mais leurs résultats deviennent inobservables par cette voie). `all` répond à « tout doit réussir », `allSettled` à « tente tout, rapporte tout » : ici c'est le second contrat.\n",
        },
        {
          id: "l19",
          title: "Quiz : l'asynchrone",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q18",
              prompt: "Que garantit la file des microtâches par rapport aux macrotâches ?",
              options: [
                "Les microtâches s'exécutent en parallèle sur un autre thread",
                "La file des microtâches est vidée entièrement après chaque macrotâche, avant la macrotâche suivante",
                "Les macrotâches sont toujours prioritaires",
                "Les deux files alternent une tâche chacune",
              ],
              correctIndex: 1,
              explanation:
                "Après chaque macrotâche (y compris le script initial), l'event loop vide TOUTE la file des microtâches (.then, queueMicrotask) avant de prendre la macrotâche suivante (setTimeout, événements). C'est pour ça que Promise.resolve().then(...) passe avant setTimeout(..., 0).",
            },
            {
              id: "q19",
              prompt: "Que renvoie une fonction déclarée async function f() { return 42; } ?",
              options: [
                "Le nombre 42 directement",
                "undefined",
                "Une promesse qui se résout avec 42",
                "Une erreur : return est interdit dans une fonction async",
              ],
              correctIndex: 2,
              explanation:
                "Une fonction async renvoie TOUJOURS une promesse. Une valeur retournée devient la valeur de résolution ; un throw devient un rejet. L'appelant doit await ou .then pour obtenir 42.",
            },
            {
              id: "q20",
              prompt: "Pourquoi vérifier res.ok après un await fetch(url) ?",
              options: [
                "Parce que fetch renvoie null en cas d'erreur HTTP",
                "Parce que fetch ne rejette pas sur un statut 404 ou 500, seulement sur une erreur réseau",
                "Parce que res.ok contient les données JSON",
                "C'est inutile, le catch suffit",
              ],
              correctIndex: 1,
              explanation:
                "Un 404 ou un 500 est une réponse HTTP valide : la promesse de fetch est fulfilled et le catch ne se déclenche pas. res.ok vaut true seulement pour les statuts 200-299 ; sans ce test, on tente de parser une page d'erreur et le vrai problème est masqué.",
            },
            {
              id: "q21",
              prompt: "Quelle différence entre Promise.all et Promise.allSettled ?",
              options: [
                "Aucune, allSettled est un alias moderne",
                "all rejette dès le premier échec ; allSettled attend tout et décrit chaque résultat sans jamais rejeter",
                "allSettled est plus rapide",
                "all limite la concurrence à 6 promesses",
              ],
              correctIndex: 1,
              explanation:
                "all est fail-fast : un seul rejet fait rejeter l'ensemble avec cette erreur. allSettled attend toutes les promesses et renvoie des objets { status, value } ou { status, reason } : le bon choix quand les opérations sont indépendantes et qu'un échec partiel est acceptable.",
            },
            {
              id: "q22",
              prompt: "Dans quel ordre s'affiche : console.log(\"1\"); setTimeout(() => console.log(\"2\"), 0); Promise.resolve().then(() => console.log(\"3\")); console.log(\"4\"); ?",
              options: [
                "1, 2, 3, 4",
                "1, 4, 3, 2",
                "1, 4, 2, 3",
                "1, 3, 4, 2",
              ],
              correctIndex: 1,
              explanation:
                "Le script (macrotâche en cours) affiche 1 puis 4. La pile se vide, les microtâches passent d'abord : 3. Puis la macrotâche du timer : 2. Microtâches avant macrotâches, toujours.",
            },
            {
              id: "q31",
              prompt: "Que se passe-t-il avec ids.forEach(async (id) => { await traiter(id); }) suivi de console.log(\"fini\") ?",
              options: [
                "Les traitements sont attendus un par un, puis \"fini\" s'affiche",
                "\"fini\" s'affiche avant les traitements : forEach ignore les promesses renvoyées par son callback",
                "Une SyntaxError : async est interdit dans forEach",
                "forEach attend automatiquement chaque callback async",
              ],
              correctIndex: 1,
              explanation:
                "forEach ne fait rien de la valeur de retour du callback : les promesses partent sans être attendues et \"fini\" s'affiche immédiatement. Pour du séquentiel : for...of avec await. Pour du parallèle contrôlé : await Promise.all(ids.map(traiter)).",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Partie 6 : Modules, patterns et performance",
      lessons: [
        {
          id: "l20",
          title: "Les modules ES : import, export et live bindings",
          type: "text",
          duration: "17 min",
          body:
            "## Un fichier = un module = une portée\n\n" +
            "Avant 2015, tout script partageait le même espace global : deux bibliothèques qui déclaraient chacune un `utils` s'écrasaient mutuellement, et l'ordre des balises `<script>` était un château de cartes. Les modules ES règlent ça structurellement : chaque fichier a sa propre portée, n'expose QUE ce qu'il exporte, et déclare ses dépendances explicitement.\n\n" +
            "```js\n" +
            "// maths.js\n" +
            "export const TVA = 1.2;\n" +
            "export function ttc(prix) { return prix * TVA; }\n" +
            "export default function arrondir(n) { return Math.round(n * 100) / 100; }\n" +
            "\n" +
            "// app.js\n" +
            "import arrondir, { ttc, TVA as tauxTva } from \"./maths.js\";\n" +
            "```\n\n" +
            "Exports nommés : autant que tu veux, importés entre accolades avec le nom EXACT (renommable via `as`). Export default : un seul, importé sous le nom que tu veux. Mon avis tranché, partagé par pas mal d'équipes (et par la doc TypeScript) : préfère les exports nommés. Ils cassent à la compilation si le nom change, l'auto-import de l'éditeur les trouve, et ils empêchent le même composant de s'appeler `Button` ici et `Btn` là-bas.\n\n" +
            "Trois propriétés des modules qu'on découvre trop tard :\n\n" +
            "- Ils sont TOUJOURS en mode strict, sans le déclarer.\n" +
            "- Les `import` statiques sont hoistés et résolus avant l'exécution : tu peux utiliser une fonction importée « au-dessus » de la ligne d'import, et un import inexistant casse au chargement, pas au premier appel.\n" +
            "- Un module est un SINGLETON : évalué une seule fois, mis en cache, tous les importeurs partagent la même instance. Un `const cache = new Map()` au top-level d'un module est partagé par toute l'application, c'est un pattern d'état global assumé.\n\n" +
            "### Les live bindings : la subtilité qui surprend\n\n" +
            "Un import n'est PAS une copie de la valeur : c'est une vue en lecture seule sur la variable du module exportateur.\n\n" +
            "```js\n" +
            "// compteur.js\n" +
            "export let n = 0;\n" +
            "export function incr() { n++; }\n" +
            "\n" +
            "// app.js\n" +
            "import { n, incr } from \"./compteur.js\";\n" +
            "console.log(n); // 0\n" +
            "incr();\n" +
            "console.log(n); // 1 : la liaison est vivante, pas copiee\n" +
            "n = 5; // TypeError: Assignment to constant variable.\n" +
            "```\n\n" +
            "La lecture suit la variable d'origine en temps réel ; l'écriture est interdite côté importeur (V8 signale l'affectation comme sur une constante). C'est différent d'un `module.exports` CommonJS, qui copiait les valeurs primitives au moment du `require`.\n\n" +
            "### import() dynamique et top-level await\n\n" +
            "L'import statique charge tout, tout de suite. `import()` (la forme fonction) renvoie une promesse du module, et ne le charge que quand la ligne s'exécute :\n\n" +
            "```js\n" +
            "bouton.addEventListener(\"click\", async () => {\n" +
            "  const { genererPdf } = await import(\"./pdf.js\");\n" +
            "  genererPdf(document.title);\n" +
            "});\n" +
            "```\n\n" +
            "C'est le mécanisme derrière le code-splitting des bundlers : la bibliothèque PDF de 300 Ko n'est téléchargée que si l'utilisateur clique. Depuis ES2022, le top-level await complète le tableau : un module peut attendre au niveau racine (`const config = await chargerConfig();`), et ses importeurs attendent automatiquement qu'il soit prêt.\n\n" +
            "ES2025 ajoute les attributs d'import, qui sécurisent l'import de non-JavaScript :\n\n" +
            "```js\n" +
            "import config from \"./config.json\" with { type: \"json\" };\n" +
            "```\n\n" +
            "Sans l'attribut, un serveur compromis pourrait servir du JS exécutable à la place du JSON attendu ; avec, le moteur refuse tout autre type MIME. Support : Node 22+ (stable dans les 22.x récents), Chrome 123+, Safari 17.2+.\n\n" +
            "### Le piège structurel : les dépendances circulaires\n\n" +
            "`a.js` importe `b.js` qui importe `a.js`. Les modules ES gèrent le cycle sans exploser (grâce aux live bindings), MAIS l'un des deux s'exécutera avec des liaisons pas encore initialisées : utiliser au top-level une valeur venue de l'autre module du cycle donne `ReferenceError: Cannot access 'x' before initialization`, la TDZ de la partie 1 qui revient par la fenêtre. Le symptôme classique : « ça marche si j'inverse deux imports ». Le vrai correctif n'est jamais d'inverser les imports, c'est d'extraire la partie commune dans un troisième module dont les deux dépendent.\n\n" +
            "## À toi\n\n" +
            "`config.js` exporte `export let mode = \"dev\";` et `export function setMode(m) { mode = m; }`. Dans `app.js`, après `import { mode, setMode } from \"./config.js\"; setMode(\"prod\");`, que vaut `mode` ? Et que ferait `mode = \"prod\";` à la place ?\n\n" +
            "> `mode` vaut `\"prod\"` : l'import est une liaison vivante, la mutation faite PAR le module exportateur est visible immédiatement chez tous les importeurs. En revanche `mode = \"prod\";` côté importeur lève `TypeError: Assignment to constant variable.` : la liaison est en lecture seule de l'extérieur. Si tu veux de l'état modifiable partagé, expose une fonction (comme `setMode`) ou un objet dont tu mutes les propriétés.\n",
        },
        {
          id: "l21",
          title: "Patterns utiles : observer, pub/sub et encapsulation",
          type: "text",
          duration: "17 min",
          body:
            "## Découpler ce qui n'a pas à se connaître\n\n" +
            "Un panier e-commerce, trois zones d'interface : le badge du header, le total du panier, un toast de confirmation. Version naïve : la fonction `ajouterAuPanier` connaît les trois et les met à jour elle-même. Chaque nouvelle zone = une modification de la fonction, qui finit par dépendre de la moitié du DOM. Le pattern observer inverse la dépendance : le panier annonce « j'ai changé », et quiconque veut réagir s'abonne.\n\n" +
            "```js\n" +
            "function creerPanier() {\n" +
            "  const articles = [];\n" +
            "  const abonnes = new Set();\n" +
            "  function notifier() {\n" +
            "    for (const cb of abonnes) {\n" +
            "      try { cb(articles); }\n" +
            "      catch (e) { console.error(\"abonne en erreur :\", e); }\n" +
            "    }\n" +
            "  }\n" +
            "  return {\n" +
            "    ajouter(article) { articles.push(article); notifier(); },\n" +
            "    abonner(cb) {\n" +
            "      abonnes.add(cb);\n" +
            "      return () => abonnes.delete(cb); // desabonnement\n" +
            "    },\n" +
            "  };\n" +
            "}\n" +
            "const panier = creerPanier();\n" +
            "const stop = panier.abonner((a) => majBadge(a.length));\n" +
            "```\n\n" +
            "Quatre décisions dans ce code, chacune apprise à la dure :\n\n" +
            "- `articles` et `abonnes` sont des variables de closure (partie 2) : aucun code extérieur ne peut les corrompre. C'est le module pattern, la façon la plus simple d'encapsuler en JS sans classe.\n" +
            "- Un `Set` plutôt qu'un tableau d'abonnés : abonner deux fois le même callback est neutre, et `delete` est O(1).\n" +
            "- `abonner` RETOURNE la fonction de désabonnement. Un abonnement sans désabonnement, c'est la fuite mémoire type des single-page apps : le composant est détruit, son callback reste dans le `Set`, et la closure retient tout ce qu'il capture. React impose ce contrat dans `useEffect` pour cette raison exacte.\n" +
            "- Le `try/catch` autour de chaque callback : sans lui, UN abonné qui lance une exception empêche les suivants d'être notifiés. Un bug du toast ne doit pas casser le badge.\n\n" +
            "### La version plateforme : EventTarget\n\n" +
            "Tu n'es pas obligé d'écrire le bus toi-même, le navigateur (et Node 15+) en fournit un :\n\n" +
            "```js\n" +
            "class Panier extends EventTarget {\n" +
            "  #articles = [];\n" +
            "  ajouter(article) {\n" +
            "    this.#articles.push(article);\n" +
            "    this.dispatchEvent(new CustomEvent(\"change\", { detail: this.#articles }));\n" +
            "  }\n" +
            "}\n" +
            "const panier = new Panier();\n" +
            "panier.addEventListener(\"change\", (e) => majBadge(e.detail.length));\n" +
            "```\n\n" +
            "Même sémantique que les événements DOM, donc mêmes options : `{ once: true }` pour un abonnement à usage unique, et surtout `{ signal }` :\n\n" +
            "```js\n" +
            "const ctrl = new AbortController();\n" +
            "panier.addEventListener(\"change\", majBadge, { signal: ctrl.signal });\n" +
            "panier.addEventListener(\"change\", majTotal, { signal: ctrl.signal });\n" +
            "ctrl.abort(); // TOUS les listeners lies au signal sont retires d'un coup\n" +
            "```\n\n" +
            "Un seul `abort()` nettoie tous les abonnements d'un composant. C'est devenu mon réglage par défaut : plus aucun `removeEventListener` oublié, plus besoin de garder une référence sur chaque callback.\n\n" +
            "### Debounce et throttle : le duo des événements bavards\n\n" +
            "Un champ de recherche déclenche `input` à chaque frappe ; « javascript » tapé vite = 10 événements en une seconde, donc 10 requêtes API si tu ne fais rien.\n\n" +
            "```js\n" +
            "function debounce(fn, delai) {\n" +
            "  let timer;\n" +
            "  return function (...args) {\n" +
            "    clearTimeout(timer);\n" +
            "    timer = setTimeout(() => fn.apply(this, args), delai);\n" +
            "  };\n" +
            "}\n" +
            "champ.addEventListener(\"input\", debounce(rechercher, 300));\n" +
            "```\n\n" +
            "Le debounce attend le SILENCE : chaque événement annule le timer précédent, seule la dernière frappe suivie de 300 ms de calme déclenche `rechercher`. Note la closure sur `timer` et le `fn.apply(this, args)` qui préserve `this` et les arguments : tout le cours dans six lignes. Le throttle, lui, garantit AU PLUS une exécution par fenêtre de temps, pendant que les événements continuent : c'est le bon choix pour `scroll` ou `mousemove`, où tu veux réagir en continu mais à fréquence bornée. Retiens : debounce = « quand il a fini », throttle = « pas plus d'une fois toutes les X ms ». Les inverser se voit tout de suite : une barre de progression de scroll debouncée ne bouge qu'à l'arrêt du scroll, effet garanti en démo client.\n\n" +
            "## À toi\n\n" +
            "Dans `creerPanier`, remplace mentalement `abonner(cb)` par une version qui ne retourne rien. Quel scénario concret produit une fuite mémoire dans une single-page app ?\n\n" +
            "> Un composant (une vue « produit » par exemple) s'abonne à son affichage. L'utilisateur navigue ailleurs : le composant est retiré du DOM, mais son callback reste dans le `Set` du panier, et la closure du callback retient le composant et tout son sous-arbre. Après 50 navigations, 50 composants morts sont encore en mémoire et notifiés à chaque changement. Sans fonction de désabonnement (ou un `AbortController`), il n'existe AUCUN moyen de retirer le callback : la fuite est structurelle, pas accidentelle.\n",
        },
        {
          id: "l22",
          title: "Performance : mesurer d'abord, optimiser ensuite",
          type: "text",
          duration: "17 min",
          body:
            "## La règle qui économise des semaines\n\n" +
            "L'erreur de performance la plus chère n'est pas un algorithme lent : c'est optimiser au hasard. On réécrit trois jours durant une fonction qui pesait 2 % du temps total, pendant que le vrai goulot (une boucle qui touche le DOM) reste intact. Donc, avant tout : mesurer.\n\n" +
            "```js\n" +
            "const t0 = performance.now();\n" +
            "traiterCommandes(commandes);\n" +
            "console.log(\"traitement :\", (performance.now() - t0).toFixed(1), \"ms\");\n" +
            "```\n\n" +
            "`performance.now()` donne des millisecondes fractionnaires, monotones (jamais perturbées par un changement d'heure système). `console.time(\"x\")` / `console.timeEnd(\"x\")` font pareil en plus court. Et pour trouver le goulot sans instrumenter à la main : l'onglet Performance des DevTools enregistre un profil et te montre QUELLE fonction consomme, à la ligne près. Dix minutes de profil valent trois jours d'intuition.\n\n" +
            "### Goulot n°1 en front : le DOM, pas le JavaScript\n\n" +
            "Le JS pur est rapide : additionner un million de nombres prend quelques millisecondes. Ce qui est lent, c'est la frontière avec le rendu. Chaque écriture dans le DOM invalide la mise en page ; chaque LECTURE de géométrie (`offsetHeight`, `getBoundingClientRect`) force le navigateur à recalculer immédiatement le layout invalidé. Alterner les deux dans une boucle s'appelle le layout thrashing :\n\n" +
            "```js\n" +
            "// force un reflow PAR ITERATION : lecture apres ecriture\n" +
            "for (const el of items) {\n" +
            "  el.style.width = el.parentElement.offsetWidth / 2 + \"px\";\n" +
            "}\n" +
            "// lire d'abord, ecrire ensuite : un seul layout\n" +
            "const largeurs = items.map((el) => el.parentElement.offsetWidth);\n" +
            "items.forEach((el, i) => { el.style.width = largeurs[i] / 2 + \"px\"; });\n" +
            "```\n\n" +
            "Sur 200 éléments, la première version peut prendre 50 à 200 ms (200 reflows), la seconde 2 à 5 ms. C'est l'ordre de grandeur le plus rentable de toute cette leçon. Même logique pour les insertions : 100 `appendChild` dans une boucle déclenchent des mises à jour en rafale ; accumule dans un `DocumentFragment` et insère UNE fois.\n\n" +
            "### Choisir la bonne structure de données\n\n" +
            "```js\n" +
            "// verifier l'appartenance de 1000 ids dans une liste de 100 000\n" +
            "ids.filter((id) => grosTableau.includes(id));   // O(n*m) : ~100 M comparaisons\n" +
            "const ensemble = new Set(grosTableau);          // construction O(m), une fois\n" +
            "ids.filter((id) => ensemble.has(id));            // O(n) : 1000 lookups\n" +
            "```\n\n" +
            "`includes` parcourt le tableau à chaque appel ; `Set.has` est en temps quasi constant. Sur ces volumes, on passe de plusieurs secondes à quelques millisecondes, pas 10 % de mieux : des ordres de grandeur. Réflexe associé : des recherches répétées par clé = une `Map` construite une fois, pas des `find` en boucle.\n\n" +
            "Pendant qu'on parle structures : évite `delete obj.prop` sur des objets manipulés en masse. Les moteurs optimisent les objets dont la forme est stable (V8 leur donne des hidden classes) ; `delete` fait basculer l'objet en mode dictionnaire, plus lent sur TOUS les accès suivants. Si les clés vont et viennent, c'est le signal qu'il te fallait une `Map` : `map.delete(cle)` est fait pour ça, sans pénalité.\n\n" +
            "### Quand le calcul est vraiment lourd : sortir du thread\n\n" +
            "Rappel de la partie 5 : un thread unique, donc 2 secondes de calcul = 2 secondes d'interface gelée. Aucune promesse n'y change rien, `await` ne découpe pas du calcul pur. La solution plateforme, c'est le Web Worker :\n\n" +
            "```js\n" +
            "// worker.js\n" +
            "self.onmessage = (e) => {\n" +
            "  self.postMessage(analyseLourde(e.data));\n" +
            "};\n" +
            "// app.js\n" +
            "const worker = new Worker(\"./worker.js\");\n" +
            "worker.onmessage = (e) => afficher(e.data);\n" +
            "worker.postMessage(donnees);\n" +
            "```\n\n" +
            "Le worker tourne sur un VRAI thread séparé, sans accès au DOM ; la communication passe par messages, sérialisés avec le même algorithme que `structuredClone` (mêmes limites : pas de fonctions). Le seuil de rentabilité honnête : en dessous de ~50 ms de calcul, l'aller-retour de messages coûte plus qu'il ne rapporte ; au-delà de 100-200 ms de blocage répété, le worker change la vie de l'utilisateur.\n\n" +
            "Trois réflexes pour finir, du plus au moins rentable : profile avant de toucher (DevTools Performance), sépare lectures et écritures DOM, choisis Set/Map dès que « chercher dedans » se répète. Et méfie-toi des microbenchmarks trouvés en ligne : un `for` 1,5 fois plus rapide qu'un `map` sur 10 millions d'itérations ne justifie pas de sacrifier la lisibilité d'un code qui en traite 200.\n\n" +
            "## À toi\n\n" +
            "Une page affiche 5 000 lignes de log et propose un champ de filtre. À chaque frappe, le code fait `lignes.filter((l) => l.texte.includes(saisie))` puis reconstruit les 5 000 `<div>` avec `innerHTML +=` dans une boucle. La frappe est poussive. Quelles sont les DEUX optimisations prioritaires, dans l'ordre ?\n\n" +
            "> 1) Le DOM d'abord : `innerHTML +=` dans une boucle re-parse et reconstruit le HTML accumulé à chaque itération, c'est quadratique et catastrophique. Construire la chaîne complète puis une SEULE affectation `innerHTML`, ou un `DocumentFragment`, et ne rendre que les résultats visibles. 2) Débouncer la frappe (leçon précédente, ~200 ms) pour ne filtrer qu'au calme. Le `filter` lui-même, 5 000 `includes`, se mesure en 1 ou 2 ms : le remplacer par un index serait de l'optimisation au hasard, exactement ce que le profil aurait montré d'emblée.\n",
        },
        {
          id: "l23",
          title: "Quiz final : modules, patterns et performance",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q23",
              prompt: "Quelle affirmation sur les modules ES est vraie ?",
              options: [
                "Un module est ré-exécuté à chaque import",
                "Un module est évalué une seule fois puis mis en cache : tous les importeurs partagent la même instance",
                "Les modules partagent toutes leurs variables globalement",
                "Il faut déclarer \"use strict\" pour activer le mode strict dans un module",
              ],
              correctIndex: 1,
              explanation:
                "Un module ES est un singleton : première évaluation au premier import, puis cache. Un état au top-level (une Map, une config) est partagé par toute l'application. Et les modules sont toujours en mode strict, sans le déclarer.",
            },
            {
              id: "q24",
              prompt: "À quoi sert import() avec des parenthèses, par rapport à un import statique ?",
              options: [
                "C'est une syntaxe équivalente plus ancienne",
                "Il charge le module à la demande et renvoie une promesse : c'est la base du code-splitting",
                "Il importe plus rapidement",
                "Il permet d'importer plusieurs fichiers d'un coup",
              ],
              correctIndex: 1,
              explanation:
                "L'import statique est résolu au chargement, avant l'exécution. import(\"./module.js\") ne télécharge et n'évalue le module que quand la ligne s'exécute, et renvoie une promesse du module : idéal pour différer une grosse dépendance jusqu'au clic qui en a besoin.",
            },
            {
              id: "q25",
              prompt: "Pourquoi la fonction abonner d'un observer doit-elle retourner une fonction de désabonnement ?",
              options: [
                "Pour des raisons purement stylistiques",
                "Sans désabonnement, les callbacks de composants détruits restent référencés : fuite mémoire structurelle",
                "Pour accélérer les notifications",
                "Parce que Set l'exige",
              ],
              correctIndex: 1,
              explanation:
                "Un callback resté dans le Set après la destruction de son composant retient (via sa closure) le composant entier : la mémoire ne peut pas être libérée et le callback continue d'être notifié. Retourner () => abonnes.delete(cb), ou utiliser addEventListener avec { signal }, rend le nettoyage possible.",
            },
            {
              id: "q26",
              prompt: "Un champ de recherche déclenche une requête API à chaque frappe. Quel remède est le plus adapté ?",
              options: [
                "Un throttle sur le scroll",
                "Un debounce : attendre ~300 ms de silence après la dernière frappe avant de requêter",
                "Passer la requête en synchrone",
                "Un Web Worker",
              ],
              correctIndex: 1,
              explanation:
                "Le debounce annule le timer à chaque frappe et ne déclenche qu'après un silence : une seule requête pour \"javascript\" tapé vite, au lieu de dix. Le throttle (au plus une exécution par fenêtre) convient mieux à scroll/mousemove où on veut réagir en continu.",
            },
            {
              id: "q32",
              prompt: "compteur.js exporte export let n = 0 et export function incr() { n++; }. Dans app.js, après import { n, incr } puis incr(), que vaut n ?",
              options: [
                "0 : l'import a copié la valeur au moment du chargement",
                "1 : un import est une liaison vivante vers la variable du module exportateur",
                "undefined",
                "Une TypeError est levée par incr()",
              ],
              correctIndex: 1,
              explanation:
                "Les imports ES sont des live bindings : une vue en lecture seule sur la variable d'origine, pas une copie. La mutation faite par le module exportateur est visible immédiatement. En revanche, écrire n = 5 côté importeur lève TypeError: Assignment to constant variable.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
