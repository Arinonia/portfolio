import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <article className="group h-full bg-surface rounded-lg overflow-hidden hover:translate-y-[-4px] transition-all duration-300">
        <div className="relative aspect-video">
          <Image
            src={project.images.main}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h2>

          <p className="text-text-secondary mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-background rounded-full text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
