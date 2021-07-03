const input = require('prompt-sync')();

let number = Number(input('Exibiremos o antecessor e o sucessor de um número. Digite um número: '));

console.log(`O antecessor do número ${number} é igual a ${number - 1}, o sucessor do número é igual a ${number + 1}.`);
