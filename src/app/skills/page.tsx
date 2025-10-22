"use client";

import React, { useState } from "react";
import {
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaPython,
  FaPhp,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiDjango,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import Wrapper from "../components/Wrapper";

const competences = {
  "Framework Frontend": [
    {
      id: 4,
      icon: <FaVuejs className="text-green-400" size={40} />,
      name: "Vue.js",
    },
    {
      id: 5,
      icon: <FaReact className="text-sky-400" size={40} />,
      name: "React",
    },
    {
      id: 6,
      icon: <SiNextdotjs className="text-gray-300" size={40} />,
      name: "Next.js",
    },
  ],
  "Framework Backend": [
    {
      id: 3,
      icon: <FaNodeJs className="text-green-500" size={40} />,
      name: "Node.js",
    },
    {
      id: 1,
      icon: <FaLaravel className="text-red-500" size={40} />,
      name: "Laravel",
    },
    {
      id: 2,
      icon: <SiDjango className="text-green-600" size={40} />,
      name: "Django",
    },
  ],
  "Framework CSS": [
    {
      id: 7,
      icon: <SiTailwindcss className="text-cyan-400" size={40} />,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      icon: <FaBootstrap className="text-purple-500" size={40} />,
      name: "Bootstrap",
    },
  ],
  Programmation: [
    {
      id: 9,
      icon: <FaPhp className="text-indigo-400" size={40} />,
      name: "PHP",
    },
    {
      id: 10,
      icon: <SiJavascript className="text-yellow-400" size={40} />,
      name: "JavaScript",
    },
    {
      id: 11,
      icon: <FaPython className="text-blue-500" size={40} />,
      name: "Python",
    },
  ],
  "Base de données": [
    {
      id: 12,
      icon: <SiMysql className="text-orange-400" size={40} />,
      name: "MySQL",
    },
    {
      id: 13,
      icon: <SiSqlite className="text-gray-400" size={40} />,
      name: "SQLite",
    },
    {
      id: 14,
      icon: <SiPostgresql className="text-sky-400" size={40} />,
      name: "PostgreSQL",
    },
    {
      id: 16,
      icon: <SiMongodb className="text-green-400" size={40} />,
      name: "MongoDB",
    },
  ],
  Outils: [
    {
      id: 15,
      icon: <FaGithub className="text-white" size={40} />,
      name: "GitHub",
    },
  ],
};

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const entries = Object.entries(competences);
  const categories = ["Tous", ...entries.map(([type]) => type)];

  // 🔎 Filtrage dynamique
  const filteredCompetences =
    selectedCategory === "Tous"
      ? entries
      : entries.filter(([type]) => type === selectedCategory);

  return (
    <Wrapper>
      <section id="competences" className="text-base-content">
        <div className="container mx-auto px-2 sm:px-4 lg:px-10">
          {/* === Titre principal === */}
          <div className="text-center mb-10 mt-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mes <span className="text-primary">Compétences</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/80 font-medium max-w-2xl mx-auto">
              Découvrez les technologies et outils que j&apos;utilise pour
              concevoir des applications modernes, performantes et évolutives.
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

          {/* === Sections filtrées === */}
          {filteredCompetences.map(([type, items], index) => (
            <div key={type} className="mb-16 cursor-pointer">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-8 text-left border-l-4 border-primary pl-4">
                {`${index + 1}. ${type}`}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {items.map((data) => (
                  <div
                    key={data.id}
                    className="group relative bg-gradient-to-br from-base-200 to-base-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-base-300/50 hover:border-primary/40"
                  >
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Barre décorative supérieure animée */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="relative p-8 flex flex-col items-center justify-center space-y-4 min-h-[180px]">
                      {/* Icône avec cercle de fond animé */}
                      <div className="relative">
                        {/* Halo lumineux en arrière-plan */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        {/* Cercle de fond principal */}
                        <div className="relative bg-gradient-to-br from-base-100 to-base-200/80 p-5 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border-2 border-base-300/50 group-hover:border-primary/30">
                          <div className="transform group-hover:-rotate-6 transition-transform duration-300">
                            {data.icon}
                          </div>
                        </div>

                        {/* Particules décoratives */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                      </div>

                      {/* Nom de la compétence */}
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 text-center">
                        {data.name}
                      </h4>

                      {/* Barre de progression décorative */}
                      <div className="w-full max-w-[80%] h-1 bg-base-300/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                      </div>
                    </div>

                    {/* Coins décoratifs */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                    <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

                    {/* Bordure intérieure subtile */}
                    <div className="absolute inset-[1px] rounded-2xl border border-white/5 pointer-events-none" />
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
