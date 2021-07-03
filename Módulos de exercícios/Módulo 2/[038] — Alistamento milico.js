const input = require('prompt-sync')(); let date = new Date;

let anoDeNascimento = Number(input('Digite o ano em que você nasceu: '));

if ((date.getFullYear() - anoDeNascimento) < 18) {
    console.log(`Quem nasceu em ${anoDeNascimento} tem a idade de ${date.getFullYear() - anoDeNascimento}. Ainda falta(m) ${18 - (date.getFullYear() - anoDeNascimento)} ano(s) para o alistamento.`);
} else if ((date.getFullYear() - anoDeNascimento) > 18) {
    console.log(`Você passou da idade para se alistar. Você deveria ter se alistado em ${date.getFullYear() - ((date.getFullYear() - anoDeNascimento) - 18)}. Já são ${(date.getFullYear() - anoDeNascimento) - 18} anos de atraso.`);
} else {
    console.log('É o seu momento de se alistar. Você completa dezoito anos esse ano, corra para a junta dos milicos mais próxima.');
};
