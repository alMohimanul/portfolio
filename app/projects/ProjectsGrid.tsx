"use client";

import { useMemo, useState } from "react";
import type { RepoCardData } from "@/lib/github";
import { filterRepos, sortRepos, type SortOption } from "@/lib/projectFilters";
import { RepoCard } from "@/components/projects/RepoCard";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function ProjectsGrid({ repos }: { repos: RepoCardData[] }) {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("updated");

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((repo) => {
      if (repo.language) set.add(repo.language);
    });
    return Array.from(set).sort();
  }, [repos]);

  const visibleRepos = useMemo(() => {
    const filtered = filterRepos(repos, { query, language });
    return sortRepos(filtered, sortBy);
  }, [repos, query, language, sortBy]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          aria-label="Search projects"
          className="glass-card rounded-full px-4 py-2 text-sm outline-none"
        />
        <select
          value={language ?? ""}
          onChange={(e) => setLanguage(e.target.value || null)}
          aria-label="Filter by language"
          className="glass-card rounded-full px-4 py-2 text-sm"
        >
          <option value="">All languages</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          aria-label="Sort projects"
          className="glass-card rounded-full px-4 py-2 text-sm"
        >
          <option value="updated">Recently updated</option>
          <option value="stars">Most stars</option>
        </select>
      </div>

      {visibleRepos.length === 0 ? (
        <p className="text-center text-sm opacity-60">No projects match those filters.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRepos.map((repo, i) => (
            <SectionReveal key={repo.name} delay={(i % 6) * 0.05}>
              <RepoCard repo={repo} />
            </SectionReveal>
          ))}
        </div>
      )}
    </div>
  );
}
