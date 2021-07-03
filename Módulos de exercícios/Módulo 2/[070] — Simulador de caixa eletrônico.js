const input = require('prompt-sync')();

let valorParaSaque = Number(input('Qual o valor que você pretende sacar?: '));
let cinquentaReais = 0; let dezReais = 0; let umReal = 0;

while (valorParaSaque > 0) {
    if (valorParaSaque >= 50) {
        valorParaSaque -= 50;
        cinquentaReais++;
    };

    if (valorParaSaque <= 49 && valorParaSaque >= 10) {
        valorParaSaque -= 10;
        dezReais++;
    };

    if (valorParaSaque <= 9) {
        valorParaSaque -= 1;
        umReal++;
    };
};

console.log(`\nVocê recebera o dinheiro divido em cédula(s) de:\n\n1. ${cinquentaReais} cédula(s) de cinquenta reais.\n2. ${dezReais} cédula(s) de dez reais.\n3. ${umReal} cédula(s) de um real.\n\nFim da execução do programa.`);
