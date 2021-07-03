const input = require('prompt-sync')();

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    };

    callback();
};

for (let i = 10; i > 0; i--) {
    sleep(1000, function() {
        console.log(i)
     });
};
