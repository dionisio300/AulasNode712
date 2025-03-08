import msgs from './meuModulos/meu_modulo.mjs'
import fs from 'fs'
import minimist from 'minimist'

msgs.olaMundo()
msgs.olaNode()
msgs.msg('João',20)

fs.readFile('arquivo.txt','utf8',(erro,dados) => {
    if(erro){
        console.log(erro)
        return
    }
    console.log(dados)
})

console.log(process.argv)

let dados = process.argv.slice(2)
console.log(dados[0],dados[1])

msgs.msg(dados[0],dados[1])

let argumentos = minimist(process.argv.slice(2))

console.log(argumentos)

let nome = argumentos['nome']
let idade = argumentos['idade']

console.log(nome,idade)





