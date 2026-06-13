## 2026-05-28
- Push inicial do repositório local para GitHub (merge com código do Jules)
- URL canônica do repositório: git@github.com:zimporiuns/zimporiuns-platform.git
- .gitignore ativo e primeiro log de orçamento Oracle enviado

## 2026-06-01
- Fase 1 concluída: ROPA, Cookies, Reembolso, Senhas, Guia do Bot enviados ao GitHub
- Cloudflare Tunnel ativo para Code Server (trycloudflare.com)
- Script ARM rodando 24h no Cloud Shell (screen)
- Code Server funcional no notebook (localhost:8443)

## 2026-06-02
- Cloudflare Tunnel permanente: code.zimporiuns.com.br
- GitHub Secrets OCI configurados (5 secrets)
- Credenciais OCI documentadas e protegidas
- Script ARM migrado para VM permanente (137.131.192.255)
- Fase 2: 3/5 ações concluídas

## 2026-06-05
- Integração Telegram concluída: notificações automáticas de backup
- Cloud Function atualizada com notifyTelegram()
- Variáveis TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID configuradas
- Teste real: notificação recebida no grupo "Equipe Zimporiuns"
- Fase 3 (Automação e Escala): 100% concluída

## 2026-06-13
- Planos anuais criados no Stripe (20% desconto): Bronze R$47, Prata R$95, Ouro R$191, Premium R$47
- 8 Price IDs testados e validados via Cloud Function
- Webhook da Stripe configurado: notificações de pagamento em tempo real
- Variável STRIPE_WEBHOOK_SECRET adicionada à Cloud Function
- Função scheduledFirestoreBackup atualizada para receber webhooks
- Documentação de preços atualizada para v1.2
- Fase 4 (Webhooks + Lançamento Beta): em andamento
