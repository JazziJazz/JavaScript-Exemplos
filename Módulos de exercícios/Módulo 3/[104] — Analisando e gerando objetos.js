const showAverage = (situation=false, ...args) => {
    let objectToReturn = new Object;
    let higherNote = null; lowerNote = null;
    let averageNote = args.reduce((count, value) => count + value, 0) / args.length;

    args.map((value) => {
        if (higherNote == null || value > higherNote) {
            higherNote = value;
        };

        if (lowerNote == null || value < lowerNote) {
            lowerNote = value;
        };
    });

    objectToReturn = {'total': args.length, 'maior': higherNote, 'menor': lowerNote, 'media': averageNote};

    if (situation) {
        if (averageNote >= 7) {
            objectToReturn.sit = 'Aprovado!';
        } else if (averageNote >= 5) {
            objectToReturn.sit = 'Recuperação!';
        } else {
            objectToReturn.sit = 'Reprovado!';
        };
    };

    return objectToReturn;
};


resposta = showAverage(situation=true, 5, 4, 3);
console.log(resposta);
