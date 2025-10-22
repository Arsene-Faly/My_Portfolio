'use client';

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Wrapper from "../components/Wrapper";

const projects = [
  {
    id: 1,
    title: "Mini Gestion École",
    description: "Application web gestion école. C'est un dashboard.",
    technologies: ["HTML/CSS", "TailwindCSS", "JavaScript", "PHP"],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    githubLink: "https://github.com/Arsene-Faly/MINI_GESTION_ECOLE",
    liveLink: null,
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Site personnel pour présenter mes compétences et projets.",
    technologies: ["Next Js", "React", "TailwindCSS", "daisyUI"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    githubLink: "https://github.com/Arsene-Faly/My_Portfolio",
    liveLink: "https://arsene-faly.vercel.app/",
  },
  {
    id: 3,
    title: "Gestion budgétaire",
    description:
      "Application web pour suivre les dépenses et les rapports personnalisés.",
    technologies: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    githubLink: "https://github.com/Arsene-Faly/gestionbudgetaire",
    liveLink: null,
  },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <Wrapper>
      <section id="competences" className="text-base-content">
        <div className="container mx-auto px-2 sm:px-4 lg:px-10">
          {/* === Titre principal === */}
          <div className="text-center mb-10 mt-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mes <span className="text-primary">Projets</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/80 font-medium max-w-2xl mx-auto">
              Découvrez les technologies et outils que j&apos;utilise pour
              concevoir des applications modernes, performantes et évolutives.
            </p>
          </div>

          {/* === Carrousel de Cards === */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
              {/* Card principale */}
              <div className="bg-base-200 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    unoptimized
                    quality={100}
                    priority
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent"></div>
                </div>

                <div className="p-4 sm:p-6 md:p-7 lg:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-base-content">
                    {currentProject.title}
                  </h3>

                  <p className="text-base-content/70 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                    {currentProject.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 lg:mb-6">
                    {currentProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4">
                    {currentProject.githubLink && (
                      <a
                        href={currentProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-base-300 hover:bg-base-content/10 rounded-lg transition-colors"
                      >
                        <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span className="text-xs sm:text-sm font-medium">
                          GitHub
                        </span>
                      </a>
                    )}
                    {currentProject.liveLink && (
                      <a
                        href={currentProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary hover:bg-primary/80 text-primary-content rounded-lg transition-colors"
                      >
                        <ExternalLink
                          size={16}
                          className="sm:w-[18px] sm:h-[18px]"
                        />
                        <span className="text-xs sm:text-sm font-medium">
                          Voir le site
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Boutons Navigation */}
              <button
                onClick={handlePrevious}
                className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-5 lg:-translate-x-6 bg-base-content text-base-100 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:bg-base-content/80 transition-all active:scale-95"
                aria-label="Projet précédent"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNext}
                className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-5 lg:translate-x-6 bg-base-content text-base-100 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:bg-base-content/80 transition-all active:scale-95"
                aria-label="Projet suivant"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-7 lg:mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 sm:w-8 bg-primary"
                      : "w-1.5 sm:w-2 bg-base-content/30 hover:bg-base-content/50"
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>

            {/* Compteur */}
            <p className="text-center mt-3 sm:mt-4 text-base-content/60 text-xs sm:text-sm">
              Projet {currentIndex + 1} sur {projects.length}
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Page;
