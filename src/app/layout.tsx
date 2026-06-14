import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zimporiuns — Plataforma de Criadores',
  description: 'Conectando criadores de conteúdo ao seu público.',
  icons: {
    icon: '/images/favicon.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
        
        {/* ZIM — Assistente Virtual */}
        <div style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          zIndex: 9999,
        }}>
          <a href="/planos" title="Zim — Assistente Zimporiuns" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '65px',
            height: '65px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #CD7F32, #FFD700)',
            color: '#1a1a2e',
            fontSize: '1.6rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(205, 127, 50, 0.5)',
            animation: 'pulse 2s infinite',
            transition: 'transform 0.2s',
          }}>
            Zim
          </a>
        </div>
        
        <style jsx global>{`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(205, 127, 50, 0.5); }
            70% { box-shadow: 0 0 0 15px rgba(205, 127, 50, 0); }
            100% { box-shadow: 0 0 0 0 rgba(205, 127, 50, 0); }
          }
        `}</style>
      </body>
    </html>
  );
}
