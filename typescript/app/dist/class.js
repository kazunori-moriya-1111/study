class Person {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`hello My name is ${this.name}. I am ${this.age} years old`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    explainJob() {
        console.log(`I am teacher I teach ${this.subject}`);
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
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    static getInstance() {
        if (Teacher.instance) {
            return Teacher.instance;
        }
        Teacher.instance = new Teacher('abc', 35, 'math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
teacher.subject = 'Music';
teacher.greeting();
