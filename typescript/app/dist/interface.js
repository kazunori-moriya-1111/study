class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log('Hello');
    }
}
const human = {
    name: 'abc',
    age: 33,
    greeting(message) {
        console.log(message);
    }
};
