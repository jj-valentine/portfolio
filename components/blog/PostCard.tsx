import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/types";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-center justify-between py-5"
    >
      <div className="flex items-center gap-4 min-w-0">
        <h3 className="text-xl font-medium text-fg group-hover:text-[rgba(255,255,255,0.8)] transition-colors truncate">
          {post.title}
        </h3>
        <Badge className="shrink-0">{post.category}</Badge>
      </div>
      <span className="text-sm text-muted hidden sm:block shrink-0 ml-4">
        {formatDate(post.date)}
      </span>
    </Link>
  );
}
