const input = require('prompt-sync')();
const sprintf = require("sprintf-js").sprintf;

let arrayMatriz = [[], [], []]
let numberToPush;
let oddValues = 0; let thirdColumnValues = 0; let mostHighValueSecondLine = null;


for (let i = 0; i <= 2; i++) {
    for (let y = 0; y <= 2; y++) {
        numberToPush = Number(input(`Qual o valor da matriz [${i}], [${y}]? `));
        arrayMatriz[i].push(numberToPush)
    };
};

for (let i = 0; i < arrayMatriz.length; i++) {
    for (let y = 0; y < arrayMatriz[i].length; y++) {
        process.stdout.write(`[ ${sprintf("%4.0f", arrayMatriz[i][y])} ]`)

        if (arrayMatriz[i][y] % 2 == 0) {
            oddValues += arrayMatriz[i][y]
        };

        if (y == 2) {
            thirdColumnValues += arrayMatriz[i][y]
        };

        if (i == 1) {
            if (mostHighValueSecondLine == null || arrayMatriz[i][y] >= mostHighValueSecondLine) {
                mostHighValueSecondLine = arrayMatriz[i][y]
            };
        };
    };

    console.log('');
};

console.log(`\nA soma dos números pares é igual a: ${oddValues}.\nO maior valor da segunda linha é igual a ${mostHighValueSecondLine}.\nA soma total dos números da terceira coluna é de ${thirdColumnValues}.`);
