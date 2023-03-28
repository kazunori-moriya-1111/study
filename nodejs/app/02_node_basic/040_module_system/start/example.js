const calc = require('./calc')
// const { plus, minus } = require('./calc') でもいける
console.log(calc)
const result = calc.plus(1, 2);
console.log(result);
const result1 = calc.minus(1, 2)
console.log(result1)
