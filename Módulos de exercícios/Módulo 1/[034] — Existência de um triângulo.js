const input = require('prompt-sync')();

let ladoA, ladoB, ladoC;
ladoA = Number(input('Qual a medida do lado A? '));
ladoB = Number(input('Qual a medida do lado B? '));
ladoC = Number(input('Qual a medida do lado C? '));

const podeFormarTriangulo = (a, b, c) => {
    if (a < a + c && b < a + c && c < a + b) {
        return true
    };

    return false
};


if (podeFormarTriangulo(ladoA, ladoB, ladoC)) {
    console.log(`\nO triângulo que você informou possui as medidas de ${ladoA}, ${ladoB} e ${ladoC}.\nEsse triângulo pode ser formado.`);
} else {
    console.log(`\nO triângulo que você informou possui as medidas de ${ladoA}, ${ladoB} e ${ladoC}.\nEsse triângulo NÃO pode ser formado.`);
};
