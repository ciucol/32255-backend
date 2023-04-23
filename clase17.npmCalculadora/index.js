const calc = (num1, num2, op) => {
  if (op === '+') {
    return num1 + num2
  }
  if (op === '-') {
    return num1 - num2
  }
  if (op === '*') {
    return num1 * num2
  }
  if (op === '/') {
    return num1 / num2
  }
}

module.exports = calc
