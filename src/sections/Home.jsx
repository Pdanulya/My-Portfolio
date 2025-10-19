import React from 'react';
import profileImg from "../assets/profile-pic.jpg";
//import resume from "../assets/Poojani_Danulya_Resume.pdf";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section 
      id="#home"
      className='min-h-screen flex flex-col justify-center items-center
      lg:flex-row-reverse gap-9 lg:gap-15'
    >
        <div className='text-centerz-10 px-4'>
            <img 
                className='w-[300px] border-0 mt-30 rounded-full shadow-lg shadow-gray-500/70
                lg:m-0 lg:max-w-[250] object-cover object-bottom hover:translate-y-1 transition-all' 
                src={profileImg} 
                alt='Profile Image' 
            />
        </div>
        <div className='text-center font-mono z-10 mt-20 px-4'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl lg:max-w-w[500px] font-semibold
            mb-8 px-1 py-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text 
            text-transparent leading-right'>
               I am Poojani Danulya,
        </h1>
        <p className='text-gray-300 text-xl mb-12 max-w-2xl mx-auto'>
          An undergraduate at the Faculty of Information Technology, University of Moratuwa, with a strong interest in full-stack web development. 
          I specialize in developing end-to-end web applications, integrating responsive user interfaces with reliable backend systems.
        </p>
        <div className='flex justify-center items-center space-x-4'>
            <a 
              className='bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600
              py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
              font-medium transition relative overflow-hidden'
              href="#contact"
            >
              Contact Me
            </a>
            {/* <a 
              className='bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600
              py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
              font-medium transition relative overflow-hidden'
              //href={resume}
            >
              <p>Download CV</p>
              <span className='h-5 ml-3 text-2xl text-white'>  
                <FaDownload /> 
              </span>
            </a> */}

        </div>
        </div>
        
    </section>
  )
}
