import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const FEATURED_PROJECTS = [
  {
    title: "real-k9.com",
    description:
      "Full-stack platform for my dog training business. Booking, content, and client management.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    href: "https://real-k9.com",
    external: true,
  },
  {
    title: "Portfolio",
    description:
      "This site. Graphite-inspired dark design, MDX blog, Framer Motion animations.",
    tech: ["Next.js 15", "MDX", "Framer Motion", "Tailwind v4"],
    href: "/projects",
  },
];

const LATEST_POSTS = [
  {
    title: "Hello World — Building This Site",
    date: "2026-03-01",
    category: "Engineering",
    slug: "hello-world",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About blurb */}
      <section className="py-20">
        <div className="max-w-[1158px] mx-auto px-4 md:px-8">
          <Card className="p-8 md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-4">
              About
            </p>
            <p className="text-lg text-fg-sub max-w-[640px] leading-relaxed">
              I&apos;m a software engineer with degrees in physics and
              mathematics. I build web applications, teach STEM subjects, and run
              a dog training business on the side. I care about clean code,
              clear thinking, and doing things that matter.
            </p>
            <Button variant="ghost" href="/about" className="mt-6">
              Read more <ArrowRight size={16} />
            </Button>
          </Card>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20">
        <div className="max-w-[1158px] mx-auto px-4 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-3">
            Projects
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1] font-medium tracking-tight text-fg">
            Featured work
          </h2>
          <p className="mt-4 text-lg text-fg-sub">
            A few things I&apos;ve built recently.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {FEATURED_PROJECTS.map((project) => (
              <Card key={project.title} className="p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-medium text-fg flex items-center gap-2">
                  {project.title}
                  {project.external && (
                    <ExternalLink size={14} className="text-muted" />
                  )}
                </h3>
                <p className="mt-2 text-sm text-fg-muted leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Button variant="ghost" href="/projects" className="mt-8">
            View all projects <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* Latest posts */}
      <section className="py-20">
        <div className="max-w-[1158px] mx-auto px-4 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-3">
            Blog
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1] font-medium tracking-tight text-fg">
            Latest posts
          </h2>

          <div className="mt-10 divide-y divide-[rgba(119,119,119,0.2)]">
            {LATEST_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-center justify-between py-5 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-medium text-fg group-hover:text-[rgba(255,255,255,0.8)] transition-colors">
                    {post.title}
                  </h3>
                  <Badge>{post.category}</Badge>
                </div>
                <span className="text-sm text-muted hidden sm:block">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </Link>
            ))}
          </div>

          <Button variant="ghost" href="/blog" className="mt-8">
            Read all posts <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* Dog training callout */}
      <section className="py-20">
        <div className="max-w-[1158px] mx-auto px-4 md:px-8">
          <Card className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-3">
                Dog Training
              </p>
              <h2 className="text-2xl font-medium text-fg">
                I also train dogs.
              </h2>
              <p className="mt-2 text-fg-sub max-w-[480px]">
                Professional balanced training for dogs of all ages and breeds.
                Check out my training site.
              </p>
            </div>
            <Button
              variant="secondary"
              href="https://real-k9.com"
              external
              className="shrink-0"
            >
              real-k9.com
              <ExternalLink size={14} className="ml-2" />
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
}
