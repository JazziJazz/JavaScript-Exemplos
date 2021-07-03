const input = require('prompt-sync')();

let arrayOfNumbers = [[], []];
let numberToRead;

for (let i = 0; i < 7; i++) {
    numberToRead = Number(input(`Digite o ${i + 1}º número: `));

    if (numberToRead % 2 == 0) {
        arrayOfNumbers[0].push(numberToRead);
    } else {
        arrayOfNumbers[1].push(numberToRead);
    };
};

arrayToDisplay = [...arrayOfNumbers[0], ...arrayOfNumbers[1]]
arrayToDisplay.sort((a, b) => a - b);

console.log(`A lista com números pares: [${arrayOfNumbers[0]}].\nA lista com os números impares: [${arrayOfNumbers[1]}]\n\nA lista completa de números: [${arrayToDisplay}]`);
