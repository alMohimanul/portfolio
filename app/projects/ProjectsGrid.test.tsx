import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectsGrid } from "./ProjectsGrid";
import type { RepoCardData } from "@/lib/github";

const REPOS: RepoCardData[] = [
  {
    name: "alpha",
    description: "a python tool",
    url: "https://github.com/alMohimanul/alpha",
    homepage: null,
    language: "Python",
    stars: 1,
    updatedAt: "2026-01-01T00:00:00Z",
    topics: [],
  },
  {
    name: "beta",
    description: "a typescript tool",
    url: "https://github.com/alMohimanul/beta",
    homepage: null,
    language: "TypeScript",
    stars: 9,
    updatedAt: "2025-01-01T00:00:00Z",
    topics: [],
  },
];

describe("ProjectsGrid", () => {
  it("renders every repo initially", () => {
    render(<ProjectsGrid repos={REPOS} />);
    expect(screen.getByText("alpha")).toBeInTheDocument();
    expect(screen.getByText("beta")).toBeInTheDocument();
  });

  it("filters by search query", async () => {
    const user = userEvent.setup();
    render(<ProjectsGrid repos={REPOS} />);
    await user.type(screen.getByLabelText("Search projects"), "beta");
    expect(screen.queryByText("alpha")).not.toBeInTheDocument();
    expect(screen.getByText("beta")).toBeInTheDocument();
  });

  it("filters by language", async () => {
    const user = userEvent.setup();
    render(<ProjectsGrid repos={REPOS} />);
    await user.selectOptions(screen.getByLabelText("Filter by language"), "TypeScript");
    expect(screen.queryByText("alpha")).not.toBeInTheDocument();
    expect(screen.getByText("beta")).toBeInTheDocument();
  });
});
