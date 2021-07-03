const input = require('prompt-sync')();

let progressao = Number(input('Digite o primeiro termo da PA: '));
let razao = Number(input('Digite a razão da PA: '));
let count = 0;

while (count < 10) {
    process.stdout.write(`${progressao} 🠒 `);
    progressao += razao
    count++;
};

console.log('FIM!');
