import React, { useState } from 'react';
import { CONTENT } from '../data/content';
import { X, ExternalLink } from 'lucide-react';

interface AboutProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const { about } = CONTENT;
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const handleBookClick = (book: any) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  // Fallback if content hasn't been updated in type check yet
  const books = (about as any).books || [];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-pastelbeige text-obsidian overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* Images Grid (3 Columns) */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] md:h-[400px] lg:h-[500px]">
            {books.map((book: any, index: number) => (
              <div
                key={book.id}
                className={`relative h-full w-full shadow-lg overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${index === 1 ? 'mt-8 md:mt-0' : index === 2 ? 'mt-16 md:mt-0' : ''}`}
                onClick={() => handleBookClick(book)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500"></div>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
            ))}
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
                href="#library"
                onClick={(e) => onNavigate(e, 'library')}
                className="inline-block border-b-2 border-crimson pb-2 text-2xl font-serif italic hover:text-crimson transition-colors"
              >
                Hemen Tıkla &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>

          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl flex flex-col md:flex-row animate-in zoom-in-50 duration-300">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 p-2 bg-white/50 rounded-full hover:bg-crimson hover:text-white transition-colors">
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
              <img src={selectedBook.image} alt={selectedBook.title} className="w-full h-full object-cover" />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-3xl font-serif italic text-obsidian mb-2">{selectedBook.title}</h3>
                <div className="w-16 h-1 bg-crimson"></div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {selectedBook.description}
              </p>

              {/* Conditional Rendering: Links or 'Coming Soon' */}
              {selectedBook.purchaseLinks && selectedBook.purchaseLinks.length > 0 ? (
                <>
                  <div className="space-y-4">
                    <p className="font-bold text-sm tracking-widest uppercase text-gray-400">Satın Al</p>
                    <div className="flex flex-wrap gap-4">
                      {selectedBook.purchaseLinks.map((link: any, idx: number) => (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-200 hover:border-crimson hover:text-crimson transition-colors text-sm font-bold flex items-center gap-2">
                          {link.name} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 py-2">
                    <div className="h-px bg-gray-200 flex-grow"></div>
                    <span className="text-gray-400 font-serif italic">Ya da</span>
                    <div className="h-px bg-gray-200 flex-grow"></div>
                  </div>

                  <div>
                    <a
                      href="#library"
                      onClick={(e) => {
                        // We do NOT stop propagation here because we want the navigation to happen
                        // but we might want to close the modal too?
                        // Navigation to library will unmount this component anyway.
                        onNavigate(e, 'library');
                      }}
                      className="w-full block text-center bg-crimson text-white py-4 font-bold tracking-widest hover:bg-obsidian transition-colors cursor-pointer"
                    >
                      ŞİMDİ OKU
                    </a>
                  </div>
                </>
              ) : (
                <div className="pt-8 text-center md:text-left">
                  <span className="inline-block px-8 py-3 bg-gray-100 text-gray-500 font-bold tracking-widest uppercase text-sm border border-gray-200">
                    ÇOK YAKINDA
                  </span>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default About;