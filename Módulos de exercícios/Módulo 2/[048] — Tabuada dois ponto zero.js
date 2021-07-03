const input = require('prompt-sync')();

let numeroCalculo = Number(input('Digite um número para saber a tabuada: '));

for (let i = 1; i <= 10; i ++) {
    console.log(`${numeroCalculo} x ${i} = ${numeroCalculo * i}`);
};