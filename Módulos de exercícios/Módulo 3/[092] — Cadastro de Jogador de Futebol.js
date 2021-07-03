const input = require('prompt-sync')();

let nameOfPlayer = input('Qual o nome do jogador?: ');
let numberOfMatches = Number(input('Qual o número de partidas?: '));

let playerObject = {'name': nameOfPlayer, 'goals': [], 'total': 0};

for (let i = 0; i < numberOfMatches; i++) {
    let numberOfGoals = Number(input(`Quantos gols o jogador fez na ${i + 1} partida?: `));
    playerObject.goals.push(numberOfGoals);
    playerObject.total += numberOfGoals;
};

console.log('-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
console.log(playerObject);
console.log('\n-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-\n');


Object.entries(playerObject).forEach(([key, value]) => {
    console.log(`O campo ${key} tem o valor de ${value}.`);
});

console.log(`\n-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-\nO jogador ${playerObject.name} fez um total de ${playerObject.goals.length} gols.`);

playerObject.goals.forEach((value, index) => {
    console.log(`    — Na partida ${index} efetuou um total de ${value} gols.`);
});

console.log(`\nFoi um total de ${playerObject.total} gols.`);
