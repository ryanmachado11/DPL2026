# 🌐 Desenvolvimento Web — 2026

## 📁 Sobre o Repositório

Este repositório reúne todos os projetos e exercícios práticos desenvolvidos durante o curso de **Desenvolvimento Web (DPL)** em 2026. O conteúdo é dividido em duas grandes áreas: **Frontend** (interface do usuário) e **Backend** (lógica do servidor), com foco em ensinar conceitos fundamentais através de projetos hands-on.

---

## 📊 Estrutura do Repositório

```
DPL2026/
├── FrontEnd/                    # Exercícios de interface web
│   ├── Introducao_HTML/         # Conceitos básicos de HTML
│   │   ├── PrimeiroSite/        # Primeiro projeto HTML
│   │   └── Clone/               # Exercício de clonagem
│   ├── Canvas_Parte1/           # Animações com Canvas
│   ├── Canvas_Parte2/           # Canvas com controles
│   ├── Trabalho_Canvas/         # Jogo interativo em Canvas
│   ├── PrimeiroSite/            # Site inicial
│   └── WebSite/                 # Site com buscador
│
└── BackEnd/                     # Exercícios de servidor web
    ├── Introducao_BackEnd/      # Conceitos básicos de Node.js
    │   ├── hello-world-server/  # Primeiro servidor HTTP
    │   └── Jogo_Canvas/         # Servidor servindo jogo
    └── Endpoints/               # APIs e roteamento
        ├── Autenticacao/        # Status HTTP e autenticação
        ├── Cardapio/            # Roteamento simples
        ├── Exemplo/             # Exemplos de status codes
        └── Mini_Blog/           # Blog multi-página
```

---

## 🎓 Conteúdo por Área

### 🖥️ Frontend — Interface do Usuário

Exercícios focados em criar interfaces web interativas usando **HTML, CSS e JavaScript**.

| Pasta | Tipo | Descrição | Complexidade |
|---|---|---|---|
| **Introducao_HTML** | Conceito | HTML básico e clonagem de interfaces | ⭐ |
| **Canvas_Parte1** | Prático | Animações com formas geométricas | ⭐⭐ |
| **Canvas_Parte2** | Prático | Controle de velocidade e pausa | ⭐⭐ |
| **Trabalho_Canvas** | Projeto | Jogo interativo de salvar blocos | ⭐⭐⭐ |
| **PrimeiroSite** | Projeto | Site buscador com logo colorida | ⭐ |

**Conceitos abordados:**
- ✅ Estrutura HTML semântica
- ✅ Estilo com CSS básico
- ✅ Canvas 2D e animações
- ✅ JavaScript interativo
- ✅ Event listeners e controle de estado
- ✅ Detecção de colisões simples

---

### 🔧 Backend — Servidor e APIs

Exercícios focados em criar servidores web com **Node.js** e gerenciar requisições HTTP.

#### Introducao_BackEnd
Conceitos básicos de servidores HTTP.

| Pasta | Porta | Descrição | Complexidade |
|---|---|---|---|
| **hello-world-server** | 80 | Primeiro servidor HTTP | ⭐ |
| **Jogo_Canvas** | 5050 | Servidor servindo HTML + JS | ⭐⭐ |

#### Endpoints
APIs mais avançadas com roteamento e status codes.

| Pasta | Porta | Descrição | Complexidade |
|---|---|---|---|
| **Autenticacao** | 8080 | Status HTTP (401, 403) | ⭐⭐ |
| **Cardapio** | 8080 | Roteamento simples | ⭐⭐ |
| **Exemplo** | 5050 | Exemplos de status codes | ⭐⭐ |
| **Mini_Blog** | 3000 | Blog com múltiplas páginas | ⭐⭐⭐ |

**Conceitos abordados:**
- ✅ Módulo HTTP nativo do Node.js
- ✅ Criação de servidores
- ✅ Roteamento de URLs
- ✅ Status HTTP codes (1xx, 2xx, 3xx, 4xx, 5xx)
- ✅ Leitura de arquivos com fs
- ✅ Headers e Content-Type
- ✅ Autenticação e autorização básica

---

## 🛠️ Tecnologias Utilizadas

### Frontend
| Tecnologia | Descrição |
|---|---|
| **HTML5** | Estrutura semântica |
| **CSS3** | Estilização e layout |
| **JavaScript (Vanilla)** | Interatividade e lógica |
| **Canvas 2D** | Desenho e animações |

### Backend
| Tecnologia | Descrição |
|---|---|
| **Node.js** | Runtime JavaScript para servidor |
| **HTTP (nativo)** | Módulo padrão para servidor web |
| **fs (nativo)** | Sistema de arquivos |

---

## 🎯 Progressão de Aprendizado

### Nível 1 — Conceitos Básicos
1. Estrutura HTML em `FrontEnd/Introducao_HTML/PrimeiroSite`
2. Exercício de clonagem em `FrontEnd/Introducao_HTML/Clone`
3. Servidor básico em `BackEnd/Introducao_BackEnd/hello-world-server`

### Nível 2 — Interatividade e Roteamento
4. Canvas básico em `FrontEnd/Canvas_Parte1`
5. Canvas com controles em `FrontEnd/Canvas_Parte2`
6. Servidor com roteamento em `BackEnd/Introducao_BackEnd/Jogo_Canvas`
7. Endpoints simples em `BackEnd/Endpoints/Cardapio`

### Nível 3 — Projetos Complexos
8. Jogo interativo em `FrontEnd/Trabalho_Canvas`
9. Autenticação em `BackEnd/Endpoints/Autenticacao`
10. Blog completo em `BackEnd/Endpoints/Mini_Blog`

---

## 📖 Como Usar Este Repositório

### Para Exercícios Frontend
```bash
# 1. Navegue até a pasta desejada
cd FrontEnd/Canvas_Parte1

# 2. Abra index.html em um navegador
# Você pode usar:
#   - Double-click no arquivo
#   - Live Server do VS Code
#   - http-server local
```

### Para Exercícios Backend
```bash
# 1. Instale Node.js (se não tiver)
# https://nodejs.org/

# 2. Navegue até a pasta desejada
cd BackEnd/Endpoints/Mini_Blog

# 3. Execute o servidor
node index.js

# 4. Acesse no navegador
# http://localhost:3000
```

---

## 📋 Cada Pasta Contém

Cada pasta de exercício/projeto possui:
- **Código-fonte** (`.js`, `.html`, `.css`)
- **README.md** — Explicação detalhada do projeto
- **Instruções** — Como executar e testar

**Recomendação:** Leia o README de cada pasta antes de executar!

---

## 💡 Dicas e Boas Práticas

✅ **Faça um exercício por vez** — Entenda completamente antes de passar ao próximo  
✅ **Experimente modificar o código** — Altere cores, mensagens, lógica  
✅ **Teste em diferentes navegadores** — Chrome, Firefox, Edge  
✅ **Use DevTools** — F12 para inspecionar e debugar  
✅ **Leia os erros** — Console do navegador ou terminal Node.js  
✅ **Documente seu aprendizado** — Faça anotações sobre o que aprendeu  

---

## 🚀 Próximos Passos

Após completar os exercícios deste repositório:

1. **Express.js** — Framework web mais poderoso
2. **Banco de Dados** — SQL, MongoDB, etc.
3. **APIs RESTful** — Criar APIs profissionais
4. **Autenticação Real** — JWT, Sessions, OAuth
5. **Frontend Frameworks** — React, Vue.js
6. **Testes** — Jest, Mocha para qualidade
7. **Deployment** — Heroku, Vercel, AWS

---

## 📌 Observações Importantes

- 🔄 Os projetos estão em **constante desenvolvimento**
- 📁 Cada pasta corresponde a um exercício ou projeto **específico e independente**
- 🎓 Este repositório é para fins **educacionais**
- 💾 Faça **commits frequentes** com mensagens claras
- 🔗 Cada pasta tem seu próprio `README.md` com mais detalhes

---

## 📞 Suporte

Caso tenha dúvidas:
1. Leia o **README** da pasta específica
2. Consulte os **comentários no código**
3. Experimente **modificar e testar**

---

## 📝 Estrutura de Commits

Quando trabalhar neste repositório, use commits descritivos:

```bash
# Exemplo de bons commits
git commit -m "Feat: adicionar slider de velocidade em Canvas_Parte2"
git commit -m "Docs: melhorar README do FrontEnd"
git commit -m "Fix: corrigir detecção de colisão em Trabalho_Canvas"
```

---

## 🏆 Objetivos Gerais do Curso

Ao completar todos os exercícios, você será capaz de:

✅ Criar sites interativos com HTML, CSS e JavaScript  
✅ Entender como navegadores funcionam  
✅ Criar servidores web com Node.js  
✅ Implementar roteamento de URLs  
✅ Gerenciar status HTTP  
✅ Servir conteúdo estático  
✅ Entender autenticação básica  
✅ Debugar código frontend e backend  
✅ Trabalhar com arquivos (fs)  
✅ Estruturar projetos profissionalmente  

---

## 📄 Licença

Repositório educacional — 2026  
Desenvolvido como parte do curso de **Desenvolvimento de Sistemas (DPL)**.

---

✍️ *Para mais detalhes, consulte os READMEs específicos em cada pasta!*
