function olaMundo(){
    console.log('Olá mundo')
}
function olaNode(){
    console.log('Olá node')
}
// Crie uma função no seu módulo que receba o nome e a idade do usuário e mostre a mensagem: Olá {fulano}, sua idade é {idade}.

function msg(nome,idade){
    console.log(`Olá ${nome}, sua idade é ${idade}`)
}

export default{
    olaMundo,
    olaNode,
    msg
}