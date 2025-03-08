import express from 'express'
//Módulo para ajudar renderizar templates
import path from 'path'

//Inicializar o nosso aplicativo web
const app = express()

//Configurando a porta do servidor
const porta = 3000
const basePath = path.join(process.cwd(),'templates')

//Primeira rota
app.get('/',(req, resp)=>{
    //console.log(basePath)

    
    resp.sendFile(`${basePath}/index.html`)
})


app.listen(porta, ()=>{
    console.log('APP rodando na porta ',porta)
})






