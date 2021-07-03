const input = require('prompt-sync')();

let precoProduto = Number(input('Qual é o valor total do produto? R$'));

console.log(`O produto custa um total de R$${precoProduto}.
Com um desconto de 5% ele passará a custar R$${precoProduto - (5 * precoProduto / 100)}.`);
