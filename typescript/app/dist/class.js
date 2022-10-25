class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`hello My name is ${this.name}`);
    }
}
const xxx = new Person('xxx');
xxx.greeting();
const anotherxxx = {
    name: 'anotherxxx',
    greeting: xxx.greeting
};
anotherxxx.greeting();
