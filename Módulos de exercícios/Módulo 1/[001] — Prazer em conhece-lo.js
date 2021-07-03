/*   É necessário a inicialização de um módulo de node.js para o input de informações.
    Esse módulo se chama prompt-sync. Para inicializa-lo é muito simples. Você precisa
    requirir ele e chama-lo como função.

    O código abaixo serve de exemplo de uso.
*/

const prompt = require('prompt-sync')();

let nome = prompt("Digite o seu nome: ");

console.log(`Olá meu amigo(a) ${nome}. Bem-vindo.`)
