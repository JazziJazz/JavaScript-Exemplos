const input = require('prompt-sync')();

let randomNumber = 0; let playerNumber = 0; let choicePlayer = null; let count = 0;

const par = (numberOne, numberTwo) => {
    if ((numberOne + numberTwo) % 2 == 0) {
        return true
    }

    return false
};

while (true) {
    randomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    console.log('Vamos jogar par ou ímpar! Escolha um número, se você perder... Você perde!\n');
    playerNumber = Number(input('Digite um valor: '));
    choicePlayer = input('Agora faça sua escolha! Você quer par ou ímpar? [I/P]: ').trim().toUpperCase();

    if (choicePlayer == 'P') {
        if (par(randomNumber, playerNumber)) {
            count++;
            console.log('Você venceu! Você escolheu ' + playerNumber + ' e eu escolhi ' + randomNumber + '. Portanto o resultado foi par. De novo!');
        } else {
            console.log(`Você perdeu! Game Over, eu vencí! Você acertou um total de ${count} vezes.`);
            break;
        }
    } else {
        if (par(randomNumber, playerNumber)) {
            console.log(`Você perdeu! Game Over, eu vencí! Você acertou um total de ${count} vezes.`);
            break;
        } else {
            count++;
            console.log('Você venceu! Você escolheu ' + playerNumber + ' e eu escolhi ' + randomNumber + '. Portanto o resultado foi IMPAR. De novo!');
        };
    };
};