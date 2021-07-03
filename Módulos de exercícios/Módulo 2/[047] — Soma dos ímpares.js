let somaDosImpares = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 2 != 0 && i % 3 == 0) {
        somaDosImpares += i;
    };
};

console.log(`A soma total dos números ímpares múltiplos de três entre um e quinhentos é igual a: ${somaDosImpares}.`);
