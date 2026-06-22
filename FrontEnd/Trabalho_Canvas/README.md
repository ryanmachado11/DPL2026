# 🎮 Trabalho Canvas — Jogo de Salvar Blocos

## 👁️ Visão Geral
Jogo interativo em `<canvas>` com JavaScript. Posicione o indicador e solte blocos para pousar na plataforma, evitando o bloco vermelho móvel!

## 📁 Arquivos
| Arquivo | Descrição |
|---|---|
| `index.html` | Página com `<canvas>` e instruções |
| `canvas.js` | Lógica completa do jogo |

## 🎮 Controles
| Tecla | Ação |
|---|---|
| `A` / `a` | Mover indicador para esquerda |
| `D` / `d` | Mover indicador para direita |
| `Espaço` | Soltar bloco |

## ⚙️ Principais Elementos do `canvas.js`
**Variáveis do jogo:**
- 🎯 `indicador` — posição de onde soltar o bloco
- 🟦 `bloco` — estado do bloco caindo (ativo, posição, velocidade, pousado)
- 🔴 `vermelho` — bloco inimigo (move horizontalmente, acelera ao pontuar)
- 📊 `contador` — pontuação atual
- 🏆 `recorde` — melhor pontuação
- 🌍 `gravidade` — aceleração aplicada

**Lógica por quadro (`animate()`):**
1. Processa entrada de teclado (A, D, Espaço)
2. Atualiza posição do bloco com gravidade
3. ✅ Detecta pouso no chão → pontua e acelera inimigo
4. ❌ Detecta colisão com bloco vermelho → Game Over
5. Desenha tudo na tela

## 🚀 Como Jogar
```bash
# Abra no navegador
index.html

# Use A/D para mover e Espaço para soltar
# Evite o bloco vermelho!
```

## 🎓 Objetivo Didático
✅ Desenho e animação no `<canvas>`
✅ Entrada de teclado em tempo real
✅ Física simples (gravidade, colisões)
✅ Gerenciamento de estado e pontuação
✅ Aumento de dificuldade dinâmica

## 💡 Dica
O bloco vermelho acelera após cada ponto, aumentando a dificuldade progressivamente!

---
✍️ *Documentação gerada com base no conteúdo da pasta*