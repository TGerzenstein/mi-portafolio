import React from "react";

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Servicios", link: "/#Servicios" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container-custom py-3 md:py-2">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="flex items-center gap-3">
              <img src="/favicon-2.png" alt="Logo de TG" className="w-8 h-8" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="cursor-pointer py-4">
                  <a
                    href={link}
                    className="text-lg font-medium
                   hover:text-primary py-2 hover:border-b-2
                   hover:border-primary transition-all duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button className="btn-primary">Contacto</button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
