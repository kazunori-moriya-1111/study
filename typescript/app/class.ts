class Person {
  name: string
  constructor(initName: string) {
    this.name = initName
  }
  greeting(this: { name: string }) {
    console.log(`hello My name is ${this.name}`)
  }
}

const xxx = new Person('xxx')
xxx.greeting()
const anotherxxx = {
  name: 'anotherxxx',
  anotherGreeting: xxx.greeting
}
anotherxxx.anotherGreeting()