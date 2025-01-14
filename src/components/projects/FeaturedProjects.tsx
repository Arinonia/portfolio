import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-16 bg-background/50">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Projets en vedette</h2>
            <p className="text-text-secondary">
              Découvrez mes réalisations phares
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
          >
            Voir tous les projets
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block"
            >
              <article className="bg-background rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={project.images.main}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-surface rounded-full text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-sm bg-surface rounded-full text-text-secondary">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
