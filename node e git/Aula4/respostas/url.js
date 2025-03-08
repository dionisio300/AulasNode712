const url = require('url')
const endereco = 'https://www.meusite.com.br/catalogo?produto=cadeira&funcionario=Ana'
const enderecoObj = new url.URL(endereco)

console.log(enderecoObj)
console.log(enderecoObj.searchParams.get('produto'))
console.log(enderecoObj.searchParams.get('funcionario'))