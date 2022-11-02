abstract class Person {
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
    this.explainJob()
  }
  abstract explainJob(): void;
}


class Teacher extends Person {
  explainJob(): void {
    console.log(`I am teacher I teach ${this.subject}`)
  }
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
}
const teacher = new Teacher('abc', 35, 'math')
teacher.subject = 'Music'
teacher.greeting()