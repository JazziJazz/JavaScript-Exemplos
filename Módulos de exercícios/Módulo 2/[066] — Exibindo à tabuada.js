const input = require('prompt-sync')();

let tabuada = 0;

while (true) {
    tabuada = Number(input('Você quer exibir a tabuada de qual valor? [0 stop]: '));

    if (tabuada != 0) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${tabuada} * ${i} = ${tabuada * i}`);
        };
    } else {
        console.log('\n\nPrograma encerrado.')
        break;
    };
};
