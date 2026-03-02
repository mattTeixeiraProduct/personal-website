import { iconLibrary, type IconName } from "@/resources/icons";
import { cn } from "@/lib/utils";

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 16 }: IconProps) {
  const IconComponent = iconLibrary[name];
  if (!IconComponent) return null;
  return <IconComponent className={cn(className)} size={size} />;
}
