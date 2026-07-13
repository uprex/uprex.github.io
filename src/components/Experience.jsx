import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    title: "Ingénieur d'études",
    company: "Fives Intralogistics SAS",
    period: "Septembre 2023 – Présent",
    details: "Gestion de projet, etude, développement, mise en service (déplacements internationaux) et maintenance d'applications en C# .NET dans un environnement logistique et/ou industriel. \n Developpement d'outils pour la gestion d'entrepôts automatisés WCS et la communication avec les outils clients WMS (API REST) ou des équipements physiques (PLC, Arche de lecture, Autostore, Trieurs, Imprimante, Balance). \n Gestion d’une organisation Azure DevOps et des projets sous-jacents",
    moreDetails: "Intégration des logiciels dans une optique CI/CD via des pipelines Azure DevOps \n Outils : C# .NET, Azure DevOps, Docker, SQL Server, Redis, RabbitMQ, IIS, Blazor, Git.",
    logo: "images/fives.png"
  },
  {
    title: "Consultant ingénieur informatique",
    company: "AGAP2 IT",
    period: "Mars 2022 – Aout 2023",
    details: "Mission chez Fives Intralogistics SAS en tant qu'ingénieur d'études. \n Etude, développement, mise en service (déplacements internationaux) et maintenance d'applications en C# .NET dans un environnement logistique. \n Developpement d'outils pour la gestion d'entrepôts automatisés WCS et la communication avec les outils clients WMS (API REST) ou des équipements physiques (PLC, Arche de lecture, Trieurs, Imprimante, Balance).",
    moreDetails: "Intégration des logiciels dans une optique CI/CD via des pipelines Azure DevOps \n Outils : C# .NET, Azure DevOps, Docker, SQL Server, Redis, RabbitMQ, Git.",
    logo: "images/agap2.png"
  },
  {
    title: "Alternant chef de projet",
    company: "Klocel SAS",
    period: "Octobre 2020 – Octobre 2021",
    details: "Gestion d'un projet avec un client internationnal, intégration d'une nouvelle gamme de produit à un entrepôt. Gestion des contraintes techniques et physiques associées.",
    moreDetails: "Communication et élaboration du besoin avec le client à l'étranger. \n Réalisation de documentation technique et fonctionnelle. Participation aux comités de chiffrage. Tests techniques et fonctionnels, Support niveau 2 \n Outils : C, Pro C, linux, windows, Oracle 11, PowerBuilder, Cycle en V, Agilité",
    logo: "images/klocel.png"
  },
  {
    title: "Alternant analyste développeur",
    company: "Klocel SAS",
    period: "Juillet 2018 – Octobre 2021",
    details: "Participation au développement d'un WMS (Warehouse Management System) en C dans un environnement windows/linux. Réception de besoin technique \n Développement de nouvelles fonctionnalités, correction de bugs.",
    moreDetails: "Retro engineering, Tests techniques et fonctionnels.\n Réalisation de documentations techniques et fonctionnelles. Support niveau 2 \n Outils : C, Pro C, linux, windows, Oracle 11, PowerBuilder, Cycle en V, Agilité",
    logo: "images/klocel.png"
  }
];

export default function Experience() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="mb-10 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-blue-800 flex items-center justify-center">
        <span className="mr-3"></span> Expérience 
      </h2>
      <div className="relative">
        {/* Frise verticale centrée */}
        <div className="absolute top-0 left-1/2 h-full border-l-2 border-blue-500 text-justify transform -translate-x-1/2" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-10 relative"
          >
            {/* Carte à gauche ou droite selon l'index */}
            <div className={`w-full ${idx % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'}`}>
              <div
                className={`inline-block bg-white rounded-lg text-justify shadow-lg p-6 border border-gray-100 relative ${
                  idx % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
                }`}
              >

                {/* En-tête avec titre et logo alignés */}
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-blue-700">{exp.title}</h3>
                  <div className="w-16 h-8 flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={`Logo ${exp.company}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                <p className="text-sm font-medium text-blue-600 mt-2">{exp.company}</p>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">{exp.details}</p>

                {/* Bouton "+" pour ouvrir le pop-up */}
                <button
                  onClick={() => setSelectedId(selectedId === idx ? null : idx)}
                  className="mt-3 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition"
                >
                  {selectedId === idx ? "−" : "+"}
                </button>

                {/* Pop-up (conditionnel) */}
                <AnimatePresence>
                  {selectedId === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-3 p-4 bg-blue-50 rounded-lg text-sm text-gray-800 whitespace-pre-line"
                    >
                      {exp.moreDetails}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
