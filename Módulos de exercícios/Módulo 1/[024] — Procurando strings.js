const input = require('prompt-sync')();

let nome = input('Qual é o seu nome completo? ').trim();

console.log(`Seu nome possuí Silva? ${nome.toLowerCase().includes('silva')}`);
