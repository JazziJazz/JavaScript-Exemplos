const prompt = require('prompt-sync')();

let numberOne = Number(prompt('Digite o primeiro número: '));
let numberTwo = Number(prompt('Digite o segundo número: '));

console.log(`A soma de ${numberOne} com ${numberTwo} é igual a ${numberOne + numberTwo}.`);