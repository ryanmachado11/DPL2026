const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    if (req.url === '/seg') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Segunda-feira: Hamburguer, Batata Frita e Refrigerante');
    }

    else if (req.url === '/ter') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Terca-feira:Pizza, Salada e Suco');
    }

    else if (req.url === '/qua') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Quarta-feira: Massa, Vinho e Sorvete');
    }

    else if (req.url === '/qui') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Quinta-feira: Frango Assado, Arroz e Cerveja');
    }

    else if (req.url === '/sex') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Sexta-feira: Peixe, Legumes e Vinho');
    }
    else  {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Dia nao encontrado.');
        }
}); 

const porta = 8080;

servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});