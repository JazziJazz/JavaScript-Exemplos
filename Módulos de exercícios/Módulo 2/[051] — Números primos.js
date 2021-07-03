const input = require('prompt-sync')();

let numeroPrimo = Number(input('Digite um número para saber se é primo: '));
let verificaPrimo = 0;

for (let i = 1; i <= numeroPrimo; i++) {
    if (numeroPrimo % i == 0) {
        verificaPrimo++;
        process.stdout.write('\033[0;36m' + i + ' \033[0m');
    } else {
        process.stdout.write('\033[0;34m' + i + ' \033[0m');
    };
};

if (verificaPrimo == 2) {
    console.log('\nO número foi dividido um total de ' + verificaPrimo + ' vezes. Portanto ele é um número primo.');
} else {
    console.log('\nO número foi dividido um total de ' + verificaPrimo + ' vezes. Portanto ele \033[0;33mNÃO É UM\033[0m número primo.');
};
