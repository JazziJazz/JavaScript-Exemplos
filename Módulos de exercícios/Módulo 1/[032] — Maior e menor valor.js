const input = require('prompt-sync')();

let numberOne = Number(input('Digite o primeiro número: '));
let numberTwo = Number(input('Digite o segundo número: '));
let numberThree = Number(input('Digite o terceiro número: '));

let maior = numberOne;
let menor = numberOne;

if (numberTwo >= numberOne && numberTwo >= numberThree) {
    maior = numberTwo;
} else if (numberThree >= numberOne && numberThree >= numberTwo) {
    maior = numberThree;
};

if (numberTwo <= numberOne && numberTwo <= numberThree) {
    menor = numberTwo;
} else if (numberThree <= numberOne && numberThree <= numberTwo) {
    menor = numberThree;
};

console.log(`\nOs números que você digitou foram ${numberOne}, ${numberTwo}, ${numberThree}. O maior número é o ${maior} e o menor número é o ${menor}.`);
