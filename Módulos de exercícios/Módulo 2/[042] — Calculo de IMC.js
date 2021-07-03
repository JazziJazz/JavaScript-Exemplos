const input = require('prompt-sync')();

let peso = Number(input('Digite o seu peso: '));
let altura = Number(input('Digite sua altura: '));

const calculoImc = (peso, altura) => {
    return peso / (altura * altura);
};

let imc = calculoImc(peso, altura);

if (imc < 18.5) {
    console.log('Você está abaixo do peso. Se alimente melhor.');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você está no seu peso ideal.');
} else if (imc >= 25 && imc < 30) {
    console.log('Você está com sobrepreso. Se alimente melhor.');
} else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso. Procure um nutricionista o mais rápido possível.');
} else if (imc >= 40) {
    console.log('Você possuí obesidade mórbida. Procure um médico.');
};
