"use client";

import Image from "next/image";
import { BentoTile } from "./BentoTile";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function ProfileCard() {
  return (
    <BentoTile colSpan={1} rowSpan={2} delay={1} className="flex flex-col items-center justify-between">
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border hover:border-accent transition-colors duration-300">
          <Image
            src={profile.headshot}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <h2 className="text-xl font-display font-bold text-text-primary">
          {profile.name}
        </h2>
        <p className="text-text-secondary text-sm mt-1">{profile.location}</p>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <SocialIcon
          icon={Linkedin}
          href={profile.socials.linkedin}
          label="LinkedIn"
        />
        <SocialIcon
          icon={Github}
          href={profile.socials.github}
          label="GitHub"
        />
        <SocialIcon
          icon={Twitter}
          href={profile.socials.twitter}
          label="Twitter"
        />
        <SocialIcon
          icon={Mail}
          href={`mailto:${profile.email}`}
          label="Email"
        />
      </div>
    </BentoTile>
  );
}
