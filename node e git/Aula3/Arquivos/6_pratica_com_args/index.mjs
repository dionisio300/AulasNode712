import minimist from 'minimist';
import * as operacoes from './operacoes.mjs'; // Caminho correto para o arquivo

const args = minimist(process.argv.slice(2));
console.log(args);

const a = parseInt(args['a'])
const b = parseInt(args['b'])



// Agora, as funções são acessadas como propriedades do objeto 'operacoes'
operacoes.soma(a, b);
