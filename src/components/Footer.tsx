// src/components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Rintu C Reji. All Rights Reserved.</p>

        <div className="mt-4 flex justify-center space-x-8">
          <a
            href="https://github.com/rintu-reji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 opacity-75 hover:opacity-100"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rintucreji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 opacity-75 hover:opacity-100"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:rintucreji@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 opacity-75 hover:opacity-100"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
