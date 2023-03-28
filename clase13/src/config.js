const dotenv = require('dotenv')
const { Command } = require('commander')

const command = new Command()

command.option('--mode <mode>', 'Environment').parse()

const { mode } = command.opts()

dotenv.config({ path: `./.env.${mode}` })

module.exports = {
  port: process.env.PORT,
  token: process.env.API_GOOGLE_TOKEN,
}
