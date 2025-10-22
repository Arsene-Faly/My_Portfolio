"use client";

import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Wrapper from "../components/Wrapper";

const experiences = {
  "Parcours professionnel": [
    {
      id: 1,
      icon: <FaBriefcase className="text-primary" size={40} />,
      title: "Stagiaire – Développeur d'applications de gestion budgétaire",
      company: "Ministère de l'Intérieur",
      date: "12 février au 12 mai 2024",
      description:
        "Création de dashboards de gestion financière avec Django, orientés suivi des dépenses et génération de rapports.",
      technologies: ["HTML", "CSS", "Django"],
    },
    {
      id: 2,
      icon: <FaBriefcase className="text-primary" size={40} />,
      title: "Stagiaire – Développeur d’un logiciel de gestion de bibliothèque",
      company: "Lycée Saint Pierre MALAZA Andoharanofotsy",
      date: "16 mai au 16 août 2023",
      description:
        "Développement d’un logiciel de gestion de bibliothèque avec Python : enregistrement des livres, suivi des emprunts/retours et gestion des utilisateurs.",
      technologies: ["Tkinter", "Python"],
    },
    {
      id: 3,
      icon: <FaBriefcase className="text-primary" size={40} />,
      title: "Stagiaire – Stage de découverte",
      company: "EDUC PLUS",
      date: "2022 (3 mois)",
      description:
        "Observation et participation aux activités administratives et pédagogiques dans un établissement secondaire, dans le cadre d’un stage d’orientation scolaire.",
      technologies: [],
    },
  ],

  "Formation / Études": [
    {
      id: 4,
      icon: <FaGraduationCap className="text-secondary" size={40} />,
      title: "Formation en développement web",
      company: "HOPES FORMATION, Andavamamba",
      date: "2025 (6 mois)",
      description:
        "Apprentissage pratique des technologies front-end et back-end pour la conception et la réalisation de projets web modernes et performants.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "LARAVEL", "VUE JS"],
    },
    {
      id: 5,
      icon: <FaGraduationCap className="text-secondary" size={40} />,
      title: "Licence en Informatique Risques et Décisions",
      company: "ESMIA, Mahamasina",
      date: "2023 - 2024",
      description:
        "Spécialisation en développement web et conception de bases de données, avec une orientation vers les risques et la prise de décision.",
      technologies: [],
    },
    {
      id: 6,
      icon: <FaGraduationCap className="text-secondary" size={40} />,
      title: "Baccalauréat série D",
      company: "Lycée Privé La Croyance, Andavamamba",
      date: "2020 - 2021",
      description:
        "Diplôme de fin d’études secondaires, spécialité scientifique.",
      technologies: [],
    },
  ],
};

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const entries = Object.entries(experiences);
  const categories = ["Tous", ...entries.map(([type]) => type)];

  const filteredExperiences =
    selectedCategory === "Tous"
      ? entries
      : entries.filter(([type]) => type === selectedCategory);

  return (
    <Wrapper>
      <section id="experiences" className="text-base-content">
        <div className="container mx-auto px-2 sm:px-4 lg:px-10">
          {/* === Titre principal === */}
          <div className="text-center mb-10 mt-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mon <span className="text-primary">Parcours</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/80 font-medium max-w-2xl mx-auto">
              Découvrez mon parcours professionnel et mes études qui ont façonné
              mes compétences et ma passion pour le développement web.
            </p>
          </div>

          {/* === Filtres === */}
          <div className="w-full flex flex-wrap justify-center items-center gap-3 mb-12 px-2 sm:px-4 md:px-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg rounded-full font-semibold border transition-all duration-300 cursor-pointer text-center ${
                  selectedCategory === category
                    ? "bg-primary/10 text-secondary border-primary"
                    : "bg-base-200 text-base-content border-base-300 hover:bg-base-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* === Liste filtrée === */}
          {filteredExperiences.map(([type, items], index) => (
            <div key={type} className="mb-16">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-8 text-left border-l-4 border-primary pl-4">
                {`${index + 1}. ${type}`}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {items.map((data) => (
                  <div
                    key={data.id}
                    className="group relative bg-gradient-to-br from-base-200 to-base-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-base-300/50 hover:border-primary/30"
                  >
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Barre décorative en haut */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    <div className="relative p-6 space-y-4">
                      {/* Icône avec cercle de fond */}
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500" />
                          <div className="relative bg-gradient-to-br from-base-100 to-base-200 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {data.icon}
                          </div>
                        </div>
                      </div>

                      {/* Titre */}
                      <h4 className="text-center text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 leading-tight min-h-[3.5rem] flex items-center justify-center">
                        {data.title}
                      </h4>

                      {/* Entreprise */}
                      <div className="flex items-center justify-center gap-2 text-sm font-semibold text-base-content/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        <p>{data.company}</p>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      </div>

                      {/* Date avec style badge */}
                      <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-base-100/50 backdrop-blur-sm rounded-full text-xs font-medium text-base-content/70 border border-base-300/50">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {data.date}
                        </span>
                      </div>

                      {/* Séparateur décoratif */}
                      <div className="flex items-center gap-2 py-2">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                      </div>

                      {/* Description */}
                      <p className="text-sm text-base-content/80 leading-relaxed text-center min-h-[4rem]">
                        {data.description}
                      </p>

                      {/* Technologies */}
                      {data.technologies.length > 0 && (
                        <div className="pt-4">
                          <div className="flex flex-wrap justify-center gap-2">
                            {data.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 rounded-lg text-xs font-semibold text-primary border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Coins décoratifs */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Page;
