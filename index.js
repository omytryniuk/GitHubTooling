#!/usr/bin/env node
const program = require('commander');
const seneca = require('./seneca.js');

program
 .option('-v, --email <email>', 'verifys the email address given as a Seneca email')
 .option('-f, --format <name>', 'formats the name given as a Seneca email')
 .parse(process.argv);

if (program.email) console.log(seneca.isValidEmail(program.email));
if (program.format) console.log(seneca.formatSenecaEmail(program.format));
