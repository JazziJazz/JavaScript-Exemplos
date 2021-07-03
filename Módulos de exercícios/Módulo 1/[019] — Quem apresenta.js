const input = require('prompt-sync')();

/*
Essa função pertence ao Fisher-Yates, ou Knuth. 
Deve ser usada com cautela pois aceita apenas tipos primitivos.

Para mais informações acessar:
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
*/

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

let StudentOne = input('Qual o nome do primeiro aluno? Nome: ');
let StudentTwo = input('Qual o nome do segundo aluno? Nome: ');
let StudentThree = input('Qual o nome do terceiro aluno? Nome: ');
let StudentFour = input('Qual o nome do quarto aluno? Nome: ');

let arrayOfStudents = [StudentOne, StudentTwo, StudentThree, StudentFour];

console.log('A ordem de apresentação do trabalho deve ser: ' + shuffle(arrayOfStudents) + '.');const 

/*
structDatas = [
    { handler: 'http', endpoint: 'http://localhost:3000/path', method: 'ALL' },
    { handler: 'event', endpoint: 'http://localhost:3000/event', method: 'POST' },
    { handler: 'GCS', endpoint: 'http://localhost:3000/GCS', method: 'POST' }
];
console.table(structDatas);
*/
