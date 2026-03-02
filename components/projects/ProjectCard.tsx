import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-medium text-fg">{project.title}</h3>
      <p className="mt-2 text-sm text-fg-muted leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors"
          >
            <Github size={14} />
            Source
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors"
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}
      </div>
    </Card>
  );
}
