'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

interface PlanCardProps {
  tipo: 'bronze' | 'silver' | 'gold' | 'copper';
  nome: string;
  precoMensal: number;
  precoAnual: number;
  beneficios: string[];
  destaque?: boolean;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const coresPlanos = {
  bronze: { principal: '#CD7F32', claro: '#FDE8DB', texto: '#8B5A2B' },
  silver: { principal: '#C0C0C0', claro: '#F0F0F0', texto: '#707070' },
  gold: { principal: '#FFD700', claro: '#FFF8E0', texto: '#9E7E00' },
  copper: { principal: '#B87333', claro: '#F5E6D6', texto: '#7A3B10' }
};

const priceIds = {
  bronze: {
    mensal: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRONZE_MENSAL,
    anual: process.env.NEXT_PUBLIC_STRIPE_PRICE_BRONZE_ANUAL,
  },
  silver: {
    mensal: process.env.NEXT_PUBLIC_STRIPE_PRICE_SILVER_MENSAL,
    anual: process.env.NEXT_PUBLIC_STRIPE_PRICE_SILVER_ANUAL,
  },
  gold: {
    mensal: process.env.NEXT_PUBLIC_STRIPE_PRICE_GOLD_MENSAL,
    anual: process.env.NEXT_PUBLIC_STRIPE_PRICE_GOLD_ANUAL,
  },
  copper: {
    mensal: process.env.NEXT_PUBLIC_STRIPE_PRICE_COPPER_MENSAL,
    anual: process.env.NEXT_PUBLIC_STRIPE_PRICE_COPPER_ANUAL,
  },
};

export default function PlanCard({ tipo, nome, precoMensal, precoAnual, beneficios, destaque = false }: PlanCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [periodo, setPeriodo] = useState<'mensal' | 'anual'>('mensal');
  
  const cor = coresPlanos[tipo];
  const desconto = Math.round(((precoAnual / 12) / precoMensal - 1) * -100);
  const precoAtual = periodo === 'mensal' ? precoMensal : precoAnual;
  const precoTexto = periodo === 'mensal' ? '/mês' : '/ano';

  const handleAssinar = async () => {
    setIsLoading(true);
    
    const priceId = priceIds[tipo][periodo];
    const successUrl = `${window.location.origin}/sucesso?plano=${tipo}&periodo=${periodo}`;
    const cancelUrl = `${window.location.origin}/cancelado`;
    
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, successUrl, cancelUrl })
      });
      
      const { url } = await response.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error('Erro ao iniciar checkout:', error);
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div 
      className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        destaque ? 'ring-2 ring-offset-2' : ''
      }`}
      style={{ 
        borderTop: `4px solid ${cor.principal}`,
        boxShadow: destaque ? `0 10px 40px ${cor.principal}20` : '0 4px 20px rgba(0,0,0,0.08)'
      }}
    >
      {destaque && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10" style={{ backgroundColor: cor.principal }}>
          MAIS VENDIDO
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2" style={{ color: cor.principal }}>
          {nome}
        </h3>
        
        {/* Seletor de período */}
        <div className="flex gap-2 mb-4 bg-gray-100 rounded-lg p-1">
          <button
            className={`flex-1 py-2 rounded-md text-sm font-semibold transition-all ${
              periodo === 'mensal' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setPeriodo('mensal')}
          >
            Mensal
          </button>
          <button
            className={`flex-1 py-2 rounded-md text-sm font-semibold transition-all ${
              periodo === 'anual' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setPeriodo('anual')}
          >
            Anual <span className="text-green-600 text-xs ml-1">-{desconto}%</span>
          </button>
        </div>
        
        {/* Preço */}
        <div className="mb-4">
          <span className="text-4xl font-bold" style={{ color: cor.texto }}>
            R$ {precoAtual.toFixed(2)}
          </span>
          <span className="text-gray-500"> {precoTexto}</span>
        </div>
        
        {/* Benefícios - sem ✅, com ícone discreto na cor do plano */}
        <ul className="space-y-2 mb-6">
          {beneficios.map((beneficio, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: cor.principal }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {beneficio}
            </li>
          ))}
        </ul>
        
        {/* Botão Assinar */}
        <button 
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
          }`}
          style={{ 
            backgroundColor: `${cor.principal}15`, 
            color: cor.texto,
            border: `1px solid ${cor.principal}30`
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = cor.principal;
              e.currentTarget.style.color = 'white';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = `${cor.principal}15`;
              e.currentTarget.style.color = cor.texto;
            }
          }}
          onClick={handleAssinar}
          disabled={isLoading}
        >
          {isLoading ? 'Redirecionando...' : `Assinar ${nome}`}
        </button>
      </div>
    </div>
  );
}
