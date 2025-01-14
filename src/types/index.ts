export interface ProjectParams {
  id: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  images: {
    main: string;
    gallery: string[];
  };
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
