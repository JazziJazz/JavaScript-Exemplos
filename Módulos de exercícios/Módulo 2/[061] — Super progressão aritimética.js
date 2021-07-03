const input = require('prompt-sync')();

let progressao = Number(input('Digite o primeiro termo da PA: '));
let razao = Number(input('Digite a razão da PA: '));
let termos = 10;

while (true) {
    while (termos != 0) {
        process.stdout.write(`${progressao} 🠒 `);
        progressao += razao
        termos--;
    };
    console.log('PAUSA!\n')
    termos = Number(input('Quantos termos a mais você quer mostrar?: '));

    if (termos == 0) {
        break;
    };
};
