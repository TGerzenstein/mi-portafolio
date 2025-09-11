import React, { useState } from "react";

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Servicios", link: "/#" },
  { id: 3, name: "Auditorías", link: "/#" },
  { 
    id: 4, 
    name: "LinkedIn", 
    link: "https://www.linkedin.com/in/tatigerzenstein/", 
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md bg-white">
      <div className="container-custom py-3 md:py-2">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="flex items-center gap-3">
              <img src="/favicon-2.png" alt="Logo de TG" className="w-8 h-8" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link, className }) => (
                <li key={id} className="cursor-pointer py-4">
                  <a
                    href={link}
                    target={id === 4 ? "_blank" : "_self"}
                    rel={id === 4 ? "noopener noreferrer" : ""}
                    className={`text-lg font-medium
                    hover:text-primary py-2 hover:border-b-2
                    hover:border-primary transition-all duration-500 ${className || ""}`}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button className="btn-primary">Contacto</button>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <div className="space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-black transition-transform ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-black transition-opacity ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-black transition-transform ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-3 bg-white rounded-lg shadow-lg">
            <ul className="flex flex-col items-start gap-4 p-4">
              {MenuLinks.map(({ id, name, link, className }) => (
                <li key={id}>
                  <a
                    href={link}
                    target={id === 4 ? "_blank" : "_self"}
                    rel={id === 4 ? "noopener noreferrer" : ""}
                    className={`block text-lg font-medium hover:text-primary transition-all ${className || ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button
                className="btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


