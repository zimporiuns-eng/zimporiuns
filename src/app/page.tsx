'use client';

import Link from 'next/link';
import PlanCard from '@/components/PlanCard';

export default function Home() {
  const planos = [
    { tipo: 'bronze' as const, nome: 'Bronze', precoMensal: 4.90, precoAnual: 47.00, beneficios: ['Perfil público', 'Links organizados', 'Suporte básico'] },
    { tipo: 'silver' as const, nome: 'Silver', precoMensal: 9.90, precoAnual: 95.00, beneficios: ['Perfil verificado', 'Estatísticas básicas', 'Destaque em categorias'] },
    { tipo: 'gold' as const, nome: 'Gold', precoMensal: 19.90, precoAnual: 191.00, beneficios: ['Ranking de criadores', 'Analytics avançado', 'Suporte prioritário'], destaque: true },
    { tipo: 'copper' as const, nome: 'Copper', precoMensal: 4.90, precoAnual: 47.00, beneficios: ['Acesso a criadores', 'Lista de favoritos', 'Notificações'] }
  ];

  const vantagens = [
    { icone: '⭐', titulo: 'Visibilidade para criadores', descricao: 'Criadores pagam para ter destaque, organização e curadoria.' },
    { icone: '🤖', titulo: 'Curadoria inteligente', descricao: 'IA recomenda criadores relevantes para cada espectador' },
    { icone: '📈', titulo: 'Estatísticas em tempo real', descricao: 'Acompanhe engajamento, visualizações e crescimento' },
    { icone: '🌍', titulo: 'Suporte multilíngue', descricao: 'Atendimento em 8 idiomas para criadores do mundo todo' }
  ];

  const passos = [
    { numero: '1', titulo: 'Criador se inscreve', descricao: 'Escolhe seu plano e cria seu perfil' },
    { numero: '2', titulo: 'Organiza links', descricao: 'Adiciona conteúdo de YouTube, Twitch, etc' },
    { numero: '3', titulo: 'Fã assina', descricao: 'Espectadores pagam para acessar conteúdo premium' },
    { numero: '4', titulo: 'Você recebe', descricao: 'Transferência automática via Stripe' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Conecte-se aos maiores criadores da América Latina
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Sua plataforma de organização categórica de conteúdo. Chega de links perdidos ou desorganizados!
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/planos">
              <button className="bg-[#FFD700] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Assinar agora
              </button>
            </Link>
            <Link href="/criadores">
              <button className="border-2 border-[#FFD700] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition">
                Explorar criadores
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PLANOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Planos para criadores
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Escolha o plano ideal para alavancar seu conteúdo
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planos.map((plano, index) => (
              <PlanCard key={index} {...plano} />
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Como funciona?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Não se preocupe com estoque. Na Zimporiuns, você organiza seu conteúdo em um só lugar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {passos.map((passo) => (
              <div key={passo.numero} className="text-center">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-4">
                  {passo.numero}
                </div>
                <h3 className="font-bold text-lg mb-2">{passo.titulo}</h3>
                <p className="text-gray-600 text-sm">{passo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Vantagens de usar o Zimporiuns
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Por que criadores e espectadores escolhem a Zimporiuns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vantagens.map((vantagem, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <div className="text-5xl mb-4">{vantagem.icone}</div>
                <h3 className="font-bold text-xl mb-2">{vantagem.titulo}</h3>
                <p className="text-gray-600 text-sm">{vantagem.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comece hoje mesmo a organizar seu conteúdo
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de criadores que já confiam no Zimporiuns
          </p>
          <Link href="/planos">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Criar conta agora
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

