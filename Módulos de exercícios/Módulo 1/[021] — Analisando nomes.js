const input = require('prompt-sync')();

let nome = input('Qual é o seu nome? ')

console.log(`
Analisando o seu nome...

O seu nome em letras maísculas fica: ${nome.toUpperCase()}
O seu nome em letras minúsculas fica: ${nome.toLowerCase()}
O seu nome tem um total de ${nome.split(" ").join("").length} letras.
O seu primeiro nome é ${nome.split(" ")[0]} e ele tem ${nome.split(" ")[0].length} letras.
`)
