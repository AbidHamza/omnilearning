/**
 * Marque OmniLearn : un anneau rouge (le O) et une bille jaune qui s'en
 * échappe. La même bille remplace le point du i dans « Omni », c'est ce
 * rappel qui rend la marque reconnaissable en petit comme en grand.
 */
export function LogoMark({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="21" cy="26" r="14" fill="none" stroke="var(--color-primary)" strokeWidth="8.5" />
      <circle cx="37.5" cy="9.5" r="6.5" fill="var(--color-spark)" />
    </svg>
  );
}

export default function Logo({ mark = true, className = "" }: { mark?: boolean; className?: string }) {
  return (
    <span dir="ltr" className={`inline-flex items-center gap-2 ${className}`}>
      {mark && <LogoMark />}
      <span className="font-display text-[22px] font-semibold tracking-tight text-ink">
        Omn
        <span className="relative">
          ı<span className="logo-dot" />
        </span>
        <span className="italic text-primary">Learn</span>
      </span>
    </span>
  );
}
