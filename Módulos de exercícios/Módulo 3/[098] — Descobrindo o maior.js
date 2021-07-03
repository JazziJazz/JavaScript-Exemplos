const getMostHighValue = (...args) => {
    let defaultValue = null; let count = 0;

    args.map(x => { if (defaultValue == null || x > defaultValue) {defaultValue = x}; count++});

    return console.log(`Você informou um total de ${count} números.\nO maior número informado por você é ${defaultValue}.\nOs valores informados por você foram ${args}.`);
};

getMostHighValue(5, 8, 9, 15, 10, 1);
