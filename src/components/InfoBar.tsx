'use client';

import { useState, useEffect } from 'react';

interface Aviso {
  id: number;
  texto: string;
  tipo: 'info' | 'aviso' | 'manutencao' | 'novidade';
  dataInicio: string;
  dataFim?: string;
}

export default function InfoBar() {
  const [dataHora, setDataHora] = useState('');
  const [mensagemAtual, setMensagemAtual] = useState(0);
  const [visivel, setVisivel] = useState(true);

  // Lista de avisos e novidades
  const avisos: Aviso[] = [
    { id: 1, texto: "✨ Bem-vindo ao Zimporiuns! Organize seus links em um só lugar.", tipo: "novidade", dataInicio: "2026-06-14" },
    { id: 2, texto: "💰 Planos a partir de R$ 4,90/mês. Cancele quando quiser.", tipo: "info", dataInicio: "2026-06-14" },
    { id: 3, texto: "🔧 Manutenção programada: dia 15/06 às 03h. Site indisponível por 30min.", tipo: "manutencao", dataInicio: "2026-06-14", dataFim: "2026-06-15" },
    { id: 4, texto: "🎉 Novidade: Zim, nossa assistente virtual, já está disponível! Clique no botão 💬", tipo: "novidade", dataInicio: "2026-06-14" },
    { id: 5, texto: "📢 Em breve: Programa de afiliados para criadores.", tipo: "info", dataInicio: "2026-06-14" },
  ];

  // Atualizar data e hora a cada segundo
  useEffect(() => {
    const atualizarDataHora = () => {
      const agora = new Date();
      const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      
      const diaSemana = dias[agora.getDay()];
      const dia = agora.getDate();
      const mes = meses[agora.getMonth()];
      const ano = agora.getFullYear();
      const hora = agora.getHours().toString().padStart(2, '0');
      const minuto = agora.getMinutes().toString().padStart(2, '0');
      const segundo = agora.getSeconds().toString().padStart(2, '0');
      
      setDataHora(`${diaSemana}, ${dia} de ${mes} de ${ano} • ${hora}:${minuto}:${segundo}`);
    };
    
    atualizarDataHora();
    const interval = setInterval(atualizarDataHora, 1000);
    return () => clearInterval(interval);
  }, []);

  // Rotação de mensagens a cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setMensagemAtual((prev) => (prev + 1) % avisos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [avisos.length]);

  const avisoAtual = avisos[mensagemAtual];
  
  const corPorTipo = {
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    aviso: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    manutencao: 'bg-red-50 text-red-700 border-red-200',
    novidade: 'bg-green-50 text-green-700 border-green-200'
  };

  const iconePorTipo = {
    info: 'ℹ️',
    aviso: '⚠️',
    manutencao: '🔧',
    novidade: '✨'
  };

  if (!visivel) return null;

  return (
    <div className="sticky top-0 z-40">
      {/* Barra superior com data/hora */}
      <div className="bg-gray-900 text-white text-xs py-1 px-4 text-center font-mono">
        {dataHora}
      </div>
      
      {/* Barra de avisos rolante */}
      <div className={`border-b ${corPorTipo[avisoAtual.tipo]} transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-lg">{iconePorTipo[avisoAtual.tipo]}</span>
              <p className="text-sm font-medium flex-1">
                {avisoAtual.texto}
              </p>
              {/* Indicador de digitação */}
              <span className="inline-block w-2 h-4 bg-current animate-pulse ml-1"></span>
            </div>
            <button 
              onClick={() => setVisivel(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors text-xs"
              aria-label="Fechar barra"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

