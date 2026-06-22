const http = require('http');
const port = 8080;

const servidor = http.createServer((req, res) => {
    const urlParams = new URL(req.url, `http://localhost:${port}`);
    const path = urlParams.pathname;
    if (path === '/requisicao') {
        const nome = urlParams.searchParams.get('nome') || 'visitante';
        const idade = urlParams.searchParams.get('idade') || 'desconhecida';
        const maiorIdade = parseInt(idade) >= 18 ? 'maior' : parseInt(idade) < 18 ? 'menor' : 'valor desconhecido';
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`Olá, ${nome}! Você é ${maiorIdade} de idade.`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Página não encontrada');
    }

});

servidor.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});