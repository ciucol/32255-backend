const number = [2, 4, 6, 8]

const cuadrados = number.map(numero => numero ** 2)
console.log(cuadrados)

const incluye = cuadrados.includes(16)
console.log(incluye)

const numeroABuscar = 6
const incluyeNumber = number.includes(numeroABuscar)
console.log(`el valor ${numeroABuscar} se está buscando en el array ${number} y el resultado es ${incluyeNumber}`)