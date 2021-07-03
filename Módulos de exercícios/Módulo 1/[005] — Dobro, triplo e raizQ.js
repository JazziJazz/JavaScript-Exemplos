const input = require('prompt-sync')();

let number = Number(input('Digite um número, iremos exibir o dobro, triplo e a raiz quadrada: '));

console.log(`O dobro de ${number} é igual a ${number * 2}.\nO triplo de ${number} é igual a ${number * 3}.\n\nA raiz quadrada, que é um pouco mais dificil, é igual a ${Math.sqrt(number)}.\n\nFim do programa.`)