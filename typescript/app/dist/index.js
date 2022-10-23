let hello = 'hello';
console.log(hello);
let hasValue = true;
let float = 3.14;
let cnout = 10;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
// 推論型、object型も存在する。object型はキーにアクセスできない
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// 要素を取り出した時も型が有効、any union型で複数の型を配列に組み込める。
const fruits = ['Apple', 'Banana', 'Grape'];
// Tuple型を使用して要素の型を決めた配列を定義する
const book = ['business', 1500, false];
// Enum型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
// any型
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.abc = 'abc';
// string型にany型を代入可能
let banana = 'banana';
banana = anything;
// union型 複数の型を受け入れる
let unionType = 10;
unionType = 'hello';
unionType.toUpperCase();
// 配列でunion型を定義
let unionTypes = [21, 'hello'];
const apple = 'apple';
let clothSize = 'medium';
const cloth = {
    color: 'white',
    size: 'medium'
};
// 関数に型を付与する
function add(num1, num2) {
    return num1 + num2;
}
// 関数の戻り値にvoidを使う
function sayHello() {
    console.log('Hello');
}
// 関数型の付与
const anotherAdd = add;
const doubleNumber = number => number * 2;
// コールバック関数に型付与
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum + 1;
});
// unknown型
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never型
function error(message) {
    throw new Error(message);
}
// watchモード tsc index.ts -w
var hen = '1';
