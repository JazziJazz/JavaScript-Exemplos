const input = require('prompt-sync')();

let temperaturaCelsius = Number(input('Qual é a temperatura atual em graus Cº? Temperatura de: '));

console.log(`A temperatura de ${temperaturaCelsius}ºC convertida para fahrenheit fica ${(temperaturaCelsius * 9 / 5) + 32}ºF.`);