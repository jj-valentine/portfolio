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
