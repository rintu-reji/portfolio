import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center py-12"
    >
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Rintu</h1>

      <p className="text-xl mb-6">
        <Typewriter
          words={[
            "A passionate Full Stack Developer",
            // "Always learning.",
            "Crafting innovative solutions",
            "Building the future with code",
            "Always learning and evolving",
            "Turning ideas into code",
          ]}
          loop={true} // Set to true to loop through the phrases
          cursor
          cursorStyle="_"
          typeSpeed={75}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>

      <a
        href="#projects"
        className="bg-blue-500 text-white py-3 px-6 rounded-full transform transition-all hover:scale-105 hover:bg-blue-600"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
