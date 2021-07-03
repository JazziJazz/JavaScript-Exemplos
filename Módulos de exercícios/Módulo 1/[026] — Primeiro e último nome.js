const input = require('prompt-sync')();

let primeiroNome, ultimoNome;
let nomeCompleto = input('Digite o seu nome completo: ').split(" ");

primeiroNome = nomeCompleto[0]; ultimoNome = nomeCompleto[nomeCompleto.length - 1]

console.log(`O seu nome é ${nomeCompleto.join(" ")}. O seu primeiro nome é ${primeiroNome}, o seu último é ${ultimoNome}.`);
