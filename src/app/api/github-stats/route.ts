import { NextResponse } from "next/server";

const USERNAME = "jojostarvir-creator";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
  avatar_url: string;
}

interface GitHubRepo {
  stargazers_count: number;
  fork: boolean;
}

export async function GET() {
  try {
    const headers: HeadersInit = process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {};

    const [uRes, rRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers, next: { revalidate: 1800 } }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, { headers, next: { revalidate: 1800 } }),
    ]);

    if (!uRes.ok || !rRes.ok) {
      throw new Error("GitHub API error");
    }

    const user: GitHubUser = await uRes.json();
    const repos: GitHubRepo[] = await rRes.json();
    const stars = repos.filter((r) => !r.fork).reduce((acc, r) => acc + r.stargazers_count, 0);

    return NextResponse.json(
      { user, stars },
      { headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" } },
    );
  } catch {
    return NextResponse.json({ error: "GitHub API unavailable" }, { status: 502 });
  }
}
