import { afterEach, describe, expect, it, vi } from "vitest";
import { GET } from "./route";

describe("GET /api/github-repos", () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("returns repos as JSON", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          name: "PRISM",
          description: "desc",
          html_url: "https://github.com/alMohimanul/PRISM",
          homepage: null,
          language: "Python",
          stargazers_count: 2,
          pushed_at: "2026-01-01T00:00:00Z",
          topics: [],
          fork: false,
        },
      ],
    }) as unknown as typeof fetch;

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.stale).toBe(false);
    expect(body.repos[0].name).toBe("PRISM");
  });
});
