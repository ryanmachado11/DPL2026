const http = require('http');
const fs = require('fs');
const port = 8080;

let numero1a100 = Math.floor(Math.random() * 100) + 1;

const servidor = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://localhost:${port}`);
    const path = urlParams.pathname;
    
    if (path === '/') {
        res.writeHead(302, {'Location': '/guess'});
        res.end();

    } else if (path === '/guess') {
        const numero = urlParams.searchParams.get('Enviar');

        if (numero === null) {
            fs.readFile('index.html', (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
                    res.end('Erro ao carregar o arquivo');
                    return;
                }
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            });
            return;
        }

        let resultado;
        if (numero < numero1a100) {
            resultado = 'o número é maior.';
        } else if (numero > numero1a100) {
            resultado = 'o número é menor.';
        } else {
            resultado = 'você acertou o número!';
        }

        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(resultado);

    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada');
    }
});

servidor.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Número sorteado: ${numero1a100}`);
});