/**
 * Seed : reconstruit une base réaliste et cohérente pour la démo.
 *  - Catégories (data.ts) + 8 formations réelles (src/lib/content/*)
 *  - 3 comptes de démo (étudiant / formateur / admin), uniquement avec SEED_DEMO=1 ;
 *    sans le drapeau ils sont retirés de la base s'ils existent encore
 *  - Badges déclaratifs (condition en JSON)
 *  - Purge des avis d'amorçage (aucun avis n'est plus fabriqué ici)
 *  - Apprenants « fantômes » pour peupler le classement (SEED_DEMO=1 seulement)
 *  - État de gamification riche pour l'étudiant de démo (XP, série, badges),
 *    adossé à de vraies inscriptions + leçons terminées + tentatives de quiz.
 *
 * Idempotent : upsert sur les clés stables, et purge ciblée de ce qui est
 * régénéré (parties/leçons, avis, activité de l'étudiant de démo).
 */
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";
import { categories } from "../src/lib/data";
import { contentCourses } from "../src/lib/content";
import { seedPricing } from "../src/lib/pricing";
import { badges, ghostLearners } from "./seed-data";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

// Barème XP : doit rester aligné sur src/lib/gamification.ts
const XP = {
  lesson_complete: 20,
  quiz_passed: 30,
  course_completed: 120,
} as const;
function xpToReachLevel(level: number) {
  return 50 * (level - 1) * level;
}
function levelForXp(xp: number) {
  let level = 1;
  while (xpToReachLevel(level + 1) <= xp) level++;
  return level;
}

function j(value: unknown): string | null {
  return value == null ? null : JSON.stringify(value);
}

const DAY = 86_400_000;

async function main() {
  console.log("Seeding…");

  // --- Catégories ---
  for (const c of categories) {
    await prisma.category.upsert({
      where: { slug: c.id },
      update: { label: c.label, icon: c.icon },
      create: { slug: c.id, label: c.label, icon: c.icon },
    });
  }
  console.log(`  ${categories.length} catégories`);

  // --- Comptes de démo ---
  const SEED_DEMO = process.env.SEED_DEMO === "1";
  let instructor: { id: string } | null = null;
  let student: { id: string } | null = null;
  if (SEED_DEMO) {
    const demoPassword = await bcrypt.hash("omni1234", 10);
    const demoAccounts = [
      { email: "etudiant@omnilearn.tech", name: "Laura Durand", role: "USER" },
      {
        email: "formateur@omnilearn.tech",
        name: "Pierre Martin",
        role: "INSTRUCTOR",
      },
      { email: "admin@omnilearn.tech", name: "Admin OmniLearn", role: "ADMIN" },
    ];
    for (const a of demoAccounts) {
      await prisma.user.upsert({
        where: { email: a.email },
        update: { name: a.name, role: a.role, password: demoPassword },
        create: {
          email: a.email,
          name: a.name,
          role: a.role,
          password: demoPassword,
        },
      });
    }
    console.log(`  ${demoAccounts.length} comptes de démo`);

    instructor = await prisma.user.findUnique({
      where: { email: "formateur@omnilearn.tech" },
    });
    student = await prisma.user.findUnique({
      where: { email: "etudiant@omnilearn.tech" },
    });
  } else {
    const demo = await prisma.user.findMany({
      where: {
        OR: [
          { email: { endsWith: "@omnilearn.tech" } },
          { email: { endsWith: "@learners.omnilearn.tech" } },
        ],
      },
      select: { id: true },
    });
    if (demo.length > 0) {
      const ids = demo.map((u) => u.id);
      await prisma.course.updateMany({
        where: { instructorId: { in: ids } },
        data: { instructorId: null },
      });
      await prisma.user.deleteMany({ where: { id: { in: ids } } });
    }
    console.log(`  ${demo.length} comptes de démo retirés`);
  }

  // --- Formations + parties + leçons ---
  for (const course of contentCourses) {
    // Le prix n'est écrit qu'à la CRÉATION. Le seed rejoue à chaque déploiement
    // et sa branche update écrase tout : y mettre le prix reviendrait à annuler
    // le tarif décidé en back-office à la mise en ligne suivante.
    const pricing = seedPricing(course.slug, course.level);
    const created = await prisma.course.upsert({
      where: { slug: course.slug },
      update: {
        title: course.title,
        tagline: course.tagline,
        description: course.description,
        category: course.category,
        level: course.level,
        instructorName: course.instructor,
        instructorBio: course.instructorBio ?? null,
        hours: course.hours,
        rating: course.rating,
        learners: course.learners,
        accent: course.accent,
        image: course.image,
        language: course.language ?? null,
        software: course.software ?? null,
        prerequisites: j(course.prerequisites),
        summary: j(course.summary),
        objectives: j(course.objectives),
        skills: j(course.skills),
        contentTypes: j(course.contentTypes),
        status: "PUBLISHED",
        instructorId: instructor?.id ?? null,
      },
      create: {
        slug: course.slug,
        title: course.title,
        tagline: course.tagline,
        description: course.description,
        category: course.category,
        level: course.level,
        instructorName: course.instructor,
        instructorBio: course.instructorBio ?? null,
        hours: course.hours,
        rating: course.rating,
        learners: course.learners,
        accent: course.accent,
        image: course.image,
        language: course.language ?? null,
        software: course.software ?? null,
        prerequisites: j(course.prerequisites),
        summary: j(course.summary),
        objectives: j(course.objectives),
        skills: j(course.skills),
        contentTypes: j(course.contentTypes),
        status: "PUBLISHED",
        accessType: pricing.accessType,
        priceCents: pricing.priceCents,
        currency: pricing.currency,
        pricingSeededAt: new Date(),
        instructorId: instructor?.id ?? null,
      },
    });

    // Rattrapage des cours créés avant l'ouverture de la boutique : ils sont
    // restés à 0. On pose le tarif une seule fois, marqué par pricingSeededAt,
    // et le seed n'y revient plus même s'il rejoue à chaque déploiement.
    if (created.pricingSeededAt === null) {
      await prisma.course.update({
        where: { id: created.id },
        data: {
          accessType: pricing.accessType,
          priceCents: pricing.priceCents,
          currency: pricing.currency,
          pricingSeededAt: new Date(),
        },
      });
    }

    await prisma.coursePart.deleteMany({ where: { courseId: created.id } });
    // Freemium : les 2 premières leçons du cours (ordre global, parties
    // confondues) restent consultables sans compte.
    let lessonRank = 0;
    for (const [pi, part] of course.parts.entries()) {
      const createdPart = await prisma.coursePart.create({
        data: { courseId: created.id, title: part.title, order: pi },
      });
      for (const [li, lesson] of part.lessons.entries()) {
        await prisma.lesson.create({
          data: {
            partId: createdPart.id,
            key: lesson.id,
            title: lesson.title,
            type: lesson.type,
            duration: lesson.duration,
            body: lesson.body ?? null,
            videoLabel: lesson.videoLabel ?? null,
            questions: j(lesson.questions),
            xp: lesson.type === "quiz" ? XP.quiz_passed : XP.lesson_complete,
            order: li,
            isFree: lessonRank < 2,
          },
        });
        lessonRank++;
      }
    }
  }

  // Purge des cours obsolètes (anciens seeds) qui ne font plus partie du
  // catalogue réel, cascade sur parties/leçons/avis/inscriptions.
  const keepSlugs = contentCourses.map((c) => c.slug);
  const removed = await prisma.course.deleteMany({
    where: { slug: { notIn: keepSlugs } },
  });
  if (removed.count > 0)
    console.log(`  ${removed.count} cours obsolètes retirés`);
  console.log(`  ${contentCourses.length} formations`);

  // --- Badges ---
  for (const b of badges) {
    await prisma.badge.upsert({
      where: { slug: b.slug },
      update: {
        label: b.label,
        description: b.description,
        icon: b.icon,
        tier: b.tier,
        condition: JSON.stringify(b.condition),
      },
      create: {
        slug: b.slug,
        label: b.label,
        description: b.description,
        icon: b.icon,
        tier: b.tier,
        condition: JSON.stringify(b.condition),
      },
    });
  }
  console.log(`  ${badges.length} badges`);

  // --- Avis ---
  // Le seed n'écrit plus d'avis. Ceux qu'il produisait n'étaient rattachés à
  // aucun compte : ils nourrissaient la note affichée sur la fiche et
  // l'aggregateRating du JSON-LD, soit une note fabriquée servie à Google.
  // getReviews() ne retient désormais que les avis signés par un compte ; la
  // purge ci-dessous efface ce qu'un ancien seed a laissé derrière lui.
  const nowMs = Date.now();
  const purgedReviews = await prisma.review.deleteMany({
    where: { userId: null },
  });
  console.log(`  ${purgedReviews.count} avis d'amorçage purgés`);

  // --- Apprenants fantômes (classement) ---
  if (SEED_DEMO)
    for (const [i, g] of ghostLearners.entries()) {
      const email = `apprenant-${i + 1}@learners.omnilearn.tech`;
      const u = await prisma.user.upsert({
        where: { email },
        update: { name: g.name, role: "USER" },
        create: { email, name: g.name, role: "USER" },
      });
      await prisma.userStats.upsert({
        where: { userId: u.id },
        update: { xp: g.xp, level: levelForXp(g.xp) },
        create: {
          userId: u.id,
          xp: g.xp,
          level: levelForXp(g.xp),
          currentStreak: 1 + (g.xp % 9),
          longestStreak: 3 + (g.xp % 21),
          lastActiveDate: new Date(nowMs - (g.xp % 5) * DAY),
        },
      });
    }
  if (SEED_DEMO) console.log(`  ${ghostLearners.length} apprenants fantômes`);

  // --- État riche de l'étudiant de démo ---
  if (student) {
    // Purge de l'activité régénérée pour rester idempotent.
    const prevEnrollments = await prisma.enrollment.findMany({
      where: { userId: student.id },
      select: { id: true },
    });
    const prevIds = prevEnrollments.map((e) => e.id);
    await prisma.lessonProgress.deleteMany({
      where: { enrollmentId: { in: prevIds } },
    });
    await prisma.quizAttempt.deleteMany({ where: { userId: student.id } });
    await prisma.xpEvent.deleteMany({ where: { userId: student.id } });
    await prisma.userBadge.deleteMany({ where: { userId: student.id } });
    await prisma.enrollment.deleteMany({ where: { userId: student.id } });

    // Trois cours : un bouclé, un bien avancé, un entamé.
    const plan: { slug: string; ratio: number }[] = [
      { slug: "commencer-le-html", ratio: 1 },
      { slug: "javascript-cours-expert", ratio: 0.45 },
      { slug: "figma-avance", ratio: 0.2 },
    ];

    for (const p of plan) {
      const course = await prisma.course.findUnique({
        where: { slug: p.slug },
        include: {
          parts: {
            orderBy: { order: "asc" },
            include: { lessons: { orderBy: { order: "asc" } } },
          },
        },
      });
      if (!course) continue;

      const lessons = course.parts.flatMap((pt) => pt.lessons);
      const toComplete = Math.max(1, Math.round(lessons.length * p.ratio));
      const done = lessons.slice(0, toComplete);
      const lastDone = done[done.length - 1];

      const progress = Math.round((done.length / lessons.length) * 100);
      const completed = progress >= 100;

      const enrollment = await prisma.enrollment.create({
        data: {
          userId: student.id,
          courseId: course.id,
          progress,
          lastLesson: lastDone?.key ?? null,
          lastAccessedAt: new Date(nowMs - DAY),
          completedAt: completed ? new Date(nowMs - DAY) : null,
        },
      });

      for (const [idx, lesson] of done.entries()) {
        // Étale les complétions sur les jours passés (crédibilité de la série).
        const when = new Date(nowMs - (done.length - idx) * (DAY / 2));
        await prisma.lessonProgress.create({
          data: {
            enrollmentId: enrollment.id,
            lessonId: lesson.id,
            isCompleted: true,
            completedAt: when,
          },
        });
        if (lesson.type === "quiz") {
          await prisma.quizAttempt.create({
            data: {
              userId: student.id,
              lessonId: lesson.id,
              answers: "[]",
              score: 4,
              maxScore: 4,
              isPassed: true,
            },
          });
          await prisma.xpEvent.create({
            data: {
              userId: student.id,
              amount: XP.quiz_passed,
              reason: "quiz_passed",
              refId: lesson.id,
              createdAt: when,
            },
          });
        } else {
          await prisma.xpEvent.create({
            data: {
              userId: student.id,
              amount: XP.lesson_complete,
              reason: "lesson_complete",
              refId: lesson.id,
              createdAt: when,
            },
          });
        }
      }

      if (completed) {
        await prisma.xpEvent.create({
          data: {
            userId: student.id,
            amount: XP.course_completed,
            reason: "course_completed",
            refId: course.id,
            createdAt: new Date(nowMs - DAY),
          },
        });
      }
    }

    // Stats dérivées + série crédible.
    const agg = await prisma.xpEvent.aggregate({
      where: { userId: student.id },
      _sum: { amount: true },
    });
    const xp = agg._sum.amount ?? 0;
    await prisma.userStats.upsert({
      where: { userId: student.id },
      update: {
        xp,
        level: levelForXp(xp),
        currentStreak: 4,
        longestStreak: 9,
        lastActiveDate: new Date(),
      },
      create: {
        userId: student.id,
        xp,
        level: levelForXp(xp),
        currentStreak: 4,
        longestStreak: 9,
        lastActiveDate: new Date(),
      },
    });

    // Attribution des badges gagnés d'après les compteurs réels.
    const [byReason, coursesCompleted] = await Promise.all([
      prisma.xpEvent.groupBy({
        by: ["reason"],
        where: { userId: student.id },
        _count: { _all: true },
      }),
      prisma.enrollment.count({
        where: { userId: student.id, completedAt: { not: null } },
      }),
    ]);
    const cnt = (r: string) =>
      byReason.find((b) => b.reason === r)?._count._all ?? 0;
    const counters: Record<string, number> = {
      xp,
      streak: 9,
      courses_completed: coursesCompleted,
      quizzes_passed: cnt("quiz_passed"),
      lessons_completed: cnt("lesson_complete"),
    };
    const allBadges = await prisma.badge.findMany();
    let earned = 0;
    for (const b of allBadges) {
      const cond = JSON.parse(b.condition) as {
        type: string;
        threshold: number;
      };
      if ((counters[cond.type] ?? 0) >= cond.threshold) {
        await prisma.userBadge.create({
          data: { userId: student.id, badgeId: b.id },
        });
        earned++;
      }
    }
    console.log(
      `  étudiant de démo : ${plan.length} cours, ${xp} XP, ${earned} badges`,
    );
  }

  console.log("Seed terminé.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
