const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1
  }
]

const [primeraPos, segundaPos] = objetos.map(carrito => Object.keys(carrito))
const todos = [...primeraPos, ...segundaPos]

console.table(todos)


const valores = objetos.map(carrito => Object.values(carrito))
const valoresASumar = valores.flat()
const totalProductos = valoresASumar.reduce((acc, current) => acc + current)

console.table(totalProductos)