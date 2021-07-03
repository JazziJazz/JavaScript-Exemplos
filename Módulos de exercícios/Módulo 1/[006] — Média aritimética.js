// Inicializando o módulo prompt do NodeJS.
const input = require('prompt-sync')();
let numberOne, numberTwo, averageNotes;

numberOne = Number(input('Digite a primeira nota do aluno: '));
numberTwo = Number(input('Agora qual é a segunda nota do aluno? Digite: '));

averageNotes = (numberOne + numberTwo) / 2

console.log(`A média das duas notas do aluno é igual a ${averageNotes}.\nA primeira nota foi ${numberOne} e a segunda nota foi ${numberTwo}.`)
