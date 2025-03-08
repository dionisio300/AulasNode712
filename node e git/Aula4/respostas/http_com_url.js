const http = require('http')
const url = require('url')

const porta = 3000

const servidor = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html; charset=utf-8')
    var endereco = url.parse(req.url, true)
    console.log(endereco.searchParams.get('name'))
    res.end('Olá')
})
servidor.listen(porta, () => {
  
    console.log(`Servidor rodando na porta: ${porta}`);
  });