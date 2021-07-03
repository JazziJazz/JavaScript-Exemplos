const input = require('prompt-sync')();

let arrayOfStudents = new Array;
let nameOfStudent; let noteOne; let noteTwo;
let aswerQuestion;

while (true) {
    nameOfStudent = input('Digite o nome do estudante: ');
    noteOne = Number(input('Digite a primeira nota deste aluno: '));
    noteTwo = Number(input('Digite a segunda nota deste aluno: '));

    arrayOfStudents.push([nameOfStudent, [noteOne, noteTwo]]);

    aswerQuestion = input('Você quer adicionar outro estudante? [S/N]: ').trim().toUpperCase();

    if (aswerQuestion == 'N') {
        break;
    };
};

console.log();
console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-');
console.log('-+   NOTAS DOS ALUNOS    +-');
console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-');

console.log('\nNo.\tNOME\t\tMÉDIA');

for (let i = 0; i < arrayOfStudents.length; i++) {
    console.log(`${i}\t${arrayOfStudents[i][0]}\t${arrayOfStudents[i][1].reduce((a, b) => a + b, 0) / 2}`);
};

console.log();

while (true) {
    let showStudentNotes = Number(input('Digite o ID do aluno para saber suas notas (999-stop): '));

    if (showStudentNotes != 999) {
        console.log(arrayOfStudents[showStudentNotes][1]);
    } else {
        console.log('Programa encerrado.');
        break;
    };
};
