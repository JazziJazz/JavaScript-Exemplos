
const prettyPrint = (string) => {
    let stringToReturn = new String;

    for (let i = 0; i < ((string.length + 4) / 2); i++) {
        stringToReturn += '-+';
    };

    stringToReturn += '\n';
    stringToReturn += `  ${string}\n`

    for (let i = 0; i < ((string.length + 4) / 2); i++) {
        stringToReturn += '-+';
    };

    return console.log(stringToReturn);
};

prettyPrint('Que droga :(');
prettyPrint("Mas que grande vontade de ser rico.");
