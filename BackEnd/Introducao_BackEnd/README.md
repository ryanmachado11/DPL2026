# 🚀 Introdução ao Backend

## 👁️ Visão Geral
A pasta `Introducao_BackEnd` contém dois exercícios práticos introdutórios para aprender desenvolvimento Backend com Node.js. Ambos exploram o módulo nativo `http` para criar servidores simples.

---

## 📁 Estrutura de Exercícios

### 1️⃣ **hello-world-server** — Servidor Básico
Primeiro exercício: criar um servidor HTTP minimalista.

#### 📄 Arquivo
| Arquivo | Descrição |
|---|---|
| `app.js` | Servidor HTTP que retorna "Hello, World!" |

#### ⚙️ Como Funciona
- Usa o módulo `http` do Node.js
- Cria um servidor na porta **80**
- Responde com texto simples (`text/plain`)
- Retorna "Hello, World!\n" para qualquer requisição

#### 🚀 Como Executar
```bash
# No diretório hello-world-server/
node app.js
```
Acesse: `http://localhost/`

#### 🎓 Objetivos de Aprendizado
✅ Entender como criar um servidor HTTP básico com Node.js
✅ Usar o módulo nativo `http`
✅ Configurar porta e resposta simples
✅ Log de servidor iniciado

---

### 2️⃣ **Jogo_Canvas** — Servidor com Roteamento
Segundo exercício: servir arquivos HTML e JavaScript.

#### 📄 Arquivos
| Arquivo | Descrição |
|---|---|
| `main.js` | Servidor HTTP com roteamento básico |
| `index.html` | Página do jogo Canvas |
| `canvas.js` | Lógica do jogo (cliente) |

#### ⚙️ Como Funciona
- Usa os módulos `http` e `fs` do Node.js
- Cria um servidor na porta **5050**
- Implementa roteamento simples:
  - `GET /` → serve `index.html`
  - `GET /canvas.js` → serve `canvas.js`
  - Outras rotas → retorna **404 Not Found**
- Configura `Content-Type` apropriado para cada arquivo

#### 🚀 Como Executar
```bash
# No diretório Jogo_Canvas/
node main.js
```
Acesse: `http://localhost:5050/`

#### 🎮 Como Jogar
- `A` / `a`: mover indicador para esquerda
- `D` / `d`: mover indicador para direita
- `Espaço`: soltar bloco
- Objetivo: salvar o máximo de blocos possível!

#### 🎓 Objetivos de Aprendizado
✅ Implementar roteamento básico em um servidor HTTP
✅ Usar `fs` (File System) para servir arquivos
✅ Configurar `Content-Type` correto
✅ Tratar requisições 404
✅ Integrar Frontend (HTML/JavaScript) com Backend (Node.js)

---

## 📊 Comparação dos Exercícios

| Aspecto | hello-world-server | Jogo_Canvas |
|---|---|---|
| **Complexidade** | ⭐ Básica | ⭐⭐ Intermediária |
| **Porta** | 80 | 5050 |
| **Módulos** | `http` | `http`, `fs` |
| **Roteamento** | Nenhum | Básico |
| **Arquivo de saída** | Texto puro | HTML/JS |
| **Caso de uso** | Conceito inicial | Servidor real |

---

## 💡 Próximos Passos
Após dominar esses dois exercícios:
- 📚 Explore framework Express.js
- 🗄️ Integre banco de dados
- 🔐 Implemente autenticação
- 🚦 Aprenda sobre middlewares

---

## 🎓 Objetivo Geral
Compreender os fundamentos de desenvolvimento Backend:
- Como criar servidores HTTP
- Gerenciar requisições e respostas
- Servir conteúdo estático
- Implementar roteamento básico

---

✍️ *Documentação gerada com base no conteúdo das pastas*
