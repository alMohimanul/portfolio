import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  return { title: project ? project.title : "Project" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="flex flex-col gap-8">
      <SectionReveal>
        <h1 className="text-4xl font-bold">
          <GradientText>{project.title}</GradientText>
        </h1>
        <p className="mt-2 text-lg opacity-70">{project.tagline}</p>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <GlassCard>
          <p className="opacity-90">{project.description}</p>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs">
              {tech}
            </span>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <GlassCard>
          <h2 className="mb-4 text-xl font-bold">Highlights</h2>
          <ul className="flex flex-col gap-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 opacity-90">
                <span aria-hidden>—</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionReveal>

      <SectionReveal delay={0.25}>
        <div className="flex gap-4 text-sm font-semibold">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              View on GitHub →
            </a>
          ) : null}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Live Demo →
            </a>
          ) : null}
        </div>
      </SectionReveal>
    </article>
  );
}
