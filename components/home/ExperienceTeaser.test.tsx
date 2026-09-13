import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExperienceTeaser } from "./ExperienceTeaser";

describe("ExperienceTeaser", () => {
  it("highlights the current role and links to the full experience page", () => {
    render(<ExperienceTeaser />);
    expect(screen.getByText(/Software Engineer II, Machine Learning/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /See full experience/ })).toHaveAttribute("href", "/experience");
  });
});
