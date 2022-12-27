function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value.name
  value[key]
  return value
}
console.log(copy({ name: 'abc', age: 33 }, 'age'))
type K = keyof { name: string; age: number }