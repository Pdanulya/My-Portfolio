import React from 'react'
import AGM25 from '../assets/AGM25.jpg'
import AGM from '../assets/AGM.jpg'
import BALLERINA from '../assets/BALLERINA.jpg'
import CAREERFAIR from '../assets/CAREERFAIR.jpg'
import CODERUSH from '../assets/CODERUSH.jpg'
import FINNC from '../assets/FINNC.jpg'
import FINNC25 from '../assets/FINNC25.jpg'
import LSEG from '../assets/LSEG.jpg'
import MERCON from '../assets/MERCON.jpg'
import MF from '../assets/MF.jpg'
import PLAQUE from '../assets/PLAQUE.jpg'
import AGM2025 from '../assets/AGM2025.jpg'
import RevealOnScroll from '../UI/RevealOnScroll';

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="h-[1200px] font-mono flex items-center justify-center">
        <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-5xl font-semibold mb-12 py-1 bg-gradient-to-r from-teal-500 to-indigo-600 
              bg-clip-text text-transparent text-center"
            >
                Gallery
            </h2>

            <div
              className='grid grid-cols-1 sm:grid-cols-4 gap-6 justify-items-center'
            >
                <img src= {AGM25} alt="AGM25" className='rounded-lg w-70 h-48 object-cover border-2 border-white/10 hover:border-teal-400'/>
                <img src={CAREERFAIR} alt="CAREERFAIR" className='rounded-lg w-70 h-48 object-cover border-2 border-white/10 hover:border-teal-400'/>
                <img src={CODERUSH} alt="CODERUSH" className='rounded-lg w-70 h-48 object-cover border-2 border-white/10 hover:border-teal-400'/>
                <img src={BALLERINA} alt="BALLERINA" className='rounded-lg w-70 h-48 object-cover border-2 border-white/10 hover:border-teal-400'/>
                <img src={FINNC25} alt="FINNC25" className='rounded-lg w-70 h-50 object-cover border-2 border-white/10 hover:border-teal-400'/>
                <img src={LSEG} alt="LSEG" className='rounded-lg w-70 h-50 object-cover border-2 border-white/10 hover:border-teal-400'/>
                <img src={MERCON} alt="MERCON" className='rounded-lg w-70 h-50 object-cover border-2 border-white/10 hover:border-teal-400'/>
                <img src={MF} alt="MF" className='rounded-lg w-70 h-50 object-cover border-2 border-white/10 hover:border-teal-400'/>
                <img src={PLAQUE} alt="PLAQUE" className='rounded-lg w-70 h-100 object-cover border-2 border-white/10 hover:border-teal-400'/>
                {/* <img src={AGM} alt="AGM" className='rounded-lg w-70 h-90 object-cover border-2 border-white/10 hover:border-teal-400'/> */}
                <img src={AGM2025} alt="AGM" className='rounded-lg w-70 h-100 object-cover border-2 border-white/10 hover:border-teal-400'/>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}
