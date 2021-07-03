const input = require('prompt-sync')();

let number, question;

let sum = 0; let count = 0;
let lower = null; let higher = null;

while (true) {
    number = Number(input('Digite um número: '));
    question = input('Você quer continuar? [S/N]: ').trim().toUpperCase();

    if (number >= higher || higher == null) {
        higher = number
    };

    if (number <= lower || lower == null) {
        lower = number
    };

    sum += number
    count++;

    if (question != 'S') {
        break;
    };
};

console.log(`Você digitou um total de ${count} números. A média entre eles foi de ${sum / count}.\nO maior valor digitado foi ${higher} e o menor valor informado foi ${lower}.`);
