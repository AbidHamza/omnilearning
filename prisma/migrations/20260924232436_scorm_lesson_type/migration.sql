-- Ajout additif : lecteur SCORM (nouveau type de leçon "scorm").
ALTER TABLE "Lesson" ADD COLUMN "scormPackagePath" TEXT;
ALTER TABLE "Lesson" ADD COLUMN "scormEntryPath" TEXT;
ALTER TABLE "Lesson" ADD COLUMN "scormVersion" TEXT;
ALTER TABLE "LessonProgress" ADD COLUMN "scormData" TEXT;
