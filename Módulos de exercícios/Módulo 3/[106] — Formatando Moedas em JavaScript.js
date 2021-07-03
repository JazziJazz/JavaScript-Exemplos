import { aumentar, diminuir, dobro, metade } from './modules/moedaFormatada.mjs';
import promptSync from 'prompt-sync';

const input = promptSync();

let moneyToConvert = Number(input('Digite um valor monetário: '));

console.log(`Com um aumento de 10% o seu dinheiro passará a valer: ${aumentar(10, moneyToConvert)}.\nCom um decrescimo de 10% o seu dinheiro passará a valer: ${diminuir(10, moneyToConvert)}\nO dobro e a metade passam a ser respectivamente: ${dobro(moneyToConvert)} e ${metade(moneyToConvert)}.`);
