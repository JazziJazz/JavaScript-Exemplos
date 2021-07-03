const input = require('prompt-sync')();

let arrayOfNumbers = new Array;
let question; let number;

while (true) {
    number = Number(input('Digite um número: '))

    if (arrayOfNumbers.includes(number)) {
        console.log('Número inválido. A tabela já possui esse número em seu interior, tente novamente.');
        continue;
    };
    arrayOfNumbers.push(number);

    question = input('Você quer continuar? [S/N]: ').trim().toUpperCase();

    if (question == "N") {
        break;
    };
};

console.log(arrayOfNumbers.sort());