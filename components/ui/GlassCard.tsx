import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("glass-card p-6", className)}>{children}</div>;
}
