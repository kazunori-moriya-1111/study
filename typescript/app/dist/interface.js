let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
class Developer {
    constructor(age, experience, name) {
        this.age = age;
        this.experience = experience;
        this.name = name;
    }
    // オプショナルパラメータ
    greeting(message) {
        console.log(message);
    }
}
const human = {
    name: 'abc',
    age: 33,
    // デフォルトパラメータ
    greeting(message = 'Hello') {
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
const developer = new Developer(33, 7, 'abc');
// user.name = 'xxx' Human型なので変更できない
developer.name = 'xxx';
