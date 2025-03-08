const http = require('http')
const porta = 3000

const servidor = http.createServer((req, res) => {
    res.write('Olá HTTP')
})

servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})