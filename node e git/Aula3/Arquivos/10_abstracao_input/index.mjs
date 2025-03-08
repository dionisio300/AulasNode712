import inquirer from 'inquirer';

// Pergunta simples usando inquirer
inquirer.prompt([
    {
        type: 'input', // Tipo de pergunta (input, confirm, list, etc.)
        name: 'p1',  // Nome da resposta
        message: 'Qual a primeira nota?',  // Mensagem exibida para o usuário
    },
    {
        type: 'input', // Tipo de pergunta (input, confirm, list, etc.)
        name: 'p2',  // Nome da resposta
        message: 'Qual a segunda nota?',  // Mensagem exibida para o usuário
    }

])
.then(resp => {
    let media = (parseFloat(resp.p1)+parseFloat(resp.p2))/2
    console.log(`Sua média é ${media}`)
})
.catch(error => {
    console.error(error);
});