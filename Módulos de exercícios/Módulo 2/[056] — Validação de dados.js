const input = require('prompt-sync')();

let sexoPessoa = input('Qual é o seu sexo? [M/F]: ');

while (sexoPessoa != 'M' && sexoPessoa != 'F') {
    console.log('Você informou um dado inválido. Tente novamente.')

    sexoPessoa = input('Qual é o seu sexo? [M/F]: ');
};

console.log(`Você é do sexo ${sexoPessoa}.`);
