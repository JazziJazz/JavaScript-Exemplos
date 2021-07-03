const input = require('prompt-sync')();

const FLAG = 999;
let numberToSum = 0; let sumOfNumbers = 0; let countOfNumbers = 0;

while (numberToSum != FLAG) {
    numberToSum = Number(input('Digite um número [999 to stop]: '));

    if (numberToSum != FLAG) {
        sumOfNumbers += numberToSum;
        countOfNumbers ++;
    };
};

console.log(`Você digitou um total de ${countOfNumbers} números. A soma entre todos eles é igual a ${sumOfNumbers}.`);
