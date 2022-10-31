class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`hello My name is ${this.name}. I am ${this.age} years old`);
    }
}
Person.species = 'Homo sapiens';
const xxx = new Person('xxx', 33);
xxx.incrementAge();
xxx.greeting();
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error('no subject');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('no subject');
        }
        this._subject = value;
    }
    greeting() {
        console.log(`hello My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}
const teacher = new Teacher('abc', 35, 'math');
teacher.subject = 'Music';
teacher.greeting();
console.log(Person.species);
console.log(Person.isAdult(37));
console.log(Teacher.species);
console.log(Teacher.isAdult(37));
