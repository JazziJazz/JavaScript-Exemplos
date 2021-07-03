const input = require('prompt-sync')();

let salario = Number(input('Qual o salário do funcionário? R$'));

console.log(`Um funcionário de salário igual a R$${salario} com um reajuste salarial de 15% passará a ganhar um total de R$${salario + (15 * salario / 100)}.`);
