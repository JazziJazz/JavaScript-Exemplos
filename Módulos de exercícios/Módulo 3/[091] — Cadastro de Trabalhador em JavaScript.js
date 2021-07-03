const input = require('prompt-sync')();

let currentYear = new Date().getFullYear();
let workerObject = new Object;

let nameOfWorker = input('Qual o nome do trabalhador? ');
let yearOfBirth = Number(input(`Digite o ano de nascimento de ${nameOfWorker}: `));
let numberOfSocial = Number(input('Qual o número da carteira de trabalho? (0 = null): '));

workerObject = {'name': nameOfWorker, 'yearOfBirth': yearOfBirth, 'age': currentYear - yearOfBirth,
                'social': numberOfSocial};

if (workerObject.social != 0) {
    workerObject.payment = Number(input('Qual o salário da pessoa?: '));
    workerObject.hiringYear = Number(input('Em que ano a pessoa foi contratada?: '));
    workerObject.retirementYear = workerObject.age + ((workerObject.hiringYear + 35) - currentYear);
};

console.log('\n-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-\n');

Object.entries(workerObject).forEach(([key, value]) => {
    console.log(`- ${key} tem o valor de ${value}`);
});