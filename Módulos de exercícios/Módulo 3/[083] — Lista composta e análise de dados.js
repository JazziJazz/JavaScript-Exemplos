const input = require('prompt-sync')();

let arrayOfPeople = new Array;

let mostHeavyPeople = new Array; let mostLightPeople = new Array;
let nameOfPeople; let weightOfPeople; let answerContinue;

while (true) {
    nameOfPeople = input('Qual é o nome da pessoa?: ');
    weightOfPeople = Number(input(`Qual é o peso do(a) ${nameOfPeople}?: `));

    if (!mostHeavyPeople.length || weightOfPeople > mostHeavyPeople[0].weight ) {
        mostHeavyPeople = new Array;

        mostHeavyPeople.push({'name': nameOfPeople, 'weight': weightOfPeople});
    } else if (weightOfPeople == mostHeavyPeople[0].weight) {
        mostHeavyPeople.push({'name': nameOfPeople, 'weight': weightOfPeople});
    };

    if (!mostLightPeople.length || weightOfPeople < mostLightPeople[0].weight ) {
        mostLightPeople = new Array;

        mostLightPeople.push({'name': nameOfPeople, 'weight': weightOfPeople});
    } else if (weightOfPeople == mostHeavyPeople[0].weight) {
        mostLightPeople.push({'name': nameOfPeople, 'weight': weightOfPeople});
    };

    arrayOfPeople.push({'name': nameOfPeople, 'weight': weightOfPeople});

    answerContinue = input('Você quer adicionar outra pessoa? [S/N]: ').trim().toUpperCase();

    if (answerContinue == 'N') {
        console.log('Adição de pessoas finalizada.');
        break;
    };
};

console.log(`Você adicionou um total de ${arrayOfPeople.length} pessoas.\n\nAs pessoas mais pesadas são: `);
mostHeavyPeople.forEach(showPeoples = (value) => {
    console.log(value)
});

console.log(`\nAs pessoas mais leves são: `)
mostLightPeople.forEach(showPeoples = (value, index) => {
    console.log(value)
});
