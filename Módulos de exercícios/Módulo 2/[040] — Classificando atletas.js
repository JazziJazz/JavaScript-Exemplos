const input = require('prompt-sync')();

let anoAtual = new Date;
let idadeAtual = anoAtual.getFullYear() - Number(input('Digite o ano de nascimento: '));

if (idadeAtual <= 9) {
    console.log('Classificação: Mirim.');
} else if (idadeAtual <= 14) {
    console.log('Classificação: Infantil.');
} else if (idadeAtual <= 19) {
    console.log('Classificação: Junior.');
} else if (idadeAtual <= 25) {
    console.log('Classificação: Sênior.')
} else {
    console.log('Classificação: Master.');
};
