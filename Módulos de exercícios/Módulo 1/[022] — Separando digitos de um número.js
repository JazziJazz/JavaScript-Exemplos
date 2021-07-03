const input = require('prompt-sync')();

let numero = Number(input('Vamos analisar. Digite um número: '));

console.log(`
Analisando o seu número...
O número possui um total de:

${Math.trunc(numero / 1 % 10)} unidade(s).
${Math.trunc(numero / 10 % 10)} dezena(s).
${Math.trunc(numero / 100 % 10)} centena(s).
${Math.trunc(numero / 1000 % 1000)} milhares(s).
${Math.trunc(numero / 1000000 % 10)} milhões(s).
`);
