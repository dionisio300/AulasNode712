import chalk from 'chalk'

const nota = 6


if(nota >= 7){
    console.log(chalk.green('Parabens! Você está aprovado!'))
}else{
    console.log(chalk.bgRed.green('Parabens! Você está aprovado!'))
}

