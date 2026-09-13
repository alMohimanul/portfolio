import { GlassCard } from "@/components/ui/GlassCard";
import { StatCallout } from "@/components/ui/StatCallout";
import { GradientText } from "@/components/ui/GradientText";
import type { ExperienceEntry } from "@/data/types";

export function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  return (
    <GlassCard className="flex flex-col gap-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-bold">
          {entry.role} · <GradientText>{entry.company}</GradientText>
        </h3>
        <span className="text-sm opacity-60">
          {entry.startDate} – {entry.endDate}
        </span>
      </div>
      <span className="text-sm opacity-60">{entry.location}</span>

      <ul className="flex flex-col gap-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm opacity-90">
            <span aria-hidden>—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {entry.stats && entry.stats.length > 0 ? (
        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {entry.stats.map((stat) => (
            <StatCallout key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      ) : null}
    </GlassCard>
  );
}
