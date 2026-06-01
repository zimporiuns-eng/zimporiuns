# Guia de Configuração do Bot Interno do Telegram — Zimporiuns v1.0

## 1. Criar o bot
- Conversar com @BotFather no Telegram.
- Comando: /newbot
- Nome sugerido: @ZimporiunsBot

## 2. Obter o token
- O BotFather fornecerá um token. Guarde-o em local seguro (Firebase Secrets Manager).

## 3. Configurar Cloud Function
- Criar uma função HTTP no Firebase que receba notificações e as encaminhe ao bot.

## 4. Configurar Webhook
- Apontar o webhook do bot para a URL da Cloud Function com token secreto.

## 5. Integrar com Firestore
- Triggers para eventos: novo cadastro, falha de backup, renovação de plano.
