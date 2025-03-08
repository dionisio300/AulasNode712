//nome
//os argumentos ficam em process.argv

console.log(process.argv)

let args = process.argv.slice(2)

console.log(args)

let nome = args[0].split('=')[1]

console.log(nome)

let idade = args[1].split('=')[1]
console.log(idade)

console.log(`O Usuário ${nome} tem ${idade} anos`)