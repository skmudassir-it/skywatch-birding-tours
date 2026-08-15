import {
  Binoculars,
  Sunrise,
  Route,
  Camera,
  Users,
  GraduationCap,
  TentTree,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Binoculars,
  Sunrise,
  Route,
  Camera,
  Users,
  GraduationCap,
  TentTree,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Binoculars;
  return <Icon className={className} />;
}
