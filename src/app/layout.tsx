import type { Metadata } from 'next';
import ZimChat from '@/components/ZimChat';

export const metadata: Metadata = {
  title: 'Zimporiuns — Plataforma de Criadores',
  description: 'Conectando criadores de conteúdo ao seu público.',
  icons: { icon: '/images/favicon.webp' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
        <ZimChat />
      </body>
    </html>
  );
}
