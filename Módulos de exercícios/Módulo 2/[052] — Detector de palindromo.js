const input = require('prompt-sync')();

console.log('Digite uma frase. Iremos te informar se a frase se trata de um palíndromo ou não.')
let fraseParaAnalise = input('A frase é: ');

const analisePalindromo = (frase) => {
    let fraseReversa = frase.split(" ").join("").split("").reverse().join("");
    frase = frase.split(" ").join("").split("").join("")

    if (fraseReversa.toLowerCase() == frase.toLowerCase()) {
        return true;
    };

    return false;
};

if (analisePalindromo(fraseParaAnalise)) {
    console.log(`A frase informada por você foi:\n${fraseParaAnalise}\n\nEla é um palindromo.`)
} else {
    console.log(`A frase informada por você foi:\n${fraseParaAnalise}\n\nEla NÃO é um palindromo.`)
};
