import { readInt, readFloat } from './modules/readNumbers.mjs'

let numeroInt = readInt('Digite um número inteiro: ');
let numeroFloat = readFloat('Digite um número float: ');

console.log(`O número inteiro que você digitou foi ${numeroInt}. O número flutuante que você digitou foi ${numeroFloat}.`);
