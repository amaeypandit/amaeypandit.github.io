"use client";

import { BentoTile } from "./BentoTile";
import { LinkButton } from "@/components/ui/Button";
import { SkillChip } from "@/components/ui/SkillChip";
import { LucideIcon, Download } from "lucide-react";

interface ResumeCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  downloadUrl: string;
  delay?: number;
}

export function ResumeCard({
  title,
  icon: Icon,
  skills,
  downloadUrl,
  delay = 0,
}: ResumeCardProps) {
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
