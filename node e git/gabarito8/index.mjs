import express from 'express'
import path from 'path'
import {URL} from 'url'

const app = express()
const porta = 3000

//Pasta atual
const pastaAtual = process.cwd()

//Pasta Templates
const pastaTemplates = path.join(pastaAtual,'templates')
console.log(pastaTemplates)




//Rota para a página de usuarios
app.get('/usuarios',(req, resp) => {
    // resp.send('consegui iniciar o servidor')
    resp.sendFile(`${pastaTemplates}/usuarios.html`)
})

//rota para cadastro de usuario
app.get('/cadastrarUsuario',(req, resp) => {
    // resp.send('consegui iniciar o servidor')
    resp.sendFile(`${pastaTemplates}/cadastrarUsuario.html`)
})

//rota para salvar os dados do formulário
//precisa disso para tratar o post
app.use(express.urlencoded({ extended: true })); // Para dados de formulários
app.use(express.json()); // Para dados JSON (se necessário)

app.post('/usuarios/salvar',(req, resp) => {
    let nome = req.body.nome
    let idade = req.body.idade
    console.log(`O nome é ${nome} e a idade é ${idade}`)
    resp.send(`cadastrado`)
})


//Rota para a página inicial
app.get('/',(req, resp) => {
    // resp.send('consegui iniciar o servidor')
    resp.sendFile(`${pastaTemplates}/index.html`)
})






app.listen(porta,()=>{
    console.log('Servidor iniciado')
})