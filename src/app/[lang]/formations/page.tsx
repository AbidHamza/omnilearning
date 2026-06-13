import CatalogClient from "@/components/catalog-client";
import { getCategories, getCourses } from "@/lib/courses";

export default async function FormationsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; cat?: string }>;
}) {
  const { q, cat } = await searchParams;
  const [courses, categories] = await Promise.all([getCourses(), getCategories()]);
  return (
    <CatalogClient
      courses={courses}
      categories={categories}
      initialQ={q ?? ""}
      initialCat={cat ?? ""}
    />
  );
}
