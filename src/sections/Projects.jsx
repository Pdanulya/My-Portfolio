import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

import healthapp from '../assets/healthapp.png';
import coffeshop from '../assets/coffeshop.png';
import Project from '../assets/Project.png';
import SHEREST from '../assets/SHEREST.jpg';

import RevealOnScroll from '../UI/RevealOnScroll';
import { FaChevronCircleRight } from "react-icons/fa";

export default function Projects() {
  const [projects] = useState([
    {
        slug: "healthapp",
        image: healthapp,
        name: "Health Care Monitoring Website",
        description: "A healthcare monitoring website for real-time health measurements, view history and download reports. All data is securely stored and synced using Firebase Realtime Database",
        techStack: ["HTML/CSS", "JavaScript", "Firebase"],
        link: "https://github.com/Pdanulya/PulseCare-Smart-Health-Monitoring-Website"
    },
    {
        slug: "coffeshop",
        image: coffeshop,
        name: "CAFATEO - E-Commerce Platform",
        description: "An e-commerce platform for a restaurant, enabling user authentication, online ordering, and secure payments for a smooth and reliable experience. MongoDB is used to store order details and customer information securely.",
        techStack: ["HTML/CSS", "Node.js", "MongoDB"],
        link: "https://github.com/Pdanulya/Cafateo-Ecommerce-Website"
    },
    {
        slug: "patientmonitor",
        image: Project,
        name: "Microcontroller-Driven Patient Monitor",
        description: "A real-time health monitoring system using ESP32-WROOM and multiple sensors to measure heart rate, SpO₂, body temperature, ECG, weight, and height, with results displayed on an LCD and controlled via a keypad.",
        techStack: ["Arduino", "EasyEDA"],
        // link: ""  
    },
    {
        slug: "sherest",
        image: SHEREST,
        name: "SheRest - The Emotional Supporter",
        description: "SheRest is a mobile app supporting women’s psychological and emotional safety, offering a secure space to express feelings, track emotional patterns, and access professional guidance.",
        techStack: ["Ongoing Project"],
        // link: "" 
    }
    
  ]);
  return (
    <section 
      id="projects"
      className='pt-40 flex font-mono items-center justify-center'
    >
        <RevealOnScroll>
        <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-5xl py-1 font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600
            bg-clip-text text-transparent text-center'>
                My Projects
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center'>

                {projects.map((project) => (
                <div
                    key={project.slug}
                    className='p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10
                    hover:border-teal-400 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1
                    transition-all'
                >
                    <h3 className='font-semibold text-xl mb-4'>{project.name}</h3>

                    <a 
                        href={project.link} target="_blank"
                        className='flex justify-between items-center font-bold mb-4'
                    >
                        {" "}
                        <img 
                        className='rounded-xl'
                        src={project.image} alt={`${project.name}Image`}/>
                    </a>

                    <p className='text-gray-300 mb-6 text-left'>{project.description}</p>

                    <div className='flex flex-wrap sm:items-center gap-2 mb-4 '>
                        {project.techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="py-1 px-3 bg-blue-500/10 text-white rounded-lg hover:bg-blue-500/20"
                            >{tech}
                            </span>
                        ))}
                    </div>

                    <Link
                    to={`/projects/${project.slug}`}
                    className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 px-4 py-3 mt-7 flex justify-center mx-auto 
                    cursor-pointer rounded font-medium trasnition relative overflow:hidden hover:-trasnlate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                    <span className="text-white">View Project</span>
                    <FaChevronCircleRight className="text-white ml-2 text-xl" />
                    </Link>
                    
                </div>
                ))}

            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}
