import express from 'express'
//Importar a biblioteca das handlebars
import {engine} from 'express-handlebars'

const porta = 3000

const app = express()
//instanciando
app.engine("handlebars",engine())
app.set('view engine','handlebars')

//Chamando a handlebars pela rota
app.get('/',(req, res) => {
    let user = {
        nome:'Maria',
        sobreNome:' Da Silva',
        idade:27,
        email:'maria@mail.com',
        habilitacao:'a'
    }
    
    let listaAtividades = ['atividade1','atividade2','atividade3','atividade4','atividade5']


    let autenticacao = true
    let habilitado = false

    if (user.idade >= 18 && user.habilitacao != ''){
        habilitado = true
    }
    console.log(habilitado)
    
    res.render('home',{user,autenticacao,habilitado,listaAtividades})
})

app.get('/pg1',(req,res) => {
    res.render('pagina1')
})

app.get('/pg2',(req,res) => {
    res.render('pagina2')
})

app.listen(porta, ()=>{
    console.log(`o servidor está rodando na porta ${porta}`)
})

//Crie uma rota chamada '/listaUsuarios' com uma página que primeiramente verifica se o usuário está autenticado, caso ele esteja, imprima a lista de usuários com o nome, o idade e o telefone, utilize o #each para isso. Caso o usuário não esteja autenticado mostre o link da '/pg2' e uma mensagem mandado ele clicar no link para se cadastrar

app.get('/listaUsuarios',(req,res) => {
    let autenticado = true
    let usuarios = [
        {nome:'Maria',idade:26,telefone:'2323232323'},
        {nome:'João',idade:31,telefone:'4848484848'},
        {nome:'Thiago',idade:25,telefone:'2525252525'},
        {nome:'Leticia',idade:27,telefone:'2727272727'},
        {nome:'Gessica',idade:28,telefone:'2828282828'},
    ]
    res.render('listaUsuarios',{autenticado,usuarios})
})



