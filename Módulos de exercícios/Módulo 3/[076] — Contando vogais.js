let listaDePalavras = ['Aprender', 'Programar', 'Linguagem', 'Javascript', 'Curso', 'Gratis', 'Estudar',
                       'Praticar', 'Trabalhar', 'Mercado', 'Futuro'];
let listaDeVogais = ['a', 'e', 'i', 'o', 'u'];


listaDePalavras.forEach(verifyWords = (value) => {
    let vogaisNaPalavra = new Array;

    for (let i = 0; i <= value.length - 1; i++) {
        listaDeVogais.forEach(vefifyVowels = (vogal) => {
            if (value[i].toLowerCase() == vogal.toLowerCase()) {
                vogaisNaPalavra.push(vogal)
            };

        });
    };

    console.log(`A palavra ${value} tem as vogais ${vogaisNaPalavra}`);
});