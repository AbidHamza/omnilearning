import CatalogClient from "@/components/catalog-client";
import { categories, courses } from "@/lib/data";

export default async function FormationsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; cat?: string }>;
}) {
  const { q, cat } = await searchParams;
  return (
    <CatalogClient
      courses={courses}
      categories={categories}
      initialQ={q ?? ""}
      initialCat={cat ?? ""}
    />
  );
}
