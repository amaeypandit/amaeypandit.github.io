"use client";

import { BentoTile } from "./BentoTile";
import { LinkButton } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function CareerTimeline() {
  return (
    <BentoTile colSpan={3} rowSpan={2} delay={0} className="flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="pulse-dot pl-4 text-accent font-mono text-sm uppercase tracking-wider">
            Currently
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-4">
          {profile.currentRole}
        </h1>

        <p className="text-xl text-text-secondary mb-2">
          at <span className="text-text-primary">{profile.currentCompany}</span>
        </p>

        <p className="text-text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
          {profile.tagline}
        </p>
      </div>

      <div className="mt-8">
        <LinkButton
          href={`mailto:${profile.email}`}
          variant="solid"
          className="w-full md:w-auto"
        >
          Hire Me
        </LinkButton>
      </div>
    </BentoTile>
  );
}
