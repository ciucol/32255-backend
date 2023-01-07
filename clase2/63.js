const sumar = (num1, num2) => num1 + num2

const restar = (num1, num2) => num1 - num2

const myCalculator = (numero1, numero2, cb) => {
  const response = cb(numero1, numero2)
  return response
}

const response = myCalculator(5, 7, sumar)
console.log(response)