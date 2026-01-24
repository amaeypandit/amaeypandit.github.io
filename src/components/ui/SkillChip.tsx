import { cn } from "@/lib/cn";

interface SkillChipProps {
  children: React.ReactNode;
  className?: string;
}

export function SkillChip({ children, className }: SkillChipProps) {
  return (
    <span className={cn("skill-chip", className)}>
      {children}
    </span>
  );
}
