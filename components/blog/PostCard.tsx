"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/types";

function categoryBadgeClass(category: string): string {
  const normalized = category.toLowerCase();
  if (normalized === "engineering") {
    return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  }
  if (normalized === "teaching") {
    return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  }
  return "";
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className={cn(
          "glass-card rounded-md p-5 relative overflow-hidden",
          "transition-all duration-200",
          "hover:border-accent/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] hover:scale-[1.01]"
        )}
      >
        {/* Left accent bar */}
        <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

        {/* Top row */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-fg font-medium text-base group-hover:text-accent transition-colors flex-1">
            {post.title}
          </h3>
          <ArrowRight
            size={14}
            className="text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
          />
        </div>

        {/* Description */}
        {post.description && (
          <p className="text-fg-muted text-sm mt-2 line-clamp-2 leading-relaxed">
            {post.description}
          </p>
        )}

        {/* Bottom row */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <Badge className={categoryBadgeClass(post.category)}>
            {post.category}
          </Badge>
          <span className="text-muted text-xs">{formatDate(post.date)}</span>
        </div>
      </article>
    </Link>
  );
}
