import type { Metadata } from "next";
import { featuredProjects } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GradientText } from "@/components/ui/GradientText";
import { getGithubRepos } from "@/lib/github";
import { ProjectsGrid } from "./ProjectsGrid";

export const metadata: Metadata = { title: "Projects" };
export const revalidate = 21600;

export default async function ProjectsPage() {
  const { repos, stale } = await getGithubRepos();

  return (
    <div className="flex flex-col gap-24">
      <section>
        <SectionReveal>
          <h1 className="mb-8 text-center text-4xl font-bold">
            <GradientText>Featured Projects</GradientText>
          </h1>
        </SectionReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.05}>
              <FeaturedProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </section>

      <section>
        <SectionReveal>
          <h2 className="mb-2 text-center text-3xl font-bold">
            <GradientText>All Projects</GradientText>
          </h2>
          <p className="mb-8 text-center text-sm opacity-60">
            Pulled live from GitHub{stale ? " (showing a cached list — GitHub API unavailable)" : ""}
          </p>
        </SectionReveal>
        <ProjectsGrid repos={repos} />
      </section>
    </div>
  );
}
