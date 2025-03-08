/*
Questão 3:
Crie um programa que simule um caixa de loja. O programa deve:

Permitir cadastrar produtos e preços.
Criar um carrinho onde o usuário pode adicionar produtos.
Mostrar o total da compra e se o total foi entre 100 e 200 reais aplicar  5% de desconto, entre 200 e 300 10% de desconto e acima de 300 15% de desconto).
Exibir um resumo da compra.
Os produtos disponíveis devem ser armazenados em um array:
 */

import readline from 'readline'


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function cadastrarProduto(produtos){
    let nome = ''
    let preco = 0
    rl.question('Digite o nome do produto\n',(resposta) =>{
        nome = resposta
        rl.question('Digite o preço do produto\n',(resposta) =>{

            preco = parseFloat(resposta)

            let novoProduto = {nome:nome, preco:preco}
            console.log(novoProduto)
            produtos.push(novoProduto)
            console.log(produtos)
        })
    })
}

function criarCarrinho(produtos,carrinho){
    for(let i=0;i<produtos.length;i++){
        console.log(`${i} - nome: ${produtos[i].nome}, preço: ${produtos[i].preco}`)
    }
    rl.question('Selecione o produto a ser adicionado\n',(resp) =>{
        resp = parseInt(resp)
        carrinho.push(produtos[resp])
        console.log(carrinho)
    })
}

function mostrarTotal(carrinho){
    let total = 0
    for(let i = 0; i<carrinho.length;i++){
        total += carrinho[i].preco
    }
    console.log(`O total do carrinho é: ${total}`)
}

function mostrarCompras(carrinho){
    console.log('Itens do carrinho:')
    for(let i = 0; i<carrinho.length;i++){
        console.log(`nome: ${carrinho[i].nome} preço: ${carrinho[i].preco}`)
    }   
    mostrarTotal(carrinho)
}


let produtos = [
    {nome:'Notebook', preco:2500},
    {nome:'Monitor', preco:600},
    {nome:'Memória', preco:200},
    {nome:'Placa de vídeo',preco:650}
]

let carrinho = [
    {nome:'Memória', preco:200},
    {nome:'Monitor', preco:600}
]


rl.question('1 - Cadastrar produto\n2 - Criar Carrinho\n3 - Mostrar total\n4 - Exibir Resumo da compra\n',(resposta)=>{
    if (resposta == '1'){
        cadastrarProduto(produtos)
    }
    else if (resposta == '2'){
        criarCarrinho(produtos,carrinho)
    }
    else if (resposta == '3'){
        mostrarTotal(carrinho)
    }
    else if (resposta == '4'){
        mostrarCompras(carrinho)
    }
})

console.log('nova alteração')









