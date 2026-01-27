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

        {/* Experience Section */}
        <ExperienceList />

        {/* Areas of Expertise */}
        <ResumeHub />

        {/* Projects & Tech Stack */}
        <FeaturedProject />
        <TechStackCloud />
      </BentoGrid>
    </main>
  );
}
