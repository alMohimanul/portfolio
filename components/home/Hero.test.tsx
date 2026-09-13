import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the profile name and a call-to-action to projects", () => {
    render(<Hero />);
    expect(screen.getByText("Al Mohimanul Islam")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Projects" })).toHaveAttribute("href", "/projects");
  });
});
