import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";

export function StatCallout({ label, value }: { label: string; value: string }) {
  return (
    <GlassCard className="flex flex-col items-center gap-1 text-center">
      <GradientText className="text-2xl font-bold">{value}</GradientText>
      <span className="text-xs uppercase tracking-wide opacity-70">{label}</span>
    </GlassCard>
  );
}
