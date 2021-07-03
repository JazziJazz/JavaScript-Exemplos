const input = require('prompt-sync')();

let moneyInPocket = Number(input('Iremos exibir a quantidade de dólar que você pode comprar com o que você tem no bolso.\nQuanto de dinheiro você possuí no bolso? R$'));

console.log(`\nVocê pode comprar um total de $${moneyInPocket / 5.05} dólares.`)
