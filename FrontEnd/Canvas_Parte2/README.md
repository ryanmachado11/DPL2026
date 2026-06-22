# 🎬 Canvas — Parte 2

## 👁️ Visão Geral
Animação interativa com `<canvas>` em JavaScript. Inclui controle de velocidade e botão para pausar/retomar.

## 📁 Arquivos
| Arquivo | Descrição |
|---|---|
| `index.html` | Página com botão "Stop Animation" e `<canvas>` |
| `canvas.js` | Retângulo móvel com controle de velocidade e pausa |

## 🔧 Principais Pontos do `canvas.js`
**Variáveis principais:**
- `dx`, `dy` — posição do retângulo
- `speed` — velocidade configurável
- `x` — direção/velocidade atual
- `animateRunning` — controle de pausa/retomada

**Função `animate()` (por quadro)**
1. Limpa parte do canvas com `clearRect()`
2. Desenha retângulo na posição (`dx`, `dy`)
3. Atualiza `dy` pela velocidade `x`
4. Inverte direção ao atingir bordas

**Funções de controle:**
- `updateSpeed(value)` — ajusta velocidade mantendo direção
- `stopAnimation()` — alterna pausa/retomada

## 🎮 Como Testar
```bash
# 1. Abra no navegador
index.html

# 2. Clique em "Stop Animation" para pausar/retomar
```

💡 **Dica:** Você pode adicionar um `input type="range"` ligado a `updateSpeed()` para controlar velocidade dinamicamente!

## 🎓 Objetivo Didático
✅ Animação básica com `requestAnimationFrame`
✅ Controle de execução (pausa/retoma)
✅ Ajuste de velocidade via função JavaScript

---
✍️ *Documentação gerada com base no conteúdo da pasta*