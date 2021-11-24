let hello : string = 'hello';
console.log(hello);
let hasValue = true;
let float = 3.14;
let cnout = 10
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;

// 推論型、object型も存在する。object型はキーにアクセスできない
const person = {
  name: {
    first : 'Jack',
    last : 'Smith'
  },
  age: 21
}

// 要素を取り出した時も型が有効、any union型で複数の型を配列に組み込める。
const fruits = ['Apple', 'Banana', 'Grape']