const input = require('prompt-sync')();

let maiorPeso = null; let menorPeso = null;

for (let i = 0; i <= 4; i++) {
    let leitorDePesos = Number(input(`Qual é o peso da ${i + 1} pessoa? `));

    if ((maiorPeso == null) || (leitorDePesos >= maiorPeso)) {
        maiorPeso = leitorDePesos;
    };

    if ((menorPeso == null) || (leitorDePesos <= menorPeso)) {
        menorPeso = leitorDePesos;
    };
};

console.log(`\nA pessoa com o maior peso tem o equivalente à ${maiorPeso.toFixed(2)} KG.\nA pessoa com o menor peso equivale à ${menorPeso.toFixed(2)} KG.`)
