// toma un array
// itera en cada elemento del array
// a cada elemento del array le aplica una función
// guarda el nuevo elemento en un nuevo array
// retorna el nuevo array

const arrNum = [2, 4, 6, 8]

const myMap = (arr, cb) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    const newValue = cb(arr[i])
    newArr.push(newValue)
  }
  return newArr
}

// console.log('my map')
// const response = myMap(arrNum, (x) => x + 'myMap')
// console.log(response)


Array.prototype.myMap = function (cb) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    const newValue = cb(this[i]);
    newArr.push(newValue)
  }
  return newArr
}



const response = arrNum.myMap(x => x + 10)
// console.log(response)


const otroArray = ['a', 'b', 'c']

console.log(otroArray.myMap(x => x + ' wow'))