const http = require('http');
const fs = require('fs');
const port = 8080;

let numero1a100 = Math.floor(Math.random() * 100) + 1;

const servidor = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://localhost:${port}`);
    const path = urlParams.pathname;
    
    if (path === '/'){
        res.writeHead(302, {'Location': '/guess'});
        res.end();
    }
    else if (path === '/guess') {
        const numero = urlParams.searchParams.get('Enviar');
        const countParam = urlParams.searchParams.get('count');
        const attempts = Number(countParam) || 0;

        let resultado = null;
        if (numero !== null) {
            if (Number(numero) < numero1a100) {
                resultado = 'maior';
            } else if (Number(numero) > numero1a100) {
                resultado = 'menor';
            } else {
                resultado = 'igual';
            }
        }

        // redirect to win/lose when conditions met
        if (resultado !== null) {
            if (resultado === 'igual' && attempts <= 5) {
                res.writeHead(302, {'Location': '/win.html'});
                res.end();
                return;
            }

            if (resultado !== 'igual' && attempts >= 5) {
                res.writeHead(302, {'Location': '/lose.html'});
                res.end();
                return;
            }
        }

        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end('Erro ao carregar o arquivo');
                return;
            }

            // if we have a resultado, inject a message into the placeholder div
            let html = data;
            if (resultado !== null) {
                let mensagem = '';
                if (resultado === 'maior') mensagem = 'É MAIOR';
                else if (resultado === 'menor') mensagem = 'É MENOR';
                else if (resultado === 'igual') mensagem = 'ACERTOU!';

                html = html.replace('<div id="resultado"></div>', `<h1 id="resultado">${mensagem}</h1>`);
            }

            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(html);
        });
    } else if (path === '/win.html' || path === '/lose.html') {
        const file = path.slice(1);
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end('Erro ao carregar o arquivo');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        });

    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada');
    }
});

servidor.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Número sorteado: ${numero1a100}`);
});