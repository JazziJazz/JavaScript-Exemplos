const input = require('prompt-sync')();

let ladoA, ladoB, ladoC;

ladoA = Number(input('Informe a medida do lado A do triângulo: '));
ladoB = Number(input('Informe a medida do lado B do triângulo: '));
ladoC = Number(input('Informe a medida do lado C do triângulo: '));

const trianguloFormado = (a, b, c) => {
    if (a < a + c && b < a + c && c < a + b) {
        return true
    };

    return false
};

if (trianguloFormado(ladoA, ladoB, ladoC)) {
    if (ladoA == ladoB && ladoA == ladoC) {
        console.log(`O triângulo pode ser formado. Ele é um Equilátero.`);
    } else if ((ladoA == ladoB && ladoA != ladoC) || ladoA == ladoC && ladoA != ladoB) {
        console.log('O triângulo pode ser formado. Ele é um Isósceles.')
    } else if (ladoA != ladoB && ladoB != ladoC) {
        console.log('O triângulo pode ser formado. Ele é um Escaleno.');
    };
} else {
    console.log('O triângulo não pode ser formado.');
};
