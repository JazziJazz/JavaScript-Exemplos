const input = require('prompt-sync')();

let altura = Number(input('Digite a altura da parede: '));
let largura = Number(input('Agora digite a largura dessa parede: '));

console.log(`A área da sua parede é de ${altura}x${largura}, dá um total de ${altura * largura}.\nPara pintala você precisará de ${(largura * altura) / 2} litros de tinta.`);
