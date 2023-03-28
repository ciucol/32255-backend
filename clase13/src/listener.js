const listNumbers = (...numbers) => {
  const types = numbers.map(number => typeof number)

  const invalidParams = types.filter(type => type !== 'number')

  if (invalidParams.length > 0) {
    console.error('Parámetros invalidos: ', types)
    process.exitCode = -4
    return
  }

  console.log('Todos los parámetros son validos')
}

listNumbers(2, 4, 7)

process.on('exit', code => {
  if (code === -4) {
    return console.log('Proceso invalido por argumentos')
  }

  console.log('Proceso finalizado con éxito')
})
