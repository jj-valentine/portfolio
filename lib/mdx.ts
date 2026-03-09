import matter from "gray-matter";
import type { PostMeta } from "@/types";

const REPO = process.env.CONTENT_REPO!;
const TOKEN = process.env.GITHUB_TOKEN;
const BASE = "https://api.github.com";

function ghHeaders(): Record<string, string> {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (TOKEN) headers["Authorization"] = `Bearer ${TOKEN}`;
  return headers;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const res = await fetch(`${BASE}/repos/${REPO}/contents/blog`, {
    headers: ghHeaders(),
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];

  const files: { name: string; download_url: string }[] = await res.json();
  const mdxFiles = files.filter((f) => f.name.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (f) => {
      const raw = await fetch(f.download_url, {
        next: { revalidate: 3600 },
      }).then((r) => r.text());
      const { data } = matter(raw);
      const slug = f.name.replace(/\.mdx$/, "");
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "Uncategorized",
        tags: data.tags ?? [],
        featured: data.featured ?? false,
      } satisfies PostMeta;
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostSource(slug: string): Promise<string | null> {
  const res = await fetch(
    `${BASE}/repos/${REPO}/contents/blog/${slug}.mdx`,
    {
      headers: ghHeaders(),
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) return null;
  const { content } = await res.json();
  return Buffer.from(content, "base64").toString("utf-8");
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((p) => p.category)));
}
