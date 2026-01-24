"use client";

import { BentoTile } from "./BentoTile";
import { LinkButton } from "@/components/ui/Button";
import { SkillChip } from "@/components/ui/SkillChip";
import { Brain, BarChart3, Database, Download } from "lucide-react";
import type { IconName } from "@/data/resumes";

const iconMap = {
  brain: Brain,
  chart: BarChart3,
  database: Database,
};

interface ResumeCardProps {
  title: string;
  iconName: IconName;
  skills: string[];
  downloadUrl: string;
  delay?: number;
}

export function ResumeCard({
  title,
  iconName,
  skills,
  downloadUrl,
  delay = 0,
}: ResumeCardProps) {
  const Icon = iconMap[iconName];

  return (
    <BentoTile colSpan={1} rowSpan={1} delay={delay} className="flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-accent" />
        <h3 className="font-display font-bold text-text-primary">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 flex-1">
        {skills.map((skill) => (
          <SkillChip key={skill}>{skill}</SkillChip>
        ))}
      </div>

      <LinkButton
        href={downloadUrl}
        variant="outline"
        size="sm"
        className="w-full flex items-center justify-center gap-2"
        download
      >
        <Download size={16} />
        Download CV
      </LinkButton>
    </BentoTile>
  );
}
