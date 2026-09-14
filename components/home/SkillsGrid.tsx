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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => (
          <SectionReveal key={category.category} delay={i * 0.05}>
            <GlassCard>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-70">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full border px-3 py-1 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
