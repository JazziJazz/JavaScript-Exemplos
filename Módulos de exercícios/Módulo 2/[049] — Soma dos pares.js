const input = require('prompt-sync')();

let somaDosPares = 0;
let arrayDeNumeros = [Number(input('Digite um número: ')), Number(input('Agora outro: ')),
                Number(input('Mais um número: ')), Number(input('E outro número: ')),
                Number(input('Mais um número: ')), Number(input('O último número: '))];

for (num in arrayDeNumeros) {
    if (arrayDeNumeros[num] % 2 == 0) {
        somaDosPares += arrayDeNumeros[num]
    };
};

console.log(`\nA soma dos números é igual a ${somaDosPares}.`)