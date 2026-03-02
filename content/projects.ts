import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "real-k9.com",
    description:
      "Full-stack platform for my dog training business. Booking system, training content, and client management.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://real-k9.com",
    featured: true,
  },
  {
    title: "Portfolio Site",
    description:
      "This site — a Graphite-inspired dark portfolio with an MDX blog, animated role cycling, and syntax-highlighted code blocks.",
    tech: ["Next.js 15", "Tailwind v4", "Framer Motion", "MDX"],
    github: "https://github.com/jj-valentine/portfolio",
    featured: true,
  },
  {
    title: "Physics Simulations",
    description:
      "Interactive physics simulations built with TypeScript and Canvas. Covers mechanics, electromagnetism, and wave phenomena.",
    tech: ["TypeScript", "Canvas API", "React"],
    github: "https://github.com/jj-valentine/physics-sims",
  },
  {
    title: "CLI Task Manager",
    description:
      "A fast terminal-based task manager with project grouping, priority sorting, and Markdown export.",
    tech: ["Rust", "SQLite", "clap"],
    github: "https://github.com/jj-valentine/taskctl",
  },
];
