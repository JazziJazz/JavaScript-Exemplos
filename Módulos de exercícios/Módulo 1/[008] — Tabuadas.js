const input = require('prompt-sync')();

let numberToAnalyse = Number(input('Digite um número, iremos exibir a sua tabuada: '));

console.log(`
${numberToAnalyse} x 1 = ${numberToAnalyse * 1}
${numberToAnalyse} x 2 = ${numberToAnalyse * 2}
${numberToAnalyse} x 3 = ${numberToAnalyse * 3}
${numberToAnalyse} x 4 = ${numberToAnalyse * 4}
${numberToAnalyse} x 5 = ${numberToAnalyse * 5}
${numberToAnalyse} x 6 = ${numberToAnalyse * 6}
${numberToAnalyse} x 7 = ${numberToAnalyse * 7}
${numberToAnalyse} x 8 = ${numberToAnalyse * 8}
${numberToAnalyse} x 9 = ${numberToAnalyse * 9}
${numberToAnalyse} x 10 = ${numberToAnalyse * 10}\n
Fim do programa.`)