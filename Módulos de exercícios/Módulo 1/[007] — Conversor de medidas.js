const input = require('prompt-sync')();

let metros = Number(input('Digite a distância em metros, iremos convertela para várias medidas diferentes: '));

console.log(`A distância informada por você foi de ${metros} metros. Esta distância equivale a:\n\n${metros / 1609} milhas.\n${metros / 1000} quilometros.\n${metros * 100} centimetros.\n${metros * 1000} milimetros.\n${metros * 1.094} jardas.`);
