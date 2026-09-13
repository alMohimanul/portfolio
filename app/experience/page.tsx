import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { TimelineEntry } from "@/components/experience/TimelineEntry";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8">
      <SectionReveal>
        <h1 className="text-center text-4xl font-bold">
          <GradientText>Experience</GradientText>
        </h1>
      </SectionReveal>
      {experience.map((entry, i) => (
        <SectionReveal key={`${entry.company}-${entry.role}`} delay={i * 0.05}>
          <TimelineEntry entry={entry} />
        </SectionReveal>
      ))}
    </div>
  );
}
