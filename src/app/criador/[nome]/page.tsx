

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type Idioma = 'pt-BR' | 'en' | 'es' | 'pt-PT' | 'fr' | 'de' | 'ja' | 'zh';

const traducoes: Record<Idioma, any> = {
  'pt-BR': {
    plano: 'Plano', canais: 'Canais', seguidores: 'seguidores', acessar: 'Acessar',
    zimcoins: 'ZimCoins', dataCadastro: 'Membro desde', classificacao: 'Classificação Indicativa',
    rodape: 'Perfil hospedado no Zimporiuns — Diretório de Criadores Brasileiros',
    cta: 'Quer seu perfil também? Assine um plano!', livre: 'Livre'
  },
  'en': {
    plano: 'Plan', canais: 'Channels', seguidores: 'followers', acessar: 'Visit',
    zimcoins: 'ZimCoins', dataCadastro: 'Member since', classificacao: 'Content Rating',
    rodape: 'Profile hosted on Zimporiuns — Brazilian Creators Directory',
    cta: 'Want your profile too? Subscribe to a plan!', livre: 'All Ages'
  },
  'es': {
    plano: 'Plan', canais: 'Canales', seguidores: 'seguidores', acessar: 'Visitar',
    zimcoins: 'ZimCoins', dataCadastro: 'Miembro desde', classificacao: 'Clasificación Indicativa',
    rodape: 'Perfil alojado en Zimporiuns — Directorio de Creadores Brasileños',
    cta: '¿Quieres tu perfil también? ¡Suscríbete a un plan!', livre: 'Libre'
  },
  'pt-PT': {
    plano: 'Plano', canais: 'Canais', seguidores: 'seguidores', acessar: 'Aceder',
    zimcoins: 'ZimCoins', dataCadastro: 'Membro desde', classificacao: 'Classificação Indicativa',
    rodape: 'Perfil alojado no Zimporiuns — Diretório de Criadores Brasileiros',
    cta: 'Quer o seu perfil também? Subscreva um plano!', livre: 'Livre'
  },
  'fr': {
    plano: 'Plan', canais: 'Chaînes', seguidores: 'abonnés', acessar: 'Visiter',
    zimcoins: 'ZimCoins', dataCadastro: 'Membre depuis', classificacao: 'Classification Indicative',
    rodape: 'Profil hébergé sur Zimporiuns — Annuaire des Créateurs Brésiliens',
    cta: 'Vous voulez votre profil aussi ? Abonnez-vous à un plan !', livre: 'Tous publics'
  },
  'de': {
    plano: 'Plan', canais: 'Kanäle', seguidores: 'Abonnenten', acessar: 'Besuchen',
    zimcoins: 'ZimCoins', dataCadastro: 'Mitglied seit', classificacao: 'Alterseinstufung',
    rodape: 'Profil gehostet auf Zimporiuns — Brasilianisches Ersteller-Verzeichnis',
    cta: 'Willst du auch dein Profil? Abonniere einen Plan!', livre: 'Freigegeben'
  },
  'ja': {
    plano: 'プラン', canais: 'チャンネル', seguidores: 'フォロワー', acessar: '訪問',
    zimcoins: 'ZimCoins', dataCadastro: '登録日', classificacao: 'コンテンツレーティング',
    rodape: 'Zimporiunsでホストされているプロフィール — ブラジルのクリエイターディレクトリ',
    cta: 'あなたもプロフィールを作りませんか？プランを購読しましょう！', livre: '全年齢'
  },
  'zh': {
    plano: '计划', canais: '频道', seguidores: '粉丝', acessar: '访问',
    zimcoins: 'ZimCoins', dataCadastro: '注册日期', classificacao: '内容分级',
    rodape: '个人资料托管在 Zimporiuns — 巴西创作者目录',
    cta: '您也想拥有个人资料吗？订阅计划！', livre: '全年龄'
  }
};

const idiomas = [
  { codigo: 'pt-BR', bandeira: '🇧🇷' }, { codigo: 'en', bandeira: '🇺🇸' },
  { codigo: 'es', bandeira: '🇪🇸' }, { codigo: 'pt-PT', bandeira: '🇵🇹' },
  { codigo: 'fr', bandeira: '🇫🇷' }, { codigo: 'de', bandeira: '🇩🇪' },
  { codigo: 'ja', bandeira: '🇯🇵' }, { codigo: 'zh', bandeira: '🇨🇳' }
];

// Esta função é necessária para output: 'export'
export function generateStaticParams() {
  return [
    { nome: 'exemplo' },
    { nome: 'teste' }
  ];
}

export default function PerfilCriador() {
  const params = useParams();
  const [idioma, setIdioma] = useState<Idioma>('pt-BR');
  const t = traducoes[idioma];

  const criador = {
    nome: params?.nome as string || 'Criador',
    plano: 'Bronze',
    canais: [
      { plataforma: 'YouTube', url: 'https://youtube.com/@exemplo', seguidores: '1.2K' },
      { plataforma: 'Twitch', url: 'https://twitch.tv/exemplo', seguidores: '800' },
      { plataforma: 'Instagram', url: 'https://instagram.com/exemplo', seguidores: '3.5K' }
    ],
    classificacao: 'Livre',
    zimcoins: 150,
    dataCadastro: 'Junho 2026'
  };

  const corPlano = criador.plano === 'Bronze' ? '#CD7F32' : criador.plano === 'Silver' ? '#C0C0C0' : criador.plano === 'Gold' ? '#FFD700' : '#B87333';

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'right', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '5px' }}>
        {idiomas.map((lang) => (
          <button key={lang.codigo} onClick={() => setIdioma(lang.codigo as Idioma)}
            style={{ padding: '6px 12px', backgroundColor: idioma === lang.codigo ? '#0070f3' : '#f0f0f0', color: idioma === lang.codigo ? 'white' : '#333', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.85rem' }}
          >{lang.bandeira}</button>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: corPlano, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'white', fontWeight: 'bold' }}>
          {criador.nome.charAt(0)}
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>{criador.nome}</h1>
        <span style={{ backgroundColor: corPlano, color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
          🥉 {t.plano} {criador.plano}
        </span>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid #e0e0e0', paddingBottom: '10px' }}>🔗 {t.canais}</h2>
      <div style={{ display: 'grid', gap: '15px', marginBottom: '40px' }}>
        {criador.canais.map((canal, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
            <div>
              <strong>{canal.plataforma}</strong>
              <p style={{ color: '#777', margin: '5px 0 0 0', fontSize: '0.9rem' }}>{canal.seguidores} {t.seguidores}</p>
            </div>
            <a href={canal.url} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0070f3', color: 'white', padding: '8px 20px', borderRadius: '5px', textDecoration: 'none', fontSize: '0.9rem' }}>{t.acessar}</a>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '40px' }}>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: corPlano }}>🪙 {criador.zimcoins}</p>
          <p style={{ color: '#777', fontSize: '0.9rem' }}>{t.zimcoins}</p>
        </div>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🎬 {criador.canais.length}</p>
          <p style={{ color: '#777', fontSize: '0.9rem' }}>{t.canais}</p>
        </div>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>📅</p>
          <p style={{ color: '#777', fontSize: '0.9rem' }}>{t.dataCadastro}: {criador.dataCadastro}</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', marginBottom: '30px' }}>
        <p style={{ fontSize: '0.9rem', color: '#777' }}>{t.classificacao}</p>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4CAF50' }}>🟢 {t.livre}</p>
      </div>

      <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #e0e0e0', color: '#999' }}>
        <p>{t.rodape}</p>
        <Link href="/planos" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>{t.cta}</Link>
      </div>
    </div>
  );
}
