'use client';

import { useState, useEffect } from 'react';

type Idioma = 'pt-BR' | 'en' | 'es' | 'pt-PT' | 'fr' | 'de' | 'ja' | 'zh';

export default function IdiomaSelector() {
  const [idioma, setIdioma] = useState<Idioma>('pt-BR');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('zim_idioma') as Idioma;
    if (saved) {
      setIdioma(saved);
    }
  }, []);

  const mudarIdioma = (lang: Idioma) => {
    setIdioma(lang);
    localStorage.setItem('zim_idioma', lang);
    setIsOpen(false);
    window.location.reload();
  };

  const bandeiras: Record<Idioma, string> = {
    'pt-BR': '🇧🇷',
    'en': '🇺🇸',
    'es': '🇪🇸',
    'pt-PT': '🇵🇹',
    'fr': '🇫🇷',
    'de': '🇩🇪',
    'ja': '🇯🇵',
    'zh': '🇨🇳'
  };

  const nomes: Record<Idioma, string> = {
    'pt-BR': 'Português',
    'en': 'English',
    'es': 'Español',
    'pt-PT': 'Português (PT)',
    'fr': 'Français',
    'de': 'Deutsch',
    'ja': '日本語',
    'zh': '中文'
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <span className="text-xl">{bandeiras[idioma]}</span>
        <span className="hidden md:inline text-sm">{nomes[idioma]}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50">
          {Object.entries(bandeiras).map(([code, flag]) => (
            <button
              key={code}
              onClick={() => mudarIdioma(code as Idioma)}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 transition text-left"
            >
              <span className="text-xl">{flag}</span>
              <span className="text-sm">{nomes[code as Idioma]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
