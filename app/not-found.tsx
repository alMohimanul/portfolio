import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-5xl font-bold">
        <GradientText>404</GradientText>
      </h1>
      <p className="opacity-80">This page doesn&apos;t exist — maybe it moved, maybe it never did.</p>
      <Link href="/" className="link-pill">
        Back to home
      </Link>
    </div>
  );
}
