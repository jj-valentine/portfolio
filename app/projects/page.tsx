import { PROJECTS } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Things I've built — web apps, tools, and experiments.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-[1158px] mx-auto px-4 md:px-8 py-20">
      <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted mb-3">
        Projects
      </p>
      <h1 className="text-[clamp(32px,4vw,48px)] leading-[1] font-medium tracking-tight text-fg">
        Things I&apos;ve built
      </h1>
      <p className="mt-4 text-lg text-fg-sub max-w-[640px]">
        A mix of professional work, side projects, and experiments.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
