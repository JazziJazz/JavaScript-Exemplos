const input = require('prompt-sync')();

let formaDePagamento, valorGasto;

valorGasto = Number(input('Quanto você gastou na loja? R$'));

console.log('Selecione a sua forma de pagamento:\n\n1. À vista.\n2. À vista no cartão de crédito.\n3. Em até duas vezes no cartão.\n4. Em três ou mais vezes no cartão.\n');

formaDePagamento = Number(input('Resposta: '));

switch (formaDePagamento) {
    case 1:
        valorGasto = valorGasto - (10 * valorGasto / 100);
        console.log(`Você tem direito a um desconto no valor de dez porcento. O novo preço a ser pago é de R$${valorGasto}.`);
        break;
    case 2:
        valorGasto = valorGasto - (5 * valorGasto / 100);
        console.log(`Você tem direito a um desconto no valor de cinco porcento. O novo preço a ser pago é de R$${valorGasto}.`);
        break;
    case 3:
        console.log('Forma de pagamento não elegivel para desconto. Você deve pagar o valor total de sua compra.');
        break;
    case 4:
        let numeroDeParcelas = Number(input('Em quantas parcelas você deseja realizar a compra? '));

        valorGasto = valorGasto + (20 * valorGasto / 100);
        console.log(`\nPara a sua forma de pagamento há um acrescimo de vinte porcento de juros. O novo valor a ser pago é de R$${valorGasto}. O pagamento deverá ser realizado em ${numeroDeParcelas} vezes de R$${(valorGasto / numeroDeParcelas).toFixed(2)}.`);
        break;
    default:
        console.log('Você escolheu uma opção invalida de pagamento. Por favor, reinicie o programa e tente novamente.');
};
