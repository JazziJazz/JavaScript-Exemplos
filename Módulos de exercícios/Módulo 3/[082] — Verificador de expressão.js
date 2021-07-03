const input = require('prompt-sync')();

let expression = input('Verificaremos se a expressão é valida. Digite: ');

if (((expression.match(new RegExp("()", "g")) || []).length - 1) % 2 != 0) {
    console.log("A expressão é válida.");
} else {
    console.log("A expressão é inválida.");
};
