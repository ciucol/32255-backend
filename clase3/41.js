const { json } = require('express')
const fs = require('fs')

const operacionesAsincronas = async () => {
  try {
    await fs.promises.writeFile('./ejemplo.txt', 'Hi coders con promesas')

    const resultado = await fs.promises.readFile('./ejemplo.txt', 'utf-8')
    console.log(resultado)
  } catch (error) {
    console.log(error)
  }
}

operacionesAsincronas()


const countries = {
  col: 'amarilo, azul, rojo',
  arg: 'azul, blanco',
  per: 'rojo, blanco'
}

JSON.stringify(countries)