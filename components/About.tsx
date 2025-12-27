import React from 'react';
import { CONTENT } from '../data/content';

const About: React.FC = () => {
  const { about } = CONTENT;

  return (
    <section className="relative w-full py-24 lg:py-32 bg-pastelbeige text-obsidian overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* Images Grid (3 Columns) */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] md:h-[400px] lg:h-[500px]">
            {/* Image 1 */}
            <div className="relative h-full w-full shadow-lg overflow-hidden group">
              <img
                src={about.images.image1}
                alt="Book Cover 1"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Image 2 */}
            <div className="relative h-full w-full shadow-lg overflow-hidden group mt-8 md:mt-0">
              <img
                src={about.images.image2}
                alt="Book Cover 2"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Image 3 */}
            <div className="relative h-full w-full shadow-lg overflow-hidden group mt-16 md:mt-0">
              <img
                src={about.images.image3}
                alt="Book Cover 3"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-8">
            {/* Section Headline */}
            <h2 className="text-4xl lg:text-6xl font-serif leading-none">
              {about.headline.line1} <br />
              <span className="italic font-normal text-crimson">{about.headline.line2}</span>
            </h2>

            {/* CTA Text */}
            <p className="text-xl font-sans text-gray-800 leading-relaxed font-medium">
              {about.description}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={about.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b-2 border-crimson pb-2 text-2xl font-serif italic hover:text-crimson transition-colors"
              >
                Hemen Tıkla &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;