"use client";

import { useEffect } from "react";
import { GradientText } from "@/components/ui/GradientText";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">
        <GradientText>Something went wrong</GradientText>
      </h1>
      <p className="opacity-80">An unexpected error happened while rendering this page.</p>
      <button type="button" onClick={reset} className="glass-card rounded-full px-6 py-3 text-sm font-semibold">
        Try again
      </button>
    </div>
  );
}
