# 🔗 Endpoints — Explorando Roteamento e Status HTTP

## 👁️ Visão Geral
A pasta `Endpoints` contém 4 exercícios práticos que exploram diferentes conceitos de desenvolvimento Backend com Node.js: autenticação, roteamento, status HTTP codes e integração com múltiplos arquivos HTML.

---

## 📁 Estrutura de Exercícios

### 1️⃣ **Autenticacao** — Status HTTP e Controle de Acesso
Demonstra como implementar endpoints com diferentes status HTTP relacionados a autenticação.

#### 📄 Arquivo
| Arquivo | Descrição |
|---|---|
| `main.js` | Servidor com endpoints de autenticação |

#### 🔐 Endpoints
| Rota | Status | Mensagem |
|---|---|---|
| `/login` | 200 ✅ | Login realizado com sucesso! |
| `/dashboard` | 401 🔒 | Acesso negado. Faça login primeiro |
| `/admin` | 403 🚫 | Você não tem permissão para acessar esta área |
| Outras rotas | 404 ❌ | Página não encontrada |

#### ⚙️ Como Funciona
- Cria um servidor na porta **8080**
- Valida autenticação com diferentes status HTTP
- Demonstra diferença entre 401 (não autenticado) e 403 (sem permissão)

#### 🚀 Como Executar
```bash
# No diretório Autenticacao/
node main.js
```
Acesse: `http://localhost:8080/login`

#### 🎓 Objetivos de Aprendizado
✅ Entender status HTTP de autenticação (401, 403)
✅ Implementar controle de acesso básico
✅ Diferença entre 404 (não encontrado) e 401/403 (acesso negado)

---

### 2️⃣ **Cardapio** — Endpoints Dinâmicos
Cria endpoints que retornam o cardápio do dia baseado na rota.

#### 📄 Arquivo
| Arquivo | Descrição |
|---|---|
| `main.js` | Servidor com endpoints de cardápio |

#### 🍽️ Endpoints (Dias da Semana)
| Rota | Refeição |
|---|---|
| `/seg` | Hamburguer, Batata Frita e Refrigerante |
| `/ter` | Pizza, Salada e Suco |
| `/qua` | Massa, Vinho e Sorvete |
| `/qui` | Frango Assado, Arroz e Cerveja |
| `/sex` | Peixe, Legumes e Vinho |
| Outros | 404 - Dia não encontrado |

#### ⚙️ Como Funciona
- Cria um servidor na porta **8080**
- Cada dia da semana tem seu próprio endpoint
- Retorna texto simples com o cardápio do dia

#### 🚀 Como Executar
```bash
# No diretório Cardapio/
node main.js
```
Acesse: `http://localhost:8080/seg` (segunda)

#### 🎓 Objetivos de Aprendizado
✅ Criar múltiplos endpoints para o mesmo servidor
✅ Usar padrões de roteamento simples
✅ Retornar dados diferentes conforme a rota

---

### 3️⃣ **Exemplo** — HTTP Status Codes
Demonstra os principais status HTTP codes e como usá-los.

#### 📄 Arquivos
| Arquivo | Descrição |
|---|---|
| `connection.js` | Servidor com exemplos de status codes |
| `index.html` | Página de exemplo |

#### 📡 Status HTTP Codes Implementados
| Rota | Status | Descrição |
|---|---|---|
| `/info` | 100 | Continue |
| `/sucess` | 200 | OK (sucesso) |
| `/redirect` | 301 | Redirect Permanente |
| `/client-error` | 400 | Bad Request |
| `/server-error` | 500 | Internal Server Error |
| Outras rotas | 404 | Serve `index.html` |

#### ⚙️ Como Funciona
- Cria um servidor na porta **5050**
- Cada endpoint retorna um status HTTP diferente
- Rota padrão (404) serve o arquivo `index.html`
- Uso de `fs` para carregar arquivos

#### 🚀 Como Executar
```bash
# No diretório Exemplo/
node connection.js
```
Acesse: `http://localhost:5050/`

#### 🎓 Objetivos de Aprendizado
✅ Conhecer códigos de status HTTP principais
✅ Entender categorias: 1xx (info), 2xx (sucesso), 3xx (redirect), 4xx (cliente), 5xx (servidor)
✅ Usar `fs` para servir arquivos HTML

---

### 4️⃣ **Mini_Blog** — Blog com Múltiplas Páginas
Implementa um blog simples com roteamento e múltiplas páginas HTML.

#### 📄 Arquivos
| Arquivo | Descrição |
|---|---|
| `index.js` | Servidor principal |
| `index.html` | Página inicial do blog |
| `post1.html` | Primeiro artigo |
| `post2.html` | Segundo artigo |
| `not-found.html` | Página 404 personalizada |

#### 📰 Rotas do Blog
| Rota | Arquivo | Descrição |
|---|---|---|
| `/` | `index.html` | Página inicial |
| `/post1` | `post1.html` | Primeiro post |
| `/post2` | `post2.html` | Segundo post |
| Outras | `not-found.html` | Página 404 customizada |

#### ⚙️ Como Funciona
- Cria um servidor na porta **3000**
- Roteamento com múltiplas páginas HTML
- Página 404 personalizada
- Cada rota serve um arquivo diferente com status correto

#### 🚀 Como Executar
```bash
# No diretório Mini_Blog/
node index.js
```
Acesse: `http://localhost:3000/`

#### 🎓 Objetivos de Aprendizado
✅ Implementar roteamento com múltiplos arquivos HTML
✅ Servir páginas dinâmicas baseadas em URL
✅ Personalizar página 404
✅ Estruturar um site com várias páginas

---

## 📊 Resumo Comparativo

| Aspecto | Autenticacao | Cardapio | Exemplo | Mini_Blog |
|---|---|---|---|---|
| **Porta** | 8080 | 8080 | 5050 | 3000 |
| **Foco** | Status HTTP auth | Roteamento simples | Status codes | Blog multi-página |
| **Arquivos** | 1 | 1 | 2 | 5 |
| **Endpoints** | 4 | 5 | 5 | 3 |
| **Usa fs?** | Não | Não | Sim | Sim |
| **Complexidade** | ⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐ |

---

## 🎯 Progressão de Aprendizado
1. **Autenticacao**: Entenda status HTTP de segurança
2. **Cardapio**: Pratique roteamento simples
3. **Exemplo**: Conheça todos os status codes
4. **Mini_Blog**: Integre roteamento com múltiplas páginas

---

## 💡 Conceitos-Chave Abordados
- ✅ Módulo HTTP do Node.js
- ✅ Roteamento básico de URLs
- ✅ Status HTTP codes (1xx, 2xx, 3xx, 4xx, 5xx)
- ✅ Leitura de arquivos com `fs`
- ✅ Content-Type (headers)
- ✅ Autenticação e autorização
- ✅ Tratamento de erros (404, 500)

---

## 🚀 Próximas Etapas
Após dominar esses exercícios:
- 📚 Use o framework **Express.js** para simplificar roteamento
- 🗄️ Integre **banco de dados** para persistência
- 🔐 Implemente **autenticação real** (JWT, sessions)
- 📝 Crie **APIs RESTful** completas
- 🧪 Aprenda **testes unitários** e **integração**

---

✍️ *Documentação gerada com base no conteúdo das pastas*
