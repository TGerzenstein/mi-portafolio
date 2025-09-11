import React from "react";
import {
  ChartBarIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

const skillsInfo = [
  {
    name: "Estrategia",
    icon: <ChartBarIcon className="w-12 h-12 text-green-300 mx-auto" />,
    description:
      "Diseñamos planes de acción personalizados que se adaptan a tus objetivos. Cada decisión está basada en datos y enfocada en maximizar el impacto de tu negocio.",
    aosDelay: "0",
  },
  {
    name: "Análisis",
    icon: <Cog6ToothIcon className="w-12 h-12 text-purple-300 mx-auto" />,
    description:
      "Medimos, analizamos y optimizamos para asegurar que tu inversión se traduzca en mayor alcance, clientes y crecimiento real.",
    aosDelay: "300",
  },
  {
    name: "Soporte",
    icon: <LifebuoyIcon className="w-12 h-12 text-blue-300 mx-auto" />,
    description:
      "Te acompañamos en cada parte del proceso, brindando asesoría cercana, respuestas rápidas y un compromiso constante con tus objetivos.",
    aosDelay: "500",
  },
];

const colors = ["bg-[#e6f3e1]", "bg-[#f6ebf9]", "bg-[#d8edfc]"];

const ValueComponent = () => {
  return (
    <div className="container-custom my-20">
      <div className="py-12 sm:grid sm:place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {skillsInfo.map((skill, index) => (
            <div
              key={skill.name}
              className={`space-y-6 p-8 ${colors[index % colors.length]} 
                rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105`}
            >
              <div>{skill.icon}</div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {skill.name}
                </h1>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueComponent;
