import React, { useState } from 'react';
import { getBusinessInsight } from '../services/geminiService';
import Button from './Button';
import { Sparkles, Loader2, Quote } from 'lucide-react';

const AiCoach: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    const result = await getBusinessInsight(query);
    
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="w-full py-24 bg-bordeaux text-softpearl relative overflow-hidden border-t border-crimson/20">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif mb-4">
            ASK YOUR VIRTUAL <span className="italic text-crimson">Strategist</span>
          </h2>
          <p className="text-gray-400 font-sans">
            Leverage the power of AI trained on my specific business philosophies. 
            Get an immediate, ruthless assessment of your current bottleneck.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-obsidian border border-gray-800 p-8 shadow-2xl">
          <form onSubmit={handleConsultation} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="problem" className="text-xs uppercase tracking-widest text-ceramicyellow">
                Current Bottleneck
              </label>
              <textarea
                id="problem"
                rows={3}
                className="w-full bg-transparent border-b border-gray-700 focus:border-crimson outline-none text-lg py-2 transition-colors placeholder-gray-600 font-serif"
                placeholder="e.g., My team is talented but misses every deadline..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" variant="primary" disabled={loading} className="w-full sm:w-auto">
                {loading ? <Loader2 className="animate-spin mx-auto" /> : <span className="flex items-center gap-2 justify-center"><Sparkles size={16}/> Get Insight</span>}
              </Button>
            </div>
          </form>

          {response && (
            <div className="mt-8 pt-8 border-t border-dashed border-gray-800 animate-fade-in">
              <div className="flex gap-4">
                <Quote className="text-crimson shrink-0 rotate-180" size={24} />
                <div className="space-y-4">
                  <p className="text-xl font-serif italic text-white leading-relaxed">
                    "{response}"
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 text-right">
                    — Cyllene AI
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
      
      {/* Decorative background text */}
      <div className="absolute -bottom-12 left-0 w-full text-center text-[12rem] font-serif text-white opacity-[0.02] pointer-events-none select-none whitespace-nowrap">
        INSIGHT
      </div>
    </section>
  );
};

export default AiCoach;