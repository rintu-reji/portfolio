import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src="images/project/WanderLust.png"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Wanderlust - Airbnb Clone
              </h3>
              <p className="text-gray-600">
                A brief description of the project goes here.
              </p>
            </div>
          </div> */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="images/project/Zerodha1.png"
              alt="Project 2"
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Zerodha Clone
              </h3>
              <p className="text-gray-700 mb-4">
                A full-stack Zerodha clone built with React, Node.js,
                Express.js, and MongoDB.
              </p>
              <a
                href="https://majorproject-wanderlust-7pjk.onrender.com/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="images/project/WanderLust1.png"
              alt="Project 2"
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Wanderlust - Airbnb Clone
              </h3>
              <p className="text-gray-700 mb-4">
                A full-stack Airbnb clone built with Node.js, EJS, Express.js,
                and MongoDB.
              </p>
              <a
                href="https://majorproject-wanderlust-7pjk.onrender.com/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="images/project/ClimaCraft.png"
              alt="Project 2"
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ClimaCraft Weather App
              </h3>
              <p className="text-gray-700 mb-4">
                A weather application built with React and Material-UI.
              </p>
              <a
                // href="https://majorproject-wanderlust-7pjk.onrender.com/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="images/project/SimonSays.png"
              alt="Project 2"
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Simon Says Game
              </h3>
              <p className="text-gray-700 mb-4">
                A memory challenge game built using HTML, CSS, and JavaScript.
              </p>
              <a
                href="https://github.com/rintu-reji/simon_says_game"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="images/project/Spotify.png"
              alt="Project 2"
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Spotify Clone
              </h3>
              <p className="text-gray-700 mb-4">
                A Spotify Clone to replicate the core features of Spotify using
                HTML and CSS.
              </p>
              <a
                href="https://github.com/rintu-reji/spotify_clone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src="images/project/Capture1.png"
              alt="Project 2"
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Capture
              </h3>
              <p className="text-gray-700 mb-4">
                A Photography website built using HTML and CSS.
              </p>
              <a
                href="https://github.com/rintu-reji/spotify_clone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Wanderlust - Airbnb Clone
            </h3>
            <p className="text-gray-700 mb-4">
              A full-stack Airbnb clone built with React, Node.js, Express.js,
              and MongoDB.
            </p>
            <a
              //   href="https://github.com/your-github/wanderlust"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
