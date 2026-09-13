import { Hero } from "@/components/home/Hero";
import { SkillsGrid } from "@/components/home/SkillsGrid";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { ExperienceTeaser } from "@/components/home/ExperienceTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsGrid />
      <FeaturedProjectsSection />
      <ExperienceTeaser />
    </>
  );
}
