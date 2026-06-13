'use client';

import { useState } from 'react';
import Link from 'next/link';

type Idioma = 'pt-BR' | 'en' | 'es' | 'pt-PT' | 'fr' | 'de' | 'ja' | 'zh';

const traducoes: Record<Idioma, any> = {
  'pt-BR': { titulo: '😔 Assinatura Cancelada', mensagem: 'O processo de assinatura foi interrompido. Nenhum valor foi cobrado.', duvida: 'Se você tiver alguma dúvida, entre em contato: contato@zimporiuns.com.br', botao: 'Ver Planos Novamente' },
  'en': { titulo: '😔 Subscription Cancelled', mensagem: 'The subscription process was interrupted. No charges were made.', duvida: 'If you have any questions, contact: contato@zimporiuns.com.br', botao: 'View Plans Again' },
  'es': { titulo: '😔 Suscripción Cancelada', mensagem: 'El proceso de suscripción fue interrumpido. No se realizaron cargos.', duvida: 'Si tienes alguna duda, contacta: contato@zimporiuns.com.br', botao: 'Ver Planes de Nuevo' },
  'pt-PT': { titulo: '😔 Subscrição Cancelada', mensagem: 'O processo de subscrição foi interrompido. Não foi cobrado qualquer valor.', duvida: 'Se tiver alguma dúvida, contacte: contato@zimporiuns.com.br', botao: 'Ver Planos Novamente' },
  'fr': { titulo: '😔 Abonnement Annulé', mensagem: 'Le processus d\'abonnement a été interrompu. Aucun montant n\'a été débité.', duvida: 'Si vous avez des questions, contactez : contato@zimporiuns.com.br', botao: 'Voir les Plans' },
  'de': { titulo: '😔 Abonnement Abgebrochen', mensagem: 'Der Abonnementvorgang wurde unterbrochen. Es wurden keine Kosten berechnet.', duvida: 'Bei Fragen kontaktieren Sie: contato@zimporiuns.com.br', botao: 'Pläne Erneut Ansehen' },
  'ja': { titulo: '😔 サブスクリプションがキャンセルされました', mensagem: 'サブスクリプションプロセスが中断されました。料金は発生していません。', duvida: 'ご質問がある場合は、contato@zimporiuns.com.br までご連絡ください。', botao: 'プランを再度見る' },
  'zh': { titulo: '😔 订阅已取消', mensagem: '订阅流程已中断。未收取任何费用。', duvida: '如有疑问，请联系：contato@zimporiuns.com.br', botao: '再次查看计划' }
};

const idiomas: { codigo: Idioma; bandeira: string; nome: string }[] = [
  { codigo: 'pt-BR', bandeira: '🇧🇷', nome: 'Português (Brasil)' }, { codigo: 'en', bandeira: '🇺🇸', nome: 'English' }, { codigo: 'es', bandeira: '🇪🇸', nome: 'Español' }, { codigo: 'pt-PT', bandeira: '🇵🇹', nome: 'Português (Portugal)' }, { codigo: 'fr', bandeira: '🇫🇷', nome: 'Français' }, { codigo: 'de', bandeira: '🇩🇪', nome: 'Deutsch' }, { codigo: 'ja', bandeira: '🇯🇵', nome: '日本語' }, { codigo: 'zh', bandeira: '🇨🇳', nome: '中文'}
];

export default function Cancelado() {
  const [idioma, setIdioma] = useState<Idioma>('pt-BR');
  const t = traducoes[idioma];

  return (
    <div style={{ padding: '60px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'right', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '5px' }}>
        {idiomas.map((lang) => (
          <button key={lang.codigo} onClick={() => setIdioma(lang.codigo)} style={{ padding: '6px 12px', backgroundColor: idioma === lang.codigo ? '#0070f3' : '#f0f0f0', color: idioma === lang.codigo ? 'white' : '#333', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.85rem' }} title={lang.nome}>{lang.bandeira}</button>
        ))}
      </div>
      <h1 style={{ fontSize: '2.5rem', color: '#cc0000', marginBottom: '20px' }}>{t.titulo}</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>{t.mensagem}</p>
      <p style={{ color: '#777', marginBottom: '40px' }}>{t.duvida}</p>
      <Link href="/planos" style={{ display: 'inline-block', padding: '15px 40px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '1.1rem', fontWeight: 'bold' }}>{t.botao}</Link>
    </div>
  );
}
