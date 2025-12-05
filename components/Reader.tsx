import React, { useState, useRef, useEffect } from 'react';
import { X, ArrowLeft, MessageSquare, Send } from 'lucide-react';
import { Book, Chapter, Comment } from '../types';

interface ReaderProps {
  book: Book;
  chapter: Chapter;
  onBackToDetail: () => void;
  onClose: () => void;
  onNextChapter?: () => void;
}

const Reader: React.FC<ReaderProps> = ({ book, chapter, onBackToDetail, onClose, onNextChapter }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeParagraphComments, setActiveParagraphComments] = useState<{ id: string; comments: Comment[] } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle Scroll Progress
  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const windowHeight = scrollHeight - clientHeight;
      if (windowHeight > 0) {
        const progress = (scrollTop / windowHeight) * 100;
        setScrollProgress(progress);
      }
    }
  };

  useEffect(() => {
    const ref = contentRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      // Reset scroll when chapter changes
      ref.scrollTop = 0;
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, [chapter]);

  const openParagraphComments = (paragraphId: string, comments: Comment[] = []) => {
    setActiveParagraphComments({
      id: paragraphId,
      comments: comments
    });
  };

  return (
    <div className="fixed inset-0 z-[70] bg-[#f5f4f0] flex flex-col animate-in slide-in-from-right duration-500">
      
      {/* Depth Tracker (Progress Bar) */}
      <div className="h-1 bg-gray-200 w-full z-50">
        <div 
          className="h-full bg-crimson transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Header */}
      <div className="bg-[#f5f4f0] border-b border-gray-200 px-6 py-4 flex justify-between items-center text-obsidian shrink-0 z-40 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBackToDetail}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-crimson transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Kitap Detayına Dön</span>
          </button>
          <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
          <div>
            <span className="font-serif italic font-bold text-lg hidden sm:inline mr-2">{book.title}</span>
            <span className="text-gray-400 text-sm hidden sm:inline">/</span>
            <span className="text-xs uppercase tracking-wider text-gray-600 ml-2">{chapter.title}</span>
          </div>
        </div>
        
        <div className="flex gap-4">
            <button 
                onClick={onClose}
                className="text-gray-400 hover:text-crimson transition-colors"
                title="Kapat"
            >
                <X size={24} />
            </button>
        </div>
      </div>

      {/* Main Content & Sidebar Wrapper */}
      <div className="flex-1 flex overflow-hidden relative">
          
          {/* Content Area */}
          <div 
            ref={contentRef}
            className="flex-1 overflow-y-auto px-4 sm:px-0 py-12 md:py-20 scroll-smooth"
          >
            <div className="max-w-3xl mx-auto">
              {/* Chapter Title in Text */}
              <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-obsidian mb-4">{chapter.title}</h2>
                {chapter.subtitle && (
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{chapter.subtitle}</p>
                )}
                <div className="w-12 h-1 bg-crimson mx-auto mt-8"></div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-8 px-4 md:px-12 relative">
                {chapter.content.map((paragraph) => (
                  <div key={paragraph.id} className="group relative pl-0 md:pl-0">
                    <p className="font-serif text-lg md:text-xl leading-[1.8] text-gray-800 text-justify">
                      {paragraph.text}
                    </p>
                    
                    {/* Paragraph Interaction (Right Gutter) - Desktop */}
                    <div className="hidden md:flex absolute top-1 -right-10 lg:-right-16 items-center">
                        <button 
                            onClick={() => openParagraphComments(paragraph.id, paragraph.comments)}
                            className={`p-2 transition-all duration-300 transform hover:scale-110 ${
                                paragraph.comments && paragraph.comments.length > 0 
                                ? 'text-crimson opacity-100' 
                                : 'text-gray-400 opacity-30 hover:opacity-100'
                            }`}
                            title="Yorum Yap / Oku"
                        >
                            <MessageSquare size={22} fill={paragraph.comments?.length ? "currentColor" : "none"} />
                            {paragraph.comments && paragraph.comments.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-crimson text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                                    {paragraph.comments.length}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Interaction (Bottom Row) */}
                    <div className="md:hidden mt-2 flex justify-end">
                        <button 
                            onClick={() => openParagraphComments(paragraph.id, paragraph.comments)}
                            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded transition-colors ${
                                paragraph.comments && paragraph.comments.length > 0  ? 'text-crimson bg-crimson/5' : 'text-gray-400 hover:bg-gray-100'
                            }`}
                        >
                            <MessageSquare size={14} fill={paragraph.comments?.length ? "currentColor" : "none"} />
                            {paragraph.comments?.length || 0} Yorum
                        </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chapter Comments Section (Bottom) */}
              <div className="mt-24 px-4 md:px-12">
                 <div className="border-t-2 border-gray-100 pt-16">
                    <div className="flex items-center gap-3 mb-10">
                        <MessageSquare className="text-crimson" size={28} />
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-obsidian">Bölüm Yorumları</h3>
                        <span className="bg-gray-200 text-gray-600 text-sm font-bold px-3 py-1 rounded-full">{chapter.comments?.length || 0}</span>
                    </div>

                    {/* Comment List */}
                    <div className="space-y-8 mb-12">
                        {chapter.comments && chapter.comments.length > 0 ? (
                            chapter.comments.map((comment) => (
                                <div key={comment.id} className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 font-serif font-bold text-xl shrink-0 shadow-sm">
                                        {comment.user.charAt(0)}
                                    </div>
                                    <div className="flex-1 max-w-2xl">
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <span className="font-bold text-base text-gray-900">{comment.user}</span>
                                            <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">{comment.date}</span>
                                        </div>
                                        <div className="relative">
                                            <p className="text-gray-700 font-serif leading-relaxed text-base bg-white p-6 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                                                {comment.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-gray-500">
                                <p className="font-serif text-lg italic mb-2">Henüz yorum yok.</p>
                                <p className="text-xs uppercase tracking-widest">Bu bölüm hakkındaki düşüncelerinizi ilk siz paylaşın.</p>
                            </div>
                        )}
                    </div>

                    {/* Add Comment Form */}
                    <div className="flex gap-4 items-start max-w-3xl">
                        <div className="w-12 h-12 rounded-full bg-crimson flex items-center justify-center text-white font-serif font-bold text-xl shrink-0 shadow-md">
                            S
                        </div>
                        <div className="flex-1 relative">
                            <textarea 
                                className="w-full bg-white border border-gray-200 rounded-xl p-5 text-base font-serif focus:border-crimson focus:ring-1 focus:ring-crimson outline-none min-h-[140px] shadow-sm placeholder-gray-400 transition-all resize-none"
                                placeholder="Bu bölüm hakkındaki düşüncelerinizi paylaşın..."
                            ></textarea>
                            <div className="absolute bottom-4 right-4">
                                <button className="bg-crimson hover:bg-redcarriage text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    <Send size={14} /> Gönder
                                </button>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>

              {/* End Marker */}
              <div className="mt-32 text-center pb-24 border-t border-gray-100 pt-12">
                <span className="text-xl text-gray-300 font-serif italic block mb-8 tracking-widest">~ Bölüm Sonu ~</span>
                
                {onNextChapter && (
                    <div className="flex justify-center">
                        <button 
                            onClick={onNextChapter}
                            className="px-10 py-4 border-2 border-gray-900 text-gray-900 hover:bg-crimson hover:border-crimson hover:text-white transition-all text-sm font-bold uppercase tracking-[0.2em]"
                        >
                            Sonraki Bölüm
                        </button>
                    </div>
                )}
              </div>
            </div>
          </div>

          {/* Paragraph Comments Sidebar */}
          {activeParagraphComments && (
             <div className="absolute top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 animate-in slide-in-from-right duration-300 flex flex-col border-l border-gray-200">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-crimson mb-1">Paragraf Notları</h3>
                        <p className="text-xs text-gray-400">Seçili metin üzerine düşünceler</p>
                    </div>
                    <button onClick={() => setActiveParagraphComments(null)} className="text-gray-400 hover:text-crimson transition-colors p-2 hover:bg-gray-100 rounded-full">
                        <X size={20} />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {activeParagraphComments.comments && activeParagraphComments.comments.length > 0 ? (
                        activeParagraphComments.comments.map((comment) => (
                            <div key={comment.id} className="relative pl-4 border-l-2 border-gray-200 hover:border-crimson transition-colors group">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold text-gray-900">{comment.user}</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{comment.date}</span>
                                </div>
                                <p className="text-sm text-gray-600 font-serif leading-relaxed group-hover:text-gray-900 transition-colors">{comment.text}</p>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center h-48 text-gray-300 text-center">
                            <MessageSquare size={40} className="mb-4 opacity-20" />
                            <p className="text-sm font-medium text-gray-400">Henüz not yok.</p>
                            <p className="text-xs mt-1">Bu paragrafa ilk notu siz düşün.</p>
                        </div>
                    )}
                </div>

                {/* Sidebar Input */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Bir not ekle..." 
                            className="w-full bg-white border border-gray-200 rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson shadow-sm"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-crimson hover:text-redcarriage p-2">
                            <Send size={16} />
                        </button>
                    </div>
                </div>
             </div>
          )}
      </div>
    </div>
  );
};

export default Reader;