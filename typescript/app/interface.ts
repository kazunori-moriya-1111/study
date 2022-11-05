interface Human {
  name: string,
  age: number
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number) { }
  greeting(message: string): void {
    console.log('Hello')
  }
}
const human: Human = {
  name: 'abc',
  age: 33,
  greeting(message: string) {
    console.log(message)
  }
}