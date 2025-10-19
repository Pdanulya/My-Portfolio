import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { SiMedium } from "react-icons/si";
import RevealOnScroll from '../UI/RevealOnScroll';

export default function Footer() {
  return (
    <footer className='pt-30'>
      <RevealOnScroll>
        <div className='bg-[rgba(10,10,10,0.8)] mb-6 flex flex-col gap-6 text-center text-lg text-gray-300
        font-mono '>
            <div className='flex gap-10 p-4 justify-center text-white'>
              <div>
                <p  
                  className='text-4xl font-semibold from-teal-500 to-indigo-600 py-10
                  bg-clip-text text-transparent bg-gradient-to-r'
                >
                  Let's Connect...
                </p>
                <div>
                  <p className='max-w-2xl text-center px-2 '>
                    I’m currently open to exciting opportunities and collaborations.
                    Feel free to connect with me through any of the platforms below.
                  </p>
                  <div 
                    className='flex justify-center items-center space-x-6 my-10'>
                    <a
                      href="www.linkedin.com/in/poojani-danulya-4a0793294"
                      className=' p-2 rounded text-4xl  transition-all text-white hover:text-gray-400'
                      target='_blank'
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/Pdanulya"
                      className=' p-2 rounded text-4xl  transition-all  text-white hover:text-gray-400'
                      target='_blank'
                    >
                      <IoLogoGithub />
                    </a>
                   
                    <a
                      href="mailto:poojanidanulya@gmail.com"
                      className=' p-2 rounded text-4xl  transition-all  text-white hover:text-gray-400'
                      target='_blank'
                    >
                      <MdEmail />
                    </a>
                  </div>
                </div>
              </div>               
            </div>
        </div>
          <p
            className='text-center text-gray-500 font-mono text-xl my-7 mx-3'
          >
            @ 2025 Poojani Danulya. All rights reserved.
          </p>
      </RevealOnScroll>
    </footer>
  )
}
