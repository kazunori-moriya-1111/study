class Person {
  static species = 'Homo sapiens'
  static isAdult(age: number) {
    if (age > 17) return true
    return false
  }
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
  get subject() {
    if (!this._subject) {
      throw new Error('no subject')
    }
    return this._subject
  }
  set subject(value) {
    if (!value) {
      throw new Error('no subject')
    }
    this._subject = value
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age)
  }
  greeting() {
    console.log(`hello My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`)
  }
}
const teacher = new Teacher('abc', 35, 'math')
teacher.subject = 'Music'
teacher.greeting()

console.log(Person.species)
console.log(Person.isAdult(37))
console.log(Teacher.species)
console.log(Teacher.isAdult(37))