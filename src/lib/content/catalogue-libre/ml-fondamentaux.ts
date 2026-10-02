import type { FreeCourse } from "./types";

const course: FreeCourse = {
  "slug": "ml-fondamentaux",
  "title": "Machine Learning : les fondamentaux",
  "tagline": "Comprenez comment une machine apprend à partir de données : régression, classification, réseaux de neurones et modèles de langue, avec des exemples que vous pouvez calculer à la main.",
  "description": "Un parcours pour comprendre le machine learning sans y avoir jamais touché. Vous partez d'un nuage de points et d'une droite qui s'ajuste dessus, vous apprenez à mesurer l'erreur d'un modèle et à la corriger, puis vous avancez vers la classification (matrice de confusion, précision, rappel, ROC), les réseaux de neurones, les embeddings et les grands modèles de langue. Chaque notion s'appuie sur un petit jeu de données calculable à la main, pas sur une formule abstraite à admettre. Le cours se termine sur la mise en production et les questions d'équité, deux sujets que les cours d'introduction sautent trop souvent.",
  "category": "Intelligence Artificielle",
  "level": "Débutant",
  "instructor": "Équipe OmniLearn",
  "hours": 7,
  "rating": 0,
  "learners": 0,
  "accent": "#eab308",
  "image": "/covers/ml-fondamentaux.webp",
  "language": "Français",
  "software": "Un navigateur ; Python est facultatif, seulement si vous voulez reproduire les calculs vous-même",
  "prerequisites": [
    "Bases d'algèbre de niveau lycée (résoudre une équation du premier degré, lire une droite y = a x + b)",
    "Savoir lire un graphique simple (nuage de points, courbe)",
    "Aucune expérience en programmation requise"
  ],
  "summary": [
    "Partie 1 : Régression linéaire, la brique de base du machine learning",
    "Partie 2 : Classification, régression logistique et métriques (précision, rappel, ROC, AUC)",
    "Partie 3 : Données numériques et catégorielles, généralisation et surapprentissage",
    "Partie 4 : Réseaux de neurones et embeddings",
    "Partie 5 : Modèles de langue, des n-grammes aux grands modèles actuels",
    "Partie 6 : Mise en production, biais et équité"
  ],
  "objectives": [
    "Expliquer ce qu'un modèle de régression linéaire calcule réellement et comment il apprend",
    "Choisir et interpréter une fonction de perte (L1, L2, MAE, MSE)",
    "Lire une matrice de confusion et calculer précision, rappel et F1-score à la main",
    "Comprendre à quoi sert une courbe ROC et ce que mesure l'AUC",
    "Distinguer donnée numérique et donnée catégorielle, et repérer un surapprentissage",
    "Expliquer à quoi servent les réseaux de neurones et les embeddings",
    "Décrire comment un modèle de langue prédit le prochain mot, des n-grammes aux LLM",
    "Citer les questions à se poser avant de mettre un modèle en production, y compris sur les biais"
  ],
  "skills": [
    "Régression linéaire et logistique",
    "Lecture d'une matrice de confusion",
    "Calcul de précision, rappel, F1-score, ROC et AUC",
    "Notions de réseaux de neurones et d'embeddings",
    "Bases des modèles de langue (tokens, n-grammes, contexte)",
    "Repères de mise en production et d'équité algorithmique"
  ],
  "contentTypes": [
    "Leçons écrites avec exemples chiffrés",
    "Tableaux de calcul pas à pas",
    "Exercices corrigés",
    "Quiz interactifs"
  ],
  "source": {
    "name": "Machine Learning Crash Course (Google)",
    "url": "https://developers.google.com/machine-learning/crash-course",
    "license": "CC-BY-4.0",
    "version": "consulté le 2026-09-25"
  },
  "parts": [
    {
      "id": "p1",
      "title": "Régression linéaire : premiers pas",
      "lessons": [
        {
          "id": "l1",
          "title": "Sources, licence et attestation",
          "type": "text",
          "duration": "5 min",
          "isFree": true,
          "body": "## Un cours indépendant, adapté d'une source ouverte\n\nCe cours est publié par OmniLearn, sans affiliation ni relecture ni approbation de Google. Avant de commencer, voici d'où vient le contenu et ce que prouve (ou non) votre attestation de fin de cours.\n\n## Attribution\n\nCe cours adapte des notions et des exemples du **Machine Learning Crash Course**, publié par **Google**.\n\n- Source : [developers.google.com/machine-learning/crash-course](https://developers.google.com/machine-learning/crash-course)\n- Licence du texte original : [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)\n- Version consultée : 25 septembre 2026\n\nCe que nous avons fait à partir de cette source : réécriture complète des explications avec un ton propre à OmniLearn, réorganisation en 6 parties et 20 leçons, traduction en français, anglais et arabe, ajout de quiz et d'exercices corrigés, suppression des images et schémas interactifs d'origine.\n\n> **À retenir**\n>\n> La licence CC BY 4.0 autorise cette adaptation à condition de créditer la source. Elle ne dit rien du statut de ce cours-ci : ce texte est une œuvre d'OmniLearn, non republiée sous CC BY 4.0.\n\n## Le piège sur cette licence\n\nUne confusion revient souvent : croire que CC BY 4.0 interdit un usage commercial, comme le ferait une licence portant la mention « NC » (non commercial). Ce n'est pas le cas : CC BY 4.0 autorise l'usage commercial du texte original, y compris dans un cours payant, à la seule condition de créditer la source. Le crédit ci-dessus n'est donc pas une formalité optionnelle, c'est la condition qui rend cette adaptation légale.\n\n## Ce que l'attestation ne dit pas\n\nÀ la fin de ce cours, OmniLearn peut vous délivrer une attestation, qui confirme uniquement que vous avez terminé les leçons et les quiz de ce cours sur cette plateforme. Elle ne constitue en aucun cas une certification Google, ni un diplôme, ni une reconnaissance officielle délivrée par un tiers : aucun organisme externe ne valide le contenu de ce parcours. Si vous visez une certification reconnue, Google Cloud fait passer ses propres examens, par exemple Professional Machine Learning Engineer, sans aucun lien avec ce cours.\n\n## À vous de jouer\n\nAvant de continuer, relisez les deux points ci-dessus : la source (Google, CC BY 4.0, lien et modifications listées) et la nature de l'attestation (preuve de progression sur OmniLearn, pas une certification).\n\n> Correction : il n'y a pas de bonne ou de mauvaise réponse ici, seulement deux faits à avoir en tête avant d'apprendre : d'où vient le contenu, et ce que prouve (ou ne prouve pas) votre attestation.\n\n*Vérifié le 27 septembre 2026 sur la page de licence Creative Commons BY 4.0 (creativecommons.org/licenses/by/4.0) et la page Machine Learning Crash Course de Google Developers.*",
          "i18n": {
            "en": {
              "title": "Sources, license and attestation",
              "body": "## An independent course, adapted from an open source\n\nThis course is published by OmniLearn, with no affiliation, review, or endorsement from Google. Before you start, here is where the content comes from and what your end-of-course attestation does, and does not, mean.\n\n## Attribution\n\nThis course adapts concepts and examples from the **Machine Learning Crash Course**, published by **Google**.\n\n- Source: [developers.google.com/machine-learning/crash-course](https://developers.google.com/machine-learning/crash-course)\n- License of the original text: [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)\n- Version consulted: September 25, 2026\n\nWhat we did: fully rewrote the explanations with OmniLearn's own structure and voice, reorganized the material into 6 parts and 20 lessons, wrote the course in French, English and Arabic, added quizzes and worked exercises, removed the original images and interactive widgets.\n\n> **Key takeaways**\n>\n> CC BY 4.0 allows this kind of adaptation as long as the source is credited. It says nothing about the status of this course itself: the text you are reading here is an OmniLearn work, not republished under CC BY 4.0.\n\n## The trap in this license\n\nA common mix-up: assuming CC BY 4.0 blocks commercial use, the way an \"NC\" (non-commercial) license would. It does not: CC BY 4.0 allows commercial use of the original text, including inside a paid course, on one condition, crediting the source. The credit above is not an optional courtesy; it is the condition that makes this adaptation legal.\n\n## What the attestation does not say\n\nAt the end of this course, OmniLearn may issue you an attestation, which confirms only that you completed the lessons and quizzes of this course on this platform. It is not a Google certification, not a diploma, and not an official recognition of skills delivered by any third party: no outside organization validates the content of this path. If you want a recognized certification, Google Cloud runs its own exams, such as Professional Machine Learning Engineer, with no link to this course.\n\n## Your turn\n\nBefore moving on, reread the two points above: the source (Google, CC BY 4.0, link and listed changes) and the nature of the attestation (proof of progress on OmniLearn, not a certification).\n\n> Answer: there is no right or wrong answer here, just two facts to keep in mind before you start learning: where the content comes from, and what your attestation does, and does not, prove.\n\n*Checked on September 27, 2026 against the Creative Commons BY 4.0 license page (creativecommons.org/licenses/by/4.0) and Google Developers' Machine Learning Crash Course page.*"
            },
            "ar": {
              "title": "المصادر والترخيص والإفادة",
              "body": "## كورس مستقل، مقتبس من مصدر مفتوح\n\nهذا الكورس تنشره منصة OmniLearn، دون أي تبعية أو مراجعة أو اعتماد من Google. قبل أن تبدأ، إليك من أين يأتي المحتوى وماذا تعني، وماذا لا تعني، إفادة إتمام الكورس.\n\n## الإسناد (attribution)\n\nيقتبس هذا الكورس مفاهيم وأمثلة من **Machine Learning Crash Course**، الذي تنشره **Google**.\n\n- المصدر: [developers.google.com/machine-learning/crash-course](https://developers.google.com/machine-learning/crash-course)\n- ترخيص النص الأصلي: [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)\n- تاريخ الاطلاع: 25 سبتمبر 2026\n\nما قمنا به انطلاقا من هذا المصدر: إعادة كتابة كاملة للشروحات بأسلوب خاص بـ OmniLearn، إعادة تنظيم المحتوى في 6 أجزاء و20 درسا، ترجمة الكورس وكتابته بالفرنسية والإنجليزية والعربية، إضافة اختبارات وتمارين مصححة، وحذف جميع الصور والعناصر التفاعلية الأصلية.\n\n> **للتذكّر**\n>\n> يسمح ترخيص CC BY 4.0 بهذا النوع من الاقتباس بشرط الإسناد إلى المصدر. لكنه لا يقول شيئا عن وضع هذا الكورس نفسه: النص الذي تقرؤه هنا هو عمل خاص بـ OmniLearn وغير معاد نشره تحت ترخيص CC BY 4.0.\n\n## الفخ الخاص بهذا الترخيص\n\nهناك خلط شائع: الاعتقاد بأن CC BY 4.0 يمنع الاستخدام التجاري، كما تفعل رخصة تحمل إشارة \"NC\" (غير تجاري). هذا غير صحيح: يسمح CC BY 4.0 بالاستخدام التجاري للنص الأصلي، حتى داخل كورس مدفوع، بشرط واحد فقط هو الإسناد إلى المصدر. فالإسناد أعلاه ليس إجراء اختياريا، بل هو الشرط الذي يجعل هذا الاقتباس قانونيا.\n\n## ما لا تعنيه الإفادة (attestation)\n\nفي نهاية هذا الكورس، قد تمنحك OmniLearn إفادة تؤكد فقط أنك أتممت دروسه واختباراته. وهي ليست شهادة (certification) من Google، ولا دبلوما، ولا اعترافا رسميا بالكفاءات يمنحه طرف ثالث: لا توجد جهة خارجية تصادق على هذا المسار. إن كنت تريد شهادة معترفا بها، فإن Google Cloud تنظم امتحاناتها الخاصة، مثل Professional Machine Learning Engineer، ولا علاقة لها بهذا الكورس.\n\n## دورك الآن\n\nقبل المتابعة، أعيدوا قراءة النقطتين أعلاه: المصدر (Google، ترخيص CC BY 4.0، الرابط والتغييرات المذكورة) وطبيعة الإفادة (إثبات تقدم على OmniLearn، وليست شهادة).\n\n> التصحيح: لا توجد هنا إجابة صحيحة أو خاطئة، بل حقيقتان يجب تذكرهما قبل بدء التعلم: من أين يأتي المحتوى، وماذا تثبت إفادتك، وماذا لا تثبت.\n\n*تم التحقق في 2026-09-27 على صفحة ترخيص Creative Commons BY 4.0 (creativecommons.org/licenses/by/4.0) وصفحة Machine Learning Crash Course من Google Developers.*"
            }
          }
        },
        {
          "id": "l2",
          "title": "Le principe de la régression linéaire",
          "type": "text",
          "duration": "10 min",
          "isFree": true,
          "body": "## Un nuage de points, une droite qui s'ajuste\n\nLe machine learning commence souvent par un problème simple : prédire une valeur à partir d'une autre, depuis un tableau de données.\n\nExemple concret : le poids (en milliers de livres) et la consommation (en miles par gallon, MPG) de sept voitures :\n\n| Poids (x1) | Consommation réelle (MPG) |\n|---|---|\n| 3,50 | 18 |\n| 3,69 | 15 |\n| 3,44 | 18 |\n| 3,43 | 16 |\n| 4,34 | 15 |\n| 4,42 | 14 |\n| 2,37 | 24 |\n\nOn voit une tendance : plus une voiture est lourde, moins elle fait de miles par gallon. Un modèle de **régression linéaire** cherche une droite qui résume cette tendance, de la forme :\n\n```\ny' = b + w1 * x1\n```\n\noù `y'` est la valeur prédite, `x1` est la donnée d'entrée (ici le poids), `w1` est le **poids** appris par le modèle (la pente de la droite), et `b` est le **biais** (l'ordonnée à l'origine).\n\n## Un modèle entraîné sur ces données\n\nEn ajustant une droite sur ce nuage de points, on peut obtenir par exemple :\n\n```\ny' = 34 + (-4.6) * x1\n```\n\nIci `b = 34` et `w1 = -4.6`. Le poids négatif confirme l'observation : chaque millier de livres en plus baisse la consommation prédite de 4,6 MPG.\n\nPrenons une voiture de 4 000 livres, donc `x1 = 4` :\n\n```\ny' = 34 + (-4.6 * 4)\ny' = 34 - 18.4\ny' = 15.6\n```\n\nLe modèle prédit environ **15,6 MPG** pour cette voiture, un calcul qu'on peut refaire au crayon : c'est tout ce que fait ce modèle à chaque prédiction.\n\n## Le piège du mot « poids »\n\nLe mot « poids » désigne ici deux grandeurs différentes, confusion fréquente : le poids réel de la voiture (l'entrée `x1`, en milliers de livres, mesuré sur un pont bascule), et le poids `w1` appris par le modèle (le coefficient multipliant `x1`), un nombre réglé pendant l'entraînement, pouvant être négatif comme ici (`w1 = -4,6`) alors qu'un poids physique ne l'est jamais. Si une leçon parle d'« augmenter le poids », vérifiez duquel il s'agit.\n\n## Pourquoi une droite, et pas un chiffre unique ?\n\nUne droite capture une relation, pas un cas isolé : au lieu de mémoriser sept couples de valeurs, le modèle apprend une règle générale (pente, ordonnée à l'origine) prédisant la consommation d'une voiture absente du tableau. C'est la promesse du machine learning supervisé : généraliser à partir d'exemples.\n\nReste une question pour la leçon suivante : comment sait-on que `b = 34` et `w1 = -4.6` sont bons, plutôt que `b = 20` et `w1 = -1` ?\n\n## À vous de jouer\n\nAvec le modèle `y' = 34 + (-4.6) * x1`, quelle consommation ce modèle prédit-il pour une voiture de 3 000 livres (`x1 = 3`) ?\n\n> Correction : `y' = 34 + (-4.6 * 3) = 34 - 13.8 = 20.2` MPG.\n\n> **À retenir**\n>\n> Un modèle de régression linéaire simple se résume à deux nombres, un poids et un biais, appliqués à une formule que vous pouvez calculer à la main.\n\n*Vérifié le 27 septembre 2026 sur la leçon « Linear regression » du Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*",
          "i18n": {
            "en": {
              "title": "The principle of linear regression",
              "body": "## A scatter plot, a line that fits it\n\nMachine learning often starts with a simple problem: predicting one value from another, from a table of data.\n\nConcrete example: the weight (in thousands of pounds) and fuel efficiency (in miles per gallon, MPG) of seven cars:\n\n| Weight (x1) | Actual MPG |\n|---|---|\n| 3.50 | 18 |\n| 3.69 | 15 |\n| 3.44 | 18 |\n| 3.43 | 16 |\n| 4.34 | 15 |\n| 4.42 | 14 |\n| 2.37 | 24 |\n\nThere is a clear trend: heavier cars get fewer miles per gallon. A **linear regression** model looks for a line summarizing this trend:\n\n```\ny' = b + w1 * x1\n```\n\nwhere `y'` is the predicted value, `x1` the input (here, weight), `w1` the **weight** learned by the model (the slope), and `b` the **bias** (the intercept).\n\n## A model trained on this data\n\nFitting a line to this scatter plot can give, for example:\n\n```\ny' = 34 + (-4.6) * x1\n```\n\nHere `b = 34` and `w1 = -4.6`. The negative weight matches the observation: every extra thousand pounds lowers predicted MPG by 4.6.\n\nTake a 4,000-pound car, so `x1 = 4`:\n\n```\ny' = 34 + (-4.6 * 4)\ny' = 34 - 18.4\ny' = 15.6\n```\n\nThe model predicts about **15.6 MPG** for this car, a calculation redone with a plain pencil: that is all this model does, at every prediction.\n\n## The trap in the word \"weight\"\n\nIn this lesson, \"weight\" quietly means two things, a common mixup: the car's actual weight (the input `x1`, in thousands of pounds, read off a scale), and the model's weight `w1` (the coefficient multiplying `x1`), tuned during training and able to go negative as here (`w1 = -4.6`), unlike a real physical weight. When a lesson talks about \"increasing a weight,\" check which one it means.\n\n## Why a line, not a single number?\n\nA line captures a relationship, not one isolated case: instead of memorizing seven pairs of values, the model learns a general rule (slope, intercept) predicting the fuel efficiency of a car absent from the table. That is the core promise of supervised machine learning: generalizing from examples.\n\nOne question remains for the next lesson: how do we know `b = 34` and `w1 = -4.6` are good, rather than `b = 20` and `w1 = -1`?\n\n## Your turn\n\nWith the model `y' = 34 + (-4.6) * x1`, what fuel efficiency does it predict for a 3,000-pound car (`x1 = 3`)?\n\n> Answer: `y' = 34 + (-4.6 * 3) = 34 - 13.8 = 20.2` MPG.\n\n> **Key takeaways**\n>\n> A simple linear regression model comes down to two numbers, a weight and a bias, applied through a formula you can compute by hand.\n\n*Checked on September 27, 2026 against the \"Linear regression\" lesson of the Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            },
            "ar": {
              "title": "مبدأ الانحدار الخطي (linear regression)",
              "body": "## سحابة نقاط، وخط يلائمها\n\nكثيرا ما يبدأ التعلم الآلي بمسألة بسيطة: التنبؤ بقيمة انطلاقا من قيمة أخرى، عبر جدول بيانات.\n\nمثال ملموس: وزن (بالآلاف من الأرطال) واستهلاك الوقود (بالميل لكل غالون، MPG) لسبع سيارات:\n\n| الوزن (x1) | الاستهلاك الفعلي (MPG) |\n|---|---|\n| 3.50 | 18 |\n| 3.69 | 15 |\n| 3.44 | 18 |\n| 3.43 | 16 |\n| 4.34 | 15 |\n| 4.42 | 14 |\n| 2.37 | 24 |\n\nنلاحظ اتجاها واضحا: كلما زاد وزن السيارة قلّ عدد الأميال لكل غالون. يبحث نموذج **الانحدار الخطي (linear regression)** عن خط يلخص هذا الاتجاه، بالصيغة:\n\n```\ny' = b + w1 * x1\n```\n\nحيث `y'` هي القيمة المتوقَّعة، و`x1` هي المدخل (هنا الوزن)، و`w1` هو **الوزن (weight)** الذي يتعلمه النموذج (ميل الخط)، و`b` هو **الانحياز (bias)** (نقطة تقاطع الخط مع المحور).\n\n## نموذج مدرَّب على هذه البيانات\n\nبملاءمة خط على سحابة النقاط هذه، يمكن الحصول مثلا على:\n\n```\ny' = 34 + (-4.6) * x1\n```\n\nهنا `b = 34` و`w1 = -4.6`. الوزن السالب يعكس ما نلاحظه: كل ألف رطل إضافي يخفّض الاستهلاك المتوقَّع بمقدار 4.6 MPG.\n\nلنأخذ سيارة وزنها 4000 رطل، إذن `x1 = 4`:\n\n```\ny' = 34 + (-4.6 * 4)\ny' = 34 - 18.4\ny' = 15.6\n```\n\nيتوقّع النموذج نحو **15.6 MPG** لهذه السيارة، وهو حساب يمكن إعادته بقلم عادي: هذا كل ما يفعله النموذج في كل تنبؤ.\n\n## فخ كلمة «الوزن»\n\nفي هذا الدرس، كلمة «الوزن» تحمل معنيين مختلفين، خلط شائع: الوزن الحقيقي للسيارة (المدخل `x1`، بالآلاف من الأرطال، يُقرأ على ميزان)، ووزن النموذج `w1` (المعامل الذي يُضرَب في `x1`)، رقم يُضبَط أثناء التدريب، يمكن أن يكون سالبا كما هنا (`w1 = -4.6`)، بينما الوزن المادي لا يكون كذلك أبدا. إن تحدث درس عن «زيادة الوزن»، تحقّقوا من أي وزن يتحدث.\n\n## لماذا خط، لا رقم واحد؟\n\nالخط يلتقط علاقة، لا حالة معزولة: بدلا من حفظ سبعة أزواج من القيم، يتعلم النموذج قاعدة عامة (ميل، نقطة تقاطع) تتنبأ باستهلاك سيارة غائبة عن الجدول. هذا وعد التعلم الآلي الموجَّه: التعميم انطلاقا من أمثلة.\n\nيبقى سؤال للدرس التالي: كيف نعرف أن `b = 34` و`w1 = -4.6` جيدتان، بدل `b = 20` و`w1 = -1` مثلا؟\n\n## دورك الآن\n\nباستخدام النموذج `y' = 34 + (-4.6) * x1`، ما الاستهلاك الذي يتوقعه هذا النموذج لسيارة وزنها 3000 رطل (`x1 = 3`)؟\n\n> التصحيح: `y' = 34 + (-4.6 * 3) = 34 - 13.8 = 20.2` MPG.\n\n> **للتذكّر**\n>\n> نموذج انحدار خطي بسيط يختصر في رقمين، وزن وانحياز، يُطبَّقان عبر معادلة يمكنك حسابها يدويا.\n\n*تم التحقق في 2026-09-27 على درس \"Linear regression\" من Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            }
          }
        },
        {
          "id": "l3",
          "title": "Mesurer l'erreur et la corriger : perte et descente de gradient",
          "type": "text",
          "duration": "12 min",
          "body": "## Comment savoir si une droite est bonne\n\nUn modèle doit mesurer à quel point ses prédictions sont mauvaises pour les améliorer : cette mesure s'appelle la **perte** (loss). Plus elle est basse, plus le modèle colle aux données réelles.\n\nDeux façons courantes de mesurer l'écart entre `y'` (prédiction) et `y` (valeur réelle) :\n\n- **Perte L1 (MAE, erreur absolue moyenne)** : `|y - y'|`, la valeur absolue de l'écart.\n- **Perte L2 (MSE, erreur quadratique moyenne)** : `(y - y')^2`, l'écart mis au carré.\n\nLa perte L2 pénalise plus les grosses erreurs, étant mises au carré. Une voiture de 2 370 livres, consommation réelle 24 MPG, prédite 23,1 MPG, donne :\n\n```\nL2 = (24 - 23.1)^2 = 0.9^2 = 0.81\n```\n\nSur un jeu de données entier, la moyenne de cette perte donne la **MSE** ; sa racine carrée donne la **RMSE**, exprimée dans l'unité de `y` (ici des MPG), donc plus facile à interpréter.\n\n## Corriger le modèle : la descente de gradient\n\nUn modèle ne devine pas ses poids au hasard : il part de valeurs de départ (souvent `w1 = 0` et `b = 0`), calcule sa perte, puis ajuste ses paramètres pas à pas pour la faire baisser. Cette méthode s'appelle la **descente de gradient**.\n\nÀ chaque itération, le modèle repère la direction où la perte diminue le plus vite, et déplace `w1` et `b` d'un petit pas dans cette direction, dont la taille est fixée par le **taux d'apprentissage**.\n\nVoici un entraînement, taux d'apprentissage 0,01, sur les données de poids et de consommation de la leçon précédente :\n\n| Itération | w1 | b | Perte |\n|---|---|---|---|\n| 1 | 0,00 | 0,00 | 303,71 |\n| 2 | 1,20 | 0,34 | 170,84 |\n| 3 | 2,05 | 0,59 | 103,17 |\n| 4 | 2,66 | 0,78 | 68,70 |\n| 5 | 3,09 | 0,91 | 51,13 |\n| 6 | 3,40 | 1,01 | 42,17 |\n\nLa perte chute itération après itération : 303,71, puis 170,84, puis 103,17... Ce tableau ne montre que les 6 premières itérations ; le modèle continue sur bien d'autres pas non montrés ici, jusqu'à converger. Sur ces données, l'entraînement complet aboutit à `w1 ≈ -4,57` et `b ≈ 33,59`, pour une perte minimale d'environ `1,47`.\n\nRemarque : `w1` monte d'abord vers le positif (jusqu'à environ `4,1` vers la vingtième itération) avant de redescendre vers le négatif, ce que ce tableau partiel ne montre pas. C'est normal : la descente de gradient ne va pas toujours en ligne droite vers la solution finale.\n\n## Le piège de la perte lue trop tôt\n\nLe piège classique : s'arrêter à une itération intermédiaire, comme la sixième du tableau (perte de `42,17`), et la présenter comme la performance finale. Ici, la perte continue de baisser bien après, passant sous `2` avant de se stabiliser vers `1,47`. Une perte lue en cours d'entraînement ne dit rien de la perte à convergence ; seule la valeur obtenue une fois les paramètres stabilisés peut être comparée entre deux modèles.\n\n## À vous de jouer\n\nUne voiture a une consommation réelle de 18 MPG. Le modèle prédit 20 MPG. Calculez la perte L1 et la perte L2 pour cet exemple.\n\n> Correction : L1 = |18 - 20| = 2. L2 = (18 - 20)^2 = 4.\n\n> **À retenir**\n>\n> La perte mesure l'erreur d'un modèle, et la descente de gradient ajuste les paramètres pas à pas pour la faire baisser, jusqu'à un minimum.\n\n*Vérifié le 27 septembre 2026 en recalculant la descente de gradient sur les données de la leçon (7 voitures, taux d'apprentissage 0,01) jusqu'à convergence, et par comparaison avec la solution des moindres carrés ; voir aussi les leçons « Loss » et « Reducing loss: Gradient descent » du Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*",
          "i18n": {
            "en": {
              "title": "Measuring and fixing error: loss and gradient descent",
              "body": "## How do you know if a line is good\n\nA model must measure how wrong its predictions are to improve them: this measure is called **loss**. The lower it is, the closer the model fits the data.\n\nTwo common ways to measure the gap between `y'` (prediction) and `y` (actual value):\n\n- **L1 loss (MAE, mean absolute error)**: `|y - y'|`, the absolute value of the gap.\n- **L2 loss (MSE, mean squared error)**: `(y - y')^2`, the squared gap.\n\nL2 loss punishes large errors more, since they get squared. A 2,370-pound car, actual fuel efficiency 24 MPG, predicted 23.1 MPG, gives:\n\n```\nL2 = (24 - 23.1)^2 = 0.9^2 = 0.81\n```\n\nOver a whole dataset, the average of this loss gives the **MSE**; its square root gives the **RMSE**, expressed in the unit of `y` (here MPG), so easier to interpret.\n\n## Fixing the model: gradient descent\n\nA model does not guess its weights at random: starting from initial values (often `w1 = 0` and `b = 0`), it computes its loss, then adjusts parameters step by step to bring it down. This is **gradient descent**.\n\nAt every iteration, the model finds the direction that reduces the loss fastest, and moves `w1` and `b` a small step in that direction, sized by the **learning rate**.\n\nHere is a training run, learning rate 0.01, on the weight-and-MPG data from the previous lesson:\n\n| Iteration | w1 | b | Loss |\n|---|---|---|---|\n| 1 | 0.00 | 0.00 | 303.71 |\n| 2 | 1.20 | 0.34 | 170.84 |\n| 3 | 2.05 | 0.59 | 103.17 |\n| 4 | 2.66 | 0.78 | 68.70 |\n| 5 | 3.09 | 0.91 | 51.13 |\n| 6 | 3.40 | 1.01 | 42.17 |\n\nThe loss drops iteration after iteration: 303.71, then 170.84, then 103.17... This table only shows the first 6 iterations; the model keeps going for many more steps until it converges. On this data, training ends near `w1 ≈ -4.57` and `b ≈ 33.59`, for a minimum loss of about `1.47`.\n\nNote: `w1` first climbs toward positive values (up to about `4.1` near the twentieth iteration) before moving negative, which this partial table does not show. That is normal: gradient descent does not always move straight toward the final solution.\n\n## The trap of a loss read too early\n\nThe classic trap: stopping at an intermediate iteration, like the sixth row (loss `42.17`), and presenting it as final performance. Here, the loss keeps dropping well past that, falling below `2` before settling near `1.47`. A loss read mid-training says nothing about convergence; only the value once parameters stabilize can be compared between models.\n\n## Your turn\n\nA car has an actual fuel efficiency of 18 MPG. The model predicts 20 MPG. Compute the L1 loss and the L2 loss for this example.\n\n> Answer: L1 = |18 - 20| = 2. L2 = (18 - 20)^2 = 4.\n\n> **Key takeaways**\n>\n> Loss measures a model's error, and gradient descent adjusts its parameters step by step to bring it down, until it reaches a minimum.\n\n*Checked on September 27, 2026 by recomputing gradient descent on the lesson's data (7 cars, learning rate 0.01) through to convergence, and cross-checking against the least-squares solution; see also the \"Loss\" and \"Reducing loss: Gradient descent\" lessons of the Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            },
            "ar": {
              "title": "قياس الخطأ وتصحيحه: دالة الخسارة والانحدار التدريجي (gradient descent)",
              "body": "## كيف نعرف أن الخط جيد\n\nعلى النموذج أن يقيس مدى خطأ تنبؤاته ليحسّنها: يسمى هذا المقياس **الخسارة (loss)**. كلما انخفضت، اقترب النموذج من البيانات الحقيقية.\n\nطريقتان شائعتان لقياس الفارق بين `y'` (التنبؤ) و`y` (القيمة الحقيقية):\n\n- **خسارة L1 (MAE، متوسط الخطأ المطلق)**: `|y - y'|`، القيمة المطلقة للفارق.\n- **خسارة L2 (MSE، متوسط مربع الخطأ)**: `(y - y')^2`، الفارق مرفوعا للمربع.\n\nتعاقب خسارة L2 الأخطاء الكبيرة أكثر، لأنها تُرفع للمربع. سيارة وزنها 2370 رطلا، استهلاكها الفعلي 24 MPG والمتوقَّع 23.1 MPG، تعطي:\n\n```\nL2 = (24 - 23.1)^2 = 0.9^2 = 0.81\n```\n\nعلى مجموعة بيانات كاملة، متوسط هذه الخسارة يعطي **MSE**؛ وجذره التربيعي يعطي **RMSE**، المعبَّر عنه بوحدة `y` (هنا MPG)، ما يجعله أسهل تفسيرا.\n\n## تصحيح النموذج: الانحدار التدريجي (gradient descent)\n\nلا يخمّن النموذج أوزانه عشوائيا: ينطلق من قيم أولية (غالبا `w1 = 0` و`b = 0`)، يحسب خسارته، ثم يعدّل معاييره خطوة بخطوة لتخفيضها. هذه هي **الانحدار التدريجي (gradient descent)**.\n\nفي كل تكرار، يحدد النموذج الاتجاه الذي يخفّض الخسارة بأسرع شكل، ويحرّك `w1` و`b` خطوة صغيرة في ذلك الاتجاه، يحدد حجمها **معدل التعلم (learning rate)**.\n\nإليك تدريبا، معدل تعلم 0.01، على بيانات الوزن والاستهلاك من الدرس السابق:\n\n| التكرار | w1 | b | الخسارة |\n|---|---|---|---|\n| 1 | 0.00 | 0.00 | 303.71 |\n| 2 | 1.20 | 0.34 | 170.84 |\n| 3 | 2.05 | 0.59 | 103.17 |\n| 4 | 2.66 | 0.78 | 68.70 |\n| 5 | 3.09 | 0.91 | 51.13 |\n| 6 | 3.40 | 1.01 | 42.17 |\n\nتنخفض الخسارة تكرارا بعد تكرار: 303.71، ثم 170.84، ثم 103.17... يعرض الجدول فقط التكرارات الست الأولى؛ يواصل النموذج خطوات أخرى غير معروضة حتى يتقارب. على هذه البيانات، ينتهي التدريب بـ`w1 ≈ -4.57` و`b ≈ 33.59`، بخسارة دنيا نحو `1.47`.\n\nملاحظة: يرتفع `w1` أولا نحو قيم موجبة (حتى نحو `4.1` قرب التكرار العشرين) قبل أن ينخفض نحو قيم سالبة، وهو ما لا يُظهره هذا الجدول الجزئي. هذا أمر طبيعي: لا يسير الانحدار التدريجي دائما في خط مستقيم نحو الحل النهائي.\n\n## فخ الخسارة المقروءة مبكرا\n\nالفخ الشائع: التوقف عند تكرار وسيط، مثل السطر السادس من الجدول (خسارة `42.17`)، وتقديمه على أنه الأداء النهائي. هنا، تستمر الخسارة في الانخفاض بعد ذلك بكثير، فتنزل دون `2` قبل أن تستقر قرب `1.47`. خسارة تُقرأ أثناء التدريب لا تقول شيئا عن الخسارة عند التقارب؛ فقط القيمة المحصَّلة بعد استقرار المعايير يمكن مقارنتها بين نموذجين.\n\n## دورك الآن\n\nاستهلاك سيارة الفعلي 18 MPG. يتنبأ النموذج بـ20 MPG. احسبوا خسارة L1 وخسارة L2 لهذا المثال.\n\n> التصحيح: L1 = |18 - 20| = 2. L2 = (18 - 20)^2 = 4.\n\n> **للتذكّر**\n>\n> تقيس الخسارة خطأ النموذج، ويعدّل الانحدار التدريجي المعايير خطوة بخطوة لتخفيضها، حتى يبلغ حدا أدنى.\n\n*تم التحقق في 27 سبتمبر 2026 بإعادة حساب الانحدار التدريجي على بيانات الدرس (7 سيارات، معدل تعلم 0.01) حتى التقارب، ومقارنته بحل المربعات الصغرى؛ انظر أيضا درسي \"Loss\" و\"Reducing loss: Gradient descent\" من Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            }
          }
        }
      ]
    },
    {
      "id": "p2",
      "title": "Classification : de la régression logistique aux métriques",
      "lessons": [
        {
          "id": "l4",
          "title": "De la régression à la classification : la régression logistique",
          "type": "text",
          "duration": "10 min",
          "body": "## Prédire une catégorie, pas un nombre\n\nLa régression linéaire prédit un nombre (une consommation en MPG). Beaucoup de problèmes demandent autre chose : prédire une catégorie. Ce courriel est-il un spam, oui ou non ? Cette transaction est-elle frauduleuse, oui ou non ? C'est un problème de **classification**.\n\nUne première idée serait de réutiliser directement une droite de régression et de dire : si `y'` dépasse un certain seuil, c'est \"oui\", sinon \"non\". Le problème, c'est qu'une droite peut sortir de l'intervalle utile : elle peut prédire -3 ou 128, alors qu'une probabilité doit rester entre 0 et 1.\n\n## La fonction sigmoïde\n\nLa **régression logistique** résout ce problème en faisant passer le résultat de la régression linéaire à travers une fonction, la **sigmoïde**, qui écrase n'importe quel nombre dans l'intervalle [0, 1] :\n\n```\np = 1 / (1 + e^-(b + w1 * x1))\n```\n\nLe résultat `p` s'interprète comme une probabilité : la probabilité que l'exemple appartienne à la catégorie \"positive\" (par exemple, \"c'est un spam\"). Quand `b + w1 * x1` est très négatif, `p` s'approche de 0. Quand il est très positif, `p` s'approche de 1. Quand il vaut 0, `p` vaut exactement 0,5.\n\n## Une perte adaptée : la perte logarithmique\n\nPour entraîner un modèle de classification, on n'utilise plus la perte L2 de la régression linéaire, mais une perte adaptée aux probabilités : la **perte logarithmique** (log loss). Elle pénalise très fortement une prédiction confiante et fausse : prédire une probabilité de 0,99 pour un exemple qui est en réalité négatif coûte beaucoup plus cher qu'une prédiction proche de 0,5.\n\nComme pour la régression linéaire, l'entraînement ajuste `w1` et `b` par descente de gradient pour faire baisser cette perte sur l'ensemble des exemples.\n\n## Régularisation : éviter un modèle trop sûr de lui\n\nUn piège classique de la régression logistique est un modèle qui devient trop confiant : sur des données d'entraînement parfaitement séparables, il peut pousser ses probabilités vers 0 ou 1 pour chaque exemple, au prix d'une mauvaise généralisation sur de nouvelles données. Pour éviter cela, on ajoute souvent un terme de **régularisation**, qui pénalise les poids trop grands et garde le modèle plus prudent.\n\n## À vous de jouer\n\nUn modèle logistique calcule `b + w1 * x1 = 0` pour un exemple donné. Que vaut la probabilité `p` prédite par la sigmoïde pour cet exemple ?\n\n> Correction : quand l'entrée de la sigmoïde vaut 0, `p = 1 / (1 + e^0) = 1 / (1 + 1) = 0.5`. Le modèle est exactement à l'équilibre entre les deux catégories.\n\n> **À retenir**\n>\n> La régression logistique transforme une régression linéaire en probabilité entre 0 et 1 grâce à la sigmoïde, puis s'entraîne avec une perte logarithmique plutôt qu'une perte L2.\n\n*Vérifié le 27 septembre 2026 en recalculant `p = 1 / (1 + e^0) = 0,5` et en confirmant la définition de la sigmoïde et de la régularisation sur les leçons « Logistic regression » et « Logistic regression: Loss and regularization » du Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*",
          "i18n": {
            "en": {
              "title": "From regression to classification: logistic regression",
              "body": "## Predicting a category, not a number\n\nLinear regression predicts a number (fuel efficiency in MPG). Many problems ask for something else: predicting a category. Is this email spam, yes or no? Is this transaction fraudulent, yes or no? That is a **classification** problem.\n\nA first idea would be to reuse a regression line directly and say: if `y'` passes a certain threshold, it is \"yes\", otherwise \"no\". The problem is that a line can go outside the useful range: it can predict -3 or 128, while a probability must stay between 0 and 1.\n\n## The sigmoid function\n\n**Logistic regression** solves this by passing the output of a linear regression through a function, the **sigmoid**, which squeezes any number into the [0, 1] range:\n\n```\np = 1 / (1 + e^-(b + w1 * x1))\n```\n\nThe result `p` is read as a probability: the probability that the example belongs to the \"positive\" category (for example, \"this is spam\"). When `b + w1 * x1` is very negative, `p` approaches 0. When it is very positive, `p` approaches 1. When it equals 0, `p` equals exactly 0.5.\n\n## A matching loss: log loss\n\nTo train a classification model, you no longer use the L2 loss from linear regression, but a loss suited to probabilities: **log loss**. It punishes a confident, wrong prediction very heavily: predicting a probability of 0.99 for an example that is actually negative costs far more than a prediction close to 0.5.\n\nAs with linear regression, training adjusts `w1` and `b` through gradient descent to bring this loss down across all examples.\n\n## Regularization: avoiding an overconfident model\n\nA classic pitfall of logistic regression is a model that becomes overconfident: on training data that is perfectly separable, it can push its probabilities toward 0 or 1 for every example, at the cost of poor generalization to new data. To prevent this, a **regularization** term is often added, which penalizes overly large weights and keeps the model more cautious.\n\n## Your turn\n\nA logistic model computes `b + w1 * x1 = 0` for a given example. What probability `p` does the sigmoid predict for this example?\n\n> Answer: when the sigmoid's input is 0, `p = 1 / (1 + e^0) = 1 / (1 + 1) = 0.5`. The model is exactly balanced between the two categories.\n\n> **Key takeaways**\n>\n> Logistic regression turns a linear regression into a probability between 0 and 1 through the sigmoid, then trains with log loss instead of L2 loss.\n\n*Checked on September 27, 2026 by recomputing `p = 1 / (1 + e^0) = 0.5` and confirming the definitions of the sigmoid and regularization against the \"Logistic regression\" and \"Logistic regression: Loss and regularization\" lessons of the Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            },
            "ar": {
              "title": "من الانحدار إلى التصنيف: الانحدار اللوجستي (logistic regression)",
              "body": "## التنبؤ بفئة، لا برقم\n\nيتنبأ الانحدار الخطي برقم (استهلاك بوحدة MPG). لكن مسائل كثيرة تتطلب شيئا آخر: التنبؤ بفئة (category). هل هذه الرسالة الإلكترونية بريد مزعج (spam) أم لا؟ هل هذه المعاملة احتيالية أم لا؟ هذه مسألة **تصنيف (classification)**.\n\nقد تكون الفكرة الأولى إعادة استخدام خط انحدار مباشرة والقول: إذا تجاوزت `y'` عتبة معينة فالجواب \"نعم\"، وإلا فـ\"لا\". المشكلة أن الخط يمكن أن يخرج عن النطاق المفيد: قد يتنبأ بـ-3 أو 128، بينما يجب أن يبقى الاحتمال بين 0 و1.\n\n## دالة السيجمويد (sigmoid)\n\nيحل **الانحدار اللوجستي (logistic regression)** هذه المشكلة بتمرير ناتج الانحدار الخطي عبر دالة تسمى **السيجمويد (sigmoid)**، تضغط أي رقم ليقع بين 0 و1:\n\n```\np = 1 / (1 + e^-(b + w1 * x1))\n```\n\nتُقرأ النتيجة `p` كاحتمال: احتمال أن ينتمي المثال إلى الفئة \"الإيجابية\" (مثلا \"هذا بريد مزعج\"). عندما تكون `b + w1 * x1` سالبة جدا، تقترب `p` من 0. وعندما تكون موجبة جدا، تقترب `p` من 1. وعندما تساوي 0، تساوي `p` بالضبط 0.5.\n\n## دالة خسارة ملائمة: الخسارة اللوغاريتمية (log loss)\n\nلتدريب نموذج تصنيف، لا نستخدم خسارة L2 كما في الانحدار الخطي، بل خسارة ملائمة للاحتمالات تسمى **الخسارة اللوغاريتمية (log loss)**. تعاقب هذه الخسارة بشدة أي تنبؤ واثق وخاطئ: التنبؤ باحتمال 0.99 لمثال سالب في الحقيقة يكلّف أكثر بكثير من تنبؤ قريب من 0.5.\n\nكما في الانحدار الخطي، يعدّل التدريب `w1` و`b` عبر الانحدار التدريجي (gradient descent) لتخفيض هذه الخسارة عبر جميع الأمثلة.\n\n## التسوية (regularization): تجنب نموذج مفرط الثقة\n\nمن الأخطاء الشائعة في الانحدار اللوجستي أن يصبح النموذج مفرط الثقة: على بيانات تدريب قابلة للفصل التام، قد يدفع احتمالاته نحو 0 أو 1 لكل مثال، على حساب تعميم ضعيف على بيانات جديدة. لتفادي ذلك، غالبا ما يُضاف حد **تسوية (regularization)**، يعاقب الأوزان الكبيرة جدا ويبقي النموذج أكثر حذرا.\n\n## دورك الآن\n\nيحسب نموذج لوجستي `b + w1 * x1 = 0` لمثال معين. ما الاحتمال `p` الذي تتنبأ به السيجمويد لهذا المثال؟\n\n> التصحيح: عندما يكون مدخل السيجمويد صفرا، `p = 1 / (1 + e^0) = 1 / (1 + 1) = 0.5`. النموذج في حالة توازن تام بين الفئتين.\n\n> **للتذكّر**\n>\n> يحوّل الانحدار اللوجستي ناتج الانحدار الخطي إلى احتمال بين 0 و1 عبر السيجمويد، ثم يتدرب باستخدام الخسارة اللوغاريتمية بدل خسارة L2.\n\n*تم التحقق في 27 سبتمبر 2026 بإعادة حساب `p = 1 / (1 + e^0) = 0.5` والتأكد من تعريف السيجمويد والتسوية في درسي \"Logistic regression\" و\"Logistic regression: Loss and regularization\" من Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            }
          }
        },
        {
          "id": "l5",
          "title": "Seuil de décision et matrice de confusion",
          "type": "text",
          "duration": "9 min",
          "body": "## D'une probabilité à une décision\n\nUn modèle de classification renvoie une probabilité, par exemple `p = 0.73`. Mais il faut trancher : ce courriel est-il un spam ? On fixe pour cela un **seuil de décision** (threshold), souvent 0,5 : si `p` dépasse le seuil, l'exemple est classé positif, sinon négatif.\n\nCe seuil se règle selon ce qu'on veut privilégier. Pour un filtre anti-spam, le relever réduit le risque de classer un e-mail important comme spam, mais laisse passer plus de vrais spams.\n\n## Les quatre cases de la matrice de confusion\n\nUne fois le seuil appliqué sur des exemples de vraie catégorie connue, chaque prédiction tombe dans une des quatre cases :\n\n- **Vrai positif (VP)** : prédit positif, réellement positif.\n- **Vrai négatif (VN)** : prédit négatif, réellement négatif.\n- **Faux positif (FP)** : prédit positif, en réalité négatif (fausse alerte).\n- **Faux négatif (FN)** : prédit négatif, en réalité positif (cas manqué).\n\nCe tableau à quatre cases s'appelle la **matrice de confusion**, base des métriques des deux prochaines leçons.\n\n## Un exemple concret\n\nImaginez un filtre anti-spam testé sur 16 e-mails de nature déjà connue. Résultat :\n\n| | Prédit spam | Prédit non-spam |\n|---|---|---|\n| **Réellement spam** | VP = 5 | FN = 2 |\n| **Réellement non-spam** | FP = 3 | VN = 6 |\n\n5 spams détectés (VP), 2 spams passés au travers (FN), 3 e-mails normaux marqués spam à tort (FP), 6 laissés tranquilles à raison (VN). On garde ce tableau : les leçons suivantes s'appuient dessus.\n\n## Le piège de l'exactitude qui rassure\n\nSur ces 16 e-mails, l'exactitude globale (VP + VN sur le total) vaut `(5 + 6) / 16 = 68,75 %`. Ce chiffre semble correct, mais il cache un déséquilibre : parmi les 7 vrais spams (VP + FN = 5 + 2), le modèle en manque 2, soit `28,6 %`. Et parmi les 9 e-mails légitimes (FP + VN = 3 + 6), il en marque 3 à tort, soit `33,3 %`. Une seule exactitude ne dit rien de la répartition des erreurs entre catégories.\n\n## À vous de jouer\n\nDans le tableau ci-dessus, combien d'e-mails ont été mal classés par le modèle (FP + FN) ?\n\n> Correction : FP + FN = 3 + 2 = 5 e-mails mal classés sur 16.\n\n> **À retenir**\n>\n> Le seuil transforme une probabilité en verdict, et la matrice de confusion (VP, VN, FP, FN) résume la qualité de ce verdict.\n\n*Vérifié le 27 septembre 2026 en recalculant les totaux de la matrice (16 = 5+2+3+6) et l'exactitude (68,75 %) à partir des chiffres de la leçon, et en confirmant les définitions sur la leçon « Thresholds and the confusion matrix » du Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*",
          "i18n": {
            "en": {
              "title": "Decision threshold and confusion matrix",
              "body": "## From a probability to a decision\n\nA classification model returns a probability, for example `p = 0.73`. But a call has to be made: is this email spam? For this, you set a **decision threshold**, often 0.5: if `p` passes the threshold, the example is classified positive, otherwise negative.\n\nThis threshold is set according to what you want to prioritize. For a spam filter, raising it reduces the risk of wrongly flagging an important email, but lets more real spam through.\n\n## The four cells of the confusion matrix\n\nOnce the threshold is applied to examples of known true category, each prediction falls into one of four cells:\n\n- **True positive (TP)**: predicted positive, really positive.\n- **True negative (TN)**: predicted negative, really negative.\n- **False positive (FP)**: predicted positive, actually negative (a false alarm).\n- **False negative (FN)**: predicted negative, actually positive (a missed case).\n\nThis four-cell table is called the **confusion matrix**, the basis of the next two lessons' metrics.\n\n## A concrete example\n\nImagine a spam filter tested on 16 emails of already-known true nature. Result:\n\n| | Predicted spam | Predicted not spam |\n|---|---|---|\n| **Actually spam** | TP = 5 | FN = 2 |\n| **Actually not spam** | FP = 3 | TN = 6 |\n\n5 spam emails caught (TP), 2 slipped through (FN), 3 normal emails wrongly flagged as spam (FP), 6 correctly left alone (TN). Keep this table: the next lessons build on it.\n\n## The trap of a reassuring accuracy number\n\nAcross these 16 emails, overall accuracy (TP + TN over the total) is `(5 + 6) / 16 = 68.75%`. That number looks fine, but it hides an imbalance: of the 7 real spam emails (TP + FN = 5 + 2), the model misses 2, a miss rate of `28.6%`. And of the 9 legitimate emails (FP + TN = 3 + 6), it wrongly flags 3, a false-alarm rate of `33.3%`. A single accuracy figure says nothing about how errors split between categories.\n\n## Your turn\n\nIn the table above, how many emails were misclassified by the model (FP + FN)?\n\n> Answer: FP + FN = 3 + 2 = 5 misclassified emails out of 16.\n\n> **Key takeaways**\n>\n> The threshold turns a probability into a verdict, and the confusion matrix (TP, TN, FP, FN) summarizes the quality of that verdict.\n\n*Checked on September 27, 2026 by recomputing the matrix totals (16 = 5+2+3+6) and the accuracy (68.75%) from the lesson's own figures, and confirming the definitions against the \"Thresholds and the confusion matrix\" lesson of the Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            },
            "ar": {
              "title": "عتبة القرار (threshold) ومصفوفة الالتباس (confusion matrix)",
              "body": "## من احتمال إلى قرار\n\nيعيد نموذج التصنيف احتمالا، مثلا `p = 0.73`. لكن يجب الحسم: هل هذه الرسالة بريد مزعج؟ لذلك نحدد **عتبة قرار (decision threshold)**، غالبا 0.5: إذا تجاوزت `p` العتبة، يُصنَّف المثال إيجابيا، وإلا فسلبيا.\n\nتُضبط هذه العتبة حسب الأولوية المرجوة. بالنسبة لمرشّح بريد مزعج، رفعها يقلّل خطر تصنيف رسالة مهمة خطأً كمزعجة، لكنه يترك مزيدا من الرسائل المزعجة الحقيقية تمر.\n\n## الخانات الأربع لمصفوفة الالتباس\n\nبعد تطبيق العتبة على أمثلة معروفة الفئة الحقيقية مسبقا، يقع كل تنبؤ في إحدى الخانات الأربع:\n\n- **إيجابي حقيقي (TP)**: تنبؤ إيجابي، وهو فعلا إيجابي.\n- **سلبي حقيقي (TN)**: تنبؤ سلبي، وهو فعلا سلبي.\n- **إيجابي زائف (FP)**: تنبؤ إيجابي، وهو في الحقيقة سلبي (إنذار كاذب).\n- **سلبي زائف (FN)**: تنبؤ سلبي، وهو في الحقيقة إيجابي (حالة فائتة).\n\nيسمى هذا الجدول ذو الخانات الأربع **مصفوفة الالتباس (confusion matrix)**، أساس مقاييس الدرسين التاليين.\n\n## مثال ملموس\n\nتخيلوا مرشّح بريد مزعج اختُبر على 16 رسالة معروفة الطبيعة مسبقا. النتيجة:\n\n| | تنبؤ: مزعجة | تنبؤ: غير مزعجة |\n|---|---|---|\n| **فعليا مزعجة** | TP = 5 | FN = 2 |\n| **فعليا غير مزعجة** | FP = 3 | TN = 6 |\n\nرُصدت 5 رسائل مزعجة بشكل صحيح (TP)، وأفلتت رسالتان (FN)، ووُسمت 3 رسائل عادية خطأً كمزعجة (FP)، وتُركت 6 رسائل عادية بشكل صحيح (TN). احتفظوا بهذا الجدول: تبني عليه الدروس التالية.\n\n## فخ نسبة الدقة الإجمالية المطمئنة\n\nعبر هذه الرسائل الـ16، تبلغ الدقة الإجمالية (TP + TN على المجموع) `(5 + 6) / 16 = 68.75%`. هذا الرقم يبدو جيدا، لكنه يخفي خللا: من بين 7 رسائل مزعجة فعلا (TP + FN = 5 + 2)، يفوّت النموذج 2 منها، أي `28.6%`. ومن بين 9 رسائل شرعية (FP + TN = 3 + 6)، يسم 3 منها خطأً، أي `33.3%`. رقم دقة وحيد لا يقول شيئا عن توزيع الأخطاء بين الفئتين.\n\n## دورك الآن\n\nكم رسالة صُنِّفت خطأً في الجدول أعلاه (FP + FN)؟\n\n> التصحيح: FP + FN = 3 + 2 = 5 رسائل مصنَّفة خطأً من أصل 16.\n\n> **للتذكّر**\n>\n> تحوّل العتبة احتمالا إلى حكم، وتلخّص المصفوفة (TP، TN، FP، FN) جودته.\n\n*تم التحقق في 27 سبتمبر 2026 بإعادة حساب مجاميع المصفوفة (16 = 5+2+3+6) والدقة الإجمالية (68.75%) انطلاقا من أرقام الدرس، والتأكد من التعريفات في درس \"Thresholds and the confusion matrix\" من Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            }
          }
        },
        {
          "id": "l6",
          "title": "Précision, rappel et F1-score",
          "type": "text",
          "duration": "10 min",
          "body": "## Pourquoi l'exactitude ne suffit pas\n\nLa métrique la plus intuitive est l'**exactitude** (accuracy) : la proportion de prédictions correctes.\n\n```\nExactitude = (VP + VN) / (VP + VN + FP + FN)\n```\n\nReprenons la matrice de confusion de la leçon précédente : VP = 5, FN = 2, FP = 3, VN = 6, pour un total de 16 e-mails.\n\n```\nExactitude = (5 + 6) / 16 = 11 / 16 = 0.688, soit 68.8 %\n```\n\nLe problème apparaît sur des données déséquilibrées. Si seulement 2 % des e-mails sont des spams, un modèle qui prédit toujours \"non-spam\" obtient déjà 98 % d'exactitude sans détecter un seul spam : il faut des métriques plus précises.\n\n## Rappel : sur tous les vrais positifs, combien sont trouvés\n\nLe **rappel** (recall) répond à la question : parmi tous les exemples réellement positifs, combien le modèle en a-t-il trouvé ?\n\n```\nRappel = VP / (VP + FN)\n```\n\n```\nRappel = 5 / (5 + 2) = 5 / 7 ≈ 0.714, soit 71.4 %\n```\n\nLe modèle détecte environ 71,4 % des spams réels.\n\n## Précision : sur tout ce que le modèle a signalé, combien est correct\n\nLa **précision** répond à une autre question : parmi tout ce que le modèle a classé positif, combien l'est vraiment ?\n\n```\nPrécision = VP / (VP + FP)\n```\n\n```\nPrécision = 5 / (5 + 3) = 5 / 8 = 0.625, soit 62.5 %\n```\n\nSur tous les e-mails marqués \"spam\" par le modèle, 62,5 % le sont vraiment ; les 37,5 % restants sont des faux positifs, des e-mails normaux marqués à tort.\n\n## F1-score : un compromis entre les deux\n\nPrécision et rappel évoluent souvent en sens inverse : améliorer l'un dégrade souvent l'autre. Le **F1-score** combine les deux dans un seul nombre :\n\n```\nF1 = 2 * VP / (2 * VP + FP + FN)\n```\n\n```\nF1 = (2 * 5) / (2 * 5 + 3 + 2) = 10 / 15 ≈ 0.667, soit 66.7 %\n```\n\n## À vous de jouer\n\nEn reprenant toujours VP = 5, FN = 2, FP = 3, VN = 6, calculez le taux de faux positifs (FPR), défini par `FPR = FP / (FP + VN)`.\n\n> Correction : FPR = 3 / (3 + 6) = 3 / 9 ≈ 0.333, soit 33.3 %.\n\n> **À retenir**\n>\n> Rappel et précision répondent à deux questions différentes (trouve-t-on tout ? ce qu'on trouve est-il correct ?), et le F1-score résume les deux en un seul chiffre.\n\n*Vérifié le 27 septembre 2026 en recalculant l'exactitude (68,8 %), le rappel (71,4 %), la précision (62,5 %), le F1-score (66,7 %) et le FPR (33,3 %) à partir des chiffres de la matrice de confusion (VP=5, FN=2, FP=3, VN=6), et en confirmant les formules sur la leçon « Classification: Accuracy, recall, precision, and related metrics » du Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*",
          "i18n": {
            "en": {
              "title": "Precision, recall and F1 score",
              "body": "## Why accuracy is not enough\n\nThe most intuitive metric is **accuracy**: the proportion of correct predictions.\n\n```\nAccuracy = (TP + TN) / (TP + TN + FP + FN)\n```\n\nTake the confusion matrix from the previous lesson: TP = 5, FN = 2, FP = 3, TN = 6, out of 16 emails total.\n\n```\nAccuracy = (5 + 6) / 16 = 11 / 16 = 0.688, i.e. 68.8%\n```\n\nThe problem shows up on imbalanced data. If only 2% of emails are spam, a model that always predicts \"not spam\" already scores 98% accuracy without catching a single spam email: more precise metrics are needed.\n\n## Recall: out of all true positives, how many were found\n\n**Recall** answers the question: out of all examples that are actually positive, how many did the model find?\n\n```\nRecall = TP / (TP + FN)\n```\n\n```\nRecall = 5 / (5 + 2) = 5 / 7 ≈ 0.714, i.e. 71.4%\n```\n\nThe model catches about 71.4% of actual spam emails.\n\n## Precision: out of everything the model flagged, how much is correct\n\n**Precision** answers a different question: out of everything the model classified as positive, how much really is?\n\n```\nPrecision = TP / (TP + FP)\n```\n\n```\nPrecision = 5 / (5 + 3) = 5 / 8 = 0.625, i.e. 62.5%\n```\n\nOut of every email the model marked \"spam\", 62.5% really are; the remaining 37.5% are false positives, normal emails wrongly flagged.\n\n## F1 score: a trade-off between the two\n\nPrecision and recall often move in opposite directions: improving one often hurts the other. The **F1 score** combines both into a single number:\n\n```\nF1 = 2 * TP / (2 * TP + FP + FN)\n```\n\n```\nF1 = (2 * 5) / (2 * 5 + 3 + 2) = 10 / 15 ≈ 0.667, i.e. 66.7%\n```\n\n## Your turn\n\nStill using TP = 5, FN = 2, FP = 3, TN = 6, compute the false positive rate (FPR), defined as `FPR = FP / (FP + TN)`.\n\n> Answer: FPR = 3 / (3 + 6) = 3 / 9 ≈ 0.333, i.e. 33.3%.\n\n> **Key takeaways**\n>\n> Recall and precision answer two different questions (do we find everything? is what we find correct?), and the F1 score summarizes both in a single figure.\n\n*Checked on September 27, 2026 by recomputing accuracy (68.8%), recall (71.4%), precision (62.5%), the F1 score (66.7%) and the FPR (33.3%) from the confusion matrix figures (TP=5, FN=2, FP=3, TN=6), and confirming the formulas against the \"Classification: Accuracy, recall, precision, and related metrics\" lesson of the Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            },
            "ar": {
              "title": "الدقة (precision) والاستدعاء (recall) ومقياس F1",
              "body": "## لماذا لا تكفي الدقة الإجمالية (accuracy)\n\nأكثر المقاييس بداهة هو **الدقة الإجمالية (accuracy)**: نسبة التنبؤات الصحيحة.\n\n```\nAccuracy = (TP + TN) / (TP + TN + FP + FN)\n```\n\nلنأخذ مصفوفة الالتباس من الدرس السابق: TP = 5، FN = 2، FP = 3، TN = 6، من أصل 16 رسالة.\n\n```\nAccuracy = (5 + 6) / 16 = 11 / 16 = 0.688، أي 68.8%\n```\n\nتظهر المشكلة على البيانات غير المتوازنة. إذا كانت 2% فقط من الرسائل مزعجة، فنموذج يتنبأ دائما بـ\"غير مزعجة\" يحصل على 98% دقة دون رصد رسالة واحدة: نحتاج مقاييس أدق.\n\n## الاستدعاء (recall): من كل الإيجابيات الحقيقية، كم وُجد منها\n\nيجيب **الاستدعاء (recall)** عن السؤال: من بين كل الأمثلة الإيجابية فعليا، كم منها وجده النموذج؟\n\n```\nRecall = TP / (TP + FN)\n```\n\n```\nRecall = 5 / (5 + 2) = 5 / 7 ≈ 0.714، أي 71.4%\n```\n\nيرصد النموذج نحو 71.4% من الرسائل المزعجة الحقيقية.\n\n## الدقة (precision): من كل ما أشار إليه النموذج، كم كان صحيحا\n\nتجيب **الدقة (precision)** عن سؤال مختلف: من بين كل ما صنّفه النموذج إيجابيا، كم منه إيجابي فعلا؟\n\n```\nPrecision = TP / (TP + FP)\n```\n\n```\nPrecision = 5 / (5 + 3) = 5 / 8 = 0.625، أي 62.5%\n```\n\nمن بين كل رسالة وسمها النموذج \"مزعجة\"، 62.5% منها مزعجة فعلا؛ والنسبة المتبقية 37.5% إيجابيات زائفة، رسائل عادية وُسمت خطأً.\n\n## مقياس F1: توازن بين الاثنين\n\nغالبا ما تتحرك الدقة والاستدعاء في اتجاهين متعاكسين: تحسين أحدهما يضرّ غالبا بالآخر. يجمع **مقياس F1** بينهما في رقم واحد:\n\n```\nF1 = 2 * TP / (2 * TP + FP + FN)\n```\n\n```\nF1 = (2 * 5) / (2 * 5 + 3 + 2) = 10 / 15 ≈ 0.667، أي 66.7%\n```\n\n## دورك الآن\n\nباستخدام نفس القيم TP = 5، FN = 2، FP = 3، TN = 6، احسبوا معدل الإيجابيات الزائفة (FPR)، المعرَّف بـ `FPR = FP / (FP + TN)`.\n\n> التصحيح: FPR = 3 / (3 + 6) = 3 / 9 ≈ 0.333، أي 33.3%.\n\n> **للتذكّر**\n>\n> يجيب الاستدعاء والدقة عن سؤالين مختلفين (هل نجد كل شيء؟ هل ما نجده صحيح؟)، ويلخّص مقياس F1 الاثنين في رقم واحد.\n\n*تم التحقق في 27 سبتمبر 2026 بإعادة حساب الدقة الإجمالية (68.8%) والاستدعاء (71.4%) والدقة (62.5%) ومقياس F1 (66.7%) ومعدل الإيجابيات الزائفة (33.3%) انطلاقا من أرقام مصفوفة الالتباس (TP=5، FN=2، FP=3، TN=6)، والتأكد من الصيغ في درس \"Classification: Accuracy, recall, precision, and related metrics\" من Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            }
          }
        },
        {
          "id": "l7",
          "title": "Courbe ROC et AUC",
          "type": "text",
          "duration": "9 min",
          "body": "## Tous les seuils à la fois\n\nLes métriques de la leçon précédente dépendent toutes d'un seuil fixé à l'avance. Comment le modèle se comporte-t-il à tous les seuils possibles ?\n\nC'est ce que montre la **courbe ROC** (Receiver Operating Characteristic). Pour chaque seuil possible, de 0 à 1, on calcule deux valeurs :\n\n- le taux de vrais positifs, c'est-à-dire le rappel : `VP / (VP + FN)`\n- le taux de faux positifs : `FP / (FP + VN)`\n\nOn place ces deux valeurs sur un graphique (faux positifs en abscisse, vrais positifs en ordonnée) pour chaque seuil, ce qui dessine une courbe. Un modèle parfait longe le coin en haut à gauche : un taux de vrais positifs de 1 pour un taux de faux positifs de 0.\n\n## L'AUC : l'aire sous la courbe\n\nL'**AUC** (Area Under the Curve) mesure l'aire sous cette courbe ROC, un nombre entre 0 et 1.\n\nL'AUC a une interprétation utile, indépendante du seuil choisi : c'est la probabilité que le modèle classe un exemple positif pris au hasard au-dessus d'un exemple négatif pris au hasard.\n\n- AUC = 1,0 : modèle parfait, sépare toujours les positifs des négatifs.\n- AUC = 0,5 : ne fait pas mieux qu'un tirage au sort.\n- AUC < 0,5 : se trompe systématiquement de sens, rare mais possible.\n\n## Choisir un point sur la courbe\n\nImaginez trois seuils pour un filtre anti-spam, représentés par trois points A, B, C sur la courbe ROC :\n\n- **A** : seuil élevé, très peu de faux positifs (presque aucun e-mail normal marqué spam à tort), mais moins de spams détectés.\n- **C** : seuil bas, presque tous les spams détectés (taux de vrais positifs élevé), au prix de plus de faux positifs.\n- **B** : entre les deux, un compromis raisonnable entre détection et fausses alertes.\n\nL'AUC résume la qualité globale du modèle sur tous les seuils, mais le choix final reste une décision métier : on accepte rarement de perdre un e-mail important, donc on choisit souvent un point proche de A.\n\n## Le piège de l'AUC qui ignore le déséquilibre\n\nReprenons l'exemple de la leçon précédente : sur des e-mails dont seulement 2 % sont des spams, un modèle qui prédit toujours \"non-spam\" obtient 98 % d'exactitude. Mais ce même modèle est incapable de classer un exemple positif au-dessus d'un exemple négatif, puisqu'il donne le même score à tous : son AUC vaut exactement 0,5, la valeur d'un tirage au sort. Une exactitude de 98 % peut donc coexister avec une AUC de 0,5, un modèle sans aucun pouvoir de discrimination réel. L'exactitude seule ne suffit pas ; l'AUC révèle ce qu'elle cache.\n\n## À vous de jouer\n\nUn modèle a une AUC de 0,5 sur un jeu de test. Que pouvez-vous en conclure sur sa capacité à distinguer les deux catégories ?\n\n> Correction : une AUC de 0,5 signifie que le modèle ne fait pas mieux qu'un choix aléatoire, quel que soit le seuil choisi.\n\n> **À retenir**\n>\n> La courbe ROC montre le compromis vrais/faux positifs à tous les seuils, et l'AUC résume ce compromis en un seul nombre, indépendant du seuil choisi.\n\n*Vérifié le 27 septembre 2026 en recalculant l'AUC (0,5) d'un modèle à score constant sur le scénario 2 % de spams / 98 % d'exactitude de la leçon précédente, et en confirmant les définitions sur la leçon « Classification: ROC and AUC » du Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*",
          "i18n": {
            "en": {
              "title": "ROC curve and AUC",
              "body": "## Every threshold at once\n\nThe metrics from the previous lesson all depend on a threshold fixed in advance. How does the model behave across every possible threshold?\n\nThat is what the **ROC curve** (Receiver Operating Characteristic) shows. For every possible threshold, from 0 to 1, two values are computed:\n\n- the true positive rate, which is recall: `TP / (TP + FN)`\n- the false positive rate: `FP / (FP + TN)`\n\nThese two values are plotted on a chart (false positives on the x-axis, true positives on the y-axis) for every threshold, drawing a curve. A perfect model hugs the top-left corner: a true positive rate of 1 at a false positive rate of 0.\n\n## AUC: the area under the curve\n\n**AUC** (Area Under the Curve) measures the area under this ROC curve, a number between 0 and 1.\n\nAUC has a useful interpretation, independent of the threshold chosen: it is the probability that the model ranks a randomly chosen positive example above a randomly chosen negative example.\n\n- AUC = 1.0: perfect model, always separates positives from negatives.\n- AUC = 0.5: no better than a coin flip.\n- AUC < 0.5: systematically gets the direction wrong, rare but possible.\n\n## Choosing a point on the curve\n\nImagine three thresholds for a spam filter, represented by three points A, B, C on the ROC curve:\n\n- **A**: high threshold, very few false positives (almost no normal email wrongly flagged as spam), but fewer spam emails caught.\n- **C**: low threshold, almost every spam email caught (high true positive rate), at the cost of more false positives.\n- **B**: between the two, a reasonable trade-off between catching spam and raising false alarms.\n\nAUC summarizes the model's overall quality across every threshold, but the final choice remains a business decision: losing an important email is rarely acceptable, so a point close to A is often chosen.\n\n## The trap of AUC ignoring class imbalance\n\nTake the example from the previous lesson again: on emails where only 2% are spam, a model that always predicts \"not spam\" scores 98% accuracy. But that same model cannot rank a positive example above a negative one, since it gives everyone the same score: its AUC is exactly 0.5, the value of a coin flip. A 98% accuracy can therefore coexist with an AUC of 0.5, a model with no real discriminative power. Accuracy alone is not enough; AUC exposes what it hides.\n\n## Your turn\n\nA model has an AUC of 0.5 on a test set. What can you conclude about its ability to tell the two categories apart?\n\n> Answer: an AUC of 0.5 means the model does no better than a random choice, whatever threshold is chosen.\n\n> **Key takeaways**\n>\n> The ROC curve shows the true/false positive trade-off at every threshold, and AUC summarizes that trade-off into a single number, independent of the chosen threshold.\n\n*Checked on September 27, 2026 by recomputing the AUC (0.5) of a constant-score model on the 2%-spam / 98%-accuracy scenario from the previous lesson, and confirming the definitions against the \"Classification: ROC and AUC\" lesson of the Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            },
            "ar": {
              "title": "منحنى ROC ومساحة AUC",
              "body": "## كل العتبات في آن واحد\n\nتعتمد مقاييس الدرس السابق كلها على عتبة محددة مسبقا. كيف يتصرف النموذج عبر كل العتبات الممكنة؟\n\nهذا ما يُظهره **منحنى ROC** (Receiver Operating Characteristic). لكل عتبة ممكنة، من 0 إلى 1، تُحسب قيمتان:\n\n- معدل الإيجابيات الحقيقية، وهو الاستدعاء: `TP / (TP + FN)`\n- معدل الإيجابيات الزائفة: `FP / (FP + TN)`\n\nتوضع هاتان القيمتان على رسم بياني (الإيجابيات الزائفة على المحور الأفقي، والحقيقية على المحور الرأسي) لكل عتبة، فيرسم ذلك منحنى. النموذج المثالي يلامس الزاوية العلوية اليسرى: معدل إيجابيات حقيقية يساوي 1 عند معدل إيجابيات زائفة يساوي 0.\n\n## AUC: المساحة تحت المنحنى\n\nتقيس **AUC** (Area Under the Curve) المساحة تحت منحنى ROC هذا، وهي رقم بين 0 و1.\n\nلـ AUC تفسير مفيد، مستقل عن العتبة المختارة: هي احتمال أن يرتّب النموذج مثالا إيجابيا عشوائيا فوق مثال سلبي عشوائي.\n\n- AUC = 1.0: نموذج مثالي، يفصل دائما الإيجابيات عن السلبيات.\n- AUC = 0.5: لا يفعل أفضل من رمي عملة.\n- AUC < 0.5: يخطئ الاتجاه بشكل منهجي، نادر لكن ممكن.\n\n## اختيار نقطة على المنحنى\n\nتخيلوا ثلاث عتبات لمرشّح بريد مزعج، ممثَّلة بثلاث نقاط A وB وC على منحنى ROC:\n\n- **A**: عتبة عالية، إيجابيات زائفة قليلة جدا (لا تكاد توجد رسالة عادية وُسمت خطأً كمزعجة)، لكن رسائل مزعجة أقل يتم رصدها.\n- **C**: عتبة منخفضة، تُرصد كل الرسائل المزعجة تقريبا (معدل إيجابيات حقيقية مرتفع)، على حساب إيجابيات زائفة أكثر.\n- **B**: بين الاثنتين، توازن معقول بين رصد الرسائل وإطلاق إنذارات كاذبة.\n\nتلخّص AUC الجودة الإجمالية للنموذج عبر كل العتبات، لكن اختيار العتبة النهائية يبقى قرارا يتعلق بالسياق: نادرا ما يُقبل فقدان رسالة مهمة، لذلك غالبا ما تُختار نقطة قريبة من A.\n\n## فخ AUC الذي يتجاهل اختلال التوازن\n\nلنعد إلى مثال الدرس السابق: على رسائل لا تمثّل فيها المزعجة سوى 2%، يحصل نموذج يتنبأ دائما بـ\"غير مزعجة\" على 98% دقة إجمالية. لكن هذا النموذج عاجز عن ترتيب مثال إيجابي فوق مثال سلبي، لأنه يعطي الجميع نفس الدرجة: قيمة AUC الخاصة به تساوي بالضبط 0.5، وهي قيمة رمي العملة. فدقة 98% يمكن إذن أن تتعايش مع AUC تساوي 0.5، أي نموذج بلا أي قدرة تمييزية حقيقية. الدقة وحدها لا تكفي؛ وAUC تكشف ما تخفيه.\n\n## دورك الآن\n\nنموذج له AUC تساوي 0.5 على مجموعة اختبار. ماذا يمكنكم أن تستنتجوا بخصوص قدرته على التمييز بين الفئتين؟\n\n> التصحيح: AUC تساوي 0.5 تعني أن النموذج لا يفعل أفضل من اختيار عشوائي، أيا كانت العتبة المختارة.\n\n> **للتذكّر**\n>\n> يُظهر منحنى ROC التوازن بين الإيجابيات الحقيقية والزائفة عند كل عتبة، وتلخّصه AUC في رقم واحد، مستقل عن العتبة المختارة.\n\n*تم التحقق في 27 سبتمبر 2026 بإعادة حساب AUC (0.5) لنموذج ذي درجة ثابتة على سيناريو 2% رسائل مزعجة / 98% دقة إجمالية من الدرس السابق، والتأكد من التعريفات في درس \"Classification: ROC and AUC\" من Machine Learning Crash Course (developers.google.com/machine-learning/crash-course).*"
            }
          }
        },
        {
          "id": "l8",
          "title": "Quiz : classification",
          "type": "quiz",
          "duration": "6 min",
          "questions": [
            {
              "id": "q1",
              "prompt": "À quoi sert la fonction sigmoïde dans une régression logistique ?",
              "options": [
                "Elle transforme le résultat d'une régression linéaire en une probabilité comprise entre 0 et 1",
                "Elle calcule directement la matrice de confusion",
                "Elle remplace le taux d'apprentissage pendant la descente de gradient",
                "Elle sert uniquement à afficher un graphique"
              ],
              "correctIndex": 0,
              "explanation": "La sigmoïde écrase n'importe quel nombre réel dans l'intervalle [0, 1], ce qui permet d'interpréter le résultat comme une probabilité."
            },
            {
              "id": "q2",
              "prompt": "Sur 16 e-mails, un modèle obtient VP = 5, FN = 2, FP = 3, VN = 6. Quel est le rappel (recall) de ce modèle ?",
              "options": [
                "5/7 ≈ 71,4 %",
                "5/8 = 62,5 %",
                "11/16 ≈ 68,8 %",
                "3/9 ≈ 33,3 %"
              ],
              "correctIndex": 0,
              "explanation": "Rappel = VP / (VP + FN) = 5 / (5 + 2) = 5/7 ≈ 71,4 %."
            },
            {
              "id": "q3",
              "prompt": "Un modèle marque \"spam\" 8 e-mails, dont 5 le sont vraiment. Quelle est sa précision ?",
              "options": [
                "62,5 %",
                "71,4 %",
                "50 %",
                "100 %"
              ],
              "correctIndex": 0,
              "explanation": "Précision = VP / (VP + FP) = 5 / 8 = 62,5 %."
            },
            {
              "id": "q4",
              "prompt": "Que représente une AUC de 0,5 ?",
              "options": [
                "Un modèle qui ne fait pas mieux qu'un tirage au sort pour distinguer les deux catégories",
                "Un modèle parfait",
                "Un modèle qui inverse systématiquement ses prédictions",
                "Un seuil de décision fixé à 0,5"
              ],
              "correctIndex": 0,
              "explanation": "Une AUC de 0,5 correspond à la diagonale de la courbe ROC : le modèle classe un exemple positif au-dessus d'un exemple négatif une fois sur deux, comme un tirage au sort."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: classification",
              "questions": [
                {
                  "prompt": "What does the sigmoid function do in logistic regression?",
                  "options": [
                    "It turns the output of a linear regression into a probability between 0 and 1",
                    "It directly computes the confusion matrix",
                    "It replaces the learning rate during gradient descent",
                    "It is only used to draw a chart"
                  ],
                  "explanation": "The sigmoid squeezes any real number into the [0, 1] range, which lets the output be read as a probability."
                },
                {
                  "prompt": "Across 16 emails, a model gets TP = 5, FN = 2, FP = 3, TN = 6. What is this model's recall?",
                  "options": [
                    "5/7 ≈ 71.4%",
                    "5/8 = 62.5%",
                    "11/16 ≈ 68.8%",
                    "3/9 ≈ 33.3%"
                  ],
                  "explanation": "Recall = TP / (TP + FN) = 5 / (5 + 2) = 5/7 ≈ 71.4%."
                },
                {
                  "prompt": "A model flags 8 emails as \"spam\", 5 of which really are. What is its precision?",
                  "options": [
                    "62.5%",
                    "71.4%",
                    "50%",
                    "100%"
                  ],
                  "explanation": "Precision = TP / (TP + FP) = 5 / 8 = 62.5%."
                },
                {
                  "prompt": "What does an AUC of 0.5 represent?",
                  "options": [
                    "A model that does no better than a coin flip at telling the two categories apart",
                    "A perfect model",
                    "A model that systematically inverts its predictions",
                    "A decision threshold fixed at 0.5"
                  ],
                  "explanation": "An AUC of 0.5 matches the diagonal of the ROC curve: the model ranks a positive example above a negative one only half the time, like a coin flip."
                }
              ]
            },
            "ar": {
              "title": "اختبار: التصنيف",
              "questions": [
                {
                  "prompt": "ما وظيفة دالة السيجمويد (sigmoid) في الانحدار اللوجستي؟",
                  "options": [
                    "تحوّل ناتج الانحدار الخطي إلى احتمال بين 0 و1",
                    "تحسب مصفوفة الالتباس مباشرة",
                    "تستبدل معدل التعلم أثناء الانحدار التدريجي",
                    "تُستخدم فقط لرسم بياني"
                  ],
                  "explanation": "تضغط السيجمويد أي رقم حقيقي ليقع بين 0 و1، ما يتيح قراءة الناتج كاحتمال."
                },
                {
                  "prompt": "عبر 16 رسالة، يحصل نموذج على TP = 5، FN = 2، FP = 3، TN = 6. ما استدعاء (recall) هذا النموذج؟",
                  "options": [
                    "5/7 ≈ 71.4%",
                    "5/8 = 62.5%",
                    "11/16 ≈ 68.8%",
                    "3/9 ≈ 33.3%"
                  ],
                  "explanation": "Recall = TP / (TP + FN) = 5 / (5 + 2) = 5/7 ≈ 71.4%."
                },
                {
                  "prompt": "يسم نموذج 8 رسائل بـ\"مزعجة\"، منها 5 مزعجة فعلا. ما دقته (precision)؟",
                  "options": [
                    "62.5%",
                    "71.4%",
                    "50%",
                    "100%"
                  ],
                  "explanation": "Precision = TP / (TP + FP) = 5 / 8 = 62.5%."
                },
                {
                  "prompt": "ماذا تمثّل AUC تساوي 0.5؟",
                  "options": [
                    "نموذج لا يفعل أفضل من رمي عملة في التمييز بين الفئتين",
                    "نموذج مثالي",
                    "نموذج يعكس تنبؤاته بشكل منهجي",
                    "عتبة قرار محددة عند 0.5"
                  ],
                  "explanation": "تقابل AUC تساوي 0.5 قطر منحنى ROC: يرتّب النموذج مثالا إيجابيا فوق مثال سلبي في مرة من كل مرتين فقط، كرمي عملة."
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "p3",
      "title": "Données et généralisation",
      "lessons": [
        {
          "id": "l9",
          "title": "Données numériques et catégorielles",
          "type": "text",
          "duration": "10 min",
          "body": "## Deux grandes familles de données\n\nAvant d'entraîner un modèle, il faut regarder de près les données qu'on lui donne. On distingue deux grandes familles de caractéristiques (features) : les données **numériques** et les données **catégorielles**.\n\n## Données numériques : des grandeurs qu'on peut comparer\n\nUne donnée numérique est une grandeur sur laquelle les opérations arithmétiques ont un sens réel. La température, un poids, un nombre de cerfs observés dans une forêt sont des données numériques : dire qu'il fait \"deux fois plus chaud\" ou qu'une voiture pèse \"1000 kg de plus\" a un sens concret.\n\nAttention cependant : tout ce qui ressemble à un nombre n'est pas forcément une donnée numérique au sens utile. Un code postal est écrit avec des chiffres, mais \"75001\" n'est pas la moitié de \"150002\" ; additionner deux codes postaux ne veut rien dire. Un code postal doit être traité comme une donnée catégorielle, pas numérique.\n\n## Données catégorielles : des étiquettes, pas des quantités\n\nUne donnée catégorielle regroupe des exemples dans un ensemble fini d'étiquettes, sans relation d'ordre ou de grandeur entre elles : l'espèce d'un animal, la couleur d'une voiture, le pays d'un client. Une couleur n'est pas \"plus grande\" qu'une autre.\n\nUn piège fréquent : regrouper des nombres en tranches (par exemple, des âges regroupés en \"18-25\", \"26-40\", \"41-60\") transforme une donnée numérique en donnée catégorielle. C'est parfois utile pour simplifier un modèle, mais on perd l'information fine à l'intérieur de chaque tranche : deux personnes de 26 et 39 ans se retrouvent dans la même case, alors qu'un modèle qui garde l'âge brut peut capter cette nuance.\n\n## Comment un modèle traite les données catégorielles\n\nUn modèle de machine learning manipule des nombres, pas des mots. Pour lui donner une donnée catégorielle comme \"couleur : rouge, vert ou bleu\", une technique courante est l'**encodage one-hot** : chaque catégorie devient une colonne binaire (0 ou 1). Pour la couleur \"vert\", la colonne \"rouge\" vaut 0, la colonne \"vert\" vaut 1, la colonne \"bleu\" vaut 0.\n\n## Un exemple pour trancher entre les deux\n\nLa surface d'une maison, par exemple 100 m² contre 200 m², est une vraie donnée numérique : une maison de 200 m² a réellement deux fois plus de surface habitable qu'une maison de 100 m², et un modèle peut légitimement apprendre une relation proportionnelle entre la surface et le prix.\n\n## À vous de jouer\n\nUn identifiant client est un nombre à 6 chiffres, unique pour chaque personne. Est-ce une donnée numérique ou catégorielle ?\n\n> Correction : c'est une donnée catégorielle. Bien qu'écrit avec des chiffres, un identifiant client ne porte aucune relation de grandeur : le client n°100002 n'est pas \"deux fois\" le client n°50001.\n\n> **À retenir**\n>\n> Une donnée numérique porte une vraie grandeur comparable, une donnée catégorielle regroupe des étiquettes sans ordre ; l'encodage one-hot permet de donner une donnée catégorielle à un modèle qui ne manipule que des nombres.\n\n*Vérifié le 27 septembre 2026 sur les pages \"Categorical data\" et \"Working with numerical data: Binning\" du Machine Learning Crash Course de Google.*",
          "i18n": {
            "en": {
              "title": "Numerical and categorical data",
              "body": "## Two broad families of data\n\nBefore training a model, you need to look closely at the data you feed it. There are two broad families of features: **numerical** data and **categorical** data.\n\n## Numerical data: quantities that can be compared\n\nA numerical feature is a quantity on which arithmetic operations have real meaning. Temperature, weight, or a count of deer observed in a forest are numerical data: saying it is \"twice as hot\" or that a car weighs \"1000 kg more\" has a concrete meaning.\n\nBe careful though: anything that looks like a number is not necessarily numerical in a useful sense. A postal code is written with digits, but \"75001\" is not half of \"150002\"; adding two postal codes means nothing. A postal code should be treated as categorical data, not numerical.\n\n## Categorical data: labels, not quantities\n\nA categorical feature groups examples into a finite set of labels, with no order or magnitude relationship between them: an animal's species, a car's color, a customer's country. One color is not \"bigger\" than another.\n\nA common trap: grouping numbers into bins (for example, ages grouped into \"18-25\", \"26-40\", \"41-60\") turns numerical data into categorical data. This can simplify a model, but it loses the fine-grained information inside each bin: someone aged 26 and someone aged 39 land in the same bucket, while a model that keeps the raw age can pick up on that difference.\n\n## How a model handles categorical data\n\nA machine learning model works with numbers, not words. To feed it a categorical feature like \"color: red, green, or blue\", a common technique is **one-hot encoding**: each category becomes a binary column (0 or 1). For the color \"green\", the \"red\" column is 0, the \"green\" column is 1, the \"blue\" column is 0.\n\n## An example to settle the distinction\n\nA house's floor area, say 100 sqm versus 200 sqm, is genuinely numerical data: a 200 sqm house really does have twice the living space of a 100 sqm house, and a model can legitimately learn a proportional relationship between area and price.\n\n## Your turn\n\nA customer ID is a 6-digit number, unique to each person. Is this numerical or categorical data?\n\n> Answer: it is categorical data. Even though it is written with digits, a customer ID carries no magnitude relationship: customer #100002 is not \"twice\" customer #50001.\n\n> **Key takeaways**\n>\n> Numerical data carries a real, comparable quantity; categorical data groups labels with no order; one-hot encoding lets a model that only handles numbers work with categorical data.\n\n*Checked on September 27, 2026 against the \"Categorical data\" and \"Working with numerical data: Binning\" pages of Google's Machine Learning Crash Course.*"
            },
            "ar": {
              "title": "البيانات العددية والفئوية (categorical)",
              "body": "## عائلتان كبيرتان من البيانات\n\nقبل تدريب نموذج، يجب فحص البيانات المُعطاة له عن كثب. نميّز عائلتين كبيرتين من الخصائص (features): البيانات **العددية (numerical)** والبيانات **الفئوية (categorical)**.\n\n## البيانات العددية: مقادير يمكن مقارنتها\n\nالخاصية العددية مقدار تحمل فيه العمليات الحسابية معنى حقيقيا. درجة الحرارة، أو الوزن، أو عدد الأيائل المرصودة في غابة، كلها بيانات عددية: القول إن الجو \"أشد حرارة بمرتين\" أو إن سيارة تزن \"1000 كلغ أكثر\" له معنى ملموس.\n\nلكن احذر: كل ما يشبه رقما ليس بالضرورة عدديا بمعنى مفيد. الرمز البريدي يُكتب بأرقام، لكن \"75001\" ليس نصف \"150002\"؛ جمع رمزين بريديين لا معنى له. يجب معاملة الرمز البريدي كبيانات فئوية، لا عددية.\n\n## البيانات الفئوية: تسميات لا كميات\n\nتجمّع الخاصية الفئوية الأمثلة في مجموعة محدودة من التسميات، دون علاقة ترتيب أو مقدار بينها: نوع حيوان، لون سيارة، بلد عميل. لون ليس \"أكبر\" من آخر.\n\nفخ شائع: تجميع الأرقام في شرائح (مثلا، أعمار مجمّعة في \"18-25\"، \"26-40\"، \"41-60\") يحوّل بيانات عددية إلى فئوية. هذا مفيد أحيانا لتبسيط النموذج، لكنه يفقد المعلومة الدقيقة داخل كل شريحة: شخص عمره 26 وآخر عمره 39 ينتهي بهما المطاف في نفس الخانة، بينما نموذج يحتفظ بالعمر الخام يمكنه التقاط هذا الفارق.\n\n## كيف يتعامل النموذج مع البيانات الفئوية\n\nيتعامل نموذج تعلم الآلة مع أرقام لا كلمات. لإعطائه خاصية فئوية مثل \"اللون: أحمر أو أخضر أو أزرق\"، تقنية شائعة هي **الترميز الأحادي الساخن (one-hot encoding)**: تصبح كل فئة عمودا ثنائيا (0 أو 1). بالنسبة للون \"أخضر\"، يساوي عمود \"أحمر\" 0، وعمود \"أخضر\" 1، وعمود \"أزرق\" 0.\n\n## مثال يحسم التمييز\n\nمساحة منزل، لتكن 100 م² مقابل 200 م²، بيانات عددية حقيقية: منزل بمساحة 200 م² يملك فعلا ضعف المساحة المعيشية لمنزل بـ100 م²، ويمكن لنموذج أن يتعلم بشكل مشروع علاقة تناسبية بين المساحة والسعر.\n\n## دورك الآن\n\nمعرّف عميل هو رقم من 6 خانات، فريد لكل شخص. هل هذه بيانات عددية أم فئوية؟\n\n> التصحيح: إنها بيانات فئوية. رغم كتابتها بأرقام، لا يحمل معرّف العميل أي علاقة مقدار: العميل رقم 100002 ليس \"ضعف\" العميل رقم 50001.\n\n> **للتذكّر**\n>\n> تحمل البيانات العددية مقدارا حقيقيا قابلا للمقارنة، وتجمّع البيانات الفئوية تسميات دون ترتيب؛ يتيح الترميز الأحادي الساخن لنموذج لا يتعامل إلا مع الأرقام العمل مع بيانات فئوية.\n\n*تم التحقق في 2026-09-27 على صفحتي \"Categorical data\" و\"Working with numerical data: Binning\" من Machine Learning Crash Course من Google.*"
            }
          }
        },
        {
          "id": "l10",
          "title": "Généralisation et surapprentissage",
          "type": "text",
          "duration": "11 min",
          "body": "## Le travail invisible derrière un modèle\n\nUn fait surprend souvent les débutants : dans un projet de machine learning réel, l'entraînement du modèle lui-même ne représente qu'une petite partie du travail. Collecter, nettoyer, vérifier et préparer les données peut représenter jusqu'à 80 % du temps d'un projet. Un modèle entraîné sur des données mal préparées ne vaut rien, aussi sophistiqué soit-il.\n\n## Diviser les données en trois ensembles\n\nPour savoir si un modèle fonctionne vraiment, on ne peut pas se contenter de mesurer sa perte sur les données qui ont servi à l'entraîner : il pourrait simplement les avoir mémorisées. On divise donc les données disponibles en trois ensembles distincts :\n\n- l'**ensemble d'entraînement**, sur lequel le modèle ajuste ses poids ;\n- l'**ensemble de validation**, utilisé pendant le développement pour comparer des variantes de modèle et régler les hyperparamètres, sans jamais servir à l'entraînement direct ;\n- l'**ensemble de test**, gardé de côté et utilisé une seule fois à la fin, pour estimer honnêtement la performance sur des données jamais vues.\n\nUn piège fréquent : réutiliser l'ensemble de test à plusieurs reprises pour arbitrer entre des variantes de modèle revient à le transformer en un second ensemble de validation. La mesure finale de performance devient alors trop optimiste, puisque le modèle a fini par être ajusté, indirectement, sur ces mêmes données qu'il était censé n'avoir jamais vues.\n\n## Le surapprentissage : bien retenir la leçon, mais par cœur\n\nLe **surapprentissage** (overfitting) survient quand un modèle colle trop près à ses données d'entraînement, au point de capturer leur bruit et leurs particularités plutôt que la tendance générale. Un modèle en surapprentissage affiche une perte très faible sur l'entraînement, mais une perte nettement plus élevée sur la validation ou le test : c'est le signal typique.\n\nOn observe cela concrètement sur une courbe de perte : la perte d'entraînement continue de baisser à mesure que l'entraînement avance, tandis que la perte de validation baisse d'abord, puis remonte. Ce point où la validation recommence à monter marque le début du surapprentissage.\n\n## Deux remèdes courants\n\nLa **régularisation** ajoute une pénalité sur la complexité du modèle, souvent en pénalisant des poids trop grands (régularisation L2, contrôlée par un coefficient souvent noté lambda). Plus lambda est élevé, plus le modèle est poussé vers la simplicité, au risque, si lambda est trop grand, de sous-apprendre.\n\nL'**arrêt précoce** (early stopping) consiste simplement à arrêter l'entraînement au moment où la perte de validation cesse de s'améliorer, avant qu'elle ne remonte.\n\n## À vous de jouer\n\nUn modèle affiche une perte d'entraînement de 0,02 et une perte de validation de 0,85. Que pouvez-vous en conclure ?\n\n> Correction : l'écart important entre une perte d'entraînement très basse et une perte de validation beaucoup plus haute est le signal classique d'un surapprentissage : le modèle a mémorisé les données d'entraînement plutôt qu'appris une tendance générale.\n\n> **À retenir**\n>\n> On divise les données en entraînement, validation et test pour détecter honnêtement le surapprentissage, et la régularisation ou l'arrêt précoce permettent de le limiter.\n\n*Vérifié le 27 septembre 2026 sur la page \"Overfitting\" (partition des données et courbe de perte entraînement/validation) du Machine Learning Crash Course de Google.*",
          "i18n": {
            "en": {
              "title": "Generalization and overfitting",
              "body": "## The invisible work behind a model\n\nOne fact often surprises beginners: in a real machine learning project, training the model itself is only a small part of the work. Collecting, cleaning, checking, and preparing data can take up to 80% of a project's time. A model trained on poorly prepared data is worthless, no matter how sophisticated it is.\n\n## Splitting data into three sets\n\nTo know whether a model really works, you cannot just measure its loss on the data used to train it: it could simply have memorized it. Available data is therefore split into three distinct sets:\n\n- the **training set**, on which the model adjusts its weights;\n- the **validation set**, used during development to compare model variants and tune hyperparameters, without ever being used for direct training;\n- the **test set**, held aside and used only once at the end, to honestly estimate performance on data never seen before.\n\nA common trap: reusing the test set repeatedly to arbitrate between model variants effectively turns it into a second validation set. The final performance figure then becomes too optimistic, since the model has ended up being tuned, indirectly, on the very data it was supposed to have never seen.\n\n## Overfitting: learning the lesson well, but by rote\n\n**Overfitting** happens when a model sticks too closely to its training data, to the point of capturing its noise and quirks rather than the general trend. An overfit model shows very low loss on training, but noticeably higher loss on validation or test: that is the typical signal.\n\nYou can see this on a loss curve: training loss keeps dropping as training goes on, while validation loss first drops, then rises again. The point where validation starts rising again marks the onset of overfitting.\n\n## Two common remedies\n\n**Regularization** adds a penalty on model complexity, often by penalizing overly large weights (L2 regularization, controlled by a coefficient usually called lambda). The higher lambda is, the more the model is pushed toward simplicity, at the risk of underfitting if lambda is too high.\n\n**Early stopping** simply stops training the moment validation loss stops improving, before it starts rising.\n\n## Your turn\n\nA model shows a training loss of 0.02 and a validation loss of 0.85. What can you conclude?\n\n> Answer: the large gap between a very low training loss and a much higher validation loss is the classic sign of overfitting: the model memorized the training data rather than learning a general trend.\n\n> **Key takeaways**\n>\n> Data is split into training, validation, and test to honestly detect overfitting, and regularization or early stopping help limit it.\n\n*Checked on September 27, 2026 against the \"Overfitting\" page (dataset partitioning and training/validation loss curve) of Google's Machine Learning Crash Course.*"
            },
            "ar": {
              "title": "التعميم (generalization) والإفراط في التعلم (overfitting)",
              "body": "## العمل غير المرئي خلف النموذج\n\nحقيقة كثيرا ما تفاجئ المبتدئين: في مشروع تعلم آلة حقيقي، لا يمثّل تدريب النموذج نفسه سوى جزء صغير من العمل. قد يستغرق جمع البيانات وتنظيفها والتحقق منها وإعدادها حتى 80% من وقت المشروع. النموذج المدرَّب على بيانات سيئة الإعداد عديم القيمة، مهما كان متطورا.\n\n## تقسيم البيانات إلى ثلاث مجموعات\n\nلمعرفة ما إذا كان النموذج يعمل فعلا، لا يمكن الاكتفاء بقياس خسارته على البيانات التي استُخدمت لتدريبه: فقد يكون قد حفظها ببساطة. لذلك تُقسَّم البيانات المتاحة إلى ثلاث مجموعات مميزة:\n\n- **مجموعة التدريب (training set)**، يضبط عليها النموذج أوزانه؛\n- **مجموعة التحقق (validation set)**، تُستخدم أثناء التطوير لمقارنة نسخ من النموذج وضبط المعاملات الفائقة، دون أن تُستخدم أبدا للتدريب المباشر؛\n- **مجموعة الاختبار (test set)**، تُحفظ جانبا وتُستخدم مرة واحدة فقط في النهاية، لتقدير الأداء بأمانة على بيانات لم تُرَ من قبل.\n\nفخ شائع: إعادة استخدام مجموعة الاختبار مرارا للمفاضلة بين نسخ من النموذج يحوّلها فعليا إلى مجموعة تحقق ثانية. عندها يصبح الرقم النهائي للأداء متفائلا أكثر من اللازم، لأن النموذج انتهى به الأمر مضبوطا، بشكل غير مباشر، على نفس البيانات التي كان من المفترض ألا يراها أبدا.\n\n## الإفراط في التعلم (overfitting): حفظ الدرس جيدا، لكن عن ظهر قلب\n\nيحدث **الإفراط في التعلم (overfitting)** عندما يلتصق النموذج كثيرا ببيانات التدريب، إلى درجة التقاط ضجيجها وخصوصياتها بدل الاتجاه العام. يُظهر النموذج المفرط في التعلم خسارة منخفضة جدا على التدريب، لكن خسارة أعلى بوضوح على التحقق أو الاختبار: هذه هي الإشارة النموذجية.\n\nيُلاحظ هذا عمليا على منحنى الخسارة: تستمر خسارة التدريب في الانخفاض مع تقدم التدريب، بينما تنخفض خسارة التحقق أولا ثم ترتفع من جديد. النقطة التي تبدأ عندها خسارة التحقق بالارتفاع من جديد تُمثّل بداية الإفراط في التعلم.\n\n## علاجان شائعان\n\nتضيف **التسوية (regularization)** عقوبة على تعقيد النموذج، غالبا بمعاقبة الأوزان الكبيرة جدا (تسوية L2، تُضبط بمعامل يُسمى غالبا لامبدا). كلما ارتفعت لامبدا، دُفع النموذج أكثر نحو البساطة، مع خطر نقص التعلم (underfitting) إذا كانت لامبدا كبيرة جدا.\n\nيتمثّل **التوقف المبكر (early stopping)** ببساطة في إيقاف التدريب في اللحظة التي تتوقف فيها خسارة التحقق عن التحسّن، قبل أن تبدأ بالارتفاع.\n\n## دورك الآن\n\nيُظهر نموذج خسارة تدريب تساوي 0.02 وخسارة تحقق تساوي 0.85. ماذا يمكنك أن تستنتج؟\n\n> التصحيح: الفارق الكبير بين خسارة تدريب منخفضة جدا وخسارة تحقق أعلى بكثير هو العلامة الكلاسيكية للإفراط في التعلم: حفظ النموذج بيانات التدريب بدل تعلّم اتجاه عام.\n\n> **للتذكّر**\n>\n> تُقسَّم البيانات إلى تدريب وتحقق واختبار لرصد الإفراط في التعلم بأمانة، وتساعد التسوية أو التوقف المبكر على الحد منه.\n\n*تم التحقق في 2026-09-27 على صفحة \"Overfitting\" (تقسيم البيانات ومنحنى خسارة التدريب/التحقق) من Machine Learning Crash Course من Google.*"
            }
          }
        },
        {
          "id": "l11",
          "title": "Quiz : données et généralisation",
          "type": "quiz",
          "duration": "5 min",
          "questions": [
            {
              "id": "q5",
              "prompt": "Un code postal écrit en chiffres doit-il être traité comme une donnée numérique ?",
              "options": [
                "Non, car il n'existe pas de relation de grandeur entre deux codes postaux",
                "Oui, car il est écrit avec des chiffres",
                "Oui, mais seulement après une régression linéaire",
                "Cela dépend uniquement du pays"
              ],
              "correctIndex": 0,
              "explanation": "Un code postal est une étiquette, pas une quantité : additionner ou comparer deux codes postaux n'a pas de sens arithmétique. C'est une donnée catégorielle."
            },
            {
              "id": "q6",
              "prompt": "À quoi sert l'ensemble de test dans un projet de machine learning ?",
              "options": [
                "À estimer honnêtement la performance du modèle une seule fois, sur des données jamais vues",
                "À entraîner directement les poids du modèle",
                "À remplacer l'ensemble de validation pendant le développement",
                "À encoder les données catégorielles"
              ],
              "correctIndex": 0,
              "explanation": "L'ensemble de test est mis de côté et utilisé une seule fois, à la fin, pour ne pas biaiser l'estimation finale de la performance."
            },
            {
              "id": "q7",
              "prompt": "Un modèle a une perte d'entraînement de 0,02 et une perte de validation de 0,85. Quel est le diagnostic le plus probable ?",
              "options": [
                "Surapprentissage : le modèle a mémorisé les données d'entraînement",
                "Le modèle est parfaitement généralisé",
                "Les données d'entraînement sont trop nombreuses",
                "Le taux d'apprentissage est trop faible"
              ],
              "correctIndex": 0,
              "explanation": "Un grand écart entre une perte d'entraînement très basse et une perte de validation nettement plus haute est le signal classique du surapprentissage."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: data and generalization",
              "questions": [
                {
                  "prompt": "Should a postal code written in digits be treated as numerical data?",
                  "options": [
                    "No, because there is no magnitude relationship between two postal codes",
                    "Yes, because it is written with digits",
                    "Yes, but only after a linear regression",
                    "It depends only on the country"
                  ],
                  "explanation": "A postal code is a label, not a quantity: adding or comparing two postal codes has no arithmetic meaning. It is categorical data."
                },
                {
                  "prompt": "What is the test set used for in a machine learning project?",
                  "options": [
                    "To honestly estimate model performance once, on data never seen before",
                    "To directly train the model's weights",
                    "To replace the validation set during development",
                    "To encode categorical data"
                  ],
                  "explanation": "The test set is held aside and used only once, at the end, so it does not bias the final performance estimate."
                },
                {
                  "prompt": "A model has a training loss of 0.02 and a validation loss of 0.85. What is the most likely diagnosis?",
                  "options": [
                    "Overfitting: the model memorized the training data",
                    "The model is perfectly generalized",
                    "There is too much training data",
                    "The learning rate is too low"
                  ],
                  "explanation": "A large gap between a very low training loss and a much higher validation loss is the classic sign of overfitting."
                }
              ]
            },
            "ar": {
              "title": "اختبار: البيانات والتعميم",
              "questions": [
                {
                  "prompt": "هل يجب معاملة رمز بريدي مكتوب بأرقام كبيانات عددية؟",
                  "options": [
                    "لا، لأنه لا توجد علاقة مقدار بين رمزين بريديين",
                    "نعم، لأنه مكتوب بأرقام",
                    "نعم، لكن فقط بعد انحدار خطي",
                    "يعتمد فقط على البلد"
                  ],
                  "explanation": "الرمز البريدي تسمية لا كمية: جمع أو مقارنة رمزين بريديين لا معنى حسابيا له. إنه بيانات فئوية."
                },
                {
                  "prompt": "ما استخدام مجموعة الاختبار في مشروع تعلم آلة؟",
                  "options": [
                    "لتقدير أداء النموذج بأمانة مرة واحدة، على بيانات لم تُرَ من قبل",
                    "لتدريب أوزان النموذج مباشرة",
                    "لتحل محل مجموعة التحقق أثناء التطوير",
                    "لترميز البيانات الفئوية"
                  ],
                  "explanation": "تُحفظ مجموعة الاختبار جانبا وتُستخدم مرة واحدة فقط، في النهاية، حتى لا تنحاز التقديرات النهائية للأداء."
                },
                {
                  "prompt": "يُظهر نموذج خسارة تدريب تساوي 0.02 وخسارة تحقق تساوي 0.85. ما التشخيص الأرجح؟",
                  "options": [
                    "إفراط في التعلم: حفظ النموذج بيانات التدريب",
                    "النموذج معمَّم بشكل مثالي",
                    "بيانات التدريب كثيرة جدا",
                    "معدل التعلم منخفض جدا"
                  ],
                  "explanation": "الفارق الكبير بين خسارة تدريب منخفضة جدا وخسارة تحقق أعلى بكثير هو العلامة الكلاسيكية للإفراط في التعلم."
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "p4",
      "title": "Réseaux de neurones et embeddings",
      "lessons": [
        {
          "id": "l12",
          "title": "Réseaux de neurones : au-delà du modèle linéaire",
          "type": "text",
          "duration": "11 min",
          "body": "## Les limites d'une frontière droite\n\nLa régression logistique de la leçon 4 trace une frontière de décision qui reste, au fond, une ligne droite (ou un plan, en plusieurs dimensions). Beaucoup de problèmes réels ne se laissent pas séparer par une ligne droite : imaginez des points positifs concentrés au centre d'un graphique, entourés d'un anneau de points négatifs. Aucune ligne droite ne peut isoler le centre de l'anneau.\n\n## Une première astuce : croiser les caractéristiques\n\nUne solution simple consiste à fabriquer une nouvelle caractéristique en croisant deux caractéristiques existantes, par exemple `x3 = x1 * x2`. Ce **croisement de caractéristiques** (feature cross) permet à un modèle linéaire de capturer des interactions non linéaires, sans changer sa structure de base. C'est utile, mais cela demande de deviner à l'avance quels croisements sont pertinents.\n\n## Les réseaux de neurones : laisser le modèle apprendre ses propres croisements\n\nUn **réseau de neurones** automatise cette idée. Il est composé de **couches** (layers) de **nœuds** (nodes), aussi appelés neurones artificiels. Chaque nœud reçoit les sorties de la couche précédente, calcule une somme pondérée (comme dans une régression linéaire), puis applique une **fonction d'activation** non linéaire à ce résultat, par exemple ReLU (qui remplace toute valeur négative par 0 et laisse passer les valeurs positives inchangées).\n\nCette fonction d'activation est essentielle : sans elle, empiler plusieurs couches reviendrait toujours, mathématiquement, à une seule grande régression linéaire. C'est la non-linéarité qui permet au réseau de représenter des frontières de décision courbes, comme celle de l'exemple du centre et de l'anneau.\n\nUn piège fréquent : choisir une fonction d'activation qui sature aux valeurs extrêmes, comme la sigmoïde, dans un réseau à plusieurs couches ralentit ou bloque l'apprentissage, parce que son gradient devient presque nul pour les valeurs très positives ou très négatives. C'est l'une des raisons qui a rendu ReLU aussi populaire dans les réseaux profonds.\n\n## Couches cachées et entraînement\n\nLes couches entre l'entrée et la sortie du réseau sont appelées **couches cachées** (hidden layers). Chaque nœud de chaque couche a ses propres poids, ajustés pendant l'entraînement par descente de gradient, exactement comme `w1` et `b` dans la régression linéaire, mais à beaucoup plus grande échelle : un petit réseau peut déjà compter des centaines de poids.\n\n## À vous de jouer\n\nPourquoi un réseau de neurones sans aucune fonction d'activation non linéaire, même avec dix couches, se comporte-t-il comme un simple modèle linéaire ?\n\n> Correction : sans non-linéarité, chaque couche ne fait qu'une combinaison linéaire de la précédente. Empiler des combinaisons linéaires reste une combinaison linéaire : dix couches sans activation équivalent mathématiquement à une seule couche linéaire.\n\n> **À retenir**\n>\n> Un réseau de neurones empile des couches de nœuds pondérés, et ce sont les fonctions d'activation non linéaires qui lui permettent de représenter des frontières de décision plus complexes qu'une ligne droite.\n\n*Vérifié le 27 septembre 2026 sur la page \"Neural networks: Nodes and hidden layers\" du Machine Learning Crash Course de Google.*",
          "i18n": {
            "en": {
              "title": "Neural networks: beyond the linear model",
              "body": "## The limits of a straight boundary\n\nLogistic regression from lesson 4 draws a decision boundary that remains, fundamentally, a straight line (or a plane, in higher dimensions). Many real problems cannot be separated by a straight line: picture positive points clustered at the center of a chart, surrounded by a ring of negative points. No straight line can isolate the center from the ring.\n\n## A first trick: crossing features\n\nOne simple solution is to build a new feature by crossing two existing features, for example `x3 = x1 * x2`. This **feature cross** lets a linear model capture nonlinear interactions without changing its basic structure. It is useful, but it requires guessing in advance which crosses matter.\n\n## Neural networks: letting the model learn its own crosses\n\nA **neural network** automates this idea. It is made of **layers** of **nodes**, also called artificial neurons. Each node receives the outputs of the previous layer, computes a weighted sum (as in linear regression), then applies a nonlinear **activation function** to that result, for example ReLU (which replaces any negative value with 0 and passes positive values through unchanged).\n\nThis activation function is essential: without it, stacking several layers would still, mathematically, amount to one large linear regression. It is the nonlinearity that lets the network represent curved decision boundaries, like the center-and-ring example.\n\nA common trap: picking an activation function that saturates at extreme values, such as sigmoid, in a multi-layer network slows down or blocks learning, because its gradient becomes nearly zero for very positive or very negative inputs. That is one of the reasons ReLU became so popular in deep networks.\n\n## Hidden layers and training\n\nThe layers between the network's input and output are called **hidden layers**. Every node in every layer has its own weights, adjusted during training through gradient descent, exactly like `w1` and `b` in linear regression, but at a much larger scale: even a small network can already have hundreds of weights.\n\n## Your turn\n\nWhy does a neural network with no nonlinear activation function at all, even with ten layers, behave like a simple linear model?\n\n> Answer: without nonlinearity, each layer only performs a linear combination of the previous one. Stacking linear combinations stays a linear combination: ten layers without activation are mathematically equivalent to a single linear layer.\n\n> **Key takeaways**\n>\n> A neural network stacks layers of weighted nodes, and it is the nonlinear activation functions that let it represent decision boundaries more complex than a straight line.\n\n*Checked on September 27, 2026 against the \"Neural networks: Nodes and hidden layers\" page of Google's Machine Learning Crash Course.*"
            },
            "ar": {
              "title": "الشبكات العصبية: ما وراء النموذج الخطي",
              "body": "## حدود الحدّ الفاصل المستقيم\n\nيرسم الانحدار اللوجستي من الدرس 4 حدا فاصلا للقرار يبقى، في الجوهر، خطا مستقيما (أو مستوى، في أبعاد أعلى). كثير من المسائل الحقيقية لا يمكن فصلها بخط مستقيم: تخيلوا نقاطا إيجابية متمركزة في وسط رسم بياني، محاطة بحلقة من نقاط سلبية. لا يمكن لأي خط مستقيم عزل المركز عن الحلقة.\n\n## حيلة أولى: تقاطع الخصائص\n\nحل بسيط هو بناء خاصية جديدة بتقاطع خاصيتين موجودتين، مثلا `x3 = x1 * x2`. يتيح **تقاطع الخصائص (feature cross)** لنموذج خطي التقاط تفاعلات غير خطية دون تغيير بنيته الأساسية. هذا مفيد، لكنه يتطلب تخمين التقاطعات المهمة مسبقا.\n\n## الشبكات العصبية: ترك النموذج يتعلم تقاطعاته الخاصة\n\nتُؤتمت **الشبكة العصبية (neural network)** هذه الفكرة. تتكون من **طبقات (layers)** من **عُقد (nodes)**، تُسمى أيضا خلايا عصبية اصطناعية. تستقبل كل عقدة مخرجات الطبقة السابقة، وتحسب مجموعا مرجّحا (كما في الانحدار الخطي)، ثم تطبّق **دالة تفعيل (activation function)** غير خطية على تلك النتيجة، مثل ReLU (التي تستبدل أي قيمة سالبة بـ0 وتمرر القيم الموجبة دون تغيير).\n\nدالة التفعيل هذه أساسية: بدونها، سيظل تكديس عدة طبقات، رياضيا، معادلا لانحدار خطي واحد كبير. اللاخطية هي ما يتيح للشبكة تمثيل حدود قرار منحنية، كمثال المركز والحلقة.\n\nفخ شائع: اختيار دالة تفعيل تتشبّع عند القيم القصوى، مثل السيغمويد (sigmoid)، في شبكة متعددة الطبقات يبطئ التعلم أو يوقفه، لأن مشتقّها يقترب من الصفر عند القيم الموجبة أو السالبة الكبيرة جدا. هذا أحد أسباب شهرة ReLU في الشبكات العميقة.\n\n## الطبقات الخفية والتدريب\n\nتُسمى الطبقات بين مدخل الشبكة ومخرجها **طبقات خفية (hidden layers)**. لكل عقدة في كل طبقة أوزانها الخاصة، تُضبط أثناء التدريب عبر الانحدار التدريجي، تماما كـ`w1` و`b` في الانحدار الخطي، لكن على نطاق أوسع بكثير: يمكن لشبكة صغيرة أن تضم فعلا مئات الأوزان.\n\n## دورك الآن\n\nلماذا تتصرف شبكة عصبية بلا أي دالة تفعيل غير خطية، حتى بعشر طبقات، كنموذج خطي بسيط؟\n\n> التصحيح: دون لاخطية، تقوم كل طبقة فقط بتركيبة خطية للطبقة السابقة. تكديس تركيبات خطية يبقى تركيبة خطية: عشر طبقات دون تفعيل تعادل رياضيا طبقة خطية واحدة.\n\n> **للتذكّر**\n>\n> تكدّس الشبكة العصبية طبقات من عقد مرجّحة، ودوال التفعيل غير الخطية هي ما يتيح لها تمثيل حدود قرار أكثر تعقيدا من خط مستقيم.\n\n*تم التحقق في 2026-09-27 على صفحة \"Neural networks: Nodes and hidden layers\" من Machine Learning Crash Course من Google.*"
            }
          }
        },
        {
          "id": "l13",
          "title": "Les embeddings",
          "type": "text",
          "duration": "10 min",
          "body": "## Un catalogue trop grand pour le one-hot\n\nLa leçon 9 a présenté l'encodage one-hot pour donner une donnée catégorielle à un modèle. Cette technique fonctionne bien pour une poignée de catégories, mais elle s'effondre à grande échelle.\n\nImaginez une application de recommandation de plats qui propose 5 000 plats différents. Représenter chaque plat en one-hot demande un vecteur de 5 000 colonnes, presque toutes à 0, avec un seul 1. Un modèle qui doit apprendre une matrice de poids reliant 5 000 plats à une couche du réseau doit alors gérer des millions de poids, la plupart inutiles, et rien dans cette représentation ne dit que deux plats se ressemblent.\n\n## L'idée de l'embedding\n\nUn **embedding** remplace ce vecteur creux et gigantesque par un vecteur dense de quelques dizaines de nombres, appris pendant l'entraînement plutôt que fixé à l'avance. Chaque plat du catalogue est ainsi représenté par un point dans un espace à faible dimension, par exemple 32 nombres au lieu de 5 000.\n\nL'intérêt n'est pas seulement de gagner de la place. Pendant l'entraînement, le modèle apprend à placer les plats qui se ressemblent (au sens de l'usage qu'on en fait, pas forcément de leur apparence) proches les uns des autres dans cet espace. Un hot-dog et un shawarma, deux plats servis dans un pain avec de la viande, peuvent finir proches dans l'espace d'embedding, même si rien dans les données ne dit explicitement \"ces deux plats se ressemblent\" : le modèle l'apprend indirectement, à partir des habitudes de commande des utilisateurs.\n\nÀ l'inverse, une salade verte se retrouvera probablement loin du hot-dog et du shawarma dans cet espace, si les habitudes de commande des utilisateurs montrent que les personnes qui commandent l'un commandent rarement l'autre.\n\nUn piège fréquent : un embedding ne reflète que les régularités présentes dans les données d'entraînement, rien de plus. Un plat tout juste ajouté au menu, que personne n'a encore commandé, n'a aucune position fiable dans cet espace, même si son nom suggère une ressemblance évidente avec un plat existant. Le modèle ne devine pas la similarité à partir du sens des mots : il l'apprend uniquement à partir des cooccurrences observées.\n\n## Pourquoi c'est utile au-delà de la recommandation\n\nCette même idée, transformer une catégorie discrète en vecteur dense appris, est la brique de base de presque tous les grands modèles modernes, y compris les modèles de langue de la partie suivante : un mot ou un fragment de texte y est lui aussi représenté par un embedding.\n\n## À vous de jouer\n\nPourquoi un vecteur one-hot de 5 000 colonnes ne dit-il rien sur la ressemblance entre deux plats, alors qu'un embedding de 32 nombres le peut ?\n\n> Correction : dans un vecteur one-hot, chaque plat a un seul 1 sur une colonne qui lui est propre ; la distance entre deux plats quelconques est toujours la même, quelle que soit leur ressemblance réelle. Dans un embedding appris, la position de chaque plat reflète les régularités observées dans les données, donc deux plats similaires peuvent finir proches.\n\n> **À retenir**\n>\n> Un embedding remplace une représentation creuse et gigantesque par un vecteur dense de taille réduite, appris pendant l'entraînement, qui capture la ressemblance entre catégories.\n\n*Vérifié le 27 septembre 2026 sur la page \"Embeddings\" du Machine Learning Crash Course de Google.*",
          "i18n": {
            "en": {
              "title": "Embeddings",
              "body": "## A catalog too large for one-hot\n\nLesson 9 introduced one-hot encoding to feed a categorical feature to a model. This technique works well for a handful of categories, but it breaks down at scale.\n\nImagine a meal recommendation app offering 5,000 different dishes. Representing each dish with one-hot encoding requires a vector of 5,000 columns, almost all zeros, with a single 1. A model that must learn a weight matrix connecting 5,000 dishes to a layer of the network then has to handle millions of weights, most of them useless, and nothing in this representation says that two dishes are similar.\n\n## The idea behind an embedding\n\nAn **embedding** replaces this huge, sparse vector with a dense vector of a few dozen numbers, learned during training rather than fixed in advance. Every dish in the catalog is thus represented as a point in a low-dimensional space, for example 32 numbers instead of 5,000.\n\nThe benefit is not just saving space. During training, the model learns to place dishes that are similar (in terms of how they are used, not necessarily how they look) close to each other in this space. A hot dog and a shawarma, both dishes served in bread with meat, may end up close together in the embedding space, even though nothing in the data explicitly says \"these two dishes are similar\": the model learns this indirectly, from users' ordering habits.\n\nConversely, a green salad will likely end up far from the hot dog and the shawarma in this space, if users' ordering habits show that people who order one rarely order the other.\n\nA common trap: an embedding only reflects the patterns present in the training data, nothing more. A dish just added to the menu, one nobody has ordered yet, has no reliable position in this space, even if its name suggests an obvious similarity to an existing dish. The model does not guess similarity from the meaning of words; it only learns it from observed co-occurrences.\n\n## Why this matters beyond recommendation\n\nThis same idea, turning a discrete category into a learned dense vector, is a building block of almost every modern large model, including the language models covered in the next part: a word or piece of text is also represented there by an embedding.\n\n## Your turn\n\nWhy does a one-hot vector with 5,000 columns say nothing about the similarity between two dishes, while a 32-number embedding can?\n\n> Answer: in a one-hot vector, each dish has a single 1 in a column of its own; the distance between any two dishes is always the same, regardless of their actual similarity. In a learned embedding, each dish's position reflects patterns observed in the data, so two similar dishes can end up close together.\n\n> **Key takeaways**\n>\n> An embedding replaces a huge, sparse representation with a smaller dense vector, learned during training, that captures similarity between categories.\n\n*Checked on September 27, 2026 against the \"Embeddings\" page of Google's Machine Learning Crash Course.*"
            },
            "ar": {
              "title": "التضمينات (embeddings)",
              "body": "## كتالوج أكبر من أن يناسب الترميز الأحادي الساخن\n\nقدّم الدرس 9 الترميز الأحادي الساخن لإعطاء خاصية فئوية لنموذج. تعمل هذه التقنية جيدا مع حفنة من الفئات، لكنها تنهار على نطاق واسع.\n\nتخيلوا تطبيق توصية بالوجبات يقترح 5000 طبق مختلف. تمثيل كل طبق بالترميز الأحادي الساخن يتطلب متجها من 5000 عمود، كلها تقريبا أصفار، مع 1 واحد فقط. النموذج الذي يجب أن يتعلم مصفوفة أوزان تربط 5000 طبق بطبقة من الشبكة يضطر عندئذ للتعامل مع ملايين الأوزان، معظمها عديم الفائدة، ولا شيء في هذا التمثيل يقول إن طبقين متشابهان.\n\n## فكرة التضمين (embedding)\n\nيستبدل **التضمين (embedding)** هذا المتجه الضخم والمتناثر بمتجه كثيف من بضع عشرات من الأرقام، يُتعلَّم أثناء التدريب بدل أن يُحدَّد مسبقا. يُمثَّل كل طبق في الكتالوج بنقطة في فضاء منخفض الأبعاد، مثلا 32 رقما بدل 5000.\n\nالفائدة ليست فقط توفير المساحة. أثناء التدريب، يتعلم النموذج وضع الأطباق المتشابهة (من حيث طريقة استخدامها، وليس بالضرورة مظهرها) قريبة من بعضها في هذا الفضاء. قد ينتهي الهوت دوغ والشاورما، وهما طبقان يُقدَّمان في خبز مع لحم، قريبين من بعضهما في فضاء التضمين، حتى لو لم يقل شيء في البيانات صراحة \"هذان الطبقان متشابهان\": يتعلم النموذج ذلك بشكل غير مباشر، من عادات طلب المستخدمين.\n\nبالمقابل، من المرجح أن تنتهي سلطة خضراء بعيدة عن الهوت دوغ والشاورما في هذا الفضاء، إذا أظهرت عادات طلب المستخدمين أن من يطلب أحدهما نادرا ما يطلب الآخر.\n\nفخ شائع: لا يعكس التضمين سوى الأنماط الموجودة في بيانات التدريب، لا أكثر. طبق أُضيف للتو إلى القائمة، ولم يطلبه أحد بعد، ليس له أي موضع موثوق في هذا الفضاء، حتى لو أوحى اسمه بتشابه واضح مع طبق موجود. لا يخمّن النموذج التشابه من معنى الكلمات؛ إنه يتعلمه فقط من حالات التلازم الملحوظة في البيانات.\n\n## لماذا هذا مفيد خارج نطاق التوصية\n\nهذه الفكرة نفسها، تحويل فئة منفصلة إلى متجه كثيف متعلَّم، هي لبنة أساسية في كل النماذج الكبيرة الحديثة تقريبا، بما فيها نماذج اللغة التي يغطيها الجزء التالي: تُمثَّل الكلمة أو جزء من النص هناك أيضا بتضمين.\n\n## دورك الآن\n\nلماذا لا يقول متجه أحادي الترميز من 5000 عمود شيئا عن التشابه بين طبقين، بينما يستطيع تضمين من 32 رقما ذلك؟\n\n> التصحيح: في متجه أحادي الترميز، لكل طبق 1 واحد في عمود خاص به؛ المسافة بين أي طبقين متساوية دائما، بغض النظر عن تشابههما الحقيقي. في تضمين متعلَّم، يعكس موضع كل طبق الأنماط الملحوظة في البيانات، لذا يمكن أن ينتهي طبقان متشابهان قريبين من بعضهما.\n\n> **للتذكّر**\n>\n> يستبدل التضمين تمثيلا ضخما ومتناثرا بمتجه كثيف أصغر، يُتعلَّم أثناء التدريب، ويلتقط التشابه بين الفئات.\n\n*تم التحقق في 2026-09-27 على صفحة \"Embeddings\" من Machine Learning Crash Course من Google.*"
            }
          }
        },
        {
          "id": "l14",
          "title": "Quiz : réseaux de neurones et embeddings",
          "type": "quiz",
          "duration": "5 min",
          "questions": [
            {
              "id": "q8",
              "prompt": "Pourquoi une fonction d'activation non linéaire est-elle nécessaire dans un réseau de neurones ?",
              "options": [
                "Sans elle, empiler plusieurs couches équivaut mathématiquement à un seul modèle linéaire",
                "Elle sert uniquement à accélérer l'entraînement",
                "Elle remplace la descente de gradient",
                "Elle transforme les données catégorielles en données numériques"
              ],
              "correctIndex": 0,
              "explanation": "Sans non-linéarité, chaque couche ne fait qu'une combinaison linéaire de la précédente ; empiler des combinaisons linéaires reste une combinaison linéaire."
            },
            {
              "id": "q9",
              "prompt": "Quel est le principal problème du one-hot encoding pour un catalogue de 5 000 éléments ?",
              "options": [
                "Il produit des vecteurs immenses et creux qui ne capturent aucune ressemblance entre éléments",
                "Il ne fonctionne que sur des données numériques",
                "Il remplace automatiquement la régression logistique",
                "Il nécessite une fonction d'activation ReLU"
              ],
              "correctIndex": 0,
              "explanation": "Un vecteur one-hot sur 5 000 catégories est presque entièrement composé de zéros, et la distance entre deux catégories quelconques reste toujours la même."
            },
            {
              "id": "q10",
              "prompt": "Que représente un embedding ?",
              "options": [
                "Un vecteur dense de taille réduite, appris pendant l'entraînement, qui capture la ressemblance entre catégories",
                "Une couche cachée sans fonction d'activation",
                "Un synonyme de la matrice de confusion",
                "Un type de régularisation L2"
              ],
              "correctIndex": 0,
              "explanation": "Un embedding remplace une représentation creuse par un vecteur dense de quelques dizaines de nombres, dont la position reflète des régularités apprises dans les données."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: neural networks and embeddings",
              "questions": [
                {
                  "prompt": "Why is a nonlinear activation function necessary in a neural network?",
                  "options": [
                    "Without it, stacking several layers is mathematically equivalent to a single linear model",
                    "It is only used to speed up training",
                    "It replaces gradient descent",
                    "It turns categorical data into numerical data"
                  ],
                  "explanation": "Without nonlinearity, each layer only performs a linear combination of the previous one; stacking linear combinations stays a linear combination."
                },
                {
                  "prompt": "What is the main problem with one-hot encoding for a 5,000-item catalog?",
                  "options": [
                    "It produces huge, sparse vectors that capture no similarity between items",
                    "It only works on numerical data",
                    "It automatically replaces logistic regression",
                    "It requires a ReLU activation function"
                  ],
                  "explanation": "A one-hot vector over 5,000 categories is almost entirely zeros, and the distance between any two categories is always the same."
                },
                {
                  "prompt": "What does an embedding represent?",
                  "options": [
                    "A smaller dense vector, learned during training, that captures similarity between categories",
                    "A hidden layer with no activation function",
                    "Another name for the confusion matrix",
                    "A type of L2 regularization"
                  ],
                  "explanation": "An embedding replaces a sparse representation with a dense vector of a few dozen numbers, whose position reflects patterns learned from the data."
                }
              ]
            },
            "ar": {
              "title": "اختبار: الشبكات العصبية والتضمينات",
              "questions": [
                {
                  "prompt": "لماذا تُعد دالة التفعيل غير الخطية ضرورية في شبكة عصبية؟",
                  "options": [
                    "بدونها، يكافئ تكديس عدة طبقات رياضيا نموذجا خطيا واحدا",
                    "تُستخدم فقط لتسريع التدريب",
                    "تحل محل الانحدار التدريجي",
                    "تحوّل البيانات الفئوية إلى بيانات عددية"
                  ],
                  "explanation": "دون لاخطية، تقوم كل طبقة فقط بتركيبة خطية للطبقة السابقة؛ تكديس تركيبات خطية يبقى تركيبة خطية."
                },
                {
                  "prompt": "ما المشكلة الرئيسية للترميز الأحادي الساخن مع كتالوج من 5000 عنصر؟",
                  "options": [
                    "ينتج متجهات ضخمة ومتناثرة لا تلتقط أي تشابه بين العناصر",
                    "يعمل فقط مع البيانات العددية",
                    "يحل محل الانحدار اللوجستي تلقائيا",
                    "يتطلب دالة تفعيل ReLU"
                  ],
                  "explanation": "متجه أحادي الترميز على 5000 فئة يتكون كله تقريبا من أصفار، والمسافة بين أي فئتين متساوية دائما."
                },
                {
                  "prompt": "ماذا يمثّل التضمين (embedding)؟",
                  "options": [
                    "متجه كثيف أصغر، يُتعلَّم أثناء التدريب، يلتقط التشابه بين الفئات",
                    "طبقة خفية دون دالة تفعيل",
                    "مرادف لمصفوفة الالتباس",
                    "نوع من تسوية L2"
                  ],
                  "explanation": "يستبدل التضمين تمثيلا متناثرا بمتجه كثيف من بضع عشرات من الأرقام، يعكس موضعه أنماطا متعلَّمة من البيانات."
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "p5",
      "title": "Modèles de langue",
      "lessons": [
        {
          "id": "l15",
          "title": "Tokens, n-grammes et contexte",
          "type": "text",
          "duration": "11 min",
          "body": "## Découper le texte en tokens\n\nUn modèle de langue ne lit pas le texte lettre par lettre ni forcément mot par mot : il le découpe en **tokens**, des unités qui peuvent être un mot entier, un fragment de mot, ou même un seul caractère. Ce découpage s'appelle la **tokenisation en sous-mots** (subword tokenization).\n\nPrenez le mot \"unwatched\". Un tokeniseur courant peut le découper en trois tokens : `un`, `watch`, `ed`. De même, \"cats\" peut devenir `cat` + `s`. Un mot rare et long comme \"antidisestablishmentarianism\" peut se décomposer en une demi-douzaine de sous-mots plus courants. En moyenne, sur un texte anglais courant, un token représente environ 4 caractères, soit un peu moins qu'un mot entier.\n\n## Pourquoi découper en sous-mots plutôt qu'en mots entiers\n\nSi le modèle devait connaître chaque mot entier comme un token unique, son vocabulaire exploserait avec toutes les variantes (\"regarder\", \"regardé\", \"regardera\"...) et il resterait bloqué face à un mot jamais vu à l'entraînement. En réutilisant des fragments communs (\"regard\" + \"é\", \"regard\" + \"era\"), le modèle peut composer des mots qu'il n'a jamais rencontrés tels quels, à partir de pièces qu'il connaît déjà.\n\n## Les n-grammes : la mémoire courte des modèles simples\n\nAvant les modèles de langue modernes, une approche courante consistait à prédire le mot suivant à partir des `n-1` mots précédents seulement : c'est un **n-gramme**. Un bigramme regarde 1 mot de contexte, un trigramme en regarde 2.\n\nDans la phrase \"you are very nice\", un modèle bigramme prédisant le mot après \"very\" ne regarde que \"very\", et pourrait proposer \"nice\", \"good\", ou \"tired\" selon ce qu'il a vu le plus souvent après \"very\" dans ses données d'entraînement, sans tenir compte de \"you are\" plus tôt dans la phrase.\n\nUn piège fréquent : augmenter N semble simple, mais un n-gramme à N élevé se heurte vite à un problème de données. La plupart des longues séquences de mots n'apparaissent jamais telles quelles dans le corpus d'entraînement, même immense, et le modèle ne peut leur attribuer aucune probabilité fiable. Cette rareté limite la taille utile de N bien avant de résoudre les ambiguïtés à longue portée.\n\n## Pourquoi le contexte long compte\n\nUn n-gramme à fenêtre courte perd vite le fil sur une phrase ambiguë. Comparez : \"l'orange est mûre\" et \"l'orange est joyeuse\". Le mot \"orange\" ne dit pas, à lui seul, s'il s'agit d'un fruit ou d'une couleur personnifiée ; c'est le reste de la phrase, parfois plusieurs mots plus loin, qui tranche. Un modèle limité à une fenêtre de 1 ou 2 mots ne peut pas exploiter cet indice s'il est trop éloigné. C'est cette limite que les architectures présentées dans la leçon suivante cherchent à dépasser.\n\n## À vous de jouer\n\nPourquoi \"antidisestablishmentarianism\" pose-t-il un problème à un tokeniseur qui ne connaîtrait que des mots entiers, mais pas à un tokeniseur en sous-mots ?\n\n> Correction : un mot aussi rare a peu de chances d'apparaître tel quel dans le vocabulaire d'un tokeniseur par mot entier, qui le traiterait alors comme \"inconnu\". Un tokeniseur en sous-mots peut le reconstruire à partir de fragments plus courants (\"anti\", \"dis\", \"establishment\"...) déjà présents dans son vocabulaire.\n\n> **À retenir**\n>\n> Un modèle de langue traite le texte en tokens de sous-mots, environ 4 caractères en moyenne, et un contexte trop court (comme un simple bigramme) perd les indices situés plus loin dans la phrase.\n\n*Vérifié le 27 septembre 2026 sur la page \"Introduction to Large Language Models\" (What is a language model?) du Machine Learning Crash Course de Google.*",
          "i18n": {
            "en": {
              "title": "Tokens, n-grams and context",
              "body": "## Splitting text into tokens\n\nA language model does not read text letter by letter, nor necessarily word by word: it splits it into **tokens**, units that can be a whole word, a fragment of a word, or even a single character. This splitting is called **subword tokenization**.\n\nTake the word \"unwatched\". A common tokenizer might split it into three tokens: `un`, `watch`, `ed`. Similarly, \"cats\" might become `cat` + `s`. A rare, long word like \"antidisestablishmentarianism\" can break down into about half a dozen more common subwords. On average, in everyday English text, a token represents about 4 characters, slightly less than a full word.\n\n## Why split into subwords rather than whole words\n\nIf a model had to know every whole word as a single token, its vocabulary would explode with every variant (\"watch\", \"watched\", \"watching\"...), and it would get stuck on any word never seen during training. By reusing common fragments (\"watch\" + \"ed\", \"watch\" + \"ing\"), the model can compose words it has never encountered as a whole, from pieces it already knows.\n\n## N-grams: the short memory of simple models\n\nBefore modern language models, a common approach predicted the next word from only the previous `n-1` words: this is an **n-gram**. A bigram looks at 1 word of context, a trigram looks at 2.\n\nIn the sentence \"you are very nice\", a bigram model predicting the word after \"very\" only looks at \"very\", and might propose \"nice\", \"good\", or \"tired\" depending on what it saw most often after \"very\" in its training data, ignoring \"you are\" earlier in the sentence.\n\nA common trap: raising N looks simple, but a large-N n-gram quickly runs into a data problem. Most long word sequences never show up as-is in the training corpus, however large it is, so the model cannot assign them any reliable probability. This sparsity limits how far N can go before resolving long-range ambiguities.\n\n## Why long context matters\n\nA short-window n-gram quickly loses track on an ambiguous sentence. Compare: \"the orange is ripe\" and \"the orange is cheerful\". The word \"orange\" alone does not say whether it is a fruit or a personified color; it is the rest of the sentence, sometimes several words later, that settles it. A model limited to a window of 1 or 2 words cannot use this clue if it sits too far away. This limit is what the architectures covered in the next lesson try to overcome.\n\n## Your turn\n\nWhy does \"antidisestablishmentarianism\" pose a problem for a tokenizer that only knows whole words, but not for a subword tokenizer?\n\n> Answer: such a rare word is unlikely to appear as-is in a whole-word tokenizer's vocabulary, which would then treat it as \"unknown\". A subword tokenizer can rebuild it from more common fragments (\"anti\", \"dis\", \"establishment\"...) already present in its vocabulary.\n\n> **Key takeaways**\n>\n> A language model processes text as subword tokens, about 4 characters on average, and a context window that is too short (like a plain bigram) loses clues located further away in the sentence.\n\n*Checked on September 27, 2026 against the \"Introduction to Large Language Models\" page (What is a language model?) of Google's Machine Learning Crash Course.*"
            },
            "ar": {
              "title": "الرموز (tokens) وn-غرامات والسياق",
              "body": "## تقسيم النص إلى رموز\n\nلا يقرأ نموذج اللغة النص حرفا حرفا، ولا بالضرورة كلمة كلمة: بل يقسّمه إلى **رموز (tokens)**، وحدات قد تكون كلمة كاملة، أو جزءا من كلمة، أو حتى حرفا واحدا. يُسمى هذا التقسيم **ترميز الكلمات الفرعية (subword tokenization)**.\n\nخذوا كلمة \"unwatched\" (لم تُشاهَد). قد يقسّمها مُرمِّز شائع إلى ثلاثة رموز: `un` و`watch` و`ed`. وبالمثل، قد تصبح \"cats\" (قطط) `cat` + `s`. كلمة نادرة وطويلة مثل \"antidisestablishmentarianism\" يمكن أن تتفكك إلى نحو نصف دزينة من الكلمات الفرعية الأكثر شيوعا. في المتوسط، في نص إنجليزي عادي، يمثّل الرمز الواحد نحو 4 أحرف، أي أقل قليلا من كلمة كاملة.\n\n## لماذا التقسيم إلى كلمات فرعية بدل كلمات كاملة\n\nلو وجب على النموذج معرفة كل كلمة كاملة كرمز وحيد، لانفجرت مفرداته مع كل صيغة (\"يشاهد\"، \"شاهد\"، \"سيشاهد\"...)، ولتوقف أمام أي كلمة لم يرها أثناء التدريب. بإعادة استخدام أجزاء مشتركة (\"شاهد\" + \"سي\")، يستطيع النموذج تركيب كلمات لم يصادفها كاملة من قبل، انطلاقا من قطع يعرفها مسبقا.\n\n## الـn-غرامات: الذاكرة القصيرة للنماذج البسيطة\n\nقبل نماذج اللغة الحديثة، كان نهج شائع يتنبأ بالكلمة التالية اعتمادا فقط على الكلمات الـ`n-1` السابقة: هذا هو **الـn-غرام (n-gram)**. ينظر النموذج الثنائي (bigram) إلى كلمة سياق واحدة، والثلاثي (trigram) إلى كلمتين.\n\nفي جملة \"أنت لطيف جدا\"، نموذج ثنائي يتنبأ بالكلمة بعد \"جدا\" ينظر فقط إلى \"جدا\"، وقد يقترح \"لطيف\" أو \"جيد\" أو \"متعب\" حسب ما رآه غالبا بعد \"جدا\" في بيانات تدريبه، متجاهلا \"أنت\" السابقة في الجملة.\n\nفخ شائع: رفع N يبدو حلا بسيطا، لكن n-غرام بقيمة N كبيرة يصطدم سريعا بمشكلة بيانات. معظم التسلسلات الطويلة من الكلمات لا تظهر أبدا كما هي في مجموعة التدريب، مهما كانت ضخمة، فلا يستطيع النموذج إسناد أي احتمال موثوق لها. هذه الندرة تحدّ من الحجم المفيد لـN قبل حل الغموض بعيد المدى.\n\n## لماذا يهم السياق الطويل\n\nيفقد الـn-غرام ذو النافذة القصيرة الخيط سريعا في جملة غامضة. قارنوا: \"البرتقالة ناضجة\" و\"الجو برتقالي مبهج\". كلمة \"برتقالي\" وحدها لا تقول إن كان المقصود فاكهة أم لونا مشخصنا؛ بقية الجملة، وأحيانا على بعد عدة كلمات، هي التي تحسم الأمر. نموذج محدود بنافذة من كلمة أو كلمتين لا يستطيع استغلال هذا الدليل إن كان بعيدا جدا. هذا القيد هو ما تحاول المعماريات في الدرس التالي تجاوزه.\n\n## دورك الآن\n\nلماذا تشكّل \"antidisestablishmentarianism\" مشكلة لمُرمِّز يعرف الكلمات الكاملة فقط، لكن ليس لمُرمِّز الكلمات الفرعية؟\n\n> التصحيح: كلمة نادرة كهذه من غير المرجح أن تظهر كما هي في مفردات مُرمِّز الكلمات الكاملة، الذي سيعاملها حينئذ كـ\"مجهولة\". يستطيع مُرمِّز الكلمات الفرعية إعادة بنائها من أجزاء أكثر شيوعا موجودة أصلا في مفرداته.\n\n> **للتذكّر**\n>\n> يعالج نموذج اللغة النص كرموز كلمات فرعية، نحو 4 أحرف في المتوسط، ونافذة سياق قصيرة جدا (كثنائي بسيط) تفقد أدلة موجودة أبعد في الجملة.\n\n*تم التحقق في 2026-09-27 على صفحة \"Introduction to Large Language Models\" (What is a language model؟) من Machine Learning Crash Course من Google.*"
            }
          }
        },
        {
          "id": "l16",
          "title": "Des réseaux récurrents aux grands modèles de langue",
          "type": "text",
          "duration": "10 min",
          "body": "## Lire un token à la fois\n\nUne première façon de traiter une suite de tokens avec un réseau de neurones consiste à les lire un par un, dans l'ordre, en gardant à chaque étape un résumé condensé (un \"état caché\") de ce qui a été lu jusque-là. C'est le principe d'un **réseau de neurones récurrent** (RNN) : le résumé produit après le token 5 sert d'entrée, avec le token 6, pour produire le résumé après le token 6, et ainsi de suite.\n\n## La limite du résumé qui s'étiole\n\nCe mécanisme fonctionne, mais le résumé condensé doit porter toute l'information utile des tokens précédents dans un espace de taille fixe. Plus la phrase s'allonge, plus l'information des premiers tokens risque de se diluer avant d'atteindre les derniers. C'est ce qu'on appelle le **problème du gradient qui s'évanouit** (vanishing gradient) : pendant l'entraînement, le signal qui devrait renforcer l'influence d'un mot lointain s'affaiblit à mesure qu'il traverse les étapes intermédiaires, si bien que le modèle a du mal à apprendre des dépendances entre mots très éloignés dans le texte.\n\nL'exemple de la leçon précédente, \"l'orange est mûre\" contre \"l'orange est joyeuse\", est justement le genre de cas où un RNN peut perdre le fil si le mot décisif est trop loin du mot ambigu.\n\n## Regarder toute la phrase à la fois\n\nLes grands modèles de langue (LLM) modernes s'appuient sur une architecture différente, qui permet à chaque token de \"regarder\" directement tous les autres tokens de la séquence, avec un poids d'importance différent pour chacun, plutôt que de dépendre d'un résumé transmis étape par étape. Ce mécanisme, appelé **attention**, atténue le problème du gradient qui s'évanouit et permet de mieux exploiter un contexte long.\n\nC'est cette capacité à pondérer directement l'importance de chaque mot du contexte, aussi loin soit-il, qui explique la meilleure prise en compte de phrases ambiguës comme celle de l'orange par les modèles récents, comparés aux approches plus anciennes fondées sur les n-grammes ou les premiers réseaux récurrents.\n\nUn piège fréquent : l'attention pondère les tokens entre eux, mais ne connaît pas nativement leur ordre. Deux phrases formées des mêmes mots mélangés seraient traitées presque à l'identique par le seul mécanisme d'attention. Les modèles qui l'utilisent doivent donc ajouter, pour chaque token, une information de position, en plus de l'attention, pour savoir quel mot précède ou suit quel autre.\n\nCette leçon ne couvre que le principe général : le détail mathématique du mécanisme d'attention dépasse le cadre de ce cours d'introduction.\n\n## À vous de jouer\n\nPourquoi un réseau récurrent qui lit token par token a-t-il plus de mal qu'un modèle à attention pour relier deux mots très éloignés dans une longue phrase ?\n\n> Correction : le réseau récurrent doit faire transiter l'information par un résumé de taille fixe, mis à jour à chaque token ; sur une longue distance, ce signal s'affaiblit (gradient qui s'évanouit). Un modèle à attention regarde directement chaque token du contexte, quelle que soit sa distance, sans passer par ce goulot d'étranglement.\n\n> **À retenir**\n>\n> Les réseaux récurrents traitent le texte séquentiellement et perdent en route l'information lointaine, tandis que le mécanisme d'attention des grands modèles de langue pondère directement tous les tokens du contexte entre eux.\n\n*Vérifié le 27 septembre 2026 sur la page \"What's a Large Language Model?\" (mécanisme d'auto-attention) du Machine Learning Crash Course de Google.*",
          "i18n": {
            "en": {
              "title": "From recurrent networks to large language models",
              "body": "## Reading one token at a time\n\nOne first way to process a sequence of tokens with a neural network is to read them one by one, in order, keeping a condensed summary (a \"hidden state\") of everything read so far at each step. This is the principle of a **recurrent neural network** (RNN): the summary produced after token 5 is fed back in, together with token 6, to produce the summary after token 6, and so on.\n\n## The limit of a fading summary\n\nThis mechanism works, but the condensed summary must carry all the useful information from previous tokens within a fixed-size space. The longer the sentence, the more information from the early tokens risks fading before it reaches the later ones. This is known as the **vanishing gradient problem**: during training, the signal that should strengthen the influence of a distant word weakens as it passes through intermediate steps, so the model struggles to learn dependencies between words that are far apart in the text.\n\nThe example from the previous lesson, \"the orange is ripe\" versus \"the orange is cheerful\", is exactly the kind of case where an RNN can lose track if the decisive word is too far from the ambiguous one.\n\n## Looking at the whole sentence at once\n\nModern large language models (LLMs) rely on a different architecture, which lets each token \"look\" directly at every other token in the sequence, with a different importance weight for each, instead of depending on a summary passed step by step. This mechanism, called **attention**, eases the vanishing gradient problem and makes better use of long context.\n\nIt is this ability to directly weigh the importance of every word in the context, however far away, that explains why recent models handle ambiguous sentences like the orange example better than older approaches based on n-grams or early recurrent networks.\n\nA common trap: attention weighs tokens against each other, but does not natively know their order. Two sentences of the same words shuffled would be handled almost identically by attention alone. Models using it must add, for every token, a piece of position information, on top of attention, to know which word precedes or follows which other one.\n\nThis lesson only covers the general principle: the mathematical detail of the attention mechanism is beyond the scope of this introductory course.\n\n## Your turn\n\nWhy does a recurrent network reading token by token struggle more than an attention-based model to connect two words that are far apart in a long sentence?\n\n> Answer: the recurrent network must pass information through a fixed-size summary, updated at every token; over a long distance, this signal weakens (vanishing gradient). An attention-based model looks directly at every token in the context, regardless of distance, without passing through this bottleneck.\n\n> **Key takeaways**\n>\n> Recurrent networks process text sequentially and lose distant information along the way, while the attention mechanism of large language models directly weighs all context tokens against each other.\n\n*Checked on September 27, 2026 against the \"What's a Large Language Model?\" page (self-attention mechanism) of Google's Machine Learning Crash Course.*"
            },
            "ar": {
              "title": "من الشبكات المتكررة إلى نماذج اللغة الكبيرة",
              "body": "## قراءة رمز واحد في كل مرة\n\nطريقة أولى لمعالجة سلسلة من الرموز بشبكة عصبية هي قراءتها واحدا تلو الآخر، بالترتيب، مع الاحتفاظ في كل خطوة بملخص مكثف (\"حالة خفية\") لكل ما قُرئ حتى الآن. هذا مبدأ **الشبكة العصبية المتكررة (RNN)**: يُستخدم الملخص المُنتَج بعد الرمز 5، مع الرمز 6، لإنتاج الملخص بعد الرمز 6، وهكذا.\n\n## حدود الملخص المتلاشي\n\nتعمل هذه الآلية، لكن يجب على الملخص المكثف حمل كل المعلومات المفيدة من الرموز السابقة ضمن فضاء ثابت الحجم. كلما طالت الجملة، زاد خطر تلاشي معلومات الرموز الأولى قبل وصولها إلى الأخيرة. يُعرف هذا بـ**مشكلة الانحدار المتلاشي (vanishing gradient)**: أثناء التدريب، تضعف الإشارة التي يفترض أن تعزز تأثير كلمة بعيدة كلما مرت عبر خطوات وسيطة، فيصعب على النموذج تعلّم العلاقات بين كلمات متباعدة كثيرا في النص.\n\nمثال الدرس السابق، \"البرتقالة ناضجة\" مقابل \"الجو برتقالي مبهج\"، هو بالضبط النوع من الحالات التي قد تفقد فيها شبكة RNN الخيط إذا كانت الكلمة الحاسمة بعيدة جدا عن الكلمة الغامضة.\n\n## النظر إلى الجملة كاملة دفعة واحدة\n\nتعتمد نماذج اللغة الكبيرة (LLM) الحديثة على معمارية مختلفة، تتيح لكل رمز \"النظر\" مباشرة إلى كل الرموز الأخرى في السلسلة، بوزن أهمية مختلف لكل واحد، بدل الاعتماد على ملخص يُنقل خطوة بخطوة. تُسمى هذه الآلية **الانتباه (attention)**، وتخفف من مشكلة الانحدار المتلاشي وتتيح استغلالا أفضل للسياق الطويل.\n\nهذه القدرة على ترجيح أهمية كل كلمة في السياق مباشرة، مهما بَعُدت، هي ما يفسر تعامل النماذج الحديثة الأفضل مع الجمل الغامضة كمثال البرتقالة، مقارنة بالمقاربات الأقدم المبنية على الـn-غرامات أو الشبكات المتكررة الأولى.\n\nفخ شائع: يرجّح الانتباه الرموز فيما بينها، لكنه لا يعرف ترتيبها. جملتان من الكلمات نفسها بترتيب مخلوط ستُعالَجان بطريقة شبه متطابقة بالانتباه وحده. لذا يجب على النماذج إضافة معلومة موضع لكل رمز، إلى جانب الانتباه، لمعرفة أي كلمة تسبق أو تلي أخرى.\n\nيغطي هذا الدرس المبدأ العام فقط: التفصيل الرياضي لآلية الانتباه يتجاوز نطاق هذا الدرس التمهيدي.\n\n## دورك الآن\n\nلماذا تواجه شبكة متكررة تقرأ رمزا برمز صعوبة أكبر من نموذج قائم على الانتباه في ربط كلمتين متباعدتين في جملة طويلة؟\n\n> التصحيح: يجب على الشبكة المتكررة تمرير المعلومة عبر ملخص ثابت الحجم، يُحدَّث مع كل رمز؛ على مسافة طويلة، تضعف هذه الإشارة (الانحدار المتلاشي). ينظر نموذج قائم على الانتباه مباشرة إلى كل رمز في السياق، بغض النظر عن المسافة، دون المرور بهذا الاختناق.\n\n> **للتذكّر**\n>\n> تعالج الشبكات المتكررة النص تسلسليا وتفقد المعلومة البعيدة في الطريق، بينما ترجّح آلية الانتباه في نماذج اللغة الكبيرة كل رموز السياق مباشرة ببعضها.\n\n*تم التحقق في 2026-09-27 على صفحة \"What's a Large Language Model؟\" (آلية الانتباه الذاتي) من Machine Learning Crash Course من Google.*"
            }
          }
        },
        {
          "id": "l17",
          "title": "Quiz : modèles de langue",
          "type": "quiz",
          "duration": "5 min",
          "questions": [
            {
              "id": "q11",
              "prompt": "Pourquoi les modèles de langue découpent-ils le texte en sous-mots plutôt qu'en mots entiers ?",
              "options": [
                "Pour composer des mots jamais vus à l'entraînement à partir de fragments connus",
                "Pour éviter d'utiliser la descente de gradient",
                "Pour transformer le texte en données catégorielles",
                "Pour remplacer le mécanisme d'attention"
              ],
              "correctIndex": 0,
              "explanation": "Un vocabulaire de mots entiers exploserait avec toutes les variantes ; les sous-mots permettent de recomposer des mots rares ou jamais vus."
            },
            {
              "id": "q12",
              "prompt": "Que regarde un modèle bigramme pour prédire le mot suivant ?",
              "options": [
                "Seulement le mot immédiatement précédent",
                "Toute la phrase précédente",
                "Uniquement les tokens de sous-mots",
                "L'ensemble du document"
              ],
              "correctIndex": 0,
              "explanation": "Un bigramme ne regarde que 1 mot de contexte, ce qui limite sa capacité à résoudre les ambiguïtés lointaines."
            },
            {
              "id": "q13",
              "prompt": "Quel avantage le mécanisme d'attention apporte-t-il par rapport à un réseau récurrent classique ?",
              "options": [
                "Il permet à chaque token de pondérer directement tous les autres tokens, sans passer par un résumé de taille fixe",
                "Il élimine le besoin de tokenisation",
                "Il remplace la fonction sigmoïde par ReLU",
                "Il transforme automatiquement les données catégorielles en embeddings"
              ],
              "correctIndex": 0,
              "explanation": "L'attention regarde directement chaque token du contexte, ce qui atténue le problème du gradient qui s'évanouit sur les longues séquences."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: language models",
              "questions": [
                {
                  "prompt": "Why do language models split text into subwords rather than whole words?",
                  "options": [
                    "To compose words never seen during training from known fragments",
                    "To avoid using gradient descent",
                    "To turn text into categorical data",
                    "To replace the attention mechanism"
                  ],
                  "explanation": "A whole-word vocabulary would explode with every variant; subwords allow rare or unseen words to be rebuilt."
                },
                {
                  "prompt": "What does a bigram model look at to predict the next word?",
                  "options": [
                    "Only the immediately preceding word",
                    "The entire preceding sentence",
                    "Only subword tokens",
                    "The whole document"
                  ],
                  "explanation": "A bigram only looks at 1 word of context, which limits its ability to resolve distant ambiguities."
                },
                {
                  "prompt": "What advantage does the attention mechanism bring over a classic recurrent network?",
                  "options": [
                    "It lets each token directly weigh every other token, without passing through a fixed-size summary",
                    "It removes the need for tokenization",
                    "It replaces the sigmoid function with ReLU",
                    "It automatically turns categorical data into embeddings"
                  ],
                  "explanation": "Attention looks directly at every token in the context, which eases the vanishing gradient problem over long sequences."
                }
              ]
            },
            "ar": {
              "title": "اختبار: نماذج اللغة",
              "questions": [
                {
                  "prompt": "لماذا تقسّم نماذج اللغة النص إلى كلمات فرعية بدل كلمات كاملة؟",
                  "options": [
                    "لتركيب كلمات لم تُشاهَد أثناء التدريب من أجزاء معروفة",
                    "لتجنب استخدام الانحدار التدريجي",
                    "لتحويل النص إلى بيانات فئوية",
                    "لاستبدال آلية الانتباه"
                  ],
                  "explanation": "مفردات الكلمات الكاملة ستنفجر مع كل صيغة؛ تتيح الكلمات الفرعية إعادة بناء كلمات نادرة أو غير مرئية."
                },
                {
                  "prompt": "إلى ماذا ينظر نموذج ثنائي (bigram) للتنبؤ بالكلمة التالية؟",
                  "options": [
                    "فقط إلى الكلمة السابقة مباشرة",
                    "إلى الجملة السابقة كاملة",
                    "فقط إلى رموز الكلمات الفرعية",
                    "إلى الوثيقة كاملة"
                  ],
                  "explanation": "ينظر الثنائي إلى كلمة سياق واحدة فقط، مما يحد من قدرته على حل الغموض البعيد."
                },
                {
                  "prompt": "ما الميزة التي تجلبها آلية الانتباه مقارنة بشبكة متكررة كلاسيكية؟",
                  "options": [
                    "تتيح لكل رمز ترجيح كل الرموز الأخرى مباشرة، دون المرور بملخص ثابت الحجم",
                    "تلغي الحاجة إلى الترميز",
                    "تستبدل دالة السيغمويد بـReLU",
                    "تحوّل البيانات الفئوية تلقائيا إلى تضمينات"
                  ],
                  "explanation": "ينظر الانتباه مباشرة إلى كل رمز في السياق، مما يخفف مشكلة الانحدار المتلاشي على السلاسل الطويلة."
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "p6",
      "title": "Mise en production et responsabilité",
      "lessons": [
        {
          "id": "l18",
          "title": "Mettre un modèle en production",
          "type": "text",
          "duration": "10 min",
          "body": "## L'entraînement n'est qu'une petite partie du travail\n\nUne idée reçue veut qu'un projet de machine learning consiste surtout à écrire et ajuster le modèle. En pratique, le code qui entraîne et sert un modèle représente généralement 5 % ou moins du code total d'un système en production. Le reste couvre la collecte et la validation des données, l'infrastructure de service, la surveillance, et la gestion des versions de données et de modèles.\n\n## Entraînement statique ou dynamique\n\nUn modèle peut être entraîné une fois puis figé (**entraînement statique**) ou réentraîné régulièrement à mesure que de nouvelles données arrivent (**entraînement dynamique**). Un modèle statique est plus simple à valider avant mise en service, mais il se dégrade avec le temps si le monde change (nouveaux mots-clés de spam, nouvelles habitudes d'achat). Un modèle dynamique reste à jour, mais chaque nouvelle version doit être revalidée avant d'être servie.\n\n## Inférence statique ou dynamique\n\nCôté service, un modèle peut précalculer ses prédictions pour toutes les entrées possibles à l'avance (**inférence statique**, rapide à servir mais limitée aux cas prévus), ou calculer la prédiction à la demande, au moment où la requête arrive (**inférence dynamique**, plus flexible mais plus coûteuse en temps de réponse).\n\nUn piège fréquent : l'inférence statique donne l'illusion d'un service instantané, mais repose entièrement sur les entrées anticipées à l'avance. Une entrée réellement nouvelle, absente de la table précalculée, ne peut recevoir de prédiction approchée : il faut la refuser ou basculer vers un calcul à la volée non prévu dans le budget de latence. L'économie promise par l'inférence statique ne vaut que pour les cas déjà envisagés au précalcul.\n\n## Tester avant de servir\n\nAvant de mettre un modèle en service, on teste généralement les composants d'infrastructure indépendamment de la qualité du modèle : est-ce que le pipeline de données produit les bonnes colonnes, dans le bon format, sans valeurs manquantes inattendues ? Est-ce que le modèle répond dans un délai acceptable sous charge réelle ?\n\n## Surveiller après le déploiement\n\nUn modèle en production doit être surveillé en continu, pas seulement testé une fois avant sa mise en service. Deux signaux à suivre particulièrement : la dérive des données (data drift), quand la distribution des données reçues en production s'écarte de celle utilisée à l'entraînement, et la dégradation progressive de la qualité des prédictions, qui peut passer inaperçue si personne ne la mesure activement.\n\n## À vous de jouer\n\nUn modèle de détection de spam entraîné une seule fois en 2024 et jamais réentraîné depuis reçoit toujours autant d'e-mails à classer en 2026, avec la même précision apparente sur les anciens exemples de test. Pourquoi cela ne garantit-il pas qu'il fonctionne toujours bien ?\n\n> Correction : les techniques de spam évoluent ; la distribution des e-mails réels en 2026 s'est probablement éloignée (dérive des données) de celle de 2024. La précision mesurée sur d'anciens exemples de test ne dit rien de la performance sur les nouveaux types de spam apparus depuis.\n\n> **À retenir**\n>\n> La mise en production d'un modèle mobilise surtout de l'infrastructure autour du modèle (données, service, surveillance), et un modèle jamais réentraîné ni surveillé peut se dégrader silencieusement à mesure que le monde change.\n\n*Vérifié le 27 septembre 2026 sur la page \"Production ML systems\" du Machine Learning Crash Course de Google.*",
          "i18n": {
            "en": {
              "title": "Putting a model into production",
              "body": "## Training is only a small part of the work\n\nA common misconception is that a machine learning project mostly consists of writing and tuning the model. In practice, the code that trains and serves a model usually makes up 5% or less of a production system's total code. The rest covers data collection and validation, serving infrastructure, monitoring, and versioning of data and models.\n\n## Static or dynamic training\n\nA model can be trained once and then frozen (**static training**) or retrained regularly as new data arrives (**dynamic training**). A static model is simpler to validate before deployment, but it degrades over time if the world changes (new spam keywords, new buying habits). A dynamic model stays current, but every new version must be revalidated before being served.\n\n## Static or dynamic inference\n\nOn the serving side, a model can precompute predictions for every possible input in advance (**static inference**, fast to serve but limited to anticipated cases), or compute the prediction on demand, when the request arrives (**dynamic inference**, more flexible but more costly in response time).\n\nA common trap: static inference feels instant, but depends entirely on inputs anticipated ahead of time. A genuinely new input, absent from the precomputed table, cannot get an approximate prediction: it must be rejected or computed on the fly, a cost never budgeted into the latency plan. The savings promised by static inference only hold for cases foreseen at precomputation.\n\n## Testing before serving\n\nBefore putting a model into service, infrastructure components are usually tested independently from the model's quality: does the data pipeline produce the right columns, in the right format, without unexpected missing values? Does the model respond within an acceptable time under real load?\n\n## Monitoring after deployment\n\nA production model must be monitored continuously, not just tested once before deployment. Two signals to watch closely: data drift, when the distribution of data received in production diverges from the one used during training, and the gradual degradation of prediction quality, which can go unnoticed if no one actively measures it.\n\n## Your turn\n\nA spam detection model trained once in 2024 and never retrained since still receives just as many emails to classify in 2026, with the same apparent accuracy on old test examples. Why does this not guarantee it still works well?\n\n> Answer: spam techniques evolve; the distribution of real emails in 2026 has likely drifted away (data drift) from that of 2024. Accuracy measured on old test examples says nothing about performance on new types of spam that appeared since.\n\n> **Key takeaways**\n>\n> Putting a model into production mostly involves infrastructure around the model (data, serving, monitoring), and a model that is never retrained or monitored can degrade silently as the world changes.\n\n*Checked on September 27, 2026 against the \"Production ML systems\" page of Google's Machine Learning Crash Course.*"
            },
            "ar": {
              "title": "وضع نموذج في الإنتاج",
              "body": "## التدريب جزء صغير فقط من العمل\n\nفكرة شائعة خاطئة هي أن مشروع تعلم الآلة يتكون أساسا من كتابة النموذج وضبطه. عمليا، الكود الذي يدرّب النموذج ويخدمه يشكل عادة 5% أو أقل من إجمالي كود نظام في الإنتاج. الباقي يغطي جمع البيانات والتحقق منها، والبنية التحتية للخدمة، والمراقبة، وإدارة إصدارات البيانات والنماذج.\n\n## تدريب ثابت أو ديناميكي\n\nيمكن تدريب نموذج مرة واحدة ثم تجميده (**تدريب ثابت**) أو إعادة تدريبه بانتظام مع وصول بيانات جديدة (**تدريب ديناميكي**). النموذج الثابت أبسط في التحقق قبل النشر، لكنه يتدهور مع الوقت إذا تغيّر العالم (كلمات مفتاحية جديدة للبريد المزعج، عادات شراء جديدة). يبقى النموذج الديناميكي محدَّثا، لكن كل إصدار جديد يجب إعادة التحقق منه قبل خدمته.\n\n## استدلال ثابت أو ديناميكي\n\nمن جهة الخدمة، يمكن للنموذج حساب التنبؤات مسبقا لكل المدخلات الممكنة (**استدلال ثابت**، سريع في الخدمة لكن محدود بالحالات المتوقعة)، أو حساب التنبؤ عند الطلب، لحظة وصول الطلب (**استدلال ديناميكي**، أكثر مرونة لكن أكلف من حيث زمن الاستجابة).\n\nفخ شائع: يعطي الاستدلال الثابت وهم خدمة فورية، لكنه يعتمد كليا على المدخلات المتوقعة مسبقا. مدخل جديد فعلا، غائب عن الجدول المحسوب مسبقا، لا يحصل على تنبؤ تقريبي: يجب رفضه أو تحويله إلى حساب فوري لم يُدرج في ميزانية زمن الاستجابة. وفر الاستدلال الثابت لا يصمد إلا للحالات المتوقعة وقت الحساب المسبق.\n\n## الاختبار قبل الخدمة\n\nقبل وضع نموذج في الخدمة، تُختبر عادة مكونات البنية التحتية بمعزل عن جودة النموذج: هل ينتج خط أنابيب البيانات الأعمدة الصحيحة، بالصيغة الصحيحة، دون قيم مفقودة غير متوقعة؟ هل يستجيب النموذج خلال وقت مقبول تحت حمل حقيقي؟\n\n## المراقبة بعد النشر\n\nيجب مراقبة نموذج في الإنتاج باستمرار، وليس اختباره مرة واحدة فقط قبل النشر. إشارتان يجب متابعتهما خصوصا: انحراف البيانات (data drift)، عندما يبتعد توزيع البيانات المستقبلة في الإنتاج عن التوزيع المستخدم في التدريب، والتدهور التدريجي لجودة التنبؤات، الذي قد يمر دون ملاحظة إن لم يقسه أحد بنشاط.\n\n## دورك الآن\n\nنموذج كشف بريد مزعج دُرِّب مرة واحدة سنة 2024 ولم يُعَد تدريبه منذئذ، لا يزال يستقبل عدد رسائل مماثل للتصنيف سنة 2026، بنفس الدقة الظاهرية على أمثلة الاختبار القديمة. لماذا لا يضمن هذا أنه لا يزال يعمل جيدا؟\n\n> التصحيح: تتطور تقنيات البريد المزعج؛ من المرجح أن توزيع الرسائل الحقيقية سنة 2026 قد انحرف (انحراف البيانات) عن توزيع 2024. الدقة المقاسة على أمثلة اختبار قديمة لا تقول شيئا عن الأداء على أنواع بريد مزعج جديدة ظهرت منذئذ.\n\n> **للتذكّر**\n>\n> يتطلب وضع نموذج في الإنتاج بنية تحتية حول النموذج بالدرجة الأولى (بيانات، خدمة، مراقبة)، ويمكن لنموذج لم يُعَد تدريبه أو تُراقَب حالته أن يتدهور بصمت مع تغيّر العالم.\n\n*تم التحقق في 2026-09-27 على صفحة \"Production ML systems\" من Machine Learning Crash Course من Google.*"
            }
          }
        },
        {
          "id": "l19",
          "title": "Biais, équité et responsabilité",
          "type": "text",
          "duration": "11 min",
          "body": "## Un modèle reproduit ce qu'il a vu\n\nUn modèle de machine learning n'invente rien : il apprend des régularités présentes dans ses données d'entraînement. Si ces données reflètent des inégalités ou des déséquilibres existants, le modèle a toutes les chances de les reproduire, voire de les amplifier, sans qu'aucune ligne de code ne le dise explicitement.\n\n## Quelques sources courantes de biais\n\nLe **biais historique** (historical bias) apparaît quand les données reflètent des inégalités passées ou présentes de la société, indépendamment de la façon dont elles ont été collectées : un modèle de recrutement entraîné sur vingt ans d'embauches dans un secteur historiquement déséquilibré héritera de ce déséquilibre.\n\nLe **biais de sélection** (selection bias) survient quand les données d'entraînement ne représentent pas fidèlement la population sur laquelle le modèle sera utilisé, par exemple un modèle de reconnaissance vocale entraîné surtout sur des voix d'adultes, moins performant sur des voix d'enfants.\n\nLe **biais de rapport** (reporting bias) apparaît quand la fréquence à laquelle un fait est mentionné dans les données ne reflète pas sa fréquence réelle dans le monde : dans des textes, les événements inhabituels sont souvent plus commentés que les événements ordinaires, ce qui peut fausser ce qu'un modèle \"apprend\" comme étant typique.\n\nLe **biais d'automatisation** (automation bias) ne vient pas des données mais de l'humain qui utilise le modèle : la tendance à faire davantage confiance à une recommandation automatisée qu'à son propre jugement, même quand ce dernier serait plus fiable.\n\n## Pourquoi une bonne métrique globale ne suffit pas\n\nUn modèle peut afficher une excellente exactitude globale tout en se trompant beaucoup plus souvent sur un sous-groupe particulier de la population. Une évaluation qui s'arrête à la métrique d'ensemble, sans la décomposer par sous-groupe pertinent, peut masquer ce déséquilibre.\n\nUn piège fréquent : retirer du jeu de données l'attribut sensible lui-même (âge, genre, origine) donne l'impression de régler le problème, mais d'autres variables corrélées (code postal, intitulé de poste, établissement scolaire) peuvent permettre au modèle de reconstituer indirectement cette information et de continuer à discriminer sur cette base, sans qu'aucune colonne ne porte explicitement l'attribut retiré.\n\n## Une responsabilité qui ne s'arrête pas au déploiement\n\nRepérer un biais ne suffit pas à le corriger : cela peut demander de revoir la collecte des données, la définition même du problème, ou d'ajouter des contraintes explicites au modèle. Cette leçon donne un vocabulaire de base pour repérer ces questions ; une étude sérieuse de l'équité algorithmique dépasse le cadre de ce cours d'introduction.\n\n## À vous de jouer\n\nUn modèle de tri de CV atteint 92 % d'exactitude globale, mais rejette deux fois plus souvent les candidatures de personnes de plus de 50 ans que celles des autres tranches d'âge. Pourquoi le chiffre de 92 % ne suffit-il pas à juger ce modèle acceptable ?\n\n> Correction : une exactitude globale élevée peut masquer une erreur concentrée sur un sous-groupe précis. Ici, le modèle traite un groupe d'âge nettement moins bien que les autres, ce que la métrique globale ne révèle pas ; il faut décomposer la performance par sous-groupe pour le voir.\n\n> **À retenir**\n>\n> Un modèle reproduit les biais présents dans ses données (historique, sélection, rapport) ou introduits par l'usage humain (automatisation), et une métrique globale satisfaisante ne garantit pas un traitement équitable de chaque sous-groupe.\n\n*Vérifié le 27 septembre 2026 sur la page \"Fairness: Types of bias\" du Machine Learning Crash Course de Google.*",
          "i18n": {
            "en": {
              "title": "Bias, fairness and responsibility",
              "body": "## A model reproduces what it has seen\n\nA machine learning model invents nothing: it learns patterns present in its training data. If that data reflects existing inequalities or imbalances, the model is very likely to reproduce them, or even amplify them, without any line of code saying so explicitly.\n\n## Some common sources of bias\n\n**Historical bias** appears when the data reflects past or present inequalities in society, regardless of how it was collected: a hiring model trained on twenty years of recruitment in a historically imbalanced sector will inherit that imbalance.\n\n**Selection bias** occurs when the training data does not faithfully represent the population the model will be used on, for example a speech recognition model trained mostly on adult voices, performing worse on children's voices.\n\n**Reporting bias** appears when how often a fact is mentioned in the data does not reflect its real-world frequency: in text, unusual events are often discussed more than ordinary ones, which can skew what a model \"learns\" as typical.\n\n**Automation bias** does not come from the data but from the human using the model: the tendency to trust an automated recommendation more than one's own judgment, even when the latter would be more reliable.\n\n## Why a good overall metric is not enough\n\nA model can show excellent overall accuracy while being much more often wrong on a particular subgroup of the population. An evaluation that stops at the overall metric, without breaking it down by relevant subgroup, can hide this imbalance.\n\nA common trap: removing the sensitive attribute itself (age, gender, ethnicity) from the dataset creates the impression of fixing the problem, but other correlated variables (zip code, job title, school attended) can let the model reconstruct that information indirectly and keep discriminating on that basis, without any column explicitly carrying the removed attribute.\n\n## A responsibility that does not stop at deployment\n\nSpotting a bias is not enough to fix it: doing so may require revisiting data collection, the very definition of the problem, or adding explicit constraints to the model. This lesson gives basic vocabulary for spotting these issues; a serious study of algorithmic fairness is beyond the scope of this introductory course.\n\n## Your turn\n\nA resume screening model reaches 92% overall accuracy, but rejects applications from people over 50 twice as often as those from other age groups. Why is the 92% figure not enough to judge this model acceptable?\n\n> Answer: high overall accuracy can hide an error concentrated on one specific subgroup. Here, the model treats one age group noticeably worse than others, which the overall metric does not reveal; performance must be broken down by subgroup to see it.\n\n> **Key takeaways**\n>\n> A model reproduces biases present in its data (historical, selection, reporting) or introduced by human use (automation), and a satisfying overall metric does not guarantee fair treatment of every subgroup.\n\n*Checked on September 27, 2026 against the \"Fairness: Types of bias\" page of Google's Machine Learning Crash Course.*"
            },
            "ar": {
              "title": "التحيّز والإنصاف والمسؤولية",
              "body": "## النموذج يكرر ما رآه\n\nلا يخترع نموذج تعلم الآلة شيئا: بل يتعلم أنماطا موجودة في بيانات تدريبه. إذا عكست هذه البيانات تفاوتات أو اختلالات قائمة، فمن المرجح جدا أن يكررها النموذج، بل ويضخّمها، دون أن يقول أي سطر كود ذلك صراحة.\n\n## بعض المصادر الشائعة للتحيّز\n\nيظهر **التحيّز التاريخي (historical bias)** عندما تعكس البيانات تفاوتات ماضية أو حاضرة في المجتمع، بغض النظر عن طريقة جمعها: نموذج توظيف مُدرَّب على عشرين سنة من التوظيف في قطاع غير متوازن تاريخيا سيرث هذا الاختلال.\n\nيحدث **تحيّز الاختيار (selection bias)** عندما لا تمثّل بيانات التدريب بأمانة الفئة السكانية التي سيُستخدم عليها النموذج، مثل نموذج التعرف على الكلام المُدرَّب أساسا على أصوات بالغين، فيؤدي أداء أضعف مع أصوات الأطفال.\n\nيظهر **تحيّز التقرير (reporting bias)** عندما لا يعكس تكرار ذكر حقيقة ما في البيانات تكرارها الحقيقي في العالم: في النصوص، غالبا ما يُناقَش الحدث غير المألوف أكثر من الحدث العادي، مما قد يشوّه ما \"يتعلمه\" النموذج كنمط اعتيادي.\n\nلا يأتي **تحيّز الأتمتة (automation bias)** من البيانات بل من الإنسان الذي يستخدم النموذج: الميل إلى الوثوق بتوصية آلية أكثر من الحكم الشخصي، حتى عندما يكون هذا الأخير أكثر موثوقية.\n\n## لماذا لا تكفي مقياس إجمالي جيد\n\nيمكن لنموذج أن يُظهر دقة إجمالية ممتازة بينما يخطئ أكثر بكثير على فئة فرعية معينة من السكان. تقييم يتوقف عند المقياس الإجمالي، دون تفصيله حسب الفئات الفرعية ذات الصلة، قد يخفي هذا الاختلال.\n\nفخ شائع: حذف الصفة الحساسة نفسها (العمر، الجنس، الأصل) من مجموعة البيانات يعطي انطباعا بحل المشكلة، لكن متغيرات أخرى مرتبطة بها (الرمز البريدي، المسمى الوظيفي، المؤسسة التعليمية) قد تسمح للنموذج بإعادة بناء تلك المعلومة بشكل غير مباشر ومواصلة التمييز على أساسها، دون أن يحمل أي عمود الصفة المحذوفة صراحة.\n\n## مسؤولية لا تتوقف عند النشر\n\nرصد تحيّز لا يكفي لتصحيحه: قد يتطلب ذلك إعادة النظر في جمع البيانات، أو في تعريف المسألة نفسه، أو إضافة قيود صريحة على النموذج. يقدّم هذا الدرس مفردات أساسية لرصد هذه المسائل؛ دراسة جادة للإنصاف الخوارزمي تتجاوز نطاق هذا الدرس التمهيدي.\n\n## دورك الآن\n\nيحقق نموذج لفرز السير الذاتية دقة إجمالية 92%، لكنه يرفض طلبات من تجاوزوا الخمسين ضعف ما يرفضه من الفئات العمرية الأخرى. لماذا لا يكفي رقم 92% للحكم بأن هذا النموذج مقبول؟\n\n> التصحيح: يمكن لدقة إجمالية مرتفعة أن تخفي خطأ مركّزا على فئة فرعية محددة. هنا، يعامل النموذج فئة عمرية أسوأ بشكل ملحوظ من غيرها، وهو ما لا يكشفه المقياس الإجمالي؛ يجب تفصيل الأداء حسب الفئة الفرعية لرؤيته.\n\n> **للتذكّر**\n>\n> يكرر النموذج التحيّزات الموجودة في بياناته (تاريخي، اختيار، تقرير) أو تلك التي يُدخلها الاستخدام البشري (أتمتة)، ومقياس إجمالي مُرضٍ لا يضمن معاملة عادلة لكل فئة فرعية.\n\n*تم التحقق في 2026-09-27 على صفحة \"Fairness: Types of bias\" من Machine Learning Crash Course من Google.*"
            }
          }
        },
        {
          "id": "l20",
          "title": "Quiz : production et responsabilité",
          "type": "quiz",
          "duration": "6 min",
          "questions": [
            {
              "id": "q14",
              "prompt": "Quelle part du code d'un système de machine learning en production correspond typiquement à l'entraînement et au service du modèle lui-même ?",
              "options": [
                "5 % ou moins",
                "Environ 50 %",
                "Environ 80 %",
                "Presque 100 %"
              ],
              "correctIndex": 0,
              "explanation": "Le code d'entraînement et de service du modèle représente généralement 5 % ou moins du code total ; le reste couvre données, infrastructure et surveillance."
            },
            {
              "id": "q15",
              "prompt": "Qu'est-ce que la dérive des données (data drift) ?",
              "options": [
                "Un écart entre la distribution des données reçues en production et celle utilisée à l'entraînement",
                "Une baisse du taux d'apprentissage pendant l'entraînement",
                "Le remplacement d'un modèle statique par un modèle dynamique",
                "Une erreur de calcul de la matrice de confusion"
              ],
              "correctIndex": 0,
              "explanation": "La dérive des données survient quand le monde change et que les données réelles s'éloignent de celles vues à l'entraînement."
            },
            {
              "id": "q16",
              "prompt": "Que désigne le biais de sélection (selection bias) ?",
              "options": [
                "Le fait que les données d'entraînement ne représentent pas fidèlement la population réelle d'usage",
                "La tendance humaine à trop faire confiance à un modèle",
                "Le fait qu'un événement rare soit sur-représenté dans les textes",
                "Une erreur de calcul de la précision"
              ],
              "correctIndex": 0,
              "explanation": "Le biais de sélection vient d'un décalage entre la population représentée dans les données d'entraînement et celle sur laquelle le modèle sera réellement utilisé."
            },
            {
              "id": "q17",
              "prompt": "Pourquoi une exactitude globale de 92 % ne suffit-elle pas à garantir qu'un modèle traite équitablement tous les sous-groupes ?",
              "options": [
                "Elle peut masquer un taux d'erreur beaucoup plus élevé sur un sous-groupe particulier",
                "Elle signifie automatiquement que le modèle est biaisé",
                "Elle ne concerne que les modèles de régression, pas de classification",
                "Elle ne peut être calculée que sur les données d'entraînement"
              ],
              "correctIndex": 0,
              "explanation": "Une métrique globale agrège toutes les erreurs ; il faut la décomposer par sous-groupe pour repérer un traitement inégal."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: production and responsibility",
              "questions": [
                {
                  "prompt": "What share of a production machine learning system's code typically corresponds to training and serving the model itself?",
                  "options": [
                    "5% or less",
                    "About 50%",
                    "About 80%",
                    "Nearly 100%"
                  ],
                  "explanation": "Training and serving code usually makes up 5% or less of the total code; the rest covers data, infrastructure and monitoring."
                },
                {
                  "prompt": "What is data drift?",
                  "options": [
                    "A gap between the distribution of data received in production and the one used during training",
                    "A drop in the learning rate during training",
                    "Replacing a static model with a dynamic one",
                    "A miscalculation of the confusion matrix"
                  ],
                  "explanation": "Data drift happens when the world changes and real-world data moves away from what was seen during training."
                },
                {
                  "prompt": "What does selection bias refer to?",
                  "options": [
                    "Training data that does not faithfully represent the real population the model will be used on",
                    "The human tendency to over-trust a model",
                    "A rare event being over-represented in text",
                    "A miscalculation of precision"
                  ],
                  "explanation": "Selection bias comes from a mismatch between the population represented in the training data and the one the model will actually be used on."
                },
                {
                  "prompt": "Why isn't 92% overall accuracy enough to guarantee a model treats every subgroup fairly?",
                  "options": [
                    "It can hide a much higher error rate on a particular subgroup",
                    "It automatically means the model is biased",
                    "It only applies to regression models, not classification",
                    "It can only be computed on training data"
                  ],
                  "explanation": "An overall metric aggregates all errors; it must be broken down by subgroup to spot unequal treatment."
                }
              ]
            },
            "ar": {
              "title": "اختبار: الإنتاج والمسؤولية",
              "questions": [
                {
                  "prompt": "ما الحصة التي يمثلها عادة كود تدريب النموذج نفسه وخدمته من إجمالي كود نظام تعلم آلة في الإنتاج؟",
                  "options": [
                    "5% أو أقل",
                    "نحو 50%",
                    "نحو 80%",
                    "قرابة 100%"
                  ],
                  "explanation": "يشكل كود التدريب والخدمة عادة 5% أو أقل من إجمالي الكود؛ يغطي الباقي البيانات والبنية التحتية والمراقبة."
                },
                {
                  "prompt": "ما هو انحراف البيانات (data drift)؟",
                  "options": [
                    "فجوة بين توزيع البيانات المستقبلة في الإنتاج والتوزيع المستخدم أثناء التدريب",
                    "انخفاض في معدل التعلم أثناء التدريب",
                    "استبدال نموذج ثابت بآخر ديناميكي",
                    "خطأ في حساب مصفوفة الالتباس"
                  ],
                  "explanation": "يحدث انحراف البيانات عندما يتغير العالم وتبتعد البيانات الحقيقية عما شُوهد أثناء التدريب."
                },
                {
                  "prompt": "إلى ماذا يشير تحيّز الاختيار (selection bias)؟",
                  "options": [
                    "بيانات تدريب لا تمثّل بأمانة الفئة السكانية الحقيقية التي سيُستخدم عليها النموذج",
                    "الميل البشري للثقة المفرطة بنموذج",
                    "حدث نادر ممثَّل بشكل مبالغ فيه في النصوص",
                    "خطأ في حساب الدقة"
                  ],
                  "explanation": "ينشأ تحيّز الاختيار من عدم تطابق بين الفئة الممثَّلة في بيانات التدريب والفئة التي سيُستخدم عليها النموذج فعليا."
                },
                {
                  "prompt": "لماذا لا تكفي دقة إجمالية 92% لضمان معاملة النموذج لكل الفئات الفرعية بإنصاف؟",
                  "options": [
                    "يمكن أن تخفي معدل خطأ أعلى بكثير على فئة فرعية معينة",
                    "تعني تلقائيا أن النموذج متحيّز",
                    "تخص فقط نماذج الانحدار وليس التصنيف",
                    "لا يمكن حسابها إلا على بيانات التدريب"
                  ],
                  "explanation": "يجمّع المقياس الإجمالي كل الأخطاء؛ يجب تفصيله حسب الفئة الفرعية لرصد معاملة غير متكافئة."
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "i18n": {
    "en": {
      "title": "Machine Learning: the fundamentals",
      "tagline": "Understand how a machine learns from data: regression, classification, neural networks and language models, with examples you can compute by hand.",
      "description": "A path into machine learning for people who have never touched it. You start from a scatter plot and a line that fits it, learn to measure a model's error and correct it, then move on to classification (confusion matrix, precision, recall, ROC), neural networks, embeddings and large language models. Every concept rests on a small dataset you can compute by hand, not on a formula you have to take on faith. The course ends with production deployment and fairness, two topics introductory courses too often skip.",
      "language": "English",
      "software": "A browser; Python is optional, only if you want to reproduce the calculations yourself",
      "prerequisites": [
        "High-school-level algebra (solve a first-degree equation, read a line y = a x + b)",
        "Ability to read a simple chart (scatter plot, curve)",
        "No programming experience required"
      ],
      "summary": [
        "Part 1: Linear regression, the basic building block of machine learning",
        "Part 2: Classification, logistic regression and metrics (precision, recall, ROC, AUC)",
        "Part 3: Numerical and categorical data, generalization and overfitting",
        "Part 4: Neural networks and embeddings",
        "Part 5: Language models, from n-grams to today's large models",
        "Part 6: Production deployment, bias and fairness"
      ],
      "objectives": [
        "Explain what a linear regression model actually computes and how it learns",
        "Choose and interpret a loss function (L1, L2, MAE, MSE)",
        "Read a confusion matrix and compute precision, recall and F1 score by hand",
        "Understand what a ROC curve is for and what AUC measures",
        "Tell numerical data apart from categorical data, and spot overfitting",
        "Explain what neural networks and embeddings are used for",
        "Describe how a language model predicts the next word, from n-grams to LLMs",
        "List the questions to ask before shipping a model to production, including on bias"
      ],
      "skills": [
        "Linear and logistic regression",
        "Reading a confusion matrix",
        "Computing precision, recall, F1 score, ROC and AUC",
        "Neural network and embedding concepts",
        "Language model basics (tokens, n-grams, context)",
        "Production deployment and algorithmic fairness reference points"
      ],
      "parts": [
        "Linear regression: first steps",
        "Classification: from logistic regression to metrics",
        "Data and generalization",
        "Neural networks and embeddings",
        "Language models",
        "Production and responsibility"
      ],
      "lessons": {
        "l1": "Sources, license and attestation",
        "l2": "The principle of linear regression",
        "l3": "Measuring and fixing error: loss and gradient descent",
        "l4": "From regression to classification: logistic regression",
        "l5": "Decision threshold and confusion matrix",
        "l6": "Precision, recall and F1 score",
        "l7": "ROC curve and AUC",
        "l8": "Quiz: classification",
        "l9": "Numerical and categorical data",
        "l10": "Generalization and overfitting",
        "l11": "Quiz: data and generalization",
        "l12": "Neural networks: beyond the linear model",
        "l13": "Embeddings",
        "l14": "Quiz: neural networks and embeddings",
        "l15": "Tokens, n-grams and context",
        "l16": "From recurrent networks to large language models",
        "l17": "Quiz: language models",
        "l18": "Putting a model into production",
        "l19": "Bias, fairness and responsibility",
        "l20": "Quiz: production and responsibility"
      },
      "instructorBio": "Written by the OmniLearn instructor team, including a Microsoft Certified Trainer who delivers Azure sessions and an engineering science teacher. The course builds on Google's Machine Learning Crash Course (CC BY 4.0 license), rewritten around small datasets you can compute by hand and translated into three languages."
    },
    "ar": {
      "title": "التعلم الآلي (Machine Learning): الأساسيات",
      "tagline": "افهم كيف تتعلم الآلة من البيانات: الانحدار (regression)، التصنيف (classification)، الشبكات العصبية ونماذج اللغة، بأمثلة يمكنك حسابها يدويا.",
      "description": "مسار لفهم التعلم الآلي لمن لم يطلع عليه من قبل. تبدأ من سحابة نقاط وخط يلائمها، ثم تتعلم قياس خطأ النموذج وتصحيحه، لتنتقل بعدها إلى التصنيف (مصفوفة الالتباس confusion matrix، الدقة precision، الاستدعاء recall، منحنى ROC)، ثم الشبكات العصبية والتضمينات (embeddings) ونماذج اللغة الكبيرة. كل مفهوم يستند إلى مجموعة بيانات صغيرة يمكن حسابها يدويا، لا إلى معادلة تُقبل كمسلّمة. ينتهي الكورس بموضوعي النشر في الإنتاج والإنصاف، وهما موضوعان كثيرا ما تتجاهلهما دورات المقدمة.",
      "language": "العربية",
      "software": "متصفح إنترنت؛ لغة بايثون اختيارية إن رغبت في إعادة إجراء الحسابات بنفسك",
      "prerequisites": [
        "جبر بمستوى الثانوية (حل معادلة من الدرجة الأولى، قراءة خط y = a x + b)",
        "القدرة على قراءة رسم بياني بسيط (سحابة نقاط، منحنى)",
        "لا حاجة لأي خبرة سابقة في البرمجة"
      ],
      "summary": [
        "الجزء 1: الانحدار الخطي (linear regression)، اللبنة الأساسية للتعلم الآلي",
        "الجزء 2: التصنيف، الانحدار اللوجستي (logistic regression) والمقاييس (الدقة، الاستدعاء، ROC، AUC)",
        "الجزء 3: البيانات العددية والفئوية، التعميم والإفراط في التعلم (overfitting)",
        "الجزء 4: الشبكات العصبية والتضمينات (embeddings)",
        "الجزء 5: نماذج اللغة، من التتابعات اللغوية (n-grams) إلى النماذج الكبيرة الحالية",
        "الجزء 6: النشر في الإنتاج والتحيز والإنصاف"
      ],
      "objectives": [
        "شرح ما يحسبه نموذج الانحدار الخطي فعليا وكيف يتعلم",
        "اختيار وتفسير دالة الخسارة (loss function): L1، L2، MAE، MSE",
        "قراءة مصفوفة الالتباس وحساب الدقة والاستدعاء ومقياس F1 يدويا",
        "فهم فائدة منحنى ROC وما تقيسه مساحة AUC",
        "التمييز بين البيانات العددية والفئوية، وكشف الإفراط في التعلم",
        "شرح استخدامات الشبكات العصبية والتضمينات",
        "وصف كيفية توقع نموذج اللغة للكلمة التالية، من n-grams إلى نماذج اللغة الكبيرة",
        "تعداد الأسئلة الواجب طرحها قبل نشر نموذج في الإنتاج، بما في ذلك مسألة التحيز"
      ],
      "skills": [
        "الانحدار الخطي واللوجستي",
        "قراءة مصفوفة الالتباس",
        "حساب الدقة والاستدعاء ومقياس F1 ومنحنى ROC ومساحة AUC",
        "مفاهيم الشبكات العصبية والتضمينات",
        "أساسيات نماذج اللغة (الرموز tokens، n-grams، السياق)",
        "معايير النشر في الإنتاج والإنصاف الخوارزمي"
      ],
      "parts": [
        "الانحدار الخطي: الخطوات الأولى",
        "التصنيف: من الانحدار اللوجستي إلى المقاييس",
        "البيانات والتعميم",
        "الشبكات العصبية والتضمينات",
        "نماذج اللغة",
        "الإنتاج والمسؤولية"
      ],
      "lessons": {
        "l1": "المصادر والترخيص والإفادة",
        "l2": "مبدأ الانحدار الخطي (linear regression)",
        "l3": "قياس الخطأ وتصحيحه: دالة الخسارة والانحدار التدريجي (gradient descent)",
        "l4": "من الانحدار إلى التصنيف: الانحدار اللوجستي (logistic regression)",
        "l5": "عتبة القرار (threshold) ومصفوفة الالتباس (confusion matrix)",
        "l6": "الدقة (precision) والاستدعاء (recall) ومقياس F1",
        "l7": "منحنى ROC ومساحة AUC",
        "l8": "اختبار: التصنيف",
        "l9": "البيانات العددية والفئوية (categorical)",
        "l10": "التعميم (generalization) والإفراط في التعلم (overfitting)",
        "l11": "اختبار: البيانات والتعميم",
        "l12": "الشبكات العصبية: ما وراء النموذج الخطي",
        "l13": "التضمينات (embeddings)",
        "l14": "اختبار: الشبكات العصبية والتضمينات",
        "l15": "الرموز (tokens) وn-غرامات والسياق",
        "l16": "من الشبكات المتكررة إلى نماذج اللغة الكبيرة",
        "l17": "اختبار: نماذج اللغة",
        "l18": "وضع نموذج في الإنتاج",
        "l19": "التحيّز والإنصاف والمسؤولية",
        "l20": "اختبار: الإنتاج والمسؤولية"
      },
      "instructorBio": "كتبه فريق مدرّبي OmniLearn، ومن بينهم مدرّب معتمد من Microsoft (MCT) يقدّم جلسات Azure وأستاذ في علوم الهندسة. يعتمد الكورس على Machine Learning Crash Course من Google (ترخيص CC BY 4.0)، وقد أُعيدت كتابته حول مجموعات بيانات صغيرة يمكن حسابها يدويًا وتُرجم إلى ثلاث لغات."
    }
  },
  "instructorBio": "Écrit par l'équipe de formateurs OmniLearn, dont un Microsoft Certified Trainer qui anime des sessions Azure et un enseignant en sciences de l'ingénieur. Le cours s'appuie sur le Machine Learning Crash Course de Google (licence CC BY 4.0), réécrit autour de petits jeux de données calculables à la main et traduit en trois langues."
};

export default course;
