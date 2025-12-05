import React from 'react';
import { CONTENT } from '../data/content';

const Hero: React.FC = () => {
  const { hero } = CONTENT;

  return (
    <section className="relative w-full h-screen bg-obsidian text-softpearl overflow-hidden">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
        <img 
           src={hero.image} 
           alt="Author Portrait" 
           className="object-cover w-full h-full grayscale"
         />
      </div>

      {/* Author Name - Bottom Right */}
      <div className="absolute bottom-12 right-6 md:right-16 z-20">
        <h1 className="text-4xl md:text-6xl font-serif italic text-white tracking-wide text-right">
          Övgü Deveci Safi
        </h1>
      </div>

    </section>
  );
};

export default Hero;