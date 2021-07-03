const input = require('prompt-sync')();

let catOposto = Number(input('Qual o comprimento do cateto oposto? '));
let catAdjacente = Number(input('Qual o comprimento do cateto adjacente? '));

console.log(`O valor da hipotenusa é de ${Math.sqrt((catOposto ** 2) + (catAdjacente ** 2)).toFixed(2)}.`);
