'use client';

import { useState, useEffect, useCallback } from 'react';
import { detectarIdioma, getZimResponse } from '@/lib/zim-knowledge';

const idiomasNomes: Record<string, string> = {
  'pt-BR': '🇧🇷 PT', 'en': '🇺🇸 EN', 'es': '🇪🇸 ES',
  'fr': '🇫🇷 FR', 'de': '🇩🇪 DE', 'ja': '🇯🇵 JA', 'zh': '🇨🇳 ZH'
};

export default function ZimFlutuante() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{from: string, text: string}[]>([]);
  const [input, setInput] = useState('');
  const [idiomaDetectado, setIdiomaDetectado] = useState('pt-BR');
  
  // Animação de flutuação
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [rastro, setRastro] = useState<{x: number, y: number, id: number}[]>([]);
  const [contadorRastro, setContadorRastro] = useState(0);

  // Movimento suave e natural da Zim
  useEffect(() => {
    let frame: number;
    let tempo = 0;
    
    const animar = () => {
      tempo += 0.02;
      // Movimento de órbita suave
      const x = Math.sin(tempo * 0.7) * 120 + Math.sin(tempo * 1.3) * 40;
      const y = Math.cos(tempo * 0.6) * 80 + Math.cos(tempo * 1.1) * 30;
      setOffset({ x, y });
      
      // Rastro de luz (partículas)
      if (Math.random() > 0.7) {
        setContadorRastro(prev => prev + 1);
        setRastro(prev => [...prev.slice(-8), { x, y, id: Date.now() }]);
      }
      
      frame = requestAnimationFrame(animar);
    };
    
    frame = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Atualizar posição base (canto inferior direito)
  useEffect(() => {
    setPosicao({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  }, []);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    const idioma = detectarIdioma(userMsg);
    setIdiomaDetectado(idioma);
    setMessages(prev => [...prev, { from: 'user', text: userMsg }]);
    setInput('');
    const resposta = getZimResponse(userMsg);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'zim', text: resposta }]);
    }, 500);
  }, [input]);

  return (
    <>
      {/* RASTRO DE LUZ (partículas) */}
      {rastro.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'fixed',
            left: posicao.x + p.x + 30,
            top: posicao.y + p.y + 30,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(205,127,50,0.6), transparent)',
            pointerEvents: 'none',
            zIndex: 9997,
            animation: 'fadeOut 1.5s forwards',
          }}
        />
      ))}

      {/* ZIM FLUTUANTE */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          left: posicao.x + offset.x,
          top: posicao.y + offset.y,
          zIndex: 9999,
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255,215,0,0.9), rgba(205,127,50,0.85))',
          boxShadow: '0 0 30px rgba(205, 127, 50, 0.6), 0 0 60px rgba(255, 215, 0, 0.3), inset 0 0 15px rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1a1a2e',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s',
          animation: 'flutuar 3s ease-in-out infinite, brilhar 2s ease-in-out infinite',
          backdropFilter: 'blur(2px)',
          border: '2px solid rgba(255,255,255,0.2)',
        }}
        title="Zim — Assistente Zimporiuns"
      >
        <span style={{
          textShadow: '0 0 10px rgba(255,215,0,0.8)',
          animation: 'pulsar 2s ease-in-out infinite',
        }}>
          {isOpen ? '✕' : 'Z'}
        </span>
      </div>

      {/* CHAT */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '25px',
          width: '370px',
          maxHeight: '480px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(15px)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(205,127,50,0.2)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid rgba(205,127,50,0.3)',
          animation: 'slideUp 0.3s ease-out',
        }}>
          {/* Cabeçalho */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(205,127,50,0.95), rgba(255,215,0,0.9))',
            padding: '14px 20px',
            color: '#1a1a2e',
            fontWeight: 'bold',
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
          }}>
            <span>🪙 Zim</span>
            <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>{idiomasNomes[idiomaDetectado] || ''}</span>
          </div>
          
          {/* Mensagens */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '15px',
            maxHeight: '320px',
            background: 'linear-gradient(180deg, rgba(250,250,250,1), rgba(245,245,245,1))',
          }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', color: '#999', padding: '30px 20px', fontSize: '0.85rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🪙</div>
                Pergunte sobre planos, preços, CNPJ, domínio ou tecnologias.
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} style={{
                marginBottom: '10px',
                textAlign: msg.from === 'zim' ? 'left' : 'right',
                animation: 'fadeIn 0.3s ease-out',
              }}>
                <span style={{
                  display: 'inline-block',
                  padding: '10px 16px',
                  borderRadius: msg.from === 'zim' ? '0 14px 14px 14px' : '14px 0 14px 14px',
                  background: msg.from === 'zim'
                    ? 'linear-gradient(135deg, #f0f0f0, #e8e8e8)'
                    : 'linear-gradient(135deg, #CD7F32, #e6a850)',
                  color: msg.from === 'zim' ? '#333' : 'white',
                  fontSize: '0.88rem',
                  maxWidth: '85%',
                  lineHeight: '1.5',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div style={{
            display: 'flex',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            padding: '10px 12px',
            backgroundColor: 'rgba(255,255,255,0.9)',
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte algo..."
              style={{
                flex: 1,
                padding: '12px 16px',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '25px',
                fontSize: '0.88rem',
                outline: 'none',
                backgroundColor: 'rgba(255,255,255,0.8)',
                transition: 'border-color 0.2s',
              }}
            />
            <button
              onClick={handleSend}
              style={{
                marginLeft: '8px',
                padding: '10px 16px',
                background: 'linear-gradient(135deg, #CD7F32, #FFD700)',
                color: '#1a1a2e',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 3px 10px rgba(205,127,50,0.3)',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* ESTILOS GLOBAIS */}
      <style jsx global>{`
        @keyframes flutuar {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes brilhar {
          0%, 100% { box-shadow: 0 0 30px rgba(205, 127, 50, 0.6), 0 0 60px rgba(255, 215, 0, 0.3); }
          50% { box-shadow: 0 0 45px rgba(205, 127, 50, 0.9), 0 0 80px rgba(255, 215, 0, 0.5); }
        }
        @keyframes pulsar {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        @keyframes fadeOut {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0; transform: scale(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
