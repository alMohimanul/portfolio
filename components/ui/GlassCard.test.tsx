import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { GlassCard } from "./GlassCard";

describe("GlassCard", () => {
  it("renders children inside a glass-styled container", () => {
    render(<GlassCard>Hello</GlassCard>);
    expect(screen.getByText("Hello")).toHaveClass("glass-card");
  });
});
