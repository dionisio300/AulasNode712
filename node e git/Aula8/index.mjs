//Importando o Express
import express from 'express'
import path from 'path'

//Comando do path para acessar a pasta atual
const pastaAtual = process.cwd()
const pastaTemplates = path.join(pastaAtual,'templates')

console.log(pastaTemplates)
//inicialização do aplicativo express
const app = express()
//criação da porta
const porta = 3000

//Comandos para transformar os dados vindos do formulário em um objeto javascript
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Middleware


//Crie uma rota do post para pegar o nome de usuário e a senha que tiver sido digitada.
//Depois compare com o nome de usuário cadastrado e utilize a função autenticar para verificar se o nome a senha correspondem ao nome e senha cadastrados.
let usuario = 'maria'
let senha = '1234'
let logado = false

const autenticar = (req, resp, next) => {
    
    if(logado == true){
        console.log('O usuário está logado')
        next()
    }else{
        console.log('O usuário não está logado')
        resp.sendFile(`${pastaTemplates}/usuarioNaoCadastrado.html`)
    }
}



//Rota raiz
app.get('/',(req, res) => {
    res.sendFile(`${pastaTemplates}/index.html`)
})

app.post('/login',(req, res) => {
    let nomeUsuario = req.body.nome
    let senhaUsuario = req.body.senha

    if(nomeUsuario == usuario && senhaUsuario == senha){
        console.log('Usuario Cadastrado')
        logado = true
        res.sendFile(`${pastaTemplates}/paginaProdutos.html`)
    }else{
        console.log('Usuario não cadastrado')
        res.sendFile(`${pastaTemplates}/usuarioNaoCadastrado.html`)
    }

    
    console.log(`O suário ${nomeUsuario} tentou acessar com a senha ${senhaUsuario}`)
})

app.use(autenticar)

//Rota para página de produtos
app.get('/produtos',(req,res) => {

    res.sendFile(`${pastaTemplates}/paginaProdutos.html`)
})

//Faça uma rota para uma página de cadastro de usuário. Crie uma página na pasta templates com um formulário para o usuário digitar seu nome email e idade.
//o formulário deve ter um input para cada informação (nome, email e idade), além de um input type=submit para enviar o formulário

app.get('/cadastro',(req, res) => {

    res.sendFile(`${pastaTemplates}/cadastro.html`)
})





app.post('/addUsuario',(req,res) => {
    let nome = req.body.nome
    let idade = req.body.idade
    let email = req.body.email

    let user = {
        'nome':nome,
        'idade':idade,
        'email':email
    }
    console.log(user)
    res.sendFile(`${pastaTemplates}/cadastro.html`)
})

//inicialização do servidor
app.listen(porta,()=>{
    console.log('Servidor iniciado')
})