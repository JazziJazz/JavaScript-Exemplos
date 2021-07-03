const input = require('prompt-sync')();

let velocidade = Number(input('Em qual velocidade você está digirindo? '));
const calculoMulta = (velocidade) => {
    return (velocidade - 80) * 7 
}

if (velocidade > 80) {
    console.log(`Você está multado! Você deverá pagar um total de R$${calculoMulta(velocidade)}.`)
} else {
    console.log('Você não está acima do limite de velocidade. Tenha um bom dia, dirija com segurança.')
};
