import type { RepoCardData } from "./github";

export type SortOption = "stars" | "updated";

export function filterRepos(
  repos: RepoCardData[],
  opts: { query: string; language: string | null }
): RepoCardData[] {
  const query = opts.query.trim().toLowerCase();
  return repos.filter((repo) => {
    const matchesQuery =
      query === "" ||
      repo.name.toLowerCase().includes(query) ||
      repo.description.toLowerCase().includes(query);
    const matchesLanguage = !opts.language || repo.language === opts.language;
    return matchesQuery && matchesLanguage;
  });
}

export function sortRepos(repos: RepoCardData[], sortBy: SortOption): RepoCardData[] {
  const copy = [...repos];
  if (sortBy === "stars") {
    return copy.sort((a, b) => b.stars - a.stars);
  }
  return copy.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}
