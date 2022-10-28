class Person {
  constructor(public readonly name: string, private age: number) {
  }
  incrementAge() {
    this.age += 1
  }
  greeting(this: Person) {
    console.log(`hello My name is ${this.name}. I am ${this.age} years old`)
  }
}

const xxx = new Person('xxx', 33)
xxx.incrementAge()
xxx.greeting()