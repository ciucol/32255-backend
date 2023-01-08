// console.log('Iniciamos')
// console.log('realizo operación')
// console.log('finalizó')

const temporizador = (cb) => {
  setTimeout(() => {
    cb()
  }, 0)
}

const operacion = () => console.log('Realizo operación')


console.log('Iniciamos')
temporizador(operacion)
console.log('finalizó')
