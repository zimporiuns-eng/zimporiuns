'use client';

import { useState } from 'react';
import Link from 'next/link';

type Idioma = 'pt-BR' | 'en' | 'es' | 'pt-PT' | 'fr' | 'de' | 'ja' | 'zh';

const traducoes: Record<Idioma, any> = {
  'pt-BR': {
    titulo: 'Zimporiuns',
    subtitulo: 'A plataforma brasileira que conecta criadores de conteúdo ao seu público.',
    criadores: 'Criadores',
    criadoresDesc: 'Cadastre seus canais de TV, rádio, YouTube, Twitch e muito mais.',
    espectadores: 'Espectadores',
    espectadoresDesc: 'Descubra novos criadores em um diretório organizado por categorias.',
    planosAcessiveis: 'Planos Acessíveis',
    planosAcessiveisDesc: 'A partir de R$ 4,90/mês.',
    verPlanos: 'Ver Planos',
    rodapeIdiomas: 'Disponível em vários idiomas',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'en': {
    titulo: 'Zimporiuns',
    subtitulo: 'The Brazilian platform that connects content creators to their audience.',
    criadores: 'Creators',
    criadoresDesc: 'Register your TV, radio, YouTube, Twitch channels and more.',
    espectadores: 'Viewers',
    espectadoresDesc: 'Discover new creators in a category-organized directory.',
    planosAcessiveis: 'Affordable Plans',
    planosAcessiveisDesc: 'Starting at R$4.90/month.',
    verPlanos: 'View Plans',
    rodapeIdiomas: 'Available in multiple languages',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'es': {
    titulo: 'Zimporiuns',
    subtitulo: 'La plataforma brasileña que conecta creadores de contenido con su público.',
    criadores: 'Creadores',
    criadoresDesc: 'Registra tus canales de TV, radio, YouTube, Twitch y más.',
    espectadores: 'Espectadores',
    espectadoresDesc: 'Descubre nuevos creadores en un directorio organizado por categorías.',
    planosAcessiveis: 'Planes Accesibles',
    planosAcessiveisDesc: 'Desde R$4,90/mes.',
    verPlanos: 'Ver Planes',
    rodapeIdiomas: 'Disponible en varios idiomas',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'pt-PT': {
    titulo: 'Zimporiuns',
    subtitulo: 'A plataforma brasileira que liga criadores de conteúdo ao seu público.',
    criadores: 'Criadores',
    criadoresDesc: 'Registe os seus canais de TV, rádio, YouTube, Twitch e muito mais.',
    espectadores: 'Espectadores',
    espectadoresDesc: 'Descubra novos criadores num diretório organizado por categorias.',
    planosAcessiveis: 'Planos Acessíveis',
    planosAcessiveisDesc: 'A partir de R$ 4,90/mês.',
    verPlanos: 'Ver Planos',
    rodapeIdiomas: 'Disponível em vários idiomas',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'fr': {
    titulo: 'Zimporiuns',
    subtitulo: 'La plateforme brésilienne qui connecte les créateurs de contenu à leur public.',
    criadores: 'Créateurs',
    criadoresDesc: 'Enregistrez vos chaînes TV, radio, YouTube, Twitch et plus.',
    espectadores: 'Spectateurs',
    espectadoresDesc: 'Découvrez de nouveaux créateurs dans un répertoire organisé par catégories.',
    planosAcessiveis: 'Plans Abordables',
    planosAcessiveisDesc: 'À partir de R$4,90/mois.',
    verPlanos: 'Voir les Plans',
    rodapeIdiomas: 'Disponible en plusieurs langues',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'de': {
    titulo: 'Zimporiuns',
    subtitulo: 'Die brasilianische Plattform, die Content-Ersteller mit ihrem Publikum verbindet.',
    criadores: 'Ersteller',
    criadoresDesc: 'Registrieren Sie Ihre TV-, Radio-, YouTube-, Twitch-Kanäle und mehr.',
    espectadores: 'Zuschauer',
    espectadoresDesc: 'Entdecken Sie neue Ersteller in einem nach Kategorien geordneten Verzeichnis.',
    planosAcessiveis: 'Erschwingliche Pläne',
    planosAcessiveisDesc: 'Ab R$4,90/Monat.',
    verPlanos: 'Pläne ansehen',
    rodapeIdiomas: 'In mehreren Sprachen verfügbar',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'ja': {
    titulo: 'Zimporiuns',
    subtitulo: 'コンテンツクリエイターと視聴者をつなぐブラジルのプラットフォーム。',
    criadores: 'クリエイター',
    criadoresDesc: 'TV、ラジオ、YouTube、Twitchなどのチャンネルを登録。',
    espectadores: '視聴者',
    espectadoresDesc: 'カテゴリ別に整理されたディレクトリで新しいクリエイターを発見。',
    planosAcessiveis: 'お手頃なプラン',
    planosAcessiveisDesc: '月額R$4.90から。',
    verPlanos: 'プランを見る',
    rodapeIdiomas: '複数の言語で利用可能',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'zh': {
    titulo: 'Zimporiuns',
    subtitulo: '连接内容创作者与受众的巴西平台。',
    criadores: '创作者',
    criadoresDesc: '注册您的电视、广播、YouTube、Twitch等频道。',
    espectadores: '观众',
    espectadoresDesc: '在按类别组织的目录中发现新的创作者。',
    planosAcessiveis: '实惠计划',
    planosAcessiveisDesc: '每月R$4.90起。',
    verPlanos: '查看计划',
    rodapeIdiomas: '提供多种语言',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  }
};

const idiomas: { codigo: Idioma; bandeira: string; nome: string }[] = [
  { codigo: 'pt-BR', bandeira: '🇧🇷', nome: 'Português (Brasil)' },
  { codigo: 'en', bandeira: '🇺🇸', nome: 'English' },
  { codigo: 'es', bandeira: '🇪🇸', nome: 'Español' },
  { codigo: 'pt-PT', bandeira: '🇵🇹', nome: 'Português (Portugal)' },
  { codigo: 'fr', bandeira: '🇫🇷', nome: 'Français' },
  { codigo: 'de', bandeira: '🇩🇪', nome: 'Deutsch' },
  { codigo: 'ja', bandeira: '🇯🇵', nome: '日本語' },
  { codigo: 'zh', bandeira: '🇨🇳', nome: '中文'}
];

// Ícones SVG profissionais
const IconFilm = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
    <line x1="17" y1="17" x2="22" y2="17" />
  </svg>
);

const IconSearch = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconCoin = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#CD7F32" fontFamily="Arial">R$</text>
  </svg>
);

export default function Home() {
  const [idioma, setIdioma] = useState<Idioma>('pt-BR');
  const t = traducoes[idioma];

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      
      {/* SELETOR DE IDIOMAS */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '15px 30px', gap: '6px', flexWrap: 'wrap', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
        {idiomas.map((lang) => (
          <button
            key={lang.codigo}
            onClick={() => setIdioma(lang.codigo)}
            style={{
              padding: '6px 12px',
              backgroundColor: idioma === lang.codigo ? '#1a1a2e' : 'transparent',
              color: idioma === lang.codigo ? 'white' : '#555',
              border: idioma === lang.codigo ? 'none' : '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.2s'
            }}
            title={lang.nome}
          >
            {lang.bandeira}
          </button>
        ))}
      </div>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        padding: '80px 30px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #CD7F32, #FFD700)',
          margin: '0 auto 25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1a1a2e',
          boxShadow: '0 0 40px rgba(205, 127, 50, 0.4)'
        }}>
          Z
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '15px', letterSpacing: '-1px' }}>{t.titulo}</h1>
        <p style={{ fontSize: '1.2rem', color: '#b0b0c0', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>{t.subtitulo}</p>
        <Link href="/planos" style={{
          display: 'inline-block',
          padding: '16px 45px',
          background: 'linear-gradient(135deg, #CD7F32, #FFD700)',
          color: '#1a1a2e',
          textDecoration: 'none',
          borderRadius: '50px',
          fontSize: '1.1rem',
          fontWeight: '700',
          transition: 'transform 0.2s',
          boxShadow: '0 8px 25px rgba(205, 127, 50, 0.3)'
        }}>
          {t.verPlanos}
        </Link>
      </div>

      {/* CARDS COM ÍCONES SVG */}
      <div style={{ padding: '60px 30px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          
          <div style={{ padding: '40px 30px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e9ecef', transition: 'transform 0.2s', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
            <div style={{ marginBottom: '20px' }}><IconFilm /></div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a2e' }}>{t.criadores}</h2>
            <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>{t.criadoresDesc}</p>
          </div>

          <div style={{ padding: '40px 30px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e9ecef', transition: 'transform 0.2s', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
            <div style={{ marginBottom: '20px' }}><IconSearch /></div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a2e' }}>{t.espectadores}</h2>
            <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>{t.espectadoresDesc}</p>
          </div>

          <div style={{ padding: '40px 30px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e9ecef', transition: 'transform 0.2s', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
            <div style={{ marginBottom: '20px' }}><IconCoin /></div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a2e' }}>{t.planosAcessiveis}</h2>
            <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>{t.planosAcessiveisDesc}</p>
          </div>

        </div>
      </div>

      {/* RODAPÉ */}
      <div style={{ padding: '30px', textAlign: 'center', color: '#999', fontSize: '0.85rem', borderTop: '1px solid #e9ecef', backgroundColor: '#f8f9fa' }}>
        <p>🌎 {t.rodapeIdiomas}</p>
        <p>📧 {t.rodapeContato} | {t.rodapeCnpj}</p>
      </div>
    </div>
  );
}
