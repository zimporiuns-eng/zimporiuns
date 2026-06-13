export default function Sucesso() {
  return (
    <div style={{ padding: '60px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: 'green', marginBottom: '20px' }}>🎉 Assinatura Confirmada!</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
        Bem-vindo(a) ao Zimporiuns! Sua assinatura foi ativada com sucesso.
      </p>
      <p style={{ color: '#777', marginBottom: '40px' }}>
        Você receberá um e-mail de confirmação em instantes.
      </p>
      <a href="/" style={{
        display: 'inline-block',
        padding: '15px 40px',
        backgroundColor: '#0070f3',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1.1rem',
        fontWeight: 'bold'
      }}>
        Ir para o Início
      </a>
    </div>
  );
}
