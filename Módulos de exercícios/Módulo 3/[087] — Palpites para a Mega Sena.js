const input = require('prompt-sync')();

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sleep = (time, callback) => {
    callback();

    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {};
};

let arrayOfNumbers = new Array;
let aswerQuestion = Number(input('Quantos jogos você deseja exibir?: '));

for (let i = 0; i < aswerQuestion; i++) {
    for (let y = 0; y < 6; y++) {
        let randomNumber = getRandomNumber(0, 60)

        if (!arrayOfNumbers.includes(randomNumber)) {
            arrayOfNumbers.push(randomNumber);
        } else {
            y--;
            continue;
        };
    };

    sleep(1500, function() {
        console.log(arrayOfNumbers)
    });

    arrayOfNumbers = new Array;
};
