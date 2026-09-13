import { describe, expect, it } from "vitest";
import { validateContactForm } from "./validateContactForm";

describe("validateContactForm", () => {
  it("requires name, email, and message", () => {
    const errors = validateContactForm({ name: "", email: "", message: "" });
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it("rejects malformed email addresses", () => {
    const errors = validateContactForm({ name: "A", email: "not-an-email", message: "hi" });
    expect(errors.email).toBe("Enter a valid email address.");
  });

  it("passes for valid input", () => {
    const errors = validateContactForm({ name: "A", email: "a@example.com", message: "hi" });
    expect(errors).toEqual({});
  });
});
