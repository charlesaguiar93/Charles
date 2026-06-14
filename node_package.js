const sh = require("superheroes");
const chalk = require("chalk");
const moment = require("moment");

/* Exibe a hora atual formatada com a biblioteca moment */
const horaAtual = moment(new Date()).format("HH:mm:ss");

/* Sorteia um herói com a biblioteca superheroes */
const heroi = sh.random();

/* Exibe o herói sorteado com a biblioteca chalk  Exibe a mensagem colorida com a hora e o herói sorteado */
console.log(chalk.cyan(`[${horaAtual}] Herói sorteado: `) + chalk.green(heroi));







/* const horaAtual = moment().format("HH:mm:ss");
console.log(chalk.bgWhite.blue.bold(`Hora atual: ${horaAtual}`)); */

/* Exibe a data atual formatada com a biblioteca moment */
//console.log(chalk.bgWhite.blue.bold(moment().format("DD/MM/YYYY")));

/* Sorteia um herói com a biblioteca superheroes e com a biblioteca chalk para a cor azul (chalk.blue) */
//console.log(chalk.bgWhite.blue.bold(sh.random()));