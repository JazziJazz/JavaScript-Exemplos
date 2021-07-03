const input = require('prompt-sync')();

let numero = Number(input('Digite um número, iremos exibir sua proporção inteira: '))

console.log(`O número que você digitou foi ${numero} e sua porção inteira é ${Math.round(numero)}.`);
