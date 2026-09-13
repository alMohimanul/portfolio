import { describe, expect, it } from "vitest";
import { featuredProjects } from "./projects";

describe("featuredProjects", () => {
  it("contains exactly the four approved featured projects, in order", () => {
    expect(featuredProjects.map((p) => p.slug)).toEqual(["prism", "mavyn", "screenly", "syntai"]);
  });

  it("gives every project at least one external link", () => {
    featuredProjects.forEach((project) => {
      expect(project.githubUrl || project.liveUrl).toBeTruthy();
    });
  });
});
