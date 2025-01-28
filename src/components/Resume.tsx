import React from "react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="bg-gray-200 text-gray-900 py-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Resume</h2>
      <div className="text-center">
        <a
          href="rintucreji_resume.pdf"
          download
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-all"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
