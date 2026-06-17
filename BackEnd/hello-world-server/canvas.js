var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-150;
var c = canvas.getContext('2d');

var teclas = {};

var indicador = [600, 25, 60, 60]; // x, y, largura, altura

var bloco = [false, 0, 0, 0, 0, 0, false]; // ativo, x, y, largura, altura, velocidadeY, pousado

var vermelho = [0, 270, 50, 50, 5]; // x, y, largura, altura, velocidadeX

var contador = 0;

var gravidade = 0.9;

var recorde = 0;

window.addEventListener('keydown', function(evento) {
  teclas[event.key] = true;
});

window.addEventListener('keyup', function(evento) {
  teclas[event.key] = false;
});

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  if (teclas['A'] || teclas['a']) indicador[0] -= 15;
  if (teclas['D'] || teclas['d']) indicador[0] += 15;
  if (indicador[0] < 0) indicador[0] = 0;
  if (indicador[0] + indicador[2] > canvas.width) indicador[0] = canvas.width - indicador[2];

  if (teclas[' ']) {
  if (!bloco[0]) {
    bloco[0] = true;
    bloco[1] = indicador[0];
    bloco[2] = indicador[1];
    bloco[3] = indicador[2];
    bloco[4] = indicador[3];
    bloco[5] = 0;
    bloco[6] = false;
  }
 }

  if (bloco[0] && !bloco[6]) {
    bloco[5] += gravidade;
    bloco[2] += bloco[5];

    var blocoEsquerda = bloco[1];
    var blocoDireita = bloco[1] + bloco[3];
    var blocoCima = bloco[2];
    var blocoBaixo = bloco[2] + bloco[4];

    var vermelhoEsquerda = vermelho[0];
    var vermelhoDireita = vermelho[0] + vermelho[2];
    var vermelhoCima = vermelho[1];
    var vermelhoBaixo = vermelho[1] + vermelho[3];

    if (
      blocoDireita >= vermelhoEsquerda &&
      blocoEsquerda <= vermelhoDireita &&
      blocoBaixo >= vermelhoCima &&
      blocoCima <= vermelhoBaixo
    ) {
      alert("Blocos salvos: " + contador);
      if (contador > recorde) {
        recorde = contador;
      }
      contador = 0;
      teclas = {};
      indicador = [600, 25, 60, 60];
      bloco = [false, 0, 0, 0, 0, 0, false];
      vermelho = [0, 270, 50, 50, 5]; 
      return;
    }

    if (bloco[2] >= 400) {
      bloco[2] = 400;
      bloco[5] = 0;
      bloco[6] = true;
      bloco[0] = false;
      contador += 1;
      if (vermelho[4] > 0) {
        sinal = 1;
      } else {
      sinal = -1;
      }
      vermelho[4] = sinal * (Math.abs(vermelho[4]) + 15);
    }
  }

  vermelho[0] += vermelho[4];
  if (vermelho[0] <= 0) {
    vermelho[0] = 0;
    vermelho[4] = Math.abs(vermelho[4]);
  } else if (vermelho[0] + vermelho[2] >= canvas.width) {
    vermelho[0] = canvas.width - vermelho[2];
    vermelho[4] = -Math.abs(vermelho[4]);
  }

  c.fillStyle = 'rgb(36, 37, 85)';
  c.fillRect(indicador[0], indicador[1], indicador[2], indicador[3]);
  c.strokeStyle = 'black';
  c.strokeRect(indicador[0], indicador[1], indicador[2], indicador[3]);

  if (bloco[0]) {
    c.fillStyle = 'rgb(91, 121, 255)';
    c.fillRect(bloco[1], bloco[2], bloco[3], bloco[4]);
  }

  c.fillStyle = 'rgb(121, 0, 0)';
  c.fillRect(vermelho[0], vermelho[1], vermelho[2], vermelho[3]);

  c.fillStyle = 'rgb(70, 70, 70)';
  c.fillRect(0, canvas.height - 50, canvas.width, 60);

  c.fillStyle = 'black';
  c.font = '20px Arial';
  c.fillText('Blocos: ' + contador, 20, 50);
  c.fillText('Recorde: ' + recorde, 20, 80);
}

animate();