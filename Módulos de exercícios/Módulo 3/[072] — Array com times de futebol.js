let arrayDeTimes = ['Flamengo', 'Internacional', 'Atlético-MG', 'São Paulo', 'Fluminense', 'Grêmio', 'Palmeiras', 'Santos', 'Athletico', 'Bragantino', 'Ceará', 'Corinthians', 'Atlético-GO', 'Bahia', 'Sport', 'Fortaleza', 'Vasco', 'Goiás', 'Coritiba', 'Botafogo'];
let timesOrdemAlfabetica = [...arrayDeTimes].sort()

const displayToPosition = (array, firstPos, finalPos) => {
    let arrayToDisplay = new Array;

    array.forEach(displayArray = (value, index) => {
        if (index >= firstPos && index <= finalPos) {
            arrayToDisplay.push(value);
        };
    });

    return arrayToDisplay;
};

console.log(`Os cinco primeiros colocados:\n${displayToPosition(arrayDeTimes, 0, 4)}.\n\nOs últimos quatro colocados:\n${displayToPosition(arrayDeTimes, 16, 19)}.\n\nOs times em ordem alfabética:\n${timesOrdemAlfabetica}.\n\nO time do Corinthians está na posição ${arrayDeTimes.indexOf('Corinthians') + 1}.\n\nFim do programa.`);