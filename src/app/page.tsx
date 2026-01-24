import {
  BentoGrid,
  CareerTimeline,
  ProfileCard,
  ResumeCard,
  ExperienceList,
  FeaturedProject,
  TechStackCloud,
} from "@/components/bento";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { resumes } from "@/data/resumes";

export default function Home() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <BentoGrid>
        {/* Hero Section */}
        <CareerTimeline />
        <ProfileCard />

        {/* Resume Hub Section */}
        <div className="col-span-1 md:col-span-4 mt-4">
          <SectionHeader>Specialized Paths</SectionHeader>
        </div>

        {resumes.map((resume, idx) => (
          <ResumeCard
            key={resume.id}
            title={resume.title}
            iconName={resume.iconName}
            skills={resume.skills}
            downloadUrl={resume.downloadUrl}
            delay={2 + idx}
          />
        ))}

        {/* Spacer for grid alignment - 4th column */}
        <div className="hidden md:block md:col-span-1" />

        {/* Experience Section */}
        <ExperienceList />

        {/* Projects & Tech Stack */}
        <FeaturedProject />
        <TechStackCloud />
      </BentoGrid>
    </main>
  );
}
