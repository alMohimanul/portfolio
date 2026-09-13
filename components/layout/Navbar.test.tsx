import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./Navbar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navbar", () => {
  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("toggles the mobile menu open and closed", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Toggle navigation menu" }));
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Toggle navigation menu" }));
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });
});
