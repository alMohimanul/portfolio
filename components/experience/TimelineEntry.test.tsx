import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimelineEntry } from "./TimelineEntry";
import type { ExperienceEntry } from "@/data/types";

const ENTRY: ExperienceEntry = {
  company: "Test Co",
  role: "Engineer",
  location: "Remote",
  startDate: "Jan 2024",
  endDate: "Present",
  bullets: ["Did a thing.", "Did another thing."],
  stats: [{ label: "Impact", value: "2x" }],
};

describe("TimelineEntry", () => {
  it("renders role, company, bullets, and stats", () => {
    render(<TimelineEntry entry={ENTRY} />);
    expect(screen.getByText(/Engineer/)).toBeInTheDocument();
    expect(screen.getByText("Test Co")).toBeInTheDocument();
    expect(screen.getByText("Did a thing.")).toBeInTheDocument();
    expect(screen.getByText("2x")).toBeInTheDocument();
  });
});
