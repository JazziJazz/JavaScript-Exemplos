const input = require('prompt-sync')();

let arrayOfNumbers = [Number(input('Digite um número: ')), Number(input('Digite um número: ')),
                      Number(input('Digite um número: ')), Number(input('Digite um número: '))];
let arrayOfOdd = new Array; let countOfNine = 0; let indexOfThree = null;

arrayOfNumbers.forEach(verifyArray = (value, index) => {
    if (value % 2 == 0) {
        arrayOfOdd.push(value);
    };

    if (value == 9) {
        countOfNine++;
    };

    if (value == 3) {
        indexOfThree = index;
    };
});

console.log(`Você digitou os valores: [${arrayOfNumbers}]\nEssa é a lista dos valores pares: [${arrayOfOdd}]\nO número nove aparece um total de ${countOfNine} vezes.\nO último indice do número três está na posição ${indexOfThree + 1}.`);
