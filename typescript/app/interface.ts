interface Human {
  name: string,
  age: number
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) { }
  greeting(message: string): void {
    console.log(message)
  }
}
const human: Human = {
  name: 'abc',
  age: 33,
  greeting(message: string) {
    console.log(message)
  }
}
// 構造的部分型を定義
const user: Human = new Developer('abc', 33, 7)