"use client";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-[3px] bg-primary px-5 py-2.5 text-sm font-semibold text-[#04130a] hover:bg-primary-deep"
    >
      {label}
    </button>
  );
}
