const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const sumOddValues = (array) => {
    let sumOfOdd = 0;

    array.map(x => {
        if (x % 2 == 0) {
            sumOfOdd += x;
        };
    });

    return sumOfOdd;
};

const luckyValues = (array) => {
    for (let i = 0; i < 5; i++) {
        array.push(getRandomNumber(0, 10));
    };
}

let arrayOfNumbers = new Array;
luckyValues(arrayOfNumbers);

console.log('Sorteando os valores da lista!\nÀ sua lista tem os valores de ' + arrayOfNumbers + '!');
console.log('Somando os valores pares da lista: [' + arrayOfNumbers + ']. Total: ' + sumOddValues(arrayOfNumbers) + '!');