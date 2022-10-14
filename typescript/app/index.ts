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

// Tuple型を使用して要素の型を決めた配列を定義する
const book: [string, number, boolean] = ['business', 1500, false];

// Enum型
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
 }

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT
}

// any型
let anything : any = true
anything = 'hello'
anything = ['hello', 33, true]
anything = {}
anything.abc = 'abc'
// string型にany型を代入可能
let banana = 'banana'
banana = anything
// union型 複数の型を受け入れる
let unionType: number | string = 10
unionType = 'hello'
unionType.toUpperCase()
// 配列でunion型を定義
let unionTypes: (number | string)[] = [21, 'hello']
// リテラル型を用いて特定の値のみを扱う
const apple: 'apple' =  'apple'
let clothSize: 'samll' | 'medium' | 'large' = 'medium'
const cloth: {
  color: string,
  size: 'samll' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}