import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const SITE_URL = "https://james-valentine.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getAllPosts()).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [...routes, ...posts];
}
