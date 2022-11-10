const men = {
    name: 'abc',
    role: 'front-end',
    follower: 10
};
// type guard typeof演算子
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
// type guard instanceof演算子
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-bow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// 型アサーションを使用して型を上書きする
const input = document.getElementById('input');
input.value = 'initial input value';
