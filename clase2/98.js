const suma = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero1 === 0 || numero2 === 0) reject('Operacion innecesaria')
    resolve(numero1 + numero2)
  })
}

const myCalculator = async () => {
  try {
    console.log('calculator')
    const resultadoSuma = await suma(3, 0)
    console.log(resultadoSuma)
  } catch (error) {
    console.log(error)
  }
}

myCalculator()