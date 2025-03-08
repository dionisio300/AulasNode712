import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Fazendo uma pergunta ao usuário
rl.question('Qual é o seu nome? ', (nome) => {
    rl.question('Qual a sua idade? ',(idade)=>{
        console.log(`Olá ${nome}, vejo que você tem ${idade} anos`)

        rl.close();
    })
});