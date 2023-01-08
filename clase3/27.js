const fs = require('fs')


fs.writeFileSync('./ejemplo.txt', 'Hi coders')

if (fs.existsSync('./ejemplo.txt')) {
  const contenido1 = fs.readFileSync('./ejemplo.txt', 'utf-8')

  fs.appendFileSync('./ejemplo.txt', ' vamos con toda')
  const contenido2 = fs.readFileSync('./ejemplo.txt', 'utf-8')
  console.log(contenido2, ' desde el archivo editado')

  fs.unlinkSync('./ejemplo.txt')
}