"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BentoTile } from "./BentoTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillChip } from "@/components/ui/SkillChip";
import { experiences } from "@/data/experience";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function ExperienceList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <BentoTile colSpan={4} rowSpan={2} delay={5} className="overflow-hidden">
      <SectionHeader>Work Experience</SectionHeader>

      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-surface-hover/30 border border-border rounded-xl p-4 hover:border-accent/50 transition-colors"
          >
            {/* Card Header */}
            <div className="flex gap-4 mb-3">
              <div className="relative w-12 h-12 flex-shrink-0 bg-surface rounded-lg overflow-hidden border border-border">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-text-primary truncate">
                  {exp.company}
                </h3>
                <p className="text-text-secondary text-sm truncate">{exp.role}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-mono text-accent text-sm">{exp.startYear}</p>
                <p className="font-mono text-text-secondary text-sm">— {exp.endYear}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {exp.skills.slice(0, 4).map((skill) => (
                <SkillChip key={skill} className="text-xs px-2 py-0.5">
                  {skill}
                </SkillChip>
              ))}
            </div>

            {/* Expand Button */}
            <button
              onClick={() => toggleExpand(exp.id)}
              className="flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {expandedId === exp.id ? "Show less" : "Show more"}
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-300",
                  expandedId === exp.id && "rotate-180"
                )}
              />
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-text-secondary text-sm flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-1 text-accent text-sm mt-4 hover:underline"
                    >
                      View related projects
                      <ArrowRight size={14} />
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </BentoTile>
  );
}
