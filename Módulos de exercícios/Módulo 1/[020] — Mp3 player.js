const player = require('play-sound')({player: "C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe"})

player.play('C:\\Users\\Rodrigo Siliunas\\Desktop\\Exercícios em JavaScript\\Módulos de exercícios\\Módulo 1\\pac.mp3', function(err){
    if (err) throw err;
    console.log("Audio finished");
})

/*

Explicações sobre o programa:

Esse é um programa simples que não faz nada de mais. Você executa um player Mp3 para tocar o seu audio. Você deve especificar o caminho absoluto do seu player na constante e na chamada da função. Se estiver no Windows deve colocar double bar, ou no Linux uma barra só.

*/
