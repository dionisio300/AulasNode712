const http = require('http')
const porta = 3000

const servidor = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end('<h1>Olá, este é o meu segundo servidor</h1>')
})

servidor.listen(porta, () => {
    console.log('Servidor rodando')
})