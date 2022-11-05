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
const tmpDeveloper = {
    name: 'def',
    age: 99,
    experience: 10,
    greeting(message) {
        console.log(message);
    }
};
// 構造的部分型を定義
const user = tmpDeveloper;
const developer = new Developer('abc', 33, 7);
// user.name = 'xxx' Human型なので変更できない
developer.name = 'xxx';
