const express = require('express');
const app = express();
app.use(express.json());

app.get('/home', (req, res) => res.send('<h1> Home <h1>'));
app.get('/', (req, res) => res.send(''));

app.post('/login', (req, res) => res.json({ msg: 'Login recebido', dados: req.body }));

app.listen(3000, () => console.log('Rodando na porta 3000'));
