'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function VendasPage() {
  const [faqAberta, setFaqAberta] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqAberta(faqAberta === index ? null : index);
  };

  const faqs = [
    {
      pergunta: "O Zimporiuns hospeda vídeos?",
      resposta: "NÃO. O Zimporiuns é uma plataforma de ORGANIZAÇÃO de links. Você mantém seus vídeos no YouTube, lives na Twitch, podcast no Spotify. Nós organizamos tudo em um perfil profissional e ajudamos seu público a encontrar você."
    },
    {
      pergunta: "Como os criadores ganham dinheiro?",
      resposta: "Os criadores NÃO recebem dinheiro das assinaturas. Eles PAGAM para ter visibilidade, organização e curadoria. O valor está em crescer nas plataformas externas (YouTube, Twitch) onde já monetizam. O Zimporiuns é uma ferramenta, não uma plataforma de pagamento de criadores."
    },
    {
      pergunta: "O plano Copper remove anúncios do YouTube?",
      resposta: "NÃO. O benefício 'navegação sem anúncios' se aplica APENAS dentro do site Zimporiuns.com.br. Anúncios do YouTube, Facebook, Instagram e Twitch não são afetados."
    },
    {
      pergunta: "O que são ZimCoins?",
      resposta: "ZimCoins são pontos de fidelidade, não criptomoedas. Você acumula ao assinar e pode trocar por benefícios. Elas valorizam simbolicamente 0,01% ao mês, mas NÃO têm valor monetário real e NÃO podem ser sacadas."
    },
    {
      pergunta: "Preciso saber programação?",
      resposta: "Não! O Zimporiuns é fácil de usar. Você cria seu perfil, adiciona seus links e pronto. A plataforma organiza tudo automaticamente."
    },
    {
      pergunta: "Posso cancelar a qualquer momento?",
      resposta: "Sim! Você pode cancelar sua assinatura a qualquer momento pelo portal do cliente. Sem multa, sem burocracia."
    },
    {
      pergunta: "Quais formas de pagamento?",
      resposta: "Cartão de crédito, Pix e boleto. Todos processados com segurança pelo Stripe."
    },
    {
      pergunta: "O Zimporiuns é seguro?",
      resposta: "Sim! Usamos Firebase (Google), Stripe (pagamentos criptografados) e Cloudflare (proteção DDoS). Seus dados estão seguros."
    }
  ];

  const publicos = [
    {
      icone: "🎬",
      titulo: "Criadores de conteúdo",
      descricao: "Organize seus links em um perfil profissional. Você PAGA para ter visibilidade. O valor está na organização e curadoria."
    },
    {
      icone: "👀",
      titulo: "Espectadores",
      descricao: "Descubra novos criadores. Acesse conteúdo organizado por categoria. Apoie quem você gosta com o plano Copper (sem anúncios dentro da plataforma)."
    },
    {
      icone: "🏫",
      titulo: "Escolas e professores",
      descricao: "Organize materiais, links de apoio, videoaulas. Seus alunos acessam tudo em um só lugar, sem perder tempo procurando."
    },
    {
      icone: "💼",
      titulo: "Profissionais",
      descricao: "Portfólio de projetos, links relevantes, networking. Uma vitrine profissional organizada e fácil de compartilhar."
    }
  ];

  const passos = [
    {
      numero: "01",
      titulo: "Crie seu perfil",
      descricao: "Cadastre-se e escolha seu plano. Criadores pagam para ter visibilidade. Espectadores assinam para apoiar."
    },
    {
      numero: "02",
      titulo: "Adicione seus links",
      descricao: "YouTube, Twitch, Instagram, Spotify, Podcast — organize tudo por categoria. Zim ajuda com curadoria por IA."
    },
    {
      numero: "03",
      titulo: "Compartilhe",
      descricao: "Envie seu link do Zimporiuns para seu público. Eles encontram tudo em um só lugar, sem confusão."
    },
    {
      numero: "04",
      titulo: "Monitore e cresça",
      descricao: "Acompanhe estatísticas, veja quem te segue, melhore sua estratégia. Zim sugere próximos passos."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FFD700] to-[#CD7F32] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 rounded-full px-4 py-1 mb-4">
            <span className="text-white text-sm">🚀 Lançamento Oficial</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Organize seus links em um só lugar
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Zimporiuns não hospeda vídeos. Nós organizamos. Criadores PAGAM para ter visibilidade. Espectadores assinam para apoiar.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/planos">
              <button className="bg-white text-[#CD7F32] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                Começar agora
              </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#CD7F32] transition-all duration-300">
              Assistir vídeo
            </button>
          </div>
        </div>
      </section>

      {/* O que é Zimporiuns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que é o Zimporiuns?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma plataforma de organização categórica de conteúdo. Criadores pagam, não recebem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="font-bold text-lg mb-2">Não hospedamos vídeos</h3>
              <p className="text-gray-600 text-sm">Seu conteúdo fica no YouTube, Twitch, Spotify. Nós só organizamos os links.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="font-bold text-lg mb-2">Curadoria por IA</h3>
              <p className="text-gray-600 text-sm">Zim, nossa assistente virtual, recomenda criadores e organiza conteúdo automaticamente.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">Criadores pagam</h3>
              <p className="text-gray-600 text-sm">Criadores PAGAM para ter visibilidade. Espectadores pagam para apoiar. Ninguém "recebe" dinheiro da plataforma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Para quem é o Zimporiuns?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Criado para conectar pessoas que criam e pessoas que consomem conteúdo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicos.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{item.icone}</div>
                <h3 className="font-bold text-xl mb-2">{item.titulo}</h3>
                <p className="text-gray-600 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona - Infográfico */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simples, rápido e sem complicação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos.map((passo) => (
              <div key={passo.numero} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                  <div className="text-4xl font-bold text-[#FFD700] mb-4">{passo.numero}</div>
                  <h3 className="font-bold text-lg mb-2">{passo.titulo}</h3>
                  <p className="text-gray-600 text-sm">{passo.descricao}</p>
                </div>
                {passo.numero !== '04' && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-2xl text-gray-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos - Resumo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos e preços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu momento.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Card Bronze */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-[#CD7F32] mb-2">Bronze</h3>
              <div className="text-3xl font-bold text-gray-900 mb-1">R$ 4,90</div>
              <p className="text-gray-500 text-sm mb-4">/mês</p>
              <Link href="/planos">
                <button className="w-full bg-[#CD7F32] text-white py-2 rounded-lg font-semibold hover:bg-[#B87333] transition">Assinar</button>
              </Link>
            </div>
            {/* Card Silver */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-[#C0C0C0] mb-2">Silver</h3>
              <div className="text-3xl font-bold text-gray-900 mb-1">R$ 9,90</div>
              <p className="text-gray-500 text-sm mb-4">/mês</p>
              <Link href="/planos">
                <button className="w-full bg-[#C0C0C0] text-gray-900 py-2 rounded-lg font-semibold hover:bg-[#A0A0A0] transition">Assinar</button>
              </Link>
            </div>
            {/* Card Gold */}
            <div className="bg-white rounded-2xl shadow-lg ring-2 ring-[#FFD700] p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-gray-900 text-xs font-bold px-3 py-1 rounded-full">MAIS VENDIDO</div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Gold</h3>
              <div className="text-3xl font-bold text-gray-900 mb-1">R$ 19,90</div>
              <p className="text-gray-500 text-sm mb-4">/mês</p>
              <Link href="/planos">
                <button className="w-full bg-[#FFD700] text-gray-900 py-2 rounded-lg font-semibold hover:bg-[#FFED4A] transition">Assinar</button>
              </Link>
            </div>
            {/* Card Copper */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h3 className="text-2xl font-bold text-[#B87333] mb-2">Copper</h3>
              <div className="text-3xl font-bold text-gray-900 mb-1">R$ 4,90</div>
              <p className="text-gray-500 text-sm mb-4">/mês</p>
              <p className="text-xs text-gray-500 mb-3">Navegação sem anúncios*</p>
              <Link href="/planos">
                <button className="w-full bg-[#B87333] text-white py-2 rounded-lg font-semibold hover:bg-[#9E5E28] transition">Assinar</button>
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500">
            *Sem anúncios APENAS dentro do Zimporiuns. Anúncios do YouTube/Facebook não são afetados.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dúvidas frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tudo o que você precisa saber antes de começar.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900">{faq.pergunta}</span>
                  <span className="text-2xl text-[#FFD700]">
                    {faqAberta === index ? '−' : '+'}
                  </span>
                </button>
                {faqAberta === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-100">
                    <p className="text-gray-600">{faq.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-[#FFD700] to-[#CD7F32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para organizar seus links?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comece hoje mesmo. Planos a partir de R$ 4,90/mês. Cancele quando quiser.
          </p>
          <Link href="/planos">
            <button className="bg-white text-[#CD7F32] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
              Escolher plano
            </button>
          </Link>
          <p className="text-white/80 text-sm mt-6">
            Dúvidas? Fale com a Zim, nossa assistente virtual 💬
          </p>
        </div>
      </section>
    </div>
  );
}

