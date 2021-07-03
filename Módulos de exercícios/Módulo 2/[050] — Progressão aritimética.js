const input = require('prompt-sync')();

let primeiroTermo = Number(input('Qual é o primeiro termo da P.A? '));
let razaoDaProgressao = Number(input('Qual é a razão dessa P.A? '));

for (let i = 1; i <= 10; i++) {
    process.stdout.write(`${primeiroTermo} 🠒 `);
    primeiroTermo += razaoDaProgressao;
};

console.log('ACABOU!');
