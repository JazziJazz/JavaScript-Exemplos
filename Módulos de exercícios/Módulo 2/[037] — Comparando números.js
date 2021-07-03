const input = require('prompt-sync')({sigint: true});

let numberOne, numberTwo;

numberOne = Number(input('Digite o primeiro valor: '));
numberTwo = Number(input('Digite o segundo valor: '));

if (numberOne > numberTwo) {
    console.log('O primeiro número é maior que o segundo.');
} else if (numberOne < numberTwo) {
    console.log('O segundo número é maior que o primeiro.');
} else {
    console.log('Não há nenhuma diferença entre os números. Números iguais.');
};