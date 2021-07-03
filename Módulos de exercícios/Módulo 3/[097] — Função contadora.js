const input = require('prompt-sync')();

const personalCount = (start, end, step) => {
    if (start > end) {
        while (start >= end) {
            process.stdout.write(`${start} 🠒 `);
            start -= step;
        };
    } else {
        while (start <= end) {
            process.stdout.write(`${start} 🠒 `);
            start += step;
        };
    };

    process.stdout.write(`FIM!`);
    console.log();
};

personalCount(1, 10, 1);
personalCount(10, 0, 2);


console.log('\nAgora é sua vez de contar!');
let startNumber = Number(input('Digite o número de início: '));
let endNumber = Number(input('Digite o número de parada: '));
let stepNumber = Number(input('Você quer pular de quanto em quanto?: '));

personalCount(startNumber, endNumber, stepNumber);
