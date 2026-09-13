import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

import ProjectDetailPage, { generateStaticParams } from "./page";

describe("ProjectDetailPage", () => {
  it("generates static params for every featured project", () => {
    expect(generateStaticParams()).toEqual(
      expect.arrayContaining([
        { slug: "prism" },
        { slug: "mavyn" },
        { slug: "screenly" },
        { slug: "syntai" },
      ])
    );
  });

  it("renders the matching project's title and highlights", async () => {
    const ui = await ProjectDetailPage({ params: Promise.resolve({ slug: "prism" }) });
    render(ui);
    expect(screen.getByText("PRISM")).toBeInTheDocument();
  });

  it("throws not found for an unknown slug", async () => {
    await expect(
      ProjectDetailPage({ params: Promise.resolve({ slug: "nonexistent" }) })
    ).rejects.toThrow();
  });
});
