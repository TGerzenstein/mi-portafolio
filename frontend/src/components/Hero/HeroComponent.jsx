import React from "react";
import HeroImage from "../../assets/image.jpg";


const HeroComponent = () => {
  return (
    <main className="bg-white ">
      <div className="container-custom flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 
        gap-5 place-items-center">
          <div className="order-1 sm:order-2 relative">
            <img src={HeroImage} alt="Celular" className="rounded" />
          </div>
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-semibold">Tatiana Gerzenstein</h1>
        <p className="text-primary text-xl sm:text-2xl font-medium">Comunicación Estratégica</p>

        <p className="text-gray-600 max-w-md">
          Ayudo a marcas y profesionales a diseñar estrategias de comunicación efectivas, mejorar su presencia digital y conectar auténticamente con su audiencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="btn-primary">Escribime</button>

        </div>
      </div>

        </div>
      </div>
    </main>
  );
};

export default HeroComponent;
