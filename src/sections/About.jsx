import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';

export default function About() {
  return (
    <section
      id="about"
      className='h-[600px] pt-60 font-mono flex items-center justify-center'
    >
      <RevealOnScroll>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-5xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600
        bg-clip-text text-transparent text-center'>
            About Me
        </h2>
        <div className='p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translte-y-1 transition-all'>
            <p className='text-gray-300 mb-5 text-xl'> 
                Hello! I’m Poojani Danulya, an Information Technology undergraduate at the Faculty of Information Technology, University of Moratuwa.
                I’m a passionate web developer with a strong enthusiasm for building dynamic, responsive, and user-centered web applications. 
                I take great interest in transforming complex ideas into elegant, intuitive, and efficient digital experiences.
            </p>
            <p className='text-gray-300 mb-5 text-xl'> 
                Beyond development, I’m also an active Medium blogger, where I share insights and experiences on technology and innovation. Moreover, 
                I actively volunteer with IEEE Student Branch of the University of Moratuwa, contributing to initiatives that inspire collaboration and technical growth.
            </p>
            <p className='text-gray-300 mb-5 text-xl'>
                In my free time, I enjoy reading, learning new technologies, exploring emerging trends in the tech industry, and occasionally hiking amidst the beauty of nature.

            </p>
        </div>
      </div>
      </RevealOnScroll>

    </section>
  )
}
 