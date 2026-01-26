import {
  BentoGrid,
  CareerTimeline,
  ProfileCard,
  ResumeHub,
  ExperienceList,
  FeaturedProject,
  TechStackCloud,
} from "@/components/bento";

export default function Home() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <BentoGrid>
        {/* Hero Section */}
        <CareerTimeline />
        <ProfileCard />

        {/* Resume Hub Section */}
        <ResumeHub />

        {/* Experience Section */}
        <ExperienceList />

        {/* Projects & Tech Stack */}
        <FeaturedProject />
        <TechStackCloud />
      </BentoGrid>
    </main>
  );
}
