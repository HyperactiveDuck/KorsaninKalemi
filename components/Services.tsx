import React from 'react';
import { CONTENT } from '../data/content';
import { Youtube, Instagram, Play } from 'lucide-react';

const Services: React.FC = () => {
  const { services } = CONTENT;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Youtube': return <Youtube size={48} />;
      case 'Instagram': return <Instagram size={48} />;
      default: return null;
    }
  };

  return (
    <section className="relative w-full py-24 bg-obsidian text-softpearl overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-24">

          {/* Top Section: Split Layout (Images & Socials) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Image Group (Left Side) */}
            <div className="col-span-1 lg:col-span-6 relative h-[500px] lg:h-[700px] order-1 lg:order-1">

              {/* Big Vertical Image (Background layer) */}
              <div className="absolute top-12 right-0 w-[85%] h-full z-10 shadow-2xl">
                <img
                  src={services.images.bigVertical}
                  alt="Main Visual"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                />
              </div>

              {/* Smaller Top-Left Overlapping Image */}
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

            {/* Content Group (Right Side) */}
            <div className="col-span-1 lg:col-span-6 relative z-30 order-2 lg:order-2 pt-12 lg:pt-0">
              <div className="bg-obsidian/80 backdrop-blur-sm lg:bg-transparent p-6 lg:p-0 lg:-ml-32 relative pl-6 lg:pl-12 flex flex-col justify-center">

                {/* Headline */}
                <div className="mb-12">
                  <h2 className="text-5xl lg:text-7xl font-serif leading-[0.9] text-white mix-blend-difference">
                    {services.headline.line1} <br />
                    <span className="italic font-normal text-crimson">{services.headline.line2}</span> <br />
                    <span className="font-bold tracking-wider">{services.headline.line3}</span>
                  </h2>
                </div>

                {/* Social Links */}
                <div className="flex gap-8 md:gap-12 flex-wrap">
                  {services.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-4 hover:scale-110 transition-transform duration-300"
                    >
                      <div className="p-6 border border-gray-700 rounded-full bg-obsidian/50 group-hover:border-crimson group-hover:bg-crimson/10 transition-all duration-300">
                        <span className="text-white group-hover:text-crimson transition-colors duration-300">
                          {getIcon(social.icon)}
                        </span>
                      </div>
                      <span className="text-lg font-serif tracking-widest uppercase group-hover:text-crimson transition-colors duration-300">
                        {social.platform}
                      </span>
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Section: YouTube Videos */}
          <div className="w-full border-t border-gray-800 pt-16">
            <div className="flex justify-between items-end mb-12">
              <h3 className="text-3xl font-serif italic text-white">Son Videolar</h3>
              <a href="https://www.youtube.com/@ovgudeveci" target="_blank" rel="noopener noreferrer" className="text-crimson text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Tümünü Gör &rarr;</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.videos?.map((video: any) => (
                <div key={video.id} className="group block space-y-4">
                  <div className="relative aspect-video overflow-hidden border border-gray-800 group-hover:border-crimson transition-colors bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors leading-tight">
                    {video.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;