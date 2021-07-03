const input = require('prompt-sync')();


// Função arrow.
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Constructor de array :: New!
let arrayOfStudents = new Array;

let StudentOne = input('Qual o nome do primeiro aluno? Nome: ');
arrayOfStudents.push(StudentOne);
let StudentTwo = input('Qual o nome do segundo aluno? Nome: ');
arrayOfStudents.push(StudentTwo);
let StudentThree = input('Qual o nome do terceiro aluno? Nome: ');
arrayOfStudents.push(StudentThree);
let StudentFour = input('Qual o nome do quarto aluno? Nome: ');
arrayOfStudents.push(StudentFour);

/*
Outra forma de fazer esse código seria criar a lista já com os nomes dentro. Exemplos:
let arrayOfStudents = new Array(StudentOne, StudentTwo, StudentThree, StudentFour);

Ou até mesmo fazer o uso da syntax mais simples:

let arrayOfStudents = [StudentOne, StudentTwo, StudentThree, StudentFour];
*/

console.log(`O(A) aluno(a) sorteado(a) para apagar o quadro negro foi o(a) ${arrayOfStudents[getRandomNumber(0, arrayOfStudents.length - 1)]}.`)
