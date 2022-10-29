class Person {
  constructor(public readonly name: string, protected age: number) {
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

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age)
  }
  greeting() {
    console.log(`hello My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`)
  }
}
const teacher = new Teacher('abc', 35, 'math')
teacher.greeting()