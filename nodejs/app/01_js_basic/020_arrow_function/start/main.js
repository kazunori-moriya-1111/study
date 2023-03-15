function fn(number) {
  return number * 2;
}
console.log(fn(3))

const fnAroow = number => {
  console.log(number)
  return number * 2
}

const fnArrowObj = number => ({ result: number * 2 })
console.log(fnArrowObj(3))
