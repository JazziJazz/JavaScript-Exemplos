const input = require('prompt-sync')();

let termoOne, termoTwo;
termoOne = 0; termoTwo = 1;

let quantidadeTermos = Number(input('Quantos termos você quer mostrar?: '));
let count = 3;

process.stdout.write(`${termoOne} 🠒 ${termoTwo} 🠒`);

while (count <= quantidadeTermos) {
    let termoThree = termoOne + termoTwo;
    process.stdout.write(`${termoThree} 🠒 `);

    termoOne = termoTwo;
    termoTwo = termoThree;

    count += 1;
};

process.stdout.write('FIM!');
