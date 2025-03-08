import express from 'express'
import {engine} from 'express-handlebars'
import mysql from 'mysql'

const app = express()
const porta = 3000
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
// Middleware para lidar com dados de formulários no formato URL encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const conn = mysql.createConnection({
    host:'localhost',
    user:'dev',
    password:'1234',
    database:'biblioteca'
})

app.get('/',(req,res) => {

    // let sql = 'select nome,cargo from funcionarios where salario > 10000'
    // conn.query(sql,(erro,dados) =>{
    //     if(erro){
    //         console.log(erro)
    //         return
    //     }

    //     console.log(dados)
    //     res.render('home',{dados})
    // })
    res.render('home')
})

app.get('/busca', (req,res) => {
    
    res.render('busca')
})

app.post('/consultarLivro', (req,res)=>{
    let nome = req.body.nomeLivro
    console.log(nome)
    let dadosLivro
    let encontrou = false
    let sql = `select * from livros where titulo = '${nome}'`
    conn.query(sql,(erro,dados) =>{
        if(erro){
            console.log(erro)
            return
        }
        console.log(dados)
        dadosLivro = dados[0]
        encontrou = true
        console.log(encontrou)
        console.log(dadosLivro.titulo)
        res.render('busca',{ dadosLivro, encontrou })
    })
    
})


app.get('/cadastro',(req,res) => {
    res.render('cadastro')
})

app.post('/cadastrarLivro',(req,res) => {

    let livroNovo  = req.body
    console.log(livroNovo)

    let sql = `insert into livros (titulo, autor, ano_publicacao,genero,disponivel) values (${livroNovo.titulo},${livroNovo.autor},${livroNovo.ano_publicacao},${livroNovo.genero},${true})`

    conn.query(sql,(erro,dados) => {
        if(erro){
            console.log(erro)
            return
        }
    })
    res.render('cadastro')
})

app.get('/acervo',(req,res) => {
    let sql = `select * from livros`
    let livros
    conn.query(sql, (erro,dados) => {
        if(erro){
            console.log(erro)
            return
        }
        livros = dados
        res.render('acervo',{livros})
    })
})




conn.connect((erro) => {
    if(erro){
        console.log(erro)
        return
    }

    console.log('Conectado com sucesso')
})






app.listen(porta, ()=>{
    console.log('Servidor iniciardo')
})



