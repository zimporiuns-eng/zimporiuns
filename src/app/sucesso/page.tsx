'use client';

import { useState } from 'react';
import Link from 'next/link';

type Idioma = 'pt-BR' | 'en' | 'es' | 'pt-PT' | 'fr' | 'de' | 'ja' | 'zh';

const traducoes: Record<Idioma, any> = {
  'pt-BR': { titulo: '🎉 Assinatura Confirmada!', mensagem: 'Bem-vindo(a) ao Zimporiuns! Sua assinatura foi ativada com sucesso.', email: 'Você receberá um e-mail de confirmação em instantes.', botao: 'Ir para o Início' },
  'en': { titulo: '🎉 Subscription Confirmed!', mensagem: 'Welcome to Zimporiuns! Your subscription has been successfully activated.', email: 'You will receive a confirmation email shortly.', botao: 'Go to Homepage' },
  'es': { titulo: '🎉 ¡Suscripción Confirmada!', mensagem: '¡Bienvenido(a) a Zimporiuns! Tu suscripción ha sido activada con éxito.', email: 'Recibirás un correo de confirmación en breve.', botao: 'Ir al Inicio' },
  'pt-PT': { titulo: '🎉 Subscrição Confirmada!', mensagem: 'Bem-vindo(a) ao Zimporiuns! A sua subscrição foi ativada com sucesso.', email: 'Receberá um e-mail de confirmação em instantes.', botao: 'Ir para o Início' },
  'fr': { titulo: '🎉 Abonnement Confirmé !', mensagem: 'Bienvenue sur Zimporiuns ! Votre abonnement a été activé avec succès.', email: 'Vous recevrez un e-mail de confirmation sous peu.', botao: 'Aller à l\'Accueil' },
  'de': { titulo: '🎉 Abonnement Bestätigt!', mensagem: 'Willkommen bei Zimporiuns! Ihr Abonnement wurde erfolgreich aktiviert.', email: 'Sie erhalten in Kürze eine Bestätigungs-E-Mail.', botao: 'Zur Startseite' },
  'ja': { titulo: '🎉 サブスクリプション確認！', mensagem: 'Zimporiunsへようこそ！サブスクリプションが正常に有効化されました。', email: '確認メールがまもなく送信されます。', botao: 'ホームページへ' },
  'zh': { titulo: '🎉 订阅已确认！', mensagem: '欢迎来到 Zimporiuns！您的订阅已成功激活。', email: '您将很快收到一封确认邮件。', botao: '前往首页' }
};

const idiomas: { codigo: Idioma; bandeira: string; nome: string }[] = [
  { codigo: 'pt-BR', bandeira: '🇧🇷', nome: 'Português (Brasil)' }, { codigo: 'en', bandeira: '🇺🇸', nome: 'English' }, { codigo: 'es', bandeira: '🇪🇸', nome: 'Español' }, { codigo: 'pt-PT', bandeira: '🇵🇹', nome: 'Português (Portugal)' }, { codigo: 'fr', bandeira: '🇫🇷', nome: 'Français' }, { codigo: 'de', bandeira: '🇩🇪', nome: 'Deutsch' }, { codigo: 'ja', bandeira: '🇯🇵', nome: '日本語' }, { codigo: 'zh', bandeira: '🇨🇳', nome: '中文'}
];

export default function Sucesso() {
  const [idioma, setIdioma] = useState<Idioma>('pt-BR');
  const t = traducoes[idioma];

  return (
    <div style={{ padding: '60px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'right', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '5px' }}>
        {idiomas.map((lang) => (
          <button key={lang.codigo} onClick={() => setIdioma(lang.codigo)} style={{ padding: '6px 12px', backgroundColor: idioma === lang.codigo ? '#0070f3' : '#f0f0f0', color: idioma === lang.codigo ? 'white' : '#333', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '0.85rem' }} title={lang.nome}>{lang.bandeira}</button>
        ))}
      </div>
      <h1 style={{ fontSize: '2.5rem', color: 'green', marginBottom: '20px' }}>{t.titulo}</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>{t.mensagem}</p>
      <p style={{ color: '#777', marginBottom: '40px' }}>{t.email}</p>
      <Link href="/" style={{ display: 'inline-block', padding: '15px 40px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '1.1rem', fontWeight: 'bold' }}>{t.botao}</Link>
    </div>
  );
}
