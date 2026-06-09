var fs = require('fs');

fs.appendFile('arquivo.txt', 'Olá, mundo! Olá NodeJS! SENAI\n', function (err) {
    if (err) throw err;
    console.log('Arquivo atualizado com sucesso!');
});

