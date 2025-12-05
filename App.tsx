import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Library from './components/Library';
import Footer from './components/Footer';
import Button from './components/Button';
import { Menu, X } from 'lucide-react';
import { CONTENT } from './data/content';

type PageView = 'HOME' | 'LIBRARY';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('HOME');

  useEffect(() => {
    const handleScrollListener = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollListener);
    return () => window.removeEventListener('scroll', handleScrollListener);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, target: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (target === 'library') {
      setCurrentPage('LIBRARY');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage !== 'HOME') {
        setCurrentPage('HOME');
        // Allow state update to render Home first, then scroll
        setTimeout(() => {
           document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const { philosophy } = CONTENT;

  return (
    <div className="min-h-screen bg-obsidian text-softpearl font-sans selection:bg-crimson selection:text-white flex flex-col">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/90 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="font-serif text-2xl font-bold tracking-wider italic relative z-50 cursor-pointer"
          >
            Övgü<span className="text-crimson">.</span>
          </a>

          <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-widest items-center text-white">
            <a href="#approach" onClick={(e) => handleNavClick(e, 'approach')} className={`hover:text-crimson transition-colors shadow-sm ${currentPage === 'LIBRARY' ? 'opacity-70' : ''}`}>Biyografi</a>
            <a href="#philosophy" onClick={(e) => handleNavClick(e, 'philosophy')} className={`hover:text-crimson transition-colors shadow-sm ${currentPage === 'LIBRARY' ? 'opacity-70' : ''}`}>Vizyon</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`hover:text-crimson transition-colors shadow-sm ${currentPage === 'LIBRARY' ? 'opacity-70' : ''}`}>Eserler</a>
            <a href="#library" onClick={(e) => handleNavClick(e, 'library')} className={`hover:text-crimson transition-colors shadow-sm ${currentPage === 'LIBRARY' ? 'text-crimson' : ''}`}>Kütüphane</a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="border border-softpearl px-6 py-2 hover:bg-softpearl hover:text-obsidian transition-colors"
            >
                İletişim
            </a>
          </div>

          <button className="md:hidden text-white relative z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
          <div className="fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center space-y-8 text-xl font-serif italic animate-in fade-in slide-in-from-top-10 duration-300">
             <a href="#approach" onClick={(e) => handleNavClick(e, 'approach')} className="hover:text-crimson">Biyografi</a>
             <a href="#philosophy" onClick={(e) => handleNavClick(e, 'philosophy')} className="hover:text-crimson">Vizyon</a>
             <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-crimson">Eserler</a>
             <a href="#library" onClick={(e) => handleNavClick(e, 'library')} className="hover:text-crimson">Kütüphane</a>
             <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-crimson">İletişim</a>
          </div>
      )}

      <main className="flex-grow">
        {currentPage === 'HOME' ? (
          <>
            <div id="home">
                <Hero />
            </div>
            
            <div id="approach">
                <About />
            </div>
            
            {/* Centered Callout Container (Philosophy) */}
            <div id="philosophy" className="bg-bordeaux text-softpearl py-48 flex flex-col justify-center items-center px-6 relative overflow-hidden text-center">
                {/* Texture */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                
                <div className="relative z-10 text-center max-w-4xl space-y-10">
                    {/* Accent Eyebrow */}
                    <p className="text-sm uppercase tracking-[0.3em] text-ceramicyellow font-bold font-sans">
                        {philosophy.eyebrow}
                    </p>
                    
                    {/* Main Headlines */}
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-8xl font-serif italic text-white leading-tight">
                            {philosophy.headline.top}
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-sans font-bold text-white uppercase tracking-wider leading-tight">
                            {philosophy.headline.bottom}
                        </h2>
                    </div>
                    
                    {/* Narrow Paragraph */}
                    <p className="text-gray-300 max-w-lg mx-auto leading-relaxed font-sans text-base md:text-lg">
                        {philosophy.description}
                    </p>
                    
                    {/* CTA Button (Solid) */}
                    <div className="pt-6">
                        <Button onClick={(e) => handleNavClick(e, 'contact')} variant="primary" className="bg-softpearl text-obsidian border-softpearl hover:bg-white hover:text-black hover:border-white">
                            {philosophy.cta}
                        </Button>
                    </div>
                </div>
            </div>

            <div id="services">
                <Services />
            </div>
          </>
        ) : (
          <div id="library" className="pt-24 min-h-screen bg-obsidian">
             <Library />
          </div>
        )}
      </main>

      <div id="contact">
          <Footer onNavigate={handleNavClick} />
      </div>
    </div>
  );
};

export default App;