import { getAllPosts, getCategories } from "@/lib/mdx";
import { BlogList } from "./BlogList";

export const metadata = {
  title: "Blog",
  description: "Posts about software engineering, physics, math, and more.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getCategories();
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <div className="max-w-[1158px] mx-auto px-4 md:px-8 py-20">
      {/* Featured post */}
      {featured && (
        <section className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-3">
            Featured
          </p>
          <a
            href={`/blog/${featured.slug}`}
            className="group block"
          >
            <h1 className="text-[clamp(32px,4vw,48px)] leading-[1] font-medium tracking-tight text-fg group-hover:text-[rgba(255,255,255,0.8)] transition-colors">
              {featured.title}
            </h1>
            <p className="mt-4 text-lg text-fg-sub max-w-[640px]">
              {featured.description}
            </p>
            <p className="mt-4 text-sm text-muted">
              {new Date(featured.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </a>
        </section>
      )}

      <BlogList posts={posts} categories={categories} />
    </div>
  );
}
