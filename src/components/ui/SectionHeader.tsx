import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeader({ children, className }: SectionHeaderProps) {
  return (
    <h2
      className={cn(
        "text-xs uppercase tracking-[0.2em] text-text-secondary font-mono mb-6",
        className
      )}
    >
      {children}
    </h2>
  );
}
