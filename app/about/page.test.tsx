import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders education, publications, and awards", () => {
    render(<AboutPage />);
    expect(screen.getByText("United International University")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Polyp Segmentation in Colonoscopy Images using DeepLabV3++" })
    ).toHaveAttribute("href", "https://www.sciencedirect.com/science/article/abs/pii/S0010482525013381");
    expect(screen.getByText(/1st place, internal hackathon/)).toBeInTheDocument();
  });
});
