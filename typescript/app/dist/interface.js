class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const human = {
    name: 'abc',
    age: 33,
    greeting(message) {
        console.log(message);
    }
};
// 構造的部分型を定義
const user = new Developer('abc', 33, 7);
