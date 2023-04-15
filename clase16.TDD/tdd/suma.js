require('colors')

const suma = (...numbers) => {
  const notNumber = numbers.find(number => typeof number !== 'number')
  if (notNumber) return null
  return numbers.reduce((prev, curr) => prev + curr, 0)
}

let testTotales = 0
let testPasados = 0

console.log(
  'Test 1: La función debe devolver null si algún parámetro no es numérico'
    .underline.yellow
)
const resultTest1 = suma('3', 3)
testTotales++
if (resultTest1 === null) {
  console.log('Test 1 pasó'.green)
  testPasados++
} else {
  console.log('Test 1 no pasó'.red)
}

console.log(
  'Test 2: La función debe devolver 0 si no se pasó ningún parámetro'.underline
    .yellow
)
const resultTest2 = suma()
testTotales++
if (resultTest2 === 0) {
  console.log('Test 2 pasó'.green)
  testPasados++
} else {
  console.log('Test 2 no pasó'.red)
}

console.log(
  'Test 3: La función debe poder realizar la suma correctamente'.underline
    .yellow
)
const resultTest3 = suma(5, 9)
testTotales++
if (resultTest3 === 14) {
  console.log('Test 3 pasó'.green)
  testPasados++
} else {
  console.log('Se esperaba 14')
  console.log(`Se recibió ${resultTest3}`.red)
  console.log('Test 3 no pasó'.red)
}

console.log(
  'Test 4: La función debe poder realizar la suma con cualquier cantidad de números'
    .underline.yellow
)
const resultTest4 = suma(5, 9, 12, 40, 7)
testTotales++
if (resultTest4 === 73) {
  console.log('Test 4 pasó'.green)
  testPasados++
} else {
  console.log('Se esperaba 73')
  console.log(`Se recibió ${resultTest4}`.red)
  console.log('Test 3 no pasó'.red)
}

if (testPasados === testTotales) {
  console.log(`${testPasados} test pasados de ${testTotales}`.green)
} else {
  console.log(`${testPasados} test pasados de ${testTotales}`.red)
}
