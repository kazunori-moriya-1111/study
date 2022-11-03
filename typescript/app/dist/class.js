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
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
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
