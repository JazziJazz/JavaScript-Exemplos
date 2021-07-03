import promptSync from 'prompt-sync';

const input = promptSync();

function readInt(message) {
    let number = Number(input(message));

    while (isNaN(number) || !Number.isInteger(number)) {
        number = Number(input('Erro! Você digitou uma entrada que não é um inteiro, tente novamente: '));
    };

    return number;
};

function readFloat(message) {
    let number = Number(input(message));

    while (isNaN(number) || Number.isInteger(number)) {
        number = Number(input('Erro! Você digitou uma entrada que não é um flutuante, tente novamente: '));
    };

    return number;
};

export { readInt, readFloat };
