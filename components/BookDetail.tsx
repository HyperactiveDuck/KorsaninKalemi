import React from 'react';
import { Book, Chapter } from '../types';
import { ArrowLeft, ShoppingBag, BookOpen, Clock } from 'lucide-react';
import Button from './Button';

interface BookDetailProps {
  book: Book;
  onBack: () => void;
  onChapterSelect: (chapter: Chapter) => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, onBack, onChapterSelect }) => {
  return (
    <div className="fixed inset-0 z-[60] bg-obsidian overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-500">
      
      {/* Navbar / Back Button */}
      <div className="sticky top-0 z-50 flex justify-between items-center p-6 bg-obsidian/80 backdrop-blur-md border-b border-gray-900">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kütüphaneye Dön
        </button>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Book Cover */}
          <div className="col-span-1 lg:col-span-5 relative">
            <div className="relative aspect-[2/3] w-full shadow-2xl rounded-sm overflow-hidden border border-gray-800">
              <img 
                src={book.cover} 
                alt={book.title} 
                className="w-full h-full object-cover"
              />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none"></div>
            </div>
            
            {/* Purchase Actions */}
            <div className="mt-8 flex flex-col gap-4">
              <Button 
                onClick={() => window.open(book.purchaseLink || '#', '_blank')} 
                variant="primary" 
                className="w-full flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} />
                Satın Al (Kitapyurdu)
              </Button>
              <p className="text-center text-[10px] uppercase tracking-widest text-gray-500">
                Fiziksel kopyayı imzalı sipariş edin
              </p>
            </div>
          </div>

          {/* Right Column: Details & Chapters */}
          <div className="col-span-1 lg:col-span-7 space-y-12">
            
            {/* Header */}
            <div className="space-y-4 border-b border-gray-800 pb-8">
              <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-none">
                {book.title}
              </h2>
              <p className="text-crimson text-sm font-bold uppercase tracking-[0.2em]">
                {book.author}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-sans pt-4">
                {book.description}
              </p>
            </div>

            {/* Chapter List */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="text-crimson" size={24} />
                <h3 className="text-2xl font-serif text-white">İçindekiler</h3>
              </div>
              
              <div className="grid gap-4">
                {book.chapters.map((chapter, index) => (
                  <div 
                    key={chapter.id}
                    onClick={() => onChapterSelect(chapter)}
                    className="group bg-gray-900/50 border border-gray-800 hover:border-crimson p-6 cursor-pointer transition-all duration-300 flex justify-between items-center"
                  >
                    <div className="flex gap-6 items-center">
                       <span className="text-2xl font-serif text-gray-600 group-hover:text-crimson transition-colors w-8">
                         {String(index + 1).padStart(2, '0')}
                       </span>
                       <div>
                          <h4 className="text-xl font-serif text-gray-200 group-hover:text-white transition-colors">
                            {chapter.title}
                          </h4>
                          {chapter.subtitle && (
                            <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                              {chapter.subtitle}
                            </p>
                          )}
                       </div>
                    </div>

                    <div className="flex items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                       <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-gray-400">
                          <Clock size={12} />
                          <span>5 dk</span>
                       </div>
                       <Button variant="outline" className="px-4 py-2 text-[10px]">
                          Oku
                       </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;