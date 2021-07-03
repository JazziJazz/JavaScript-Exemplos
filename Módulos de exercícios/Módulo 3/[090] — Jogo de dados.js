const sleep = (time, callback) => {
    callback();

    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {};
};

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (min, max)) + min;
};

let objectPlayer = {'playerOne': getRandomNumber(1, 6), 'playerTwo': getRandomNumber(1, 6),
                    'playerThree': getRandomNumber(1, 6), 'playerFour': getRandomNumber(1, 6)};

Object.entries(objectPlayer).forEach(([key, value]) => {
    sleep(1500, function() {
        console.log(`${key} tirou ${value}!`);
    });
});

const sortObject = Object.fromEntries(
    Object.entries(objectPlayer).sort(([,a],[,b]) => b - a)
);

console.log();

Object.entries(sortObject).forEach(([key, value]) => {
    sleep(1500, function() {
        console.log(`${key} tirou ${value}!`);
    });
});
