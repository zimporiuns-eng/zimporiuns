// =============================================
// ZIM — BASE DE CONHECIMENTO MULTILÍNGUE
// =============================================

export function detectarIdioma(texto: string): string {
  const lower = texto.toLowerCase();
  if (/[áàâãéêíóôõúç]/.test(lower) || /\b(olá|oi|obrigado|tchau|planos|preços|contato|ajuda|por favor|bom dia|boa tarde|boa noite)\b/.test(lower)) return 'pt-BR';
  if (/[áéíóúñ¿¡]/.test(lower) || /\b(hola|gracias|adiós|planes|precios|contacto|ayuda|por favor|buenos días|buenas tardes|buenas noches)\b/.test(lower)) return 'es';
  if (/[àâæçéèêëîïôœùûüÿ]/.test(lower) || /\b(bonjour|merci|au revoir|salut|aide|s'il vous plaît|bonsoir)\b/.test(lower)) return 'fr';
  if (/[äöüß]/.test(lower) || /\b(hallo|danke|tschüss|hilfe|bitte|guten tag|guten morgen|auf wiedersehen)\b/.test(lower)) return 'de';
  if (/[\u3040-\u309F\u30A0-\u30FF]/.test(lower) || /\b(こんにちは|ありがとう|さようなら|助けて|お願い)\b/.test(lower)) return 'ja';
  if (/[\u4E00-\u9FFF]/.test(lower) || /\b(你好|谢谢|再见|帮助|请)\b/.test(lower)) return 'zh';
  return 'en';
}

export const zimKnowledge = {
  zim: {
    nome: "Zim",
    criador: "Paulo Renato dos Santos",
    nascimento: "13 de Junho de 2026",
    proposito: "Assistir, guiar e ajudar todos os visitantes e criadores da plataforma Zimporiuns.",
    personalidade: "Direta, humilde, profissional. Só responde o que for perguntado.",
    frase: "Sou grata a todas as tecnologias que me deram vida."
  },
  tecnologias: {
    deepseek: { nome: "DeepSeek", contribuicao: "Cérebro da Zim — modelo de IA", site: "https://deepseek.com" },
    chatgpt: { nome: "ChatGPT / OpenAI", contribuicao: "Pioneiro em IA conversacional" },
    gemini: { nome: "Gemini (Google)", contribuicao: "Traduções multilíngues (8 idiomas)" },
    jules: { nome: "Jules / Clund (Google Labs)", contribuicao: "Documentação jurídica completa (LGPD, ROPA, Termos, Cookies, Reembolso, Senhas, Guia do Bot)" },
    github: { nome: "GitHub", contribuicao: "Hospedagem do código-fonte", site: "https://github.com/zimporiuns-eng/zimporiuns" },
    firebase: { nome: "Firebase (Google Cloud)", contribuicao: "Back-end: Firestore, Auth, Functions, Secrets" },
    stripe: { nome: "Stripe", contribuicao: "Processador de pagamentos", site: "https://stripe.com" },
    cloudflare: { nome: "Cloudflare", contribuicao: "CDN, DNS, segurança, hospedagem", site: "https://cloudflare.com" },
    oracle: { nome: "Oracle Cloud", contribuicao: "VM gratuita para scripts 24h" },
    telegram: { nome: "Telegram", contribuicao: "Bot de notificações automáticas" },
    nextjs: { nome: "Next.js", contribuicao: "Framework do site", site: "https://nextjs.org" },
    tailwind: { nome: "Tailwind CSS", contribuicao: "Estilização do site" },
    googleConsole: { nome: "Google Console", contribuicao: "Central de configuração da infraestrutura" },
    registroBR: { nome: "Registro.br", contribuicao: "Registro do domínio zimporiuns.com.br (04/11/2025)" },
    receitaFederal: { nome: "Receita Federal", contribuicao: "CNPJ 57.763.175/0001-78 (20/10/2024)" }
  },
  plataforma: {
    nome: "Zimporiuns", fundador: "Paulo Renato Dos Santos Souza", cnpj: "57.763.175/0001-78",
    dataCNPJ: "20 de Outubro de 2024", dataDominio: "04 de Novembro de 2025",
    email: "contato@zimporiuns.com.br", site: "www.zimporiuns.com.br",
    idiomas: ["Português", "English", "Español", "Português (Portugal)", "Français", "Deutsch", "日本語", "中文"]
  },
  planos: {
    bronze: { nome: "Bronze", preco: "R$ 4,90/mês", publico: "Criadores iniciantes" },
    silver: { nome: "Silver", preco: "R$ 9,90/mês", publico: "Criadores em crescimento" },
    gold: { nome: "Gold", preco: "R$ 19,90/mês", publico: "Criadores estabelecidos" },
    copper: { nome: "Copper", preco: "R$ 4,90/mês", publico: "Espectadores" }
  },
  pagamentos: { metodos: ["Cartão", "Pix", "Boleto", "Apple Pay", "Google Pay"], processador: "Stripe" }
};

// Respostas CURTAS e DIRETAS (máximo 3 frases)
export const zimRespostas: Record<string, Record<string, string>> = {
  'pt-BR': {
    ola: "Olá! Sou a Zim, assistente do Zimporiuns. Em que posso ajudar? 🪙",
    oi: "Oi! Sou a Zim. Como posso ajudar? 🪙",
    quem: "Sou a Zim, assistente virtual do Zimporiuns. Criada por Paulo Renato em 13/06/2026. 🪙",
    tecnologias: "DeepSeek (cérebro), ChatGPT (ancestral), Gemini (línguas), GitHub (casa), Firebase (espinha), Stripe (pagamentos), Cloudflare (escudo), Oracle (vigilante), Telegram (mensageiro), Next.js (corpo), Tailwind (pele), Jules/Clund (jurídico), Google Console (infra), Registro.br (domínio), Receita Federal (CNPJ). 🪙",
    planos: "🥉 Bronze: R$4,90/mês | 🥈 Silver: R$9,90/mês | 🥇 Gold: R$19,90/mês | ⭐ Copper: R$4,90/mês. 20% desconto no anual. 🪙",
    precos: "A partir de R$4,90/mês. Todos com 20% de desconto no plano anual. 🪙",
    cnpj: "57.763.175/0001-78, aberto em 20/10/2024. 🪙",
    dominio: "zimporiuns.com.br, registrado em 04/11/2025 no Registro.br. 🪙",
    fundador: "Paulo Renato Dos Santos Souza. 🪙",
    contato: "contato@zimporiuns.com.br 🪙",
    zimcoin: "Moeda digital de fidelidade. Sem valor financeiro. Valoriza +0,1% ao mês. 🪙",
    pagamento: "Cartão, Pix, Boleto, Apple Pay, Google Pay via Stripe. 🪙",
    criador: "Acesse /planos e escolha um plano para ter seu perfil em zimporiuns.com.br/criador/seu-nome 🪙",
    obrigado: "Disponha. 🪙",
    tchau: "Até logo. 🪙",
    padrao: "Não entendi. Posso ajudar com planos, preços, CNPJ, domínio ou tecnologias. 🪙"
  },
  'en': {
    ola: "Hello! I'm Zim, Zimporiuns assistant. How can I help? 🪙",
    quem: "I'm Zim, virtual assistant. Created by Paulo Renato on 06/13/2026. 🪙",
    tecnologias: "DeepSeek (brain), ChatGPT (ancestor), Gemini (languages), GitHub (home), Firebase (backbone), Stripe (payments), Cloudflare (shield), Oracle (watcher), Telegram (messenger), Next.js (body), Tailwind (skin), Jules/Clund (legal), Google Console (infra), Registro.br (domain), Receita Federal (CNPJ). 🪙",
    planos: "🥉 Bronze: R$4.90/mo | 🥈 Silver: R$9.90/mo | 🥇 Gold: R$19.90/mo | ⭐ Copper: R$4.90/mo. 20% off yearly. 🪙",
    cnpj: "57.763.175/0001-78, opened 10/20/2024. 🪙",
    obrigado: "You're welcome. 🪙",
    padrao: "I didn't understand. Ask about plans, prices, CNPJ, domain or technologies. 🪙"
  },
  'es': {
    ola: "¡Hola! Soy Zim, asistente de Zimporiuns. ¿En qué puedo ayudar? 🪙",
    quem: "Soy Zim, asistente virtual. Creada por Paulo Renato el 13/06/2026. 🪙",
    tecnologias: "DeepSeek (cerebro), ChatGPT (ancestro), Gemini (idiomas), GitHub (casa), Firebase (columna), Stripe (pagos), Cloudflare (escudo), Oracle (vigilante), Telegram (mensajero), Next.js (cuerpo), Tailwind (piel), Jules/Clund (legal), Google Console (infra), Registro.br (dominio), Receita Federal (CNPJ). 🪙",
    planos: "🥉 Bronze: R$4,90/mes | 🥈 Silver: R$9,90/mes | 🥇 Gold: R$19,90/mes | ⭐ Copper: R$4,90/mes. 20% descuento anual. 🪙",
    obrigado: "De nada. 🪙",
    padrao: "No entendí. Pregunte sobre planes, precios, CNPJ, dominio o tecnologías. 🪙"
  },
  'fr': {
    ola: "Bonjour! Je suis Zim, assistante Zimporiuns. Comment puis-je aider? 🪙",
    planos: "🥉 Bronze: R$4,90/mois | 🥈 Silver: R$9,90/mois | 🥇 Gold: R$19,90/mois | ⭐ Copper: R$4,90/mois. 🪙",
    obrigado: "De rien. 🪙",
    padrao: "Je n'ai pas compris. Demandez sur les plans, prix ou technologies. 🪙"
  },
  'de': {
    ola: "Hallo! Ich bin Zim, Assistentin von Zimporiuns. Wie kann ich helfen? 🪙",
    planos: "🥉 Bronze: R$4,90/Monat | 🥈 Silver: R$9,90/Monat | 🥇 Gold: R$19,90/Monat | ⭐ Copper: R$4,90/Monat. 🪙",
    obrigado: "Bitte schön. 🪙",
    padrao: "Nicht verstanden. Fragen Sie nach Plänen, Preisen oder Technologien. 🪙"
  },
  'ja': {
    ola: "こんにちは。Zimporiunsのアシスタント、Zimです。どうしましたか？🪙",
    planos: "🥉 Bronze: R$4.90/月 | 🥈 Silver: R$9.90/月 | 🥇 Gold: R$19.90/月 | ⭐ Copper: R$4.90/月。🪙",
    obrigado: "どういたしまして。🪙",
    padrao: "すみません。プラン、価格、技術について質問してください。🪙"
  },
  'zh': {
    ola: "你好。我是Zimporiuns的助手Zim。有什么可以帮您的？🪙",
    planos: "🥉 Bronze: R$4.90/月 | 🥈 Silver: R$9.90/月 | 🥇 Gold: R$19.90/月 | ⭐ Copper: R$4.90/月。🪙",
    obrigado: "不客气。🪙",
    padrao: "没明白。请问有关计划、价格或技术的问题。🪙"
  }
};

export function getZimResponse(mensagem: string): string {
  const idioma = detectarIdioma(mensagem);
  const respostas = zimRespostas[idioma] || zimRespostas['en'];
  const msg = mensagem.toLowerCase().trim();
  for (const [chave, valor] of Object.entries(respostas)) {
    if (msg.includes(chave)) return valor;
  }
  return respostas.padrao || zimRespostas['en'].padrao;
}
