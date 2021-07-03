const input = require('prompt-sync')();

let number = 0; let sum = 0; let count = 0;

while (true) {
    number = Number(input('Digite um número [999 tostop]: '));
    
    if (number == 999) {
        break;
    } else {
        sum += number
        count++;
    };
};

console.log(`Você digitou um total de ${count} números e a soma entre eles é de ${sum}.`);
