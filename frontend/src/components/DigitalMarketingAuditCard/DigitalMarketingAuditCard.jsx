import React from "react";

const DigitalMarketingAuditCard = () => {
  return (
    <div className="container-custom">
      <div id="mas-info" className="max-w-4xl mx-auto p-10 bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Analizamos tu negocio para crecer juntos
        </h1>
        <p className="text-lg text-gray-600 mb-6">Recibí un análisis completo de tu presencia digital y descubrí como mejorar resultados de manera efectiva
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✔</span>
            <span>Evaluación de Redes Sociales.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✔</span>
            <span>Análisis de contenido.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✔</span>
            <span>Recomendaciones estratégicas para aumentar engagement y conversiones.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✔</span>
            <span>Revisión de SEO y posicionamiento.</span>
          </li>
        </ul>

        <button
          className="btn-primary"
          onClick={() =>
            (window.location.href =
              "        https://forms.gle/Azuk4ULKJY8FEVGJ8")
          }
        >
          QUIERO MI AUDITORÍA
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketingAuditCard;
