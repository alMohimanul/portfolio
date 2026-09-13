import { describe, expect, it } from "vitest";
import { filterRepos, sortRepos } from "./projectFilters";
import type { RepoCardData } from "./github";

function buildRepo(overrides: Partial<RepoCardData> = {}): RepoCardData {
  return {
    name: "repo",
    description: "description",
    url: "https://github.com/alMohimanul/repo",
    homepage: null,
    language: "Python",
    stars: 0,
    updatedAt: "2026-01-01T00:00:00Z",
    topics: [],
    ...overrides,
  };
}

describe("filterRepos", () => {
  it("matches on name or description, case-insensitively", () => {
    const repos = [buildRepo({ name: "SyntAI" }), buildRepo({ name: "other", description: "syntai helper" })];
    expect(filterRepos(repos, { query: "syntai", language: null })).toHaveLength(2);
  });

  it("filters by exact language match", () => {
    const repos = [buildRepo({ language: "Python" }), buildRepo({ language: "TypeScript" })];
    const result = filterRepos(repos, { query: "", language: "TypeScript" });
    expect(result).toHaveLength(1);
    expect(result[0].language).toBe("TypeScript");
  });
});

describe("sortRepos", () => {
  it("sorts by stars descending", () => {
    const repos = [buildRepo({ name: "a", stars: 1 }), buildRepo({ name: "b", stars: 5 })];
    expect(sortRepos(repos, "stars").map((r) => r.name)).toEqual(["b", "a"]);
  });

  it("sorts by most recently updated", () => {
    const repos = [
      buildRepo({ name: "old", updatedAt: "2024-01-01T00:00:00Z" }),
      buildRepo({ name: "new", updatedAt: "2026-01-01T00:00:00Z" }),
    ];
    expect(sortRepos(repos, "updated").map((r) => r.name)).toEqual(["new", "old"]);
  });
});
