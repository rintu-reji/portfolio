import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-semibold">Rintu C Reji</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-lg hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="text-lg hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="text-lg hover:text-blue-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
