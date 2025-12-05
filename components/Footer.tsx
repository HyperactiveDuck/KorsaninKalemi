import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-bordeaux text-gray-500 py-16 border-t border-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
            <h4 className="text-2xl font-serif text-white italic tracking-wider mb-2">ÖVGÜ DEVECI SAFI</h4>
            <p className="text-xs uppercase tracking-widest">Yazar & Hikaye Anlatıcısı</p>
        </div>

        <nav className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white">
            <a href="#home" onClick={(e) => onNavigate(e, 'home')} className="hover:text-crimson transition-colors">Ana Sayfa</a>
            <a href="#approach" onClick={(e) => onNavigate(e, 'approach')} className="hover:text-crimson transition-colors">Biyografi</a>
            <a href="#philosophy" onClick={(e) => onNavigate(e, 'philosophy')} className="hover:text-crimson transition-colors">Vizyon</a>
            <a href="#services" onClick={(e) => onNavigate(e, 'services')} className="hover:text-crimson transition-colors">Eserler</a>
            <a href="#contact" onClick={(e) => onNavigate(e, 'contact')} className="hover:text-crimson transition-colors">İletişim</a>
        </nav>

        <div className="flex gap-4">
            <a href="#!" onClick={handleSocialClick} className="p-2 border border-gray-800 rounded-full hover:border-crimson hover:text-crimson transition-all">
                <Instagram size={18} />
            </a>
             <a href="#!" onClick={handleSocialClick} className="p-2 border border-gray-800 rounded-full hover:border-crimson hover:text-crimson transition-all">
                <Linkedin size={18} />
            </a>
             <a href="#!" onClick={handleSocialClick} className="p-2 border border-gray-800 rounded-full hover:border-crimson hover:text-crimson transition-all">
                <Twitter size={18} />
            </a>
        </div>

      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-900 text-center text-[10px] uppercase tracking-widest">
        &copy; 2024 Övgü Deveci Safi. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
};

export default Footer;