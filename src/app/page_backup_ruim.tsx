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

const idiomas = [
  { codigo: 'pt-BR', bandeira: '🇧🇷' }, { codigo: 'en', bandeira: '🇺🇸' },
  { codigo: 'es', bandeira: '🇪🇸' }, { codigo: 'pt-PT', bandeira: '🇵🇹' },
  { codigo: 'fr', bandeira: '🇫🇷' }, { codigo: 'de', bandeira: '🇩🇪' },
  { codigo: 'ja', bandeira: '🇯🇵' }, { codigo: 'zh', bandeira: '🇨🇳' }
];

// ÍCONES: Estrela (Criadores), Olho (Espectadores), Cofrinho (Planos)
const IconFilm = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconSearch = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="1.5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconCoin = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="1.5">
    <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/>
    <path d="M9 11h6"/>
    <path d="M12 8v6"/>
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
          <button key={lang.codigo} onClick={() => setIdioma(lang.codigo as Idioma)}
            style={{ padding: '6px 12px', backgroundColor: idioma === lang.codigo ? '#1a1a2e' : 'transparent', color: idioma === lang.codigo ? 'white' : '#555', border: idioma === lang.codigo ? 'none' : '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
          >{lang.bandeira}</button>
        ))}
      </div>

      {/* HERO COM BANNER */}
      <div style={{
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        padding: '40px 30px 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <img src="/images/banner.webp" alt="Zimporiuns Banner" style={{ maxWidth: '320px', marginBottom: '30px', borderRadius: '16px' }} />
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '15px' }}>{t.titulo}</h1>
        <p style={{ fontSize: '1.2rem', color: '#b0b0c0', maxWidth: '600px', margin: '0 auto 40px' }}>{t.subtitulo}</p>
        <Link href="/planos" style={{
          display: 'inline-block', padding: '16px 45px', background: 'linear-gradient(135deg, #CD7F32, #FFD700)', color: '#1a1a2e', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', boxShadow: '0 8px 25px rgba(205, 127, 50, 0.3)'
        }}>{t.verPlanos}</Link>
      </div>

      {/* CARDS */}
      <div style={{ padding: '60px 30px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '40px 30px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e9ecef', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
            <div style={{ marginBottom: '20px' }}><IconFilm /></div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a2e' }}>{t.criadores}</h2>
            <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>{t.criadoresDesc}</p>
          </div>
          <div style={{ padding: '40px 30px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e9ecef', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
            <div style={{ marginBottom: '20px' }}><IconSearch /></div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a2e' }}>{t.espectadores}</h2>
            <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>{t.espectadoresDesc}</p>
          </div>
          <div style={{ padding: '40px 30px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e9ecef', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
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
