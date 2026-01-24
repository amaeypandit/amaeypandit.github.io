"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoTile } from "./BentoTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
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

      <div className="space-y-2">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-b border-border last:border-b-0">
            <button
              onClick={() => toggleExpand(exp.id)}
              className="w-full py-4 flex items-center justify-between text-left hover:bg-surface-hover/50 -mx-2 px-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-4 md:gap-8">
                <span className="font-mono text-accent font-bold min-w-[100px]">
                  {exp.startYear} — {exp.endYear}
                </span>
                <div>
                  <span className="text-text-primary font-display font-bold">
                    {exp.company}
                  </span>
                  <span className="text-text-secondary mx-2">—</span>
                  <span className="text-text-secondary">{exp.role}</span>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-text-secondary transition-transform duration-300",
                  expandedId === exp.id && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {expandedId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 pl-4 md:pl-[132px]">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-text-secondary flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5">•</span>
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
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </BentoTile>
  );
}
