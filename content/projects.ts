import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "REAL K-9",
    description:
      "Professional dog training business serving Greater Seattle. Service-level obedience, behavior modification, and handler education. 250+ dogs trained, 100% 5-star reviews.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://real-k9.com",
    image: "/screenshots/realk9-dark-hero.png",
    featured: true,
  },
  {
    title: "AgentHQ",
    description:
      "Developer dashboard for orchestrating and monitoring Claude-powered AI agents. Tracks execution time, token usage, active agents, tasks-in-flight, and efficiency metrics across concurrent agent runs.",
    tech: ["React", "TypeScript", "Vite", "Claude API", "Anthropic SDK"],
    featured: true,
  },
  {
    title: "Cerebellum",
    description:
      "Personal AI memory system built on Supabase + pgvector. Captures thoughts through a three-layer pipeline — Operator (synthesis), Gatekeeper (quality scoring), and user review — then exposes them over MCP so any AI tool can query the same semantic memory store.",
    tech: ["TypeScript", "Supabase", "pgvector", "MCP", "OpenRouter"],
    github: "https://github.com/jj-valentine/cerebellum",
    featured: true,
  },
  {
    title: "mango",
    description:
      "Self-hosted Claude-powered daily digest. Fetches YouTube transcripts, RSS feeds, JSON APIs, and JS-rendered pages in parallel, runs them through Claude agents, deduplicates across runs, and delivers one sharp email via Resend — unattended, daily.",
    tech: ["Python", "Claude API", "Resend", "GitHub Actions", "Playwright"],
    github: "https://github.com/jj-valentine/mango",
    featured: true,
  },
  {
    title: "Portfolio Site",
    description:
      "This site — dark portfolio with an MDX blog, gooey text morphing, animated hero shapes, and syntax-highlighted code blocks.",
    tech: ["Next.js 15", "Tailwind v4", "Framer Motion", "MDX"],
    github: "https://github.com/jj-valentine/portfolio",
    featured: true,
  },
  {
    title: "REAL K-9 Client Portal",
    description:
      "Client-facing portal for REAL K-9 — scheduling, session notes, and training progress tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    inProgress: true,
  },
];
