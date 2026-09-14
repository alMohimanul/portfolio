import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import type { FeaturedProject } from "@/data/types";

export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <GlassCard className="gradient-border-glow flex h-full flex-col gap-3">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-sm font-medium opacity-70">{project.tagline}</p>
      <p className="text-sm opacity-80">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border px-2.5 py-0.5 text-xs">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4 pt-2 text-sm font-semibold">
        <Link href={`/projects/${project.slug}`} className="underline underline-offset-4">
          Case study →
        </Link>
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            GitHub
          </a>
        ) : null}
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            Live Demo
          </a>
        ) : null}
      </div>
    </GlassCard>
  );
}
