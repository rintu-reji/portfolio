// src/components/Skills.tsx
import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gray-200 text-gray-900 py-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="text-center">
          <img
            src="images/logo/html-icon.svg"
            width="15%"
            alt="HTML"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>HTML</p>
        </div>
        <div className="text-center">
          <img
            src="images/logo/css-icon.svg"
            width="15%"
            alt="CSS"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>CSS</p>
        </div>
        <div className="text-center">
          <img
            src="images/logo/javascript.svg"
            width="15%"
            alt="JavaScript"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>JavaScript</p>
        </div>
        <div className="text-center">
          <img
            src="images/logo/React.svg"
            width="15%"
            alt="React"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>React.js</p>
        </div>
        <div className="text-center">
          <img
            src="images/logo/Node.js.svg"
            width="15%"
            alt="Node.js"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>Node.js</p>
        </div>
        <div className="text-center">
          <img
            src="images/logo/java.svg"
            width="15%"
            alt="Java"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>Java</p>
        </div>
        <div className="text-center">
          <img
            src="images/logo/PHP.svg"
            width="15%"
            alt="PHP"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>PHP</p>
        </div>

        <div className="text-center">
          <img
            src="images/logo/Laravel.svg"
            width="15%"
            alt="Laravel"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>Laravel</p>
        </div>
        <div className="text-center">
          <img
            src="images/logo/MySQL.svg"
            width="15%"
            alt="MySQL"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>MySQL</p>
        </div>
        <div className="text-center">
          <img
            src="images/logo/MongoDB.svg"
            width="15%"
            alt="MongoDB"
            className="mx-auto mb-4 hover:scale-110 hover:cursor-pointer"
          />
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
