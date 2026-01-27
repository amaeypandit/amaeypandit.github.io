"use client";

import { BentoTile } from "./BentoTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillChip } from "@/components/ui/SkillChip";
import { Brain, BarChart3, Database } from "lucide-react";
import { resumes } from "@/data/resumes";

const iconMap = {
  brain: Brain,
  chart: BarChart3,
  database: Database,
};

export function ResumeHub() {
  return (
    <BentoTile colSpan={4} rowSpan={1} delay={2} className="overflow-hidden">
      <SectionHeader>Areas of Expertise</SectionHeader>

      <div className="grid gap-4 md:grid-cols-3">
        {resumes.map((resume) => {
          const Icon = iconMap[resume.iconName];
          return (
            <div
              key={resume.id}
              className="bg-surface-hover/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-accent" />
                <h3 className="font-display font-bold text-text-primary">
                  {resume.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill) => (
                  <SkillChip key={skill} className="text-xs px-2 py-0.5">
                    {skill}
                  </SkillChip>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </BentoTile>
  );
}
