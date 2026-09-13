import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FeaturedProjectsSection } from "./FeaturedProjectsSection";

describe("FeaturedProjectsSection", () => {
  it("renders all four featured projects", () => {
    render(<FeaturedProjectsSection />);
    expect(screen.getByText("PRISM")).toBeInTheDocument();
    expect(screen.getByText("Mavyn")).toBeInTheDocument();
    expect(screen.getByText("Screenly")).toBeInTheDocument();
    expect(screen.getByText("SyntAI")).toBeInTheDocument();
  });
});
