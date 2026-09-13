const GITHUB_USERNAME = "alMohimanul";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;
const REVALIDATE_SECONDS = 21600;

export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  topics: string[];
  fork: boolean;
}

export interface RepoCardData {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
  topics: string[];
}

export const FALLBACK_REPOS: RepoCardData[] = [
  {
    name: "PRISM",
    description: "Multi-agent research assistant using RAG and LangGraph orchestration.",
    url: "https://github.com/alMohimanul/PRISM",
    homepage: null,
    language: "Python",
    stars: 0,
    updatedAt: "2026-01-01T00:00:00Z",
    topics: [],
  },
  {
    name: "SyntAI",
    description: "Web research assistant for academic papers.",
    url: "https://github.com/alMohimanul/SyntAI",
    homepage: null,
    language: "Python",
    stars: 1,
    updatedAt: "2025-11-01T00:00:00Z",
    topics: [],
  },
  {
    name: "MaatriCare",
    description: "Bengali-language assistant for pregnancy and health questions.",
    url: "https://github.com/alMohimanul/MaatriCare",
    homepage: null,
    language: "Python",
    stars: 0,
    updatedAt: "2025-10-01T00:00:00Z",
    topics: [],
  },
  {
    name: "mavyn",
    description: "Fully offline research assistant for a local folder of PDFs.",
    url: "https://github.com/alMohimanul/mavyn",
    homepage: null,
    language: "Python",
    stars: 0,
    updatedAt: "2025-09-01T00:00:00Z",
    topics: [],
  },
];

export function filterAndMapRepos(rawRepos: GithubRepo[]): RepoCardData[] {
  return rawRepos
    .filter((repo) => !repo.fork && repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? "No description provided.",
      url: repo.html_url,
      homepage: repo.homepage || null,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.pushed_at,
      topics: repo.topics ?? [],
    }))
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export async function getGithubRepos(): Promise<{ repos: RepoCardData[]; stale: boolean }> {
  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) {
      throw new Error(`GitHub API responded ${response.status}`);
    }
    const data: GithubRepo[] = await response.json();
    return { repos: filterAndMapRepos(data), stale: false };
  } catch {
    return { repos: FALLBACK_REPOS, stale: true };
  }
}
