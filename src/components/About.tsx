import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white text-gray-900 py-16 px-8 space-y-6">
      <motion.h2
        className="text-4xl font-semibold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <div className="max-w-4xl mx-auto text-lg">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          I'm Rintu C Reji, a Full Stack Developer specializing in JavaScript,
          React.js, Node.js, PHP, and Java. With a passion for building
          scalable, efficient web applications, I’ve worked on impactful
          projects that have improved operational efficiency by 50%. Always
          eager to learn and collaborate, I focus on writing clean code and
          delivering solutions that solve real-world problems.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
