import React from 'react';
import { CONTENT } from '../data/content';
import { Calendar, MapPin } from 'lucide-react';

const Signing: React.FC = () => {
    // Basic fallback if signing data is missing in types/content during dev
    const signing = (CONTENT as any).signing || { headline: "İMZA GÜNLERİ", events: [] };

    return (
        <section className="relative w-full py-24 bg-pastelbeige text-obsidian border-t border-gray-200">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-crimson mb-4">
                        {signing.headline}
                    </h2>
                    <div className="w-24 h-1 bg-obsidian mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {signing.events.map((event: any) => (
                        <div key={event.id} className="bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                            <div className="flex items-center justify-center mb-6 text-crimson group-hover:scale-110 transition-transform">
                                <Calendar size={48} strokeWidth={1} />
                            </div>

                            <h3 className="text-3xl font-serif text-center mb-2">{event.city}</h3>
                            <p className="text-center text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">{event.date}</p>

                            <div className="border-t border-gray-100 pt-6 space-y-2 text-center text-gray-700">
                                <p className="font-bold">{event.venue}</p>
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                    <MapPin size={14} />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Signing;
