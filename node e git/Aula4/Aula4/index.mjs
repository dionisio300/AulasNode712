import http from 'http'
import { URL } from 'url'
import fs from 'fs'

const porta = 3000

// const endereco = 'http://www.meusite.com.br/catalogo/moveis?produtos=cadeira&cliente=Ana'
// const minhaURL = new URL(endereco)


// console.log(minhaURL.host)
// console.log(minhaURL.pathname)
// console.log(minhaURL.search)
// console.log(minhaURL.searchParams)
// console.log(minhaURL.searchParams.get('produtos'))
// console.log(minhaURL.searchParams.get('cliente'))


//Criação de um arquivo
if(fs.existsSync('arquivoNomes.txt')){

}else{
    fs.writeFile('arquivoNomes.txt','',(erro) =>{
        console.log(erro)
    })
}


// fs.appendFile('arquivoNomes.txt','dados',(erro)=>{
//     console.log(erro)
// })



const servidor = http.createServer((req, resp) => {
resp.statusCode = 200
resp.setHeader('Content-Type','text/html; charset=utf-8')

const urlInformada = new URL(req.url,`http://http://127.0.0.1:${porta}`)
let nome = urlInformada.searchParams.get('nome')


resp.end('<form method="GET"> <label for=nome>Digite seu nome</label> <input type="text" name=nome id=nome> <input type="submit"> </form>')

if(nome == null){
    nome = ''
}else{
    nome = `\n ${nome}`
}

fs.appendFile('arquivoNomes.txt',nome,(erro)=>{
    console.log(erro)
})

// if(!nome){
//     resp.end('<form method="GET"> <label for=nome>Digite seu nome</label> <input type="text" name=nome id=nome> <input type="submit"> </form>')
// }else{
//     resp.end(`<h1>Olá ${nome}</h1>`)
// }})
})


servidor.listen(porta,()=>{
    console.log(`O servidor foi iniciado na porta ${porta}`)
})