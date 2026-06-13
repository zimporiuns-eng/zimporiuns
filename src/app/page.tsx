'use client';

import { useState } from 'react';
import Link from 'next/link';

type Idioma = 'pt-BR' | 'en' | 'es' | 'pt-PT' | 'fr' | 'de' | 'ja' | 'zh';

const traducoes: Record<Idioma, any> = {
  'pt-BR': {
    titulo: 'Zimporiuns',
    subtitulo: 'A plataforma brasileira que conecta criadores de conteúdo ao seu público.',
    criadores: 'Criadores',
    criadoresDesc: 'Cadastre seus canais de TV, rádio, YouTube, Twitch e muito mais. Seja encontrado por novos fãs e acompanhe seu crescimento.',
    espectadores: 'Espectadores',
    espectadoresDesc: 'Descubra novos criadores brasileiros em um diretório organizado por categorias. Favoritos ilimitados e navegação limpa.',
    planosAcessiveis: 'Planos Acessíveis',
    planosAcessiveisDesc: 'A partir de R$ 4,90/mês. Cobertura de custos com apenas 3 criadores no plano Bronze.',
    verPlanos: 'Ver Planos',
    rodapeIdiomas: 'Disponível em vários idiomas',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'en': {
    titulo: 'Zimporiuns',
    subtitulo: 'The Brazilian platform that connects content creators to their audience.',
    criadores: 'Creators',
    criadoresDesc: 'Register your TV, radio, YouTube, Twitch channels and more. Be found by new fans and track your growth.',
    espectadores: 'Viewers',
    espectadoresDesc: 'Discover new Brazilian creators in a category-organized directory. Unlimited favorites and clean navigation.',
    planosAcessiveis: 'Affordable Plans',
    planosAcessiveisDesc: 'Starting at R$4.90/month. Cover costs with just 3 creators on the Bronze plan.',
    verPlanos: 'View Plans',
    rodapeIdiomas: 'Available in multiple languages',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'es': {
    titulo: 'Zimporiuns',
    subtitulo: 'La plataforma brasileña que conecta creadores de contenido con su público.',
    criadores: 'Creadores',
    criadoresDesc: 'Registra tus canales de TV, radio, YouTube, Twitch y más. Sé encontrado por nuevos fans y sigue tu crecimiento.',
    espectadores: 'Espectadores',
    espectadoresDesc: 'Descubre nuevos creadores brasileños en un directorio organizado por categorías. Favoritos ilimitados y navegación limpia.',
    planosAcessiveis: 'Planes Accesibles',
    planosAcessiveisDesc: 'Desde R$4,90/mes. Cubre costos con solo 3 creadores en el plan Bronze.',
    verPlanos: 'Ver Planes',
    rodapeIdiomas: 'Disponible en varios idiomas',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'pt-PT': {
    titulo: 'Zimporiuns',
    subtitulo: 'A plataforma brasileira que liga criadores de conteúdo ao seu público.',
    criadores: 'Criadores',
    criadoresDesc: 'Registe os seus canais de TV, rádio, YouTube, Twitch e muito mais. Seja encontrado por novos fãs e acompanhe o seu crescimento.',
    espectadores: 'Espectadores',
    espectadoresDesc: 'Descubra novos criadores brasileiros num diretório organizado por categorias. Favoritos ilimitados e navegação limpa.',
    planosAcessiveis: 'Planos Acessíveis',
    planosAcessiveisDesc: 'A partir de R$ 4,90/mês. Cobertura de custos com apenas 3 criadores no plano Bronze.',
    verPlanos: 'Ver Planos',
    rodapeIdiomas: 'Disponível em vários idiomas',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'fr': {
    titulo: 'Zimporiuns',
    subtitulo: 'La plateforme brésilienne qui connecte les créateurs de contenu à leur public.',
    criadores: 'Créateurs',
    criadoresDesc: 'Enregistrez vos chaînes TV, radio, YouTube, Twitch et plus. Soyez découvert par de nouveaux fans et suivez votre croissance.',
    espectadores: 'Spectateurs',
    espectadoresDesc: 'Découvrez de nouveaux créateurs brésiliens dans un répertoire organisé par catégories. Favoris illimités et navigation propre.',
    planosAcessiveis: 'Plans Abordables',
    planosAcessiveisDesc: 'À partir de R$4,90/mois. Couvrez les coûts avec seulement 3 créateurs sur le plan Bronze.',
    verPlanos: 'Voir les Plans',
    rodapeIdiomas: 'Disponible en plusieurs langues',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'de': {
    titulo: 'Zimporiuns',
    subtitulo: 'Die brasilianische Plattform, die Content-Ersteller mit ihrem Publikum verbindet.',
    criadores: 'Ersteller',
    criadoresDesc: 'Registrieren Sie Ihre TV-, Radio-, YouTube-, Twitch-Kanäle und mehr. Werden Sie von neuen Fans gefunden und verfolgen Sie Ihr Wachstum.',
    espectadores: 'Zuschauer',
    espectadoresDesc: 'Entdecken Sie neue brasilianische Ersteller in einem nach Kategorien organisierten Verzeichnis. Unbegrenzte Favoriten und saubere Navigation.',
    planosAcessiveis: 'Erschwingliche Pläne',
    planosAcessiveisDesc: 'Ab R$4,90/Monat. Decken Sie die Kosten mit nur 3 Erstellern im Bronze-Plan.',
    verPlanos: 'Pläne ansehen',
    rodapeIdiomas: 'In mehreren Sprachen verfügbar',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'ja': {
    titulo: 'Zimporiuns',
    subtitulo: 'コンテンツクリエイターと視聴者をつなぐブラジルのプラットフォーム。',
    criadores: 'クリエイター',
    criadoresDesc: 'TV、ラジオ、YouTube、Twitchなどのチャンネルを登録。新しいファンに見つけてもらい、成長を追跡。',
    espectadores: '視聴者',
    espectadoresDesc: 'カテゴリ別に整理されたディレクトリで新しいブラジルのクリエイターを発見。無制限のお気に入りとクリーンなナビゲーション。',
    planosAcessiveis: 'お手頃なプラン',
    planosAcessiveisDesc: '月額R$4.90から。Bronzeプランでわずか3人のクリエイターでコストをカバー。',
    verPlanos: 'プランを見る',
    rodapeIdiomas: '複数の言語で利用可能',
    rodapeContato: 'contato@zimporiuns.com.br',
    rodapeCnpj: 'CNPJ: 57.763.175/0001-78'
  },
  'zh': {
    titulo: 'Zimporiuns',
    subtitulo: '连接内容创作者与受众的巴西平台。',
    criadores: '创作者',
    criadoresDesc: '注册您的电视、广播、YouTube、Twitch等频道。被新粉丝发现，追踪您的成长。',
    espectadores: '观众',
    espectadoresDesc: '在按类别组织的目录中发现新的巴西创作者。无限收藏夹和简洁导航。',
    planosAcessiveis: '实惠计划',
    planosAcessiveisDesc: '每月R$4.90起。仅需3位Bronze计划创作者即可覆盖成本。',
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

export default function Home() {
  const [idioma, setIdioma] = useState<Idioma>('pt-BR');
  const t = traducoes[idioma];

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      
      {/* SELETOR DE IDIOMAS */}
      <div style={{ textAlign: 'right', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '5px' }}>
        {idiomas.map((lang) => (
          <button
            key={lang.codigo}
            onClick={() => setIdioma(lang.codigo)}
            style={{
              padding: '6px 12px',
              backgroundColor: idioma === lang.codigo ? '#0070f3' : '#f0f0f0',
              color: idioma === lang.codigo ? 'white' : '#333',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
            title={lang.nome}
          >
            {lang.bandeira}
          </button>
        ))}
      </div>

      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        🚀 {t.titulo}
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '40px' }}>
        {t.subtitulo}
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px' }}>
        <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🎬 {t.criadores}</h2>
          <p style={{ color: '#666' }}>{t.criadoresDesc}</p>
        </div>
        <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🔍 {t.espectadores}</h2>
          <p style={{ color: '#666' }}>{t.espectadoresDesc}</p>
        </div>
        <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>💰 {t.planosAcessiveis}</h2>
          <p style={{ color: '#666' }}>{t.planosAcessiveisDesc}</p>
        </div>
      </div>
      
      <Link href="/planos" style={{
        display: 'inline-block',
        padding: '15px 40px',
        backgroundColor: '#0070f3',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }}>
        {t.verPlanos}
      </Link>
      
      <div style={{ marginTop: '60px', padding: '20px', borderTop: '1px solid #e0e0e0', color: '#999' }}>
        <p>🌎 {t.rodapeIdiomas}</p>
        <p>📧 {t.rodapeContato} | {t.rodapeCnpj}</p>
      </div>
    </div>
  );
}
