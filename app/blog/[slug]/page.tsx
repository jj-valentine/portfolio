import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostSource } from "@/lib/mdx";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const source = await getPostSource(slug);
  if (!source) notFound();

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
    date: string;
    category: string;
    tags?: string[];
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark-dimmed",
              keepBackground: false,
            },
          ],
        ],
      },
    },
  });

  return (
    <article className="max-w-[1158px] mx-auto px-4 md:px-8 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to blog
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-muted">
            {formatDate(frontmatter.date)}
          </span>
          <Badge>{frontmatter.category}</Badge>
        </div>
        <h1 className="text-[clamp(32px,4vw,48px)] leading-[1.1] font-medium tracking-tight text-fg">
          {frontmatter.title}
        </h1>
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag} className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-invert max-w-none">{content}</div>
    </article>
  );
}
