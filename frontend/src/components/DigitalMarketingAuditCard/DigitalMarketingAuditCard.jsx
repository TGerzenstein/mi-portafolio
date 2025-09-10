import React from "react";

const DigitalMarketingAuditCard = () => {
  return (
    <div className="container-custom">
      <div className="max-w-4xl mx-auto p-10 bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Auditorías de Marketing Digital
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Analizamos tus estrategias digitales para maximizar el rendimiento de
          tus campañas, mejorar tu presencia online y aumentar tus conversiones.
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✔</span>
            <span>Revisión completa de SEO y posicionamiento web.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✔</span>
            <span>
              Evaluación de campañas de publicidad digital (Google Ads, Meta
              Ads, etc.).
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✔</span>
            <span>
              Análisis de métricas, analítica web y comportamiento de usuarios.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✔</span>
            <span>
              Recomendaciones estratégicas para aumentar engagement y
              conversiones.
            </span>
          </li>
        </ul>

        <button className="btn-primary">Solicita tu Auditoría</button>
      </div>
    </div>
  );
};

export default DigitalMarketingAuditCard;
