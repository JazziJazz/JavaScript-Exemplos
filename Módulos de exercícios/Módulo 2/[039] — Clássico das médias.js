const input = require('prompt-sync')();

let notaUm = Number(input('Digite a primeira nota do aluno: '));
let notaDois = Number(input('Agora digite a segunda nota: '));

let media = (notaUm + notaDois) / 2;

if (media >= 6) {
    console.log(`O aluno possui a média de ${media} e está aprovado.`);
} else if (media >= 5 && media < 6) {
    console.log(`A média do aluno é de ${media}. Ele ficou de recuperação.`);
} else {
    console.log(`O aluno não atingiu a média suficiente para ser aprovado. Sua média foi de ${media}.`);
};
