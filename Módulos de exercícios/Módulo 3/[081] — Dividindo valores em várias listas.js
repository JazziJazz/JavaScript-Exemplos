const input = require('prompt-sync')();

let arrayOfOdd = new Array; let arrayOfEven = new Array;
let arrayOfNumbers = new Array; let numberToPush;

while (true) {
    numberToPush = Number(input('Digite um número para adicionar a lista: '));
    arrayOfNumbers.push(numberToPush);

    if (numberToPush % 2 == 0) {
        arrayOfOdd.push(numberToPush);
    } else {
        arrayOfEven.push(numberToPush);
    };

    question = input('Você quer continuar? [S/N]: ').trim().toUpperCase();

    if (question == "N") {
        break;
    };
};

console.log(`A lista completa de números é igual a: ${arrayOfNumbers}.\nA lista de números pares ${arrayOfOdd}.\nA lista de números impares: ${arrayOfEven}.`);
