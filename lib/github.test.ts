import { afterEach, describe, expect, it, vi } from "vitest";
import { filterAndMapRepos, getGithubRepos, type GithubRepo } from "./github";

function buildRepo(overrides: Partial<GithubRepo> = {}): GithubRepo {
  return {
    name: "sample-repo",
    description: "A sample repo",
    html_url: "https://github.com/alMohimanul/sample-repo",
    homepage: null,
    language: "TypeScript",
    stargazers_count: 3,
    pushed_at: "2026-01-01T00:00:00Z",
    topics: ["web"],
    fork: false,
    ...overrides,
  };
}

describe("filterAndMapRepos", () => {
  it("excludes forked repos", () => {
    const repos = [buildRepo({ name: "a", fork: false }), buildRepo({ name: "b", fork: true })];
    expect(filterAndMapRepos(repos).map((r) => r.name)).toEqual(["a"]);
  });

  it("excludes the profile readme repo", () => {
    const repos = [buildRepo({ name: "alMohimanul" }), buildRepo({ name: "PRISM" })];
    expect(filterAndMapRepos(repos).map((r) => r.name)).toEqual(["PRISM"]);
  });

  it("maps raw fields to the card shape, defaulting a missing description", () => {
    const repos = [buildRepo({ description: null })];
    expect(filterAndMapRepos(repos)[0]).toMatchObject({
      name: "sample-repo",
      description: "No description provided.",
      url: "https://github.com/alMohimanul/sample-repo",
      language: "TypeScript",
      stars: 3,
    });
  });

  it("sorts by most recently updated first", () => {
    const repos = [
      buildRepo({ name: "old", pushed_at: "2024-01-01T00:00:00Z" }),
      buildRepo({ name: "new", pushed_at: "2026-01-01T00:00:00Z" }),
    ];
    expect(filterAndMapRepos(repos).map((r) => r.name)).toEqual(["new", "old"]);
  });
});

describe("getGithubRepos", () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("returns filtered live data when the GitHub API succeeds", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [buildRepo({ name: "PRISM" })],
    }) as unknown as typeof fetch;

    const result = await getGithubRepos();
    expect(result.stale).toBe(false);
    expect(result.repos.map((r) => r.name)).toEqual(["PRISM"]);
  });

  it("falls back to the static list when the GitHub API responds with an error status", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 }) as unknown as typeof fetch;

    const result = await getGithubRepos();
    expect(result.stale).toBe(true);
    expect(result.repos.length).toBeGreaterThan(0);
  });

  it("falls back to the static list when fetch throws", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("network error")) as unknown as typeof fetch;

    const result = await getGithubRepos();
    expect(result.stale).toBe(true);
  });
});
