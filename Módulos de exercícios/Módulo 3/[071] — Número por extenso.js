const input = require('prompt-sync')();

let arrayDeNumeros = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte'];

let numeroEscolhido = Number(input('Digite um número entre 0 e 20: '));

console.log(`O número que você digitou foi o número ${arrayDeNumeros[numeroEscolhido]}.`);
