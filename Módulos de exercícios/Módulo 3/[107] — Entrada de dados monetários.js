import { aumentar, diminuir, dobro, metade } from './modules/moedaFormatada.mjs';
import promptSync from 'prompt-sync';

const input = promptSync();

let moneyToAnalize = input('Digite um preço: ').trim();

if (moneyToAnalize.includes(',')) {
    moneyToAnalize = moneyToAnalize.split(',').join('.');
};

moneyToAnalize = Number(moneyToAnalize);

while (isNaN(moneyToAnalize)) {
    console.log(`Erro! Você digitou algo que não é um número. "${moneyToAnalize}" é entrada inválida.`);
    moneyToAnalize = input('Digite um preço: ').trim();

    if (moneyToAnalize.includes(',')) {
        moneyToAnalize = moneyToAnalize.split(',').join('.');
    };

    moneyToAnalize = Number(moneyToAnalize);
};

console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
console.log('-+-    RESUMO DO VALOR    -+-');
console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-\n');

console.log(`Preço analisado: \t${moneyToAnalize.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
console.log(`Dobro do preço: \t${dobro(moneyToAnalize)}`);
console.log(`Metade do preço: \t${metade(moneyToAnalize)}`);
console.log(`35% de aumento: \t${aumentar(35, moneyToAnalize)}`);
console.log(`22% de redução: \t${diminuir(22, moneyToAnalize)}`);
