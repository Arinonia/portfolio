import { Project } from "@/types";

const mockProjects: Project[] = [
  {
    id: "altiscore-launcher",
    title: "Altiscore Launcher",
    description: "A modern and elegant Minecraft launcher developed in JavaFX",
    fullDescription:
      "A custom Minecraft launcher developed in JavaFX with a modern and elegant design. The launcher allows users to manage multiple Minecraft installations, mods, and configurations with ease.",
    technologies: ["JavaFX", "Java 21"],
    images: {
      main: "/projects/altiscore-launcher/main.png",
      gallery: [
        "/projects/altiscore-launcher/loading.png",
        "/projects/altiscore-launcher/main.png",
        "/projects/altiscore-launcher/settings_account.png",
        "/projects/altiscore-launcher/settings_launcher.png",
      ],
    },
    githubUrl: "https://github.com/Arinonia/altiscore-launcher",
    features: [
      "Gestion de mods",
      "Multi-comptes",
      "Export au format JSON",
      "Interface en ligne de commande",
    ],
    challenges: [
      "Gestion des erreurs robuste",
      "Persistence des données",
      "Interface utilisateur intuitive",
    ],
    solutions: [
      "Pattern Result pour la gestion d'erreurs",
      "Sérialisation JSON efficace",
      "CLI avec messages clairs",
    ],
    date: "2024-01-15",
  },
  {
    id: "url-shortener-go",
    title: "Service de Raccourcissement d'URL",
    description: "API simple pour raccourcir des URLs en Go",
    fullDescription:
      "Un service web développé en Go qui permet de raccourcir des URLs longues. L'application utilise une base de données SQLite pour stocker les correspondances entre URLs courtes et originales.",
    technologies: ["Go", "Gin", "SQLite", "Docker"],
    images: {
      main: "https://placehold.co/800x400",
      gallery: [
        "https://placehold.co/800x400",
        "https://placehold.co/800x400",
        "https://placehold.co/800x400",
      ],
    },
    liveUrl: "https://url-short.demo.com",
    githubUrl: "https://github.com/Arinonia/url-shortener",
    features: [
      "Création d'URLs courtes",
      "Redirection automatique",
      "API RESTful simple",
      "Interface web basique",
    ],
    challenges: [
      "Gestion de la concurrence",
      "Persistance des données",
      "Déploiement Docker",
    ],
    solutions: [
      "Goroutines pour la concurrence",
      "Migration base de données",
      "Configuration Docker optimisée",
    ],
    date: "2023-12-20",
  },
  {
    id: "spring-todo-api",
    title: "API REST Todo List",
    description: "API REST simple pour gérer une liste de tâches",
    fullDescription:
      "Une API REST développée avec Spring Boot permettant de gérer une liste de tâches. L'application inclut l'authentification basique et permet la gestion complète des tâches avec persistence en base de données.",
    technologies: ["Java", "Spring Boot", "JPA", "H2 Database"],
    images: {
      main: "https://placehold.co/800x400",
      gallery: [
        "https://placehold.co/800x400",
        "https://placehold.co/800x400",
        "https://placehold.co/800x400",
      ],
    },
    liveUrl: "https://todo-api-demo.com",
    githubUrl: "https://github.com/Arinonia/todo-api",
    features: [
      "CRUD complet des tâches",
      "Authentification Basic",
      "Documentation Swagger",
      "Tests unitaires",
    ],
    challenges: [
      "Structure du projet propre",
      "Validation des données",
      "Tests de l'API",
    ],
    solutions: [
      "Architecture en couches",
      "Validation avec annotations",
      "Tests avec JUnit et Mockito",
    ],
    date: "2024-02-01",
  },
];

export async function getProject(id: string): Promise<Project | null> {
  return mockProjects.find((project) => project.id === id) || null;
}

export async function getAllProjects(): Promise<Project[]> {
  return mockProjects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return mockProjects.slice(0, 2);
}
