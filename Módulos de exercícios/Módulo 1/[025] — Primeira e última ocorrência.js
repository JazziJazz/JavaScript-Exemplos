const input = require('prompt-sync')();

let nome = input('Digite uma frase: ');
// const regex = new RegExp("a", "gi");
let meuArray = [...nome.matchAll(/a/gi)]

console.log(`
Analisando a sua frase...

A letra A aparece um total de ${meuArray.length} vezes.

A primeira ocorrência da letra A é na posição ${meuArray[0].index + 1}.
E a última ocorrência da letra A aparece na posição ${meuArray[meuArray.length - 1].index + 1}
`)
