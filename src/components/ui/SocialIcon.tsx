"use client";

import { cn } from "@/lib/cn";
import { ComponentType } from "react";

interface SocialIconProps {
  icon: ComponentType<{ size?: number; className?: string }>;
  href: string;
  label: string;
  className?: string;
}

export function SocialIcon({ icon: Icon, href, label, className }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "text-text-secondary hover:text-accent transition-colors duration-300",
        className
      )}
    >
      <Icon size={24} />
    </a>
  );
}
