class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`hello My name is ${this.name}. I am ${this.age} years old`);
    }
}
const xxx = new Person('xxx', 33);
xxx.incrementAge();
xxx.greeting();
