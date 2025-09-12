import React from "react";

const ServicesSectionComponent = () => {
  return (
    <>
      <section className="container-custom my-20">
        <div className="max-w-4xl mx-auto p-10 bg-gradient-to-r from-purple-50 to-white rounded-2xl shadow-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mis Servicios
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Te acompañamos en el crecimiento de tu marca con soluciones
            personalizadas que combinan estrategia, creatividad y tecnología
          </p>
          <ul className="space-y-3 mb-6 text-left">
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">✔</span>
              <span>Asesoría 1:1 para diseñar un plan a tu medida.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">✔</span>
              <span>
                Creación de contenido estratégico que conecta con tu audiencia.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">✔</span>
              <span>Gestión integral de redes sociales para potenciar tu presencia
                digital.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">✔</span>
              <span>Optimización y posicionamiento SEO para mayor visibilidad.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">✔</span>
              <span>Diseño y desarrollo web adaptado a tus objetivos.</span>
            </li>
          </ul>
          <button className="btn-primary">CONOCÉ MÁS</button>
        </div>
      </section>
    </>
  );
};

export default ServicesSectionComponent;
