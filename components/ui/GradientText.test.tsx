import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { GradientText } from "./GradientText";

describe("GradientText", () => {
  it("applies the gradient-text class", () => {
    render(<GradientText>Hi</GradientText>);
    expect(screen.getByText("Hi")).toHaveClass("gradient-text");
  });
});
