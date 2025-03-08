import express from 'express'
import {engine} from 'express-handlebars'
import mysql from 'mysql'
//Inicialiação do app com express
const app = express()
const porta = 3000

//inicialização do handlebars
app.engine('handlebars', engine())
app.set('view engine','handlebars')

//decodificação da url para usar os dados do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Conexão com o banco de dados
const conn = mysql.createConnection({
    host:'localhost',
    user:'dev',
    password:'1234',
    database:'lojadb'
})


//Rotas
app.get('/',(req,res) => {
    
    let sql = `SELECT * from produtos`
    conn.query(sql,(erro,produtos) => {
        if(erro){
            console.log(erro)
            return
        }
        console.log(produtos)


        res.render('home',{produtos})
    })
    
})

app.get('/cadastrar',(req,res) => {

    res.render('cadastrar')
})

app.post('/cadastro',(req,res) => {
    let dadosRecebido = req.body

    let sql = `INSERT INTO produtos (nome, descricao, preco, estoque, categoria) VALUES ('${dadosRecebido.nomeProduto}', '${dadosRecebido.descricaoProduto}','${dadosRecebido.precoProduto}','${dadosRecebido.estoqueProduto}', '${dadosRecebido.categoriaProduto}')`

    conn.query(sql,(erro) =>{
        console.log(erro)
    })


    console.log(dadosRecebido)
    res.render('cadastrar')
})

let idAtualizacao
app.get('/atualizarProduto',(req,res) => {

    console.log(idAtualizacao)
    res.render('atualizarProduto')
})


app.post('/atualizar',(req,res) => {
    let id = req.body.id
    let carregarForm = false
    let sql = `SELECT * FROM produtos where id = ${id}`
    conn.query(sql,(erro,dados) => {
        if(erro){
            console.log(erro)
            return
        }
        carregarForm = true
        let produto = dados[0]
        console.log(dados[0])
        res.render('atualizarProduto',{produto, carregarForm})
    })
    
})

app.post('/fazerUpdate',(req,res) => {

    let produtoAtualizado = req.body
    console.log(produtoAtualizado)
    let sql = `update produtos set nome = '${produtoAtualizado.nomeProduto}', descricao = '${produtoAtualizado.descricaoProduto}', preco = '${produtoAtualizado.precoProduto}', estoque = '${produtoAtualizado.estoqueProduto}', categoria = '${produtoAtualizado.categoriaProduto}' where id = ${produtoAtualizado.id}`

    conn.query(sql,(erro) =>{
        if (erro){
            console.log(erro)
            return
        }
    })
    


    res.render('atualizarProduto')
})


app.get('/deletarProduto',(req,res) => {

    res.render('deletarProduto')
})

app.post('/deletar',(req,res) => {
    let id = req.body.id
    console.log(id)
    let sql = `delete from produtos where id = ${id}`
    conn.query(sql,(erro) => {
        if(erro){
            console.log(erro)
            return
        }
    })

    res.render('deletarProduto')
})




//conectar com o banco
conn.connect((erro) => {
    if(erro){
        console.log(erro)
        return
    }
    console.log('Conectado ao banco')
})

//inicialização do servidor
app.listen(porta,()=>{
    console.log('Servidor iniciado!')
})

