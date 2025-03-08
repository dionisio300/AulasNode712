import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())
app.set('view engine','handlebars')

app.use(express.static('public'))


const porta = 3000

app.get('/',(req, res) => {
    const usuario = {
        'nome':'Fulano',
        'idade': 38,
        'email':'fulano@mail.com',
        'autenticado':true
    }

    const listaTarefas = ['t1','t2','t3','t4']


    res.render('home',{usuario,listaTarefas})
})

app.listen(porta,()=>{
    console.log('Servidor iniciado')
})



/*
1 - Crie um projeto com Express, handlebars e nodemon
2 - Crie uma rota para uma home, que exiba alguns produtos de um array de objetos

const produtos = [
{'nome':'Monitor', 'preco':400, 'descricao':'Bom monitor'},
{...}
]

3 - Utilize o recurso de layout do handlebars para a base do html
4 - Adicione CSS e modifique alguns estilos a sua escolha
5 - Os produtos precisam ter um link, que exiba as páginas individuais de cada um

*/







