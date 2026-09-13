import Link from "next/link";
import { experience } from "@/data/experience";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GradientText } from "@/components/ui/GradientText";

export function ExperienceTeaser() {
  const current = experience[0];

  return (
    <section className="mt-24">
      <SectionReveal>
        <GlassCard className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-wide opacity-60">Currently</span>
          <h3 className="text-2xl font-bold">
            {current.role} · <GradientText>{current.company}</GradientText>
          </h3>
          <p className="opacity-80">{current.bullets[0]}</p>
          <Link href="/experience" className="text-sm font-semibold underline underline-offset-4">
            See full experience →
          </Link>
        </GlassCard>
      </SectionReveal>
    </section>
  );
}
