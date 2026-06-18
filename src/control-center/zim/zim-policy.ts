export function validateZimRequest(intent: string): boolean {
  const forbidden = [
    'mostrar código',
    'exibir senha',
    'revelar sistema',
    'backend completo',
    'estrutura interna'
  ];

  return !forbidden.some(f => intent.toLowerCase().includes(f));
}
