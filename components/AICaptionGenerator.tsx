
import React, { useState } from 'react';
import { generateViralCaption } from '../services/geminiService';
import { Button } from './Button';
import { Category } from '../types';

export const AICaptionGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(Category.CARS);
  const [mood, setMood] = useState('Aspiracional');
  const [result, setResult] = useState<{text: string, hashtags: string[]} | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    const caption = await generateViralCaption(category, mood);
    setResult(caption);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-amber-500/10 rounded-lg">
          <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Gerador de Legendas IA</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Escolha o Tema</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            {Object.values(Category).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">Vibe da Legenda</label>
          <div className="flex flex-wrap gap-2">
            {['Aspiracional', 'Motivacional', 'Provocação', 'Mindset'].map((m) => (
              <button
                key={m}
                onClick={() => setMood(m)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${mood === m ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <Button 
          fullWidth 
          onClick={handleGenerate} 
          disabled={loading}
          className="relative overflow-hidden"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Gerando...
            </span>
          ) : 'Gerar Legenda Viral'}
        </Button>

        {result && (
          <div className="mt-6 p-4 bg-slate-800/80 rounded-xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
            <p className="text-white mb-2 leading-relaxed italic">"{result.text}"</p>
            <div className="flex flex-wrap gap-2">
              {result.hashtags.map((tag) => (
                <span key={tag} className="text-amber-500 text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
