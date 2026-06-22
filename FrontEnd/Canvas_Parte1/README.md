# 🎬 Canvas — Parte 1

## 👁️ Visão Geral
Exemplo básico de animação com `<canvas>` e JavaScript. Demonstra criação de formas, atualização de posições e animação por quadro.

## 📁 Arquivos Principais
| Arquivo | Descrição |
|---|---|
| `index.html` | Documento HTML com elemento `<canvas>` |
| `canvas.js` | Lógica de geração e animação de formas |

## ⚙️ O Que o `canvas.js` Faz
🔹 **Inicialização**
- Cria arrays: `rectangles`, `lines`, `circles`
- Cada forma tem posição, velocidade e cor aleatórias

🔹 **Função `animate()` (por quadro)**
- Limpa o canvas
- Atualiza posição de cada forma
- Verifica colisões com bordas (inverte direção)
- Desenha:
  - Retângulos com `fillRect()`
  - Linhas com `moveTo()/lineTo()`
  - Círculos com `arc()`

## 🚀 Como Executar
```bash
# Abra em navegador moderno (Chrome, Firefox, Edge)
index.html
```
A animação inicia automaticamente!

## 🎓 Objetivo Didático
✅ Usar contexto 2D do `<canvas>` (`getContext('2d')`)
✅ Praticar animações frame-a-frame com `requestAnimationFrame`
✅ Manipular coordenadas e detecção simples de colisões
✅ Desenhar formas primitivas

---
✍️ *Documentação gerada com base no conteúdo da pasta*