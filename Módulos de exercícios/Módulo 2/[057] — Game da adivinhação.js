const input = require('prompt-sync')();

let tentativas = 1;
let numeroComputador = Math.floor(Math.random() * (10 + 0 + 1)) + 0;
let palpiteJogador = Number(input('Qual é o seu palpite?: '));

while (palpiteJogador != numeroComputador) {
    if (palpiteJogador < numeroComputador) {
        tentativas++;
        console.log('Mais...');
        palpiteJogador = Number(input('Qual é o seu palpite?: '));
    } else {
        tentativas++;
        console.log('Menos...');
        palpiteJogador = Number(input('Qual é o seu palplite?: '))
    }
};

console.log('Parabéns! Você acertou! Foram necessárias ' + tentativas + ' tentativas para isso.');
