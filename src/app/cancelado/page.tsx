export default function Cancelado() {
  return (
    <div style={{ padding: '60px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#cc0000', marginBottom: '20px' }}>😔 Assinatura Cancelada</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
        O processo de assinatura foi interrompido. Nenhum valor foi cobrado.
      </p>
      <p style={{ color: '#777', marginBottom: '40px' }}>
        Se você tiver alguma dúvida, entre em contato: contato@zimporiuns.com.br
      </p>
      <a href="/planos" style={{
        display: 'inline-block',
        padding: '15px 40px',
        backgroundColor: '#0070f3',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1.1rem',
        fontWeight: 'bold'
      }}>
        Ver Planos Novamente
      </a>
    </div>
  );
}
