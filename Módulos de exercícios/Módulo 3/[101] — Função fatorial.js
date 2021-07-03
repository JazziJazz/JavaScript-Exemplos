const input = require('prompt-sync')();

function getFactorial(number, show=false) {
    let fatorial = 1;

    for (let i = number; i > 0; i--) {
        if (show) {
            if (i != 1) {
                process.stdout.write(`${i} × `);
            } else {
                process.stdout.write(`${i} = `);
            };
        };

        fatorial *= i
    };

    return fatorial;
};

console.log(getFactorial(5, true));
