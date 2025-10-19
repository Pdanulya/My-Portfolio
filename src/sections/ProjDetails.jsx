import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import healthapp from "../assets/healthapp.png";
import healthcare1 from "../assets/healthcare1.png";
import healthcare2 from "../assets/healthcare2.png";
import healthcare3 from "../assets/healthcare3.png";
import healthcare4 from "../assets/healthcare4.png";

import coffeshop from "../assets/coffeshop.png";
import cafateo1 from "../assets/cafateo1.png";
import cafateo2 from "../assets/cafateo2.png";
import cafateo3 from "../assets/cafateo3.png";
import cafateo4 from "../assets/cafateo4.png";
import cafateo5 from "../assets/cafateo5.png";

import Project from "../assets/Project.png";
import SHEREST from "../assets/SHEREST.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";


const projects = [
  {
    slug: "healthapp",
    image: [healthapp, healthcare1, healthcare2, healthcare3, healthcare4],
    name: "Health Care Monitoring Website",
    description:
      "A healthcare monitoring website developed alongside our First-Year Hardware Project, allowing users to measure Heart Rate, Body Temperature, SpO₂, BMI, and ECG with real-time readings displayed on the site. Users can view history, and download medical reports, with all data securely stored and synced via Firebase.",
    techStack: ["HTML/CSS", "JavaScript", "Firebase", "Firebase Real-Time Database"],
    link: "https://github.com/Pdanulya/PulseCare-Smart-Health-Monitoring-Website",
  },
  {
    slug: "coffeshop",
    image: [cafateo1, cafateo4, cafateo2, cafateo3, cafateo5],
    name: "CAFATEO - E-Commerce Platform",
    description:
      "CAFATEO is an e-commerce platform developed for a restaurant, enabling seamless online ordering and management. Key features include order management, secure payment integration, and user authentication, providing a smooth and reliable experience.",
    techStack: ["HTML/CSS", "Node.js", "Express", "MongoDB", "PayHere API"],
    link: "https://github.com/Pdanulya/Cafateo-Ecommerce-Website",
  },
  {
    slug: "patientmonitor",
    image: Project,
    name: "Microcontroller-Driven Patient Monitor",
    description:
      "A real-time Health Monitoring System developed using the ESP32-WROOM microcontroller and multiple sensors including MAX30102 for heart rate and SpO₂, MAX30205 for body temperature, AD8232 for ECG, HX711 amplifier with 50 kg load cells for weight measurement, and VL53L0X for height detection.",
    techStack: ["Arduino/C++", "EasyEDA", "Sensor Integration"],
  },
  {
    slug: "sherest",
    image: SHEREST,
    name: "SheRest - The Emotional Supporter",
    description:
      "SheRest is a mobile application designed to support women’s psychological and emotional safety. It provides a secure, private, and comforting space where users can express their feelings, track their emotional patterns, and access professional guidance.",
    techStack: ["Ongoing Project"],
  },
];

export default function ProjDetails() {
  const { projectId } = useParams(); // slug from URL // projectId is the slug
  const project = projects.find((p) => p.slug === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white font-mono">
        <h2 className="text-3xl mb-4">Project Not Found</h2>
        <Link
          to="/"
          className="text-teal-400 hover:text-indigo-500 underline flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-40 flex flex-col items-start pl-30 justify-center p-8 font-mono text-white">
      <Link
        to="/"
        className="flex items-center gap-2 underline text-teal-400 hover:text-indigo-500 mb-6"
      >
        <FaArrowLeft /> Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
        {project.name}
      </h1>
      <h2
        className="text-3xl font-semibold mb-6 bg-gradient-to-r from-teal-400 to-indigo-500
        bg-clip-text text-transparent text-center"
      >
        Project Showcase
      </h2>

       <div className="flex flex-wrap justify-center gap-7 mb-15">
    {Array.isArray(project.image) 
      ? project.image.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.name} screenshot ${idx + 1}`}
            className="w-100 h-50 rounded-xl shadow-lg"
          />
        ))
      : (
        <img
          src={project.image}
          alt={project.name}
          className="w-80 h-40 rounded-xl shadow-lg"
        />
      )
    }
  </div>

      <p className="max-w-6xl text-lg text-gray-300 mb-10 text-left">
        {project.description}
      </p>

      <h2
        className="text-3xl font-semibold mb-6 bg-gradient-to-r from-teal-400 to-indigo-500
        bg-clip-text text-transparent text-center"
      >
        Technologies Used
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="py-3 px-4 bg-blue-500/10 text-white rounded-lg hover:bg-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-30 text-lg inline-flex items-center gap-4 bg-gradient-to-r from-teal-500 to-indigo-600 px-6 py-3 rounded font-medium hover:shadow-lg transition"
        >
          GitHub Repo <BsGithub />
        </a>
      )}

    </section>
  );
}
