import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" is only for the local/Docker build (see Dockerfile) — Vercel
  // sets its own VERCEL env var during builds, and Vercel's own Next.js
  // builder does its own output optimization. Forcing "standalone" there too
  // has been reported to break routing (every page 404s) on Next.js 16.
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
