# Conception des cours gamifiés asynchrones — doc de décision

Référence pour décider quoi coder et quels cours écrire. Tout est benchmarké sur Duolingo, Brilliant, Codecademy, freeCodeCamp, Scrimba, Boot.dev, Exercism, Khan Academy, Coursera, DataCamp + littérature (Bloom, Ebbinghaus, SDT, Prospect Theory, SM-2/FSRS). Sources citées inline.

État du code actuel (pour ancrer les recos) : `Course → CoursePart → Lesson(type: video|text|quiz)`, `LessonProgress`, `QuizAttempt`. Pas encore de table de gamification. SQLite en dev, Postgres en prod (pm2:3003). Les recos ci-dessous étendent ce modèle, elles ne le remplacent pas.

---

## 1. Architecture d'un cours async excellent

### La hiérarchie qui marche

Tout le monde converge sur 4 niveaux. Les noms changent, la structure non.

| Niveau | Duolingo | Khan | Coursera | DataCamp | Codecademy | Notre modèle |
|---|---|---|---|---|---|---|
| Parcours | Section | Course | Specialization | Career/Skill Track | Career/Skill Path | (à ajouter : `Track`) |
| Module | Unit | Unit | Module (≈1 semaine) | Course | Course/Module | `CoursePart` |
| Leçon | Lesson | Lesson | Lesson | Chapter | Lesson | `Lesson` |
| Unité interactive | Exercice | Exercise/Video/Article | Video/Quiz/Assignment | Video+Exercise | Checkpoint | (à ajouter : `LessonUnit`) |

Décision : le maillon manquant dans notre schéma est **l'unité interactive sous la leçon**. Aujourd'hui une `Lesson` = un bloc monolithique (`body` texte OU `questions` quiz OU vidéo). Il faut casser la leçon en une **séquence ordonnée d'unités hétérogènes** (voir §2). C'est ce découpage qui rend une leçon « active » plutôt que « une page qu'on scrolle ».

Au-dessus, ajouter un niveau **Track** (parcours-métier qui enchaîne plusieurs cours) : c'est le format qui vend chez Coursera (Specialization 4-6 cours, 100h+) et DataCamp (Career Track 60-100h, certification finale). Un cours isolé se termine et l'utilisateur part ; un track donne une destination (« devenir X ») et retient sur des mois.

### Granularité d'une leçon

La donnée la plus solide du dossier : Guo, Kim & Rubin (2014, *Proc. ACM Learning@Scale*), 6,9 M de sessions vidéo edX → l'engagement plafonne à **≤ 6 minutes** et s'effondre au-delà de 12 min (au-delà, moyenne ~3 min vus, < 25 % du contenu). https://up.csail.mit.edu/other-pubs/las2014-pguo-engagement.pdf

Ce que font les meilleurs :
- **Duolingo** : leçon de 3-7 min, une poignée d'exercices, objectif quotidien réglable 5/10/15/20 min.
- **Brilliant** : une leçon = **un seul concept**, ~5-15 min, résolution guidée + feedback instantané à chaque réponse.
- **DataCamp** : vidéo courte d'un concept → immédiatement 2-3 exercices in-browser (« learn then apply » en secondes).
- **Khan** : chaque skill est gardé derrière un exercice de 4-7 questions, pas derrière une vidéo passive.

Règle pour nous :
- **1 leçon = 1 objectif d'apprentissage, 5-10 min, 3 à 8 unités interactives.**
- Contenu instructif (texte/vidéo) en segments de **≤ 6 min**. Si un concept dépasse, on scinde en deux leçons.
- Jamais de leçon 100 % passive : toute leçon se termine par au moins une unité de récupération active (quiz, code, flashcard).

### Ratio théorie / pratique

Les plateformes efficaces sont massivement orientées pratique. freeCodeCamp Full Stack : 513 lectures courtes vs 83 labs + 64 workshops, mais ce sont les 5 projets par certif qui gardent le blocage. Boot.dev et Codecademy : split-screen « lis à gauche, code à droite », lecture minimale puis action. DataCamp interleave systématiquement vidéo courte + plusieurs exercices.

Le socle scientifique = **testing effect / retrieval practice** (effets medium-to-large sur la rétention long terme, surtout avec feedback ; https://cirl.etoncollege.com) : se souvenir activement bat relire. Donc :

**Cible : ~30 % exposition, ~70 % pratique active** (récupération, application, résolution de problème), avec feedback immédiat à chaque tentative. C'est la ligne Brilliant/DataCamp/Khan, pas la ligne « regarder 40 min de vidéo » de la MOOC classique.

Ajouter deux principes de séquençage, gratuits à implémenter :
- **Interleaving** : dans les révisions, mélanger les types de skills plutôt que blocs homogènes (meilleur transfert long terme, systematic review JACR 2023).
- **Espacement** : une révision distribuée bat le bachotage (Cepeda 2006). C'est ce que sert la §3 spaced repetition.

---

## 2. Types d'unités de leçon interactives à supporter

Chaque leçon devient une séquence d'unités typées. Modèle proposé : une table `LessonUnit { id, lessonId, order, type, payload(JSON), ... }` où `type` est un enum. Ordre de priorité d'implémentation en dernière colonne.

| Type d'unité | Quand l'utiliser | Rôle pédagogique | Priorité |
|---|---|---|---|
| **Texte riche / concept** | Introduire une notion, un exemple concret, un schéma | Exposition. Court (≤ 6 min de lecture). Le « 30 % théorie » | MVP |
| **Vidéo / screencast** | Démo, geste, intuition visuelle | Exposition. Scrimba montre qu'une vidéo *interactive* (pause + édite le code) bat la vidéo passive | MVP (vidéo simple) / v2 (interactif) |
| **QCM (choix multiple)** | Vérifier compréhension d'un concept juste vu | Retrieval practice de base, correction immédiate + explication du *pourquoi* | MVP |
| **Vrai / Faux** | Lever une idée fausse fréquente, rythmer | Retrieval rapide, faible friction, bon pour enchaîner | MVP |
| **Texte à trous (fill-in-the-blank)** | Vocabulaire, syntaxe, définitions, formules | Récupération plus exigeante que le QCM (production vs reconnaissance) | MVP |
| **Glisser-déposer / appariement** | Associer terme↔définition, ordonner des étapes, classer | Bon pour relations et séquences ; ludique sans être gadget | v2 |
| **Exercice de code auto-corrigé** | Tout cours technique | Le cœur de Codecademy/fCC/Boot.dev/Exercism. Application réelle. Deux modèles d'auto-correction (voir ci-dessous) | v2 (indispensable pour les cours dev) |
| **Flashcards à répétition espacée** | Mémorisation durable (vocabulaire, définitions, raccourcis, faits) | Combat la courbe d'oubli d'Ebbinghaus. Alimente le moteur SM-2 de la §3 | v2 |
| **Checkpoint / projet** | Fin de module ou de cours | Synthèse, transfert, preuve de compétence. freeCodeCamp = 5 projets gardent chaque certif ; Boot.dev = vrais builds (serveur HTTP, CLI) | v2/v3 |
| **Étude de cas / scénario** | Cours non techniques (marketing, finance, produit) | Application contextualisée, décision sous contrainte réaliste. L'équivalent « projet » pour les domaines non-code | v3 |

### Auto-correction du code : deux modèles (choisir selon le type de leçon)

- **Diff sur Run** (Codecademy) : on compare la sortie / solution attendue au clic « Run », étape par étape. Simple, adapté aux étapes très guidées. Pas de sandbox lourde.
- **Suite de tests unitaires jusqu'au vert** (freeCodeCamp, Boot.dev, Exercism) : l'apprenant code jusqu'à ce que tous les tests passent. Scale aux projets libres. Nécessite un runner sandboxé.

Reco : commencer par le modèle **diff/tests en JS exécuté côté client** (le plus léger, zéro infra sandbox serveur au départ), passer à un runner conteneurisé quand on ajoute Python/Go.

### Scaffolding (tous types)

Brilliant, Codecademy et Boot.dev convergent : à chaque unité difficile, prévoir **Indice → Révision du concept → Voir la solution**, avec un coût. Boot.dev fait payer : demander au tuteur IA = -50 % XP, voir la solution = coût encore plus élevé. DataCamp : « Take Hint » retire du XP, « Show Answer » retire tout le XP de l'exercice. Ce coût préserve l'effort de récupération (sinon l'apprenant révèle la réponse par réflexe et le testing effect s'évapore).

---

## 3. Mécaniques de gamification — le pourquoi, et ce qui marche vraiment

### Le principe directeur (à ne pas rater)

La théorie de l'auto-détermination (Deci & Ryan) : la motivation durable vient de 3 besoins — **autonomie, compétence, relatedness**. Le piège documenté est l'**effet de surjustification** (Deci 1971) : ajouter une récompense externe à une activité déjà intrinsèquement motivante *réduit* la motivation intrinsèque ; quand la récompense ralentit, l'engagement s'effondre. Une méta-analyse (Springer 2023) confirme : la gamification améliore motivation, autonomie et relatedness, mais a un impact **minimal sur la compétence** réelle. https://link.springer.com/article/10.1007/s11423-023-10337-7

Conséquence pratique : **la gamification doit servir l'apprentissage, pas le remplacer.** Le contre-exemple, c'est Duolingo lui-même — « exceptionnellement engageant mais modérément efficace » ; les streaks poussent à « speed-run des leçons faciles pour protéger le streak », ce qui déclenche la rétention *sans l'apprentissage* (https://dev.to/pocket_linguist). Le bon modèle est Brilliant : gamification volontairement sobre (streak + XP + niveaux + badges légers) subordonnée à une pédagogie active.

Effets mesurés (méta-analyses) : cognitif g≈.49, motivationnel g≈.36, comportemental g≈.25 — significatifs mais **petits**, et le prédicteur n°1 n'est pas la présence de points/badges mais **l'alignement des mécaniques sur des objectifs d'apprentissage clairs**. https://pmc.ncbi.nlm.nih.gov/articles/PMC8037535/

### Mécanique par mécanique

**XP / points** — *Efficace, à mettre en premier.* C'est le fil unique qui relie tout (Duolingo : le même XP alimente niveaux ET classement). Règle anti-triche à copier de DataCamp/Boot.dev : XP indexé sur la **difficulté**, réduit si on prend un indice, annulé si on révèle la solution ou si on refait une leçon déjà validée. On récompense l'effort de récupération, pas le clic.

**Niveaux** — *Efficace, dérivé du XP.* Donne une échelle de progression lisible (Brilliant fait monter en niveaux de difficulté qui débloquent du contenu). Coût d'implémentation quasi nul une fois le XP posé.

**Streaks quotidiens** — *Le levier de rétention le plus fort ET le plus dangereux.* Base : loss aversion (Prospect Theory, une perte pèse ~2× un gain). Data Duolingo : au-delà de 7 jours, un streak freeze fait passer de 11,6 à 17,2 jours moyens (+48 %). MAIS : ~40 % des users qui cassent un streak de 60+ jours abandonnent sous 2 semaines (https://uxmag.com), et la « streak anxiety » est un dark pattern documenté. Mitigations obligatoires : **streak freeze / jours de grâce**, objectif atteignable, et sérieusement envisager un **streak hebdomadaire plutôt que quotidien** (les streaks plafonnés type reset-7-jours retiennent mieux à long terme sans l'anxiété : https://yukaichou.com). Ne jamais notifier « ton streak va mourir » de façon culpabilisante.

**Hearts / vies** — *Contre-productif par défaut, à éviter au lancement.* Même base loss-aversion mais génère de la frustration-churn, et Duolingo l'a lui-même remplacé en 2025 par un système « énergie » très mal reçu (perçu comme un levier de monétisation). Pour une plateforme qui démarre, les vies punissent l'erreur — or l'erreur est le moment d'apprentissage. À écarter.

**Badges / achievements** — *Efficace si tiéré et rare.* Data Duolingo : compléter un achievement à J1 → 33,4 % de rétention 14 jours vs 20,4 % ; et la rétention monte avec la difficulté du badge (32 % pour le plus facile → 74 % pour le plus dur). Khan tiére Meteorite→Moon→Earth→Sun→Black Hole. Donc : badges à **paliers de rareté**, ancrés sur de vrais accomplissements (finir un module, 7 jours de streak, 100 % à un test de maîtrise), pas sur des micro-actions.

**Barres de progression** — *Toujours, gratuit, très efficace.* Deux effets exploitables : **goal-gradient** (on accélère près du but ; Kivetz 2006) et surtout **endowed progress** (Nunes & Drèze 2006 : un départ pré-rempli a ~doublé le taux de complétion pour un effort identique). Règle : **ne jamais afficher une barre à 0 %.** Créditer une amorce (« profil créé : 1/5 »). Barres partout : leçon, module, cours, track.

**Leaderboards / ligues** — *À double tranchant, v2 pas MVP.* Un leaderboard absolu démotive tout le monde sauf le top ~20 % (embarras des derniers, https://cluelabs.com). Le fix validé : **ligues relatives par cohortes de niveau** (Duolingo : ~30 users, 10 tiers Bronze→Diamond, promotion/relégation par tier). Le ranking *relatif* maintient la motivation à toutes les positions ; l'absolu ne booste que le haut (https://sciencedirect S1041608024001651). Si on en met, on copie le modèle ligue segmentée, pas le classement global.

**Quêtes / défis** — *Efficace pour varier et créer du rythme.* Duolingo : daily/weekend/friend quests → points vers un badge mensuel. Attention au réglage : Duolingo a fâché ses users en montant les exigences mensuelles à 50-100 quêtes. Garder des objectifs atteignables et rotatifs.

**Déblocage progressif (mastery gating)** — *Efficace, pédagogiquement fondé.* Exercism : arbre de dépendances de concepts (« apprends les Strings pour débloquer TwoFer »). Khan : passage Proficient→Mastered seulement via un test d'unité. C'est du mastery learning (Bloom, voir §4) déguisé en jeu. À implémenter comme condition de progression, pas comme simple carotte.

**Répétition espacée (SM-2)** — *Le meilleur ROI d'apprentissage réel de la liste.* C'est la seule mécanique qui attaque directement la courbe d'oubli. Détail algo ci-dessous. À poser dès qu'on a des flashcards.

**Célébrations** — *Gratuit, à faire.* Animation à la complétion, confetti, son de réussite, récap « tu as appris X, Y, Z ». Renforce la compétence perçue (SDT). Peu coûteux, fort effet ressenti.

### Priorisation pour une plateforme qui démarre

- **À poser en premier (MVP)** : XP indexé sur la difficulté, niveaux, barres de progression avec endowed progress, badges tiérés, célébrations, objectif quotidien réglable.
- **Juste après (v2)** : streak (hebdo de préférence, avec freeze), répétition espacée SM-2, mastery gating.
- **Plus tard (v3), avec prudence** : ligues relatives par cohortes, quêtes. 
- **À éviter** : hearts/vies, leaderboard absolu global, notifications culpabilisantes, récompenses variables type loot-box (dark pattern, https://arxiv.org/pdf/2405.06478).

### Répétition espacée : implémenter SM-2 (spec exacte)

Pour un build from-scratch sans historique de reviews, **SM-2 est le bon choix** : ~15 lignes, déterministe, aucune donnée d'entraînement, éprouvé. Leitner (boîtes) est plus simple mais rigide ; FSRS est plus précis (~20-30 % de reviews en moins) mais nécessite le modèle DSR + un optimizer entraîné sur un corpus de reviews — ne paie qu'à l'échelle. Commencer SM-2, migrer FSRS plus tard si le volume le justifie.

État par carte : `repetitions n`, `easinessFactor EF` (init 2.5, plancher 1.3), `interval I` (jours). Note de qualité `q` 0-5.

```
SM2(q, n, EF, I):
    if q >= 3:                      # réponse correcte
        if n == 0:   I = 1
        elif n == 1: I = 6
        else:        I = round(I * EF)
        n = n + 1
    else:                           # échec
        n = 0
        I = 1
    EF = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    if EF < 1.3: EF = 1.3
    return n, EF, I   # prochaine review = aujourd'hui + I jours
```

Deltas EF : q=5 → +0.10, q=4 → 0 (inchangé), q=3 → −0.14, q=0 → −0.80. Seule une récupération parfaite augmente l'aisance. Source : https://super-memory.com/english/ol/sm2.htm

Simplification UI façon Anki : 4 boutons (Again/Hard/Good/Easy) mappés sur q, plutôt que 6 grades. Table à ajouter : `Flashcard` + `FlashcardReview { userId, cardId, n, ef, interval, dueAt }`, un job/journalier qui sert les cartes `dueAt <= now`.

---

## 4. Boucles de rétention et progression

**Onboarding** — le premier jour prédit tout (Duolingo : achievement à J1 → +64 % de rétention 14 j). Objectif : amener l'utilisateur à **finir sa première leçon en < 5 min**, sans friction (choix du parcours, objectif quotidien, première leçon facile qui garantit une réussite + une célébration). Créditer immédiatement une barre de progression non-vide (endowed progress).

**Objectif quotidien** — réglable (Duolingo : 5/10/15/20 min = Casual/Regular/Serious/Intense). L'utilisateur choisit → autonomie (SDT). Le « jour compte » doit avoir un seuil clair (DataCamp : ≥ 250 XP/jour valide le streak).

**Rappels** — notification/e-mail au moment où l'objectif du jour n'est pas atteint, formulée en positif (« 5 min pour garder ta progression »), jamais en menace. Respecter un cap de fréquence.

**Sentiment de progression** — barres à tous les niveaux, XP visible, historique de streak, carte du parcours qui montre le chemin parcouru et à venir (Duolingo Path, Exercism concept tree). Récap de fin de leçon (« tu maîtrises maintenant… »).

**Courbe de difficulté** — montée graduelle *dans* un topic (Brilliant : les problèmes s'intensifient, avec indices au point de blocage). Éviter le piège Duolingo (algo qui sous-pousse vers le difficile parce que l'erreur fait baisser les métriques d'engagement) : accepter que l'apprenant échoue, c'est là qu'il apprend. Interleaving dans les révisions.

**Mastery learning** — le plus gros levier pédagogique du dossier. Bloom (1984, effet 2-sigma) : maîtrise + tutorat rapprochent l'élève moyen de ~2 écarts-types (au-dessus de ~98 % du groupe contrôle). Mécanique Khan : Attempted → Familiar (70-85 %) → Proficient (100 % sur exercice/quiz) → Mastered (100 % sur test d'unité), avec « Mastery Challenges » de 6 questions qui recyclent 3 skills. À copier : **on ne débloque la suite qu'en prouvant la maîtrise** (test d'unité gardé), et on renvoie vers du corrective content en cas d'échec, plutôt que de laisser passer un trou de connaissance.

La boucle complète à faire tourner : *onboarding → objectif quotidien → leçon active (retrieval) → feedback + XP + célébration → progression visible → gate de maîtrise en fin de module → révision espacée des acquis → rappel → jour suivant.*

---

## 5. Recommandation concrète pour NOUS

### Architecture de cours à implémenter

Étendre le schéma existant, dans cet ordre :

1. **Casser `Lesson` en unités.** Ajouter `LessonUnit { id, lessonId, order, type, payload Json, xp Int }`. `type` enum : `TEXT | VIDEO | MCQ | TRUE_FALSE | FILL_BLANK | MATCH | CODE | FLASHCARD | CHECKPOINT | CASE_STUDY`. Migrer l'actuel `Lesson.type/body/questions` vers des unités. C'est le changement structurant n°1 : sans lui, pas de leçon « active ».
2. **Ajouter le niveau `Track`** au-dessus de `Course` (parcours-métier qui enchaîne des cours + une preuve/certif finale). Vend l'abonnement, retient sur des mois.
3. **Gating de maîtrise** : un champ sur `CoursePart` (ex. `masteryTestUnitId`) + logique « module suivant verrouillé tant que le test d'unité n'est pas réussi ».

### Set de gamification à implémenter

**MVP (cette semaine) :**
- Tables : `UserStats { userId, totalXp, level, currentStreak, longestStreak, lastActiveDay, dailyGoalMinutes }`, `Badge`, `UserBadge`, `DailyActivity { userId, day, xpEarned }`.
- Logique : XP par unité indexé sur difficulté (réduit sur indice, annulé sur solution/refait) ; niveau dérivé du XP ; barres de progression partout avec **amorce non-nulle** ; badges tiérés sur accomplissements réels ; célébration de fin de leçon ; objectif quotidien réglable.

**v2 :**
- Streak (hebdomadaire de préférence) + streak freeze ; répétition espacée SM-2 (`Flashcard` + `FlashcardReview`) ; mastery gating branché.

**v3 (avec garde-fous) :**
- Ligues relatives par cohortes de ~30 (jamais de leaderboard global absolu) ; quêtes quotidiennes/hebdo rotatives et atteignables.

**On ne fait pas :** hearts/vies, notifications culpabilisantes, récompenses aléatoires type loot-box.

### 6-8 thèmes de cours « très complets » à écrire

Choisis pour : demande réelle, bonne monétisation, et surtout **format qui se prête au découpage micro + pratique auto-corrigée + flashcards** (ce que notre moteur sait faire). Priorité de production en tête.

1. **Développement web moderne (JS/React/Next.js)** — demande énorme, se prête parfaitement au code auto-corrigé façon Codecademy/Boot.dev, projets de fin (portfolio, app CRUD). Track « de zéro à dev full-stack » = produit d'appel. Monétisation forte (reconversion, freelance).
2. **IA appliquée & prompt engineering / build avec les LLM** — sujet le plus chaud du marché 2025-26, peu de contenu structuré de qualité. Unités : concept + QCM + exercices « écris/corrige ce prompt » (auto-évaluables) + études de cas. Public large (pas que devs). Excellent potentiel de prix premium.
3. **Marketing digital & growth (SEO, ads, funnels, analytics)** — demande pro constante, se prête aux études de cas et scénarios de décision. Aligné avec ton propre savoir-faire (réutilisable comme contenu d'autorité pour la LLC).
4. **Finance personnelle & investissement** — demande de masse, très « flashcards + quiz » (concepts, ratios, définitions), études de cas (budget, allocation). Fort intérêt grand public, faible concurrence de qualité en FR.
5. **Data & Python pour l'analyse** — modèle DataCamp éprouvé (vidéo courte → exercice code), débouché pro clair. Track « analyste data » monétisable.
6. **Productivité & systèmes personnels (deep work, GTD, outils IA)** — court, actionnable, parfait pour micro-leçons + checklists-checkpoints ; faible coût de production, bon pour l'acquisition top-of-funnel.
7. **Design UX/UI & no-code** — visuel, projets concrets, demande reconversion forte ; se prête aux unités d'appariement/glisser-déposer et à l'étude de cas.
8. **Anglais professionnel / communication** (bonus, si on vise le bilingue) — le terrain de jeu historique de Duolingo : flashcards SM-2 + texte à trous + audio. Marché immense, mais production plus lourde (audio) → à garder pour plus tard.

Ordre de production conseillé pour cette nuit : commencer par **(1) dev web** et **(2) IA/prompt engineering** — ce sont ceux qui exploitent le mieux le code auto-corrigé et le sujet le plus porteur, et ils servent de vitrine à la qualité du moteur. **(3) marketing** et **(4) finance perso** en suivant, car ils tournent surtout sur QCM/flashcards/études de cas (rapides à écrire, pas de sandbox code requise) — donc livrables même avant que l'unité `CODE` soit codée.

### Chemin critique de code (ce qu'il faut coder avant d'écrire les cours)

1. `LessonUnit` + rendu séquentiel des unités MCQ / TRUE_FALSE / FILL_BLANK / TEXT (couvre déjà 4 des 8 types, zéro sandbox) → permet d'écrire les cours 3/4/6 immédiatement.
2. `UserStats` + XP + barres + célébration (la boucle de feedback minimale).
3. Unité `FLASHCARD` + moteur SM-2.
4. Unité `CODE` (diff/tests en JS côté client d'abord) → débloque les cours 1/2/5.
5. Streak + badges + mastery gating.
6. Track + ligues (v3).
