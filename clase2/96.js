const dividir = (divisor, dividendo) => {
  return new Promise((resolve, reject) => {
    if (dividendo === 0) {
      reject('No se puede dividir por cero')
    } else {
      resolve(divisor / dividendo)
    }
  })
}

const dividirAsincrono = async () => {
  try {
    const resultado = await dividir(10, 0)
  } catch (err) {
    console.log(err)
  }
}
dividirAsincrono()