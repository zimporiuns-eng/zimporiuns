export default function Home() {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        🚀 Zimporiuns
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '40px' }}>
        A plataforma brasileira que conecta criadores de conteúdo ao seu público.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '50px' }}>
        <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🎬 Criadores</h2>
          <p style={{ color: '#666' }}>
            Cadastre seus canais de TV, rádio, YouTube, Twitch e muito mais. 
            Seja encontrado por novos fãs e acompanhe seu crescimento.
          </p>
        </div>
        <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🔍 Espectadores</h2>
          <p style={{ color: '#666' }}>
            Descubra novos criadores brasileiros em um diretório organizado por categorias. 
            Favoritos ilimitados e navegação limpa.
          </p>
        </div>
        <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>💰 Planos Acessíveis</h2>
          <p style={{ color: '#666' }}>
            A partir de R$ 4,90/mês. Cobertura de custos com apenas 3 criadores no plano Bronze.
          </p>
        </div>
      </div>
      
      <a href="/planos" style={{
        display: 'inline-block',
        padding: '15px 40px',
        backgroundColor: '#0070f3',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }}>
        Ver Planos
      </a>
      
      <div style={{ marginTop: '60px', padding: '20px', borderTop: '1px solid #e0e0e0', color: '#999' }}>
        <p>🌎 Disponível em 🇧🇷 Português | 🇺🇸 English | 🇪🇸 Español | 🇵🇹 Português (Portugal)</p>
        <p>📧 contato@zimporiuns.com.br | CNPJ: 57.763.175/0001-78</p>
      </div>
    </div>
  );
}
