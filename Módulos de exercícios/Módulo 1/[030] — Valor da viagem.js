const input = require('prompt-sync')();

let quilometros = Number(input('Digite a quilometragem que você percorreu: '));
const calculoViagem = (quilometragem) => {
    if (quilometragem > 200) {
        return quilometragem * 0.45
    } else {
        return quilometragem * 0.50
    };
};

console.log(`Você percorreu uma distância de ${quilometros} e deverá pagar um total de R$${calculoViagem(quilometros)}.`);
