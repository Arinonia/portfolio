import { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projets | Arinonia",
  description: "Découvrez mes dernières réalisations",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="container py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations récentes en développement
          web et applications.
        </p>
      </header>

      <ProjectsGrid projects={projects} />
    </main>
  );
}
