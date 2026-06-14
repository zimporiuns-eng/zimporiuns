'use client';

import { useState } from 'react';
import { detectarIdioma, getZimResponse } from '@/lib/zim-knowledge';

const idiomasNomes: Record<string, string> = {
  'pt-BR': '🇧🇷 PT', 'en': '🇺🇸 EN', 'es': '🇪🇸 ES',
  'fr': '🇫🇷 FR', 'de': '🇩🇪 DE', 'ja': '🇯🇵 JA', 'zh': '🇨🇳 ZH'
};

export default function ZimChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{from: string, text: string}[]>([]);
  const [input, setInput] = useState('');
  const [idiomaDetectado, setIdiomaDetectado] = useState('pt-BR');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    const idioma = detectarIdioma(userMsg);
    setIdiomaDetectado(idioma);
    setMessages([...messages, { from: 'user', text: userMsg }]);
    setInput('');
    const resposta = getZimResponse(userMsg);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'zim', text: resposta }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', bottom: '25px', right: '25px', zIndex: 9999,
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #CD7F32, #FFD700)',
          color: '#1a1a2e', fontSize: '1.4rem', fontWeight: 'bold',
          border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(205, 127, 50, 0.5)',
          animation: 'pulse 2s infinite',
        }}
        title="Zim — Assistente Zimporiuns"
      >
        {isOpen ? '✕' : 'Zim'}
      </button>

      {isOpen && (
        <div style={{ position: 'fixed', bottom: '95px', right: '25px', width: '360px', maxHeight: '450px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', zIndex: 9998, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(135deg, #CD7F32, #FFD700)', padding: '12px 18px', color: '#1a1a2e', fontWeight: 'bold', fontSize: '0.95rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>🪙 Zim</span>
            <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>{idiomasNomes[idiomaDetectado] || ''}</span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '15px', maxHeight: '300px', backgroundColor: '#fafafa' }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', color: '#999', padding: '20px', fontSize: '0.85rem' }}>
                Pergunte sobre planos, preços, CNPJ, domínio ou tecnologias.
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: '8px', textAlign: msg.from === 'zim' ? 'left' : 'right' }}>
                <span style={{ display: 'inline-block', padding: '8px 14px', borderRadius: msg.from === 'zim' ? '0 10px 10px 10px' : '10px 0 10px 10px', backgroundColor: msg.from === 'zim' ? '#f0f0f0' : '#CD7F32', color: msg.from === 'zim' ? '#333' : 'white', fontSize: '0.85rem', maxWidth: '85%', lineHeight: '1.4' }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #e0e0e0', padding: '8px', backgroundColor: 'white' }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Pergunte algo..." style={{ flex: 1, padding: '10px 14px', border: '1px solid #ddd', borderRadius: '20px', fontSize: '0.85rem', outline: 'none' }} />
            <button onClick={handleSend} style={{ marginLeft: '6px', padding: '8px 14px', backgroundColor: '#CD7F32', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', fontWeight: 'bold' }}>➤</button>
          </div>
        </div>
      )}
      <style jsx global>{`@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(205, 127, 50, 0.5); } 70% { box-shadow: 0 0 0 15px rgba(205, 127, 50, 0); } 100% { box-shadow: 0 0 0 0 rgba(205, 127, 50, 0); } }`}</style>
    </>
  );
}
