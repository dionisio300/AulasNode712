const express = require('express');
const path = require('path');

const app = express();
const porta = 3000;

// Caminho para a pasta templates
const basePath = path.join(__dirname, 'templates');

// Middleware para verificar o usuário
const checarUsuario = (req, res, next) => {
    console.log('Middleware checarUsuario foi chamado'); // Log para depuração
    req.autenticado = true; // Simula que o usuário está autenticado

    if (req.autenticado) {
        console.log('Usuário está logado');
    } else {
        console.log('Usuário não está logado');
    }

    next(); // Passa para o próximo middleware ou rota
};

// Aplica o middleware em todas as rotas
app.use(checarUsuario);

// Rota principal
app.get('/', (req, res) => {
    console.log('Rota "/" foi acessada'); // Log para depuração
    res.sendFile(`${basePath}/index.html`);
    console.log('chegou até aqui')
});

// Inicializa o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
