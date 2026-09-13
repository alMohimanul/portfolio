import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionReveal } from "./SectionReveal";

describe("SectionReveal", () => {
  it("renders its children", () => {
    render(
      <SectionReveal>
        <p>Revealed content</p>
      </SectionReveal>
    );
    expect(screen.getByText("Revealed content")).toBeInTheDocument();
  });
});
