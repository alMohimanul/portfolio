import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ExperiencePage from "./page";

describe("ExperiencePage", () => {
  it("renders every experience entry's company", () => {
    render(<ExperiencePage />);
    expect(screen.getAllByText("Markopolo AI Inc")).toHaveLength(2);
    expect(screen.getByText("Nodes Digital Limited")).toBeInTheDocument();
  });
});
