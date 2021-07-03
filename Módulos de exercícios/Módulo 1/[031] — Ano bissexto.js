const input = require('prompt-sync')();

let ano = Number(input('Qual ano você quer saber se é bissexto? '));
const calculoBissexto = (ano) => {
    if (ano % 4 == 0 && ano % 100 != 0) {
        return true
    } else {
        return false
    };
};

if (ano == 0) {
    ano = 2021;
};

if (calculoBissexto(ano)) {
    console.log(`Sim, o ano de ${ano} foi(é) um ano bissexto.`);
} else {
    console.log(`O ano de ${ano} não é um ano bissexto.`)
};
