import { cn } from "@/lib/cn";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto p-4 md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
