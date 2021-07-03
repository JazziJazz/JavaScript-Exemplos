const input = require('prompt-sync')();

console.log("\n\n\033[0;36m *--*--*--*--*--*--*--*--*--*--* \033[0m")
console.log("\033[0;36m *--*\033[0m  \033[0;35mJOGO DA ADIVINHAÇÃO\033[0m  \033[0;36m*--*\033[0m ")
console.log("\033[0;36m *--*--*--*--*--*--*--*--*--*--* \033[0m\n\n")

let number = Number(input('Eu vou pensar em um número de zero até cinco, será que você consegue adivinhar? Número: '));
const randomNumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0;

if (number == randomNumber) {
    console.log(`Você acertou! Eu realmente estava pensando no número ${number}.`)
} else {
    console.log(`Você errou! Eu estava pensando no número ${randomNumber}.`)
};
