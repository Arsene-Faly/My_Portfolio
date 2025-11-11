import Link from "next/link";
import React from "react";
import { FaReact, FaNodeJs, FaJs, FaLaravel, FaDownload } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiDjango } from "react-icons/si";

const Accueil = () => {
  return (
    <div>
      <div className="space-y-4 px-1 sm:px-6 lg:px-6 lg:pt-3">
        {/* === Section Profil / Introduction === */}
        <section className="space-y-4 px-4 sm:px-6 lg:px-12 mb-10">
          {/* Nom */}
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-left">
            RATSIMBASON Arsène
          </h1>

          {/* Titre */}
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mt-1 text-center md:text-left">
            Développeur Full Stack JS
          </p>

          {/* Phrase courte */}
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary font-semibold mt-1 text-center md:text-left">
            Passionné par la création d&apos;applications web modernes
          </p> */}

          {/* Résumé / Phrase descriptive */}
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-base-content/80 font-medium max-w-3xl text-center md:text-left">
            Développeur Full Stack passionné, diplômé en informatique, formé à
            Laravel, Django et Vue.js, motivé et curieux, je crée des
            applications web claires, fonctionnelles et orientées utilisateur.
          </p>

          {/* === Bouton Télécharger CV (DaisyUI + Icône) === */}
          <div className="flex justify-center md:justify-start mt-4">
            <Link
              href="/CV.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary rounded-xl btn-wide font-semibold shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <FaDownload className="text-lg" />
              Télécharger CV
            </Link>
          </div>
        </section>

        {/* === Section Cards : Expérience et Projets === */}
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 px-4 sm:px-6 lg:px-12">
          <div className="card bg-base-200 shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              1+
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg text-base-content/80">
              Années d&apos;expérience
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              6+
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg text-base-content/80">
              Projets réalisés
            </p>
          </div>
        </section>

        {/* === Section Technologies principales === */}
        <section className="space-y-4 px-4 sm:px-6 lg:px-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary">
            Technologies principales
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4">
            {[
              { icon: FaReact, label: "React", color: "text-blue-500" },
              { icon: SiNextdotjs, label: "Next.js", color: "text-black" },
              { icon: FaNodeJs, label: "Node.js", color: "text-green-600" },
              { icon: FaJs, label: "JavaScript", color: "text-yellow-500" },
              { icon: SiMongodb, label: "MongoDB", color: "text-green-700" },
              { icon: SiExpress, label: "Express.js", color: "text-gray-800" },
              { icon: FaLaravel, label: "Laravel", color: "text-red-600" },
              { icon: SiDjango, label: "Django", color: "text-green-900" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 sm:gap-2 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                title={label}
              >
                <Icon
                  className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 ${color}`}
                />
                <span className="text-xs sm:text-sm md:text-base">{label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accueil;
