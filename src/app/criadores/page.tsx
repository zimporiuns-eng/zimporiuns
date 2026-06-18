'use client';

import { useState } from 'react';
import Link from 'next/link';

type Criador = {
  id: number;
  nome: string;
  avatar: string;
  categoria: string;
  plano: 'bronze' | 'silver' | 'gold';
  descricao: string;
  seguidores: number;
};

// Array vazio - aguardando criadores reais
const criadoresReais: Criador[] = [];

const categorias = ['Todos', 'Games', 'Música', 'Educação', 'Esportes', 'Humor', 'Tecnologia'];

const coresPlano = {
  bronze: { bg: '#FDE8DB', text: '#CD7F32', label: 'Bronze' },
  silver: { bg: '#F0F0F0', text: '#C0C0C0', label: 'Silver' },
  gold: { bg: '#FFF8E0', text: '#FFD700', label: 'Gold' },
};

export default function CriadoresPage() {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [seguindo, setSeguindo] = useState<number[]>([]);

  const toggleSeguir = (id: number) => {
    if (seguindo.includes(id)) {
      setSeguindo(seguindo.filter(i => i !== id));
    } else {
      setSeguindo([...seguindo, id]);
    }
  };

  const formatarSeguidores = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FFD700] to-[#CD7F32] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Criadores Zimporiuns
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Conheça os melhores criadores de conteúdo da América Latina. Apoie, siga e acompanhe seu trabalho.
          </p>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Buscar criador..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700]"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  categoriaAtiva === cat
                    ? 'bg-[#FFD700] text-gray-900 shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Criadores - Estado vazio */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Nenhum criador cadastrado ainda
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Seja o primeiro! Cadastre-se e organize seus links em um perfil profissional.
            </p>
            <Link href="/planos">
              <button className="bg-gradient-to-r from-[#FFD700] to-[#CD7F32] text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Seja um criador
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action para criadores */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Quer ser um criador Zimporiuns?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Cadastre-se e organize seus links em um perfil profissional. Criadores pagam para ter visibilidade e curadoria.
          </p>
          <Link href="/planos">
            <button className="bg-gradient-to-r from-[#FFD700] to-[#CD7F32] text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
              Ver planos
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

