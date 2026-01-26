import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { aboutData } from "@/data/about";

// Custom Medium icon to match lucide style
const MediumIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M13.5 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" />
    <path d="M18.5 12a2.5 5.5 0 1 1-5 0 2.5 5.5 0 0 1 5 0Z" />
    <path d="M21.5 12a1 5.5 0 1 1-2 0 1 5.5 0 0 1 2 0Z" />
  </svg>
);

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  medium: MediumIcon,
};

export const metadata = {
  title: "About | Amaey Pandit",
  description: "Learn more about Amaey Pandit - background, journey, and interests.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-border">
              <Image
                src={profile.headshot}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
                {aboutData.headline}
              </h1>
              {aboutData.bio.map((paragraph, idx) => (
                <p key={idx} className="text-text-secondary mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-text-primary mb-6 pb-2 border-b border-border">
            My Journey
          </h2>
          {aboutData.journey.map((paragraph, idx) => (
            <p key={idx} className="text-text-secondary mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Beyond Work Section */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-text-primary mb-6 pb-2 border-b border-border">
            Beyond Work
          </h2>
          <p className="text-text-secondary mb-6">
            {aboutData.beyondWork.description}
          </p>
          {aboutData.beyondWork.images.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {aboutData.beyondWork.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-lg overflow-hidden border border-border"
                >
                  <Image
                    src={image}
                    alt={`Personal photo ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="font-display font-bold text-2xl text-text-primary mb-6 pb-2 border-b border-border">
            Get In Touch
          </h2>
          <p className="text-text-secondary mb-6">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about data and AI.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={`mailto:${aboutData.contact.email}`}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <Mail size={20} />
              {aboutData.contact.email}
            </a>
          </div>

          <div className="flex gap-4 mb-8">
            {Object.entries(aboutData.contact.socials).map(([platform, url]) => {
              if (!url) return null;
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors"
                  aria-label={platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <Link
            href={`mailto:${aboutData.contact.email}`}
            className="btn-solid inline-flex items-center gap-2"
          >
            {aboutData.contact.cta}
            <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}
