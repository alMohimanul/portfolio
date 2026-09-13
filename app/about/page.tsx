import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { publications } from "@/data/publications";
import { awards } from "@/data/awards";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <SectionReveal>
        <h1 className="text-center text-4xl font-bold">
          <GradientText>About</GradientText>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center opacity-80">{profile.summary}</p>
      </SectionReveal>

      <section>
        <SectionReveal>
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
        </SectionReveal>
        {education.map((entry) => (
          <SectionReveal key={entry.institution}>
            <GlassCard className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{entry.institution}</h3>
              <p className="opacity-80">{entry.degree}</p>
              <p className="text-sm opacity-60">
                {entry.location} · {entry.startYear} – {entry.endYear}
                {entry.gpa ? ` · CGPA ${entry.gpa}` : ""}
              </p>
              {entry.thesis ? (
                <p className="mt-2 text-sm opacity-80">
                  <span className="font-semibold">Thesis: </span>
                  {entry.thesis}
                </p>
              ) : null}
            </GlassCard>
          </SectionReveal>
        ))}
      </section>

      <section>
        <SectionReveal>
          <h2 className="mb-4 text-2xl font-bold">Publications</h2>
        </SectionReveal>
        <div className="flex flex-col gap-4">
          {publications.map((pub) => (
            <SectionReveal key={pub.title}>
              <GlassCard>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4"
                >
                  {pub.title}
                </a>
                <p className="mt-1 text-sm opacity-70">
                  {pub.venue} · {pub.year}
                </p>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section>
        <SectionReveal>
          <h2 className="mb-4 text-2xl font-bold">Awards</h2>
        </SectionReveal>
        <div className="flex flex-col gap-3">
          {awards.map((award) => (
            <SectionReveal key={award.title}>
              <GlassCard className="flex items-center justify-between gap-4">
                <span className="opacity-90">{award.title}</span>
                <span className="text-sm opacity-60">{award.year}</span>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
