import type { SVGProps } from "react";
import {
  BriefcaseIcon,
  CloudIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  PaletteIcon,
  ServerIcon,
  ShieldIcon,
  WifiIcon,
} from "./icons";

const registry: Record<string, (p: SVGProps<SVGSVGElement>) => React.ReactElement> = {
  code: CodeIcon,
  database: DatabaseIcon,
  shield: ShieldIcon,
  cpu: CpuIcon,
  cloud: CloudIcon,
  palette: PaletteIcon,
  briefcase: BriefcaseIcon,
  wifi: WifiIcon,
  server: ServerIcon,
};

export default function CategoryIcon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const Icon = registry[name] ?? CodeIcon;
  return <Icon {...props} />;
}
