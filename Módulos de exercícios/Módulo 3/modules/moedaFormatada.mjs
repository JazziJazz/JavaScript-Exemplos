function aumentar(percent, value) {
    return (value + (percent * value / 100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function diminuir(percent, value) {
    return (value - (percent * value / 100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function dobro(value) {
    return (value * 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function metade(value) {
    return (value / 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export { aumentar, diminuir, dobro, metade };