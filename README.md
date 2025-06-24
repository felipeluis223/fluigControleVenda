# 📞 Fluxo de Televenda - Fluig

## 📅 Previsão de Entrega
- **Data limite**: Quinta-feira (máximo até sexta-feira)

---

## 🎯 Objetivo
Desenvolver um fluxo no Fluig para televendas, onde:
- Usuários das **lojas** iniciam solicitações
- O **financeiro da loja** valida os dados da venda
- A solicitação retorna ao solicitante para liberação ou marcação de verificação

---

## GRUPOS E PAPÉIS

### 🏪 Grupos das Lojas
Criar 3 grupos principais de lojas:
- `grpLoja1`
- `grpLoja2`
- `grpLoja3`

Cada grupo representa os colaboradores vinculados à respectiva loja.

### 👥 Grupos do Financeiro (por loja)
Cada loja terá um grupo financeiro dedicado, com papéis distintos:

#### Exemplo - Grupo `grpLoja1`:
| Nome     | Papel                  |
|----------|------------------------|
| Luis     | Dev / TI               |
| Felipe   | Suporte / TI           |
| Janaina  | Assistente / Financeiro|
| Fernanda | Gerente / Financeiro   |

> Os demais grupos (`grpLoja2`, `grpLoja3`) seguirão o mesmo modelo.

### 👤 Padrão de Criação de Usuários
- Nome do usuário: `lojaX_nome`
  - Exemplo: `loja1_luis`, `loja2_felipe`
- Atributos padronizados (nome, login, email, matrícula)

---

## FORMULÁRIO / FLUXO

### ✅ ETAPA 1 - Solicitante (Usuários das Lojas)
Preenchimento inicial do formulário:
- `dataVenda` (Data da Venda)
- `valorVenda` (Valor da Venda)
- `modoPagamento` (Crédito / Débito / Pix)
- `obsSolicitante` (Observações)

---

### 💰 ETAPA 2 - Financeiro (Grupo Financeiro da Loja)
Validação do pagamento:

- 📄 **Se o pagamento foi efetuado:**
  - Anexar comprovante
- ❌ **Se o pagamento NÃO foi localizado:**
  - Exibir mensagem "Não foi encontrado"
  - Campo de `justificativaFinanceiro` obrigatório

---

### 🔁 ETAPA 3 - Retorno ao Solicitante
O solicitante confere os dados da venda e:

- ✅ **Se tudo estiver certo:** aprova a venda (**Venda Liberada**)
- 🚫 **Se o pagamento não for localizado:**
  - Marcar checkbox `verificadoSolicitante` confirmando ciência
  - Encerrar o fluxo como **Pagamento não encontrado**

---

## 🛠️ Técnicas e Controles
- Controle de visualização/habilitação de campos via `displayFields`
- Validações obrigatórias por etapa com `validateForm`
- Controle de anexos e justificativas via `beforeTaskSave`
- Criação e associação de usuários, grupos e papéis via administração do Fluig

---

## ✅ Checklist de Implementação
- [ ] Criação de grupos e usuários conforme padrão
- [ ] Montagem do formulário com campos obrigatórios
- [ ] Implementação do fluxo de aprovação em 3 etapas
- [ ] Aplicação de lógica condicional e validações
- [ ] Testes por grupo (loja1, loja2, loja3)

---

## 📬 Contato
Dúvidas, suporte técnico ou validação dos usuários/grupos:
- Responsável técnico: `Luis Felipe`