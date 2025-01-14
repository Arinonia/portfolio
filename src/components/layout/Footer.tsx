"use client";

import Link from "next/link";
import type { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Arinonia" },
    { name: "LinkedIn", href: "https://linkedin.com/in/" },
  ];

  return (
    <footer className="bg-surface mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <div className="space-y-2 text-text-secondary">
              <p>Email : arinonia.dev@gmail.com</p>
              <p>Basé à Rouen, France</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Réseaux</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center text-text-secondary">
          <p>&copy; {currentYear} Arinonia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
