import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const SITE_URL = "https://james-valentine.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getAllPosts()).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const routes = ["", "/about", "/blog", "/projects", "/contact"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  return [...routes, ...posts];
}
