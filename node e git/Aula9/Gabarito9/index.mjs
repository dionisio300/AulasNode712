import express from 'express'
import {engine} from 'express-handlebars'

const porta = 3000

const app = express()

app.engine('handlebars',engine())
app.set('view engine','handlebars')

app.get('/',(req, res) => {
    //res.send('Deu certo')
    let usuario = {
        nome:'Dionizio',
        email:'dionisioassis80@gmail.com',
        sobrenome:'Porfirio',
        telefone:'85985858585'
    }

    res.render('home',{usuario})
})



app.get('/dashboard',(req, res) => {

    res.render('dashboard')
})






app.listen(porta,()=>{
    console.log('Servidor iniciado')
})