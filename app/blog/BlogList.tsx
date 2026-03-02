"use client";

import { useState } from "react";
import { CategoryTabs } from "@/components/blog/CategoryTabs";
import { PostCard } from "@/components/blog/PostCard";
import type { PostMeta } from "@/types";

type BlogListProps = {
  posts: PostMeta[];
  categories: string[];
};

export function BlogList({ posts, categories }: BlogListProps) {
  const [active, setActive] = useState("");

  const filtered = active
    ? posts.filter((p) => p.category === active)
    : posts;

  return (
    <>
      <CategoryTabs
        categories={categories}
        active={active}
        onChange={setActive}
      />
      <div className="mt-8 divide-y divide-[rgba(119,119,119,0.2)]">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-muted text-sm">No posts in this category yet.</p>
        )}
      </div>
    </>
  );
}
