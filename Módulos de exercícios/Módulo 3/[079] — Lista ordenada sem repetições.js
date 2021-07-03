const input = require('prompt-sync')();

let arrayOfNumber = new Array;
let numberToPush;

for (let i = 0; i < 5; i++) {
    numberToPush = Number(input('Digite um número: '));

    if (arrayOfNumber.length == 0) {
        arrayOfNumber.push(numberToPush);
        console.log('Valor adicionado à lista. Não possuia valores ainda, portanto foi adicionado a primeira e última posição.' + arrayOfNumber);
        continue;
    };

    if (numberToPush >= arrayOfNumber[arrayOfNumber.length - 1]) {
        arrayOfNumber.push(numberToPush);

        console.log('Número adicionado ao final da lista.' + arrayOfNumber);
        continue;
    };

    let position = 0;

    while (position <= arrayOfNumber.length) {
        if (numberToPush < arrayOfNumber[position]) {
            arrayOfNumber.splice(position, 0, numberToPush);
            arrayOfNumber.join()
            break;
        };

        position++;
    };

    console.log('Número adicionado a posição ' + position);
};

console.log(arrayOfNumber)
