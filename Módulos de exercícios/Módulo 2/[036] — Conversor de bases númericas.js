const input = require('prompt-sync')({sigint: true});

let number = Number(input('Digite um número: '));

console.log('\nEscolha uma das bases para conversão:\n1. Binário.\n2. Octal.\n3. Hexadecimal.\n')
let optionsToConvert = Number(input('Resposta: '));


switch (optionsToConvert) {
    case 1:
        console.log(`\nVocê escolheu a opção binária. O número ${number} convertido para binário é igual a ${number.toString(2)}.`);
        break;
    case 2:
        console.log(`\nVocê escolheu a opção binária. O número ${number} convertido para binário é igual a ${number.toString(8)}.`);
        break;
    case 3:
        console.log(`\nVocê escolheu a opção hexadecimal. O número ${number} convertido para hexadecimal é igual a ${number.toString(16)}.`);
        break;
    default:
        console.log('\nVocê digitou uma opção inválida, tente novamente.');
};