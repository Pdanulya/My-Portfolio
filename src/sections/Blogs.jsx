import React from 'react';
import {useState} from 'react';
import metalearning from '../assets/metalearning.jpg'; 
import Networks from '../assets/Networks.jpg';
import suseng from '../assets/suseng.png';  
import { FaChevronCircleRight } from "react-icons/fa";
import RevealOnScroll from '../UI/RevealOnScroll';


export default function Blogs() {
    const [blogs] = useState([
        {
            image: suseng,
            name: "Sustainable Enginnering",  
            description: "Exploring how technology and innovation contribute to building a more sustainable future. This article discusses eco-friendly engineering practices," +
             "renewable energy solutions, and the role of technology in promoting environmental responsibility within modern industries."          
        },
        {
            image: Networks,
            name: "Potential of 5G Networks",
            description: "A deep dive into how 5G technology is transforming connectivity. This article highlights its impact on communication speed,"+
            " IoT development, smart cities, and the digital economy — outlining how 5G is paving the way for a more interconnected and efficient world."
        },
        {
            image: metalearning,
            name: "Meta Learning",
            description: "An introduction to the fascinating concept of learning how to learn — understanding the why, what, and how behind learning itself." + 
            "This article explores how meta learning enables machines and humans alike to adapt faster, think more efficiently, and improve performance through experience and reflection."
        }
    ]);
  return (
    <section
      id="blogs"
      className=' pt-30 flex font-mono items-center justify-center'
    >
        <RevealOnScroll>
        <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-5xl font-semibold mb-12 py-1 bg-gradient-to-r from-teal-500 to-indigo-600
            bg-clip-text text-transparent text-center'>
                My Blogs
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center'>

                {blogs.map((blog, index) =>(
                    <div
                        key={index}
                        className='p-6 rounded-xl flex flex-col items-center text-left border-2 border-white/10
                        hover:border-teal-400  hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1
                        transition-all'
                    >
                        <h3 className='font-semibold text-xl mb-4'>{blog.name}</h3>
                        <div className='flex flex-wrap sm:items-center gap-2 mb-4 '>
                        
                        <div className='flex flex-wrap text-center my-5  justify-center gap-3 border-2
                        border-white/10 hover:border-blue-500/30 curdor-pointer rounded-xl'>
                            
                            <a 
                                href="https://medium.com/@poojanidanulya"
                                className='flex justify-between items-center font-bold target=_blank'
                            >
                                {" "}
                                <img 
                                className='rounded-xl'
                                src={blog.image} alt={`${blog.name}Image`}/>
                            </a>
                        </div>
                        <p className='text-gray-300 mb-4'>{blog.description}</p>

                        <a
                            href="https://medium.com/@poojanidanulya"
                            target='_blank'
                        >
                            <button
                                className='w-full bg-gradient-to-r from-teal-500 to-indigo-600 px-2 py-3 flex justify-center mx-auto cursor-pointer
                                rounded font-medium trasnition relative overflow:hidden hover:-trasnlate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                            >
                                <p className='text-white'>Read on Medium</p>
                                    <span className='h-5 ml-2 text-xl text-white'>
                                        <FaChevronCircleRight /> 
                                    </span>   
                            </button>
                        </a>
                        
                        </div>
                    </div>
                ))} 
                
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}
