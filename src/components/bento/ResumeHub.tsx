"use client";

import Link from "next/link";
import { BentoTile } from "./BentoTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillChip } from "@/components/ui/SkillChip";
import { Brain, BarChart3, Database, Download } from "lucide-react";
import { resumes, type IconName } from "@/data/resumes";

const iconMap = {
  brain: Brain,
  chart: BarChart3,
  database: Database,
};

export function ResumeHub() {
  return (
    <BentoTile colSpan={4} rowSpan={1} delay={2} className="overflow-hidden">
      <SectionHeader>My Resumes</SectionHeader>

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
              <div className="flex flex-wrap gap-2 mb-4">
                {resume.skills.map((skill) => (
                  <SkillChip key={skill} className="text-xs px-2 py-0.5">
                    {skill}
                  </SkillChip>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                  href={`/resume/${resume.slug}`}
                  className="flex-1 text-center text-sm py-2 px-3 rounded-lg border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors"
                >
                  View
                </Link>
                <a
                  href={resume.pdfPath}
                  download
                  className="flex items-center justify-center gap-1 text-sm py-2 px-3 rounded-lg bg-accent text-white hover:bg-accent-light transition-colors"
                >
                  <Download size={14} />
                  PDF
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </BentoTile>
  );
}
