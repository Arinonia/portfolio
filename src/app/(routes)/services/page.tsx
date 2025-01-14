import { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { getServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Découvrez mes services de développement web et logiciel",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Mes Services</h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Je propose des solutions sur mesure pour vos projets de développement,
          de la conception à la réalisation.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <section className="mt-16 pt-16 border-t border-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Processus de Travail</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary">1</span>
              </div>
              <h3 className="font-semibold">Discussion</h3>
              <p className="text-text-secondary">
                Analyse de vos besoins et objectifs pour proposer la meilleure
                solution
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary">2</span>
              </div>
              <h3 className="font-semibold">Développement</h3>
              <p className="text-text-secondary">
                Réalisation du projet avec des points réguliers sur
                l&apos;avancement
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary">3</span>
              </div>
              <h3 className="font-semibold">Livraison</h3>
              <p className="text-text-secondary">
                Tests approfondis et déploiement avec documentation complète
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
