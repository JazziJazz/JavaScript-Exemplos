const input = require('prompt-sync')();

let arrayOfPeoples = new Array; let womans = new Array; let peopleAverageAge = new Array;
let name; let age; let sex; let continueQuestion; let averageYear = 0;

while (true) {
    name = input('Qual o nome da pessoa?: ');
    age = Number(input('Digite a idade: '));
    sex = input('Qual é o sexo da pessoa? [M/F]: ').trim().toUpperCase();

    while (sex != "F" && sex != "M") {
        console.log('Desculpe. Parece que houve um erro, verifique o que você digitou e tente novamente.');
        sex = input('Digite o sexo da pessoa [M/F]: ').trim().toUpperCase();
    };

    arrayOfPeoples.push({'name': name, 'age': age, 'sex': sex});

    continueQuestion = input('Você deseja adicionar outra pessoa? [S/N]: ').trim().toUpperCase();

    while (continueQuestion != "S" && continueQuestion != "N") {
        console.log('Ooops. Parece que houve um erro, verifique o que você digitou e tente novamente.');
        continueQuestion = input('Você deseja adicionar outra pessoa? [S/N]: ').trim().toUpperCase();
    };

    if (continueQuestion != "S") {
        arrayOfPeoples.forEach((index) => {
            averageYear += index.age;
        });
        averageYear = averageYear / arrayOfPeoples.length;

        arrayOfPeoples.forEach((index) => {
            if (index.sex == "F") {
                womans.push(index.name);
            };

            if (index.age >= averageYear) {
                peopleAverageAge.push(index);
            };
        });
        break;
    };
};

console.log('\n-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
console.log('-+-+-   EXIBINDO DADOS DAS PESSOAS   +-+-');
console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-\n');

console.log(`A) Você cadastrou um total de ${arrayOfPeoples.length} pessoas.`);
console.log(`B) A média de idades é de ${averageYear}.`);
console.log(`C) As mulheres cadastradas foram: [${womans}].`);
console.log(`D) As pessoas com idade acima da média são:\n`);

peopleAverageAge.forEach((index) => {
    console.log(index);
});

console.log('\nPrograminha encerrado.');
