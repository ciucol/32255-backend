const dividir = (divisor, dividendo) => {
  return new Promise((resolve, reject) => {
    if (dividendo === 0) {
      reject('No se puede dividir por cero')
    } else {
      resolve(divisor / dividendo)
    }
  })
}

dividir(10, 5)
  .then(z => z + 4)
  .catch(err => console.log(err))
