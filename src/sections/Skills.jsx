import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';

export default function Skills() {
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Firebase",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "C Language",
    "Java",
    "Figma",
    "Content Writing"
  ];

  return (
    <section
      id="skills"
      className="pt-30 font-mono flex items-center justify-center"
    >
      <RevealOnScroll>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          className="text-5xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 
          bg-clip-text text-transparent text-center"
        >
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border-2 border-white/10 hover:-translate-y-1 hover:border-teal-400 
              transition-all duration-300 bg-gray-800/40 text-center shadow-md"
            >
              <p className="text-gray-200 text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}
