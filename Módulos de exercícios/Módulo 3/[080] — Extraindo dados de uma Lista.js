const input = require('prompt-sync')();

let arrayOfNumbers = new Array;
let numberToPush;

while (true) {
    numberToPush = Number(input('Digite um número: '));
    arrayOfNumbers.push(numberToPush);

    question = input('Você quer continuar? [S/N]: ').trim().toUpperCase();

    if (question == "N") {
        break;
    };
};

arrayOfNumbers.sort((a, b) => b - a);

console.log(`Você digitou um total de ${arrayOfNumbers.length} números.\nOs valores em ordem decrescente são: ${arrayOfNumbers}.`);

if (arrayOfNumbers.includes(5)) {
    console.log('O número cinco está incluido nessa lista.');
} else {
    console.log('O número cinco não está incluido nessa lista.');
};
