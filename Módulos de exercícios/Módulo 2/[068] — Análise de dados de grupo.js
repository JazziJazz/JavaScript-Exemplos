const input = require('prompt-sync')();

let pessoasMaiores = 0; let quantidadeHomens = 0; let mulheresMaiores = 0;

let idade, sexo;

while (true) {
    console.log('');
    idade = Number(input('Digite a idade: '));
    sexo = input('Qual é o sexo? [M/F]: ').trim().toUpperCase();

    if (idade >= 18) {
        pessoasMaiores++;
    };

    if (sexo == 'F' && idade > 20) {
        mulheresMaiores++;
    };

    if (sexo == 'M') {
        quantidadeHomens++;
    };

    console.log('\nVocê quer cadastrar mais uma pessoa?');
    let questao = input('Resposta [S/N]: ').trim().toUpperCase();

    if (questao == 'N') {
        console.log('\nHá um total de ' + pessoasMaiores + ' pessoas maiores de idade. Possuimos ' + quantidadeHomens + ' homens cadastrados em nossa base de dados. Por fim, temos um total de ' + mulheresMaiores + ' mulheres maiores de vinte anos de idade.');
        break;
    };
};
