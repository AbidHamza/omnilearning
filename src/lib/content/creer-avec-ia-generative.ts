import type { Course } from "../types";

const course: Course = {
  slug: "creer-avec-ia-generative",
  title: "Créer du contenu avec l'IA générative (texte, image, vidéo)",
  tagline:
    "Produis des posts, des visuels et des vidéos avec Claude, Midjourney ou Runway, sans que ton audience sente la machine.",
  description:
    "Un parcours concret pour les créateurs, community managers et entrepreneurs qui doivent publier beaucoup, bien, et sans budget d'agence. Tu apprends à choisir les bons outils par média (texte, image, vidéo, voix), à écrire des briefs qui donnent une vraie voix de marque à la machine, à traquer les tics d'écriture IA, à générer des visuels cohérents avec ta charte, à monter des vidéos courtes assistées, puis à assembler tout ça dans un pipeline de production hebdomadaire. Un fil rouge tout du long : Terra Café, un torréfacteur en ligne fictif dont tu construis le contenu leçon après leçon. Avec un chapitre entier sur le droit, les mentions IA obligatoires et l'éthique, parce que publier du contenu généré sans se poser ces questions finit toujours mal.",
  category: "Intelligence Artificielle",
  level: "Débutant",
  instructor: "",
  hours: 5,
  rating: 0,
  learners: 0,
  accent: "#a78bfa",
  image: "/covers/creer-avec-ia-generative.svg",
  language: "Français",
  software:
    "Un navigateur et des comptes gratuits ou d'essai sur les outils cités (Claude ou ChatGPT, Midjourney, CapCut, ElevenLabs)",
  prerequisites: [
    "Publier déjà du contenu, même occasionnellement (réseaux sociaux, blog, newsletter)",
    "Aucune compétence technique ni graphique requise",
    "Un budget outils facultatif de 20 à 40 € par mois pour tester les versions payantes",
  ],
  summary: [
    "Partie 1 : Le paysage 2026 (quels outils pour quel média, à quel prix)",
    "Partie 2 : Écrire avec l'IA sans que ça se voie (brief, itération, tics à traquer)",
    "Partie 3 : L'image générée en pratique (prompts, cohérence de marque, droits)",
    "Partie 4 : Vidéo et audio (scripts courts, voix off, montage assisté)",
    "Partie 5 : Le pipeline de production, du calendrier à la mesure",
    "Partie 6 : Éthique, droit et authenticité",
  ],
  objectives: [
    "Choisir un stack d'outils IA adapté à ton média et ton budget, sans t'abonner à tout",
    "Écrire un brief de marque qui produit du texte fidèle à ta voix, puis le réécrire pour qu'il passe inaperçu",
    "Repérer et corriger les signatures d'écriture IA que ton audience détecte inconsciemment",
    "Générer des images cohérentes avec ta charte graphique et connaître leurs limites juridiques réelles",
    "Produire une vidéo courte avec voix off et sous-titres en moins d'une heure",
    "Monter un pipeline hebdomadaire calendrier → génération → contrôle qualité → publication → mesure",
  ],
  skills: [
    "Prompting texte et image",
    "Brief et voix de marque",
    "Relecture anti-signature IA",
    "Production vidéo courte assistée",
    "Calendrier éditorial et pipeline de contenu",
    "Conformité : mentions IA, droits d'auteur, FTC/AI Act",
  ],
  contentTypes: [
    "Leçons écrites",
    "Schémas et checklists",
    "Quiz interactifs",
    "Fil rouge de marque (Terra Café)",
  ],
  parts: [
    {
      id: "p1",
      title: "Le paysage 2026 : outils, prix, forces et faiblesses",
      lessons: [
        {
          id: "l1",
          title: "Le métier a changé : produire du contenu en 2026",
          type: "text",
          duration: "14 min",
          body:
            "## Douze posts, trois newsletters, une personne\n\n" +
            "Léa gère seule la communication de Terra Café, un torréfacteur qui vend son café en ligne. Son planning d'une semaine normale : douze posts Instagram et TikTok, une newsletter, deux fiches produit à réécrire, un article de blog sur la mouture, et des visuels pour tout ça. Avant 2023, ce volume demandait une petite agence ou trois freelances. Aujourd'hui elle le tient seule, en une vingtaine d'heures, parce qu'une partie de la production est générée puis retravaillée.\n\n" +
            "Terra Café est fictif, mais le planning ne l'est pas : c'est celui de la plupart des community managers et des fondateurs qui font leur com eux-mêmes. Ce cours suit Léa d'un bout à l'autre. Chaque technique sera appliquée à sa marque, avec les mêmes produits, la même voix, le même calendrier. Tu pourras transposer à la tienne au fur et à mesure.\n\n" +
            "## Ce que l'IA générative change vraiment\n\n" +
            "Une IA générative, c'est un modèle statistique entraîné sur d'énormes volumes de texte, d'images ou de vidéo, et capable d'en produire de nouveaux à partir d'une instruction écrite qu'on appelle un **prompt**. Tu décris, il produit. La conséquence économique est brutale : le coût marginal d'un texte, d'un visuel ou d'une voix off s'est effondré. Un visuel produit qui coûtait 150 € à un graphiste freelance sort de Midjourney pour quelques centimes.\n\n" +
            "Mais il faut être honnête sur ce que ça change et ce que ça ne change pas :\n\n" +
            "- **Ce qui s'effondre** : le coût de production d'un premier jet. Texte, image, voix, et de plus en plus la vidéo courte.\n" +
            "- **Ce qui ne bouge pas** : le coût d'une bonne idée, d'un angle original, d'une connaissance réelle de tes clients. L'IA n'a jamais goûté ton café.\n" +
            "- **Ce qui augmente** : le bruit. Tout le monde a les mêmes outils, donc les fils d'actualité débordent de contenu correct et interchangeable. Se distinguer coûte plus cher qu'avant, pas moins.\n\n" +
            "## Le vrai risque n'est pas la machine, c'est la moyenne\n\n" +
            "Un modèle de langage produit, par construction, la suite de mots la plus probable. La réponse la plus probable est la réponse moyenne : celle que tout le monde aurait écrite. Si tu publies les sorties brutes, ton contenu ressemblera à celui de tes trois mille concurrents qui utilisent le même outil avec le même genre de prompt. Les audiences le sentent, même sans savoir l'expliquer : un post trop lisse, trop équilibré, trop poli, ça glisse sans accrocher.\n\n" +
            "D'où la thèse de ce cours, autant l'annoncer tout de suite : l'IA est un excellent assistant de production et un mauvais directeur de création. Elle rédige, décline, illustre, sous-titre. Toi, tu décides de quoi parler, avec quel angle, quel avis, quels détails vécus. Les parties 2 à 4 t'apprennent la production ; la partie 5, l'organisation ; la partie 6, les règles du jeu légales, parce qu'il y en a et qu'elles se sont durcies.\n\n" +
            "## Ce dont tu as besoin pour suivre\n\n" +
            "Un navigateur, c'est tout. La plupart des outils cités ont une version gratuite ou un essai qui suffit pour les exercices. Si tu veux le confort, compte 20 à 40 € par mois pour un assistant texte payant et un générateur d'images : on détaille les prix dans la leçon suivante. Aucun logiciel à installer, aucune carte graphique à acheter.\n\n" +
            "Un conseil avant de commencer : ouvre un document (Notes, Google Docs, peu importe) intitulé « brief de marque ». Tu vas le remplir tout au long du cours et il deviendra ton outil le plus précieux, bien plus que n'importe quel abonnement.\n\n" +
            "## À toi\n\n" +
            "Liste tout ce que tu as publié (ou aurais dû publier) le mois dernier : posts, stories, emails, articles. Marque chaque élément d'un M s'il est mécanique (décliner, reformater, résumer, sous-titrer) ou d'un C s'il est créatif (angle, opinion, histoire vécue).\n\n" +
            "> Chez la plupart des créateurs, 60 à 80 % de la liste est marquée M. C'est exactement la part que ce cours va t'apprendre à déléguer à la machine, pour réinvestir ton temps dans les 20 % marqués C, les seuls qui construisent une audience.\n",
        },
        {
          id: "l2",
          title: "La carte des outils : qui fait quoi, à quel prix",
          type: "text",
          duration: "16 min",
          body:
            "## Quatre médias, quatre familles d'outils\n\n" +
            "Le marché bouge vite, mais la structure est stable depuis deux ans : à chaque média correspond une poignée d'outils dominants. Apprends la carte, pas le classement du mois : les noms se disputent la première place à chaque nouvelle version, la logique de choix, elle, ne change pas.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La matrice outil × média en 2026 (cadre accentué = mon choix par défaut pour démarrer\"})\n" +
            "<svg viewBox=\"0 0 640 330\" role=\"img\"><title>Matrice des outils par média</title><text x=\"12\" y=\"48\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">TEXTE</text><rect x=\"100\" y=\"22\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\" stroke-width=\"2\"/><text x=\"182\" y=\"48\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">Claude</text><rect x=\"280\" y=\"22\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"362\" y=\"48\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.8\">ChatGPT</text><rect x=\"460\" y=\"22\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"542\" y=\"48\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.8\">Gemini</text><text x=\"12\" y=\"124\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">IMAGE</text><rect x=\"100\" y=\"98\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\" stroke-width=\"2\"/><text x=\"182\" y=\"124\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">Midjourney</text><rect x=\"280\" y=\"98\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"362\" y=\"124\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.8\">DALL-E / GPT</text><rect x=\"460\" y=\"98\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"542\" y=\"124\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.8\">Flux</text><text x=\"12\" y=\"200\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">VIDEO</text><rect x=\"100\" y=\"174\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\" stroke-width=\"2\"/><text x=\"182\" y=\"200\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">Runway</text><rect x=\"280\" y=\"174\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"362\" y=\"200\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.8\">Veo</text><rect x=\"460\" y=\"174\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"542\" y=\"200\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.8\">Kling</text><text x=\"12\" y=\"276\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">VOIX</text><rect x=\"100\" y=\"250\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\" stroke-width=\"2\"/><text x=\"182\" y=\"276\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">ElevenLabs</text><rect x=\"280\" y=\"250\" width=\"165\" height=\"42\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"362\" y=\"276\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.8\">Whisper (sous-titres)</text><text x=\"460\" y=\"316\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">etat du marche : 2026</text></svg>\n" +
            "```\n\n" +
            "## Texte : les assistants conversationnels\n\n" +
            "Trois acteurs dominent : **Claude** (Anthropic), **ChatGPT** (OpenAI) et **Gemini** (Google). Tous les trois fonctionnent pareil de ton point de vue : une conversation, tu écris, il répond. Tous les trois ont une version gratuite utilisable et un abonnement autour de **20 à 23 € par mois** qui débloque les modèles les plus capables et des limites d'usage plus hautes.\n\n" +
            "Pour du contenu de marque, mon expérience : Claude tient mieux une consigne de ton sur un texte long et reformule avec plus de naturel en français ; ChatGPT est le plus polyvalent (il génère aussi des images dans la même fenêtre) ; Gemini s'intègre bien si tu vis dans Google Docs et Gmail. La vérité inconfortable : les trois se valent à 90 % pour nos usages, et le classement s'inverse à chaque sortie de modèle. Choisis-en un, apprends-le bien.\n\n" +
            "## Image : trois philosophies différentes\n\n" +
            "- **Midjourney** : la référence esthétique. Abonnement uniquement (pas de plan gratuit) : environ **10 $ par mois** pour ~200 images, 30 $ pour un usage confortable. Interface web avec éditeur intégré. C'est l'outil des visuels qui ont une direction artistique.\n" +
            "- **La génération d'images de ChatGPT** (héritière de DALL·E) : incluse dans l'abonnement Plus, limitée en gratuit. Moins stylée que Midjourney, mais elle comprend des consignes complexes en langage naturel et gère correctement le texte dans l'image. Idéale pour démarrer sans rien payer de plus.\n" +
            "- **Flux** (Black Forest Labs) : un modèle ouvert, qu'on utilise via des plateformes comme fal.ai ou Replicate en payant à l'image (**quelques centimes la génération**). Très bon photoréalisme. C'est l'option de ceux qui automatisent ou veulent contrôler les coûts au centime.\n\n" +
            "Mention utile : **Ideogram**, spécialisé dans le texte lisible à l'intérieur des images (affiches, mockups), là où les autres écrivent encore parfois n'importe quoi.\n\n" +
            "## Vidéo : la catégorie qui bouge le plus\n\n" +
            "- **Runway** : le pionnier côté créateurs. Plans de **12 à ~95 $ par mois** selon les crédits. Génère des clips courts (5 à 10 secondes) à partir de texte ou d'une image, avec de bons outils de contrôle de caméra.\n" +
            "- **Veo** (Google) : le plus impressionnant en réalisme à l'heure où j'écris, avec génération de l'audio ambiant. Accessible via les abonnements IA de Google, autour de **20 $ par mois** en entrée de gamme, beaucoup plus pour un usage intensif.\n" +
            "- **Kling** (Kuaishou) : rapport qualité-prix agressif, populaire chez les créateurs TikTok, système de crédits à partir de **quelques dollars par mois**.\n\n" +
            "Retiens l'ordre de grandeur plutôt que les prix exacts : la vidéo générée coûte encore **10 à 50 fois plus cher** par seconde produite que le texte ou l'image, et tu jetteras la moitié des générations.\n\n" +
            "## Voix : un quasi-monopole\n\n" +
            "**ElevenLabs** écrase la catégorie voix off : des voix synthétiques crédibles en français, un plan gratuit d'environ 10 minutes par mois pour tester, un plan Starter à **5 $ par mois** et un plan Creator autour de **22 $** avec le clonage de voix professionnel. En face, l'open source **Whisper** (OpenAI) ne génère pas de voix mais transcrit l'audio en texte : c'est lui, ou ses dérivés, qui motorise la plupart des sous-titres automatiques gratuits.\n\n" +
            "> À retenir : un outil fort par média suffit pour commencer. Les prix d'entrée tournent autour de 10 à 25 € par mois et par média, la vidéo étant la plus chère. Vérifie les tarifs au moment de t'abonner : ils changent plusieurs fois par an.\n",
        },
        {
          id: "l3",
          title: "Forces, faiblesses, et ton stack de départ",
          type: "text",
          duration: "14 min",
          body:
            "## Ce que chaque famille fait bien, et rate encore\n\n" +
            "Les pages d'accueil des outils promettent tous la même chose. Voilà ce que tu constateras réellement au bout d'une semaine d'usage, média par média.\n\n" +
            "**Le texte** est le média le plus mûr. Un bon assistant rédige un post correct, décline un article en dix formats, résume, traduit, corrige. Ses faiblesses persistantes : il invente des faits avec un aplomb total (on dit qu'il **hallucine**), il écrit « moyen » par défaut, et il a des tics de style reconnaissables (toute la partie 2 est consacrée à ça). Règle absolue dès maintenant : **toute affirmation factuelle sortie d'un modèle se vérifie avant publication**. Dates, chiffres, noms, citations : tout.\n\n" +
            "**L'image** produit des visuels d'ambiance et d'illustration bluffants. Elle rate encore : les mains et les doigts (moins qu'avant, mais vérifie toujours), le texte long dans l'image, les produits réels (elle ne connaît pas TON paquet de café, elle en invente un), et la cohérence parfaite d'un personnage d'une image à l'autre. Pour montrer ton vrai produit, la photo reste reine : l'IA sert pour le décor, les ambiances, les illustrations conceptuelles.\n\n" +
            "**La vidéo** générée fait des clips courts spectaculaires mais imprévisibles : la physique dérape (liquides, mains qui attrapent des objets), les visages se déforment en mouvement, et au-delà de 10 secondes la cohérence s'effrite. En 2026, son usage rentable c'est le plan d'illustration de quelques secondes dans un montage, pas le film complet.\n\n" +
            "**La voix** est étonnamment aboutie : une voix off ElevenLabs en français passe le test de l'oreille distraite. Ses limites : les émotions extrêmes sonnent faux, les noms propres et anglicismes sont parfois écorchés, et une écoute attentive perçoit une régularité trop parfaite dans le rythme.\n\n" +
            "## Le piège du benchmark\n\n" +
            "Chaque semaine, un influenceur proclame que « X vient de tuer Y ». Ne reconstruis pas ton stack à chaque annonce. Les différences entre outils de tête sont marginales comparées à la différence entre un utilisateur qui maîtrise son brief et un utilisateur qui tape trois mots. J'ai vu des community managers sortir de meilleurs visuels avec le plan Midjourney à 10 $ qu'une agence équipée de tout, simplement parce qu'ils avaient affûté leurs prompts pendant six mois sur le même outil.\n\n" +
            "Le classement bouge tous les trimestres. La méthode (brief, itération, sélection, contrôle qualité), reste. C'est elle que tu achètes en suivant ce cours, pas une liste de noms.\n\n" +
            "## Le stack de départ que je recommande\n\n" +
            "Pour Léa et Terra Café, voici le kit minimal, testé et suffisant pour tout le cours :\n\n" +
            "| Média | Outil | Coût mensuel |\n" +
            "| --- | --- | --- |\n" +
            "| Texte | Claude ou ChatGPT (payant) | ~20 € |\n" +
            "| Image | Midjourney Basic | ~10 $ |\n" +
            "| Vidéo | Versions gratuites (Runway ou Kling) pour tester | 0 € |\n" +
            "| Voix / sous-titres | ElevenLabs gratuit + CapCut gratuit | 0 € |\n\n" +
            "Total : environ **30 € par mois**. Tu passeras à la vidéo payante seulement quand tes clips courts auront prouvé qu'ils performent : pas avant. Et si ton budget est de zéro, les versions gratuites de ChatGPT, de la génération d'images intégrée et de CapCut permettent de faire tout le cours, juste plus lentement.\n\n" +
            "## À toi\n\n" +
            "Reprends la liste M/C de la leçon 1. Pour chaque tâche marquée M, note quel média elle concerne (texte, image, vidéo, voix) et déduis-en ton premier abonnement : celui qui couvre le média le plus fréquent dans ta liste.\n\n" +
            "> Pour la plupart des gens, c'est le texte qui gagne, très loin devant. Si c'est ton cas, commence par un seul abonnement à ~20 € et fais toute la partie 2 avec. L'image et la vidéo attendront un mois de plus sans dommage.\n",
        },
        {
          id: "l4",
          title: "Quiz : le paysage des outils",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Tu veux créer des visuels d'ambiance avec une direction artistique forte pour Instagram, budget 10-15 $/mois. Quel outil correspond le mieux ?",
              options: [
                "ElevenLabs, avec son plan Starter",
                "Midjourney, dont le plan de base tourne autour de 10 $ par mois",
                "Whisper, qui est gratuit et open source",
                "Veo, car la vidéo impressionne plus que l'image",
              ],
              correctIndex: 1,
              explanation:
                "Midjourney est l'outil de référence pour les visuels à direction artistique, et son plan d'entrée est dans ce budget. ElevenLabs fait de la voix, Whisper de la transcription, et Veo de la vidéo, plus chère et hors sujet ici.",
            },
            {
              id: "q2",
              prompt:
                "Un assistant texte t'affirme que « 73 % des consommateurs préfèrent les marques qui publient quotidiennement ». Que fais-tu avant de le publier ?",
              options: [
                "Tu le publies : les modèles récents ne se trompent plus sur les chiffres",
                "Tu vérifies la source réelle de ce chiffre, car les modèles inventent des statistiques plausibles avec assurance",
                "Tu arrondis à 75 % pour être prudent",
                "Tu ajoutes « selon une étude » pour te couvrir",
              ],
              correctIndex: 1,
              explanation:
                "Les modèles hallucinent : ils produisent des chiffres plausibles sans source réelle. Publier une statistique inventée, même « selon une étude », abîme ta crédibilité. Toute affirmation factuelle générée se vérifie, ou se coupe.",
            },
            {
              id: "q3",
              prompt:
                "Pourquoi la vidéo générée par IA est-elle encore surtout utilisée pour des plans courts d'illustration plutôt que des films complets ?",
              options: [
                "Parce que les plateformes interdisent les vidéos IA de plus de 10 secondes",
                "Parce que la cohérence se dégrade au-delà de quelques secondes et que la physique ou les visages dérapent de façon imprévisible",
                "Parce qu'elle est gratuite mais uniquement en basse résolution",
                "Parce qu'elle ne fonctionne qu'en anglais",
              ],
              correctIndex: 1,
              explanation:
                "Les limites sont techniques, pas réglementaires : au-delà de 5 à 10 secondes, personnages et décors perdent leur cohérence, et les mouvements complexes déraillent. D'où l'usage rentable en 2026 : de courts plans d'illustration insérés dans un montage classique.",
            },
            {
              id: "q4",
              prompt:
                "Ton budget est de 20 € par mois et 80 % de ta production est du texte (posts, newsletters). Quelle stratégie d'abonnement est la plus raisonnable ?",
              options: [
                "Prendre les versions gratuites de dix outils différents pour tout couvrir",
                "T'abonner à un seul assistant texte de qualité et apprendre à bien le briefer",
                "Prendre l'outil vidéo le plus cher, car la vidéo est l'avenir",
                "Attendre le prochain classement des meilleurs modèles avant de choisir",
              ],
              correctIndex: 1,
              explanation:
                "Un abonnement aligné sur ton média dominant, exploité à fond, bat une collection d'outils survolés. Les classements changent tous les trimestres ; la maîtrise du brief et de l'itération, elle, reste : c'est là que se joue la qualité.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Écrire avec l'IA sans que ça se voie",
      lessons: [
        {
          id: "l5",
          title: "Le brief de marque : donner une voix à la machine",
          type: "text",
          duration: "15 min",
          body:
            "## L'expérience qui vend la leçon\n\n" +
            "Ouvre ton assistant et tape : « Écris un post Instagram sur le café ». Tu obtiendras quelque chose comme : « Rien de tel qu'une bonne tasse de café pour bien commencer la journée ! ☕ Que vous le préfériez corsé ou doux, le café est bien plus qu'une boisson : c'est un moment de plaisir… ». Personne ne s'arrête sur ce post. Il pourrait être signé par n'importe quelle marque, donc il n'est signé par aucune.\n\n" +
            "Le problème n'est pas le modèle, c'est la commande. Tu as donné trois mots à une machine qui ne sait rien de toi ; elle a répondu la moyenne d'internet. La solution tient dans un document que tu écris une fois et réutilises partout : le **brief de marque**.\n\n" +
            "## Les six blocs d'un brief qui marche\n\n" +
            "Un bon brief de marque tient sur une page et répond à six questions :\n\n" +
            "1. **Qui parle ?** La marque en deux phrases, avec les faits qui n'appartiennent qu'à elle.\n" +
            "2. **À qui ?** Le lecteur type, décrit comme une personne, pas comme un segment marketing.\n" +
            "3. **Sur quel ton ?** Trois adjectifs maximum, chacun illustré d'un exemple de phrase.\n" +
            "4. **Avec quels mots ?** Le vocabulaire maison, et surtout la liste des mots interdits.\n" +
            "5. **Quels faits sont vrais ?** Produits, prix, origines, process : tout ce que le modèle ne doit jamais inventer.\n" +
            "6. **À quoi ressemble un bon post ?** Deux ou trois exemples réels que tu assumes à 100 %.\n\n" +
            "Voilà le brief de Terra Café, que le fil rouge utilisera jusqu'à la fin du cours :\n\n" +
            "```text\n" +
            "MARQUE : Terra Café, torréfacteur en ligne fondé en 2021 à Nantes\n" +
            "par Malik, ancien barista. Petits lots, torréfaction chaque mardi,\n" +
            "expédition sous 48 h. Trois cafés au catalogue, 12 à 15 € les 250 g.\n" +
            "\n" +
            "LECTEUR : 28-45 ans, boit du café tous les jours, en a marre du café\n" +
            "de supermarché mais trouve les coffee shops intimidants. Veut\n" +
            "comprendre sans jargon.\n" +
            "\n" +
            "TON : direct (phrases courtes, on va au fait), chaleureux (on\n" +
            "tutoie, on raconte l'atelier), précis (des grammes, des degrés,\n" +
            "des noms de fermes, jamais de « saveurs d'exception »).\n" +
            "\n" +
            "MOTS INTERDITS : exception(nel), passion, savourer, éveiller vos\n" +
            "papilles, voyage gustatif, artisanal (montrer, pas dire), 100 % +\n" +
            "adjectif, tout emoji sauf ☕ max 1/post.\n" +
            "\n" +
            "FAITS : Kivu Nyota (RD Congo, lavé, notes cerise/thé noir 14 €),\n" +
            "Cerrado Alto (Brésil, nature, chocolat/noisette 12 €), Huila Rosa\n" +
            "(Colombie, honey, 15 €). Ne JAMAIS inventer d'autres produits,\n" +
            "prix, promos ou récompenses.\n" +
            "\n" +
            "EXEMPLE DE POST VALIDÉ : « Mardi, 6 h 40. Le torréfacteur affiche\n" +
            "203 °C et l'atelier sent la brioche. Le Cerrado de cette semaine a\n" +
            "eu 11 min 30 de cuisson, trente secondes de moins que d'habitude :\n" +
            "le lot est plus dense. C'est ce genre de détail qui change ta tasse\n" +
            "de jeudi matin. »\n" +
            "```\n\n" +
            "Remarque ce que ce brief contient de contre-intuitif : la liste des **mots interdits** est plus longue que celle des mots recommandés. C'est voulu. Les modèles retombent spontanément dans le lexique publicitaire moyen ; l'interdiction explicite est le seul garde-fou qui tienne. Et le bloc FAITS ferme la porte aux hallucinations : sans lui, le modèle inventera un « café Éthiopie » qui n'existe pas dans ton catalogue, avec un prix au hasard.\n\n" +
            "## Où ranger le brief pour ne pas le recoller sans arrêt\n\n" +
            "Tous les assistants sérieux offrent un moyen de mémoriser un contexte : les Projets chez Claude (tu colles le brief dans les instructions du projet, chaque conversation du projet en hérite), les GPT personnalisés ou les instructions personnalisées chez ChatGPT, les Gems chez Gemini. Prends dix minutes pour le configurer : à partir de là, « écris le post de lancement du Huila Rosa » suffit, le ton et les faits suivent tout seuls.\n\n" +
            "Dernier réflexe : le brief est un document vivant. Chaque fois qu'une sortie te fait grincer des dents, demande-toi quelle règle manquante aurait pu l'éviter, et ajoute-la. Le brief de Terra Café ci-dessus est la version 4 de Léa ; la version 1 n'avait pas de mots interdits, et ça se voyait.\n\n" +
            "## À toi\n\n" +
            "Écris le bloc TON de ta propre marque : trois adjectifs, chacun avec une phrase d'exemple sortie de ta plume (pas de la machine). Puis liste cinq mots que tu ne veux plus jamais lire sous ton nom.\n\n" +
            "> Test de validité : montre tes trois adjectifs à quelqu'un qui te connaît. S'il te répond « ça pourrait décrire n'importe quelle marque », recommence avec des adjectifs qui fâchent : « direct » élimine des choses, « authentique » n'élimine rien.\n",
        },
        {
          id: "l6",
          title: "La boucle : variantes, critique, réécriture humaine",
          type: "text",
          duration: "15 min",
          body:
            "## La première sortie est un brouillon, jamais un livrable\n\n" +
            "Le réflexe qui sépare les amateurs des pros tient en une phrase : on ne publie jamais la première génération. Pas parce qu'elle est mauvaise, elle est souvent correcte, mais parce que « correct » est ton point de départ, pas ton objectif. Le travail avec un modèle est une boucle, et chaque tour de boucle coûte trente secondes.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La boucle de production d'un texte : le brief nourrit des variantes, la réécriture humaine reste obligatoire\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Boucle brief, variantes, sélection, réécriture</title><rect x=\"30\" y=\"60\" width=\"140\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"100\" y=\"88\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">BRIEF</text><polygon points=\"224,83 210,77 210,89\" fill=\"currentColor\" opacity=\"0.6\"/><line x1=\"170\" y1=\"83\" x2=\"212\" y2=\"83\" stroke=\"currentColor\" opacity=\"0.6\"/><rect x=\"226\" y=\"60\" width=\"180\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"316\" y=\"81\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">GENERER</text><text x=\"316\" y=\"98\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.7\">3 a 5 variantes</text><polygon points=\"464,83 450,77 450,89\" fill=\"currentColor\" opacity=\"0.6\"/><line x1=\"406\" y1=\"83\" x2=\"452\" y2=\"83\" stroke=\"currentColor\" opacity=\"0.6\"/><rect x=\"466\" y=\"60\" width=\"150\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"541\" y=\"88\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">SELECTIONNER</text><line x1=\"541\" y1=\"106\" x2=\"541\" y2=\"178\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"541,192 535,178 547,178\" fill=\"currentColor\" opacity=\"0.6\"/><rect x=\"446\" y=\"194\" width=\"190\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\" stroke-width=\"2\"/><text x=\"541\" y=\"222\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">REECRITURE HUMAINE</text><polygon points=\"360,217 374,211 374,223\" fill=\"currentColor\" opacity=\"0.6\"/><line x1=\"446\" y1=\"217\" x2=\"374\" y2=\"217\" stroke=\"currentColor\" opacity=\"0.6\"/><rect x=\"220\" y=\"194\" width=\"140\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"290\" y=\"222\" font-family=\"ui-monospace, monospace\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">PUBLIER</text><polyline points=\"541,60 541,26 100,26 100,46\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\" stroke-dasharray=\"5 4\"/><polygon points=\"100,58 94,46 106,46\" fill=\"currentColor\" opacity=\"0.45\"/><text x=\"320\" y=\"20\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">rien de bon ? ajuste le brief, pas la variante</text></svg>\n" +
            "```\n\n" +
            "## Étape 1 : demander des variantes, pas une réponse\n\n" +
            "Un modèle produit à coût quasi nul : exige toujours plusieurs propositions avec des **angles différents**, pas cinq reformulations de la même idée. Pour le lancement du Huila Rosa, Léa demande :\n\n" +
            "```text\n" +
            "Propose 4 posts Instagram pour le lancement du Huila Rosa.\n" +
            "Un angle par post :\n" +
            "1. le process honey expliqué simplement\n" +
            "2. le portrait de la ferme (Finca Rosa, Huila, Colombie)\n" +
            "3. le moment de dégustation chez le client\n" +
            "4. les coulisses du choix de ce lot par Malik\n" +
            "Respecte le brief du projet. 60 à 90 mots chacun.\n" +
            "```\n\n" +
            "Imposer les angles toi-même change tout : c'est là que réside ta valeur éditoriale. Le modèle exécute, tu diriges.\n\n" +
            "## Étape 2 : critiquer comme un rédac chef\n\n" +
            "Sur les quatre variantes, aucune ne sera parfaite. Réponds comme tu annoterais la copie d'un stagiaire doué : « La 2 est la meilleure base. Coupe la première phrase, elle ne dit rien. Remplace “un café d'exception”, mot interdit, par la vraie note de dégustation. Termine sur le prix et la date de dispo, pas sur une question rhétorique. » Les instructions de correction précises produisent des textes précis ; « améliore » ne produit rien.\n\n" +
            "Deux ou trois tours suffisent. Au-delà, tu tournes en rond : si rien ne sort au bout de trois itérations, le problème est en amont (retourne enrichir le brief (c'est la flèche pointillée du schéma)).\n\n" +
            "## Étape 3 : la réécriture humaine, non négociable\n\n" +
            "La dernière passe se fait sans la machine, dans ton éditeur. Trois gestes :\n\n" +
            "- **Injecte du vécu.** Un détail que le modèle ne peut pas connaître : « le lot est arrivé avec deux semaines de retard à cause de la douane », « Malik a hésité jusqu'à la troisième tasse ». Une phrase suffit à ancrer le texte dans le réel.\n" +
            "- **Casse le rythme.** Les modèles écrivent des phrases de longueur régulière. Coupe-en une à trois mots. Allonge-en une autre. Lis à voix haute : si tu peux prédire la fin de chaque phrase, ton lecteur aussi.\n" +
            "- **Coupe 20 %.** Les sorties de modèle sont systématiquement trop longues et finissent par une phrase de synthèse creuse. Supprime-la, elle manque toujours à personne.\n\n" +
            "Cette passe prend cinq minutes par post. C'est le meilleur ratio temps/qualité de tout le pipeline, et c'est aussi elle qui rend le texte final juridiquement et éthiquement TIEN : tu l'as réellement écrit, pas seulement commandé.\n\n" +
            "## À toi\n\n" +
            "Prends un de tes vieux posts moyens. Demande au modèle quatre variantes avec quatre angles que tu choisis, critique la meilleure en deux instructions précises, puis fais la passe humaine des trois gestes. Compare avec l'original.\n\n" +
            "> Le piège classique au début : accepter la variante 1 parce qu'elle est « pas mal ». Force-toi à lire les quatre avant de choisir : dans mon expérience, la meilleure base est rarement la première, parce que le premier angle est aussi le plus attendu.\n",
        },
        {
          id: "l7",
          title: "Les tics d'IA à traquer (et ce que valent les détecteurs)",
          type: "text",
          duration: "16 min",
          body:
            "## Ton lecteur détecte sans savoir nommer\n\n" +
            "En 2026, tout le monde a lu des milliers de textes générés. Le cerveau des lecteurs s'est calibré : ils ne savent pas dire pourquoi un post « sent l'IA », mais ils scrollent plus vite dessus. Ces signatures sont identifiables et corrigibles une par une. Voilà la liste que j'utilise en relecture, construite sur trois ans de textes générés : imprime-la, au sens propre.\n\n" +
            "## La liste des signatures\n\n" +
            "**Au niveau des mots :**\n\n" +
            "- Le **tiret cadratin en série** ( : ) plusieurs fois par paragraphe. Un humain en met un de temps en temps ; le modèle en met partout.\n" +
            "- Les **mots-tics** : en anglais delve, seamless, leverage, elevate, unlock, tapestry ; en français « plonger dans », « dévoiler », « révolutionner », « incontournable », « véritable » + nom, « il convient de », « force est de constater ».\n" +
            "- Les **triades réflexes** : « clair, simple et efficace », « inspirer, engager et convertir ». Trois adjectifs ou trois verbes coordonnés, à chaque paragraphe.\n" +
            "- Le **gras décoratif** sur des mots-clés qui n'apportent rien, et l'emoji systématique en début de ligne.\n\n" +
            "**Au niveau de la structure :**\n\n" +
            "- Des **paragraphes de longueur identique**, souvent trois phrases chacun, au millimètre.\n" +
            "- La **reformulation de la consigne** en ouverture (« Le café de spécialité, un univers fascinant à découvrir ») et la **conclusion qui répète l'intro** sans rien ajouter.\n" +
            "- Le **faux équilibre** permanent : « que vous soyez amateur ou connaisseur », « non seulement… mais aussi ». Le modèle ne veut fâcher personne ; une marque qui ne fâche personne n'intéresse personne.\n" +
            "- La **question rhétorique finale** suivie d'un appel à l'action générique (« Et vous, quel est votre café préféré ? Dites-le-nous en commentaire ! »).\n\n" +
            "**Au niveau du fond (le plus grave :**)\n\n" +
            "- **Zéro détail concret.** Pas un chiffre, pas un nom propre, pas une date, pas un fait vérifiable. Du vrai à 100 % qui ne dit rien. C'est la signature la plus fiable de toutes : un humain qui connaît son sujet cite des choses précises sans y penser.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La checklist de relecture anti-signature IA (à passer sur chaque texte avant publication\"})\n" +
            "<svg viewBox=\"0 0 640 310\" role=\"img\"><title>Checklist qualité anti-signature IA</title><rect x=\"20\" y=\"14\" width=\"600\" height=\"282\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"38\" y=\"42\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">QC-TEXTE // avant publication</text><line x1=\"20\" y1=\"56\" x2=\"620\" y2=\"56\" stroke=\"currentColor\" opacity=\"0.4\"/><rect x=\"42\" y=\"74\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"68\" y=\"85\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.85\">tirets cadratins et triades en serie ?</text><rect x=\"42\" y=\"108\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"68\" y=\"119\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.85\">mots-tics (devoiler, incontournable, seamless...) ?</text><rect x=\"42\" y=\"142\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"68\" y=\"153\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.85\">paragraphes tous de la meme longueur ?</text><rect x=\"42\" y=\"176\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"68\" y=\"187\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.85\">conclusion qui repete l'intro ?</text><rect x=\"42\" y=\"210\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"68\" y=\"221\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.85\">faux equilibre, question rhetorique finale ?</text><rect x=\"42\" y=\"244\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\" stroke-width=\"2\"/><text x=\"68\" y=\"255\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" class=\"fig-accent\">au moins UN detail concret et verifiable ?</text><text x=\"38\" y=\"284\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.55\">une case cochee = on corrige avant de publier</text></svg>\n" +
            "```\n\n" +
            "## Et les détecteurs d'IA, alors ?\n\n" +
            "Trois noms reviennent : **GPTZero**, **Originality.ai**, **Copyleaks**. Ils estiment la probabilité qu'un texte soit généré en mesurant, en gros, sa prévisibilité statistique : un texte très « probable » mot après mot, au rythme très régulier, sera classé IA.\n\n" +
            "Il faut connaître leurs limites avant de leur faire confiance :\n\n" +
            "- **Faux positifs réels.** Des textes 100 % humains sont régulièrement classés IA, en particulier ceux de personnes qui écrivent dans une langue apprise, au style scolaire et régulier. OpenAI a retiré son propre détecteur public en 2023, en citant sa faible fiabilité. Aucun détecteur ne constitue une preuve.\n" +
            "- **Faux négatifs faciles.** Un texte généré puis sérieusement réécrit à la main passe sous les seuils. Ce que tu apprends dans ce cours rend les scores de détection à peu près inopérants : c'est un effet de bord, pas l'objectif.\n" +
            "- **Scores instables.** Le même texte peut changer de verdict d'un outil à l'autre et d'un mois à l'autre, au gré des mises à jour.\n\n" +
            "Mon usage honnête : je passe parfois un texte dans GPTZero comme **thermomètre de paresse** (un score « IA » à 95 % me dit que ma passe de réécriture a été bâclée). Mais le juge final n'est pas un score, c'est la checklist ci-dessus plus une lecture à voix haute. Ton vrai détecteur, c'est ton lecteur : s'il s'arrête, commente, répond, c'est gagné, quel que soit le verdict d'un outil.\n\n" +
            "## À toi\n\n" +
            "Génère un post sans brief (volontairement moyen), puis passe la checklist dessus, item par item, en surlignant chaque signature trouvée.\n\n" +
            "> Résultat typique : cinq cases cochées sur six. Fais l'exercice une fois sérieusement et tu ne pourras plus « dé-voir » ces tics, y compris, bonus inconfortable, dans les newsletters de tes concurrents.\n",
        },
        {
          id: "l8",
          title: "Quiz : écrire sans laisser d'empreinte",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Pourquoi la liste des mots INTERDITS d'un brief de marque est-elle souvent plus utile que la liste des mots recommandés ?",
              options: [
                "Parce que les modèles ignorent systématiquement les recommandations positives",
                "Parce que les modèles retombent spontanément dans le lexique publicitaire moyen, et que seule l'interdiction explicite les en empêche",
                "Parce que les mots interdits améliorent le référencement du post",
                "Parce qu'un brief doit être le plus court possible",
              ],
              correctIndex: 1,
              explanation:
                "Livré à lui-même, un modèle produit le vocabulaire le plus probable : « savourer », « exception », « passion ». Les recommandations ne suffisent pas à l'en détourner ; la liste noire, si. C'est le garde-fou le plus rentable du brief.",
            },
            {
              id: "q6",
              prompt:
                "Après trois itérations de critique, aucune variante ne te convient. Quel est le bon réflexe ?",
              options: [
                "Continuer à itérer jusqu'à la dixième version",
                "Publier la moins mauvaise, le volume compte plus que la qualité",
                "Arrêter d'itérer et enrichir le brief : si rien ne sort après trois tours, le problème est en amont",
                "Changer d'outil, car chaque modèle a un style différent",
              ],
              correctIndex: 2,
              explanation:
                "Itérer au-delà de trois tours fait tourner en rond : le modèle ne peut pas deviner une contrainte que tu ne lui as pas donnée. La boucle prévoit ce cas : la flèche retourne vers le brief, pas vers une énième variante.",
            },
            {
              id: "q7",
              prompt:
                "Laquelle de ces caractéristiques est la signature d'IA la plus fiable dans un texte ?",
              options: [
                "La présence de fautes d'orthographe",
                "L'absence totale de détails concrets : aucun chiffre, nom propre ou fait vérifiable",
                "L'usage du tutoiement",
                "Des phrases de longueurs très variées",
              ],
              correctIndex: 1,
              explanation:
                "Un humain qui connaît son sujet cite naturellement des faits précis. Un texte parfaitement correct mais sans un seul détail vérifiable est la marque du remplissage statistique. Les fautes et le tutoiement ne prouvent rien, et la variété des phrases est plutôt un signe humain.",
            },
            {
              id: "q8",
              prompt:
                "Un client te reproche un texte « écrit par IA » en s'appuyant sur un score GPTZero de 92 %. Que sais-tu de la valeur de ce score ?",
              options: [
                "C'est une preuve fiable : les détecteurs se trompent rarement",
                "Ce n'est pas une preuve : les détecteurs produisent des faux positifs documentés, et OpenAI a retiré le sien pour manque de fiabilité",
                "Le score est fiable uniquement au-dessus de 90 %",
                "Les détecteurs sont fiables pour l'anglais mais pas pour le français",
              ],
              correctIndex: 1,
              explanation:
                "Aucun détecteur actuel ne constitue une preuve : des textes entièrement humains sont régulièrement classés IA, notamment ceux au style régulier, et les verdicts varient d'un outil et d'une version à l'autre. Ces scores sont des indices, pas des jugements.",
            },
            {
              id: "q9",
              prompt:
                "Quel geste de réécriture humaine ancre le plus efficacement un texte généré dans le réel ?",
              options: [
                "Remplacer tous les mots par des synonymes",
                "Ajouter un détail vécu que le modèle ne peut pas connaître (un incident, une hésitation, un chiffre interne)",
                "Ajouter des emojis pour humaniser",
                "Rallonger le texte de 30 % pour montrer l'effort",
              ],
              correctIndex: 1,
              explanation:
                "Le détail vécu est inimitable par construction : le modèle ne connaît ni le retard de douane ni l'hésitation de Malik à la troisième tasse. Une seule phrase de ce type fait plus pour l'authenticité que toutes les synonymies, et les sorties de modèle gagnent à être raccourcies, pas rallongées.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "L'image générée en pratique",
      lessons: [
        {
          id: "l9",
          title: "Anatomie d'un prompt image",
          type: "text",
          duration: "15 min",
          body:
            "## Décrire une image n'est pas décrire une idée\n\n" +
            "Premier essai de Léa dans Midjourney : « un beau visuel pour une marque de café ». Résultat : une tasse générique sur fond marron, le visuel que mille marques de café ont déjà publié cette semaine. Le modèle n'a pas échoué, il a fait la moyenne de « beau visuel café ». Comme pour le texte, tout est dans la commande, mais la grammaire d'un prompt image n'est pas celle d'un prompt texte.\n\n" +
            "Un générateur d'images ne comprend pas une intention marketing, il compose une scène. Il faut donc lui décrire une scène, avec le vocabulaire d'un photographe : sujet, cadrage, lumière, ambiance, style.\n\n" +
            "## Les cinq couches d'un prompt qui marche\n\n" +
            "Je construis tous mes prompts image sur la même grille, dans cet ordre :\n\n" +
            "1. **Le sujet** (précis et concret : « un sac de café en papier kraft posé sur un plan de travail en bois clair, grains répandus »).\n" +
            "2. **Le contexte** (où, quand : « atelier de torréfaction le matin, machine floue en arrière-plan »).\n" +
            "3. **La lumière** (le levier le plus sous-estimé : « lumière naturelle latérale de fin de matinée, ombres douces »). Les mots de photographe (golden hour, contre-jour, lumière diffuse) fonctionnent très bien.\n" +
            "4. **Le style et le médium** : « photographie éditoriale, 50 mm, faible profondeur de champ » ou au contraire « illustration flat, deux couleurs ». Sans cette couche, l'outil choisit pour toi, et il choisit du générique.\n" +
            "5. **Les paramètres techniques**, selon l'outil : chez Midjourney, `--ar 4:5` fixe le format portrait Instagram, `--no text, logo` exclut ce que tu ne veux pas voir. Les noms exacts varient d'un outil et d'une version à l'autre ; la logique (format + exclusions), elle, est partout la même.\n\n" +
            "Le prompt complet de Léa devient :\n\n" +
            "```text\n" +
            "photographie éditoriale d'un sac de café en papier kraft sans\n" +
            "marquage, posé sur un plan de travail en bois clair, quelques\n" +
            "grains répandus, atelier de torréfaction flou en arrière-plan,\n" +
            "lumière naturelle latérale de fin de matinée, ombres douces,\n" +
            "50 mm, faible profondeur de champ, tons chauds terreux\n" +
            "--ar 4:5 --no texte, logo, personnes\n" +
            "```\n\n" +
            "Remarque le « sans marquage » : on verra en leçon 11 pourquoi on génère le packaging neutre et pourquoi le logo s'ajoute après, en retouche. Et note ce qui ne figure PAS dans le prompt : « beau », « professionnel », « haute qualité ». Ces mots ne décrivent rien, ils n'apportent rien.\n\n" +
            "## Itérer sur une image : changer UNE couche à la fois\n\n" +
            "La boucle de la partie 2 s'applique, avec une discipline en plus : quand une génération déçoit, modifie une seule couche et régénère. Lumière trop dure ? Tu ne touches qu'à la couche lumière. Tu changes tout d'un coup, tu ne sauras jamais ce qui a fonctionné. Les outils génèrent par grilles de quatre : compte trois ou quatre tours de grille, soit 12 à 16 images, pour arriver à un visuel publiable. C'est normal, c'est le processus, et à quelques centimes la grille ce n'est pas un drame.\n\n" +
            "Garde un fichier de tes prompts réussis avec leur résultat. Au bout d'un mois, tu auras une bibliothèque maison qui vaut plus que tous les « 100 meilleurs prompts » vendus sur les réseaux.\n\n" +
            "## Les ratés à connaître pour les repérer\n\n" +
            "Avant de publier, zoome et inspecte systématiquement :\n\n" +
            "- **Les mains et les doigts**, moins catastrophiques qu'en 2023, mais un sixième doigt traîne encore parfois.\n" +
            "- **Le texte dans l'image** (étiquettes, enseignes, journaux : souvent du charabia). Si le texte compte, utilise Ideogram ou ajoute-le en retouche.\n" +
            "- **Les objets fonctionnels** : anses de tasse soudées, montres sans aiguilles, claviers aux touches fondues.\n" +
            "- **Les reflets et les ombres** : une ombre qui part du mauvais côté trahit l'image en une seconde.\n\n" +
            "Un détail raté repéré par un abonné, et c'est ta crédibilité qui prend : les commentaires ne pardonnent pas.\n\n" +
            "## À toi\n\n" +
            "Écris le prompt cinq-couches d'un visuel pour TA marque : sujet, contexte, lumière, style, paramètres. Génère une grille, identifie la couche la plus faible, corrige-la seule, régénère.\n\n" +
            "> Erreur classique de débutant : un sujet vague et trois adjectifs de qualité (« magnifique visuel professionnel épuré »). Relis ton prompt : chaque mot doit décrire quelque chose de visible. « Épuré » ne se photographie pas ; « fond blanc, un seul objet, cadrage centré », oui.\n",
        },
        {
          id: "l10",
          title: "Styles et cohérence de marque",
          type: "text",
          duration: "14 min",
          body:
            "## Le problème n'est pas de faire UNE belle image\n\n" +
            "N'importe qui sort une belle image de Midjourney en un quart d'heure. Le vrai sujet d'une marque, c'est d'en sortir trente par mois **qui se ressemblent** : même palette, même lumière, même univers. Un feed Instagram où chaque post a un style différent ressemble à un moodboard volé, et signale immédiatement la génération sans direction.\n\n" +
            "La cohérence ne s'obtient pas en espérant : elle se fabrique avec trois outils.\n\n" +
            "## Outil 1 : le bloc de style réutilisable\n\n" +
            "Reprends la grille cinq-couches et fige les couches 3, 4 et 5 une fois pour toutes. C'est ton **bloc de style**, l'équivalent image du brief de marque. Celui de Terra Café :\n\n" +
            "```text\n" +
            "[STYLE TERRA] photographie éditoriale, lumière naturelle latérale,\n" +
            "ombres douces, tons chauds terreux (brun, crème, vert sauge),\n" +
            "50 mm, faible profondeur de champ, composition simple un sujet\n" +
            "--ar 4:5 --no texte, logo, illustration, 3d\n" +
            "```\n\n" +
            "Chaque nouveau visuel = ce bloc + un sujet qui change. Le sac kraft lundi, la tasse fumante mercredi, les mains sur le moulin vendredi : trois sujets, un seul univers. Range le bloc dans le même document que ton brief de marque.\n\n" +
            "## Outil 2 : les références d'image et de style\n\n" +
            "La plupart des générateurs acceptent désormais une **image de référence** en plus du texte. Chez Midjourney, tu peux joindre une image dont le modèle imite l'ambiance, ou utiliser une référence de style (paramètre `--sref` dans les versions récentes) : tu donnes une de tes photos réussies, les générations suivantes en héritent la palette et la lumière. Chez ChatGPT ou Flux, tu passes simplement l'image en pièce jointe avec ta consigne.\n\n" +
            "C'est l'astuce la plus rentable de cette partie : **pars de tes vraies photos**. Une photo réelle de l'atelier comme référence de style, et tes visuels générés s'alignent naturellement sur ton univers existant au lieu d'en inventer un.\n\n" +
            "La cohérence de **personnage** (le même visage d'une image à l'autre) existe aussi via les références, mais reste imparfaite : le visage dérive au fil des générations. Pour une mascotte illustrée, ça fonctionne ; pour un humain photoréaliste récurrent, tu vas au-devant de déceptions, et de problèmes juridiques si le visage ressemble à quelqu'un de réel (partie 6).\n\n" +
            "## Outil 3 : la grille de validation\n\n" +
            "Avant d'intégrer un visuel au calendrier, Léa le pose à côté des six derniers posts publiés et vérifie trois choses : la palette (les couleurs appartiennent-elles aux tons Terra ?), la lumière (même direction, même douceur ?), la densité (un sujet principal, pas une scène surchargée ?). Deux « non » = on régénère. Ce contrôle prend trente secondes et évite le feed patchwork.\n\n" +
            "## Ce que l'IA ne remplace pas ici\n\n" +
            "Sois lucide sur la répartition des rôles. L'IA génère très bien : les ambiances, les arrière-plans, les illustrations conceptuelles, les textures. Elle ne peut pas générer : **ton produit réel**. Le paquet de Kivu Nyota avec sa vraie étiquette, la vraie tête de Malik, le vrai atelier : ça, c'est ton smartphone qui le photographie. Le mix gagnant de Terra Café : environ deux tiers de photos réelles (produit, humains, coulisses) pour un tiers de visuels générés (ambiances, illustrations des articles de blog, décors saisonniers). L'IA complète l'univers visuel, elle ne le remplace pas.\n\n" +
            "## À toi\n\n" +
            "Rédige ton bloc [STYLE] : palette de trois ou quatre tons nommés, type de lumière, médium, format, exclusions. Génère trois sujets différents avec le même bloc et pose les trois images côte à côte.\n\n" +
            "> Si les trois images pourraient venir de trois marques différentes, ton bloc est trop vague : c'est presque toujours la palette qui manque de précision. « Tons chauds » ne contraint rien ; « brun café, crème, vert sauge » contraint.\n",
        },
        {
          id: "l11",
          title: "Retouche, formats et intégration du vrai produit",
          type: "text",
          duration: "14 min",
          body:
            "## La génération est le début du travail, pas la fin\n\n" +
            "Un visuel généré publiable tel quel, ça existe, mais c'est l'exception. Dans le flux réel de Léa, chaque image passe par une étape de retouche de cinq à quinze minutes. C'est là que le visuel devient propre, au bon format, et porteur de la marque.\n\n" +
            "## Corriger dans l'image : inpainting et extension\n\n" +
            "Deux gestes de retouche existent directement dans les générateurs :\n\n" +
            "- **L'inpainting** (retouche de zone) : tu sélectionnes une région ratée et tu la régénères seule, avec une consigne. La poignée de tasse soudée, l'ombre incohérente, l'objet parasite au fond : on répare sans toucher au reste. Chez Midjourney ça s'appelle l'éditeur (Vary Region), chez Photoshop le remplissage génératif, et l'idée est identique partout.\n" +
            "- **L'extension** (outpainting) : tu agrandis le cadre et le modèle invente la suite de la scène. Indispensable pour décliner un visuel 4:5 en bannière 16:9 sans étirer ni recadrer bêtement.\n\n" +
            "Règle d'efficacité : si la réparation demande plus de deux retouches de zone, régénère l'image entière. L'acharnement sur une image bancale coûte plus cher qu'une nouvelle grille.\n\n" +
            "## Ajouter le vrai : logo, texte, produit\n\n" +
            "Leçon 9, on générait le sac kraft « sans marquage ». Voilà pourquoi : le texte et les logos générés sont approximatifs, et ton identité visuelle mérite mieux qu'une approximation. Le flux propre :\n\n" +
            "1. Générer la scène avec un packaging neutre.\n" +
            "2. Poser le vrai logo et le vrai texte **par-dessus**, dans un outil de mise en page : Canva ou Figma font ça très bien, calque par calque.\n" +
            "3. Exporter aux formats cibles.\n\n" +
            "Pour montrer le vrai produit dans un décor généré, la technique du **détourage** : photo réelle du paquet, fond supprimé (Canva et Photoshop le font en un clic, remove.bg aussi), puis incrustation sur l'arrière-plan généré. Vérifie deux choses pour que l'incrustation tienne : la direction de la lumière (ta photo produit doit être éclairée du même côté que la scène) et la netteté relative (un produit net sur un fond net sonne faux ; un léger flou d'arrière-plan sauve tout). C'est exactement comme ça que Léa produit ses visuels de gamme : trois vrais paquets détourés, un décor d'atelier généré, le tout assemblé dans Canva.\n\n" +
            "## Les formats qui comptent en 2026\n\n" +
            "Génère grand, décline ensuite. Les formats standard :\n\n" +
            "| Usage | Ratio | Remarque |\n" +
            "| --- | --- | --- |\n" +
            "| Post Instagram / carrousel | 4:5 | le format le plus rentable en portée |\n" +
            "| Story / Reel / TikTok | 9:16 | garde le sujet au centre, les interfaces mangent les bords |\n" +
            "| YouTube / bannières / blog | 16:9 | souvent obtenu par extension d'un 4:5 |\n" +
            "| Pinterest | 2:3 | proche du 4:5, recadrage facile |\n\n" +
            "L'**upscaling** (agrandissement intelligent) est intégré aux générateurs récents : monte systématiquement à la résolution maximale avant export, les plateformes compressent déjà bien assez.\n\n" +
            "## L'organisation qui évite le chaos\n\n" +
            "Trente visuels par mois sans système de rangement, et au bout de trois mois tu ne retrouves plus rien. Le système minimal de Léa : un dossier par mois, chaque fichier nommé `date_sujet_format` (`2026-03_kivu-lancement_4x5.png`), et le prompt d'origine collé dans un fichier texte à côté. Ce dernier point paraît maniaque ; c'est lui qui permet de régénérer une variante cohérente six mois plus tard, et de prouver comment un visuel a été produit, ce qui servira dans la partie 6.\n\n" +
            "## À toi\n\n" +
            "Prends ton meilleur visuel généré des leçons précédentes. Décline-le en 4:5 et en 9:16 par extension, pose ton logo par-dessus dans Canva, exporte, et range le tout selon la convention de nommage.\n\n" +
            "> Le piège du 9:16 : composer plein cadre. Les interfaces de TikTok et Instagram recouvrent le quart bas et les bords. Garde texte et sujet dans la zone centrale, sinon ton appel à l'action finira sous le bouton « like ».\n",
        },
        {
          id: "l12",
          title: "Licences et droits : ce que tu peux vraiment faire",
          type: "text",
          duration: "16 min",
          body:
            "## Deux questions qu'on confond toujours\n\n" +
            "« Est-ce que j'ai le droit d'utiliser cette image ? » cache en réalité deux questions distinctes, avec deux réponses différentes :\n\n" +
            "1. **Ai-je le droit de l'exploiter commercialement ?** → réponse dans les **conditions d'utilisation** de l'outil (un contrat entre toi et lui).\n" +
            "2. **Suis-je propriétaire de cette image ?** → réponse dans le **droit d'auteur** (la loi, qui se moque des CGU).\n\n" +
            "La plupart des créateurs s'arrêtent à la première et découvrent la seconde au pire moment. Prenons-les dans l'ordre. Avertissement honnête avant de commencer : ce domaine bouge vite, ce qui suit décrit l'état des choses au moment où ce cours est écrit, et **rien ici n'est un conseil juridique**, pour un enjeu réel, vérifie les CGU actuelles et parle à un professionnel.\n\n" +
            "## Question 1 : ce que disent les CGU des grands outils\n\n" +
            "Dans les grandes lignes, au moment où j'écris :\n\n" +
            "- **Midjourney** accorde aux **abonnés payants** le droit d'utiliser leurs images, y compris commercialement. Deux subtilités qui surprennent : par défaut, tes générations sont **publiques** (visibles par les autres utilisateurs ; le mode privé « stealth » est réservé aux plans supérieurs), et les entreprises dépassant un certain chiffre d'affaires doivent souscrire un plan spécifique. Si tes visuels de campagne sont confidentiels avant lancement, ce point change ton choix de plan.\n" +
            "- **OpenAI** (images via ChatGPT) te cède ses droits sur les sorties et autorise l'usage commercial, dans le respect de ses règles de contenu.\n" +
            "- **Flux et les modèles ouverts** : la licence dépend de la variante du modèle ET de la plateforme d'accès (certaines variantes sont libres y compris commercialement, d'autres réservent l'usage commercial à l'API payante). C'est le cas le plus piégeux : lis la licence de la variante exacte que tu utilises.\n\n" +
            "Ces conditions changent régulièrement. Le réflexe professionnel : **relire la page de licence de ton outil une fois par trimestre**, et archiver une copie datée quand tu lances une campagne importante.\n\n" +
            "## Question 2 : à qui appartient une image générée ?\n\n" +
            "Ici, la réponse dérange : **possiblement à personne**. La position du Copyright Office américain, constante sur ses décisions récentes, est qu'une œuvre doit avoir un auteur humain pour être protégée : une image générée par une machine à partir d'un simple prompt n'est pas protégeable, et le prompt seul, même long et travaillé, ne suffit pas à faire de toi l'auteur. En Europe, le droit d'auteur exige une « création intellectuelle propre à son auteur », ce qui pose la même difficulté. En revanche, ton **travail humain par-dessus** (la retouche substantielle, le montage, la composition avec tes photos et ton texte) peut, lui, être protégé.\n\n" +
            "Conséquence très concrète : un concurrent qui réutilise ton visuel généré brut est peut-être impoli, mais tu n'as sans doute pas de droit d'auteur à lui opposer. Voilà un argument de plus, et pas le moindre, pour le flux de la leçon 11 : une image générée + détourage produit + logo + mise en page = une composition qui t'appartient bien davantage qu'une sortie brute.\n\n" +
            "## Les risques d'entrée : ce que tu mets dans le prompt\n\n" +
            "L'autre versant du risque, c'est ce que tu demandes. Trois zones rouges à éviter dans tes prompts commerciaux :\n\n" +
            "- **« À la manière de » + artiste vivant.** Des procès sont en cours sur l'entraînement des modèles ; imiter nommément le style d'un artiste identifiable pour un usage commercial, c'est te placer volontairement dans la zone la plus contestée.\n" +
            "- **Personnages et marques protégés.** Un Mickey ou un logo Nike générés restent la propriété de Disney et de Nike. La contrefaçon n'a pas d'exception « c'est l'IA qui l'a dessiné ».\n" +
            "- **Personnes réelles.** Le visage d'une personne identifiable engage son droit à l'image, généré ou pas. On y revient en partie 6 avec les deepfakes.\n\n" +
            "## La checklist de Léa avant toute campagne\n\n" +
            "1. Mon abonnement couvre-t-il l'usage commercial ? (relire la page licence, en garder copie)\n" +
            "2. L'image contient-elle un style d'artiste nommé, une marque, un personnage, un visage réel ? (si oui : on refait)\n" +
            "3. Ai-je ajouté assez de travail humain pour que le livrable final soit défendable ? (retouche, montage, texte)\n" +
            "4. Ai-je archivé prompt, date et outil ? (la traçabilité de la leçon 11)\n\n" +
            "## À toi\n\n" +
            "Ouvre la page des conditions d'utilisation de TON générateur d'images et trouve les réponses à deux questions : ton plan actuel autorise-t-il l'usage commercial, et tes générations sont-elles publiques ou privées par défaut ?\n\n" +
            "> La seconde question surprend une personne sur deux : beaucoup découvrent que leurs essais de visuels, y compris les ratés et les projets non lancés, sont consultables publiquement depuis des mois. Vérifie avant ta prochaine campagne, pas après.\n",
        },
        {
          id: "l13",
          title: "Quiz : l'image générée",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q10",
              prompt:
                "Ton visuel généré a une belle composition mais une lumière trop dure. Quelle est la bonne façon d'itérer ?",
              options: [
                "Réécrire tout le prompt avec de nouveaux mots partout",
                "Modifier uniquement la couche lumière du prompt et régénérer, pour savoir ce qui a produit le changement",
                "Ajouter « haute qualité, magnifique » au prompt",
                "Passer sur un autre outil de génération",
              ],
              correctIndex: 1,
              explanation:
                "Une couche à la fois : c'est la seule façon d'attribuer le changement à sa cause et de progresser. Tout réécrire revient à repartir de zéro, et les adjectifs de qualité (« beau », « professionnel ») ne décrivent rien de visible.",
            },
            {
              id: "q11",
              prompt:
                "Pourquoi génère-t-on le packaging « sans marquage » pour ajouter le logo ensuite en retouche ?",
              options: [
                "Parce que les CGU interdisent de générer des logos, même le sien",
                "Parce que le texte et les logos générés sont approximatifs, alors qu'un calque posé dans Canva ou Figma est exact",
                "Parce que le logo ralentit la génération",
                "Parce que les logos générés sont automatiquement publics",
              ],
              correctIndex: 1,
              explanation:
                "Les générateurs écrivent encore mal le texte et déforment les logos. Ton identité visuelle doit être exacte au pixel : on génère la scène neutre, puis on pose le vrai logo par-dessus, en calque. Bonus : cette composition humaine renforce aussi tes droits sur le visuel final.",
            },
            {
              id: "q12",
              prompt:
                "Un concurrent republie tel quel un visuel que tu avais généré (sortie brute, sans retouche). Que dit l'état actuel du droit d'auteur ?",
              options: [
                "Tu peux l'attaquer : l'image t'appartient car c'est ton prompt",
                "L'image appartient à l'éditeur de l'outil, c'est lui qui doit agir",
                "Tu n'as probablement pas de droit d'auteur à lui opposer : une sortie purement machine, sans apport humain substantiel, n'est sans doute pas protégeable",
                "Le droit d'auteur s'applique uniquement si l'image est déposée",
              ],
              correctIndex: 2,
              explanation:
                "La position constante du Copyright Office américain : pas d'auteur humain, pas de protection, et le prompt seul ne suffit pas. Le droit européen exige lui aussi une création humaine. C'est l'argument massue pour retoucher et composer plutôt que publier du brut. (Et pour un cas réel : vérifie l'état du droit du moment, ça bouge.)",
            },
            {
              id: "q13",
              prompt:
                "Lequel de ces prompts te place dans une zone juridiquement risquée pour une campagne commerciale ?",
              options: [
                "« photographie éditoriale d'une tasse de café, lumière latérale douce »",
                "« illustration flat d'un vélo de livraison, palette deux couleurs »",
                "« affiche dans le style de [nom d'un illustrateur vivant], avec le personnage de Mickey »",
                "« texture de papier kraft, macro, tons chauds »",
              ],
              correctIndex: 2,
              explanation:
                "Deux zones rouges cumulées : l'imitation nommée du style d'un artiste vivant (au cœur des contentieux actuels sur l'IA) et un personnage protégé par le droit d'auteur de Disney. Le fait qu'une machine ait dessiné ne crée aucune exception de contrefaçon.",
            },
            {
              id: "q14",
              prompt:
                "Tu prépares une campagne confidentielle avant lancement avec Midjourney sur un plan de base. Quel détail des CGU doit t'alerter ?",
              options: [
                "L'usage commercial est interdit sur tous les plans",
                "Les générations sont publiques par défaut : n'importe qui peut voir tes visuels de campagne avant le lancement",
                "Les images expirent au bout de 30 jours",
                "Le plan de base est limité au noir et blanc",
              ],
              correctIndex: 1,
              explanation:
                "Sur les plans d'entrée, les générations sont visibles publiquement ; le mode privé est réservé aux plans supérieurs. Pour du confidentiel, c'est rédhibitoire. Réflexe pro : relire la page de licence de l'outil avant chaque campagne importante, ces conditions évoluent.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Vidéo et audio : produire court, produire vrai",
      lessons: [
        {
          id: "l14",
          title: "La vidéo générée : des plans, pas des films",
          type: "text",
          duration: "15 min",
          body:
            "## Recadrer les attentes avant d'ouvrir l'outil\n\n" +
            "Léa a vu passer les démos spectaculaires de Veo et de Runway, et elle imagine générer son prochain Reel en entier. Trois heures et beaucoup de crédits plus tard, verdict : aucune génération complète n'est publiable. Ce n'est pas un échec personnel, c'est l'état de l'art. En 2026, la vidéo générative excelle sur des **plans isolés de 5 à 10 secondes** et déçoit sur tout le reste. Le créateur rentable ne demande pas un film à la machine ; il lui demande des plans d'illustration qu'il montera lui-même.\n\n" +
            "Ce que la vidéo générée fait bien : les ambiances (vapeur qui monte d'une tasse, grains qui tombent au ralenti, atelier au petit matin), les mouvements de caméra simples (travelling lent, zoom doux), les textures et la matière. Ce qu'elle rate encore, et il faut le savoir avant d'acheter des crédits :\n\n" +
            "- **La physique fine** : liquides versés, mains qui saisissent, objets qui se déforment de façon impossible.\n" +
            "- **Les visages en mouvement** : dérive des traits au fil des secondes, regards morts.\n" +
            "- **Le texte** : enseignes et étiquettes illisibles, comme en image mais en pire.\n" +
            "- **La continuité** : impossible de garantir le même décor exact d'un plan à l'autre.\n\n" +
            "Compte aussi le déchet : sur une série de générations, en jeter la moitié est normal. Budgète tes crédits en conséquence.\n\n" +
            "## Le script d'abord, toujours\n\n" +
            "Une vidéo courte réussie commence dans ton assistant texte, pas dans le générateur vidéo. La structure standard d'un format 20 à 40 secondes :\n\n" +
            "```text\n" +
            "HOOK (0-2 s)   : une phrase qui arrête le pouce. Affirmation\n" +
            "                 surprenante ou question qui pique.\n" +
            "CORPS (2-30 s) : UNE seule idée, découpée en 3 phrases courtes\n" +
            "                 max. Une idée par vidéo, pas trois.\n" +
            "CHUTE (30-40 s): la conclusion utile + l'action attendue.\n" +
            "```\n\n" +
            "Léa recycle : son article de blog « pourquoi moudre à la minute change le goût » devient un script de 30 secondes, demandé au modèle avec le brief de marque et cette structure imposée, puis réécrit à la main (la boucle de la partie 2 s'applique au mot près). Le hook retenu : « Ton café ne périme pas dans le paquet. Il périme dans les dix minutes après la mouture. »\n\n" +
            "## Générer les plans : pars d'une image, pas de texte\n\n" +
            "Tous les outils offrent deux modes : texte → vidéo, et **image → vidéo**. Le second est ton ami. Tu prends un visuel validé de la partie 3, déjà cohérent avec ta charte, et tu demandes au modèle de l'animer : « la vapeur monte lentement, léger travelling avant, lumière stable ». Le résultat garde ta palette et ta composition ; le mode texte→vidéo, lui, réinvente un univers à chaque tirage.\n\n" +
            "Sur les consignes de mouvement, la sobriété paie : un mouvement de caméra simple et un seul élément animé. Chaque élément de complexité supplémentaire multiplie le taux de déchet. « La vapeur monte » réussit neuf fois sur dix ; « le barista verse le lait en dessinant un cœur pendant que la caméra tourne autour » échoue neuf fois sur dix.\n\n" +
            "Côté outils, rappel de la partie 1 : Runway (contrôles de caméra précis, crédits vite consommés), Veo via l'écosystème Google (le plus réaliste, génère aussi le son ambiant), Kling (bon rapport qualité-prix pour débuter). Commence avec les crédits gratuits avant de payer quoi que ce soit.\n\n" +
            "## Où ces plans finissent-ils ?\n\n" +
            "Dans un montage, en **b-roll** : les images d'illustration qui habillent une voix off ou alternent avec tes vrais plans. La recette Terra Café pour un Reel de 30 secondes : deux plans réels filmés au smartphone (le vrai Malik, le vrai atelier) + un ou deux plans générés d'ambiance + une voix off + des sous-titres. Le réel porte l'authenticité, le généré apporte la production value. La leçon 16 assemble tout ça.\n\n" +
            "## À toi\n\n" +
            "Écris le script 30 secondes (hook, corps, chute) d'un sujet que tu connais par cœur. Puis anime UN de tes visuels de la partie 3 avec une consigne d'un seul mouvement, sur les crédits gratuits d'un des trois outils.\n\n" +
            "> Compare ta génération image→vidéo avec un essai texte→vidéo du même sujet : la différence de cohérence avec ta marque saute aux yeux. C'est le test qui convainc tout le monde en une fois.\n",
        },
        {
          id: "l15",
          title: "Voix off, avatars et sous-titres",
          type: "text",
          duration: "15 min",
          body:
            "## La voix off générée : le maillon le plus mûr\n\n" +
            "De tous les médias de ce cours, la voix est celui où la machine trompe le mieux l'oreille. Une voix off ElevenLabs en français, bien réglée, passe le test de l'écoute distraite d'un Reel, et c'est précisément le niveau d'attention de ton audience. Pour Léa, qui déteste s'enregistrer, c'est le déblocage : ses scripts de la leçon 14 deviennent des voix off en dix minutes.\n\n" +
            "Le mode d'emploi qui change le résultat :\n\n" +
            "- **Choisis une voix cohérente avec la marque** et n'en change plus. La voix fait partie de l'identité au même titre que la palette. Terra Café a pris une voix féminine posée, légèrement grave ; elle est notée dans le brief de marque.\n" +
            "- **Écris pour l'oreille.** La ponctuation pilote le rythme : les points créent des pauses franches, les virgules des respirations. Une phrase de 25 mots s'écoute mal ; coupe-la en deux.\n" +
            "- **Phonétise les pièges.** Noms propres, marques, anglicismes : « Kivu Nyota » peut sortir écorché. Écris-le phonétiquement dans le script (« Kivou Niota ») ou teste plusieurs orthographes.\n" +
            "- **Génère par paragraphes**, pas le script entier d'un bloc : tu ne re-payes que le paragraphe raté.\n\n" +
            "Les limites honnêtes : les émotions marquées (colère, enthousiasme débordant) sonnent théâtrales, et sur une écoute attentive, la régularité du rythme finit par se sentir. Pour une pub très incarnée, un humain au micro garde l'avantage. Pour du contenu quotidien informatif, la différence est devenue marginale.\n\n" +
            "## Le clonage de voix : une ligne rouge simple\n\n" +
            "ElevenLabs permet de cloner une voix à partir de quelques minutes d'enregistrement. **Ta propre voix** : cas d'usage légitime et même malin (tu enregistres une fois, tu produis ensuite tes voix off « en ta voix » sans micro ni prise de son). **La voix de quelqu'un d'autre sans son consentement écrit** : jamais. Ce n'est pas une zone grise, c'est la ligne rouge absolue de ce cours, on en détaille les raisons juridiques en partie 6. Les plateformes de voix sérieuses exigent d'ailleurs une vérification que la voix clonée est la tienne.\n\n" +
            "## Les avatars parlants : utiles, mais pas pour tricher\n\n" +
            "Les outils comme HeyGen (autour de 24 $ par mois en entrée de gamme) génèrent un « talking head » : un avatar filmé qui prononce ton script, y compris dans des langues que tu ne parles pas. Soyons clairs sur les usages :\n\n" +
            "- **Là où ça marche** : formation interne, tutoriels produit, déclinaison multilingue d'une vidéo existante, FAQ vidéo. Des contextes où l'audience accepte un présentateur « neutre ».\n" +
            "- **Là où ça se retourne contre toi** : faire passer un avatar pour le vrai fondateur qui parle « authentiquement » à sa communauté. Le rendu est bon mais pas parfait (micro-expressions figées, synchronisation labiale perfectible), et l'audience qui s'en aperçoit ne te le pardonne pas, parce que la promesse trahie était justement l'authenticité. Et les plateformes exigent de plus en plus le marquage de ce type de contenu (partie 6, encore).\n\n" +
            "La règle de Léa : l'avatar pour l'informatif assumé, le vrai Malik au smartphone pour l'incarné. Jamais l'un déguisé en l'autre.\n\n" +
            "## Les sous-titres : automatiques, mais relus\n\n" +
            "80 % des vidéos sociales se regardent sans le son : les sous-titres ne sont pas une option. La transcription automatique est partout (CapCut les génère en un clic, la techno de type Whisper motorise la plupart des outils gratuits) et elle est bonne à 95 %. Les 5 % restants sont traîtres en français : noms propres massacrés, homophones (« ses/ces », « la/là »), négations avalées. Une relecture intégrale prend deux minutes par vidéo ; un sous-titre faux en plein écran, lui, reste en capture d'écran pour toujours.\n\n" +
            "Soigne aussi la forme : deux lignes maximum, position au-dessus de la zone d'interface, mots-clés du hook mis en valeur.\n\n" +
            "## À toi\n\n" +
            "Prends ton script de la leçon 14 et génère sa voix off sur le plan gratuit d'ElevenLabs : choisis une voix, ajuste la ponctuation, phonétise les noms propres, régénère le paragraphe le plus faible.\n\n" +
            "> Écoute ta première génération en fermant les yeux : tu entendras exactement où la ponctuation manque (chaque enchaînement trop rapide est une virgule ou un point que ton script doit ajouter). On corrige le texte, pas la voix.\n",
        },
        {
          id: "l16",
          title: "Le montage assisté : assembler en une heure",
          type: "text",
          duration: "14 min",
          body:
            "## Le montage reste l'étape humaine\n\n" +
            "Tu as un script, des plans réels, un ou deux plans générés, une voix off, des sous-titres à venir. Il reste à assembler, et c'est l'étape que l'IA assiste le mieux sans pouvoir la remplacer. Les fonctions « montage automatique » des outils actuels produisent des vidéos correctes et oubliables : coupes à contretemps, plans gardés trop longs, aucun sens du rythme. L'IA fait les corvées du montage ; les décisions de rythme restent à toi.\n\n" +
            "## Les deux outils qui suffisent\n\n" +
            "- **CapCut** : gratuit pour l'essentiel (version Pro autour de 10 € par mois), pensé pour le format vertical, et c'est l'outil le plus utilisé au monde pour les vidéos sociales. Ses assistants utiles : sous-titres automatiques, suppression du fond vidéo, redimensionnement intelligent entre formats.\n" +
            "- **Descript** (à partir d'une quinzaine de dollars par mois) : une idée géniale (tu montes la vidéo **en éditant sa transcription**). Tu supprimes une phrase dans le texte, le plan correspondant saute. Ses deux fonctions redoutables : la suppression automatique des silences et des mots béquilles (« euh », « du coup »), et l'amélioration du son qui donne à un enregistrement de smartphone un rendu de studio. Si tu fais du face caméra ou du podcast, Descript rembourse son abonnement dès la première semaine.\n\n" +
            "Mon conseil de démarrage : CapCut seul. Descript devient pertinent quand tu enregistres régulièrement ta propre voix ou ta propre image.\n\n" +
            "## La recette du Reel Terra Café, minute par minute\n\n" +
            "Voilà le déroulé complet d'une vidéo de 30 secondes, chronométré sur le flux réel de Léa :\n\n" +
            "1. **Script** (10 min) ; leçon 14 : brief + structure hook/corps/chute + réécriture humaine.\n" +
            "2. **Voix off** (10 min) ; leçon 15 : ElevenLabs, deux régénérations de paragraphe.\n" +
            "3. **Plans** (15 min) : deux plans réels smartphone (Malik verse le café, gros plan mouture) tournés en une prise, un plan généré (vapeur au ralenti, image→vidéo depuis un visuel validé).\n" +
            "4. **Assemblage CapCut** (15 min) : la voix off posée d'abord, les plans calés dessus. Règle de rythme : un changement de plan toutes les 2 à 4 secondes, et le hook visuel le plus fort dans la première seconde.\n" +
            "5. **Sous-titres + habillage** (8 min) : génération auto, relecture intégrale, deux lignes max, zone centrale.\n" +
            "6. **Export** (2 min) ; 9:16, résolution maximale, et déclinaison 4:5 si le post part aussi en feed.\n\n" +
            "Total : une heure. La même vidéo en agence, il y a cinq ans, c'était une journée de production. Mais remarque où passe le temps de Léa : script et rythme de montage (les deux endroits où le goût humain fait la différence). Les corvées (transcription, silences, redimensionnement), elles, ont disparu.\n\n" +
            "## Trois pièges de montage assisté\n\n" +
            "- **Le template tout fait.** CapCut propose des modèles viraux prêts à remplir. Résultat : ta vidéo ressemble aux dix mille autres sorties du même moule, musique comprise. Pioche des idées dedans, ne publie jamais le moule.\n" +
            "- **La musique au hasard.** Utilise la bibliothèque de sons de la plateforme cible (les sons « tendance » y boostent la distribution) et vérifie les droits pour un compte professionnel : beaucoup de sons sont réservés aux comptes personnels.\n" +
            "- **L'enchaînement sans respiration.** La suppression automatique des silences de Descript, poussée à fond, produit un débit mitraillette épuisant. Garde des pauses : elles font partie du sens.\n\n" +
            "## À toi\n\n" +
            "Monte ta première vidéo complète avec les briques des leçons 14 et 15 : voix off d'abord, plans calés dessus, sous-titres relus, export 9:16. Chronomètre chaque étape.\n\n" +
            "> Ton premier montage prendra deux à trois heures, pas une. C'est normal : la recette d'une heure est celle du dixième montage, quand les gestes sont rodés. Ce qui compte à ce stade : identifier TON étape lente pour savoir quoi améliorer.\n",
        },
        {
          id: "l17",
          title: "Quiz : vidéo et audio",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q15",
              prompt:
                "Quel est l'usage rentable de la vidéo générative en 2026 pour un créateur de contenu ?",
              options: [
                "Générer des vidéos complètes de 60 secondes prêtes à publier",
                "Générer de courts plans d'illustration (b-roll) de 5 à 10 secondes, insérés dans un montage classique",
                "Remplacer toutes les prises de vue réelles du produit",
                "Générer uniquement des vidéos en 16:9 pour YouTube",
              ],
              correctIndex: 1,
              explanation:
                "Au-delà de quelques secondes, cohérence et physique dérapent, et le taux de déchet explose. Le point fort actuel : des plans d'ambiance courts qui habillent une voix off aux côtés de vrais plans (le réel porte l'authenticité, le généré ajoute de la production value).",
            },
            {
              id: "q16",
              prompt:
                "Pourquoi préférer le mode image→vidéo au mode texte→vidéo pour du contenu de marque ?",
              options: [
                "Il est toujours gratuit, contrairement au texte→vidéo",
                "Il génère des vidéos plus longues",
                "En partant d'un visuel déjà validé, le plan animé hérite de ta palette et de ta composition au lieu de réinventer un univers à chaque tirage",
                "Il permet d'ajouter du texte lisible dans la vidéo",
              ],
              correctIndex: 2,
              explanation:
                "L'image de départ verrouille l'identité visuelle : le générateur anime TA scène au lieu d'en inventer une. C'est le prolongement direct du travail de cohérence de la partie 3, et ça réduit aussi le taux de déchet.",
            },
            {
              id: "q17",
              prompt:
                "Ta voix off ElevenLabs enchaîne deux idées trop vite, sans respiration. Où se corrige le problème ?",
              options: [
                "Dans les réglages de vitesse globale de la voix",
                "Dans le script : la ponctuation pilote le rythme, il manque un point ou une virgule à cet endroit",
                "En choisissant une voix plus grave",
                "En exportant en meilleure qualité audio",
              ],
              correctIndex: 1,
              explanation:
                "La synthèse vocale lit la ponctuation comme une partition : point = pause franche, virgule = respiration. Le réflexe pro est de corriger le texte et de régénérer le paragraphe concerné : pas de bidouiller des réglages globaux qui dégraderaient le reste.",
            },
            {
              id: "q18",
              prompt:
                "Pourquoi la relecture des sous-titres automatiques est-elle obligatoire alors qu'ils sont justes à 95 % ?",
              options: [
                "Parce que les plateformes pénalisent les sous-titres générés automatiquement",
                "Parce que les 5 % d'erreurs (noms propres, homophones, négations avalées) s'affichent en plein écran et ruinent la crédibilité",
                "Parce que la loi impose des sous-titres validés par un humain",
                "Parce que la transcription automatique ne fonctionne pas en français",
              ],
              correctIndex: 1,
              explanation:
                "Une erreur de sous-titre est l'erreur la plus visible qui existe : plein écran, figée en capture, partagée en commentaire. Les pièges du français (homophones, noms propres, négations) sont précisément là où l'automatique se trompe. Deux minutes de relecture par vidéo, non négociables.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Le pipeline de production, du calendrier à la mesure",
      lessons: [
        {
          id: "l18",
          title: "Le calendrier éditorial et la décision générer/créer",
          type: "text",
          duration: "15 min",
          body:
            "## Le vrai problème n'est pas de produire, c'est de durer\n\n" +
            "Avec les parties 2 à 4, tu sais produire un bon post, un bon visuel, une bonne vidéo. Le cimetière des marques est pourtant rempli de comptes qui savaient faire tout ça, et qui ont publié brillamment pendant trois semaines avant de disparaître. Ce qui construit une audience, c'est la régularité sur des mois. Et la régularité ne tient jamais sur la motivation : elle tient sur un système. Ce système commence par un calendrier.\n\n" +
            "## Les piliers avant les posts\n\n" +
            "Un calendrier éditorial ne se remplit pas post par post, il se remplit par **piliers** : trois ou quatre familles de contenu qui reviennent chaque semaine. Ceux de Terra Café :\n\n" +
            "| Pilier | Exemple | Part |\n" +
            "| --- | --- | --- |\n" +
            "| Pédagogie | « pourquoi moudre à la minute change le goût » | 40 % |\n" +
            "| Coulisses | le torréfacteur à 6 h 40, le lot bloqué en douane | 30 % |\n" +
            "| Produit | lancement Huila Rosa, réassort du Kivu | 20 % |\n" +
            "| Preuve | avis clients, photos de tasses envoyées par la communauté | 10 % |\n\n" +
            "L'intérêt est double. Pour l'audience, un compte prévisible dans ses thèmes et surprenant dans ses angles. Pour toi, la fin de la page blanche : lundi matin, Léa ne se demande plus « quoi poster ? » mais « quel angle pédagogie cette semaine ? » : une question cent fois plus facile, et que son assistant texte peut brainstormer avec elle à partir du brief.\n\n" +
            "## Générer ou créer soi-même : l'arbre de décision\n\n" +
            "Pour chaque case du calendrier, une décision : ce contenu sera-t-il généré, créé à la main, ou hybride ? Après trois parties de ce cours, tu as tous les éléments ; voilà l'arbre qui les résume.\n\n" +
            "```figure\n" +
            "{\"caption\": \"L'arbre de décision : générer, créer soi-même, ou hybride (à appliquer case par case sur le calendrier\"})\n" +
            "<svg viewBox=\"0 0 640 380\" role=\"img\"><title>Arbre de décision générer ou créer</title><rect x=\"150\" y=\"16\" width=\"340\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"320\" y=\"44\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">montre ton produit ou une personne reelle ?</text><line x1=\"245\" y1=\"62\" x2=\"125\" y2=\"100\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"160\" y=\"78\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">oui</text><rect x=\"30\" y=\"102\" width=\"190\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"125\" y=\"130\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">PHOTO / VIDEO REELLE</text><line x1=\"400\" y1=\"62\" x2=\"460\" y2=\"100\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"448\" y=\"78\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non</text><rect x=\"330\" y=\"102\" width=\"280\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"470\" y=\"130\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">gros volume, style repetable ?</text><line x1=\"400\" y1=\"148\" x2=\"345\" y2=\"198\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"345\" y=\"172\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">oui</text><rect x=\"250\" y=\"200\" width=\"185\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\" stroke-width=\"2\"/><text x=\"342\" y=\"228\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">GENERER (bloc style)</text><line x1=\"530\" y1=\"148\" x2=\"545\" y2=\"198\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"552\" y=\"172\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non</text><rect x=\"460\" y=\"200\" width=\"170\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"545\" y=\"228\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">fort enjeu d'image ?</text><line x1=\"510\" y1=\"246\" x2=\"475\" y2=\"296\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"470\" y=\"268\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">oui</text><rect x=\"390\" y=\"298\" width=\"185\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"482\" y=\"326\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">CREER OU COMMANDER</text><line x1=\"580\" y1=\"246\" x2=\"280\" y2=\"296\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"300\" y=\"268\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non</text><rect x=\"80\" y=\"298\" width=\"230\" height=\"46\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"195\" y=\"326\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">GENERER PUIS RETOUCHER</text></svg>\n" +
            "```\n\n" +
            "Traduction en mots :\n\n" +
            "- **Le contenu montre ton produit réel ou une personne réelle ?** Photo ou vidéo réelle, point. On l'a vu en partie 3 : l'IA invente un produit qui n'est pas le tien, et une fausse « authenticité » coûte plus cher qu'elle ne rapporte.\n" +
            "- **C'est du volume au style répétable** (visuels d'ambiance hebdo, illustrations d'articles, b-roll) ? Générer, avec le bloc de style. C'est le cœur de rentabilité de l'IA.\n" +
            "- **C'est rare et à fort enjeu d'image** (visuel de campagne payante, communiqué, page d'accueil) ? Créer ou commander à un pro. Le coût unitaire élevé se justifie précisément parce que c'est rare.\n" +
            "- **Entre les deux ?** Générer puis retoucher sérieusement : le mode hybride de la leçon 11.\n\n" +
            "Sur le calendrier de Terra Café, ça donne : pédagogie = texte généré + visuel généré (volume, style répétable) ; coulisses = smartphone brut (réel, c'est le pilier authenticité) ; produit = photo réelle détourée sur décor généré (hybride) ; preuve = contenu client réel, jamais généré : un faux avis est une ligne rouge, on y revient en partie 6.\n\n" +
            "## À toi\n\n" +
            "Définis tes trois ou quatre piliers avec leur part en pourcentage, puis passe chacun dans l'arbre : générer, créer, ou hybride ?\n\n" +
            "> Vérifie l'équilibre final : si TOUT ressort « générer », ton calendrier manque de réel, et c'est le réel qui crée le lien. La bonne proportion pour une petite marque tourne autour de moitié généré ou hybride, moitié réel.\n",
        },
        {
          id: "l19",
          title: "Le pipeline complet : une demi-journée pour la semaine",
          type: "text",
          duration: "15 min",
          body:
            "## Produire en flux ou produire en lots\n\n" +
            "La différence entre Léa débordée (janvier) et Léa sereine (mars) ne tient pas aux outils, elle tient à l'organisation : elle est passée du flux (produire chaque post le jour où il faut le publier) aux **lots** (produire toute la semaine en une session). Le travail en lots divise le temps réel par deux, pour une raison mécanique : chaque type de tâche a un coût de démarrage (recharger le contexte, rouvrir les outils, retrouver le fil). Écrire douze textes d'affilée coûte bien moins que douze fois un texte.\n\n" +
            "Voilà le pipeline hebdomadaire complet, celui que tout le cours préparait :\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le pipeline hebdomadaire : six étapes en lots, et la mesure qui nourrit le calendrier suivant\"}\n" +
            "<svg viewBox=\"0 0 640 260\" role=\"img\"><title>Pipeline de production de contenu</title><rect x=\"14\" y=\"110\" width=\"92\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"60\" y=\"140\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">CALENDRIER</text><polygon points=\"118,136 108,131 108,141\" fill=\"currentColor\" opacity=\"0.6\"/><line x1=\"106\" y1=\"136\" x2=\"110\" y2=\"136\" stroke=\"currentColor\" opacity=\"0.6\"/><rect x=\"120\" y=\"110\" width=\"92\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"166\" y=\"140\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">BRIEFS</text><polygon points=\"224,136 214,131 214,141\" fill=\"currentColor\" opacity=\"0.6\"/><rect x=\"226\" y=\"110\" width=\"92\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"272\" y=\"133\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">GENERATION</text><text x=\"272\" y=\"150\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.65\">txt/img/vid</text><polygon points=\"330,136 320,131 320,141\" fill=\"currentColor\" opacity=\"0.6\"/><rect x=\"332\" y=\"110\" width=\"92\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\" stroke-width=\"2\"/><text x=\"378\" y=\"140\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">QC HUMAIN</text><polygon points=\"436,136 426,131 426,141\" fill=\"currentColor\" opacity=\"0.6\"/><rect x=\"438\" y=\"110\" width=\"92\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"484\" y=\"133\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">PUBLICATION</text><text x=\"484\" y=\"150\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.65\">multi-reseaux</text><polygon points=\"542,136 532,131 532,141\" fill=\"currentColor\" opacity=\"0.6\"/><rect x=\"544\" y=\"110\" width=\"82\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"585\" y=\"140\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">MESURE</text><polyline points=\"585,110 585,52 60,52 60,96\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\" stroke-dasharray=\"5 4\"/><polygon points=\"60,108 54,96 66,96\" fill=\"currentColor\" opacity=\"0.45\"/><text x=\"322\" y=\"42\" font-family=\"ui-monospace, monospace\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">ce qui a performe nourrit le calendrier suivant</text></svg>\n" +
            "```\n\n" +
            "## La semaine type de Léa, poste par poste\n\n" +
            "**Lundi, 9 h à 9 h 45 : calendrier et briefs.** Elle relit les chiffres de la semaine passée (étape MESURE, leçon suivante), remplit la grille des piliers pour la semaine, et écrit une ligne de brief par contenu : angle, format, appel à l'action. Quinze contenus, une ligne chacun.\n\n" +
            "**Lundi, 9 h 45 à 11 h : génération texte en lot.** Une seule session dans le projet Claude/ChatGPT (le brief de marque est déjà dans le contexte) : les douze posts et la newsletter, en enchaînant les boucles variantes→critique. La réécriture humaine se fait dans la foulée, texte par texte.\n\n" +
            "**Lundi, 11 h à 12 h : visuels en lot.** Le bloc [STYLE TERRA] + les sujets de la semaine, grilles lancées en parallèle pendant qu'elle retouche et décline les validés. Les photos réelles du pilier coulisses, elle, sont prises au fil de la semaine au smartphone : c'est le seul contenu qui ne se planifie pas en lot.\n\n" +
            "**Mardi, 9 h à 10 h : vidéo.** Un Reel par semaine, recette de la leçon 16. Pas trois : un, bien fait, chaque semaine (la régularité bat le volume).\n\n" +
            "**Mardi, 10 h à 10 h 30 : QC et programmation.** Chaque contenu passe le portail qualité (leçon suivante), puis tout est programmé pour la semaine dans un outil de planification (Buffer, Metricool ou équivalent ; autour de 10 à 20 € par mois, et ça remplace la corvée de publier chaque jour à la main).\n\n" +
            "Total : une matinée et demie pour quinze contenus sur trois réseaux. Ce n'est pas une promesse marketing, c'est un ordre de grandeur réaliste **une fois le système rodé** : compte un mois de rodage.\n\n" +
            "## Multi-réseaux : décliner, pas dupliquer\n\n" +
            "Le même contenu ne se copie-colle pas d'un réseau à l'autre : chaque plateforme a son format et son ton. Mais il ne se réinvente pas non plus. La règle du pipeline : **une idée, des déclinaisons**. L'article de blog sur la mouture devient un carrousel Instagram (les 5 points clés), un Reel de 30 secondes (le hook le plus fort), un post LinkedIn de Malik (l'angle artisan-entrepreneur) et un paragraphe de newsletter. La déclinaison est exactement le type de tâche mécanique où l'assistant texte excelle : « décline cet article validé en carrousel de 5 slides, puis en post LinkedIn à la première personne » (le fond est déjà validé, seule la forme change, le risque est minimal).\n\n" +
            "## À toi\n\n" +
            "Pose ta semaine type dans ton agenda : deux créneaux de lots (texte+visuels, puis vidéo+QC+programmation), aux heures où tu es le plus lucide. Puis déroule le pipeline une première fois, en notant le temps réel de chaque étape.\n\n" +
            "> Garde tes chiffres de cette première semaine : c'est ta référence. L'objectif du premier mois n'est pas la vitesse, c'est de ne sauter aucune étape, surtout pas le QC, qui est précisément celle qu'on saute quand on est pressé.\n",
        },
        {
          id: "l20",
          title: "Contrôle qualité et mesure de ce qui performe",
          type: "text",
          duration: "15 min",
          body:
            "## Le portail qualité : quatre contrôles, deux minutes\n\n" +
            "Dans le schéma du pipeline, la case QC HUMAIN est en évidence, et ce n'est pas décoratif : c'est la case qui protège ta marque. À volume élevé, l'erreur n'est pas une possibilité, c'est une certitude statistique, sauf si un portail systématique l'arrête. Chaque contenu, sans exception, passe quatre contrôles avant programmation :\n\n" +
            "1. **Signature IA** (la checklist texte de la leçon 7 : tics, structure, au moins un détail concret).\n" +
            "2. **Exactitude** : chaque fait, prix, nom, date vérifié contre le bloc FAITS du brief. Le post qui annonce le Kivu à 12 € au lieu de 14 € coûte réellement de l'argent.\n" +
            "3. **Visuel** : zoom sur les mains, le texte, les reflets (leçon 9) ; cohérence palette/lumière avec les six derniers posts (leçon 10).\n" +
            "4. **Conformité** : droits d'usage OK (leçon 12), mention IA si la plateforme l'exige (partie 6), pas de visage réel non consenti, pas de fausse preuve sociale.\n\n" +
            "Deux minutes par contenu. Léa le fait le mardi, café en main, en mode réviseur : elle n'a pas produit ces contenus depuis 24 heures, l'œil est frais. Si tu travailles en équipe, la règle d'or : **celui qui valide n'est pas celui qui a généré**.\n\n" +
            "## Mesurer : trois métriques qui décident, le reste qui flatte\n\n" +
            "Publier sans mesurer, c'est produire à l'aveugle, et avec l'IA, produire à l'aveugle en grande quantité. Mais tout mesurer noie l'essentiel. Pour un créateur ou une petite marque, trois familles suffisent :\n\n" +
            "- **La rétention** (vidéo) : le pourcentage de la vidéo effectivement regardé, et la courbe seconde par seconde. C'est la métrique reine des formats courts : une chute à la seconde 2 dit « ton hook ment ou ennuie », une chute au milieu dit « le corps traîne ».\n" +
            "- **Les partages et enregistrements** (posts) : un like coûte zéro effort, un enregistrement signifie « je veux retrouver ça », un partage « je m'associe à ça ». À portée égale, un post enregistré 40 fois vaut plus que un post liké 400 fois.\n" +
            "- **Le clic sortant** (business) : newsletter, fiche produit, site. Ajoute des paramètres UTM à tes liens (une convention de suffixes d'URL que tout outil d'analytics lit) pour savoir quel post a réellement amené des visiteurs et des ventes, pas seulement des applaudissements.\n\n" +
            "Les abonnés gagnés et les likes sont agréables à regarder ; ils décident rarement de quoi que ce soit.\n\n" +
            "## L'audit mensuel de trente minutes\n\n" +
            "Chaque premier lundi du mois, Léa sort son top 5 et son flop 5 sur les métriques ci-dessus et se pose trois questions : quel pilier sur-performe (on augmente sa part) ? quel format sous-performe (on le retravaille ou on le coupe) ? quel hook a le mieux retenu (on décline son mécanisme, pas sa lettre) ? Les réponses modifient le calendrier du mois suivant : c'est la flèche pointillée du schéma, celle qui referme la boucle. Exemple réel du fil rouge : en février, les coulisses de torréfaction font deux fois la rétention des posts produit ; en mars, le pilier coulisses passe de 30 à 40 % et les ventes du mardi (jour de torréfaction) montent avec lui.\n\n" +
            "Un garde-fou pour finir : les métriques optimisent, elles ne dirigent pas. Si tu ne publies plus que ce qui performe, tu convergeras vers le contenu le plus racoleur de ta niche, et tu redeviendras la moyenne, celle-là même que tout ce cours t'apprend à fuir. Garde une part du calendrier (10 à 20 %) pour ce que tu as envie de dire, métriques ou pas. C'est souvent là que naissent les piliers de demain.\n\n" +
            "## À toi\n\n" +
            "Fais l'audit sur ton mois écoulé, même sans pipeline : top 5, flop 5, et une décision par question (pilier, format, hook). Note les trois décisions dans ton calendrier du mois prochain.\n\n" +
            "> Si tu n'as pas encore assez de contenus pour un top 5, c'est une information en soi : ton problème du mois 1 n'est pas l'optimisation, c'est le volume régulier. Déroule le pipeline pendant quatre semaines, puis reviens à cet exercice.\n",
        },
        {
          id: "l21",
          title: "Quiz : le pipeline",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q19",
              prompt:
                "Selon l'arbre de décision, quel contenu ne doit JAMAIS être généré par IA ?",
              options: [
                "Les visuels d'ambiance hebdomadaires",
                "Les illustrations des articles de blog",
                "Le contenu qui montre ton produit réel ou des personnes réelles (y compris les avis clients)",
                "Les déclinaisons multi-réseaux d'un article validé",
              ],
              correctIndex: 2,
              explanation:
                "L'IA ne connaît pas ton produit : elle en invente un autre. Et fabriquer du réel qui n'existe pas (faux client, faux avis, fausses coulisses) n'est plus de la production de contenu, c'est de la tromperie, avec des conséquences juridiques abordées en partie 6.",
            },
            {
              id: "q20",
              prompt:
                "Pourquoi le travail en lots (toute la semaine en une session) est-il plus rapide que produire chaque post au jour le jour ?",
              options: [
                "Parce que les outils IA sont moins chers le lundi",
                "Parce que chaque type de tâche a un coût de démarrage (contexte, outils, fil de pensée) qu'on ne paie qu'une fois par lot",
                "Parce que les plateformes favorisent les contenus programmés",
                "Parce que ça permet de sauter l'étape de contrôle qualité",
              ],
              correctIndex: 1,
              explanation:
                "C'est mécanique : rouvrir le projet, recharger le brief, retrouver le ton (ce coût fixe se paie une fois pour douze textes au lieu de douze fois). Le QC, lui, reste obligatoire, lots ou pas ; c'est même l'étape qu'il ne faut jamais sacrifier à la vitesse.",
            },
            {
              id: "q21",
              prompt:
                "À portée égale, lequel de ces signaux indique le mieux qu'un post a de la valeur pour ton audience ?",
              options: [
                "400 likes",
                "40 enregistrements et des partages",
                "Beaucoup de vues dans la première heure",
                "Un commentaire avec des emojis",
              ],
              correctIndex: 1,
              explanation:
                "Le like est un geste sans coût ; l'enregistrement (« je veux retrouver ça ») et le partage (« je m'associe à ça ») engagent l'utilisateur. Ce sont eux, avec la rétention vidéo et les clics sortants, qui doivent piloter ton audit mensuel.",
            },
            {
              id: "q22",
              prompt:
                "Ton audit mensuel montre que seuls les posts les plus racoleurs performent. Que recommande la leçon ?",
              options: [
                "Ne publier plus que du racoleur : les chiffres ont toujours raison",
                "Arrêter de mesurer, les métriques corrompent la créativité",
                "Laisser les métriques optimiser la majorité du calendrier, mais réserver 10 à 20 % à ce que tu veux dire, pour ne pas converger vers la moyenne de ta niche",
                "Doubler le budget publicitaire",
              ],
              correctIndex: 2,
              explanation:
                "Optimiser à 100 % sur les métriques fait converger tout le monde vers le même contenu : la moyenne, exactement ce qu'une marque doit fuir. La part « conviction » du calendrier est aussi le laboratoire où naissent les piliers qui performeront demain.",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Éthique, droit et authenticité",
      lessons: [
        {
          id: "l22",
          title: "Les mentions IA : ce que les plateformes exigent",
          type: "text",
          duration: "15 min",
          body:
            "## L'époque du flou est terminée\n\n" +
            "Entre 2023 et 2025, on pouvait publier du contenu généré sans rien dire et sans risque : les règles n'existaient pas ou n'étaient pas appliquées. Ce temps-là est fini. Les grandes plateformes ont toutes déployé des systèmes de déclaration et de marquage, et le régulateur a suivi. Publier du contenu synthétique réaliste sans le signaler t'expose désormais à des retraits de contenus, des pertes de portée, voire des sanctions du compte, et à des obligations légales dans certains cas. Faisons le tour, avec l'avertissement qui s'impose : ces règles évoluent plusieurs fois par an, **vérifie les pages officielles de chaque plateforme au moment où tu publies**. Ce qui suit est l'état des lieux au moment où ce cours est écrit.\n\n" +
            "## Le critère commun : le réalisme\n\n" +
            "Bonne nouvelle : les plateformes ont convergé vers la même logique. La question n'est pas « as-tu utilisé de l'IA ? » mais « **ton contenu pourrait-il être pris pour la réalité ?** ».\n\n" +
            "- **Doit être déclaré** : une scène photoréaliste qui n'a pas eu lieu, une personne réaliste qui n'existe pas, une voix synthétique qui semble réelle, un événement fabriqué.\n" +
            "- **N'exige généralement pas de déclaration** : une illustration manifestement stylisée, une retouche légère (couleurs, cadrage), un fond flouté, un script écrit avec un assistant, des sous-titres automatiques.\n\n" +
            "Dans le détail des grandes plateformes :\n\n" +
            "- **YouTube** demande, à l'upload, de déclarer les contenus réalistes « modifiés ou synthétiques » ; un label s'affiche alors, de façon plus visible sur les sujets sensibles (santé, actualité, élections).\n" +
            "- **TikTok** impose le marquage du contenu généré réaliste, fournit un interrupteur « contenu généré par IA » à la publication, et applique en plus un étiquetage automatique en lisant les métadonnées de provenance (le standard Content Credentials/C2PA, que les grands générateurs intègrent progressivement à leurs fichiers). Traduction : même sans ta déclaration, le fichier peut te dénoncer, et le compte qui « oublie » systématiquement s'expose à des retraits.\n" +
            "- **Meta** (Instagram, Facebook) affiche un label « info IA », posé soit sur ta déclaration, soit automatiquement via ces mêmes métadonnées ; la déclaration est exigée pour les vidéos et audios photoréalistes.\n\n" +
            "## Et la loi, au-dessus des plateformes\n\n" +
            "Deux étages réglementaires à connaître, sans paniquer :\n\n" +
            "- **En Europe**, l'AI Act impose la transparence sur les contenus synthétiques : les deepfakes et contenus générés réalistes doivent être identifiables comme tels, avec des obligations qui entrent pleinement en application autour de 2026-2027 selon les dispositions. Pour un créateur, la ligne pratique est la même que celle des plateformes : le réaliste se signale.\n" +
            "- **Aux États-Unis**, la FTC sanctionne les pratiques trompeuses, et a explicitement interdit en 2024 les faux avis, y compris générés par IA. Si tu vends à des clients américains, la fausse preuve sociale n'est pas une zone grise, c'est une infraction.\n\n" +
            "En France s'ajoutent les règles générales sur les pratiques commerciales trompeuses (DGCCRF) : un contenu généré qui fait croire à un témoignage client réel tombe dessus, IA ou pas.\n\n" +
            "## En pratique pour Terra Café\n\n" +
            "Léa a ajouté une colonne « mention IA » à son calendrier, remplie en dix secondes par contenu grâce au critère du réalisme :\n\n" +
            "- Visuel d'ambiance photoréaliste généré (l'atelier rêvé qui n'existe pas) → **déclaré** sur la plateforme, et souvent doublé d'un mot en légende, assumé : « décor imaginé par IA, café bien réel ».\n" +
            "- Illustration stylisée de l'article de blog → pas d'obligation, mention facultative.\n" +
            "- Voix off synthétique sur un Reel → **déclarée** (voix réaliste).\n" +
            "- Post texte écrit avec l'assistant puis réécrit → pas de déclaration exigée par les plateformes à ce jour.\n" +
            "- Photo réelle du produit détourée sur fond généré photoréaliste → cas limite : dans le doute, **déclare**. Le label coûte zéro ; le retrait pour non-déclaration, lui, coûte la portée du post.\n\n" +
            "La règle simple qui résume tout : **dans le doute, marque**. Aucune audience n'a jamais quitté une marque parce qu'elle était transparente sur ses outils. L'inverse arrive chaque semaine.\n\n" +
            "## À toi\n\n" +
            "Ouvre les pages d'aide officielles des deux plateformes où tu publies le plus et retrouve leur règle exacte de déclaration IA du moment. Ajoute la colonne « mention IA » à ton calendrier.\n\n" +
            "> Profites-en pour vérifier un point que presque personne ne connaît : la déclaration se fait à l'upload (une case à cocher), pas dans la légende. Le hashtag #IA dans le texte ne remplace pas l'interrupteur officiel de la plateforme.\n",
        },
        {
          id: "l23",
          title: "Deepfakes, droits et fausses preuves : les lignes rouges",
          type: "text",
          duration: "15 min",
          body:
            "## Trois interdits absolus, avant toute nuance\n\n" +
            "Ce cours t'a montré des zones grises (le droit d'auteur des sorties, les styles) où l'on avance avec prudence. Ici, c'est différent : trois pratiques sont interdites (juridiquement, contractuellement dans les CGU des outils, et moralement). Aucune stratégie de contenu ne les justifie.\n\n" +
            "**1. Le deepfake d'une personne réelle sans consentement.** Générer le visage, le corps ou la voix d'une personne identifiable sans son accord écrit : jamais. Peu importe l'intention : « c'est pour rire », « c'est de l'hommage », « ça lui fait de la pub ». Le droit à l'image et à la voix protège chaque personne, célèbre ou non ; les législations pénales se sont durcies un peu partout (en France, le code pénal sanctionne spécifiquement la diffusion de contenus générés représentant une personne sans son consentement ; plusieurs États américains protègent explicitement la voix et l'image contre le clonage). Et au-delà du droit : une marque prise une seule fois à fabriquer une personne ou une parole ne s'en remet pas.\n\n" +
            "Le corollaire pratique vu en leçon 15 : le clonage de voix, c'est **ta** voix, ou une voix avec consentement écrit et rémunération claire, ou une voix de synthèse de catalogue. Rien d'autre.\n\n" +
            "**2. La fausse preuve sociale.** Faux avis clients, faux témoignages, fausses photos « envoyées par la communauté », faux compteurs. L'IA rend ces fabrications faciles et crédibles ; la loi les a rendues explicitement illégales (interdiction des faux avis par la FTC aux États-Unis, pratiques commerciales trompeuses en Europe), et les plateformes d'avis les traquent activement. Sur le calendrier de Terra Café, le pilier « preuve » est le seul où l'IA n'entre jamais, même pas pour reformuler : un avis client se publie tel quel, fautes comprises (c'est justement ce qui le rend crédible).\n\n" +
            "**3. La désinformation fabriquée.** Événements qui n'ont pas eu lieu, fausses actualités, faux documents. Évident, mais le rappel s'impose parce que la tentation existe à petite échelle : le « chantier de la nouvelle boutique » qui n'existe pas encore, la « file d'attente » générée devant le stand. C'est de la désinformation commerciale, même mignonne.\n\n" +
            "## Le récap droit d'auteur, maintenant que tu as tout vu\n\n" +
            "La leçon 12 a posé les bases côté image ; élargissons une dernière fois à tous les médias, en trois principes à retenir :\n\n" +
            "- **Ce qui sort brut d'une machine n'a probablement pas d'auteur**, donc pas de protection, ni pour toi, ni contre toi. Ton travail humain (réécriture, montage, composition) est ce qui crée un droit. Encore une raison de faire les passes humaines de ce cours.\n" +
            "- **Ce que tu mets dedans engage ta responsabilité** : styles d'artistes vivants nommés, personnages, marques, visages, voix, paroles de chansons. La machine exécute, toi tu réponds.\n" +
            "- **La musique est le terrain le plus miné** : les voix clonées d'artistes sont la cible de toute l'industrie, et même les générateurs de musique « libre » font l'objet de contentieux sur leurs données d'entraînement. Pour sonoriser tes vidéos : les bibliothèques licenciées des plateformes ou des banques payantes. C'est réglé pour quelques euros, dors tranquille.\n\n" +
            "Et l'avertissement récurrent, une dernière fois : ce paysage juridique bouge tous les six mois. Ce cours te donne les catégories de risque et les réflexes ; pour un enjeu réel (campagne nationale, litige, gros contrat), un avocat spécialisé coûte moins cher qu'un procès.\n\n" +
            "## Le test de la une\n\n" +
            "Pour tous les cas que ni la loi ni les CGU ne tranchent clairement, Léa applique un test qui tient en une question : *si un journaliste racontait exactement comment ce contenu a été fabriqué, en une d'un article, est-ce que j'assume ?* « Torréfacteur nantais illustre son blog avec des images IA » : elle assume, elle le dit d'ailleurs elle-même. « Torréfacteur nantais génère de faux avis clients » : article de crise. Le test est grossier, mais il ne s'est jamais trompé.\n\n" +
            "## À toi\n\n" +
            "Passe ton calendrier actuel au test de la une, contenu par contenu. Pour chaque case inconfortable, note ce qui la rendrait assumable : un consentement à obtenir, une mention à ajouter, ou une case à supprimer.\n\n" +
            "> Le cas le plus fréquent découvert par cet exercice : le témoignage client « amélioré » par reformulation IA. Verdict du test : on ne touche pas aux avis. Si un avis réel est trop long, on le coupe avec « […] » : on ne le réécrit pas.\n",
        },
        {
          id: "l24",
          title: "Garder une voix humaine : ta seule défense durable",
          type: "text",
          duration: "14 min",
          body:
            "## Un paradoxe économique simple\n\n" +
            "Termine ce cours par un raisonnement d'économiste, parce qu'il décide de ta stratégie pour les années qui viennent. Quand une chose devient produisible en quantité illimitée à coût quasi nul, sa valeur marchande s'effondre. C'est exactement ce qui arrive au contenu « correct » : le post propre, le visuel joli, la voix off lisse ne valent plus rien, puisque tout le monde peut en produire mille par jour. Mécaniquement, la valeur migre vers ce qui reste rare. Et qu'est-ce qui reste rare quand le contenu est infini ? Le vérifiable, le vécu, l'assumé. En un mot : l'humain prouvé.\n\n" +
            "L'ironie est savoureuse : plus tu utilises l'IA pour produire, plus les traces d'humanité de ta marque prennent de la valeur. Les deux montent ensemble, à condition de ne jamais confondre leurs rôles.\n\n" +
            "## Ce que la machine ne fournira pas\n\n" +
            "Quatre choses restent hors de portée de n'importe quel modèle, et ce sont elles qui construisent une audience fidèle :\n\n" +
            "- **Le vécu.** Le lot bloqué en douane, la torréfaction ratée du mardi, le client qui pleure en racontant le café de son grand-père. Le modèle peut imiter la forme d'une anecdote, pas en avoir.\n" +
            "- **L'opinion coûteuse.** Dire « le café aromatisé, on n'en vendra jamais, et voilà pourquoi » fait fuir des clients et en soude d'autres. Un modèle, entraîné à ne fâcher personne, produit des positions qui ne coûtent rien, et ne rapportent rien.\n" +
            "- **La responsabilité.** Quand Terra Café se trompe, Malik signe l'excuse et le geste commercial. Personne ne veut d'une relation avec un pipeline.\n" +
            "- **La relation.** Répondre aux commentaires, aux messages, retenir le prénom d'un client fidèle. C'est lent, ça ne passe pas à l'échelle, et c'est précisément pour ça que ça compte.\n\n" +
            "D'où la règle de partage définitive de ce cours : **l'IA pour la production, l'humain pour la direction et la relation**. Le jour où tu confies la relation à un bot qui répond aux commentaires à ta place, tu économises une heure et tu dilapides l'actif que dix pipelines ne rachèteront pas.\n\n" +
            "## La transparence comme style, pas comme aveu\n\n" +
            "Beaucoup de créateurs vivent les mentions IA de la leçon 22 comme une punition. Retourne la table : assume-les comme un élément de style. « Décor imaginé par IA, café bien réel » est devenu une signature récurrente de Terra Café, et les commentaires le citent avec sympathie. La transparence sur les outils produit un effet contre-intuitif : elle **augmente** la crédibilité de tout le reste. Si la marque dit clairement quand c'est généré, alors le reste est vrai : voilà le raisonnement, silencieux mais puissant, que fait ton audience.\n\n" +
            "Concrètement, trois habitudes qui signalent l'humain sans le crier :\n\n" +
            "1. **Du réel daté et situé, chaque semaine.** Une photo brute d'atelier, un chiffre interne, un prénom. Le pilier coulisses n'est pas un pilier comme les autres : c'est la preuve de vie de la marque.\n" +
            "2. **Une signature qui engage quelqu'un.** Les posts d'opinion de Terra Café sont signés Malik, à la première personne. On ne discute pas avec un logo.\n" +
            "3. **Des imperfections laissées en place.** La lumière moyenne de la vraie photo du mardi matin, l'avis client avec sa faute. Le trop-propre est devenu suspect ; le vrai a du grain.\n\n" +
            "## Le mot de la fin\n\n" +
            "Reprends la liste M/C de la toute première leçon. Tout ce qui était marqué M (décliner, reformater, illustrer, sous-titrer, programmer), tu sais maintenant le déléguer à la machine, avec un brief, une boucle, un portail qualité et des mentions en règle. Ce que tu as gagné, ce ne sont pas des posts : c'est du temps. La seule vraie question de fin de cours, c'est où tu vas le réinvestir. Chez Léa, la réponse tient en une ligne de son audit de mars : deux heures de production économisées par semaine, deux heures ajoutées aux réponses clients et aux visites de fermes, et c'est le contenu issu de ces visites qui a fait ses trois meilleurs posts de l'année. La machine a produit ; l'humain a eu quelque chose à dire. Tiens cet ordre-là, et tu peux publier sans crainte pendant les dix prochaines années d'outils nouveaux.\n\n" +
            "> Trois points à garder de toute la partie 6 : le réaliste se déclare (dans le doute, marque) ; les personnes réelles et la preuve sociale ne se fabriquent jamais ; et la transparence n'est pas un aveu, c'est un style : celui des marques qui durent.\n",
        },
        {
          id: "l25",
          title: "Quiz : éthique, droit et authenticité",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q23",
              prompt:
                "Quel critère commun les grandes plateformes utilisent-elles pour exiger une déclaration IA ?",
              options: [
                "Tout usage d'IA, y compris un script écrit avec un assistant",
                "Le réalisme : un contenu qui pourrait être pris pour la réalité doit être déclaré, une illustration manifestement stylisée non",
                "La durée : seules les vidéos de plus de 60 secondes sont concernées",
                "Le nombre d'abonnés du compte",
              ],
              correctIndex: 1,
              explanation:
                "La question des plateformes n'est pas « as-tu utilisé l'IA ? » mais « peut-on prendre ce contenu pour la réalité ? ». Scène photoréaliste inventée, voix synthétique réaliste : on déclare. Illustration stylisée, retouche légère, texte assisté : pas d'obligation à ce jour. Et dans le doute, on marque.",
            },
            {
              id: "q24",
              prompt:
                "Un client laisse un avis élogieux mais mal écrit. Léa veut le faire reformuler par l'IA avant publication. Verdict du cours ?",
              options: [
                "OK si le sens général est conservé",
                "OK si on ajoute la mention « avis reformulé »",
                "Non : on ne touche pas à la preuve sociale. Un avis se publie tel quel, au pire coupé avec « […] », jamais réécrit",
                "OK car la FTC n'interdit que les avis entièrement inventés",
              ],
              correctIndex: 2,
              explanation:
                "La preuve sociale est le seul pilier où l'IA n'entre jamais : un avis réécrit n'est plus le témoignage du client, et les imperfections sont précisément ce qui le rend crédible. Les régulateurs (FTC, DGCCRF) sanctionnent les pratiques trompeuses bien au-delà des seuls avis inventés de toutes pièces.",
            },
            {
              id: "q25",
              prompt:
                "Laquelle de ces utilisations du clonage de voix est légitime ?",
              options: [
                "Cloner la voix d'un influenceur connu pour une parodie publicitaire",
                "Cloner ta propre voix pour produire tes voix off sans t'enregistrer à chaque fois",
                "Cloner la voix d'un chanteur pour la musique de fond de tes Reels",
                "Cloner la voix d'un concurrent pour un comparatif « ce qu'il pourrait dire »",
              ],
              correctIndex: 1,
              explanation:
                "Ta voix t'appartient : la cloner pour ta production est l'usage prévu et légitime. Toutes les autres options utilisent la voix d'une personne réelle sans consentement (droit à l'image et à la voix, lois pénales renforcées, et CGU des outils : triple interdit, parodie ou pas).",
            },
            {
              id: "q26",
              prompt:
                "Pourquoi la valeur du contenu « correct mais générique » s'effondre-t-elle à mesure que l'IA se généralise ?",
              options: [
                "Parce que les plateformes suppriment le contenu généré",
                "Parce que ce qui devient produisible en quantité illimitée à coût quasi nul perd sa rareté, et la valeur migre vers ce qui reste rare : le vécu, le vérifiable, l'assumé",
                "Parce que les détecteurs d'IA bloquent sa diffusion",
                "Parce que les consommateurs n'aiment pas la technologie",
              ],
              correctIndex: 1,
              explanation:
                "C'est un raisonnement d'offre et de demande : l'abondance détruit la valeur du « correct ». Ce qui ne s'imite pas (vécu daté, opinion coûteuse, responsabilité, relation), devient l'actif différenciant. D'où la règle finale du cours : l'IA pour la production, l'humain pour la direction et la relation.",
            },
            {
              id: "q27",
              prompt:
                "Qu'est-ce que le « test de la une » appliqué à un contenu ?",
              options: [
                "Vérifier si le contenu peut faire la une des tendances de la plateforme",
                "Se demander si on assumerait qu'un journaliste raconte en une d'article exactement comment ce contenu a été fabriqué",
                "Tester le contenu sur un petit échantillon d'audience avant publication",
                "Vérifier que le titre tient sur une ligne",
              ],
              correctIndex: 1,
              explanation:
                "C'est le garde-fou pour les zones que ni la loi ni les CGU ne tranchent : si le récit exact de la fabrication te met en position de crise (« marque génère de faux avis »), la pratique est mauvaise, quelle que soit sa légalité technique du moment. Grossier, mais fiable.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
