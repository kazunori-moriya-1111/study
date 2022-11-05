interface Human {
  name: string,
  age: number
  greeting(message: string): void;
}
const human: Human = {
  name: 'abc',
  age: 33,
  greeting(message: string) {
    console.log(message)
  }
}
let developer: Human