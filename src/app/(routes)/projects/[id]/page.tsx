import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProject } from "@/lib/projects";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | Arinonia`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-text-secondary hover:text-primary transition-colors"
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Retour aux projets
        </Link>
      </nav>
      <header className="mb-12">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-text-secondary mt-2">{project.description}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.images.main}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-text-secondary">{project.fullDescription}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Fonctionnalités</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Défis et Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Défis Rencontrés</h3>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">
                  Solutions Apportées
                </h3>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  {project.solutions.map((solution) => (
                    <li key={solution}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-surface p-6 rounded-lg top-24">
            <h2 className="text-xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-background rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Voir le site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-surface text-text-primary rounded-lg hover:bg-surface/90 transition-colors"
                >
                  Voir le code source
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-surface">
        <h2 className="text-2xl font-semibold mb-6">Images du projet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
