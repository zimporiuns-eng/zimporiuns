'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type Idioma = 'pt-BR' | 'en' | 'es' | 'pt-PT' | 'fr' | 'de' | 'ja' | 'zh';

const traducoes: Record<Idioma, any> = {
  'pt-BR': { plano: 'Plano', canais: 'Canais', seguidores: 'seguidores', acessar: 'Acessar', zimcoins: 'ZimCoins', dataCadastro: 'Membro desde', classificacao: 'Classificação Indicativa', rodape: 'Perfil hospedado no Zimporiuns', cta: 'Quer seu perfil também? Assine um plano!', livre: 'Livre' },
  'en': { plano: 'Plan', canais: 'Channels', seguidores: 'followers', acessar: 'Visit', zimcoins: 'ZimCoins', dataCadastro: 'Member since', classificacao: 'Content Rating', rodape: 'Profile hosted on Zimporiuns', cta: 'Want your profile too? Subscribe!', livre: 'All Ages' },
  'es': { plano: 'Plan', canais: 'Canales', seguidores: 'seguidores', acessar: 'Visitar', zimcoins: 'ZimCoins', dataCadastro: 'Miembro desde', classificacao: 'Clasificación', rodape: 'Perfil alojado en Zimporiuns', cta: '¿Quieres tu perfil? ¡Suscríbete!', livre: 'Libre' },
  'pt-PT': { plano: 'Plano', canais: 'Canais', seguidores: 'seguidores', acessar: 'Aceder', zimcoins: 'ZimCoins', dataCadastro: 'Membro desde', classificacao: 'Classificação', rodape: 'Perfil alojado no Zimporiuns', cta: 'Quer o seu perfil? Subscreva!', livre: 'Livre' },
  'fr': { plano: 'Plan', canais: 'Chaînes', seguidores: 'abonnés', acessar: 'Visiter', zimcoins: 'ZimCoins', dataCadastro: 'Membre depuis', classificacao: 'Classification', rodape: 'Profil hébergé sur Zimporiuns', cta: 'Votre profil ? Abonnez-vous!', livre: 'Tous publics' },
  'de': { plano: 'Plan', canais: 'Kanäle', seguidores: 'Abonnenten', acessar: 'Besuchen', zimcoins: 'ZimCoins', dataCadastro: 'Mitglied seit', classificacao: 'Alterseinstufung', rodape: 'Profil gehostet auf Zimporiuns', cta: 'Dein Profil? Abonnieren!', livre: 'Freigegeben' },
  'ja': { plano: 'プラン', canais: 'チャンネル', seguidores: 'フォロワー', acessar: '訪問', zimcoins: 'ZimCoins', dataCadastro: '登録日', classificacao: 'レーティング', rodape: 'Zimporiunsでホスト', cta: 'プロフィールを作成！', livre: '全年齢' },
  'zh': { plano: '计划', canais: '频道', seguidores: '粉丝', acessar: '访问', zimcoins: 'ZimCoins', dataCadastro: '注册日期', classificacao: '分级', rodape: '托管在 Zimporiuns', cta: '创建您的资料！', livre: '全年龄' }
};

const idiomas = [
  { codigo: 'pt-BR', bandeira: '🇧🇷' }, { codigo: 'en', bandeira: '🇺🇸' },
  { codigo: 'es', bandeira: '🇪🇸' }, { codigo: 'pt-PT', bandeira: '🇵🇹' },
  { codigo: 'fr', bandeira: '🇫🇷' }, { codigo: 'de', bandeira: '🇩🇪' },
  { codigo: 'ja', bandeira: '🇯🇵' }, { codigo: 'zh', bandeira: '🇨🇳' }
];

export default function PerfilCriador() {
  const params = useParams();
  const [idioma, setIdioma] = useState<Idioma>('pt-BR');
  const t = traducoes[idioma];
  const criador = { nome: params?.nome as string || 'Criador', plano: 'Bronze', canais: [{ plataforma: 'YouTube', url: '#', seguidores: '1.2K' }], classificacao: 'Livre', zimcoins: 150, dataCadastro: 'Junho 2026' };
  const corPlano = criador.plano === 'Bronze' ? '#CD7F32' : '#C0C0C0';

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'right', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '5px' }}>
        {idiomas.map((lang) => (
          <button key={lang.codigo} onClick={() => setIdioma(lang.codigo as Idioma)} style={{ padding: '6px 12px', backgroundColor: idioma === lang.codigo ? '#0070f3' : '#f0f0f0', color: idioma === lang.codigo ? 'white' : '#333', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.85rem' }}>{lang.bandeira}</button>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: corPlano, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'white', fontWeight: 'bold' }}>{criador.nome.charAt(0)}</div>
        <h1 style={{ fontSize: '2.5rem' }}>{criador.nome}</h1>
        <span style={{ backgroundColor: corPlano, color: 'white', padding: '5px 15px', borderRadius: '20px' }}>🥉 {t.plano} {criador.plano}</span>
      </div>
      <h2>🔗 {t.canais}</h2>
      {criador.canais.map((c, i) => <p key={i}>{c.plataforma}: {c.seguidores} {t.seguidores}</p>)}
      <p>🪙 {criador.zimcoins} {t.zimcoins}</p>
      <p>🟢 {t.livre}</p>
      <Link href="/planos">{t.cta}</Link>
    </div>
  );
}
