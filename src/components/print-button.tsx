"use client";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep"
    >
      {label}
    </button>
  );
}
