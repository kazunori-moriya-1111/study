var hello = 'hello';
console.log(hello);
var hasValue = true;
var float = 3.14;
var cnout = 10;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
// 推論型、object型も存在する。object型はキーにアクセスできない
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// 要素を取り出した時も型が有効、any union型で複数の型を配列に組み込める。
var fruits = ['Apple', 'Banana', 'Grape'];
// Tuple型を使用して要素の型を決めた配列を定義する
var book = ['business', 1500, false];
// Enum型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
// any型
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.abc = 'abc';
// string型にany型を代入可能
var banana = 'banana';
banana = anything;
// union型 複数の型を受け入れる
var unionType = 10;
unionType = 'hello';
unionType.toUpperCase();
// 配列でunion型を定義
var unionTypes = [21, 'hello'];
var apple = 'apple';
var clothSize = 'medium';
var cloth = {
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
var anotherAdd = add;
var doubleNumber = function (number) { return number * 2; };
// コールバック関数に型付与
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum + 1;
});
// unknown型
var unknownInput;
var anyInput;
var text;
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
