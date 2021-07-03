function aumentar(percent, value) {
    return value + (percent * value / 100);
};

function diminuir(percent, value) {
    return value - (percent * value / 100);
};

function dobro(value) {
    return value * 2;
};

function metade(value) {
    return value / 2;
};

export { aumentar, diminuir, dobro, metade };
