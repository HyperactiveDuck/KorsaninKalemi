import React from 'react';
import { CONTENT } from '../data/content';

const Services: React.FC = () => {
  const { services } = CONTENT;

  return (
    <section className="relative w-full py-32 bg-obsidian text-softpearl overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image Group (Left Side) */}
          <div className="col-span-1 lg:col-span-6 relative h-[600px] lg:h-[800px] order-1 lg:order-1">
             
             {/* Big Vertical Image (Background layer) - Aligned Right of this column to meet the text */}
             <div className="absolute top-12 right-0 w-[85%] h-full z-10 shadow-2xl">
                <img 
                   src={services.images.bigVertical}
                   alt="Main Services Visual" 
                   className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                />
             </div>

             {/* Smaller Top-Left Overlapping Image */}
             {/* Positioned relative to the big image's container for the "top-left" effect */}
             <div className="absolute top-0 left-8 w-[50%] h-[35%] z-20 shadow-2xl border-4 border-obsidian">
                <img 
                   src={services.images.smallOverlap}
                   alt="Detail Visual" 
                   className="w-full h-full object-cover sepia-[.2]"
                />
             </div>
             
             {/* Texture Overlay */}
             <div className="absolute bottom-12 left-12 z-0 opacity-20 hidden lg:block">
                 <div className="w-64 h-64 border border-crimson/50 rounded-full animate-pulse-slow"></div>
             </div>

          </div>

          {/* Content Group (Right Side - Overlapping the images) */}
          <div className="col-span-1 lg:col-span-6 relative z-30 order-2 lg:order-2 pt-12 lg:pt-0">
             {/* Negative margin left to pull text over the image on the left */}
             <div className="bg-obsidian/80 backdrop-blur-sm lg:bg-transparent p-6 lg:p-0 lg:-ml-32 relative pl-6 lg:pl-12">
                <div className="mb-12">
                    <h2 className="text-5xl lg:text-7xl font-serif leading-[0.9] text-white mix-blend-difference">
                      {services.headline.line1} <br />
                      <span className="italic font-normal text-crimson">{services.headline.line2}</span><br/>
                      <span className="font-bold">{services.headline.line3}</span>
                    </h2>
                </div>
                
                <div className="space-y-12">
                    {services.items.map((service, idx) => (
                        <div key={idx} className="group cursor-pointer flex gap-6 items-start border-l border-gray-800 pl-6 hover:border-crimson transition-colors duration-500">
                            <span className="text-xs font-bold text-gray-500 mt-1">0{idx + 1}.</span>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-serif text-white group-hover:text-ceramicyellow transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-200 text-xs tracking-wide uppercase max-w-xs">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;