import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCallout } from "./StatCallout";

describe("StatCallout", () => {
  it("renders the value and label", () => {
    render(<StatCallout label="Tail latency" value="77s → 18s" />);
    expect(screen.getByText("77s → 18s")).toBeInTheDocument();
    expect(screen.getByText("Tail latency")).toBeInTheDocument();
  });
});
