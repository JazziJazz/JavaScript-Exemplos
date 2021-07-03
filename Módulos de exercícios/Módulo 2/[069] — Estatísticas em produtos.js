const input = require('prompt-sync')();

let produtoMaisBaratoNome = null; let produtoMaisBaratoPreco = null;
let produtosAcimaDeMil = 0; let valorTotalCompra = 0;

while (true) {
    console.log('');
    let produtoNome = input('Qual o nome do produto?: ');
    let precoProduto = Number(input('Quanto custa esse produto?: '));

    if (precoProduto <= produtoMaisBaratoPreco || produtoMaisBaratoPreco == null) {
        produtoMaisBaratoNome = produtoNome;
        produtoMaisBaratoPreco = precoProduto;
    };

    if (precoProduto >= 1000) {
        produtosAcimaDeMil++;
    };

    valorTotalCompra += precoProduto;

    let questao = input('\nVocê quer continuar? [S/N]: ').trim().toUpperCase();

    if (questao == 'N') {
        console.log(`O valor total da compra é de R$${valorTotalCompra}. O produto mais barato foi a(o) ${produtoMaisBaratoNome} custando um total de R$${produtoMaisBaratoPreco}. Um total de ${produtosAcimaDeMil} produto(s) em seu carrinho custam mais de mil reais.`);
        break;
    };
};
