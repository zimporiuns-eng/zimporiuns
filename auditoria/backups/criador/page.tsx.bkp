import Link from 'next/link';

export function generateStaticParams() {
  return [
    { nome: 'exemplo' },
    { nome: 'teste' }
  ];
}

export default function PerfilCriador({ params }: { params: { nome: string } }) {
  const criador = {
    nome: params.nome || 'Criador',
    plano: 'Bronze',
    canais: [
      { plataforma: 'YouTube', url: 'https://youtube.com/@exemplo', seguidores: '1.2K' },
      { plataforma: 'Twitch', url: 'https://twitch.tv/exemplo', seguidores: '800' }
    ],
    zimcoins: 150,
    dataCadastro: 'Junho 2026'
  };

  const corPlano = '#CD7F32';

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: corPlano, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'white', fontWeight: 'bold' }}>
          {criador.nome.charAt(0)}
        </div>
        <h1 style={{ fontSize: '2.5rem' }}>{criador.nome}</h1>
        <span style={{ backgroundColor: corPlano, color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
          🥉 Plano {criador.plano}
        </span>
      </div>

      <h2 style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '10px' }}>🔗 Canais</h2>
      {criador.canais.map((canal, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', backgroundColor: '#f9f9f9', borderRadius: '10px', marginBottom: '10px' }}>
          <div>
            <strong>{canal.plataforma}</strong>
            <p style={{ color: '#777', margin: '5px 0 0 0', fontSize: '0.9rem' }}>{canal.seguidores} seguidores</p>
          </div>
          <a href={canal.url} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0070f3', color: 'white', padding: '8px 20px', borderRadius: '5px', textDecoration: 'none' }}>Acessar</a>
        </div>
      ))}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', margin: '40px 0' }}>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: corPlano }}>🪙 {criador.zimcoins}</p>
          <p style={{ color: '#777', fontSize: '0.9rem' }}>ZimCoins</p>
        </div>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🎬 {criador.canais.length}</p>
          <p style={{ color: '#777', fontSize: '0.9rem' }}>Canais</p>
        </div>
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>📅</p>
          <p style={{ color: '#777', fontSize: '0.9rem' }}>Desde {criador.dataCadastro}</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', marginBottom: '30px' }}>
        <p style={{ color: '#777' }}>Classificação Indicativa</p>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4CAF50' }}>🟢 Livre</p>
      </div>

      <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #e0e0e0', color: '#999' }}>
        <p>Perfil hospedado no Zimporiuns — Diretório de Criadores Brasileiros</p>
        <Link href="/planos" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>
          Quer seu perfil também? Assine um plano!
        </Link>
      </div>
    </div>
  );
}
