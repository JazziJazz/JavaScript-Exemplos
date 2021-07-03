const input = require('prompt-sync')();

const haveAgeToVote = (yearOfBirth) => {
    let currentYear = new Date().getFullYear();
    let currentAge = currentYear - yearOfBirth

    if (currentAge >= 70) {
        return console.log(`Com a idade de ${currentAge} o voto é opcional.`);
    } else if (currentAge >= 18) {
        return console.log(`Com a idade de ${currentAge} o voto é obrigatório.`);
    } else if (currentAge >= 16) {
        return console.log(`Com a idade de ${currentAge} o voto é opcional.`);
    } else {
        return console.log(`Com a idade de ${currentAge} o voto é proibido.`);
    };
};


let age = Number(input('Digite o ano em que você nasceu: '));

haveAgeToVote(age);
