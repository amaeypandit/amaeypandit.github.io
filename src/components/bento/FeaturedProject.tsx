"use client";

import Image from "next/image";
import { BentoTile } from "./BentoTile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillChip } from "@/components/ui/SkillChip";
import { featuredProject } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

export function FeaturedProject() {
  return (
    <BentoTile colSpan={2} rowSpan={1} delay={7} className="overflow-hidden group" id="projects">
      <SectionHeader>Featured Project</SectionHeader>

      <div className="relative h-32 -mx-6 -mt-2 mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent z-10" />
        <Image
          src={featuredProject.image}
          alt={featuredProject.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="font-display font-bold text-xl text-text-primary mb-2">
        {featuredProject.title}
      </h3>

      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
        {featuredProject.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {featuredProject.techStack.slice(0, 4).map((tech) => (
          <SkillChip key={tech}>{tech}</SkillChip>
        ))}
      </div>

      <div className="flex gap-3">
        {featuredProject.githubUrl && (
          <a
            href={featuredProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={20} />
          </a>
        )}
        {featuredProject.liveUrl && (
          <a
            href={featuredProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="View live site"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </BentoTile>
  );
}
