const input = require('prompt-sync')();

let nameOfStudent = input('Digite o nome do aluno: ');
let averageOfNotes = Number(input(`Qual a média de ${nameOfStudent}?: `));

let objectStudent = {'name': nameOfStudent, 'average': averageOfNotes};

if (objectStudent['average'] >= 7) {
    console.log('Aprovado!');
} else if (objectStudent['average'] >= 5) {
    console.log('Recuperação!');
} else {
    console.log('Reprovado!');
};
