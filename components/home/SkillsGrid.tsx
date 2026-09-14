import { skills } from "@/data/skills";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GradientText } from "@/components/ui/GradientText";

export function SkillsGrid() {
  return (
    <section className="mt-24">
      <SectionReveal>
        <h2 className="mb-8 text-center text-3xl font-bold">
          <GradientText>Skills</GradientText>
        </h2>
      </SectionReveal>
      <SectionReveal delay={0.05}>
        <GlassCard className="flex flex-col divide-y">
          {skills.map((category) => (
            <div
              key={category.category}
              className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <h3 className="shrink-0 text-sm font-semibold uppercase tracking-wide opacity-60 sm:w-32">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full border px-3 py-1 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </GlassCard>
      </SectionReveal>
    </section>
  );
}
