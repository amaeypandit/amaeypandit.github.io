"use client";

import { BentoTile } from "./BentoTile";
import { LinkButton } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function CareerTimeline() {
  return (
    <BentoTile colSpan={3} rowSpan={2} delay={0} className="flex flex-col justify-between">
      <div>
        <p className="text-accent font-mono text-sm uppercase tracking-wider mb-4">
          {profile.headline}
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6">
          {profile.name}
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary mb-6 leading-relaxed">
          {profile.tagline}
        </p>

        <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {profile.bio}
        </p>

        <p className="text-accent font-medium mt-6 text-sm md:text-base">
          {profile.lookingFor}
        </p>
      </div>

      <div className="mt-8">
        <LinkButton
          href={`mailto:${profile.email}`}
          variant="solid"
          className="w-full md:w-auto"
        >
          Get In Touch
        </LinkButton>
      </div>
    </BentoTile>
  );
}
