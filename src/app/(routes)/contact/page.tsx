"use client";
import { ContactFormComponent } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Une idée de projet ? Besoin d'un développeur ? N'hésitez pas à me
            contacter pour en discuter.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactFormComponent />
          </div>

          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Informations</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  <strong className="text-text-primary">Email:</strong>
                  <br />
                  arinonia.dev@gmail.com
                </p>
                <p>
                  <strong className="text-text-primary">Localisation:</strong>
                  <br />
                  Rouen, France
                </p>
                <p>
                  <strong className="text-text-primary">Disponibilité:</strong>
                  <br />
                  Lundi - Vendredi
                  <br />
                  9:00 - 18:00
                </p>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Réseaux</h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/Arinonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-primary transition-colors"
                >
                  <span className="mr-2">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-primary transition-colors"
                >
                  <span className="mr-2">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
