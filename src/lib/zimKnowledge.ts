// Base de conhecimento da Zim - Assistente Virtual Zimporiuns

export interface Conhecimento {
  [idioma: string]: {
    saudacoes: string[];
    despedidas: string[];
    empresa: {
      nome: string;
      cnpj: string;
      fundador: string;
      dataAbertura: string;
      email: string;
      site: string;
    };
    planos: {
      bronze: { mensal: number; anual: number };
      prata: { mensal: number; anual: number };
      ouro: { mensal: number; anual: number };
      copper: { mensal: number; anual: number };
    };
    pix: {
      cnpj: string;
      email: string;
      telefone: string;
      aleatoria: string;
    };
    contato: {
      email: string;
      telefone: string;
      horario: string;
    };
    faq: Array<{ pergunta: string; resposta: string }>;
  };
}

export const zimKnowledge: Conhecimento = {
  'pt-BR': {
    saudacoes: ['bom dia', 'boa tarde', 'boa noite', 'olá', 'oi', 'opa', 'e aí', 'salve', 'oie'],
    despedidas: ['tchau', 'até logo', 'até mais', 'falou', 'valeu', 'obrigado', 'flw', 'até'],
    empresa: {
      nome: 'Zimporiuns',
      cnpj: '57.763.175/0001-78',
      fundador: 'Paulo Renato dos Santos Souza',
      dataAbertura: '20 de Outubro de 2024',
      email: 'contato@zimporiuns.com.br',
      site: 'www.zimporiuns.com.br'
    },
    planos: {
      bronze: { mensal: 4.90, anual: 47.00 },
      prata: { mensal: 9.90, anual: 95.00 },
      ouro: { mensal: 19.90, anual: 191.00 },
      copper: { mensal: 4.90, anual: 47.00 }
    },
    pix: {
      cnpj: '57763175000178',
      email: 'contato@zimporiuns.com.br',
      telefone: '11968295173',
      aleatoria: 'fbae7512-abea-47cc-b5ea-4e1b614ee922'
    },
    contato: {
      email: 'zimporiuns@gmail.com',
      telefone: '(11) 96829-5173',
      horario: 'Segunda a Sexta, 9h às 18h'
    },
    faq: [
      { pergunta: 'como funciona a assinatura?', resposta: 'Você escolhe o plano, paga via Stripe e já pode começar a usar imediatamente.' },
      { pergunta: 'quais formas de pagamento?', resposta: 'Cartão de crédito, Pix e boleto.' },
      { pergunta: 'cancelamento?', resposta: 'Pode cancelar a qualquer momento pelo portal do cliente.' },
      { pergunta: 'quanto custa?', resposta: 'Planos a partir de R$ 4,90/mês. Anual tem 20% de desconto.' }
    ]
  },
  'en': {
    saudacoes: ['good morning', 'good afternoon', 'good evening', 'hello', 'hi', 'hey', 'greetings', 'howdy'],
    despedidas: ['bye', 'goodbye', 'see you', 'later', 'thanks', 'thank you', 'farewell'],
    empresa: {
      nome: 'Zimporiuns',
      cnpj: '57.763.175/0001-78',
      fundador: 'Paulo Renato dos Santos Souza',
      dataAbertura: 'October 20, 2024',
      email: 'contato@zimporiuns.com.br',
      site: 'www.zimporiuns.com.br'
    },
    planos: {
      bronze: { mensal: 4.90, anual: 47.00 },
      prata: { mensal: 9.90, anual: 95.00 },
      ouro: { mensal: 19.90, anual: 191.00 },
      copper: { mensal: 4.90, anual: 47.00 }
    },
    pix: {
      cnpj: '57763175000178',
      email: 'contato@zimporiuns.com.br',
      telefone: '11968295173',
      aleatoria: 'fbae7512-abea-47cc-b5ea-4e1b614ee922'
    },
    contato: {
      email: 'zimporiuns@gmail.com',
      telefone: '(11) 96829-5173',
      horario: 'Monday to Friday, 9am to 6pm'
    },
    faq: [
      { pergunta: 'how does subscription work?', resposta: 'Choose your plan, pay via Stripe, and start using immediately.' },
      { pergunta: 'payment methods?', resposta: 'Credit card, Pix, and boleto.' },
      { pergunta: 'cancellation?', resposta: 'Cancel anytime through customer portal.' }
    ]
  }
  // Os outros 6 idiomas (es, fr, de, ja, zh, pt-PT) podem ser adicionados depois
};

export function detectarIdioma(texto: string): string {
  const textosPorIdioma = {
    'pt-BR': ['bom dia', 'boa tarde', 'oi', 'olá', 'tchau', 'obrigado', 'como vai'],
    'en': ['good morning', 'hello', 'hi', 'bye', 'thanks', 'how are you'],
    'es': ['buenos días', 'hola', 'chao', 'gracias', 'cómo estás'],
    'fr': ['bonjour', 'salut', 'au revoir', 'merci', 'comment ça va'],
    'de': ['guten morgen', 'hallo', 'tschüss', 'danke', 'wie geht es dir'],
    'ja': ['おはよう', 'こんにちは', 'さようなら', 'ありがとう'],
    'zh': ['早上好', '你好', '再见', '谢谢']
  };
  
  const textoLower = texto.toLowerCase();
  for (const [idioma, palavras] of Object.entries(textosPorIdioma)) {
    if (palavras.some(palavra => textoLower.includes(palavra))) {
      return idioma;
    }
  }
  return 'pt-BR';
}

export function gerarProtocolo(): string {
  const agora = new Date();
  const dataStr = agora.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  return `ZIM-${dataStr}-${random}`;
}

export function getSaudacaoPorPeriodo(idioma: string): string {
  const hora = new Date().getHours();
  const saudacoesMap: Record<string, Record<string, string>> = {
    'pt-BR': { manha: 'Bom dia! 🌞', tarde: 'Boa tarde! 🌤️', noite: 'Boa noite! 🌙' },
    'en': { manha: 'Good morning! 🌞', tarde: 'Good afternoon! 🌤️', noite: 'Good evening! 🌙' },
    'es': { manha: '¡Buenos días! 🌞', tarde: '¡Buenas tardes! 🌤️', noite: '¡Buenas noches! 🌙' },
    'fr': { manha: 'Bonjour ! 🌞', tarde: 'Bon après-midi ! 🌤️', noite: 'Bonsoir ! 🌙' },
    'de': { manha: 'Guten Morgen! 🌞', tarde: 'Guten Tag! 🌤️', noite: 'Guten Abend! 🌙' }
  };
  
  let periodo = hora < 12 ? 'manha' : hora < 18 ? 'tarde' : 'noite';
  return saudacoesMap[idioma]?.[periodo] || saudacoesMap['pt-BR'][periodo];
}
