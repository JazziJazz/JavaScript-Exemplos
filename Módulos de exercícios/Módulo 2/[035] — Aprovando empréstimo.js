const input = require('prompt-sync')();

let valorEmprestimo = Number(input('Você quer financiar uma casa? Qual o valor do empréstimo? R$'));
let salarioContratante = Number(input('Qual o valor do seu salário? R$'));
let anosPagamento = Number(input('Em quantos anos você deseja pagar? '));

const calculoDePagamento = (valor, anos, salario) => {
    let dados = new Array;

    if (valor / (anos * 12) <= salario) {
        dados.push(valor + (30 * valor / 100));
        dados.push(((valor + (30 * valor / 100)) / (anos * 12)).toFixed(2));

        return dados
    }

    return false
};

let emprestimoAprovado = calculoDePagamento(valorEmprestimo, anosPagamento, salarioContratante);

if (emprestimoAprovado) {
    console.log(`Parabens! O empréstimo foi aprovado. Você deverá pagar um total de R$${emprestimoAprovado[0]}. As parcelas saem em um valor total de R$${emprestimoAprovado[1]}.`);
} else {
    console.log('Infelizmente você não ganha o suficiente para a aprovação do empréstimo.');
};
