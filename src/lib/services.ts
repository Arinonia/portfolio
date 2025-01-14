import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "backend",
    title: "Développement Backend",
    description:
      "Conception et développement d'APIs REST et de services backend robustes et performants.",
    icon: "🔧",
    features: [
      "APIs REST avec Java Spring Boot",
      "Microservices en Go",
      "CLIs et outils en Rust",
      "Base de données SQL et NoSQL",
      "Tests et documentation",
    ],
  },
  {
    id: "frontend",
    title: "Développement Frontend",
    description:
      "Création d'interfaces utilisateur modernes et réactives avec les dernières technologies web.",
    icon: "🎨",
    features: [
      "Applications React.js / Next.js",
      "Interfaces responsives",
      "Animations fluides",
      "Design System",
      "Optimisation des performances",
    ],
  },
  {
    id: "architecture",
    title: "Architecture Logicielle",
    description:
      "Conception et mise en place d'architectures évolutives et maintenables.",
    icon: "📐",
    features: [
      "Architecture hexagonale",
      "Domain-Driven Design",
      "Microservices",
      "Infrastructure as Code",
      "Documentation technique",
    ],
  },
];

export async function getServices(): Promise<Service[]> {
  return services;
}
