
const moment = require('moment');

/* Exibe a hora atual formatada com a biblioteca moment */
const time = new Date();

/* Exibe a hora atual formatada com a biblioteca moment */
const parsedTime = moment(time).format('HH:mm:ss');
console.log(parsedTime);
