# Estratégia de Preços — Zimporiuns v1.3
> Data: 13/06/2026 | Webhooks Stripe configurados

---

## Planos para Criadores

| Plano | Mensal | Anual (20% desc) | Economia Anual |
|---|---|---|---|
| 🥉 **Bronze** | R$ 4,90 | **R$ 47,00** | R$ 11,80 |
| 🥈 **Prata** | R$ 9,90 | **R$ 95,00** | R$ 23,80 |
| 🥇 **Ouro** | R$ 19,90 | **R$ 191,00** | R$ 47,80 |

## Plano para Usuários Finais

| Plano | Mensal | Anual (20% desc) | Economia Anual |
|---|---|---|---|
| ⭐ **Premium** | R$ 4,90 | **R$ 47,00** | R$ 11,80 |

---

## Price IDs (Stripe)

| Plano | Mensal | Anual |
|---|---|---|
| 🥉 Bronze | `price_1ThKzUCAhPY16wFyWHl3dvHB` | `price_1ThqT6CAhPY16wFyZaua0GKw` |
| 🥈 Prata | `price_1Thii0CAhPY16wFyliNJHZF3` | `price_1ThqjQCAhPY16wFy5IjjnbzV` |
| 🥇 Ouro | `price_1ThjGPCAhPY16wFyelE0MQEJ` | `price_1ThqrjCAhPY16wFyajbYuz2j` |
| ⭐ Premium | `price_1ThjgSCAhPY16wFywblcHVgt` | `price_1ThqzZCAhPY16wFyS9iVxDGx` |

---

## Webhooks (Stripe)

| Evento | Descrição |
|---|---|
| `payment_intent.succeeded` | Pagamento confirmado |
| `invoice.paid` | Fatura paga |
| `customer.subscription.created` | Nova assinatura |
| `customer.subscription.updated` | Assinatura atualizada |
| `customer.subscription.deleted` | Assinatura cancelada |

**Endpoint:** `https://southamerica-east1-zimporiuns-platform.cloudfunctions.net/scheduledFirestoreBackup`
