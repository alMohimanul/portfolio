import { NextResponse } from "next/server";
import { getGithubRepos } from "@/lib/github";

export const revalidate = 21600;

export async function GET() {
  const { repos, stale } = await getGithubRepos();
  return NextResponse.json({ repos, stale });
}
