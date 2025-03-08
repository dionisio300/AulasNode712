import minimist from 'minimist'


const args = minimist(process.argv.slice(2));
console.log(args);

let nome = args['nome']
let profissao = args['profissao']

console.log(nome)
console.log(profissao)