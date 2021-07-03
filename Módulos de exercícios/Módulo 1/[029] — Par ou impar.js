const input = require('prompt-sync')();

let number = Number(input('Iremos verificar se o número é par ou impar. Digite um número: '));

if (number % 2 != 0) {
    console.log('O número é impar.')
} else {
    console.log('O número é par.')
};
