import { GlassCard } from "@/components/ui/GlassCard";
import type { RepoCardData } from "@/lib/github";

export function RepoCard({ repo }: { repo: RepoCardData }) {
  return (
    <GlassCard className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold">{repo.name}</h3>
        <span className="text-xs opacity-60">★ {repo.stars}</span>
      </div>
      <p className="line-clamp-3 text-sm opacity-80">{repo.description}</p>
      <div className="mt-auto flex items-center justify-between pt-2 text-xs opacity-60">
        <span>{repo.language ?? "—"}</span>
        <span>{new Date(repo.updatedAt).toLocaleDateString()}</span>
      </div>
      <a
        href={repo.homepage || repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold underline underline-offset-4"
      >
        View →
      </a>
    </GlassCard>
  );
}
