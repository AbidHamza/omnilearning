/**
 * Seed — alimente la DB avec les données de démo existantes (rien de visuel perdu).
 * - Catégories + 6 formations (importées telles quelles depuis src/lib/data.ts)
 * - 3 comptes de démo (mêmes identifiants que l'ancien accounts.ts), mots de passe
 *   hashés en bcrypt.
 * - Quelques inscriptions/progressions pour l'étudiant de démo.
 *
 * Idempotent : utilise upsert sur les clés stables (slug/email/key).
 */
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";
import { categories, courses, studentUser } from "../src/lib/data";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

function j(value: unknown): string | null {
  return value == null ? null : JSON.stringify(value);
}

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

  // --- Comptes de démo (mots de passe hashés) ---
  const demoPassword = await bcrypt.hash("omni1234", 10);
  const demoAccounts = [
    { email: "etudiant@omnilearn.tech", name: "Laura Durand", role: "USER" },
    { email: "formateur@omnilearn.tech", name: "Pierre Martin", role: "INSTRUCTOR" },
    { email: "admin@omnilearn.tech", name: "Admin OmniLearn", role: "ADMIN" },
  ];
  for (const a of demoAccounts) {
    await prisma.user.upsert({
      where: { email: a.email },
      update: { name: a.name, role: a.role, password: demoPassword },
      create: { email: a.email, name: a.name, role: a.role, password: demoPassword },
    });
  }
  console.log(`  ${demoAccounts.length} comptes de démo`);

  const instructor = await prisma.user.findUnique({
    where: { email: "formateur@omnilearn.tech" },
  });

  // --- Formations + parties + leçons ---
  for (const course of courses) {
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
        instructorId: instructor?.id ?? null,
      },
    });

    // Reconstruit parties/leçons (delete-then-create pour rester idempotent)
    await prisma.coursePart.deleteMany({ where: { courseId: created.id } });
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
            order: li,
          },
        });
      }
    }
  }
  console.log(`  ${courses.length} formations`);

  // --- Inscriptions + progression de l'étudiant de démo ---
  const student = await prisma.user.findUnique({
    where: { email: "etudiant@omnilearn.tech" },
  });
  if (student) {
    for (const e of studentUser.enrolled) {
      const course = await prisma.course.findUnique({ where: { slug: e.slug } });
      if (!course) continue;
      await prisma.enrollment.upsert({
        where: { userId_courseId: { userId: student.id, courseId: course.id } },
        update: { progress: e.progress, lastLesson: e.lastLesson, lastAccessedAt: new Date() },
        create: {
          userId: student.id,
          courseId: course.id,
          progress: e.progress,
          lastLesson: e.lastLesson,
          lastAccessedAt: new Date(),
        },
      });
    }
    console.log(`  ${studentUser.enrolled.length} inscriptions de démo`);
  }

  console.log("Seed terminé.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
