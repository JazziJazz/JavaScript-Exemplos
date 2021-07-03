const input = require('prompt-sync')();

let menorValor = new Array; let maiorValor = new Array;
let arrayOfNumbers = [Number(input('Digite um valor para posição 0: ',)),
                      Number(input('Digite um valor para posição 1: ')),
                      Number(input('Digite um valor para posição 2: ')),
                      Number(input('Digite um valor para posição 3: ')),
                      Number(input('Digite um valor para posição 4: '))];

arrayOfNumbers.forEach(verifyNumbers = (value) => {
    if (menorValor.length == 0) {
        menorValor.push(value);
        return;
    };

    if (maiorValor.length == 0) {
        maiorValor.push(value);
        return;
    };

    if (value < menorValor[0]) {
        menorValor = new Array; // Reset é feito;
        menorValor.push(value);
        return;
    };

    if (value > maiorValor[0]) {
        maiorValor = new Array;
        maiorValor.push(value);
        return;
    };

    if (value == menorValor[0]) {
        menorValor.push(value);
        return;
    };

    if (value == maiorValor[0]) {
        maiorValor.push(value);
        return;
    };
});

console.log(`Você digitou os valores ${arrayOfNumbers}.\nO(s) maior(es) valor(es) informado(s) foi(ram) ${maiorValor}.\nO(s) menor(es) valor(es) informado(s) ${menorValor}.`);
