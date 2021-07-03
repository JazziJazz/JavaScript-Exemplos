const input = require('prompt-sync')();
const sprintf = require('sprintf-js').sprintf;

const getArea = (x, y) => {
    return Number(x * y);
};

function getAreaTwo(x, y) {
    return x * y;
};

let largura = Number(input('Digite a largura (M): '));
let altura = Number(input('Digite a altura (M): '));

console.log(`A área desse terreno é: ${sprintf("%.1f", getArea(largura, altura))}`);
