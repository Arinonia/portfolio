import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Développeur Full Stack</h1>
          <p className="text-text-secondary text-lg mb-8">
            Spécialisé dans le développement d'applications modernes avec Rust,
            Go et Java
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-surface text-text-primary rounded-lg hover:bg-surface/90 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProjects projects={featuredProjects} />
    </>
  );
}
