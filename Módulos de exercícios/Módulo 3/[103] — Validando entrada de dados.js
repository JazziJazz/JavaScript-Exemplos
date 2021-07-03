const input = require('prompt-sync')();

const readInteger = (message) => {
    let number = input(message);

    while (isNaN(number)) {
        number = input('Erro. Você está digitando algo que não é um número, tente novamente. Digite um número: ');
        number = Number(number);
    };

    return number;
};

numeroToTest = readInteger('Digite um número: ');
console.log(numeroToTest);
