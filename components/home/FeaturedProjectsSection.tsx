import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GradientText } from "@/components/ui/GradientText";

export function FeaturedProjectsSection() {
  return (
    <section className="mt-24">
      <SectionReveal>
        <h2 className="mb-8 text-center text-3xl font-bold">
          <GradientText>Featured Projects</GradientText>
        </h2>
      </SectionReveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <SectionReveal key={project.slug} delay={i * 0.05}>
            <FeaturedProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/projects" className="text-sm font-semibold underline underline-offset-4">
          View all projects →
        </Link>
      </div>
    </section>
  );
}
