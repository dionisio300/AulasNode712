import express from 'express'
import {engine} from 'express-handlebars'
import mysql from 'mysql'

const porta = 3000
const app = express()

app.engine('handlebars',engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/',(req,res) => {
    const sql = 'select * from funcionarios where id = 1'
    conn.query(sql, (erro,dados) => {
        console.log(dados[0].nome)
    })


    res.render('home')
})

const conn = mysql.createConnection({
    host:'localhost',
    user:'dev',
    password:'1234',
    database:'aridesa'
})

conn.connect((erro) => {
    if(erro){
        console.log(erro)
        return
    }

    console.log('Conectado ao Mysql')
    app.listen(porta, ()=>{
        console.log('servidor iniciado!')
    })
})




