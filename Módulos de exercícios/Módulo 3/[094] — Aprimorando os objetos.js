const input = require('prompt-sync')();

let arrayOfPlayers = new Array;
let nameOfPlayer; let numberOfMatch;

while (true) {
    let arrayOfGoals = new Array; let totalOfGoals = 0;

    nameOfPlayer = input('Qual o nome do jogador?: ');
    numberOfMatch = Number(input(`Quantas partidas o jogador ${nameOfPlayer} jogou?: `));

    for (let i = 0; i < numberOfMatch; i++) {
        let goals = Number(input(`Quantos gols o jogador marcou na ${i + 1} partida?: `));

        arrayOfGoals.push(goals);
        totalOfGoals += goals;
    };

    arrayOfPlayers.push({'name': nameOfPlayer, 'goals': arrayOfGoals, 'total': totalOfGoals});

    let continueQuestion = input('Você quer cadastrar outro jogador? [S/N]: ').trim().toUpperCase();

    while (continueQuestion != "S" && continueQuestion != "N") {
        console.log('Desculpe, algo de errado não está certo. Verifique o que você digitou e tente novamente.');

        continueQuestion = input('Você quer cadastrar outro jogador? [S/N]: ').trim().toUpperCase();
    };

    if (continueQuestion == "N") {
        break;
    };
};

console.log();

console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-');
console.log('-+- LISTA DE JOGADORES +-+-');
console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-');

console.log('\nCod\tNome\t\tGols\t\tTotal');


arrayOfPlayers.forEach((value, index) => {
    console.log(`${index}\t${value.name}\t\t${value.goals}\t\t${value.total}`);
});


while (true) {
    console.log();

    let showPlayer = Number(input(`Você quer mostrar os dados de qual jogador? (999-to-stop): `));

    console.log(`Levantando dados do jogador ${arrayOfPlayers[showPlayer].name}.\n`);
    arrayOfPlayers[showPlayer].goals.forEach((value, index) => {
        console.log(`No jogo número ${index} ele fez um total de ${value} gols.`);
    });

    if (showPlayer == 999) {
        break;
    };
};
