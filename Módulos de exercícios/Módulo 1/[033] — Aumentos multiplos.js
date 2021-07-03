const input = require('prompt-sync')();

let salario = Number(input('Digite o valor do salário do funcionário: '));
const ajusteSalarial = (salario) => {
    if (salario > 2000) {
        return salario + (10 * salario / 100)
    } else {
        return salario + (15 * salario / 100)
    };
};

console.log(`O salário original do funcionário é de R$${salario}. O salário com ajuste deve ser de R$${ajusteSalarial(salario)}.`);
