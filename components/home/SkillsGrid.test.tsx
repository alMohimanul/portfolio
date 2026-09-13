import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkillsGrid } from "./SkillsGrid";

describe("SkillsGrid", () => {
  it("renders every skill category", () => {
    render(<SkillsGrid />);
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("ML & AI")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });
});
