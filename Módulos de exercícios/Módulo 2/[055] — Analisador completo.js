const input = require('prompt-sync')();

let mulheresMenoresDeIdade = 0; let homemMaisVelho = null; let mediaIdade = 0;

for (let i = 0; i <= 3; i++) {
    console.log(`———— ${i + 1}ª PESSOA ————`);

    let nomePessoa = input('Qual o nome da pessoa? ');
    let idadePessoa = Number(input('Qual é a idade dessa pessoa? '));
    let sexoPessoa = input('Sexo da pessoa? [M/F]: ').toUpperCase();

    if (sexoPessoa == 'M') {
        if (homemMaisVelho == null) {
            homemMaisVelho = {'nome': nomePessoa, 'idade': idadePessoa};
        };

        if (idadePessoa > homemMaisVelho.idade) {
            homemMaisVelho = {'nome': nomePessoa, 'idade': idadePessoa};
        };
    };

    if ((sexoPessoa == 'F') && (idadePessoa <= 20)) {
        mulheresMenoresDeIdade++;
    };

    mediaIdade += idadePessoa;

    console.log('\n');
};

console.log(`
O homem mais velho se chama ${homemMaisVelho.nome} e possuí a idade de ${homemMaisVelho.idade}.
Há um total de ${mulheresMenoresDeIdade} mulheres com menos de vinte anos.
E a média de idade do grupo é igual a ${mediaIdade / 4}.
`);
