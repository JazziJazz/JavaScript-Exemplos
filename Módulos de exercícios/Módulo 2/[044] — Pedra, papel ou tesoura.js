const input = require('prompt-sync')();

let escolhaMaquina = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

console.log('Vamos jogar pedra, papel ou tesoura?\nÉ muito simples, basta escolher a sua opção abaixo:\n\n1. Pedra.\n2. Papel.\n3. Tesoura.\n');

let escolhaPlayer = Number(input('Digite a sua escolha: '));

switch (escolhaPlayer) {
    case 1:
        if (escolhaMaquina == 1) {
            console.log('Empate! A máquina escolheu PEDRA e você também.');
        } else if (escolhaMaquina == 2) {
            console.log('Você perdeu! A máquina escolheu PAPEL.');
        } else {
            console.log('Você ganhou! Você escolheu PEDRA e a máquina TESOURA.')
        };

        break;
    case 2:
        if (escolhaMaquina == 1) {
            console.log('Você ganhou! Você escolheu PAPEL e a máquina PEDRA.');
        } else if (escolhaMaquina == 2) {
            console.log('Empate! A máquina escolheu PAPEL e você também.');
        } else {
            console.log('Você perdeu! A máquina escolheu TESOURA.')
        };

        break;
    case 3:
        if (escolhaMaquina == 1) {
            console.log('Você perdeu! A máquina escolheu PEDRA.');
        } else if (escolhaMaquina == 2) {
            console.log('Você ganhou! Você escolheu TESOURA e a máquina PAPEL.');
        } else {
            console.log('Empate! A máquina escolheu TESOURA e você também.')
        };

        break;
    default:
        console.log('Você escolhe uma opção inválida. Reinicie o programa e tente novamente.');
};
