const input = require('prompt-sync')();

let fatorial = Number(input('Digite um número para saber seu fatorial: '));
let resultadoVariante = 1;

while (fatorial > 0) {
    resultadoVariante *= fatorial;
    fatorial--;
};

console.log(resultadoVariante);
