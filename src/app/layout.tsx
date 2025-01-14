import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Arinonia | Développeur",
    template: "%s | Arinonia",
  },
  description:
    "Portfolio professionnel présentant mes services et réalisations en développement",
  keywords: ["développeur", "fullstack", "portfolio", "projets"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} font-sans bg-background text-text-primary`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="pt-16 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
