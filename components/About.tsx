import React from 'react';
import { CONTENT } from '../data/content';

const About: React.FC = () => {
  const { about } = CONTENT;

  return (
    <section className="relative w-full py-24 lg:py-32 bg-pastelbeige text-obsidian overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column (Composite Media Group) */}
          <div className="col-span-1 lg:col-span-5 relative h-[500px] lg:h-[700px]">
            {/* Image Container A (Primary) */}
            <div className="absolute top-0 left-0 w-[85%] h-[85%] z-10 shadow-2xl">
              <img 
                src={about.images.primary}
                alt="Main Portrait" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            
            {/* Image Container B (Secondary) */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[40%] z-20 border-8 border-pastelbeige shadow-2xl">
              <img 
                src={about.images.secondary}
                alt="Detail Shot" 
                className="w-full h-full object-cover sepia-[.5] hover:sepia-0 transition-all duration-500"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-obsidian/10 -z-0 transform rotate-3"></div>
          </div>

          {/* Right Column (Content Group) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-8 pl-0 lg:pl-12">
            {/* Section Headline */}
            <h2 className="text-5xl lg:text-7xl font-serif leading-none">
              {about.headline.line1} <br />
              <span className="italic font-normal text-crimson ml-16">{about.headline.line2}</span>
            </h2>
            
            {/* Body Text */}
            <div className="space-y-6 text-gray-800 font-sans text-lg leading-relaxed max-w-xl">
              {about.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="pt-4">
               <span className="font-serif italic text-2xl border-b border-crimson pb-1">{about.signature}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;