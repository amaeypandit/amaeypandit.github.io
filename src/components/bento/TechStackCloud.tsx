"use client";

import { BentoTile } from "./BentoTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { techStack, categoryColors } from "@/data/techStack";
import { cn } from "@/lib/cn";

export function TechStackCloud() {
  return (
    <BentoTile colSpan={2} rowSpan={1} delay={8}>
      <SectionHeader>Tech Stack</SectionHeader>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm border",
              "transition-all duration-300 cursor-default",
              "hover:scale-105 hover:shadow-glow",
              categoryColors[tech.category]
            )}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </BentoTile>
  );
}
