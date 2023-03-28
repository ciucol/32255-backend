const { Command } = require('commander')

const command = new Command()

command
  .option('-d', 'Variables para debug', false)
  .option('-p <port>', 'Puerto del servidor', 8080)
  .option('--mode <mode>', 'Modeo de trabajo', 'production')
  .requiredOption('-u <user>', 'Usuario usado', 'No se ha declarado el usuario')
  .option('-l, --letters [letters...]', 'letras especificadas')
  .parse()

console.log(command.opts())
console.log(command.args)
