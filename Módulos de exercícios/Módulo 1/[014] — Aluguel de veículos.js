const input = require('prompt-sync')();

let diasAlugado = Number(input('Quantos dias o cliente permaneceu com o veículo? Um total de dias: '));
let quilometrosRodados = Number(input('Quantos quilometros o veículo rodou? Quilometros: '));

console.log(`O cliente deverá pagar pelo veículo um total de R$${(diasAlugado * 60) + (quilometrosRodados * 0.15)}.`);
