const input = require('prompt-sync')();

let angulo = Number(input('Qual é o valor do ângulo que você deseja encontrar? '));

let seno = Math.sin(angulo * Math.PI / 180);
let cosseno = Math.cos(angulo * Math.PI / 180);
let tangente = Math.tan(angulo * Math.PI / 180);

console.log(`
O valor do seu ângulo é de ${angulo}º.
O seno desse angulo equivale a: ${seno}.
A tengente é igual a: ${cosseno}.
E a tangente vale: ${tangente}.`)