const input = require('prompt-sync')();

console.log('Bem-vindo a calculadora com menu de opções. Por gentileza, informe dois números para que possamos continuar.');

let numberOne = Number(input('Número um: '));
let numberTwo = Number(input('Número dois: '));

const showOptions = () => {
    console.log('\n1. Somar.\n2. Multiplicar.\n3. Dividir.\n4. Maior número.\n5. Novos números.\n6. Encerrar calculadora.\n')
};

showOptions();
let userChoice = Number(input('Escolha: '));

while (userChoice >= 1 && userChoice <= 6) {
    switch (userChoice) {
        case 1:
            console.log('A opção escolhida por você foi a de \033[1;32mSOMA\033[0;0m. O número ' + numberOne + ' somado com o número ' + numberTwo + ' produz um resultado igual a ' + (numberOne + numberTwo) + '.')
            break;
        case 2:
            console.log('Você escolheu a opção de \033[1;32mMULTIPLICAÇÃO\033[0;0m. O número ' + numberOne + ' multiplicado com o número ' + numberTwo + ' produz um resultado igual a ' + (numberOne * numberTwo) + '.')
            break;
        case 3:
            console.log('Você escolheu a opção de \033[1;32mDIVISÃO\033[0;0m. O número ' + numberOne + ' dividido pelo o número ' + numberTwo + ' produz um resultado igual a ' + (numberOne / numberTwo) + '.')
            break;
        case 4:
            if (numberOne > numberTwo) {
                console.log('Você quer saber o maior número entre os dois. O maior número é a sua primeira opção. O número um equivalente a ' + numberOne + ' é maior que o número dois equivalente a ' + numberTwo + '.')
            } else if (numberTwo > numberOne) {
                console.log('Você quer saber o maior número entre os dois. O maior número é a sua segunda opção. O número um equivalente a ' + numberTwo + ' é maior que o número um equivalente a ' + numberOne + '.')
            } else {
                console.log('Não há absolutamente nenhuma diferença entre os dois números. Ambos são iguais.')
            };
            break;
        case 5:
            numberOne = Number(input('Digite o novo número um: '));
            numberTwo = Number(input('Digite o novo número dois: '));

            console.log('\033[1;31mNúmeros resetados!\033[0;0m\n')
            break;
        case 6:
            console.log('\nObrigado por utilizar a calculadora menu de opções. O programa será encerrado agora.')
            break;
        default:
            console.log('Você escolheu uma opção inválida. Tente novamente.\n')
            break;
    };

    if (userChoice == 6) {
        break;
    };

    showOptions();
    userChoice = Number(input('Escolha: '));
};
