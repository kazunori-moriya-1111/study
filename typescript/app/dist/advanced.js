var _a, _b, _c;
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
    return x;
}
const upperHello = function (x) { return 0; };
let intersectionFunc;
intersectionFunc = function (a, b) { return 0; };
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
const input = document.getElementById('input'); //Non-null assertion operator
input.value = 'initial input value';
const designer = {
    name: 'abc',
    role: 'web'
};
const downloadedData = {
    id: 1
};
// Optional Chaining
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// Nullish Coalescing
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
// 型の互換性
let target = 'hello';
let source = 'hello';
target = source;
