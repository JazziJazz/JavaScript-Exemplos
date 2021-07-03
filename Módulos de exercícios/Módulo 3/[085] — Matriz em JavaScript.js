const input = require('prompt-sync')();
const sprintf = require("sprintf-js").sprintf;

let arrayMatriz = [[], [], []];
let numberToPush;


for (let i = 0; i <= 2; i++) {
    for (let y = 0; y <= 2; y++) {
        numberToPush = Number(input(`Qual o valor da matriz [${i}], [${y}]? `));
        arrayMatriz[i].push(numberToPush);
    };
};


for (let i = 0; i < arrayMatriz.length; i++) {
    for (let y = 0; y < arrayMatriz[i].length; y++) {
        process.stdout.write(`[ ${sprintf("%4.0f", arrayMatriz[i][y])} ]`);
    };

    console.log('');
};
