# Registro de Operações de Tratamento de Dados Pessoais (ROPA)
## Projeto Zimporiuns — v1.0 (preliminar, aguardando revisão jurídica)

### 1. Dados de Usuários Finais
| Dado Pessoal | Finalidade | Base Legal | Armazenamento | Prazo de Retenção | Compartilhamento |
|--------------|------------|------------|---------------|-------------------|------------------|
| E‑mail | Criar conta, suporte | Execução de contrato (art. 7º, V) | Firebase Auth / Firestore | Até cancelamento + 5 anos | Stripe |
| Token de pagamento | Processar assinatura | Execução de contrato | Stripe | Stripe gerencia | Stripe |
| Endereço IP | Segurança e logs | Legítimo interesse (art. 7º, IX) | Cloud Logging / Cloudflare | 6 meses | Cloudflare |

### 2. Dados de Criadores
| Dado Pessoal | Finalidade | Base Legal | Armazenamento | Prazo de Retenção | Compartilhamento |
|--------------|------------|------------|---------------|-------------------|------------------|
| E‑mail | Conta, notificações | Execução de contrato | Firebase Auth / Firestore | Até cancelamento + 5 anos | Nenhum |
| Nome artístico | Perfil público | Consentimento / Execução de contrato | Firestore | Até exclusão da conta | Público |
| Chave Pix | Receber repasses | Execução de contrato | Firestore (criptografado) | Até exclusão da conta | Instituição financeira |
| URL do canal | Exibir conteúdo | Execução de contrato | Firestore | Até exclusão do canal | Público |

### 3. Dados de Visitantes
| Dado Pessoal | Finalidade | Base Legal | Armazenamento | Prazo de Retenção | Compartilhamento |
|--------------|------------|------------|---------------|-------------------|------------------|
| Cookies analíticos | Estatísticas | Legítimo interesse | Google Analytics / Cloudflare | 26 meses | Google, Cloudflare |
| Endereço IP | Segurança | Legítimo interesse | Cloudflare | 6 meses | Cloudflare |

### Observações:
- Nenhum dado sensível é coletado.
- Dados financeiros completos não são armazenados pelo Zimporiuns.
- Consentimento para cookies via banner (a ser implementado).
