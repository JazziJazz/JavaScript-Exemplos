const doRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let arrayDeRandom = [doRandom(0, 10), doRandom(0, 10), doRandom(0, 10),
                    doRandom(0, 10), doRandom(0, 10),doRandom(0, 10)];
let minNumber = null; let maxNumber = null;

arrayDeRandom.forEach(findMaxAndMin = (value) => {
    if (minNumber == null || value <= minNumber) {
        minNumber = value;
    };

    if (maxNumber == null || value >= maxNumber) {
        maxNumber = value;
    };
});


console.log(arrayDeRandom);
console.log('O valor máximo nesse array é de ' + maxNumber + '.\nO valor mínimo nesse array é de ' + minNumber + '.');
