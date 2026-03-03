"use client";

import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative">
      {/* In Progress badge */}
      {project.inProgress && (
        <div className="absolute top-3 right-3 z-10 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
          In Progress
        </div>
      )}

      {/* Card */}
      <div
        className={cn(
          "glass-card rainbow-hover rounded-md flex flex-col h-full overflow-hidden",
          "transition-all duration-200",
          "hover:border-accent/20 hover:shadow-[0_4px_24px_rgba(59,130,246,0.08)]",
          project.inProgress && "opacity-60 pointer-events-none"
        )}
      >
        {/* Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover object-top"
          />
        )}

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 gap-4">
          <h3 className="text-fg font-semibold text-base">{project.title}</h3>
          <p className="text-fg-muted text-sm leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} className="text-xs">
                {t}
              </Badge>
            ))}
          </div>

          {/* Links */}
          {!project.inProgress && (project.github || project.live) && (
            <div className="flex gap-3 pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors"
                >
                  <Github size={13} />
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors"
                >
                  <ExternalLink size={13} />
                  Live site
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
