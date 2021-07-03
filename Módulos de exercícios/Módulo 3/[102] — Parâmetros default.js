let input = require('prompt-sync')();

const getPlayerInformation = (name=false, goals=false) => {
    if (name && goals) {
        console.log(`O jogador ${name} fez um total de ${goals} gols nesse campeonato.`);
    } else if (name && !goals) {
        console.log(`O jogador ${name} fez um total de 0 gols nesse campeonato.`);
    } else if (!name && goals) {
        console.log(`O jogador <desconhecido> fez um total de ${goals} gols nesse campeonato.`);
    } else {
        console.log(`O jogador <desconhecido> fez um total de 0 gols nesse campeonato.`);
    };
};

let playerName = input('Qual é o nome do jogador?: ');
let numberOfGoals = input('Quantos gols o jogador fez?: ');

getPlayerInformation(playerName, numberOfGoals);

