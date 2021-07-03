const input = require('prompt-sync')();

let cidade = input('Em que cidade você nasceu? ');
cidade = cidade.trim()

console.log(cidade.toLowerCase().startsWith('são'));