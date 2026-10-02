import Link from "next/link";
import { ChevronDown } from "@/components/icons";

export type FaqItem = { q: string; a: string };

export default function CourseFaq({
  title,
  items,
  legalHref,
  legalLabel,
}: {
  title: string;
  items: FaqItem[];
  legalHref: string;
  legalLabel: string;
}) {
  return (
    <section className="mt-14 max-w-2xl">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-5 space-y-2">
        {items.map((item) => (
          <details key={item.q} className="rounded-lg bg-surface-2 px-5 open:bg-surface open:ring-1 open:ring-line">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-start text-[15px] font-semibold text-ink">
              {item.q}
              <ChevronDown width={18} height={18} className="faq-chevron shrink-0 text-muted" />
            </summary>
            <p className="pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
      <Link href={legalHref} className="mt-4 inline-block text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink">
        {legalLabel}
      </Link>
    </section>
  );
}
