function copy<T extends { name: string }>(value: T): T {
  value.name
  return value
}
console.log(copy({ name: 'abc' }))