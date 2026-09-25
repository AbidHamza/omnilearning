import type { FreeCourse } from "./types";

const course: FreeCourse = {
  slug: "ml-fondamentaux",
  title: "Machine Learning : les fondamentaux",
  tagline:
    "Comprends comment une machine apprend à partir de données : régression, classification, réseaux de neurones et modèles de langue, avec des exemples que tu peux calculer à la main.",
  description:
    "Un parcours pour comprendre le machine learning sans y avoir jamais touché. Tu pars d'un nuage de points et d'une droite qui s'ajuste dessus, tu apprends à mesurer l'erreur d'un modèle et à la corriger, puis tu avances vers la classification (matrice de confusion, précision, rappel, ROC), les réseaux de neurones, les embeddings et les grands modèles de langue. Chaque notion s'appuie sur un petit jeu de données calculable à la main, pas sur une formule abstraite à admettre. Le cours se termine sur la mise en production et les questions d'équité, deux sujets que les cours d'introduction sautent trop souvent.",
  category: "Intelligence Artificielle",
  level: "Débutant",
  instructor: "Équipe OmniLearn",
  hours: 7,
  rating: 0,
  learners: 0,
  accent: "#eab308",
  image: "/covers/ml-fondamentaux.svg",
  language: "Français",
  software: "Un navigateur ; Python est facultatif, seulement si tu veux reproduire les calculs toi-même",
  prerequisites: [
    "Bases d'algèbre de niveau lycée (résoudre une équation du premier degré, lire une droite y = a x + b)",
    "Savoir lire un graphique simple (nuage de points, courbe)",
    "Aucune expérience en programmation requise",
  ],
  summary: [
    "Partie 1 : Régression linéaire, la brique de base du machine learning",
    "Partie 2 : Classification, régression logistique et métriques (précision, rappel, ROC, AUC)",
    "Partie 3 : Données numériques et catégorielles, généralisation et surapprentissage",
    "Partie 4 : Réseaux de neurones et embeddings",
    "Partie 5 : Modèles de langue, des n-grammes aux grands modèles actuels",
    "Partie 6 : Mise en production, biais et équité",
  ],
  objectives: [
    "Expliquer ce qu'un modèle de régression linéaire calcule réellement et comment il apprend",
    "Choisir et interpréter une fonction de perte (L1, L2, MAE, MSE)",
    "Lire une matrice de confusion et calculer précision, rappel et F1-score à la main",
    "Comprendre à quoi sert une courbe ROC et ce que mesure l'AUC",
    "Distinguer donnée numérique et donnée catégorielle, et repérer un surapprentissage",
    "Expliquer à quoi servent les réseaux de neurones et les embeddings",
    "Décrire comment un modèle de langue prédit le prochain mot, des n-grammes aux LLM",
    "Citer les questions à se poser avant de mettre un modèle en production, y compris sur les biais",
  ],
  skills: [
    "Régression linéaire et logistique",
    "Lecture d'une matrice de confusion",
    "Calcul de précision, rappel, F1-score, ROC et AUC",
    "Notions de réseaux de neurones et d'embeddings",
    "Bases des modèles de langue (tokens, n-grammes, contexte)",
    "Repères de mise en production et d'équité algorithmique",
  ],
  contentTypes: [
    "Leçons écrites avec exemples chiffrés",
    "Tableaux de calcul pas à pas",
    "Exercices corrigés",
    "Quiz interactifs",
  ],
  source: {
    name: "Machine Learning Crash Course (Google)",
    url: "https://developers.google.com/machine-learning/crash-course",
    license: "CC-BY-4.0",
    version: "consulté le 2026-09-25",
  },
  parts: [
    {
      id: "p1",
      title: "Régression linéaire : premiers pas",
      lessons: [
        {
          id: "l1",
          title: "Sources, licence et attestation",
          type: "text",
          duration: "5 min",
          isFree: true,
          body:
            "## Un cours indépendant, adapté d'une source ouverte\n\n" +
            "Ce cours est publié par OmniLearn. Il n'est ni affilié à Google, ni revu, ni approuvé par Google. Avant de commencer, voici exactement d'où vient le contenu et ce que change ton attestation de fin de cours.\n\n" +
            "## Attribution\n\n" +
            "Ce cours adapte des notions et des exemples du **Machine Learning Crash Course**, publié par **Google**.\n\n" +
            "- Source : [developers.google.com/machine-learning/crash-course](https://developers.google.com/machine-learning/crash-course)\n" +
            "- Licence du texte original : [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)\n" +
            "- Version consultée : 25 septembre 2026\n\n" +
            "Ce que nous avons fait à partir de cette source :\n\n" +
            "- Réécriture complète des explications, avec un fil et un ton propres à OmniLearn\n" +
            "- Réorganisation en 6 parties et 20 leçons, différente du plan d'origine\n" +
            "- Traduction et rédaction en français, en anglais et en arabe\n" +
            "- Ajout de quiz, d'exercices corrigés et de nouveaux exemples chiffrés\n" +
            "- Suppression de toutes les images, captures et schémas interactifs d'origine\n\n" +
            "> À retenir : la licence CC BY 4.0 autorise cette adaptation à condition de créditer la source. Elle ne dit rien du statut de ce cours-ci : ce texte, tel que tu le lis ici, est une œuvre d'OmniLearn et n'est pas republié sous CC BY 4.0.\n\n" +
            "## Ce que l'attestation ne dit pas\n\n" +
            "À la fin de ce cours, OmniLearn peut te délivrer une attestation. Cette attestation confirme uniquement que tu as terminé les leçons et répondu aux quiz de ce cours sur cette plateforme.\n\n" +
            "Elle ne constitue en aucun cas une certification Google, ni un diplôme, ni une reconnaissance officielle de compétences délivrée par un tiers. Aucun organisme externe ne valide le contenu de ce parcours. Si tu vises une certification reconnue, Google Cloud fait passer ses propres examens, par exemple Professional Machine Learning Engineer, sans aucun lien avec ce cours.\n\n" +
            "## À toi\n\n" +
            "Avant de continuer, relis les deux points ci-dessus : la source (Google, CC BY 4.0, lien et modifications listées) et la nature de l'attestation (preuve de progression sur OmniLearn, pas une certification).\n\n" +
            "> Correction : il n'y a pas de bonne ou de mauvaise réponse ici, seulement deux faits à avoir en tête avant d'apprendre : d'où vient le contenu, et ce que prouve (ou ne prouve pas) ton attestation.",
          i18n: {
            en: {
              title: "Sources, license and attestation",
              body:
                "## An independent course, adapted from an open source\n\n" +
                "This course is published by OmniLearn. It is not affiliated with, reviewed by, or endorsed by Google. Before you start, here is exactly where the content comes from and what your end-of-course attestation does and does not mean.\n\n" +
                "## Attribution\n\n" +
                "This course adapts concepts and examples from the **Machine Learning Crash Course**, published by **Google**.\n\n" +
                "- Source: [developers.google.com/machine-learning/crash-course](https://developers.google.com/machine-learning/crash-course)\n" +
                "- License of the original text: [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)\n" +
                "- Version consulted: September 25, 2026\n\n" +
                "What we did with this source:\n\n" +
                "- Fully rewrote the explanations with OmniLearn's own structure and voice\n" +
                "- Reorganized the material into 6 parts and 20 lessons, different from the original outline\n" +
                "- Translated and wrote the course in French, English and Arabic\n" +
                "- Added quizzes, worked exercises and new numeric examples\n" +
                "- Removed all original images, screenshots and interactive widgets\n\n" +
                "> Keep in mind: CC BY 4.0 allows this kind of adaptation as long as the source is credited. It says nothing about the status of this course itself: the text you are reading here is an OmniLearn work and is not republished under CC BY 4.0.\n\n" +
                "## What the attestation does not say\n\n" +
                "At the end of this course, OmniLearn may issue you an attestation. It confirms only that you completed the lessons and quizzes of this course on this platform.\n\n" +
                "It is not a Google certification, not a diploma, and not an official recognition of skills delivered by any third party. No outside organization validates the content of this path. If you want a recognized certification, Google Cloud runs its own exams, such as Professional Machine Learning Engineer, with no link to this course.\n\n" +
                "## Try it yourself\n\n" +
                "Before moving on, reread the two points above: the source (Google, CC BY 4.0, link and listed changes) and the nature of the attestation (proof of progress on OmniLearn, not a certification).\n\n" +
                "> Answer: there is no right or wrong answer here, just two facts to keep in mind before you start learning: where the content comes from, and what your attestation does, and does not, prove.",
            },
            ar: {
              title: "المصادر والترخيص والإفادة",
              body:
                "## كورس مستقل، مقتبس من مصدر مفتوح\n\n" +
                "هذا الكورس تنشره منصة OmniLearn. وهو غير تابع لشركة Google ولم تراجعه أو تعتمده. قبل أن تبدأ، إليك بالضبط من أين يأتي المحتوى وماذا تعني، وماذا لا تعني، إفادة إتمام الكورس.\n\n" +
                "## الإسناد (attribution)\n\n" +
                "يقتبس هذا الكورس مفاهيم وأمثلة من **Machine Learning Crash Course**، الذي تنشره **Google**.\n\n" +
                "- المصدر: [developers.google.com/machine-learning/crash-course](https://developers.google.com/machine-learning/crash-course)\n" +
                "- ترخيص النص الأصلي: [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)\n" +
                "- تاريخ الاطلاع: 25 سبتمبر 2026\n\n" +
                "ما قمنا به انطلاقا من هذا المصدر:\n\n" +
                "- إعادة كتابة كاملة للشروحات بأسلوب وبنية خاصين بـ OmniLearn\n" +
                "- إعادة تنظيم المحتوى في 6 أجزاء و20 درسا، بترتيب مختلف عن الأصل\n" +
                "- ترجمة الكورس وكتابته بالفرنسية والإنجليزية والعربية\n" +
                "- إضافة اختبارات (quiz) وتمارين مصححة وأمثلة رقمية جديدة\n" +
                "- حذف جميع الصور ولقطات الشاشة والعناصر التفاعلية الأصلية\n\n" +
                "> للتذكر: يسمح ترخيص CC BY 4.0 بهذا النوع من الاقتباس بشرط الإسناد إلى المصدر. لكنه لا يقول شيئا عن وضع هذا الكورس نفسه: النص الذي تقرؤه هنا هو عمل خاص بـ OmniLearn وغير معاد نشره تحت ترخيص CC BY 4.0.\n\n" +
                "## ما لا تعنيه الإفادة (attestation)\n\n" +
                "في نهاية هذا الكورس، قد تمنحك OmniLearn إفادة (attestation). وهي تؤكد فقط أنك أتممت دروس واختبارات هذا الكورس على هذه المنصة.\n\n" +
                "وهي ليست بأي شكل شهادة (certification) من Google، ولا دبلوما، ولا اعترافا رسميا بالكفاءات يمنحه أي طرف ثالث. لا توجد جهة خارجية تصادق على محتوى هذا المسار. إن كنت تريد شهادة معترفا بها، فإن Google Cloud تنظم امتحاناتها الخاصة، مثل Professional Machine Learning Engineer، ولا علاقة لها بهذا الكورس.\n\n" +
                "## جرّب بنفسك\n\n" +
                "قبل المتابعة، أعد قراءة النقطتين أعلاه: المصدر (Google، ترخيص CC BY 4.0، الرابط والتغييرات المذكورة) وطبيعة الإفادة (إثبات تقدم على OmniLearn، وليست شهادة).\n\n" +
                "> التصحيح: لا توجد هنا إجابة صحيحة أو خاطئة، بل حقيقتان يجب تذكرهما قبل بدء التعلم: من أين يأتي المحتوى، وماذا تثبت إفادتك، وماذا لا تثبت.",
            },
          },
        },
        {
          id: "l2",
          title: "Le principe de la régression linéaire",
          type: "text",
          duration: "10 min",
          isFree: true,
          body:
            "## Un nuage de points, une droite qui s'ajuste\n\n" +
            "Le machine learning commence souvent par un problème très simple : on a un tableau de données, et on veut prédire une valeur à partir d'une autre.\n\n" +
            "Prenons un exemple concret. Voici le poids (en milliers de livres) et la consommation (en miles par gallon, MPG) de sept voitures :\n\n" +
            "| Poids (x1) | Consommation réelle (MPG) |\n" +
            "|---|---|\n" +
            "| 3,50 | 18 |\n" +
            "| 3,69 | 15 |\n" +
            "| 3,44 | 18 |\n" +
            "| 3,43 | 16 |\n" +
            "| 4,34 | 15 |\n" +
            "| 4,42 | 14 |\n" +
            "| 2,37 | 24 |\n\n" +
            "On voit une tendance : plus une voiture est lourde, moins elle fait de miles par gallon. Un modèle de **régression linéaire** cherche une droite qui résume cette tendance, de la forme :\n\n" +
            "```\ny' = b + w1 * x1\n```\n\n" +
            "où `y'` est la valeur prédite, `x1` est la donnée d'entrée (ici le poids), `w1` est le **poids** appris par le modèle (la pente de la droite), et `b` est le **biais** (l'ordonnée à l'origine).\n\n" +
            "## Un modèle entraîné sur ces données\n\n" +
            "En ajustant une droite sur ce nuage de points, on peut obtenir par exemple :\n\n" +
            "```\ny' = 34 + (-4.6) * x1\n```\n\n" +
            "Ici `b = 34` et `w1 = -4.6`. Le poids négatif traduit exactement ce qu'on observe : chaque millier de livres supplémentaire fait baisser la consommation prédite de 4,6 MPG.\n\n" +
            "Prenons une voiture de 4 000 livres, donc `x1 = 4` :\n\n" +
            "```\ny' = 34 + (-4.6 * 4)\ny' = 34 - 18.4\ny' = 15.6\n```\n\n" +
            "Le modèle prédit environ **15,6 MPG** pour cette voiture. Tu peux refaire ce calcul avec un simple crayon : c'est tout ce qu'un modèle de régression linéaire fait, à chaque prédiction.\n\n" +
            "## Pourquoi une droite, et pas un chiffre unique ?\n\n" +
            "Une droite capture une relation, pas un cas isolé. Au lieu de mémoriser sept couples de valeurs, le modèle apprend une règle générale (une pente et une ordonnée à l'origine) qui peut ensuite prédire la consommation d'une voiture qui n'était pas dans le tableau de départ. C'est la promesse centrale du machine learning supervisé : généraliser à partir d'exemples.\n\n" +
            "La question qui reste ouverte, et qu'on traite dans la leçon suivante, est : comment sait-on que `b = 34` et `w1 = -4.6` sont de bonnes valeurs, plutôt que `b = 20` et `w1 = -1` ?\n\n" +
            "## À toi\n\n" +
            "Avec le modèle `y' = 34 + (-4.6) * x1`, quelle consommation ce modèle prédit-il pour une voiture de 3 000 livres (`x1 = 3`) ?\n\n" +
            "> Correction : `y' = 34 + (-4.6 * 3) = 34 - 13.8 = 20.2` MPG.\n\n" +
            "> À retenir : un modèle de régression linéaire simple se résume à deux nombres, un poids et un biais, appliqués à une formule que tu peux calculer à la main.",
          i18n: {
            en: {
              title: "The principle of linear regression",
              body:
                "## A scatter plot, a line that fits it\n\n" +
                "Machine learning often starts with a very simple problem: you have a table of data and you want to predict one value from another.\n\n" +
                "Take a concrete example. Here is the weight (in thousands of pounds) and fuel efficiency (in miles per gallon, MPG) of seven cars:\n\n" +
                "| Weight (x1) | Actual MPG |\n" +
                "|---|---|\n" +
                "| 3.50 | 18 |\n" +
                "| 3.69 | 15 |\n" +
                "| 3.44 | 18 |\n" +
                "| 3.43 | 16 |\n" +
                "| 4.34 | 15 |\n" +
                "| 4.42 | 14 |\n" +
                "| 2.37 | 24 |\n\n" +
                "There is a clear trend: the heavier the car, the fewer miles per gallon. A **linear regression** model looks for a line that summarizes this trend, of the form:\n\n" +
                "```\ny' = b + w1 * x1\n```\n\n" +
                "where `y'` is the predicted value, `x1` is the input (here, weight), `w1` is the **weight** learned by the model (the slope), and `b` is the **bias** (the intercept).\n\n" +
                "## A model trained on this data\n\n" +
                "Fitting a line to this scatter plot can give, for example:\n\n" +
                "```\ny' = 34 + (-4.6) * x1\n```\n\n" +
                "Here `b = 34` and `w1 = -4.6`. The negative weight matches exactly what we observe: every extra thousand pounds lowers the predicted MPG by 4.6.\n\n" +
                "Take a 4,000-pound car, so `x1 = 4`:\n\n" +
                "```\ny' = 34 + (-4.6 * 4)\ny' = 34 - 18.4\ny' = 15.6\n```\n\n" +
                "The model predicts about **15.6 MPG** for this car. You can redo this calculation with a plain pencil: that is all a linear regression model does, at every prediction.\n\n" +
                "## Why a line, not a single number?\n\n" +
                "A line captures a relationship, not one isolated case. Instead of memorizing seven pairs of values, the model learns a general rule (a slope and an intercept) that can then predict the fuel efficiency of a car that was not in the original table. That is the core promise of supervised machine learning: generalizing from examples.\n\n" +
                "The open question, covered in the next lesson, is: how do we know `b = 34` and `w1 = -4.6` are good values, rather than `b = 20` and `w1 = -1`?\n\n" +
                "## Try it yourself\n\n" +
                "With the model `y' = 34 + (-4.6) * x1`, what fuel efficiency does it predict for a 3,000-pound car (`x1 = 3`)?\n\n" +
                "> Answer: `y' = 34 + (-4.6 * 3) = 34 - 13.8 = 20.2` MPG.\n\n" +
                "> Keep in mind: a simple linear regression model comes down to two numbers, a weight and a bias, applied through a formula you can compute by hand.",
            },
            ar: {
              title: "مبدأ الانحدار الخطي (linear regression)",
              body:
                "## سحابة نقاط، وخط يلائمها\n\n" +
                "كثيرا ما يبدأ التعلم الآلي بمسألة بسيطة جدا: لدينا جدول بيانات، ونريد التنبؤ بقيمة انطلاقا من قيمة أخرى.\n\n" +
                "لنأخذ مثالا ملموسا. إليك وزن (بالآلاف من الأرطال) واستهلاك الوقود (بالميل لكل غالون، MPG) لسبع سيارات:\n\n" +
                "| الوزن (x1) | الاستهلاك الفعلي (MPG) |\n" +
                "|---|---|\n" +
                "| 3.50 | 18 |\n" +
                "| 3.69 | 15 |\n" +
                "| 3.44 | 18 |\n" +
                "| 3.43 | 16 |\n" +
                "| 4.34 | 15 |\n" +
                "| 4.42 | 14 |\n" +
                "| 2.37 | 24 |\n\n" +
                "نلاحظ اتجاها واضحا: كلما زاد وزن السيارة قلّ عدد الأميال لكل غالون. يبحث نموذج **الانحدار الخطي (linear regression)** عن خط يلخص هذا الاتجاه، بالصيغة:\n\n" +
                "```\ny' = b + w1 * x1\n```\n\n" +
                "حيث `y'` هي القيمة المتوقَّعة، و`x1` هي المدخل (هنا الوزن)، و`w1` هو **الوزن (weight)** الذي يتعلمه النموذج (ميل الخط)، و`b` هو **الانحياز (bias)** (نقطة تقاطع الخط مع المحور).\n\n" +
                "## نموذج مدرَّب على هذه البيانات\n\n" +
                "بملاءمة خط على سحابة النقاط هذه، يمكن الحصول مثلا على:\n\n" +
                "```\ny' = 34 + (-4.6) * x1\n```\n\n" +
                "هنا `b = 34` و`w1 = -4.6`. الوزن السالب يعكس بالضبط ما نلاحظه: كل ألف رطل إضافي يخفّض الاستهلاك المتوقَّع بمقدار 4.6 MPG.\n\n" +
                "لنأخذ سيارة وزنها 4000 رطل، إذن `x1 = 4`:\n\n" +
                "```\ny' = 34 + (-4.6 * 4)\ny' = 34 - 18.4\ny' = 15.6\n```\n\n" +
                "يتوقّع النموذج نحو **15.6 MPG** لهذه السيارة. يمكنك إعادة هذا الحساب بقلم عادي: هذا كل ما يفعله نموذج الانحدار الخطي، في كل تنبؤ.\n\n" +
                "## لماذا خط، لا رقم واحد؟\n\n" +
                "الخط يلتقط علاقة، لا حالة معزولة. فبدلا من حفظ سبعة أزواج من القيم، يتعلم النموذج قاعدة عامة (ميل ونقطة تقاطع) يمكنها بعد ذلك التنبؤ باستهلاك سيارة لم تكن في الجدول الأصلي. هذا هو الوعد الأساسي للتعلم الآلي الموجَّه (supervised machine learning): التعميم انطلاقا من أمثلة.\n\n" +
                "والسؤال المفتوح الذي يعالجه الدرس التالي هو: كيف نعرف أن `b = 34` و`w1 = -4.6` قيمتان جيدتان، بدل `b = 20` و`w1 = -1` مثلا؟\n\n" +
                "## جرّب بنفسك\n\n" +
                "باستخدام النموذج `y' = 34 + (-4.6) * x1`، ما الاستهلاك الذي يتوقعه هذا النموذج لسيارة وزنها 3000 رطل (`x1 = 3`)؟\n\n" +
                "> التصحيح: `y' = 34 + (-4.6 * 3) = 34 - 13.8 = 20.2` MPG.\n\n" +
                "> للتذكر: نموذج انحدار خطي بسيط يختصر في رقمين، وزن وانحياز، يُطبَّقان عبر معادلة يمكنك حسابها يدويا.",
            },
          },
        },
        {
          id: "l3",
          title: "Mesurer l'erreur et la corriger : perte et descente de gradient",
          type: "text",
          duration: "12 min",
          body:
            "## Comment savoir si une droite est bonne\n\n" +
            "Un modèle a besoin d'un moyen de mesurer à quel point ses prédictions sont mauvaises, pour ensuite les améliorer. Cette mesure s'appelle la **perte** (loss). Plus la perte est basse, plus le modèle colle aux données réelles.\n\n" +
            "Deux façons courantes de mesurer l'écart entre une prédiction `y'` et une valeur réelle `y` :\n\n" +
            "- **Perte L1 (ou MAE, erreur absolue moyenne)** : `|y - y'|`, la valeur absolue de l'écart.\n" +
            "- **Perte L2 (ou MSE, erreur quadratique moyenne)** : `(y - y')^2`, l'écart mis au carré.\n\n" +
            "La perte L2 pénalise plus fortement les grosses erreurs, puisqu'elles sont mises au carré. Une voiture de 2 370 livres dont la consommation réelle est 24 MPG et prédite 23,1 MPG donne :\n\n" +
            "```\nL2 = (24 - 23.1)^2 = 0.9^2 = 0.81\n```\n\n" +
            "Sur un jeu de données entier, on calcule la moyenne de cette perte sur tous les exemples : c'est la **MSE**, et sa racine carrée donne la **RMSE**, exprimée dans la même unité que `y` (ici, des MPG), ce qui la rend plus facile à interpréter.\n\n" +
            "## Corriger le modèle : la descente de gradient\n\n" +
            "Un modèle ne devine pas ses poids au hasard. Il part de valeurs de départ (souvent `w1 = 0` et `b = 0`), calcule sa perte, puis ajuste ses paramètres pas à pas pour la faire baisser. Cette méthode s'appelle la **descente de gradient**.\n\n" +
            "À chaque itération, le modèle regarde dans quelle direction la perte diminue le plus vite, et déplace `w1` et `b` d'un petit pas dans cette direction. La taille du pas est fixée par un paramètre appelé le **taux d'apprentissage**.\n\n" +
            "Voici un exemple d'entraînement, avec un taux d'apprentissage de 0,01, sur les données de poids et de consommation vues dans la leçon précédente :\n\n" +
            "| Itération | w1 | b | Perte |\n" +
            "|---|---|---|---|\n" +
            "| 1 | 0,00 | 0,00 | 303,71 |\n" +
            "| 2 | 1,20 | 0,34 | 170,84 |\n" +
            "| 3 | 2,05 | 0,59 | 103,17 |\n" +
            "| 4 | 2,66 | 0,78 | 68,70 |\n" +
            "| 5 | 3,09 | 0,91 | 51,13 |\n" +
            "| 6 | 3,40 | 1,01 | 42,17 |\n\n" +
            "On voit la perte chuter itération après itération : 303,71, puis 170,84, puis 103,17... Ce tableau ne montre que les 6 premières itérations : le modèle continue ensuite, sur beaucoup d'autres pas non montrés ici, jusqu'à converger vers un minimum. Sur ces données, l'entraînement complet aboutit à un poids proche de `w1 = -5.44` et un biais proche de `b = 35.94`, pour une perte minimale d'environ `5.54`.\n\n" +
            "Remarque : `w1` monte d'abord vers des valeurs positives avant de redescendre vers le négatif au fil des itérations suivantes, ce que ce tableau partiel ne montre pas entièrement. C'est normal : la descente de gradient ne va pas toujours en ligne droite vers la solution finale.\n\n" +
            "## À toi\n\n" +
            "Une voiture a une consommation réelle de 18 MPG. Le modèle prédit 20 MPG. Calcule la perte L1 et la perte L2 pour cet exemple.\n\n" +
            "> Correction : L1 = |18 - 20| = 2. L2 = (18 - 20)^2 = 4.\n\n" +
            "> À retenir : la perte mesure l'erreur d'un modèle, et la descente de gradient ajuste les paramètres pas à pas pour la faire baisser, jusqu'à un minimum.",
          i18n: {
            en: {
              title: "Measuring and fixing error: loss and gradient descent",
              body:
                "## How do you know if a line is good\n\n" +
                "A model needs a way to measure how wrong its predictions are, so it can later improve them. This measure is called **loss**. The lower the loss, the closer the model matches the real data.\n\n" +
                "Two common ways to measure the gap between a prediction `y'` and an actual value `y`:\n\n" +
                "- **L1 loss (or MAE, mean absolute error)**: `|y - y'|`, the absolute value of the gap.\n" +
                "- **L2 loss (or MSE, mean squared error)**: `(y - y')^2`, the squared gap.\n\n" +
                "L2 loss punishes large errors more heavily, since they get squared. A 2,370-pound car with an actual fuel efficiency of 24 MPG and a predicted 23.1 MPG gives:\n\n" +
                "```\nL2 = (24 - 23.1)^2 = 0.9^2 = 0.81\n```\n\n" +
                "Over a whole dataset, you average this loss across every example: that is **MSE**, and its square root gives **RMSE**, expressed in the same unit as `y` (here, MPG), which makes it easier to interpret.\n\n" +
                "## Fixing the model: gradient descent\n\n" +
                "A model does not guess its weights at random. It starts from initial values (often `w1 = 0` and `b = 0`), computes its loss, then adjusts its parameters step by step to bring it down. This method is called **gradient descent**.\n\n" +
                "At every iteration, the model looks at which direction reduces the loss fastest, and moves `w1` and `b` a small step in that direction. The step size is set by a parameter called the **learning rate**.\n\n" +
                "Here is a training example, with a learning rate of 0.01, on the weight-and-MPG data from the previous lesson:\n\n" +
                "| Iteration | w1 | b | Loss |\n" +
                "|---|---|---|---|\n" +
                "| 1 | 0.00 | 0.00 | 303.71 |\n" +
                "| 2 | 1.20 | 0.34 | 170.84 |\n" +
                "| 3 | 2.05 | 0.59 | 103.17 |\n" +
                "| 4 | 2.66 | 0.78 | 68.70 |\n" +
                "| 5 | 3.09 | 0.91 | 51.13 |\n" +
                "| 6 | 3.40 | 1.01 | 42.17 |\n\n" +
                "The loss drops iteration after iteration: 303.71, then 170.84, then 103.17... This table only shows the first 6 iterations: the model keeps going for many more steps not shown here, until it converges to a minimum. On this data, the full training run ends near a weight of `w1 = -5.44` and a bias of `b = 35.94`, for a minimum loss of about `5.54`.\n\n" +
                "Note: `w1` first climbs toward positive values before moving down toward negative ones over the following iterations, which this partial table does not fully show. That is normal: gradient descent does not always move in a straight line toward the final solution.\n\n" +
                "## Try it yourself\n\n" +
                "A car has an actual fuel efficiency of 18 MPG. The model predicts 20 MPG. Compute the L1 loss and the L2 loss for this example.\n\n" +
                "> Answer: L1 = |18 - 20| = 2. L2 = (18 - 20)^2 = 4.\n\n" +
                "> Keep in mind: loss measures a model's error, and gradient descent adjusts its parameters step by step to bring it down, until it reaches a minimum.",
            },
            ar: {
              title: "قياس الخطأ وتصحيحه: دالة الخسارة والانحدار التدريجي (gradient descent)",
              body:
                "## كيف نعرف أن الخط جيد\n\n" +
                "يحتاج النموذج إلى وسيلة لقياس مدى خطأ تنبؤاته، حتى يتمكن لاحقا من تحسينها. يسمى هذا المقياس **الخسارة (loss)**. كلما انخفضت الخسارة، اقترب النموذج أكثر من البيانات الحقيقية.\n\n" +
                "طريقتان شائعتان لقياس الفارق بين تنبؤ `y'` وقيمة حقيقية `y`:\n\n" +
                "- **خسارة L1 (أو MAE، متوسط الخطأ المطلق)**: `|y - y'|`، القيمة المطلقة للفارق.\n" +
                "- **خسارة L2 (أو MSE، متوسط مربع الخطأ)**: `(y - y')^2`، الفارق مرفوعا للمربع.\n\n" +
                "تعاقب خسارة L2 الأخطاء الكبيرة بشدة أكبر، لأنها تُرفع للمربع. سيارة وزنها 2370 رطلا، استهلاكها الفعلي 24 MPG والمتوقَّع 23.1 MPG، تعطي:\n\n" +
                "```\nL2 = (24 - 23.1)^2 = 0.9^2 = 0.81\n```\n\n" +
                "على مجموعة بيانات كاملة، نحسب متوسط هذه الخسارة عبر جميع الأمثلة: هذا هو **MSE**، وجذره التربيعي يعطي **RMSE**، المعبَّر عنه بنفس وحدة `y` (هنا، MPG)، ما يجعله أسهل في التفسير.\n\n" +
                "## تصحيح النموذج: الانحدار التدريجي (gradient descent)\n\n" +
                "لا يخمّن النموذج أوزانه عشوائيا. بل ينطلق من قيم أولية (غالبا `w1 = 0` و`b = 0`)، يحسب خسارته، ثم يعدّل معاييره خطوة بخطوة لتخفيضها. تسمى هذه الطريقة **الانحدار التدريجي (gradient descent)**.\n\n" +
                "في كل تكرار (iteration)، ينظر النموذج إلى الاتجاه الذي يخفّض الخسارة بأسرع شكل، ويحرّك `w1` و`b` خطوة صغيرة في ذلك الاتجاه. حجم الخطوة يحدده معيار يسمى **معدل التعلم (learning rate)**.\n\n" +
                "إليك مثالا على التدريب، بمعدل تعلم قدره 0.01، على بيانات الوزن والاستهلاك من الدرس السابق:\n\n" +
                "| التكرار | w1 | b | الخسارة |\n" +
                "|---|---|---|---|\n" +
                "| 1 | 0.00 | 0.00 | 303.71 |\n" +
                "| 2 | 1.20 | 0.34 | 170.84 |\n" +
                "| 3 | 2.05 | 0.59 | 103.17 |\n" +
                "| 4 | 2.66 | 0.78 | 68.70 |\n" +
                "| 5 | 3.09 | 0.91 | 51.13 |\n" +
                "| 6 | 3.40 | 1.01 | 42.17 |\n\n" +
                "نلاحظ انخفاض الخسارة تكرارا بعد تكرار: 303.71، ثم 170.84، ثم 103.17... يعرض هذا الجدول فقط التكرارات الست الأولى: يواصل النموذج بعدها خطوات كثيرة أخرى غير معروضة هنا، حتى يتقارب نحو حد أدنى. على هذه البيانات، ينتهي التدريب الكامل بوزن قريب من `w1 = -5.44` وانحياز قريب من `b = 35.94`، بخسارة دنيا تبلغ نحو `5.54`.\n\n" +
                "ملاحظة: يرتفع `w1` أولا نحو قيم موجبة قبل أن ينخفض نحو قيم سالبة خلال التكرارات اللاحقة، وهو ما لا يُظهره هذا الجدول الجزئي بالكامل. هذا أمر طبيعي: لا يسير الانحدار التدريجي دائما في خط مستقيم نحو الحل النهائي.\n\n" +
                "## جرّب بنفسك\n\n" +
                "استهلاك سيارة الفعلي 18 MPG. يتنبأ النموذج بـ20 MPG. احسب خسارة L1 وخسارة L2 لهذا المثال.\n\n" +
                "> التصحيح: L1 = |18 - 20| = 2. L2 = (18 - 20)^2 = 4.\n\n" +
                "> للتذكر: تقيس الخسارة خطأ النموذج، ويعدّل الانحدار التدريجي المعايير خطوة بخطوة لتخفيضها، حتى يبلغ حدا أدنى.",
            },
          },
        },
      ],
    },
    {
      id: "p2",
      title: "Classification : de la régression logistique aux métriques",
      lessons: [
        {
          id: "l4",
          title: "De la régression à la classification : la régression logistique",
          type: "text",
          duration: "10 min",
          body:
            "## Prédire une catégorie, pas un nombre\n\n" +
            "La régression linéaire prédit un nombre (une consommation en MPG). Beaucoup de problèmes demandent autre chose : prédire une catégorie. Ce courriel est-il un spam, oui ou non ? Cette transaction est-elle frauduleuse, oui ou non ? C'est un problème de **classification**.\n\n" +
            "Une première idée serait de réutiliser directement une droite de régression et de dire : si `y'` dépasse un certain seuil, c'est \"oui\", sinon \"non\". Le problème, c'est qu'une droite peut sortir de l'intervalle utile : elle peut prédire -3 ou 128, alors qu'une probabilité doit rester entre 0 et 1.\n\n" +
            "## La fonction sigmoïde\n\n" +
            "La **régression logistique** résout ce problème en faisant passer le résultat de la régression linéaire à travers une fonction, la **sigmoïde**, qui écrase n'importe quel nombre dans l'intervalle [0, 1] :\n\n" +
            "```\np = 1 / (1 + e^-(b + w1 * x1))\n```\n\n" +
            "Le résultat `p` s'interprète comme une probabilité : la probabilité que l'exemple appartienne à la catégorie \"positive\" (par exemple, \"c'est un spam\"). Quand `b + w1 * x1` est très négatif, `p` s'approche de 0. Quand il est très positif, `p` s'approche de 1. Quand il vaut 0, `p` vaut exactement 0,5.\n\n" +
            "## Une perte adaptée : la perte logarithmique\n\n" +
            "Pour entraîner un modèle de classification, on n'utilise plus la perte L2 de la régression linéaire, mais une perte adaptée aux probabilités : la **perte logarithmique** (log loss). Elle pénalise très fortement une prédiction confiante et fausse : prédire une probabilité de 0,99 pour un exemple qui est en réalité négatif coûte beaucoup plus cher qu'une prédiction proche de 0,5.\n\n" +
            "Comme pour la régression linéaire, l'entraînement ajuste `w1` et `b` par descente de gradient pour faire baisser cette perte sur l'ensemble des exemples.\n\n" +
            "## Régularisation : éviter un modèle trop sûr de lui\n\n" +
            "Un piège classique de la régression logistique est un modèle qui devient trop confiant : sur des données d'entraînement parfaitement séparables, il peut pousser ses probabilités vers 0 ou 1 pour chaque exemple, au prix d'une mauvaise généralisation sur de nouvelles données. Pour éviter cela, on ajoute souvent un terme de **régularisation**, qui pénalise les poids trop grands et garde le modèle plus prudent.\n\n" +
            "## À toi\n\n" +
            "Un modèle logistique calcule `b + w1 * x1 = 0` pour un exemple donné. Que vaut la probabilité `p` prédite par la sigmoïde pour cet exemple ?\n\n" +
            "> Correction : quand l'entrée de la sigmoïde vaut 0, `p = 1 / (1 + e^0) = 1 / (1 + 1) = 0.5`. Le modèle est exactement à l'équilibre entre les deux catégories.\n\n" +
            "> À retenir : la régression logistique transforme une régression linéaire en probabilité entre 0 et 1 grâce à la sigmoïde, puis s'entraîne avec une perte logarithmique plutôt qu'une perte L2.",
          i18n: {
            en: {
              title: "From regression to classification: logistic regression",
              body:
                "## Predicting a category, not a number\n\n" +
                "Linear regression predicts a number (fuel efficiency in MPG). Many problems ask for something else: predicting a category. Is this email spam, yes or no? Is this transaction fraudulent, yes or no? That is a **classification** problem.\n\n" +
                "A first idea would be to reuse a regression line directly and say: if `y'` passes a certain threshold, it is \"yes\", otherwise \"no\". The problem is that a line can go outside the useful range: it can predict -3 or 128, while a probability must stay between 0 and 1.\n\n" +
                "## The sigmoid function\n\n" +
                "**Logistic regression** solves this by passing the output of a linear regression through a function, the **sigmoid**, which squeezes any number into the [0, 1] range:\n\n" +
                "```\np = 1 / (1 + e^-(b + w1 * x1))\n```\n\n" +
                "The result `p` is read as a probability: the probability that the example belongs to the \"positive\" category (for example, \"this is spam\"). When `b + w1 * x1` is very negative, `p` approaches 0. When it is very positive, `p` approaches 1. When it equals 0, `p` equals exactly 0.5.\n\n" +
                "## A matching loss: log loss\n\n" +
                "To train a classification model, you no longer use the L2 loss from linear regression, but a loss suited to probabilities: **log loss**. It punishes a confident, wrong prediction very heavily: predicting a probability of 0.99 for an example that is actually negative costs far more than a prediction close to 0.5.\n\n" +
                "As with linear regression, training adjusts `w1` and `b` through gradient descent to bring this loss down across all examples.\n\n" +
                "## Regularization: avoiding an overconfident model\n\n" +
                "A classic pitfall of logistic regression is a model that becomes overconfident: on training data that is perfectly separable, it can push its probabilities toward 0 or 1 for every example, at the cost of poor generalization to new data. To prevent this, a **regularization** term is often added, which penalizes overly large weights and keeps the model more cautious.\n\n" +
                "## Try it yourself\n\n" +
                "A logistic model computes `b + w1 * x1 = 0` for a given example. What probability `p` does the sigmoid predict for this example?\n\n" +
                "> Answer: when the sigmoid's input is 0, `p = 1 / (1 + e^0) = 1 / (1 + 1) = 0.5`. The model is exactly balanced between the two categories.\n\n" +
                "> Keep in mind: logistic regression turns a linear regression into a probability between 0 and 1 through the sigmoid, then trains with log loss instead of L2 loss.",
            },
            ar: {
              title: "من الانحدار إلى التصنيف: الانحدار اللوجستي (logistic regression)",
              body:
                "## التنبؤ بفئة، لا برقم\n\n" +
                "يتنبأ الانحدار الخطي برقم (استهلاك بوحدة MPG). لكن مسائل كثيرة تتطلب شيئا آخر: التنبؤ بفئة (category). هل هذه الرسالة الإلكترونية بريد مزعج (spam) أم لا؟ هل هذه المعاملة احتيالية أم لا؟ هذه مسألة **تصنيف (classification)**.\n\n" +
                "قد تكون الفكرة الأولى إعادة استخدام خط انحدار مباشرة والقول: إذا تجاوزت `y'` عتبة معينة فالجواب \"نعم\"، وإلا فـ\"لا\". المشكلة أن الخط يمكن أن يخرج عن النطاق المفيد: قد يتنبأ بـ-3 أو 128، بينما يجب أن يبقى الاحتمال بين 0 و1.\n\n" +
                "## دالة السيجمويد (sigmoid)\n\n" +
                "يحل **الانحدار اللوجستي (logistic regression)** هذه المشكلة بتمرير ناتج الانحدار الخطي عبر دالة تسمى **السيجمويد (sigmoid)**، تضغط أي رقم ليقع بين 0 و1:\n\n" +
                "```\np = 1 / (1 + e^-(b + w1 * x1))\n```\n\n" +
                "تُقرأ النتيجة `p` كاحتمال: احتمال أن ينتمي المثال إلى الفئة \"الإيجابية\" (مثلا \"هذا بريد مزعج\"). عندما تكون `b + w1 * x1` سالبة جدا، تقترب `p` من 0. وعندما تكون موجبة جدا، تقترب `p` من 1. وعندما تساوي 0، تساوي `p` بالضبط 0.5.\n\n" +
                "## دالة خسارة ملائمة: الخسارة اللوغاريتمية (log loss)\n\n" +
                "لتدريب نموذج تصنيف، لا نستخدم خسارة L2 كما في الانحدار الخطي، بل خسارة ملائمة للاحتمالات تسمى **الخسارة اللوغاريتمية (log loss)**. تعاقب هذه الخسارة بشدة أي تنبؤ واثق وخاطئ: التنبؤ باحتمال 0.99 لمثال سالب في الحقيقة يكلّف أكثر بكثير من تنبؤ قريب من 0.5.\n\n" +
                "كما في الانحدار الخطي، يعدّل التدريب `w1` و`b` عبر الانحدار التدريجي (gradient descent) لتخفيض هذه الخسارة عبر جميع الأمثلة.\n\n" +
                "## التسوية (regularization): تجنب نموذج مفرط الثقة\n\n" +
                "من الأخطاء الشائعة في الانحدار اللوجستي أن يصبح النموذج مفرط الثقة: على بيانات تدريب قابلة للفصل التام، قد يدفع احتمالاته نحو 0 أو 1 لكل مثال، على حساب تعميم ضعيف على بيانات جديدة. لتفادي ذلك، غالبا ما يُضاف حد **تسوية (regularization)**، يعاقب الأوزان الكبيرة جدا ويبقي النموذج أكثر حذرا.\n\n" +
                "## جرّب بنفسك\n\n" +
                "يحسب نموذج لوجستي `b + w1 * x1 = 0` لمثال معين. ما الاحتمال `p` الذي تتنبأ به السيجمويد لهذا المثال؟\n\n" +
                "> التصحيح: عندما يكون مدخل السيجمويد صفرا، `p = 1 / (1 + e^0) = 1 / (1 + 1) = 0.5`. النموذج في حالة توازن تام بين الفئتين.\n\n" +
                "> للتذكر: يحوّل الانحدار اللوجستي ناتج الانحدار الخطي إلى احتمال بين 0 و1 عبر السيجمويد، ثم يتدرب باستخدام الخسارة اللوغاريتمية بدل خسارة L2.",
            },
          },
        },
        {
          id: "l5",
          title: "Seuil de décision et matrice de confusion",
          type: "text",
          duration: "9 min",
          body:
            "## D'une probabilité à une décision\n\n" +
            "Un modèle de classification renvoie une probabilité, par exemple `p = 0.73`. Mais à un moment, il faut trancher : ce courriel est-il un spam, oui ou non ? On fixe pour cela un **seuil de décision** (threshold), souvent 0,5 par défaut : si `p` dépasse le seuil, on classe l'exemple en positif, sinon en négatif.\n\n" +
            "Ce seuil n'a rien d'obligatoire. On peut le monter ou le descendre selon ce qu'on veut privilégier. Pour un filtre anti-spam, relever le seuil (exiger une probabilité plus haute avant de marquer \"spam\") réduit le risque de classer un e-mail important comme spam par erreur, mais laisse passer davantage de vrais spams.\n\n" +
            "## Les quatre cases de la matrice de confusion\n\n" +
            "Une fois le seuil appliqué sur un ensemble d'exemples dont on connaît la vraie catégorie, chaque prédiction tombe dans une des quatre cases suivantes :\n\n" +
            "- **Vrai positif (VP)** : le modèle prédit positif, et c'est vraiment positif.\n" +
            "- **Vrai négatif (VN)** : le modèle prédit négatif, et c'est vraiment négatif.\n" +
            "- **Faux positif (FP)** : le modèle prédit positif, mais c'est en réalité négatif (fausse alerte).\n" +
            "- **Faux négatif (FN)** : le modèle prédit négatif, mais c'est en réalité positif (cas manqué).\n\n" +
            "Ce tableau à quatre cases s'appelle la **matrice de confusion**. C'est la base de toutes les métriques de classification qu'on va calculer dans les deux prochaines leçons.\n\n" +
            "## Un exemple concret\n\n" +
            "Imagine un filtre anti-spam testé sur 16 e-mails dont on connaît déjà la vraie nature (spam ou non). Résultat :\n\n" +
            "| | Prédit spam | Prédit non-spam |\n" +
            "|---|---|---|\n" +
            "| **Réellement spam** | VP = 5 | FN = 2 |\n" +
            "| **Réellement non-spam** | FP = 3 | VN = 6 |\n\n" +
            "5 spams ont été correctement détectés (VP), 2 spams sont passés au travers (FN), 3 e-mails normaux ont été marqués spam à tort (FP), et 6 e-mails normaux ont été correctement laissés tranquilles (VN). On garde ce tableau : les leçons suivantes s'appuient dessus.\n\n" +
            "## À toi\n\n" +
            "Dans le tableau ci-dessus, combien d'e-mails au total ont été mal classés par le modèle (FP + FN) ?\n\n" +
            "> Correction : FP + FN = 3 + 2 = 5 e-mails mal classés sur 16.\n\n" +
            "> À retenir : le seuil de décision transforme une probabilité en verdict, et la matrice de confusion (VP, VN, FP, FN) résume la qualité de ce verdict sur un ensemble d'exemples.",
          i18n: {
            en: {
              title: "Decision threshold and confusion matrix",
              body:
                "## From a probability to a decision\n\n" +
                "A classification model returns a probability, for example `p = 0.73`. But at some point, a call has to be made: is this email spam, yes or no? For this, you set a **decision threshold**, often 0.5 by default: if `p` passes the threshold, the example is classified as positive, otherwise negative.\n\n" +
                "This threshold is not fixed by law. You can raise or lower it depending on what you want to prioritize. For a spam filter, raising the threshold (requiring a higher probability before marking \"spam\") reduces the risk of wrongly flagging an important email as spam, but lets more real spam through.\n\n" +
                "## The four cells of the confusion matrix\n\n" +
                "Once the threshold is applied to a set of examples whose true category is known, each prediction falls into one of four cells:\n\n" +
                "- **True positive (TP)**: the model predicts positive, and it really is positive.\n" +
                "- **True negative (TN)**: the model predicts negative, and it really is negative.\n" +
                "- **False positive (FP)**: the model predicts positive, but it is actually negative (a false alarm).\n" +
                "- **False negative (FN)**: the model predicts negative, but it is actually positive (a missed case).\n\n" +
                "This four-cell table is called the **confusion matrix**. It is the basis of every classification metric you will compute in the next two lessons.\n\n" +
                "## A concrete example\n\n" +
                "Imagine a spam filter tested on 16 emails whose true nature (spam or not) is already known. Result:\n\n" +
                "| | Predicted spam | Predicted not spam |\n" +
                "|---|---|---|\n" +
                "| **Actually spam** | TP = 5 | FN = 2 |\n" +
                "| **Actually not spam** | FP = 3 | TN = 6 |\n\n" +
                "5 spam emails were correctly caught (TP), 2 spam emails slipped through (FN), 3 normal emails were wrongly flagged as spam (FP), and 6 normal emails were correctly left alone (TN). Keep this table: the next lessons build on it.\n\n" +
                "## Try it yourself\n\n" +
                "In the table above, how many emails in total were misclassified by the model (FP + FN)?\n\n" +
                "> Answer: FP + FN = 3 + 2 = 5 misclassified emails out of 16.\n\n" +
                "> Keep in mind: the decision threshold turns a probability into a verdict, and the confusion matrix (TP, TN, FP, FN) summarizes the quality of that verdict across a set of examples.",
            },
            ar: {
              title: "عتبة القرار (threshold) ومصفوفة الالتباس (confusion matrix)",
              body:
                "## من احتمال إلى قرار\n\n" +
                "يعيد نموذج التصنيف احتمالا، مثلا `p = 0.73`. لكن يجب في لحظة ما الحسم: هل هذه الرسالة بريد مزعج (spam) أم لا؟ لذلك نحدد **عتبة قرار (decision threshold)**، غالبا 0.5 افتراضيا: إذا تجاوزت `p` العتبة، يُصنَّف المثال إيجابيا، وإلا فسلبيا.\n\n" +
                "هذه العتبة ليست ثابتة إلزاميا. يمكن رفعها أو خفضها حسب ما نريد إعطاءه الأولوية. بالنسبة لمرشّح بريد مزعج، رفع العتبة (اشتراط احتمال أعلى قبل وسم \"spam\") يقلّل خطر تصنيف رسالة مهمة خطأً كبريد مزعج، لكنه يترك مزيدا من الرسائل المزعجة الحقيقية تمر.\n\n" +
                "## الخانات الأربع لمصفوفة الالتباس\n\n" +
                "بعد تطبيق العتبة على مجموعة أمثلة معروفة الفئة الحقيقية مسبقا، يقع كل تنبؤ في إحدى الخانات الأربع التالية:\n\n" +
                "- **إيجابي حقيقي (TP)**: يتنبأ النموذج بالإيجاب، وهو فعلا إيجابي.\n" +
                "- **سلبي حقيقي (TN)**: يتنبأ النموذج بالسلب، وهو فعلا سلبي.\n" +
                "- **إيجابي زائف (FP)**: يتنبأ النموذج بالإيجاب، لكنه في الحقيقة سلبي (إنذار كاذب).\n" +
                "- **سلبي زائف (FN)**: يتنبأ النموذج بالسلب، لكنه في الحقيقة إيجابي (حالة فائتة).\n\n" +
                "يسمى هذا الجدول ذو الخانات الأربع **مصفوفة الالتباس (confusion matrix)**. وهي أساس كل مقاييس التصنيف التي سنحسبها في الدرسين التاليين.\n\n" +
                "## مثال ملموس\n\n" +
                "تخيل مرشّح بريد مزعج اختُبر على 16 رسالة معروفة الطبيعة الحقيقية (مزعجة أم لا) مسبقا. النتيجة:\n\n" +
                "| | تنبؤ: مزعجة | تنبؤ: غير مزعجة |\n" +
                "|---|---|---|\n" +
                "| **فعليا مزعجة** | TP = 5 | FN = 2 |\n" +
                "| **فعليا غير مزعجة** | FP = 3 | TN = 6 |\n\n" +
                "تم رصد 5 رسائل مزعجة بشكل صحيح (TP)، وأفلتت رسالتان مزعجتان (FN)، ووُسمت 3 رسائل عادية خطأً كمزعجة (FP)، وتُركت 6 رسائل عادية بشكل صحيح (TN). احتفظ بهذا الجدول: تبني عليه الدروس التالية.\n\n" +
                "## جرّب بنفسك\n\n" +
                "في الجدول أعلاه، كم رسالة إجمالا صُنِّفت خطأً من طرف النموذج (FP + FN)؟\n\n" +
                "> التصحيح: FP + FN = 3 + 2 = 5 رسائل مصنَّفة خطأً من أصل 16.\n\n" +
                "> للتذكر: تحوّل عتبة القرار احتمالا إلى حكم، وتلخّص مصفوفة الالتباس (TP، TN، FP، FN) جودة هذا الحكم عبر مجموعة أمثلة.",
            },
          },
        },
        {
          id: "l6",
          title: "Précision, rappel et F1-score",
          type: "text",
          duration: "10 min",
          body:
            "## Pourquoi l'exactitude ne suffit pas\n\n" +
            "La métrique la plus intuitive est l'**exactitude** (accuracy) : la proportion de prédictions correctes.\n\n" +
            "```\nExactitude = (VP + VN) / (VP + VN + FP + FN)\n```\n\n" +
            "Reprenons la matrice de confusion de la leçon précédente : VP = 5, FN = 2, FP = 3, VN = 6, pour un total de 16 e-mails.\n\n" +
            "```\nExactitude = (5 + 6) / 16 = 11 / 16 = 0.688, soit 68.8 %\n```\n\n" +
            "Le problème de l'exactitude apparaît sur des données déséquilibrées. Si seulement 2 % des e-mails sont des spams, un modèle qui prédit toujours \"non-spam\" obtient déjà 98 % d'exactitude, sans jamais détecter un seul spam. Il faut des métriques plus précises.\n\n" +
            "## Rappel : sur tous les vrais positifs, combien sont trouvés\n\n" +
            "Le **rappel** (recall) répond à la question : parmi tous les exemples réellement positifs, combien le modèle en a-t-il trouvé ?\n\n" +
            "```\nRappel = VP / (VP + FN)\n```\n\n" +
            "```\nRappel = 5 / (5 + 2) = 5 / 7 ≈ 0.714, soit 71.4 %\n```\n\n" +
            "Le modèle détecte environ 71,4 % des spams réels.\n\n" +
            "## Précision : sur tout ce que le modèle a signalé, combien est correct\n\n" +
            "La **précision** répond à une autre question : parmi tout ce que le modèle a classé positif, combien l'est vraiment ?\n\n" +
            "```\nPrécision = VP / (VP + FP)\n```\n\n" +
            "```\nPrécision = 5 / (5 + 3) = 5 / 8 = 0.625, soit 62.5 %\n```\n\n" +
            "Sur tous les e-mails marqués \"spam\" par le modèle, 62,5 % le sont vraiment ; les 37,5 % restants sont des faux positifs, des e-mails normaux marqués à tort.\n\n" +
            "## F1-score : un compromis entre les deux\n\n" +
            "Précision et rappel évoluent souvent en sens inverse : améliorer l'un dégrade souvent l'autre. Le **F1-score** combine les deux dans un seul nombre :\n\n" +
            "```\nF1 = 2 * VP / (2 * VP + FP + FN)\n```\n\n" +
            "```\nF1 = (2 * 5) / (2 * 5 + 3 + 2) = 10 / 15 ≈ 0.667, soit 66.7 %\n```\n\n" +
            "## À toi\n\n" +
            "En reprenant toujours VP = 5, FN = 2, FP = 3, VN = 6, calcule le taux de faux positifs (FPR), défini par `FPR = FP / (FP + VN)`.\n\n" +
            "> Correction : FPR = 3 / (3 + 6) = 3 / 9 ≈ 0.333, soit 33.3 %.\n\n" +
            "> À retenir : rappel et précision répondent à deux questions différentes (trouve-t-on tout ? ce qu'on trouve est-il correct ?), et le F1-score résume les deux en un seul chiffre.",
          i18n: {
            en: {
              title: "Precision, recall and F1 score",
              body:
                "## Why accuracy is not enough\n\n" +
                "The most intuitive metric is **accuracy**: the proportion of correct predictions.\n\n" +
                "```\nAccuracy = (TP + TN) / (TP + TN + FP + FN)\n```\n\n" +
                "Take the confusion matrix from the previous lesson: TP = 5, FN = 2, FP = 3, TN = 6, out of 16 emails total.\n\n" +
                "```\nAccuracy = (5 + 6) / 16 = 11 / 16 = 0.688, i.e. 68.8%\n```\n\n" +
                "The problem with accuracy shows up on imbalanced data. If only 2% of emails are spam, a model that always predicts \"not spam\" already scores 98% accuracy, while never catching a single spam email. More precise metrics are needed.\n\n" +
                "## Recall: out of all true positives, how many were found\n\n" +
                "**Recall** answers the question: out of all examples that are actually positive, how many did the model find?\n\n" +
                "```\nRecall = TP / (TP + FN)\n```\n\n" +
                "```\nRecall = 5 / (5 + 2) = 5 / 7 ≈ 0.714, i.e. 71.4%\n```\n\n" +
                "The model catches about 71.4% of actual spam emails.\n\n" +
                "## Precision: out of everything the model flagged, how much is correct\n\n" +
                "**Precision** answers a different question: out of everything the model classified as positive, how much really is?\n\n" +
                "```\nPrecision = TP / (TP + FP)\n```\n\n" +
                "```\nPrecision = 5 / (5 + 3) = 5 / 8 = 0.625, i.e. 62.5%\n```\n\n" +
                "Out of every email the model marked \"spam\", 62.5% really are; the remaining 37.5% are false positives, normal emails wrongly flagged.\n\n" +
                "## F1 score: a trade-off between the two\n\n" +
                "Precision and recall often move in opposite directions: improving one often hurts the other. The **F1 score** combines both into a single number:\n\n" +
                "```\nF1 = 2 * TP / (2 * TP + FP + FN)\n```\n\n" +
                "```\nF1 = (2 * 5) / (2 * 5 + 3 + 2) = 10 / 15 ≈ 0.667, i.e. 66.7%\n```\n\n" +
                "## Try it yourself\n\n" +
                "Still using TP = 5, FN = 2, FP = 3, TN = 6, compute the false positive rate (FPR), defined as `FPR = FP / (FP + TN)`.\n\n" +
                "> Answer: FPR = 3 / (3 + 6) = 3 / 9 ≈ 0.333, i.e. 33.3%.\n\n" +
                "> Keep in mind: recall and precision answer two different questions (do we find everything? is what we find correct?), and the F1 score summarizes both in a single figure.",
            },
            ar: {
              title: "الدقة (precision) والاستدعاء (recall) ومقياس F1",
              body:
                "## لماذا لا تكفي الدقة الإجمالية (accuracy)\n\n" +
                "أكثر المقاييس بداهة هو **الدقة الإجمالية (accuracy)**: نسبة التنبؤات الصحيحة.\n\n" +
                "```\nAccuracy = (TP + TN) / (TP + TN + FP + FN)\n```\n\n" +
                "لنأخذ مصفوفة الالتباس من الدرس السابق: TP = 5، FN = 2، FP = 3، TN = 6، من أصل 16 رسالة.\n\n" +
                "```\nAccuracy = (5 + 6) / 16 = 11 / 16 = 0.688، أي 68.8%\n```\n\n" +
                "تظهر مشكلة الدقة الإجمالية على البيانات غير المتوازنة. إذا كانت 2% فقط من الرسائل مزعجة، فنموذج يتنبأ دائما بـ\"غير مزعجة\" يحصل بالفعل على 98% دقة إجمالية، دون أن يرصد رسالة مزعجة واحدة. لذلك نحتاج مقاييس أدق.\n\n" +
                "## الاستدعاء (recall): من كل الإيجابيات الحقيقية، كم وُجد منها\n\n" +
                "يجيب **الاستدعاء (recall)** عن السؤال: من بين كل الأمثلة الإيجابية فعليا، كم منها وجده النموذج؟\n\n" +
                "```\nRecall = TP / (TP + FN)\n```\n\n" +
                "```\nRecall = 5 / (5 + 2) = 5 / 7 ≈ 0.714، أي 71.4%\n```\n\n" +
                "يرصد النموذج نحو 71.4% من الرسائل المزعجة الحقيقية.\n\n" +
                "## الدقة (precision): من كل ما أشار إليه النموذج، كم كان صحيحا\n\n" +
                "تجيب **الدقة (precision)** عن سؤال مختلف: من بين كل ما صنّفه النموذج إيجابيا، كم منه إيجابي فعلا؟\n\n" +
                "```\nPrecision = TP / (TP + FP)\n```\n\n" +
                "```\nPrecision = 5 / (5 + 3) = 5 / 8 = 0.625، أي 62.5%\n```\n\n" +
                "من بين كل رسالة وسمها النموذج \"مزعجة\"، 62.5% منها مزعجة فعلا؛ والنسبة المتبقية 37.5% إيجابيات زائفة، رسائل عادية وُسمت خطأً.\n\n" +
                "## مقياس F1: توازن بين الاثنين\n\n" +
                "غالبا ما تتحرك الدقة والاستدعاء في اتجاهين متعاكسين: تحسين أحدهما يضرّ غالبا بالآخر. يجمع **مقياس F1** بينهما في رقم واحد:\n\n" +
                "```\nF1 = 2 * TP / (2 * TP + FP + FN)\n```\n\n" +
                "```\nF1 = (2 * 5) / (2 * 5 + 3 + 2) = 10 / 15 ≈ 0.667، أي 66.7%\n```\n\n" +
                "## جرّب بنفسك\n\n" +
                "باستخدام نفس القيم TP = 5، FN = 2، FP = 3، TN = 6، احسب معدل الإيجابيات الزائفة (FPR)، المعرَّف بـ `FPR = FP / (FP + TN)`.\n\n" +
                "> التصحيح: FPR = 3 / (3 + 6) = 3 / 9 ≈ 0.333، أي 33.3%.\n\n" +
                "> للتذكر: يجيب الاستدعاء والدقة عن سؤالين مختلفين (هل نجد كل شيء؟ هل ما نجده صحيح؟)، ويلخّص مقياس F1 الاثنين في رقم واحد.",
            },
          },
        },
        {
          id: "l7",
          title: "Courbe ROC et AUC",
          type: "text",
          duration: "9 min",
          body:
            "## Et si on regardait tous les seuils à la fois ?\n\n" +
            "Les métriques de la leçon précédente dépendent toutes d'un seuil de décision fixé à l'avance. Mais on peut aussi se demander : comment le modèle se comporte-t-il à tous les seuils possibles, pas seulement à un seul ?\n\n" +
            "C'est ce que montre la **courbe ROC** (Receiver Operating Characteristic). Pour chaque seuil possible, de 0 à 1, on calcule deux valeurs :\n\n" +
            "- le taux de vrais positifs, c'est-à-dire le rappel : `VP / (VP + FN)`\n" +
            "- le taux de faux positifs : `FP / (FP + VN)`\n\n" +
            "On place ces deux valeurs sur un graphique (taux de faux positifs en abscisse, taux de vrais positifs en ordonnée) pour chaque seuil, ce qui dessine une courbe. Un modèle parfait longe le coin en haut à gauche du graphique : un taux de vrais positifs de 1 pour un taux de faux positifs de 0.\n\n" +
            "## L'AUC : l'aire sous la courbe\n\n" +
            "L'**AUC** (Area Under the Curve) mesure l'aire sous cette courbe ROC, un nombre entre 0 et 1.\n\n" +
            "L'AUC a une interprétation utile, indépendante du choix d'un seuil : c'est la probabilité que le modèle classe un exemple positif pris au hasard au-dessus d'un exemple négatif pris au hasard, en termes de probabilité prédite.\n\n" +
            "- Une AUC de 1,0 correspond à un modèle parfait, qui sépare toujours les positifs des négatifs.\n" +
            "- Une AUC de 0,5 correspond à un modèle qui ne fait pas mieux qu'un tirage au sort.\n" +
            "- Une AUC en dessous de 0,5 signale un modèle qui se trompe systématiquement de sens, ce qui est rare mais possible.\n\n" +
            "## Choisir un point sur la courbe selon ce qu'on veut privilégier\n\n" +
            "Imagine trois seuils possibles pour un filtre anti-spam, représentés par trois points A, B, C sur la courbe ROC :\n\n" +
            "- Le point **A** correspond à un seuil élevé : très peu de faux positifs (presque aucun e-mail normal marqué spam à tort), mais aussi moins de spams détectés.\n" +
            "- Le point **C** correspond à un seuil bas : presque tous les spams sont détectés (taux de vrais positifs élevé), au prix de plus de faux positifs.\n" +
            "- Le point **B** se situe entre les deux, un compromis raisonnable entre détection et fausses alertes.\n\n" +
            "L'AUC résume la qualité globale du modèle sur tous les seuils, mais le choix du seuil final reste une décision métier : pour un filtre anti-spam, on accepte rarement de perdre un e-mail important, donc on choisit souvent un point proche de A plutôt que de C.\n\n" +
            "## À toi\n\n" +
            "Un modèle a une AUC de 0,5 sur un jeu de test. Que peux-tu en conclure sur sa capacité à distinguer les deux catégories ?\n\n" +
            "> Correction : une AUC de 0,5 signifie que le modèle ne fait pas mieux qu'un choix aléatoire pour distinguer les deux catégories, quel que soit le seuil choisi.\n\n" +
            "> À retenir : la courbe ROC montre le compromis vrais positifs / faux positifs à tous les seuils, et l'AUC résume ce compromis en un seul nombre, indépendant du seuil choisi.",
          i18n: {
            en: {
              title: "ROC curve and AUC",
              body:
                "## What if we looked at every threshold at once?\n\n" +
                "The metrics from the previous lesson all depend on a decision threshold fixed in advance. But you can also ask: how does the model behave across every possible threshold, not just one?\n\n" +
                "That is what the **ROC curve** (Receiver Operating Characteristic) shows. For every possible threshold, from 0 to 1, two values are computed:\n\n" +
                "- the true positive rate, which is recall: `TP / (TP + FN)`\n" +
                "- the false positive rate: `FP / (FP + TN)`\n\n" +
                "These two values are plotted on a chart (false positive rate on the x-axis, true positive rate on the y-axis) for every threshold, drawing a curve. A perfect model hugs the top-left corner of the chart: a true positive rate of 1 at a false positive rate of 0.\n\n" +
                "## AUC: the area under the curve\n\n" +
                "**AUC** (Area Under the Curve) measures the area under this ROC curve, a number between 0 and 1.\n\n" +
                "AUC has a useful interpretation, independent of any threshold choice: it is the probability that the model ranks a randomly chosen positive example above a randomly chosen negative example, in terms of predicted probability.\n\n" +
                "- An AUC of 1.0 corresponds to a perfect model, always separating positives from negatives.\n" +
                "- An AUC of 0.5 corresponds to a model that does no better than a coin flip.\n" +
                "- An AUC below 0.5 signals a model that systematically gets the direction wrong, which is rare but possible.\n\n" +
                "## Choosing a point on the curve based on what you want to prioritize\n\n" +
                "Imagine three possible thresholds for a spam filter, represented by three points A, B, C on the ROC curve:\n\n" +
                "- Point **A** corresponds to a high threshold: very few false positives (almost no normal email wrongly flagged as spam), but also fewer spam emails caught.\n" +
                "- Point **C** corresponds to a low threshold: almost every spam email is caught (high true positive rate), at the cost of more false positives.\n" +
                "- Point **B** sits between the two, a reasonable trade-off between catching spam and raising false alarms.\n\n" +
                "AUC summarizes the model's overall quality across every threshold, but choosing the final threshold remains a business decision: for a spam filter, losing an important email is rarely acceptable, so a point close to A is often chosen over C.\n\n" +
                "## Try it yourself\n\n" +
                "A model has an AUC of 0.5 on a test set. What can you conclude about its ability to tell the two categories apart?\n\n" +
                "> Answer: an AUC of 0.5 means the model does no better than a random choice at distinguishing the two categories, whatever threshold is chosen.\n\n" +
                "> Keep in mind: the ROC curve shows the true positive / false positive trade-off at every threshold, and AUC summarizes that trade-off into a single number, independent of the chosen threshold.",
            },
            ar: {
              title: "منحنى ROC ومساحة AUC",
              body:
                "## ماذا لو نظرنا إلى كل العتبات في آن واحد؟\n\n" +
                "تعتمد مقاييس الدرس السابق كلها على عتبة قرار محددة مسبقا. لكن يمكننا أيضا أن نتساءل: كيف يتصرف النموذج عبر كل العتبات الممكنة، لا عتبة واحدة فقط؟\n\n" +
                "هذا ما يُظهره **منحنى ROC** (Receiver Operating Characteristic). لكل عتبة ممكنة، من 0 إلى 1، تُحسب قيمتان:\n\n" +
                "- معدل الإيجابيات الحقيقية، وهو الاستدعاء: `TP / (TP + FN)`\n" +
                "- معدل الإيجابيات الزائفة: `FP / (FP + TN)`\n\n" +
                "توضع هاتان القيمتان على رسم بياني (معدل الإيجابيات الزائفة على المحور الأفقي، ومعدل الإيجابيات الحقيقية على المحور الرأسي) لكل عتبة، فيرسم ذلك منحنى. النموذج المثالي يلامس الزاوية العلوية اليسرى من الرسم: معدل إيجابيات حقيقية يساوي 1 عند معدل إيجابيات زائفة يساوي 0.\n\n" +
                "## AUC: المساحة تحت المنحنى\n\n" +
                "تقيس **AUC** (Area Under the Curve) المساحة تحت منحنى ROC هذا، وهي رقم بين 0 و1.\n\n" +
                "لـ AUC تفسير مفيد، مستقل عن اختيار أي عتبة: هي احتمال أن يرتّب النموذج مثالا إيجابيا عشوائيا فوق مثال سلبي عشوائي، من حيث الاحتمال المتنبَّأ به.\n\n" +
                "- AUC تساوي 1.0 تقابل نموذجا مثاليا، يفصل دائما الإيجابيات عن السلبيات.\n" +
                "- AUC تساوي 0.5 تقابل نموذجا لا يفعل أفضل من رمي عملة.\n" +
                "- AUC أقل من 0.5 تشير إلى نموذج يخطئ الاتجاه بشكل منهجي، وهو أمر نادر لكن ممكن.\n\n" +
                "## اختيار نقطة على المنحنى حسب الأولوية\n\n" +
                "تخيل ثلاث عتبات ممكنة لمرشّح بريد مزعج، ممثَّلة بثلاث نقاط A وB وC على منحنى ROC:\n\n" +
                "- النقطة **A** تقابل عتبة عالية: إيجابيات زائفة قليلة جدا (لا تكاد توجد رسالة عادية وُسمت خطأً كمزعجة)، لكن أيضا رسائل مزعجة أقل يتم رصدها.\n" +
                "- النقطة **C** تقابل عتبة منخفضة: تُرصد كل الرسائل المزعجة تقريبا (معدل إيجابيات حقيقية مرتفع)، على حساب إيجابيات زائفة أكثر.\n" +
                "- النقطة **B** تقع بين الاثنتين، توازن معقول بين رصد الرسائل المزعجة وإطلاق إنذارات كاذبة.\n\n" +
                "تلخّص AUC الجودة الإجمالية للنموذج عبر كل العتبات، لكن اختيار العتبة النهائية يبقى قرارا يتعلق بالسياق: بالنسبة لمرشّح بريد مزعج، نادرا ما يُقبل فقدان رسالة مهمة، لذلك غالبا ما تُختار نقطة قريبة من A بدل C.\n\n" +
                "## جرّب بنفسك\n\n" +
                "نموذج له AUC تساوي 0.5 على مجموعة اختبار. ماذا يمكنك أن تستنتج بخصوص قدرته على التمييز بين الفئتين؟\n\n" +
                "> التصحيح: AUC تساوي 0.5 تعني أن النموذج لا يفعل أفضل من اختيار عشوائي في التمييز بين الفئتين، أيا كانت العتبة المختارة.\n\n" +
                "> للتذكر: يُظهر منحنى ROC التوازن بين الإيجابيات الحقيقية والزائفة عند كل عتبة، وتلخّص AUC هذا التوازن في رقم واحد، مستقل عن العتبة المختارة.",
            },
          },
        },
        {
          id: "l8",
          title: "Quiz : classification",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q1",
              prompt: "À quoi sert la fonction sigmoïde dans une régression logistique ?",
              options: [
                "Elle transforme le résultat d'une régression linéaire en une probabilité comprise entre 0 et 1",
                "Elle calcule directement la matrice de confusion",
                "Elle remplace le taux d'apprentissage pendant la descente de gradient",
                "Elle sert uniquement à afficher un graphique",
              ],
              correctIndex: 0,
              explanation:
                "La sigmoïde écrase n'importe quel nombre réel dans l'intervalle [0, 1], ce qui permet d'interpréter le résultat comme une probabilité.",
            },
            {
              id: "q2",
              prompt:
                "Sur 16 e-mails, un modèle obtient VP = 5, FN = 2, FP = 3, VN = 6. Quel est le rappel (recall) de ce modèle ?",
              options: ["5/7 ≈ 71,4 %", "5/8 = 62,5 %", "11/16 ≈ 68,8 %", "3/9 ≈ 33,3 %"],
              correctIndex: 0,
              explanation: "Rappel = VP / (VP + FN) = 5 / (5 + 2) = 5/7 ≈ 71,4 %.",
            },
            {
              id: "q3",
              prompt:
                "Un modèle marque \"spam\" 8 e-mails, dont 5 le sont vraiment. Quelle est sa précision ?",
              options: ["62,5 %", "71,4 %", "50 %", "100 %"],
              correctIndex: 0,
              explanation: "Précision = VP / (VP + FP) = 5 / 8 = 62,5 %.",
            },
            {
              id: "q4",
              prompt: "Que représente une AUC de 0,5 ?",
              options: [
                "Un modèle qui ne fait pas mieux qu'un tirage au sort pour distinguer les deux catégories",
                "Un modèle parfait",
                "Un modèle qui inverse systématiquement ses prédictions",
                "Un seuil de décision fixé à 0,5",
              ],
              correctIndex: 0,
              explanation:
                "Une AUC de 0,5 correspond à la diagonale de la courbe ROC : le modèle classe un exemple positif au-dessus d'un exemple négatif une fois sur deux, comme un tirage au sort.",
            },
          ],
          i18n: {
            en: {
              title: "Quiz: classification",
              questions: [
                {
                  prompt: "What does the sigmoid function do in logistic regression?",
                  options: [
                    "It turns the output of a linear regression into a probability between 0 and 1",
                    "It directly computes the confusion matrix",
                    "It replaces the learning rate during gradient descent",
                    "It is only used to draw a chart",
                  ],
                  explanation:
                    "The sigmoid squeezes any real number into the [0, 1] range, which lets the output be read as a probability.",
                },
                {
                  prompt:
                    "Across 16 emails, a model gets TP = 5, FN = 2, FP = 3, TN = 6. What is this model's recall?",
                  options: ["5/7 ≈ 71.4%", "5/8 = 62.5%", "11/16 ≈ 68.8%", "3/9 ≈ 33.3%"],
                  explanation: "Recall = TP / (TP + FN) = 5 / (5 + 2) = 5/7 ≈ 71.4%.",
                },
                {
                  prompt:
                    "A model flags 8 emails as \"spam\", 5 of which really are. What is its precision?",
                  options: ["62.5%", "71.4%", "50%", "100%"],
                  explanation: "Precision = TP / (TP + FP) = 5 / 8 = 62.5%.",
                },
                {
                  prompt: "What does an AUC of 0.5 represent?",
                  options: [
                    "A model that does no better than a coin flip at telling the two categories apart",
                    "A perfect model",
                    "A model that systematically inverts its predictions",
                    "A decision threshold fixed at 0.5",
                  ],
                  explanation:
                    "An AUC of 0.5 matches the diagonal of the ROC curve: the model ranks a positive example above a negative one only half the time, like a coin flip.",
                },
              ],
            },
            ar: {
              title: "اختبار: التصنيف",
              questions: [
                {
                  prompt: "ما وظيفة دالة السيجمويد (sigmoid) في الانحدار اللوجستي؟",
                  options: [
                    "تحوّل ناتج الانحدار الخطي إلى احتمال بين 0 و1",
                    "تحسب مصفوفة الالتباس مباشرة",
                    "تستبدل معدل التعلم أثناء الانحدار التدريجي",
                    "تُستخدم فقط لرسم بياني",
                  ],
                  explanation:
                    "تضغط السيجمويد أي رقم حقيقي ليقع بين 0 و1، ما يتيح قراءة الناتج كاحتمال.",
                },
                {
                  prompt:
                    "عبر 16 رسالة، يحصل نموذج على TP = 5، FN = 2، FP = 3، TN = 6. ما استدعاء (recall) هذا النموذج؟",
                  options: ["5/7 ≈ 71.4%", "5/8 = 62.5%", "11/16 ≈ 68.8%", "3/9 ≈ 33.3%"],
                  explanation: "Recall = TP / (TP + FN) = 5 / (5 + 2) = 5/7 ≈ 71.4%.",
                },
                {
                  prompt: "يسم نموذج 8 رسائل بـ\"مزعجة\"، منها 5 مزعجة فعلا. ما دقته (precision)؟",
                  options: ["62.5%", "71.4%", "50%", "100%"],
                  explanation: "Precision = TP / (TP + FP) = 5 / 8 = 62.5%.",
                },
                {
                  prompt: "ماذا تمثّل AUC تساوي 0.5؟",
                  options: [
                    "نموذج لا يفعل أفضل من رمي عملة في التمييز بين الفئتين",
                    "نموذج مثالي",
                    "نموذج يعكس تنبؤاته بشكل منهجي",
                    "عتبة قرار محددة عند 0.5",
                  ],
                  explanation:
                    "تقابل AUC تساوي 0.5 قطر منحنى ROC: يرتّب النموذج مثالا إيجابيا فوق مثال سلبي في مرة من كل مرتين فقط، كرمي عملة.",
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: "p3",
      title: "Données et généralisation",
      lessons: [
        {
          id: "l9",
          title: "Données numériques et catégorielles",
          type: "text",
          duration: "10 min",
          body:
            "## Deux grandes familles de données\n\n" +
            "Avant d'entraîner un modèle, il faut regarder de près les données qu'on lui donne. On distingue deux grandes familles de caractéristiques (features) : les données **numériques** et les données **catégorielles**.\n\n" +
            "## Données numériques : des grandeurs qu'on peut comparer\n\n" +
            "Une donnée numérique est une grandeur sur laquelle les opérations arithmétiques ont un sens réel. La température, un poids, un nombre de cerfs observés dans une forêt sont des données numériques : dire qu'il fait \"deux fois plus chaud\" ou qu'une voiture pèse \"1000 kg de plus\" a un sens concret.\n\n" +
            "Attention cependant : tout ce qui ressemble à un nombre n'est pas forcément une donnée numérique au sens utile. Un code postal est écrit avec des chiffres, mais \"75001\" n'est pas la moitié de \"150002\" ; additionner deux codes postaux ne veut rien dire. Un code postal doit être traité comme une donnée catégorielle, pas numérique.\n\n" +
            "## Données catégorielles : des étiquettes, pas des quantités\n\n" +
            "Une donnée catégorielle regroupe des exemples dans un ensemble fini d'étiquettes, sans relation d'ordre ou de grandeur entre elles : l'espèce d'un animal, la couleur d'une voiture, le pays d'un client. Une couleur n'est pas \"plus grande\" qu'une autre.\n\n" +
            "Un piège fréquent : regrouper des nombres en tranches (par exemple, des âges regroupés en \"18-25\", \"26-40\", \"41-60\") transforme une donnée numérique en donnée catégorielle. C'est parfois utile, mais on perd l'information fine à l'intérieur de chaque tranche.\n\n" +
            "## Comment un modèle traite les données catégorielles\n\n" +
            "Un modèle de machine learning manipule des nombres, pas des mots. Pour lui donner une donnée catégorielle comme \"couleur : rouge, vert ou bleu\", une technique courante est l'**encodage one-hot** : chaque catégorie devient une colonne binaire (0 ou 1). Pour la couleur \"vert\", la colonne \"rouge\" vaut 0, la colonne \"vert\" vaut 1, la colonne \"bleu\" vaut 0.\n\n" +
            "## Un exemple pour trancher entre les deux\n\n" +
            "La surface d'une maison, par exemple 100 m² contre 200 m², est une vraie donnée numérique : une maison de 200 m² a réellement deux fois plus de surface habitable qu'une maison de 100 m², et un modèle peut légitimement apprendre une relation proportionnelle entre la surface et le prix.\n\n" +
            "## À toi\n\n" +
            "Un identifiant client est un nombre à 6 chiffres, unique pour chaque personne. Est-ce une donnée numérique ou catégorielle ?\n\n" +
            "> Correction : c'est une donnée catégorielle. Bien qu'écrit avec des chiffres, un identifiant client ne porte aucune relation de grandeur : le client n°100002 n'est pas \"deux fois\" le client n°50001.\n\n" +
            "> À retenir : une donnée numérique porte une vraie grandeur comparable, une donnée catégorielle regroupe des étiquettes sans ordre ; l'encodage one-hot permet de donner une donnée catégorielle à un modèle qui ne manipule que des nombres.",
          i18n: {
            en: {
              title: "Numerical and categorical data",
              body:
                "## Two broad families of data\n\n" +
                "Before training a model, you need to look closely at the data you feed it. There are two broad families of features: **numerical** data and **categorical** data.\n\n" +
                "## Numerical data: quantities that can be compared\n\n" +
                "A numerical feature is a quantity on which arithmetic operations have real meaning. Temperature, weight, or a count of deer observed in a forest are numerical data: saying it is \"twice as hot\" or that a car weighs \"1000 kg more\" has a concrete meaning.\n\n" +
                "Be careful though: anything that looks like a number is not necessarily numerical in a useful sense. A postal code is written with digits, but \"75001\" is not half of \"150002\"; adding two postal codes means nothing. A postal code should be treated as categorical data, not numerical.\n\n" +
                "## Categorical data: labels, not quantities\n\n" +
                "A categorical feature groups examples into a finite set of labels, with no order or magnitude relationship between them: an animal's species, a car's color, a customer's country. One color is not \"bigger\" than another.\n\n" +
                "A common trap: grouping numbers into bins (for example, ages grouped into \"18-25\", \"26-40\", \"41-60\") turns numerical data into categorical data. This is sometimes useful, but it loses the fine-grained information within each bin.\n\n" +
                "## How a model handles categorical data\n\n" +
                "A machine learning model works with numbers, not words. To feed it a categorical feature like \"color: red, green, or blue\", a common technique is **one-hot encoding**: each category becomes a binary column (0 or 1). For the color \"green\", the \"red\" column is 0, the \"green\" column is 1, the \"blue\" column is 0.\n\n" +
                "## An example to settle the distinction\n\n" +
                "A house's floor area, say 100 sqm versus 200 sqm, is genuinely numerical data: a 200 sqm house really does have twice the living space of a 100 sqm house, and a model can legitimately learn a proportional relationship between area and price.\n\n" +
                "## Try it yourself\n\n" +
                "A customer ID is a 6-digit number, unique to each person. Is this numerical or categorical data?\n\n" +
                "> Answer: it is categorical data. Even though it is written with digits, a customer ID carries no magnitude relationship: customer #100002 is not \"twice\" customer #50001.\n\n" +
                "> Keep in mind: numerical data carries a real, comparable quantity; categorical data groups labels with no order; one-hot encoding lets a model that only handles numbers work with categorical data.",
            },
            ar: {
              title: "البيانات العددية والفئوية (categorical)",
              body:
                "## عائلتان كبيرتان من البيانات\n\n" +
                "قبل تدريب نموذج، يجب فحص البيانات المُعطاة له عن كثب. نميّز عائلتين كبيرتين من الخصائص (features): البيانات **العددية (numerical)** والبيانات **الفئوية (categorical)**.\n\n" +
                "## البيانات العددية: مقادير يمكن مقارنتها\n\n" +
                "الخاصية العددية مقدار تحمل فيه العمليات الحسابية معنى حقيقيا. درجة الحرارة، أو الوزن، أو عدد الأيائل المرصودة في غابة، كلها بيانات عددية: القول إن الجو \"أشد حرارة بمرتين\" أو إن سيارة تزن \"1000 كلغ أكثر\" له معنى ملموس.\n\n" +
                "لكن احذر: كل ما يشبه رقما ليس بالضرورة عدديا بمعنى مفيد. الرمز البريدي يُكتب بأرقام، لكن \"75001\" ليس نصف \"150002\"؛ جمع رمزين بريديين لا معنى له. يجب معاملة الرمز البريدي كبيانات فئوية، لا عددية.\n\n" +
                "## البيانات الفئوية: تسميات لا كميات\n\n" +
                "تجمّع الخاصية الفئوية الأمثلة في مجموعة محدودة من التسميات، دون علاقة ترتيب أو مقدار بينها: نوع حيوان، لون سيارة، بلد عميل. لون ليس \"أكبر\" من آخر.\n\n" +
                "فخ شائع: تجميع الأرقام في شرائح (مثلا، أعمار مجمّعة في \"18-25\"، \"26-40\"، \"41-60\") يحوّل بيانات عددية إلى فئوية. هذا مفيد أحيانا، لكنه يفقد المعلومة الدقيقة داخل كل شريحة.\n\n" +
                "## كيف يتعامل النموذج مع البيانات الفئوية\n\n" +
                "يتعامل نموذج تعلم الآلة مع أرقام لا كلمات. لإعطائه خاصية فئوية مثل \"اللون: أحمر أو أخضر أو أزرق\"، تقنية شائعة هي **الترميز الأحادي الساخن (one-hot encoding)**: تصبح كل فئة عمودا ثنائيا (0 أو 1). بالنسبة للون \"أخضر\"، يساوي عمود \"أحمر\" 0، وعمود \"أخضر\" 1، وعمود \"أزرق\" 0.\n\n" +
                "## مثال يحسم التمييز\n\n" +
                "مساحة منزل، لتكن 100 م² مقابل 200 م²، بيانات عددية حقيقية: منزل بمساحة 200 م² يملك فعلا ضعف المساحة المعيشية لمنزل بـ100 م²، ويمكن لنموذج أن يتعلم بشكل مشروع علاقة تناسبية بين المساحة والسعر.\n\n" +
                "## جرّب بنفسك\n\n" +
                "معرّف عميل هو رقم من 6 خانات، فريد لكل شخص. هل هذه بيانات عددية أم فئوية؟\n\n" +
                "> التصحيح: إنها بيانات فئوية. رغم كتابتها بأرقام، لا يحمل معرّف العميل أي علاقة مقدار: العميل رقم 100002 ليس \"ضعف\" العميل رقم 50001.\n\n" +
                "> للتذكر: تحمل البيانات العددية مقدارا حقيقيا قابلا للمقارنة، وتجمّع البيانات الفئوية تسميات دون ترتيب؛ يتيح الترميز الأحادي الساخن لنموذج لا يتعامل إلا مع الأرقام العمل مع بيانات فئوية.",
            },
          },
        },
        {
          id: "l10",
          title: "Généralisation et surapprentissage",
          type: "text",
          duration: "11 min",
          body:
            "## Le travail invisible derrière un modèle\n\n" +
            "Un fait surprend souvent les débutants : dans un projet de machine learning réel, l'entraînement du modèle lui-même ne représente qu'une petite partie du travail. Collecter, nettoyer, vérifier et préparer les données peut représenter jusqu'à 80 % du temps d'un projet. Un modèle entraîné sur des données mal préparées ne vaut rien, aussi sophistiqué soit-il.\n\n" +
            "## Diviser les données en trois ensembles\n\n" +
            "Pour savoir si un modèle fonctionne vraiment, on ne peut pas se contenter de mesurer sa perte sur les données qui ont servi à l'entraîner : il pourrait simplement les avoir mémorisées. On divise donc les données disponibles en trois ensembles distincts :\n\n" +
            "- l'**ensemble d'entraînement**, sur lequel le modèle ajuste ses poids ;\n" +
            "- l'**ensemble de validation**, utilisé pendant le développement pour comparer des variantes de modèle et régler les hyperparamètres, sans jamais servir à l'entraînement direct ;\n" +
            "- l'**ensemble de test**, gardé de côté et utilisé une seule fois à la fin, pour estimer honnêtement la performance sur des données jamais vues.\n\n" +
            "## Le surapprentissage : bien retenir la leçon, mais par cœur\n\n" +
            "Le **surapprentissage** (overfitting) survient quand un modèle colle trop près à ses données d'entraînement, au point de capturer leur bruit et leurs particularités plutôt que la tendance générale. Un modèle en surapprentissage affiche une perte très faible sur l'entraînement, mais une perte nettement plus élevée sur la validation ou le test : c'est le signal typique.\n\n" +
            "On observe cela concrètement sur une courbe de perte : la perte d'entraînement continue de baisser à mesure que l'entraînement avance, tandis que la perte de validation baisse d'abord, puis remonte. Ce point où la validation recommence à monter marque le début du surapprentissage.\n\n" +
            "## Deux remèdes courants\n\n" +
            "La **régularisation** ajoute une pénalité sur la complexité du modèle, souvent en pénalisant des poids trop grands (régularisation L2, contrôlée par un coefficient souvent noté lambda). Plus lambda est élevé, plus le modèle est poussé vers la simplicité, au risque, si lambda est trop grand, de sous-apprendre.\n\n" +
            "L'**arrêt précoce** (early stopping) consiste simplement à arrêter l'entraînement au moment où la perte de validation cesse de s'améliorer, avant qu'elle ne remonte.\n\n" +
            "## À toi\n\n" +
            "Un modèle affiche une perte d'entraînement de 0,02 et une perte de validation de 0,85. Que peux-tu en conclure ?\n\n" +
            "> Correction : l'écart important entre une perte d'entraînement très basse et une perte de validation beaucoup plus haute est le signal classique d'un surapprentissage : le modèle a mémorisé les données d'entraînement plutôt qu'appris une tendance générale.\n\n" +
            "> À retenir : on divise les données en entraînement, validation et test pour détecter honnêtement le surapprentissage, et la régularisation ou l'arrêt précoce permettent de le limiter.",
          i18n: {
            en: {
              title: "Generalization and overfitting",
              body:
                "## The invisible work behind a model\n\n" +
                "One fact often surprises beginners: in a real machine learning project, training the model itself is only a small part of the work. Collecting, cleaning, checking, and preparing data can take up to 80% of a project's time. A model trained on poorly prepared data is worthless, no matter how sophisticated it is.\n\n" +
                "## Splitting data into three sets\n\n" +
                "To know whether a model really works, you cannot just measure its loss on the data used to train it: it could simply have memorized it. Available data is therefore split into three distinct sets:\n\n" +
                "- the **training set**, on which the model adjusts its weights;\n" +
                "- the **validation set**, used during development to compare model variants and tune hyperparameters, without ever being used for direct training;\n" +
                "- the **test set**, held aside and used only once at the end, to honestly estimate performance on data never seen before.\n\n" +
                "## Overfitting: learning the lesson well, but by rote\n\n" +
                "**Overfitting** happens when a model sticks too closely to its training data, to the point of capturing its noise and quirks rather than the general trend. An overfit model shows very low loss on training, but noticeably higher loss on validation or test: that is the typical signal.\n\n" +
                "You can see this on a loss curve: training loss keeps dropping as training goes on, while validation loss first drops, then rises again. The point where validation starts rising again marks the onset of overfitting.\n\n" +
                "## Two common remedies\n\n" +
                "**Regularization** adds a penalty on model complexity, often by penalizing overly large weights (L2 regularization, controlled by a coefficient usually called lambda). The higher lambda is, the more the model is pushed toward simplicity, at the risk of underfitting if lambda is too high.\n\n" +
                "**Early stopping** simply stops training the moment validation loss stops improving, before it starts rising.\n\n" +
                "## Try it yourself\n\n" +
                "A model shows a training loss of 0.02 and a validation loss of 0.85. What can you conclude?\n\n" +
                "> Answer: the large gap between a very low training loss and a much higher validation loss is the classic sign of overfitting: the model memorized the training data rather than learning a general trend.\n\n" +
                "> Keep in mind: data is split into training, validation, and test to honestly detect overfitting, and regularization or early stopping help limit it.",
            },
            ar: {
              title: "التعميم (generalization) والإفراط في التعلم (overfitting)",
              body:
                "## العمل غير المرئي خلف النموذج\n\n" +
                "حقيقة كثيرا ما تفاجئ المبتدئين: في مشروع تعلم آلة حقيقي، لا يمثّل تدريب النموذج نفسه سوى جزء صغير من العمل. قد يستغرق جمع البيانات وتنظيفها والتحقق منها وإعدادها حتى 80% من وقت المشروع. النموذج المدرَّب على بيانات سيئة الإعداد عديم القيمة، مهما كان متطورا.\n\n" +
                "## تقسيم البيانات إلى ثلاث مجموعات\n\n" +
                "لمعرفة ما إذا كان النموذج يعمل فعلا، لا يمكن الاكتفاء بقياس خسارته على البيانات التي استُخدمت لتدريبه: فقد يكون قد حفظها ببساطة. لذلك تُقسَّم البيانات المتاحة إلى ثلاث مجموعات مميزة:\n\n" +
                "- **مجموعة التدريب (training set)**، يضبط عليها النموذج أوزانه؛\n" +
                "- **مجموعة التحقق (validation set)**، تُستخدم أثناء التطوير لمقارنة نسخ من النموذج وضبط المعاملات الفائقة، دون أن تُستخدم أبدا للتدريب المباشر؛\n" +
                "- **مجموعة الاختبار (test set)**، تُحفظ جانبا وتُستخدم مرة واحدة فقط في النهاية، لتقدير الأداء بأمانة على بيانات لم تُرَ من قبل.\n\n" +
                "## الإفراط في التعلم (overfitting): حفظ الدرس جيدا، لكن عن ظهر قلب\n\n" +
                "يحدث **الإفراط في التعلم (overfitting)** عندما يلتصق النموذج كثيرا ببيانات التدريب، إلى درجة التقاط ضجيجها وخصوصياتها بدل الاتجاه العام. يُظهر النموذج المفرط في التعلم خسارة منخفضة جدا على التدريب، لكن خسارة أعلى بوضوح على التحقق أو الاختبار: هذه هي الإشارة النموذجية.\n\n" +
                "يُلاحظ هذا عمليا على منحنى الخسارة: تستمر خسارة التدريب في الانخفاض مع تقدم التدريب، بينما تنخفض خسارة التحقق أولا ثم ترتفع من جديد. النقطة التي تبدأ عندها خسارة التحقق بالارتفاع من جديد تُمثّل بداية الإفراط في التعلم.\n\n" +
                "## علاجان شائعان\n\n" +
                "تضيف **التسوية (regularization)** عقوبة على تعقيد النموذج، غالبا بمعاقبة الأوزان الكبيرة جدا (تسوية L2، تُضبط بمعامل يُسمى غالبا لامبدا). كلما ارتفعت لامبدا، دُفع النموذج أكثر نحو البساطة، مع خطر نقص التعلم (underfitting) إذا كانت لامبدا كبيرة جدا.\n\n" +
                "يتمثّل **التوقف المبكر (early stopping)** ببساطة في إيقاف التدريب في اللحظة التي تتوقف فيها خسارة التحقق عن التحسّن، قبل أن تبدأ بالارتفاع.\n\n" +
                "## جرّب بنفسك\n\n" +
                "يُظهر نموذج خسارة تدريب تساوي 0.02 وخسارة تحقق تساوي 0.85. ماذا يمكنك أن تستنتج؟\n\n" +
                "> التصحيح: الفارق الكبير بين خسارة تدريب منخفضة جدا وخسارة تحقق أعلى بكثير هو العلامة الكلاسيكية للإفراط في التعلم: حفظ النموذج بيانات التدريب بدل تعلّم اتجاه عام.\n\n" +
                "> للتذكر: تُقسَّم البيانات إلى تدريب وتحقق واختبار لرصد الإفراط في التعلم بأمانة، وتساعد التسوية أو التوقف المبكر على الحد منه.",
            },
          },
        },
        {
          id: "l11",
          title: "Quiz : données et généralisation",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q5",
              prompt: "Un code postal écrit en chiffres doit-il être traité comme une donnée numérique ?",
              options: [
                "Non, car il n'existe pas de relation de grandeur entre deux codes postaux",
                "Oui, car il est écrit avec des chiffres",
                "Oui, mais seulement après une régression linéaire",
                "Cela dépend uniquement du pays",
              ],
              correctIndex: 0,
              explanation:
                "Un code postal est une étiquette, pas une quantité : additionner ou comparer deux codes postaux n'a pas de sens arithmétique. C'est une donnée catégorielle.",
            },
            {
              id: "q6",
              prompt: "À quoi sert l'ensemble de test dans un projet de machine learning ?",
              options: [
                "À estimer honnêtement la performance du modèle une seule fois, sur des données jamais vues",
                "À entraîner directement les poids du modèle",
                "À remplacer l'ensemble de validation pendant le développement",
                "À encoder les données catégorielles",
              ],
              correctIndex: 0,
              explanation:
                "L'ensemble de test est mis de côté et utilisé une seule fois, à la fin, pour ne pas biaiser l'estimation finale de la performance.",
            },
            {
              id: "q7",
              prompt:
                "Un modèle a une perte d'entraînement de 0,02 et une perte de validation de 0,85. Quel est le diagnostic le plus probable ?",
              options: [
                "Surapprentissage : le modèle a mémorisé les données d'entraînement",
                "Le modèle est parfaitement généralisé",
                "Les données d'entraînement sont trop nombreuses",
                "Le taux d'apprentissage est trop faible",
              ],
              correctIndex: 0,
              explanation:
                "Un grand écart entre une perte d'entraînement très basse et une perte de validation nettement plus haute est le signal classique du surapprentissage.",
            },
          ],
          i18n: {
            en: {
              title: "Quiz: data and generalization",
              questions: [
                {
                  prompt: "Should a postal code written in digits be treated as numerical data?",
                  options: [
                    "No, because there is no magnitude relationship between two postal codes",
                    "Yes, because it is written with digits",
                    "Yes, but only after a linear regression",
                    "It depends only on the country",
                  ],
                  explanation:
                    "A postal code is a label, not a quantity: adding or comparing two postal codes has no arithmetic meaning. It is categorical data.",
                },
                {
                  prompt: "What is the test set used for in a machine learning project?",
                  options: [
                    "To honestly estimate model performance once, on data never seen before",
                    "To directly train the model's weights",
                    "To replace the validation set during development",
                    "To encode categorical data",
                  ],
                  explanation:
                    "The test set is held aside and used only once, at the end, so it does not bias the final performance estimate.",
                },
                {
                  prompt:
                    "A model has a training loss of 0.02 and a validation loss of 0.85. What is the most likely diagnosis?",
                  options: [
                    "Overfitting: the model memorized the training data",
                    "The model is perfectly generalized",
                    "There is too much training data",
                    "The learning rate is too low",
                  ],
                  explanation:
                    "A large gap between a very low training loss and a much higher validation loss is the classic sign of overfitting.",
                },
              ],
            },
            ar: {
              title: "اختبار: البيانات والتعميم",
              questions: [
                {
                  prompt: "هل يجب معاملة رمز بريدي مكتوب بأرقام كبيانات عددية؟",
                  options: [
                    "لا، لأنه لا توجد علاقة مقدار بين رمزين بريديين",
                    "نعم، لأنه مكتوب بأرقام",
                    "نعم، لكن فقط بعد انحدار خطي",
                    "يعتمد فقط على البلد",
                  ],
                  explanation:
                    "الرمز البريدي تسمية لا كمية: جمع أو مقارنة رمزين بريديين لا معنى حسابيا له. إنه بيانات فئوية.",
                },
                {
                  prompt: "ما استخدام مجموعة الاختبار في مشروع تعلم آلة؟",
                  options: [
                    "لتقدير أداء النموذج بأمانة مرة واحدة، على بيانات لم تُرَ من قبل",
                    "لتدريب أوزان النموذج مباشرة",
                    "لتحل محل مجموعة التحقق أثناء التطوير",
                    "لترميز البيانات الفئوية",
                  ],
                  explanation:
                    "تُحفظ مجموعة الاختبار جانبا وتُستخدم مرة واحدة فقط، في النهاية، حتى لا تنحاز التقديرات النهائية للأداء.",
                },
                {
                  prompt:
                    "يُظهر نموذج خسارة تدريب تساوي 0.02 وخسارة تحقق تساوي 0.85. ما التشخيص الأرجح؟",
                  options: [
                    "إفراط في التعلم: حفظ النموذج بيانات التدريب",
                    "النموذج معمَّم بشكل مثالي",
                    "بيانات التدريب كثيرة جدا",
                    "معدل التعلم منخفض جدا",
                  ],
                  explanation:
                    "الفارق الكبير بين خسارة تدريب منخفضة جدا وخسارة تحقق أعلى بكثير هو العلامة الكلاسيكية للإفراط في التعلم.",
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: "p4",
      title: "Réseaux de neurones et embeddings",
      lessons: [
        {
          id: "l12",
          title: "Réseaux de neurones : au-delà du modèle linéaire",
          type: "text",
          duration: "11 min",
          body:
            "## Les limites d'une frontière droite\n\n" +
            "La régression logistique de la leçon 4 trace une frontière de décision qui reste, au fond, une ligne droite (ou un plan, en plusieurs dimensions). Beaucoup de problèmes réels ne se laissent pas séparer par une ligne droite : imagine des points positifs concentrés au centre d'un graphique, entourés d'un anneau de points négatifs. Aucune ligne droite ne peut isoler le centre de l'anneau.\n\n" +
            "## Une première astuce : croiser les caractéristiques\n\n" +
            "Une solution simple consiste à fabriquer une nouvelle caractéristique en croisant deux caractéristiques existantes, par exemple `x3 = x1 * x2`. Ce **croisement de caractéristiques** (feature cross) permet à un modèle linéaire de capturer des interactions non linéaires, sans changer sa structure de base. C'est utile, mais cela demande de deviner à l'avance quels croisements sont pertinents.\n\n" +
            "## Les réseaux de neurones : laisser le modèle apprendre ses propres croisements\n\n" +
            "Un **réseau de neurones** automatise cette idée. Il est composé de **couches** (layers) de **nœuds** (nodes), aussi appelés neurones artificiels. Chaque nœud reçoit les sorties de la couche précédente, calcule une somme pondérée (comme dans une régression linéaire), puis applique une **fonction d'activation** non linéaire à ce résultat, par exemple ReLU (qui remplace toute valeur négative par 0 et laisse passer les valeurs positives inchangées).\n\n" +
            "Cette fonction d'activation est essentielle : sans elle, empiler plusieurs couches reviendrait toujours, mathématiquement, à une seule grande régression linéaire. C'est la non-linéarité qui permet au réseau de représenter des frontières de décision courbes, comme celle de l'exemple du centre et de l'anneau.\n\n" +
            "## Couches cachées et entraînement\n\n" +
            "Les couches entre l'entrée et la sortie du réseau sont appelées **couches cachées** (hidden layers). Chaque nœud de chaque couche a ses propres poids, ajustés pendant l'entraînement par descente de gradient, exactement comme `w1` et `b` dans la régression linéaire, mais à beaucoup plus grande échelle : un petit réseau peut déjà compter des centaines de poids.\n\n" +
            "## À toi\n\n" +
            "Pourquoi un réseau de neurones sans aucune fonction d'activation non linéaire, même avec dix couches, se comporte-t-il comme un simple modèle linéaire ?\n\n" +
            "> Correction : sans non-linéarité, chaque couche ne fait qu'une combinaison linéaire de la précédente. Empiler des combinaisons linéaires reste une combinaison linéaire : dix couches sans activation équivalent mathématiquement à une seule couche linéaire.\n\n" +
            "> À retenir : un réseau de neurones empile des couches de nœuds pondérés, et ce sont les fonctions d'activation non linéaires qui lui permettent de représenter des frontières de décision plus complexes qu'une ligne droite.",
          i18n: {
            en: {
              title: "Neural networks: beyond the linear model",
              body:
                "## The limits of a straight boundary\n\n" +
                "Logistic regression from lesson 4 draws a decision boundary that remains, fundamentally, a straight line (or a plane, in higher dimensions). Many real problems cannot be separated by a straight line: imagine positive points clustered at the center of a chart, surrounded by a ring of negative points. No straight line can isolate the center from the ring.\n\n" +
                "## A first trick: crossing features\n\n" +
                "One simple solution is to build a new feature by crossing two existing features, for example `x3 = x1 * x2`. This **feature cross** lets a linear model capture nonlinear interactions without changing its basic structure. It is useful, but it requires guessing in advance which crosses matter.\n\n" +
                "## Neural networks: letting the model learn its own crosses\n\n" +
                "A **neural network** automates this idea. It is made of **layers** of **nodes**, also called artificial neurons. Each node receives the outputs of the previous layer, computes a weighted sum (as in linear regression), then applies a nonlinear **activation function** to that result, for example ReLU (which replaces any negative value with 0 and passes positive values through unchanged).\n\n" +
                "This activation function is essential: without it, stacking several layers would still, mathematically, amount to one large linear regression. It is the nonlinearity that lets the network represent curved decision boundaries, like the center-and-ring example.\n\n" +
                "## Hidden layers and training\n\n" +
                "The layers between the network's input and output are called **hidden layers**. Every node in every layer has its own weights, adjusted during training through gradient descent, exactly like `w1` and `b` in linear regression, but at a much larger scale: even a small network can already have hundreds of weights.\n\n" +
                "## Try it yourself\n\n" +
                "Why does a neural network with no nonlinear activation function at all, even with ten layers, behave like a simple linear model?\n\n" +
                "> Answer: without nonlinearity, each layer only performs a linear combination of the previous one. Stacking linear combinations stays a linear combination: ten layers without activation are mathematically equivalent to a single linear layer.\n\n" +
                "> Keep in mind: a neural network stacks layers of weighted nodes, and it is the nonlinear activation functions that let it represent decision boundaries more complex than a straight line.",
            },
            ar: {
              title: "الشبكات العصبية: ما وراء النموذج الخطي",
              body:
                "## حدود الحدّ الفاصل المستقيم\n\n" +
                "يرسم الانحدار اللوجستي من الدرس 4 حدا فاصلا للقرار يبقى، في الجوهر، خطا مستقيما (أو مستوى، في أبعاد أعلى). كثير من المسائل الحقيقية لا يمكن فصلها بخط مستقيم: تخيل نقاطا إيجابية متمركزة في وسط رسم بياني، محاطة بحلقة من نقاط سلبية. لا يمكن لأي خط مستقيم عزل المركز عن الحلقة.\n\n" +
                "## حيلة أولى: تقاطع الخصائص\n\n" +
                "حل بسيط هو بناء خاصية جديدة بتقاطع خاصيتين موجودتين، مثلا `x3 = x1 * x2`. يتيح **تقاطع الخصائص (feature cross)** لنموذج خطي التقاط تفاعلات غير خطية دون تغيير بنيته الأساسية. هذا مفيد، لكنه يتطلب تخمين التقاطعات المهمة مسبقا.\n\n" +
                "## الشبكات العصبية: ترك النموذج يتعلم تقاطعاته الخاصة\n\n" +
                "تُؤتمت **الشبكة العصبية (neural network)** هذه الفكرة. تتكون من **طبقات (layers)** من **عُقد (nodes)**، تُسمى أيضا خلايا عصبية اصطناعية. تستقبل كل عقدة مخرجات الطبقة السابقة، وتحسب مجموعا مرجّحا (كما في الانحدار الخطي)، ثم تطبّق **دالة تفعيل (activation function)** غير خطية على تلك النتيجة، مثل ReLU (التي تستبدل أي قيمة سالبة بـ0 وتمرر القيم الموجبة دون تغيير).\n\n" +
                "دالة التفعيل هذه أساسية: بدونها، سيظل تكديس عدة طبقات، رياضيا، معادلا لانحدار خطي واحد كبير. اللاخطية هي ما يتيح للشبكة تمثيل حدود قرار منحنية، كمثال المركز والحلقة.\n\n" +
                "## الطبقات الخفية والتدريب\n\n" +
                "تُسمى الطبقات بين مدخل الشبكة ومخرجها **طبقات خفية (hidden layers)**. لكل عقدة في كل طبقة أوزانها الخاصة، تُضبط أثناء التدريب عبر الانحدار التدريجي، تماما كـ`w1` و`b` في الانحدار الخطي، لكن على نطاق أوسع بكثير: يمكن لشبكة صغيرة أن تضم فعلا مئات الأوزان.\n\n" +
                "## جرّب بنفسك\n\n" +
                "لماذا تتصرف شبكة عصبية بلا أي دالة تفعيل غير خطية، حتى بعشر طبقات، كنموذج خطي بسيط؟\n\n" +
                "> التصحيح: دون لاخطية، تقوم كل طبقة فقط بتركيبة خطية للطبقة السابقة. تكديس تركيبات خطية يبقى تركيبة خطية: عشر طبقات دون تفعيل تعادل رياضيا طبقة خطية واحدة.\n\n" +
                "> للتذكر: تكدّس الشبكة العصبية طبقات من عقد مرجّحة، ودوال التفعيل غير الخطية هي ما يتيح لها تمثيل حدود قرار أكثر تعقيدا من خط مستقيم.",
            },
          },
        },
        {
          id: "l13",
          title: "Les embeddings",
          type: "text",
          duration: "10 min",
          body:
            "## Un catalogue trop grand pour le one-hot\n\n" +
            "La leçon 9 a présenté l'encodage one-hot pour donner une donnée catégorielle à un modèle. Cette technique fonctionne bien pour une poignée de catégories, mais elle s'effondre à grande échelle.\n\n" +
            "Imagine une application de recommandation de plats qui propose 5 000 plats différents. Représenter chaque plat en one-hot demande un vecteur de 5 000 colonnes, presque toutes à 0, avec un seul 1. Un modèle qui doit apprendre une matrice de poids reliant 5 000 plats à une couche du réseau doit alors gérer des millions de poids, la plupart inutiles, et rien dans cette représentation ne dit que deux plats se ressemblent.\n\n" +
            "## L'idée de l'embedding\n\n" +
            "Un **embedding** remplace ce vecteur creux et gigantesque par un vecteur dense de quelques dizaines de nombres, appris pendant l'entraînement plutôt que fixé à l'avance. Chaque plat du catalogue est ainsi représenté par un point dans un espace à faible dimension, par exemple 32 nombres au lieu de 5 000.\n\n" +
            "L'intérêt n'est pas seulement de gagner de la place. Pendant l'entraînement, le modèle apprend à placer les plats qui se ressemblent (au sens de l'usage qu'on en fait, pas forcément de leur apparence) proches les uns des autres dans cet espace. Un hot-dog et un shawarma, deux plats servis dans un pain avec de la viande, peuvent finir proches dans l'espace d'embedding, même si rien dans les données ne dit explicitement \"ces deux plats se ressemblent\" : le modèle l'apprend indirectement, à partir des habitudes de commande des utilisateurs.\n\n" +
            "À l'inverse, une salade verte se retrouvera probablement loin du hot-dog et du shawarma dans cet espace, si les habitudes de commande des utilisateurs montrent que les personnes qui commandent l'un commandent rarement l'autre.\n\n" +
            "## Pourquoi c'est utile au-delà de la recommandation\n\n" +
            "Cette même idée, transformer une catégorie discrète en vecteur dense appris, est la brique de base de presque tous les grands modèles modernes, y compris les modèles de langue de la partie suivante : un mot ou un fragment de texte y est lui aussi représenté par un embedding.\n\n" +
            "## À toi\n\n" +
            "Pourquoi un vecteur one-hot de 5 000 colonnes ne dit-il rien sur la ressemblance entre deux plats, alors qu'un embedding de 32 nombres le peut ?\n\n" +
            "> Correction : dans un vecteur one-hot, chaque plat a un seul 1 sur une colonne qui lui est propre ; la distance entre deux plats quelconques est toujours la même, quelle que soit leur ressemblance réelle. Dans un embedding appris, la position de chaque plat reflète les régularités observées dans les données, donc deux plats similaires peuvent finir proches.\n\n" +
            "> À retenir : un embedding remplace une représentation creuse et gigantesque par un vecteur dense de taille réduite, appris pendant l'entraînement, qui capture la ressemblance entre catégories.",
          i18n: {
            en: {
              title: "Embeddings",
              body:
                "## A catalog too large for one-hot\n\n" +
                "Lesson 9 introduced one-hot encoding to feed a categorical feature to a model. This technique works well for a handful of categories, but it breaks down at scale.\n\n" +
                "Imagine a meal recommendation app offering 5,000 different dishes. Representing each dish with one-hot encoding requires a vector of 5,000 columns, almost all zeros, with a single 1. A model that must learn a weight matrix connecting 5,000 dishes to a layer of the network then has to handle millions of weights, most of them useless, and nothing in this representation says that two dishes are similar.\n\n" +
                "## The idea behind an embedding\n\n" +
                "An **embedding** replaces this huge, sparse vector with a dense vector of a few dozen numbers, learned during training rather than fixed in advance. Every dish in the catalog is thus represented as a point in a low-dimensional space, for example 32 numbers instead of 5,000.\n\n" +
                "The benefit is not just saving space. During training, the model learns to place dishes that are similar (in terms of how they are used, not necessarily how they look) close to each other in this space. A hot dog and a shawarma, both dishes served in bread with meat, may end up close together in the embedding space, even though nothing in the data explicitly says \"these two dishes are similar\": the model learns this indirectly, from users' ordering habits.\n\n" +
                "Conversely, a green salad will likely end up far from the hot dog and the shawarma in this space, if users' ordering habits show that people who order one rarely order the other.\n\n" +
                "## Why this matters beyond recommendation\n\n" +
                "This same idea, turning a discrete category into a learned dense vector, is a building block of almost every modern large model, including the language models covered in the next part: a word or piece of text is also represented there by an embedding.\n\n" +
                "## Try it yourself\n\n" +
                "Why does a one-hot vector with 5,000 columns say nothing about the similarity between two dishes, while a 32-number embedding can?\n\n" +
                "> Answer: in a one-hot vector, each dish has a single 1 in a column of its own; the distance between any two dishes is always the same, regardless of their actual similarity. In a learned embedding, each dish's position reflects patterns observed in the data, so two similar dishes can end up close together.\n\n" +
                "> Keep in mind: an embedding replaces a huge, sparse representation with a smaller dense vector, learned during training, that captures similarity between categories.",
            },
            ar: {
              title: "التضمينات (embeddings)",
              body:
                "## كتالوج أكبر من أن يناسب الترميز الأحادي الساخن\n\n" +
                "قدّم الدرس 9 الترميز الأحادي الساخن لإعطاء خاصية فئوية لنموذج. تعمل هذه التقنية جيدا مع حفنة من الفئات، لكنها تنهار على نطاق واسع.\n\n" +
                "تخيل تطبيق توصية بالوجبات يقترح 5000 طبق مختلف. تمثيل كل طبق بالترميز الأحادي الساخن يتطلب متجها من 5000 عمود، كلها تقريبا أصفار، مع 1 واحد فقط. النموذج الذي يجب أن يتعلم مصفوفة أوزان تربط 5000 طبق بطبقة من الشبكة يضطر عندئذ للتعامل مع ملايين الأوزان، معظمها عديم الفائدة، ولا شيء في هذا التمثيل يقول إن طبقين متشابهان.\n\n" +
                "## فكرة التضمين (embedding)\n\n" +
                "يستبدل **التضمين (embedding)** هذا المتجه الضخم والمتناثر بمتجه كثيف من بضع عشرات من الأرقام، يُتعلَّم أثناء التدريب بدل أن يُحدَّد مسبقا. يُمثَّل كل طبق في الكتالوج بنقطة في فضاء منخفض الأبعاد، مثلا 32 رقما بدل 5000.\n\n" +
                "الفائدة ليست فقط توفير المساحة. أثناء التدريب، يتعلم النموذج وضع الأطباق المتشابهة (من حيث طريقة استخدامها، وليس بالضرورة مظهرها) قريبة من بعضها في هذا الفضاء. قد ينتهي الهوت دوغ والشاورما، وهما طبقان يُقدَّمان في خبز مع لحم، قريبين من بعضهما في فضاء التضمين، حتى لو لم يقل شيء في البيانات صراحة \"هذان الطبقان متشابهان\": يتعلم النموذج ذلك بشكل غير مباشر، من عادات طلب المستخدمين.\n\n" +
                "بالمقابل، من المرجح أن تنتهي سلطة خضراء بعيدة عن الهوت دوغ والشاورما في هذا الفضاء، إذا أظهرت عادات طلب المستخدمين أن من يطلب أحدهما نادرا ما يطلب الآخر.\n\n" +
                "## لماذا هذا مفيد خارج نطاق التوصية\n\n" +
                "هذه الفكرة نفسها، تحويل فئة منفصلة إلى متجه كثيف متعلَّم، هي لبنة أساسية في كل النماذج الكبيرة الحديثة تقريبا، بما فيها نماذج اللغة التي يغطيها الجزء التالي: تُمثَّل الكلمة أو جزء من النص هناك أيضا بتضمين.\n\n" +
                "## جرّب بنفسك\n\n" +
                "لماذا لا يقول متجه أحادي الترميز من 5000 عمود شيئا عن التشابه بين طبقين، بينما يستطيع تضمين من 32 رقما ذلك؟\n\n" +
                "> التصحيح: في متجه أحادي الترميز، لكل طبق 1 واحد في عمود خاص به؛ المسافة بين أي طبقين متساوية دائما، بغض النظر عن تشابههما الحقيقي. في تضمين متعلَّم، يعكس موضع كل طبق الأنماط الملحوظة في البيانات، لذا يمكن أن ينتهي طبقان متشابهان قريبين من بعضهما.\n\n" +
                "> للتذكر: يستبدل التضمين تمثيلا ضخما ومتناثرا بمتجه كثيف أصغر، يُتعلَّم أثناء التدريب، ويلتقط التشابه بين الفئات.",
            },
          },
        },
        {
          id: "l14",
          title: "Quiz : réseaux de neurones et embeddings",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q8",
              prompt:
                "Pourquoi une fonction d'activation non linéaire est-elle nécessaire dans un réseau de neurones ?",
              options: [
                "Sans elle, empiler plusieurs couches équivaut mathématiquement à un seul modèle linéaire",
                "Elle sert uniquement à accélérer l'entraînement",
                "Elle remplace la descente de gradient",
                "Elle transforme les données catégorielles en données numériques",
              ],
              correctIndex: 0,
              explanation:
                "Sans non-linéarité, chaque couche ne fait qu'une combinaison linéaire de la précédente ; empiler des combinaisons linéaires reste une combinaison linéaire.",
            },
            {
              id: "q9",
              prompt: "Quel est le principal problème du one-hot encoding pour un catalogue de 5 000 éléments ?",
              options: [
                "Il produit des vecteurs immenses et creux qui ne capturent aucune ressemblance entre éléments",
                "Il ne fonctionne que sur des données numériques",
                "Il remplace automatiquement la régression logistique",
                "Il nécessite une fonction d'activation ReLU",
              ],
              correctIndex: 0,
              explanation:
                "Un vecteur one-hot sur 5 000 catégories est presque entièrement composé de zéros, et la distance entre deux catégories quelconques reste toujours la même.",
            },
            {
              id: "q10",
              prompt: "Que représente un embedding ?",
              options: [
                "Un vecteur dense de taille réduite, appris pendant l'entraînement, qui capture la ressemblance entre catégories",
                "Une couche cachée sans fonction d'activation",
                "Un synonyme de la matrice de confusion",
                "Un type de régularisation L2",
              ],
              correctIndex: 0,
              explanation:
                "Un embedding remplace une représentation creuse par un vecteur dense de quelques dizaines de nombres, dont la position reflète des régularités apprises dans les données.",
            },
          ],
          i18n: {
            en: {
              title: "Quiz: neural networks and embeddings",
              questions: [
                {
                  prompt: "Why is a nonlinear activation function necessary in a neural network?",
                  options: [
                    "Without it, stacking several layers is mathematically equivalent to a single linear model",
                    "It is only used to speed up training",
                    "It replaces gradient descent",
                    "It turns categorical data into numerical data",
                  ],
                  explanation:
                    "Without nonlinearity, each layer only performs a linear combination of the previous one; stacking linear combinations stays a linear combination.",
                },
                {
                  prompt: "What is the main problem with one-hot encoding for a 5,000-item catalog?",
                  options: [
                    "It produces huge, sparse vectors that capture no similarity between items",
                    "It only works on numerical data",
                    "It automatically replaces logistic regression",
                    "It requires a ReLU activation function",
                  ],
                  explanation:
                    "A one-hot vector over 5,000 categories is almost entirely zeros, and the distance between any two categories is always the same.",
                },
                {
                  prompt: "What does an embedding represent?",
                  options: [
                    "A smaller dense vector, learned during training, that captures similarity between categories",
                    "A hidden layer with no activation function",
                    "Another name for the confusion matrix",
                    "A type of L2 regularization",
                  ],
                  explanation:
                    "An embedding replaces a sparse representation with a dense vector of a few dozen numbers, whose position reflects patterns learned from the data.",
                },
              ],
            },
            ar: {
              title: "اختبار: الشبكات العصبية والتضمينات",
              questions: [
                {
                  prompt: "لماذا تُعد دالة التفعيل غير الخطية ضرورية في شبكة عصبية؟",
                  options: [
                    "بدونها، يكافئ تكديس عدة طبقات رياضيا نموذجا خطيا واحدا",
                    "تُستخدم فقط لتسريع التدريب",
                    "تحل محل الانحدار التدريجي",
                    "تحوّل البيانات الفئوية إلى بيانات عددية",
                  ],
                  explanation:
                    "دون لاخطية، تقوم كل طبقة فقط بتركيبة خطية للطبقة السابقة؛ تكديس تركيبات خطية يبقى تركيبة خطية.",
                },
                {
                  prompt: "ما المشكلة الرئيسية للترميز الأحادي الساخن مع كتالوج من 5000 عنصر؟",
                  options: [
                    "ينتج متجهات ضخمة ومتناثرة لا تلتقط أي تشابه بين العناصر",
                    "يعمل فقط مع البيانات العددية",
                    "يحل محل الانحدار اللوجستي تلقائيا",
                    "يتطلب دالة تفعيل ReLU",
                  ],
                  explanation:
                    "متجه أحادي الترميز على 5000 فئة يتكون كله تقريبا من أصفار، والمسافة بين أي فئتين متساوية دائما.",
                },
                {
                  prompt: "ماذا يمثّل التضمين (embedding)؟",
                  options: [
                    "متجه كثيف أصغر، يُتعلَّم أثناء التدريب، يلتقط التشابه بين الفئات",
                    "طبقة خفية دون دالة تفعيل",
                    "مرادف لمصفوفة الالتباس",
                    "نوع من تسوية L2",
                  ],
                  explanation:
                    "يستبدل التضمين تمثيلا متناثرا بمتجه كثيف من بضع عشرات من الأرقام، يعكس موضعه أنماطا متعلَّمة من البيانات.",
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: "p5",
      title: "Modèles de langue",
      lessons: [
        {
          id: "l15",
          title: "Tokens, n-grammes et contexte",
          type: "text",
          duration: "11 min",
          body:
            "## Découper le texte en tokens\n\n" +
            "Un modèle de langue ne lit pas le texte lettre par lettre ni forcément mot par mot : il le découpe en **tokens**, des unités qui peuvent être un mot entier, un fragment de mot, ou même un seul caractère. Ce découpage s'appelle la **tokenisation en sous-mots** (subword tokenization).\n\n" +
            "Prends le mot \"unwatched\". Un tokeniseur courant peut le découper en trois tokens : `un`, `watch`, `ed`. De même, \"cats\" peut devenir `cat` + `s`. Un mot rare et long comme \"antidisestablishmentarianism\" peut se décomposer en une demi-douzaine de sous-mots plus courants. En moyenne, sur un texte anglais courant, un token représente environ 4 caractères, soit un peu moins qu'un mot entier.\n\n" +
            "## Pourquoi découper en sous-mots plutôt qu'en mots entiers\n\n" +
            "Si le modèle devait connaître chaque mot entier comme un token unique, son vocabulaire exploserait avec toutes les variantes (\"regarder\", \"regardé\", \"regardera\"...) et il resterait bloqué face à un mot jamais vu à l'entraînement. En réutilisant des fragments communs (\"regard\" + \"é\", \"regard\" + \"era\"), le modèle peut composer des mots qu'il n'a jamais rencontrés tels quels, à partir de pièces qu'il connaît déjà.\n\n" +
            "## Les n-grammes : la mémoire courte des modèles simples\n\n" +
            "Avant les modèles de langue modernes, une approche courante consistait à prédire le mot suivant à partir des `n-1` mots précédents seulement : c'est un **n-gramme**. Un bigramme regarde 1 mot de contexte, un trigramme en regarde 2.\n\n" +
            "Dans la phrase \"you are very nice\", un modèle bigramme prédisant le mot après \"very\" ne regarde que \"very\", et pourrait proposer \"nice\", \"good\", ou \"tired\" selon ce qu'il a vu le plus souvent après \"very\" dans ses données d'entraînement, sans tenir compte de \"you are\" plus tôt dans la phrase.\n\n" +
            "## Pourquoi le contexte long compte\n\n" +
            "Un n-gramme à fenêtre courte perd vite le fil sur une phrase ambiguë. Compare : \"l'orange est mûre\" et \"l'orange est joyeuse\". Le mot \"orange\" ne dit pas, à lui seul, s'il s'agit d'un fruit ou d'une couleur personnifiée ; c'est le reste de la phrase, parfois plusieurs mots plus loin, qui tranche. Un modèle limité à une fenêtre de 1 ou 2 mots ne peut pas exploiter cet indice s'il est trop éloigné. C'est cette limite que les architectures présentées dans la leçon suivante cherchent à dépasser.\n\n" +
            "## À toi\n\n" +
            "Pourquoi \"antidisestablishmentarianism\" pose-t-il un problème à un tokeniseur qui ne connaîtrait que des mots entiers, mais pas à un tokeniseur en sous-mots ?\n\n" +
            "> Correction : un mot aussi rare a peu de chances d'apparaître tel quel dans le vocabulaire d'un tokeniseur par mot entier, qui le traiterait alors comme \"inconnu\". Un tokeniseur en sous-mots peut le reconstruire à partir de fragments plus courants (\"anti\", \"dis\", \"establishment\"...) déjà présents dans son vocabulaire.\n\n" +
            "> À retenir : un modèle de langue traite le texte en tokens de sous-mots, environ 4 caractères en moyenne, et un contexte trop court (comme un simple bigramme) perd les indices situés plus loin dans la phrase.",
          i18n: {
            en: {
              title: "Tokens, n-grams and context",
              body:
                "## Splitting text into tokens\n\n" +
                "A language model does not read text letter by letter, nor necessarily word by word: it splits it into **tokens**, units that can be a whole word, a fragment of a word, or even a single character. This splitting is called **subword tokenization**.\n\n" +
                "Take the word \"unwatched\". A common tokenizer might split it into three tokens: `un`, `watch`, `ed`. Similarly, \"cats\" might become `cat` + `s`. A rare, long word like \"antidisestablishmentarianism\" can break down into about half a dozen more common subwords. On average, in everyday English text, a token represents about 4 characters, slightly less than a full word.\n\n" +
                "## Why split into subwords rather than whole words\n\n" +
                "If a model had to know every whole word as a single token, its vocabulary would explode with every variant (\"watch\", \"watched\", \"watching\"...), and it would get stuck on any word never seen during training. By reusing common fragments (\"watch\" + \"ed\", \"watch\" + \"ing\"), the model can compose words it has never encountered as a whole, from pieces it already knows.\n\n" +
                "## N-grams: the short memory of simple models\n\n" +
                "Before modern language models, a common approach predicted the next word from only the previous `n-1` words: this is an **n-gram**. A bigram looks at 1 word of context, a trigram looks at 2.\n\n" +
                "In the sentence \"you are very nice\", a bigram model predicting the word after \"very\" only looks at \"very\", and might propose \"nice\", \"good\", or \"tired\" depending on what it saw most often after \"very\" in its training data, ignoring \"you are\" earlier in the sentence.\n\n" +
                "## Why long context matters\n\n" +
                "A short-window n-gram quickly loses track on an ambiguous sentence. Compare: \"the orange is ripe\" and \"the orange is cheerful\". The word \"orange\" alone does not say whether it is a fruit or a personified color; it is the rest of the sentence, sometimes several words later, that settles it. A model limited to a window of 1 or 2 words cannot use this clue if it sits too far away. This limit is what the architectures covered in the next lesson try to overcome.\n\n" +
                "## Try it yourself\n\n" +
                "Why does \"antidisestablishmentarianism\" pose a problem for a tokenizer that only knows whole words, but not for a subword tokenizer?\n\n" +
                "> Answer: such a rare word is unlikely to appear as-is in a whole-word tokenizer's vocabulary, which would then treat it as \"unknown\". A subword tokenizer can rebuild it from more common fragments (\"anti\", \"dis\", \"establishment\"...) already present in its vocabulary.\n\n" +
                "> Keep in mind: a language model processes text as subword tokens, about 4 characters on average, and a context window that is too short (like a plain bigram) loses clues located further away in the sentence.",
            },
            ar: {
              title: "الرموز (tokens) وn-غرامات والسياق",
              body:
                "## تقسيم النص إلى رموز\n\n" +
                "لا يقرأ نموذج اللغة النص حرفا حرفا، ولا بالضرورة كلمة كلمة: بل يقسّمه إلى **رموز (tokens)**، وحدات قد تكون كلمة كاملة، أو جزءا من كلمة، أو حتى حرفا واحدا. يُسمى هذا التقسيم **ترميز الكلمات الفرعية (subword tokenization)**.\n\n" +
                "خذ كلمة \"unwatched\" (لم تُشاهَد). قد يقسّمها مُرمِّز شائع إلى ثلاثة رموز: `un` و`watch` و`ed`. وبالمثل، قد تصبح \"cats\" (قطط) `cat` + `s`. كلمة نادرة وطويلة مثل \"antidisestablishmentarianism\" يمكن أن تتفكك إلى نحو نصف دزينة من الكلمات الفرعية الأكثر شيوعا. في المتوسط، في نص إنجليزي عادي، يمثّل الرمز الواحد نحو 4 أحرف، أي أقل قليلا من كلمة كاملة.\n\n" +
                "## لماذا التقسيم إلى كلمات فرعية بدل كلمات كاملة\n\n" +
                "لو وجب على النموذج معرفة كل كلمة كاملة كرمز وحيد، لانفجرت مفرداته مع كل صيغة (\"يشاهد\"، \"شاهد\"، \"سيشاهد\"...)، ولتوقف أمام أي كلمة لم يرها أثناء التدريب. بإعادة استخدام أجزاء مشتركة (\"شاهد\" + \"سي\")، يستطيع النموذج تركيب كلمات لم يصادفها كاملة من قبل، انطلاقا من قطع يعرفها مسبقا.\n\n" +
                "## الـn-غرامات: الذاكرة القصيرة للنماذج البسيطة\n\n" +
                "قبل نماذج اللغة الحديثة، كان نهج شائع يتنبأ بالكلمة التالية اعتمادا فقط على الكلمات الـ`n-1` السابقة: هذا هو **الـn-غرام (n-gram)**. ينظر النموذج الثنائي (bigram) إلى كلمة سياق واحدة، والثلاثي (trigram) إلى كلمتين.\n\n" +
                "في جملة \"أنت لطيف جدا\"، نموذج ثنائي يتنبأ بالكلمة بعد \"جدا\" ينظر فقط إلى \"جدا\"، وقد يقترح \"لطيف\" أو \"جيد\" أو \"متعب\" حسب ما رآه غالبا بعد \"جدا\" في بيانات تدريبه، متجاهلا \"أنت\" السابقة في الجملة.\n\n" +
                "## لماذا يهم السياق الطويل\n\n" +
                "يفقد الـn-غرام ذو النافذة القصيرة الخيط سريعا في جملة غامضة. قارن: \"البرتقالة ناضجة\" و\"الجو برتقالي مبهج\". كلمة \"برتقالي\" وحدها لا تقول إن كان المقصود فاكهة أم لونا مشخصنا؛ بقية الجملة، وأحيانا على بعد عدة كلمات، هي التي تحسم الأمر. نموذج محدود بنافذة من كلمة أو كلمتين لا يستطيع استغلال هذا الدليل إن كان بعيدا جدا. هذا القيد هو ما تحاول المعماريات في الدرس التالي تجاوزه.\n\n" +
                "## جرّب بنفسك\n\n" +
                "لماذا تشكّل \"antidisestablishmentarianism\" مشكلة لمُرمِّز يعرف الكلمات الكاملة فقط، لكن ليس لمُرمِّز الكلمات الفرعية؟\n\n" +
                "> التصحيح: كلمة نادرة كهذه من غير المرجح أن تظهر كما هي في مفردات مُرمِّز الكلمات الكاملة، الذي سيعاملها حينئذ كـ\"مجهولة\". يستطيع مُرمِّز الكلمات الفرعية إعادة بنائها من أجزاء أكثر شيوعا موجودة أصلا في مفرداته.\n\n" +
                "> للتذكر: يعالج نموذج اللغة النص كرموز كلمات فرعية، نحو 4 أحرف في المتوسط، ونافذة سياق قصيرة جدا (كثنائي بسيط) تفقد أدلة موجودة أبعد في الجملة.",
            },
          },
        },
        {
          id: "l16",
          title: "Des réseaux récurrents aux grands modèles de langue",
          type: "text",
          duration: "10 min",
          body:
            "## Lire un token à la fois\n\n" +
            "Une première façon de traiter une suite de tokens avec un réseau de neurones consiste à les lire un par un, dans l'ordre, en gardant à chaque étape un résumé condensé (un \"état caché\") de ce qui a été lu jusque-là. C'est le principe d'un **réseau de neurones récurrent** (RNN) : le résumé produit après le token 5 sert d'entrée, avec le token 6, pour produire le résumé après le token 6, et ainsi de suite.\n\n" +
            "## La limite du résumé qui s'étiole\n\n" +
            "Ce mécanisme fonctionne, mais le résumé condensé doit porter toute l'information utile des tokens précédents dans un espace de taille fixe. Plus la phrase s'allonge, plus l'information des premiers tokens risque de se diluer avant d'atteindre les derniers. C'est ce qu'on appelle le **problème du gradient qui s'évanouit** (vanishing gradient) : pendant l'entraînement, le signal qui devrait renforcer l'influence d'un mot lointain s'affaiblit à mesure qu'il traverse les étapes intermédiaires, si bien que le modèle a du mal à apprendre des dépendances entre mots très éloignés dans le texte.\n\n" +
            "L'exemple de la leçon précédente, \"l'orange est mûre\" contre \"l'orange est joyeuse\", est justement le genre de cas où un RNN peut perdre le fil si le mot décisif est trop loin du mot ambigu.\n\n" +
            "## Regarder toute la phrase à la fois\n\n" +
            "Les grands modèles de langue (LLM) modernes s'appuient sur une architecture différente, qui permet à chaque token de \"regarder\" directement tous les autres tokens de la séquence, avec un poids d'importance différent pour chacun, plutôt que de dépendre d'un résumé transmis étape par étape. Ce mécanisme, appelé **attention**, atténue le problème du gradient qui s'évanouit et permet de mieux exploiter un contexte long.\n\n" +
            "C'est cette capacité à pondérer directement l'importance de chaque mot du contexte, aussi loin soit-il, qui explique la meilleure prise en compte de phrases ambiguës comme celle de l'orange par les modèles récents, comparés aux approches plus anciennes fondées sur les n-grammes ou les premiers réseaux récurrents.\n\n" +
            "Cette leçon ne couvre que le principe général : le détail mathématique du mécanisme d'attention dépasse le cadre de ce cours d'introduction.\n\n" +
            "## À toi\n\n" +
            "Pourquoi un réseau récurrent qui lit token par token a-t-il plus de mal qu'un modèle à attention pour relier deux mots très éloignés dans une longue phrase ?\n\n" +
            "> Correction : le réseau récurrent doit faire transiter l'information par un résumé de taille fixe, mis à jour à chaque token ; sur une longue distance, ce signal s'affaiblit (gradient qui s'évanouit). Un modèle à attention regarde directement chaque token du contexte, quelle que soit sa distance, sans passer par ce goulot d'étranglement.\n\n" +
            "> À retenir : les réseaux récurrents traitent le texte séquentiellement et perdent en route l'information lointaine, tandis que le mécanisme d'attention des grands modèles de langue pondère directement tous les tokens du contexte entre eux.",
          i18n: {
            en: {
              title: "From recurrent networks to large language models",
              body:
                "## Reading one token at a time\n\n" +
                "One first way to process a sequence of tokens with a neural network is to read them one by one, in order, keeping a condensed summary (a \"hidden state\") of everything read so far at each step. This is the principle of a **recurrent neural network** (RNN): the summary produced after token 5 is fed back in, together with token 6, to produce the summary after token 6, and so on.\n\n" +
                "## The limit of a fading summary\n\n" +
                "This mechanism works, but the condensed summary must carry all the useful information from previous tokens within a fixed-size space. The longer the sentence, the more information from the early tokens risks fading before it reaches the later ones. This is known as the **vanishing gradient problem**: during training, the signal that should strengthen the influence of a distant word weakens as it passes through intermediate steps, so the model struggles to learn dependencies between words that are far apart in the text.\n\n" +
                "The example from the previous lesson, \"the orange is ripe\" versus \"the orange is cheerful\", is exactly the kind of case where an RNN can lose track if the decisive word is too far from the ambiguous one.\n\n" +
                "## Looking at the whole sentence at once\n\n" +
                "Modern large language models (LLMs) rely on a different architecture, which lets each token \"look\" directly at every other token in the sequence, with a different importance weight for each, instead of depending on a summary passed step by step. This mechanism, called **attention**, eases the vanishing gradient problem and makes better use of long context.\n\n" +
                "It is this ability to directly weigh the importance of every word in the context, however far away, that explains why recent models handle ambiguous sentences like the orange example better than older approaches based on n-grams or early recurrent networks.\n\n" +
                "This lesson only covers the general principle: the mathematical detail of the attention mechanism is beyond the scope of this introductory course.\n\n" +
                "## Try it yourself\n\n" +
                "Why does a recurrent network reading token by token struggle more than an attention-based model to connect two words that are far apart in a long sentence?\n\n" +
                "> Answer: the recurrent network must pass information through a fixed-size summary, updated at every token; over a long distance, this signal weakens (vanishing gradient). An attention-based model looks directly at every token in the context, regardless of distance, without passing through this bottleneck.\n\n" +
                "> Keep in mind: recurrent networks process text sequentially and lose distant information along the way, while the attention mechanism of large language models directly weighs all context tokens against each other.",
            },
            ar: {
              title: "من الشبكات المتكررة إلى نماذج اللغة الكبيرة",
              body:
                "## قراءة رمز واحد في كل مرة\n\n" +
                "طريقة أولى لمعالجة سلسلة من الرموز بشبكة عصبية هي قراءتها واحدا تلو الآخر، بالترتيب، مع الاحتفاظ في كل خطوة بملخص مكثف (\"حالة خفية\") لكل ما قُرئ حتى الآن. هذا مبدأ **الشبكة العصبية المتكررة (RNN)**: يُستخدم الملخص المُنتَج بعد الرمز 5، مع الرمز 6، لإنتاج الملخص بعد الرمز 6، وهكذا.\n\n" +
                "## حدود الملخص المتلاشي\n\n" +
                "تعمل هذه الآلية، لكن يجب على الملخص المكثف حمل كل المعلومات المفيدة من الرموز السابقة ضمن فضاء ثابت الحجم. كلما طالت الجملة، زاد خطر تلاشي معلومات الرموز الأولى قبل وصولها إلى الأخيرة. يُعرف هذا بـ**مشكلة الانحدار المتلاشي (vanishing gradient)**: أثناء التدريب، تضعف الإشارة التي يفترض أن تعزز تأثير كلمة بعيدة كلما مرت عبر خطوات وسيطة، فيصعب على النموذج تعلّم العلاقات بين كلمات متباعدة كثيرا في النص.\n\n" +
                "مثال الدرس السابق، \"البرتقالة ناضجة\" مقابل \"الجو برتقالي مبهج\"، هو بالضبط النوع من الحالات التي قد تفقد فيها شبكة RNN الخيط إذا كانت الكلمة الحاسمة بعيدة جدا عن الكلمة الغامضة.\n\n" +
                "## النظر إلى الجملة كاملة دفعة واحدة\n\n" +
                "تعتمد نماذج اللغة الكبيرة (LLM) الحديثة على معمارية مختلفة، تتيح لكل رمز \"النظر\" مباشرة إلى كل الرموز الأخرى في السلسلة، بوزن أهمية مختلف لكل واحد، بدل الاعتماد على ملخص يُنقل خطوة بخطوة. تُسمى هذه الآلية **الانتباه (attention)**، وتخفف من مشكلة الانحدار المتلاشي وتتيح استغلالا أفضل للسياق الطويل.\n\n" +
                "هذه القدرة على ترجيح أهمية كل كلمة في السياق مباشرة، مهما بَعُدت، هي ما يفسر تعامل النماذج الحديثة الأفضل مع الجمل الغامضة كمثال البرتقالة، مقارنة بالمقاربات الأقدم المبنية على الـn-غرامات أو الشبكات المتكررة الأولى.\n\n" +
                "يغطي هذا الدرس المبدأ العام فقط: التفصيل الرياضي لآلية الانتباه يتجاوز نطاق هذا الدرس التمهيدي.\n\n" +
                "## جرّب بنفسك\n\n" +
                "لماذا تواجه شبكة متكررة تقرأ رمزا برمز صعوبة أكبر من نموذج قائم على الانتباه في ربط كلمتين متباعدتين في جملة طويلة؟\n\n" +
                "> التصحيح: يجب على الشبكة المتكررة تمرير المعلومة عبر ملخص ثابت الحجم، يُحدَّث مع كل رمز؛ على مسافة طويلة، تضعف هذه الإشارة (الانحدار المتلاشي). ينظر نموذج قائم على الانتباه مباشرة إلى كل رمز في السياق، بغض النظر عن المسافة، دون المرور بهذا الاختناق.\n\n" +
                "> للتذكر: تعالج الشبكات المتكررة النص تسلسليا وتفقد المعلومة البعيدة في الطريق، بينما ترجّح آلية الانتباه في نماذج اللغة الكبيرة كل رموز السياق مباشرة ببعضها.",
            },
          },
        },
        {
          id: "l17",
          title: "Quiz : modèles de langue",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q11",
              prompt: "Pourquoi les modèles de langue découpent-ils le texte en sous-mots plutôt qu'en mots entiers ?",
              options: [
                "Pour composer des mots jamais vus à l'entraînement à partir de fragments connus",
                "Pour éviter d'utiliser la descente de gradient",
                "Pour transformer le texte en données catégorielles",
                "Pour remplacer le mécanisme d'attention",
              ],
              correctIndex: 0,
              explanation:
                "Un vocabulaire de mots entiers exploserait avec toutes les variantes ; les sous-mots permettent de recomposer des mots rares ou jamais vus.",
            },
            {
              id: "q12",
              prompt: "Que regarde un modèle bigramme pour prédire le mot suivant ?",
              options: [
                "Seulement le mot immédiatement précédent",
                "Toute la phrase précédente",
                "Uniquement les tokens de sous-mots",
                "L'ensemble du document",
              ],
              correctIndex: 0,
              explanation: "Un bigramme ne regarde que 1 mot de contexte, ce qui limite sa capacité à résoudre les ambiguïtés lointaines.",
            },
            {
              id: "q13",
              prompt: "Quel avantage le mécanisme d'attention apporte-t-il par rapport à un réseau récurrent classique ?",
              options: [
                "Il permet à chaque token de pondérer directement tous les autres tokens, sans passer par un résumé de taille fixe",
                "Il élimine le besoin de tokenisation",
                "Il remplace la fonction sigmoïde par ReLU",
                "Il transforme automatiquement les données catégorielles en embeddings",
              ],
              correctIndex: 0,
              explanation:
                "L'attention regarde directement chaque token du contexte, ce qui atténue le problème du gradient qui s'évanouit sur les longues séquences.",
            },
          ],
          i18n: {
            en: {
              title: "Quiz: language models",
              questions: [
                {
                  prompt: "Why do language models split text into subwords rather than whole words?",
                  options: [
                    "To compose words never seen during training from known fragments",
                    "To avoid using gradient descent",
                    "To turn text into categorical data",
                    "To replace the attention mechanism",
                  ],
                  explanation:
                    "A whole-word vocabulary would explode with every variant; subwords allow rare or unseen words to be rebuilt.",
                },
                {
                  prompt: "What does a bigram model look at to predict the next word?",
                  options: [
                    "Only the immediately preceding word",
                    "The entire preceding sentence",
                    "Only subword tokens",
                    "The whole document",
                  ],
                  explanation:
                    "A bigram only looks at 1 word of context, which limits its ability to resolve distant ambiguities.",
                },
                {
                  prompt: "What advantage does the attention mechanism bring over a classic recurrent network?",
                  options: [
                    "It lets each token directly weigh every other token, without passing through a fixed-size summary",
                    "It removes the need for tokenization",
                    "It replaces the sigmoid function with ReLU",
                    "It automatically turns categorical data into embeddings",
                  ],
                  explanation:
                    "Attention looks directly at every token in the context, which eases the vanishing gradient problem over long sequences.",
                },
              ],
            },
            ar: {
              title: "اختبار: نماذج اللغة",
              questions: [
                {
                  prompt: "لماذا تقسّم نماذج اللغة النص إلى كلمات فرعية بدل كلمات كاملة؟",
                  options: [
                    "لتركيب كلمات لم تُشاهَد أثناء التدريب من أجزاء معروفة",
                    "لتجنب استخدام الانحدار التدريجي",
                    "لتحويل النص إلى بيانات فئوية",
                    "لاستبدال آلية الانتباه",
                  ],
                  explanation:
                    "مفردات الكلمات الكاملة ستنفجر مع كل صيغة؛ تتيح الكلمات الفرعية إعادة بناء كلمات نادرة أو غير مرئية.",
                },
                {
                  prompt: "إلى ماذا ينظر نموذج ثنائي (bigram) للتنبؤ بالكلمة التالية؟",
                  options: [
                    "فقط إلى الكلمة السابقة مباشرة",
                    "إلى الجملة السابقة كاملة",
                    "فقط إلى رموز الكلمات الفرعية",
                    "إلى الوثيقة كاملة",
                  ],
                  explanation: "ينظر الثنائي إلى كلمة سياق واحدة فقط، مما يحد من قدرته على حل الغموض البعيد.",
                },
                {
                  prompt: "ما الميزة التي تجلبها آلية الانتباه مقارنة بشبكة متكررة كلاسيكية؟",
                  options: [
                    "تتيح لكل رمز ترجيح كل الرموز الأخرى مباشرة، دون المرور بملخص ثابت الحجم",
                    "تلغي الحاجة إلى الترميز",
                    "تستبدل دالة السيغمويد بـReLU",
                    "تحوّل البيانات الفئوية تلقائيا إلى تضمينات",
                  ],
                  explanation:
                    "ينظر الانتباه مباشرة إلى كل رمز في السياق، مما يخفف مشكلة الانحدار المتلاشي على السلاسل الطويلة.",
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: "p6",
      title: "Mise en production et responsabilité",
      lessons: [
        {
          id: "l18",
          title: "Mettre un modèle en production",
          type: "text",
          duration: "10 min",
          body:
            "## L'entraînement n'est qu'une petite partie du travail\n\n" +
            "Une idée reçue veut qu'un projet de machine learning consiste surtout à écrire et ajuster le modèle. En pratique, le code qui entraîne et sert un modèle représente généralement 5 % ou moins du code total d'un système en production. Le reste couvre la collecte et la validation des données, l'infrastructure de service, la surveillance, et la gestion des versions de données et de modèles.\n\n" +
            "## Entraînement statique ou dynamique\n\n" +
            "Un modèle peut être entraîné une fois puis figé (**entraînement statique**) ou réentraîné régulièrement à mesure que de nouvelles données arrivent (**entraînement dynamique**). Un modèle statique est plus simple à valider avant mise en service, mais il se dégrade avec le temps si le monde change (nouveaux mots-clés de spam, nouvelles habitudes d'achat). Un modèle dynamique reste à jour, mais chaque nouvelle version doit être revalidée avant d'être servie.\n\n" +
            "## Inférence statique ou dynamique\n\n" +
            "Côté service, un modèle peut précalculer ses prédictions pour toutes les entrées possibles à l'avance (**inférence statique**, rapide à servir mais limitée aux cas prévus), ou calculer la prédiction à la demande, au moment où la requête arrive (**inférence dynamique**, plus flexible mais plus coûteuse en temps de réponse).\n\n" +
            "## Tester avant de servir\n\n" +
            "Avant de mettre un modèle en service, on teste généralement les composants d'infrastructure indépendamment de la qualité du modèle : est-ce que le pipeline de données produit les bonnes colonnes, dans le bon format, sans valeurs manquantes inattendues ? Est-ce que le modèle répond dans un délai acceptable sous charge réelle ?\n\n" +
            "## Surveiller après le déploiement\n\n" +
            "Un modèle en production doit être surveillé en continu, pas seulement testé une fois avant sa mise en service. Deux signaux à suivre particulièrement : la dérive des données (data drift), quand la distribution des données reçues en production s'écarte de celle utilisée à l'entraînement, et la dégradation progressive de la qualité des prédictions, qui peut passer inaperçue si personne ne la mesure activement.\n\n" +
            "## À toi\n\n" +
            "Un modèle de détection de spam entraîné une seule fois en 2024 et jamais réentraîné depuis reçoit toujours autant d'e-mails à classer en 2026, avec la même précision apparente sur les anciens exemples de test. Pourquoi cela ne garantit-il pas qu'il fonctionne toujours bien ?\n\n" +
            "> Correction : les techniques de spam évoluent ; la distribution des e-mails réels en 2026 s'est probablement éloignée (dérive des données) de celle de 2024. La précision mesurée sur d'anciens exemples de test ne dit rien de la performance sur les nouveaux types de spam apparus depuis.\n\n" +
            "> À retenir : la mise en production d'un modèle mobilise surtout de l'infrastructure autour du modèle (données, service, surveillance), et un modèle jamais réentraîné ni surveillé peut se dégrader silencieusement à mesure que le monde change.",
          i18n: {
            en: {
              title: "Putting a model into production",
              body:
                "## Training is only a small part of the work\n\n" +
                "A common misconception is that a machine learning project mostly consists of writing and tuning the model. In practice, the code that trains and serves a model usually makes up 5% or less of a production system's total code. The rest covers data collection and validation, serving infrastructure, monitoring, and versioning of data and models.\n\n" +
                "## Static or dynamic training\n\n" +
                "A model can be trained once and then frozen (**static training**) or retrained regularly as new data arrives (**dynamic training**). A static model is simpler to validate before deployment, but it degrades over time if the world changes (new spam keywords, new buying habits). A dynamic model stays current, but every new version must be revalidated before being served.\n\n" +
                "## Static or dynamic inference\n\n" +
                "On the serving side, a model can precompute predictions for every possible input in advance (**static inference**, fast to serve but limited to anticipated cases), or compute the prediction on demand, when the request arrives (**dynamic inference**, more flexible but more costly in response time).\n\n" +
                "## Testing before serving\n\n" +
                "Before putting a model into service, infrastructure components are usually tested independently from the model's quality: does the data pipeline produce the right columns, in the right format, without unexpected missing values? Does the model respond within an acceptable time under real load?\n\n" +
                "## Monitoring after deployment\n\n" +
                "A production model must be monitored continuously, not just tested once before deployment. Two signals to watch closely: data drift, when the distribution of data received in production diverges from the one used during training, and the gradual degradation of prediction quality, which can go unnoticed if no one actively measures it.\n\n" +
                "## Try it yourself\n\n" +
                "A spam detection model trained once in 2024 and never retrained since still receives just as many emails to classify in 2026, with the same apparent accuracy on old test examples. Why does this not guarantee it still works well?\n\n" +
                "> Answer: spam techniques evolve; the distribution of real emails in 2026 has likely drifted away (data drift) from that of 2024. Accuracy measured on old test examples says nothing about performance on new types of spam that appeared since.\n\n" +
                "> Keep in mind: putting a model into production mostly involves infrastructure around the model (data, serving, monitoring), and a model that is never retrained or monitored can degrade silently as the world changes.",
            },
            ar: {
              title: "وضع نموذج في الإنتاج",
              body:
                "## التدريب جزء صغير فقط من العمل\n\n" +
                "فكرة شائعة خاطئة هي أن مشروع تعلم الآلة يتكون أساسا من كتابة النموذج وضبطه. عمليا، الكود الذي يدرّب النموذج ويخدمه يشكل عادة 5% أو أقل من إجمالي كود نظام في الإنتاج. الباقي يغطي جمع البيانات والتحقق منها، والبنية التحتية للخدمة، والمراقبة، وإدارة إصدارات البيانات والنماذج.\n\n" +
                "## تدريب ثابت أو ديناميكي\n\n" +
                "يمكن تدريب نموذج مرة واحدة ثم تجميده (**تدريب ثابت**) أو إعادة تدريبه بانتظام مع وصول بيانات جديدة (**تدريب ديناميكي**). النموذج الثابت أبسط في التحقق قبل النشر، لكنه يتدهور مع الوقت إذا تغيّر العالم (كلمات مفتاحية جديدة للبريد المزعج، عادات شراء جديدة). يبقى النموذج الديناميكي محدَّثا، لكن كل إصدار جديد يجب إعادة التحقق منه قبل خدمته.\n\n" +
                "## استدلال ثابت أو ديناميكي\n\n" +
                "من جهة الخدمة، يمكن للنموذج حساب التنبؤات مسبقا لكل المدخلات الممكنة (**استدلال ثابت**، سريع في الخدمة لكن محدود بالحالات المتوقعة)، أو حساب التنبؤ عند الطلب، لحظة وصول الطلب (**استدلال ديناميكي**، أكثر مرونة لكن أكلف من حيث زمن الاستجابة).\n\n" +
                "## الاختبار قبل الخدمة\n\n" +
                "قبل وضع نموذج في الخدمة، تُختبر عادة مكونات البنية التحتية بمعزل عن جودة النموذج: هل ينتج خط أنابيب البيانات الأعمدة الصحيحة، بالصيغة الصحيحة، دون قيم مفقودة غير متوقعة؟ هل يستجيب النموذج خلال وقت مقبول تحت حمل حقيقي؟\n\n" +
                "## المراقبة بعد النشر\n\n" +
                "يجب مراقبة نموذج في الإنتاج باستمرار، وليس اختباره مرة واحدة فقط قبل النشر. إشارتان يجب متابعتهما خصوصا: انحراف البيانات (data drift)، عندما يبتعد توزيع البيانات المستقبلة في الإنتاج عن التوزيع المستخدم في التدريب، والتدهور التدريجي لجودة التنبؤات، الذي قد يمر دون ملاحظة إن لم يقسه أحد بنشاط.\n\n" +
                "## جرّب بنفسك\n\n" +
                "نموذج كشف بريد مزعج دُرِّب مرة واحدة سنة 2024 ولم يُعَد تدريبه منذئذ، لا يزال يستقبل عدد رسائل مماثل للتصنيف سنة 2026، بنفس الدقة الظاهرية على أمثلة الاختبار القديمة. لماذا لا يضمن هذا أنه لا يزال يعمل جيدا؟\n\n" +
                "> التصحيح: تتطور تقنيات البريد المزعج؛ من المرجح أن توزيع الرسائل الحقيقية سنة 2026 قد انحرف (انحراف البيانات) عن توزيع 2024. الدقة المقاسة على أمثلة اختبار قديمة لا تقول شيئا عن الأداء على أنواع بريد مزعج جديدة ظهرت منذئذ.\n\n" +
                "> للتذكر: يتطلب وضع نموذج في الإنتاج بنية تحتية حول النموذج بالدرجة الأولى (بيانات، خدمة، مراقبة)، ويمكن لنموذج لم يُعَد تدريبه أو تُراقَب حالته أن يتدهور بصمت مع تغيّر العالم.",
            },
          },
        },
        {
          id: "l19",
          title: "Biais, équité et responsabilité",
          type: "text",
          duration: "11 min",
          body:
            "## Un modèle reproduit ce qu'il a vu\n\n" +
            "Un modèle de machine learning n'invente rien : il apprend des régularités présentes dans ses données d'entraînement. Si ces données reflètent des inégalités ou des déséquilibres existants, le modèle a toutes les chances de les reproduire, voire de les amplifier, sans qu'aucune ligne de code ne le dise explicitement.\n\n" +
            "## Quelques sources courantes de biais\n\n" +
            "Le **biais historique** (historical bias) apparaît quand les données reflètent des inégalités passées ou présentes de la société, indépendamment de la façon dont elles ont été collectées : un modèle de recrutement entraîné sur vingt ans d'embauches dans un secteur historiquement déséquilibré héritera de ce déséquilibre.\n\n" +
            "Le **biais de sélection** (selection bias) survient quand les données d'entraînement ne représentent pas fidèlement la population sur laquelle le modèle sera utilisé, par exemple un modèle de reconnaissance vocale entraîné surtout sur des voix d'adultes, moins performant sur des voix d'enfants.\n\n" +
            "Le **biais de rapport** (reporting bias) apparaît quand la fréquence à laquelle un fait est mentionné dans les données ne reflète pas sa fréquence réelle dans le monde : dans des textes, les événements inhabituels sont souvent plus commentés que les événements ordinaires, ce qui peut fausser ce qu'un modèle \"apprend\" comme étant typique.\n\n" +
            "Le **biais d'automatisation** (automation bias) ne vient pas des données mais de l'humain qui utilise le modèle : la tendance à faire davantage confiance à une recommandation automatisée qu'à son propre jugement, même quand ce dernier serait plus fiable.\n\n" +
            "## Pourquoi une bonne métrique globale ne suffit pas\n\n" +
            "Un modèle peut afficher une excellente exactitude globale tout en se trompant beaucoup plus souvent sur un sous-groupe particulier de la population. Une évaluation qui s'arrête à la métrique d'ensemble, sans la décomposer par sous-groupe pertinent, peut masquer ce déséquilibre.\n\n" +
            "## Une responsabilité qui ne s'arrête pas au déploiement\n\n" +
            "Repérer un biais ne suffit pas à le corriger : cela peut demander de revoir la collecte des données, la définition même du problème, ou d'ajouter des contraintes explicites au modèle. Cette leçon donne un vocabulaire de base pour repérer ces questions ; une étude sérieuse de l'équité algorithmique dépasse le cadre de ce cours d'introduction.\n\n" +
            "## À toi\n\n" +
            "Un modèle de tri de CV atteint 92 % d'exactitude globale, mais rejette deux fois plus souvent les candidatures de personnes de plus de 50 ans que celles des autres tranches d'âge. Pourquoi le chiffre de 92 % ne suffit-il pas à juger ce modèle acceptable ?\n\n" +
            "> Correction : une exactitude globale élevée peut masquer une erreur concentrée sur un sous-groupe précis. Ici, le modèle traite un groupe d'âge nettement moins bien que les autres, ce que la métrique globale ne révèle pas ; il faut décomposer la performance par sous-groupe pour le voir.\n\n" +
            "> À retenir : un modèle reproduit les biais présents dans ses données (historique, sélection, rapport) ou introduits par l'usage humain (automatisation), et une métrique globale satisfaisante ne garantit pas un traitement équitable de chaque sous-groupe.",
          i18n: {
            en: {
              title: "Bias, fairness and responsibility",
              body:
                "## A model reproduces what it has seen\n\n" +
                "A machine learning model invents nothing: it learns patterns present in its training data. If that data reflects existing inequalities or imbalances, the model is very likely to reproduce them, or even amplify them, without any line of code saying so explicitly.\n\n" +
                "## Some common sources of bias\n\n" +
                "**Historical bias** appears when the data reflects past or present inequalities in society, regardless of how it was collected: a hiring model trained on twenty years of recruitment in a historically imbalanced sector will inherit that imbalance.\n\n" +
                "**Selection bias** occurs when the training data does not faithfully represent the population the model will be used on, for example a speech recognition model trained mostly on adult voices, performing worse on children's voices.\n\n" +
                "**Reporting bias** appears when how often a fact is mentioned in the data does not reflect its real-world frequency: in text, unusual events are often discussed more than ordinary ones, which can skew what a model \"learns\" as typical.\n\n" +
                "**Automation bias** does not come from the data but from the human using the model: the tendency to trust an automated recommendation more than one's own judgment, even when the latter would be more reliable.\n\n" +
                "## Why a good overall metric is not enough\n\n" +
                "A model can show excellent overall accuracy while being much more often wrong on a particular subgroup of the population. An evaluation that stops at the overall metric, without breaking it down by relevant subgroup, can hide this imbalance.\n\n" +
                "## A responsibility that does not stop at deployment\n\n" +
                "Spotting a bias is not enough to fix it: doing so may require revisiting data collection, the very definition of the problem, or adding explicit constraints to the model. This lesson gives basic vocabulary for spotting these issues; a serious study of algorithmic fairness is beyond the scope of this introductory course.\n\n" +
                "## Try it yourself\n\n" +
                "A resume screening model reaches 92% overall accuracy, but rejects applications from people over 50 twice as often as those from other age groups. Why is the 92% figure not enough to judge this model acceptable?\n\n" +
                "> Answer: high overall accuracy can hide an error concentrated on one specific subgroup. Here, the model treats one age group noticeably worse than others, which the overall metric does not reveal; performance must be broken down by subgroup to see it.\n\n" +
                "> Keep in mind: a model reproduces biases present in its data (historical, selection, reporting) or introduced by human use (automation), and a satisfying overall metric does not guarantee fair treatment of every subgroup.",
            },
            ar: {
              title: "التحيّز والإنصاف والمسؤولية",
              body:
                "## النموذج يكرر ما رآه\n\n" +
                "لا يخترع نموذج تعلم الآلة شيئا: بل يتعلم أنماطا موجودة في بيانات تدريبه. إذا عكست هذه البيانات تفاوتات أو اختلالات قائمة، فمن المرجح جدا أن يكررها النموذج، بل ويضخّمها، دون أن يقول أي سطر كود ذلك صراحة.\n\n" +
                "## بعض المصادر الشائعة للتحيّز\n\n" +
                "يظهر **التحيّز التاريخي (historical bias)** عندما تعكس البيانات تفاوتات ماضية أو حاضرة في المجتمع، بغض النظر عن طريقة جمعها: نموذج توظيف مُدرَّب على عشرين سنة من التوظيف في قطاع غير متوازن تاريخيا سيرث هذا الاختلال.\n\n" +
                "يحدث **تحيّز الاختيار (selection bias)** عندما لا تمثّل بيانات التدريب بأمانة الفئة السكانية التي سيُستخدم عليها النموذج، مثل نموذج التعرف على الكلام المُدرَّب أساسا على أصوات بالغين، فيؤدي أداء أضعف مع أصوات الأطفال.\n\n" +
                "يظهر **تحيّز التقرير (reporting bias)** عندما لا يعكس تكرار ذكر حقيقة ما في البيانات تكرارها الحقيقي في العالم: في النصوص، غالبا ما يُناقَش الحدث غير المألوف أكثر من الحدث العادي، مما قد يشوّه ما \"يتعلمه\" النموذج كنمط اعتيادي.\n\n" +
                "لا يأتي **تحيّز الأتمتة (automation bias)** من البيانات بل من الإنسان الذي يستخدم النموذج: الميل إلى الوثوق بتوصية آلية أكثر من الحكم الشخصي، حتى عندما يكون هذا الأخير أكثر موثوقية.\n\n" +
                "## لماذا لا تكفي مقياس إجمالي جيد\n\n" +
                "يمكن لنموذج أن يُظهر دقة إجمالية ممتازة بينما يخطئ أكثر بكثير على فئة فرعية معينة من السكان. تقييم يتوقف عند المقياس الإجمالي، دون تفصيله حسب الفئات الفرعية ذات الصلة، قد يخفي هذا الاختلال.\n\n" +
                "## مسؤولية لا تتوقف عند النشر\n\n" +
                "رصد تحيّز لا يكفي لتصحيحه: قد يتطلب ذلك إعادة النظر في جمع البيانات، أو في تعريف المسألة نفسه، أو إضافة قيود صريحة على النموذج. يقدّم هذا الدرس مفردات أساسية لرصد هذه المسائل؛ دراسة جادة للإنصاف الخوارزمي تتجاوز نطاق هذا الدرس التمهيدي.\n\n" +
                "## جرّب بنفسك\n\n" +
                "يحقق نموذج لفرز السير الذاتية دقة إجمالية 92%، لكنه يرفض طلبات من تجاوزوا الخمسين ضعف ما يرفضه من الفئات العمرية الأخرى. لماذا لا يكفي رقم 92% للحكم بأن هذا النموذج مقبول؟\n\n" +
                "> التصحيح: يمكن لدقة إجمالية مرتفعة أن تخفي خطأ مركّزا على فئة فرعية محددة. هنا، يعامل النموذج فئة عمرية أسوأ بشكل ملحوظ من غيرها، وهو ما لا يكشفه المقياس الإجمالي؛ يجب تفصيل الأداء حسب الفئة الفرعية لرؤيته.\n\n" +
                "> للتذكر: يكرر النموذج التحيّزات الموجودة في بياناته (تاريخي، اختيار، تقرير) أو تلك التي يُدخلها الاستخدام البشري (أتمتة)، ومقياس إجمالي مُرضٍ لا يضمن معاملة عادلة لكل فئة فرعية.",
            },
          },
        },
        {
          id: "l20",
          title: "Quiz : production et responsabilité",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q14",
              prompt: "Quelle part du code d'un système de machine learning en production correspond typiquement à l'entraînement et au service du modèle lui-même ?",
              options: ["5 % ou moins", "Environ 50 %", "Environ 80 %", "Presque 100 %"],
              correctIndex: 0,
              explanation:
                "Le code d'entraînement et de service du modèle représente généralement 5 % ou moins du code total ; le reste couvre données, infrastructure et surveillance.",
            },
            {
              id: "q15",
              prompt: "Qu'est-ce que la dérive des données (data drift) ?",
              options: [
                "Un écart entre la distribution des données reçues en production et celle utilisée à l'entraînement",
                "Une baisse du taux d'apprentissage pendant l'entraînement",
                "Le remplacement d'un modèle statique par un modèle dynamique",
                "Une erreur de calcul de la matrice de confusion",
              ],
              correctIndex: 0,
              explanation:
                "La dérive des données survient quand le monde change et que les données réelles s'éloignent de celles vues à l'entraînement.",
            },
            {
              id: "q16",
              prompt: "Que désigne le biais de sélection (selection bias) ?",
              options: [
                "Le fait que les données d'entraînement ne représentent pas fidèlement la population réelle d'usage",
                "La tendance humaine à trop faire confiance à un modèle",
                "Le fait qu'un événement rare soit sur-représenté dans les textes",
                "Une erreur de calcul de la précision",
              ],
              correctIndex: 0,
              explanation:
                "Le biais de sélection vient d'un décalage entre la population représentée dans les données d'entraînement et celle sur laquelle le modèle sera réellement utilisé.",
            },
            {
              id: "q17",
              prompt: "Pourquoi une exactitude globale de 92 % ne suffit-elle pas à garantir qu'un modèle traite équitablement tous les sous-groupes ?",
              options: [
                "Elle peut masquer un taux d'erreur beaucoup plus élevé sur un sous-groupe particulier",
                "Elle signifie automatiquement que le modèle est biaisé",
                "Elle ne concerne que les modèles de régression, pas de classification",
                "Elle ne peut être calculée que sur les données d'entraînement",
              ],
              correctIndex: 0,
              explanation:
                "Une métrique globale agrège toutes les erreurs ; il faut la décomposer par sous-groupe pour repérer un traitement inégal.",
            },
          ],
          i18n: {
            en: {
              title: "Quiz: production and responsibility",
              questions: [
                {
                  prompt: "What share of a production machine learning system's code typically corresponds to training and serving the model itself?",
                  options: ["5% or less", "About 50%", "About 80%", "Nearly 100%"],
                  explanation:
                    "Training and serving code usually makes up 5% or less of the total code; the rest covers data, infrastructure and monitoring.",
                },
                {
                  prompt: "What is data drift?",
                  options: [
                    "A gap between the distribution of data received in production and the one used during training",
                    "A drop in the learning rate during training",
                    "Replacing a static model with a dynamic one",
                    "A miscalculation of the confusion matrix",
                  ],
                  explanation:
                    "Data drift happens when the world changes and real-world data moves away from what was seen during training.",
                },
                {
                  prompt: "What does selection bias refer to?",
                  options: [
                    "Training data that does not faithfully represent the real population the model will be used on",
                    "The human tendency to over-trust a model",
                    "A rare event being over-represented in text",
                    "A miscalculation of precision",
                  ],
                  explanation:
                    "Selection bias comes from a mismatch between the population represented in the training data and the one the model will actually be used on.",
                },
                {
                  prompt: "Why isn't 92% overall accuracy enough to guarantee a model treats every subgroup fairly?",
                  options: [
                    "It can hide a much higher error rate on a particular subgroup",
                    "It automatically means the model is biased",
                    "It only applies to regression models, not classification",
                    "It can only be computed on training data",
                  ],
                  explanation:
                    "An overall metric aggregates all errors; it must be broken down by subgroup to spot unequal treatment.",
                },
              ],
            },
            ar: {
              title: "اختبار: الإنتاج والمسؤولية",
              questions: [
                {
                  prompt: "ما الحصة التي يمثلها عادة كود تدريب النموذج نفسه وخدمته من إجمالي كود نظام تعلم آلة في الإنتاج؟",
                  options: ["5% أو أقل", "نحو 50%", "نحو 80%", "قرابة 100%"],
                  explanation:
                    "يشكل كود التدريب والخدمة عادة 5% أو أقل من إجمالي الكود؛ يغطي الباقي البيانات والبنية التحتية والمراقبة.",
                },
                {
                  prompt: "ما هو انحراف البيانات (data drift)؟",
                  options: [
                    "فجوة بين توزيع البيانات المستقبلة في الإنتاج والتوزيع المستخدم أثناء التدريب",
                    "انخفاض في معدل التعلم أثناء التدريب",
                    "استبدال نموذج ثابت بآخر ديناميكي",
                    "خطأ في حساب مصفوفة الالتباس",
                  ],
                  explanation:
                    "يحدث انحراف البيانات عندما يتغير العالم وتبتعد البيانات الحقيقية عما شُوهد أثناء التدريب.",
                },
                {
                  prompt: "إلى ماذا يشير تحيّز الاختيار (selection bias)؟",
                  options: [
                    "بيانات تدريب لا تمثّل بأمانة الفئة السكانية الحقيقية التي سيُستخدم عليها النموذج",
                    "الميل البشري للثقة المفرطة بنموذج",
                    "حدث نادر ممثَّل بشكل مبالغ فيه في النصوص",
                    "خطأ في حساب الدقة",
                  ],
                  explanation:
                    "ينشأ تحيّز الاختيار من عدم تطابق بين الفئة الممثَّلة في بيانات التدريب والفئة التي سيُستخدم عليها النموذج فعليا.",
                },
                {
                  prompt: "لماذا لا تكفي دقة إجمالية 92% لضمان معاملة النموذج لكل الفئات الفرعية بإنصاف؟",
                  options: [
                    "يمكن أن تخفي معدل خطأ أعلى بكثير على فئة فرعية معينة",
                    "تعني تلقائيا أن النموذج متحيّز",
                    "تخص فقط نماذج الانحدار وليس التصنيف",
                    "لا يمكن حسابها إلا على بيانات التدريب",
                  ],
                  explanation:
                    "يجمّع المقياس الإجمالي كل الأخطاء؛ يجب تفصيله حسب الفئة الفرعية لرصد معاملة غير متكافئة.",
                },
              ],
            },
          },
        },
      ],
    },
  ],
  i18n: {
    en: {
      title: "Machine Learning: the fundamentals",
      tagline:
        "Understand how a machine learns from data: regression, classification, neural networks and language models, with examples you can compute by hand.",
      description:
        "A path into machine learning for people who have never touched it. You start from a scatter plot and a line that fits it, learn to measure a model's error and correct it, then move on to classification (confusion matrix, precision, recall, ROC), neural networks, embeddings and large language models. Every concept rests on a small dataset you can compute by hand, not on a formula you have to take on faith. The course ends with production deployment and fairness, two topics introductory courses too often skip.",
      language: "English",
      software: "A browser; Python is optional, only if you want to reproduce the calculations yourself",
      prerequisites: [
        "High-school-level algebra (solve a first-degree equation, read a line y = a x + b)",
        "Ability to read a simple chart (scatter plot, curve)",
        "No programming experience required",
      ],
      summary: [
        "Part 1: Linear regression, the basic building block of machine learning",
        "Part 2: Classification, logistic regression and metrics (precision, recall, ROC, AUC)",
        "Part 3: Numerical and categorical data, generalization and overfitting",
        "Part 4: Neural networks and embeddings",
        "Part 5: Language models, from n-grams to today's large models",
        "Part 6: Production deployment, bias and fairness",
      ],
      objectives: [
        "Explain what a linear regression model actually computes and how it learns",
        "Choose and interpret a loss function (L1, L2, MAE, MSE)",
        "Read a confusion matrix and compute precision, recall and F1 score by hand",
        "Understand what a ROC curve is for and what AUC measures",
        "Tell numerical data apart from categorical data, and spot overfitting",
        "Explain what neural networks and embeddings are used for",
        "Describe how a language model predicts the next word, from n-grams to LLMs",
        "List the questions to ask before shipping a model to production, including on bias",
      ],
      skills: [
        "Linear and logistic regression",
        "Reading a confusion matrix",
        "Computing precision, recall, F1 score, ROC and AUC",
        "Neural network and embedding concepts",
        "Language model basics (tokens, n-grams, context)",
        "Production deployment and algorithmic fairness reference points",
      ],
      parts: [
        "Linear regression: first steps",
        "Classification: from logistic regression to metrics",
        "Data and generalization",
        "Neural networks and embeddings",
        "Language models",
        "Production and responsibility",
      ],
      lessons: {
        l1: "Sources, license and attestation",
        l2: "The principle of linear regression",
        l3: "Measuring and fixing error: loss and gradient descent",
        l4: "From regression to classification: logistic regression",
        l5: "Decision threshold and confusion matrix",
        l6: "Precision, recall and F1 score",
        l7: "ROC curve and AUC",
        l8: "Quiz: classification",
        l9: "Numerical and categorical data",
        l10: "Generalization and overfitting",
        l11: "Quiz: data and generalization",
        l12: "Neural networks: beyond the linear model",
        l13: "Embeddings",
        l14: "Quiz: neural networks and embeddings",
        l15: "Tokens, n-grams and context",
        l16: "From recurrent networks to large language models",
        l17: "Quiz: language models",
        l18: "Putting a model into production",
        l19: "Bias, fairness and responsibility",
        l20: "Quiz: production and responsibility",
      },
    },
    ar: {
      title: "التعلم الآلي (Machine Learning): الأساسيات",
      tagline:
        "افهم كيف تتعلم الآلة من البيانات: الانحدار (regression)، التصنيف (classification)، الشبكات العصبية ونماذج اللغة، بأمثلة يمكنك حسابها يدويا.",
      description:
        "مسار لفهم التعلم الآلي لمن لم يطلع عليه من قبل. تبدأ من سحابة نقاط وخط يلائمها، ثم تتعلم قياس خطأ النموذج وتصحيحه، لتنتقل بعدها إلى التصنيف (مصفوفة الالتباس confusion matrix، الدقة precision، الاستدعاء recall، منحنى ROC)، ثم الشبكات العصبية والتضمينات (embeddings) ونماذج اللغة الكبيرة. كل مفهوم يستند إلى مجموعة بيانات صغيرة يمكن حسابها يدويا، لا إلى معادلة تُقبل كمسلّمة. ينتهي الكورس بموضوعي النشر في الإنتاج والإنصاف، وهما موضوعان كثيرا ما تتجاهلهما دورات المقدمة.",
      language: "العربية",
      software: "متصفح إنترنت؛ لغة بايثون اختيارية إن رغبت في إعادة إجراء الحسابات بنفسك",
      prerequisites: [
        "جبر بمستوى الثانوية (حل معادلة من الدرجة الأولى، قراءة خط y = a x + b)",
        "القدرة على قراءة رسم بياني بسيط (سحابة نقاط، منحنى)",
        "لا حاجة لأي خبرة سابقة في البرمجة",
      ],
      summary: [
        "الجزء 1: الانحدار الخطي (linear regression)، اللبنة الأساسية للتعلم الآلي",
        "الجزء 2: التصنيف، الانحدار اللوجستي (logistic regression) والمقاييس (الدقة، الاستدعاء، ROC، AUC)",
        "الجزء 3: البيانات العددية والفئوية، التعميم والإفراط في التعلم (overfitting)",
        "الجزء 4: الشبكات العصبية والتضمينات (embeddings)",
        "الجزء 5: نماذج اللغة، من التتابعات اللغوية (n-grams) إلى النماذج الكبيرة الحالية",
        "الجزء 6: النشر في الإنتاج والتحيز والإنصاف",
      ],
      objectives: [
        "شرح ما يحسبه نموذج الانحدار الخطي فعليا وكيف يتعلم",
        "اختيار وتفسير دالة الخسارة (loss function): L1، L2، MAE، MSE",
        "قراءة مصفوفة الالتباس وحساب الدقة والاستدعاء ومقياس F1 يدويا",
        "فهم فائدة منحنى ROC وما تقيسه مساحة AUC",
        "التمييز بين البيانات العددية والفئوية، وكشف الإفراط في التعلم",
        "شرح استخدامات الشبكات العصبية والتضمينات",
        "وصف كيفية توقع نموذج اللغة للكلمة التالية، من n-grams إلى نماذج اللغة الكبيرة",
        "تعداد الأسئلة الواجب طرحها قبل نشر نموذج في الإنتاج، بما في ذلك مسألة التحيز",
      ],
      skills: [
        "الانحدار الخطي واللوجستي",
        "قراءة مصفوفة الالتباس",
        "حساب الدقة والاستدعاء ومقياس F1 ومنحنى ROC ومساحة AUC",
        "مفاهيم الشبكات العصبية والتضمينات",
        "أساسيات نماذج اللغة (الرموز tokens، n-grams، السياق)",
        "معايير النشر في الإنتاج والإنصاف الخوارزمي",
      ],
      parts: [
        "الانحدار الخطي: الخطوات الأولى",
        "التصنيف: من الانحدار اللوجستي إلى المقاييس",
        "البيانات والتعميم",
        "الشبكات العصبية والتضمينات",
        "نماذج اللغة",
        "الإنتاج والمسؤولية",
      ],
      lessons: {
        l1: "المصادر والترخيص والإفادة",
        l2: "مبدأ الانحدار الخطي (linear regression)",
        l3: "قياس الخطأ وتصحيحه: دالة الخسارة والانحدار التدريجي (gradient descent)",
        l4: "من الانحدار إلى التصنيف: الانحدار اللوجستي (logistic regression)",
        l5: "عتبة القرار (threshold) ومصفوفة الالتباس (confusion matrix)",
        l6: "الدقة والاستدعاء ومقياس F1",
        l7: "منحنى ROC ومساحة AUC",
        l8: "اختبار: التصنيف",
        l9: "البيانات العددية والفئوية",
        l10: "التعميم والإفراط في التعلم",
        l11: "اختبار: البيانات والتعميم",
        l12: "الشبكات العصبية: ما وراء النموذج الخطي",
        l13: "التضمينات (embeddings)",
        l14: "اختبار: الشبكات العصبية والتضمينات",
        l15: "الرموز (tokens) والتتابعات اللغوية (n-grams) والسياق",
        l16: "من الشبكات المتكررة إلى نماذج اللغة الكبيرة",
        l17: "اختبار: نماذج اللغة",
        l18: "نشر نموذج تعلم آلي في الإنتاج",
        l19: "التحيز والإنصاف والمسؤولية",
        l20: "اختبار: الإنتاج والمسؤولية",
      },
    },
  },
};

export default course;
