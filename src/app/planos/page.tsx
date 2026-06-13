'use client';

import { useState } from 'react';
import Link from 'next/link';

type Idioma = 'pt-BR' | 'en' | 'es' | 'pt-PT' | 'fr' | 'de' | 'ja' | 'zh';

const traducoes: Record<Idioma, any> = {
  'pt-BR': {
    titulo: 'Planos Zimporiuns',
    subtitulo: 'Escolha o plano ideal para você',
    mensal: 'Mensal',
    anual: 'Anual (20% desc)',
    economia: 'Economia de 20%!',
    assinar: 'Assinar',
    redirecionando: 'Redirecionando...',
    ano: 'ano',
    mes: 'mês',
    beneficiosBronze: ['Perfil no diretório', 'Link do canal', 'Classificação indicativa', 'ZimCoin-Bronze (ZCB)'],
    beneficiosSilver: ['Tudo do Bronze', 'Destaque na categoria', 'Badge de verificado', 'ZimCoin-Silver (ZCS)'],
    beneficiosGold: ['Tudo do Silver', 'Prioridade nas buscas', 'Estatísticas básicas', 'ZimCoin-Gold (ZCG)'],
    beneficiosCopper: ['Navegação sem anúncios', 'Favoritos ilimitados', 'Badge de Apoiador', 'ZimCoin-Copper (ZCC)']
  },
  'en': {
    titulo: 'Zimporiuns Plans',
    subtitulo: 'Choose the perfect plan for you',
    mensal: 'Monthly',
    anual: 'Yearly (20% off)',
    economia: 'Save 20%!',
    assinar: 'Subscribe',
    redirecionando: 'Redirecting...',
    ano: 'year',
    mes: 'month',
    beneficiosBronze: ['Directory profile', 'Channel link', 'Content rating', 'ZimCoin-Bronze (ZCB)'],
    beneficiosSilver: ['All Bronze features', 'Category highlight', 'Verified badge', 'ZimCoin-Silver (ZCS)'],
    beneficiosGold: ['All Silver features', 'Search priority', 'Basic statistics', 'ZimCoin-Gold (ZCG)'],
    beneficiosCopper: ['Ad-free navigation', 'Unlimited favorites', 'Supporter badge', 'ZimCoin-Copper (ZCC)']
  },
  'es': {
    titulo: 'Planes Zimporiuns',
    subtitulo: 'Elige el plan perfecto para ti',
    mensal: 'Mensual',
    anual: 'Anual (20% desc)',
    economia: '¡Ahorra 20%!',
    assinar: 'Suscribir',
    redirecionando: 'Redirigiendo...',
    ano: 'año',
    mes: 'mes',
    beneficiosBronze: ['Perfil en el directorio', 'Enlace del canal', 'Clasificación indicativa', 'ZimCoin-Bronze (ZCB)'],
    beneficiosSilver: ['Todo lo de Bronze', 'Destacado en categoría', 'Insignia verificada', 'ZimCoin-Silver (ZCS)'],
    beneficiosGold: ['Todo lo de Silver', 'Prioridad en búsquedas', 'Estadísticas básicas', 'ZimCoin-Gold (ZCG)'],
    beneficiosCopper: ['Navegación sin anuncios', 'Favoritos ilimitados', 'Insignia de seguidor', 'ZimCoin-Copper (ZCC)']
  },
  'pt-PT': {
    titulo: 'Planos Zimporiuns',
    subtitulo: 'Escolha o plano ideal para si',
    mensal: 'Mensal',
    anual: 'Anual (20% desc)',
    economia: 'Poupe 20%!',
    assinar: 'Subscrever',
    redirecionando: 'A redirecionar...',
    ano: 'ano',
    mes: 'mês',
    beneficiosBronze: ['Perfil no diretório', 'Link do canal', 'Classificação indicativa', 'ZimCoin-Bronze (ZCB)'],
    beneficiosSilver: ['Tudo do Bronze', 'Destaque na categoria', 'Distintivo verificado', 'ZimCoin-Silver (ZCS)'],
    beneficiosGold: ['Tudo do Silver', 'Prioridade nas pesquisas', 'Estatísticas básicas', 'ZimCoin-Gold (ZCG)'],
    beneficiosCopper: ['Navegação sem anúncios', 'Favoritos ilimitados', 'Distintivo de apoiante', 'ZimCoin-Copper (ZCC)']
  },
  'fr': {
    titulo: 'Plans Zimporiuns',
    subtitulo: 'Choisissez le plan parfait pour vous',
    mensal: 'Mensuel',
    anual: 'Annuel (20% de réduction)',
    economia: 'Économisez 20% !',
    assinar: 'S\'abonner',
    redirecionando: 'Redirection...',
    ano: 'an',
    mes: 'mois',
    beneficiosBronze: ['Profil dans l\'annuaire', 'Lien du canal', 'Classification indicative', 'ZimCoin-Bronze (ZCB)'],
    beneficiosSilver: ['Tout le Bronze', 'Mise en avant dans la catégorie', 'Badge vérifié', 'ZimCoin-Silver (ZCS)'],
    beneficiosGold: ['Tout le Silver', 'Priorité de recherche', 'Statistiques de base', 'ZimCoin-Gold (ZCG)'],
    beneficiosCopper: ['Navigation sans publicité', 'Favoris illimités', 'Badge de supporter', 'ZimCoin-Copper (ZCC)']
  },
  'de': {
    titulo: 'Zimporiuns Pläne',
    subtitulo: 'Wählen Sie den perfekten Plan für sich',
    mensal: 'Monatlich',
    anual: 'Jährlich (20% Rabatt)',
    economia: '20% sparen!',
    assinar: 'Abonnieren',
    redirecionando: 'Weiterleitung...',
    ano: 'Jahr',
    mes: 'Monat',
    beneficiosBronze: ['Verzeichnisprofil', 'Kanal-Link', 'Alterseinstufung', 'ZimCoin-Bronze (ZCB)'],
    beneficiosSilver: ['Alles von Bronze', 'Kategorie-Hervorhebung', 'Verifiziertes Abzeichen', 'ZimCoin-Silver (ZCS)'],
    beneficiosGold: ['Alles von Silver', 'Suchpriorität', 'Basis-Statistiken', 'ZimCoin-Gold (ZCG)'],
    beneficiosCopper: ['Werbefreie Navigation', 'Unbegrenzte Favoriten', 'Unterstützer-Abzeichen', 'ZimCoin-Copper (ZCC)']
  },
  'ja': {
    titulo: 'Zimporiuns プラン',
    subtitulo: 'あなたにぴったりのプランをお選びください',
    mensal: '月額',
    anual: '年額 (20%オフ)',
    economia: '20%節約！',
    assinar: '購読する',
    redirecionando: 'リダイレクト中...',
    ano: '年',
    mes: '月',
    beneficiosBronze: ['ディレクトリプロフィール', 'チャンネルリンク', 'コンテンツレーティング', 'ZimCoin-Bronze (ZCB)'],
    beneficiosSilver: ['Bronzeの全機能', 'カテゴリでの強調表示', '認証バッジ', 'ZimCoin-Silver (ZCS)'],
    beneficiosGold: ['Silverの全機能', '検索優先', '基本統計', 'ZimCoin-Gold (ZCG)'],
    beneficiosCopper: ['広告なしナビゲーション', '無制限のお気に入り', 'サポーターバッジ', 'ZimCoin-Copper (ZCC)']
  },
  'zh': {
    titulo: 'Zimporiuns 计划',
    subtitulo: '选择最适合您的计划',
    mensal: '每月',
    anual: '每年 (20%折扣)',
    economia: '节省20%！',
    assinar: '订阅',
    redirecionando: '重定向中...',
    ano: '年',
    mes: '月',
    beneficiosBronze: ['目录资料', '频道链接', '内容分级', 'ZimCoin-Bronze (ZCB)'],
    beneficiosSilver: ['Bronze全部功能', '类别突出显示', '认证徽章', 'ZimCoin-Silver (ZCS)'],
    beneficiosGold: ['Silver全部功能', '搜索优先', '基础统计', 'ZimCoin-Gold (ZCG)'],
    beneficiosCopper: ['无广告导航', '无限收藏夹', '支持者徽章', 'ZimCoin-Copper (ZCC)']
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

const planos = [
  { nome: 'Bronze', precoMensal: 'R$ 4,90', precoAnual: 'R$ 47,00', priceIdMensal: 'price_1ThKzUCAhPY16wFyWHl3dvHB', priceIdAnual: 'price_1ThqT6CAhPY16wFyZaua0GKw', cor: 'bronze', beneficioKey: 'beneficiosBronze' as const },
  { nome: 'Silver', precoMensal: 'R$ 9,90', precoAnual: 'R$ 95,00', priceIdMensal: 'price_1Thii0CAhPY16wFyliNJHZF3', priceIdAnual: 'price_1ThqjQCAhPY16wFy5IjjnbzV', cor: 'silver', beneficioKey: 'beneficiosSilver' as const },
  { nome: 'Gold', precoMensal: 'R$ 19,90', precoAnual: 'R$ 191,00', priceIdMensal: 'price_1ThjGPCAhPY16wFyelE0MQEJ', priceIdAnual: 'price_1ThqrjCAhPY16wFyajbYuz2j', cor: 'gold', beneficioKey: 'beneficiosGold' as const },
  { nome: 'Copper', precoMensal: 'R$ 4,90', precoAnual: 'R$ 47,00', priceIdMensal: 'price_1ThjgSCAhPY16wFywblcHVgt', priceIdAnual: 'price_1ThqzZCAhPY16wFyS9iVxDGx', cor: 'copper', beneficioKey: 'beneficiosCopper' as const }
];

export default function Planos() {
  const [idioma, setIdioma] = useState<Idioma>('pt-BR');
  const [anual, setAnual] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const t = traducoes[idioma];

  const handleAssinar = async (priceId: string) => {
    setLoading(priceId);
    try {
      const response = await fetch('https://southamerica-east1-zimporiuns-platform.cloudfunctions.net/createCheckoutSession', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, customerEmail: '' })
      });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (err) { console.error('Erro:', err); }
    setLoading(null);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'right', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '5px' }}>
        {idiomas.map((lang) => (
          <button key={lang.codigo} onClick={() => setIdioma(lang.codigo)}
            style={{ padding: '6px 12px', backgroundColor: idioma === lang.codigo ? '#0070f3' : '#f0f0f0', color: idioma === lang.codigo ? 'white' : '#333', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.85rem' }}
            title={lang.nome}>{lang.bandeira}</button>
        ))}
      </div>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>{t.titulo}</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>{t.subtitulo}</p>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <button onClick={() => setAnual(false)} style={{ padding: '10px 30px', backgroundColor: anual ? '#f0f0f0' : '#0070f3', color: anual ? '#333' : 'white', border: 'none', borderRadius: '5px 0 0 5px', cursor: 'pointer', fontWeight: 'bold' }}>{t.mensal}</button>
        <button onClick={() => setAnual(true)} style={{ padding: '10px 30px', backgroundColor: anual ? '#0070f3' : '#f0f0f0', color: anual ? 'white' : '#333', border: 'none', borderRadius: '0 5px 5px 0', cursor: 'pointer', fontWeight: 'bold' }}>{t.anual}</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {planos.map((plano) => {
          const beneficios = t[plano.beneficioKey] as string[];
          return (
            <div key={plano.nome} style={{ border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px', textAlign: 'center', backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{plano.nome}</h2>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>{anual ? plano.precoAnual : plano.precoMensal}<span style={{ fontSize: '0.9rem', color: '#666' }}>/{anual ? t.ano : t.mes}</span></div>
              {anual && <p style={{ color: 'green', fontSize: '0.9rem', marginBottom: '15px' }}>{t.economia}</p>}
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', textAlign: 'left' }}>
                {beneficios.map((b: string, i: number) => <li key={i} style={{ padding: '5px 0', color: '#555' }}>✅ {b}</li>)}
              </ul>
              <button onClick={() => handleAssinar(anual ? plano.priceIdAnual : plano.priceIdMensal)} disabled={loading === (anual ? plano.priceIdAnual : plano.priceIdMensal)} style={{ width: '100%', padding: '12px', backgroundColor: loading === (anual ? plano.priceIdAnual : plano.priceIdMensal) ? '#ccc' : '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>{loading === (anual ? plano.priceIdAnual : plano.priceIdMensal) ? t.redirecionando : t.assinar}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
