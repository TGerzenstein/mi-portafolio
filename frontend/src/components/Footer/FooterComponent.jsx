import React from "react";

const FooterComponent = () => {
  return (
 
 <div className="bg-[#f0f1ff]">
  <div className="container-custom text-[#483a83]">
    <div className="grid md:grid-cols-2 py-10 gap-8">
      {/* Columna 1 */}
      <div className="py-4 px-4">
        <h1 className="sm:text-3xl text-xl font-medium mb-3 flex items-center gap-3">
          Marketing Digital
        </h1>
        <h2 className="font-semibold mb-2">Redes Sociales</h2>
        <div className="flex flex-col gap-1 text-sm">
          <a href="https://www.instagram.com" className="hover:underline">Instagram</a>
          <a href="https://www.linkedin.com" className="hover:underline">LinkedIn</a>
        </div>

        <h2 className="font-semibold mt-4 mb-2">Contacto</h2>
        <p className="text-sm">
          Email: contacto@tudominio.com <br />
          Tel: +123 456 789
        </p>
      </div>

      {/* Columna 2 */}
      <div className="py-4 px-4">
        <h1 className="text-xl font-medium mb-3">Servicios</h1>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline">Auditoría de SEO</a></li>
          <li><a href="#" className="hover:underline">Campañas en Google Ads</a></li>
          <li><a href="#" className="hover:underline">Analítica Web</a></li>
          <li><a href="#" className="hover:underline">Estrategia de Redes Sociales</a></li>
          <li><a href="#" className="hover:underline">Optimización de Conversiones</a></li>
        </ul>

        <h1 className="text-xl font-medium mt-6 mb-3">Links Importantes</h1>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline">Inicio</a></li>
          <li><a href="#" className="hover:underline">Servicios</a></li>
          <li><a href="#" className="hover:underline">Sobre mí</a></li>
          <li><a href="#" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} diseñado por Tatiana Gerzenstein.    </div>
  </div>
</div>
 );
};

export default FooterComponent;
