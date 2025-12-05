import React, { useState } from 'react';
import { CONTENT } from '../data/content';
import { Book, Chapter } from '../types';
import BookDetail from './BookDetail';
import Reader from './Reader';
import { ChevronRight } from 'lucide-react';

type ViewState = 'GRID' | 'DETAIL' | 'READER';

const Library: React.FC = () => {
  const { library } = CONTENT;
  
  const [view, setView] = useState<ViewState>('GRID');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setView('DETAIL');
  };

  const handleBackToGrid = () => {
    setSelectedBook(null);
    setActiveChapter(null);
    setView('GRID');
  };

  const handleChapterSelect = (chapter: Chapter) => {
    setActiveChapter(chapter);
    setView('READER');
  };

  const handleBackToDetail = () => {
    setActiveChapter(null);
    setView('DETAIL');
  };

  const handleNextChapter = () => {
    if (selectedBook && activeChapter) {
        const currentIndex = selectedBook.chapters.findIndex(c => c.id === activeChapter.id);
        if (currentIndex < selectedBook.chapters.length - 1) {
            setActiveChapter(selectedBook.chapters[currentIndex + 1]);
        } else {
            handleBackToDetail();
        }
    }
  };

  return (
    <section className="relative w-full py-24 bg-obsidian text-softpearl min-h-screen">
      <div className="container mx-auto px-6">
        
        {view === 'GRID' && (
            <div className="animate-in fade-in duration-500">
                <div className="mb-16 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson mb-4">Koleksiyon</p>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                    Dijital <span className="italic text-gray-500">Kütüphane</span>
                </h2>
                <div className="w-24 h-1 bg-crimson mx-auto"></div>
                </div>

                {/* Immersive Book Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {library?.map((book: Book) => (
                    <div 
                    key={book.id} 
                    className="group cursor-pointer flex flex-col"
                    onClick={() => handleBookClick(book)}
                    >
                    <div className="relative aspect-[2/3] w-full overflow-hidden shadow-xl rounded-sm mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                        {/* Book Cover Image */}
                        <img 
                        src={book.cover} 
                        alt={book.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-6 py-2 border border-white text-white text-xs font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm">
                                İncele
                            </span>
                        </div>
                    </div>

                    {/* Card Meta */}
                    <div className="text-center space-y-2">
                        <h3 className="text-2xl font-serif text-white group-hover:text-crimson transition-colors">
                            {book.title}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            {book.author}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        )}
      </div>

      {/* Book Detail View */}
      {view === 'DETAIL' && selectedBook && (
        <BookDetail 
            book={selectedBook} 
            onBack={handleBackToGrid}
            onChapterSelect={handleChapterSelect}
        />
      )}

      {/* Reader View */}
      {view === 'READER' && selectedBook && activeChapter && (
        <Reader 
            book={selectedBook} 
            chapter={activeChapter}
            onBackToDetail={handleBackToDetail} 
            onClose={handleBackToGrid}
            onNextChapter={handleNextChapter}
        />
      )}
    </section>
  );
};

export default Library;