/**
 * Marque OmniLearn : un O ouvert (anneau rouge) dont l'ouverture est refermée
 * par une bille jaune posée sur le tracé. La même bille remplace le point du i
 * dans « Omni », c'est ce rappel qui rend la marque reconnaissable en petit
 * comme en grand. Sources vectorielles : public/brand/.
 */
export function LogoMark({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <path d="M39.17 13.33A20 20 0 1 0 50.67 24.83" fill="none" stroke="var(--color-primary)" strokeWidth="10" />
      <circle cx="46.14" cy="17.86" r="6.5" fill="var(--color-spark)"/>
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
        <span className="text-primary">Learn</span>
      </span>
    </span>
  );
}
