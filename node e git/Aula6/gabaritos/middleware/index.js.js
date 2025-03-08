const express = require('express');
const path = require('path');

const app = express();
const porta = 3000;

// Caminho para a pasta templates
const basePath = path.join(__dirname, 'templates');

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

// Inicializa o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
