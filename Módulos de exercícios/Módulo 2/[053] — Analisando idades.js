const input = require('prompt-sync')();
const dataAtual = new Date().getFullYear();

let arrayDePessoas = new Array;
let maior = 0; let menor = 0;

for (let i = 0; i <= 6; i++) {
    let pessoaIdade = Number(input('Qual é o ano de nascimento dessa pessoa: '));
    arrayDePessoas.push(pessoaIdade);

    if ((dataAtual - pessoaIdade) >= 18) {
        maior++;
    } else {
        menor++;
    };
};

console.log(`Há um total de ${maior} pessoas maiores de idade. Há um total de ${menor} pessoas menores de idade.`);
