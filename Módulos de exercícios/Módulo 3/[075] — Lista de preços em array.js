let arrayOfPrices = ['Lapiseira', 2.75, 'Caderno', 40.00, 'Cola branca', 15.00, 'Estoujo', 10.00,
                    'Kit canetas', 25.00, 'Mochila', 120.25, 'Compasso', 9.95, 'Borracha', 5.00];

console.log(`
----------------------------------------
            LISTAGEM DE PREÇOS
----------------------------------------`)

for (let i = 0; i <= arrayOfPrices.length - 1; i++) {
    if (i % 2 == 0) {
        process.stdout.write(arrayOfPrices[i].padEnd(30, "."));
    } else {
        console.log(' R$' + arrayOfPrices[i].toFixed(2).toString().padStart(7, " "))
    }
};

console.log('----------------------------------------')