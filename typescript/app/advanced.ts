type Engineer = {
  name: string
  role: string
}
type Bloger = {
  name: string
  follower: number
}
// インターセクション型で新しい型を定義
type EngineerBloger = Engineer & Bloger
const men: EngineerBloger = {
  name: 'abc',
  role: 'front-end',
  follower: 10
}
// オーバーロードを使用して、関数の返り値の型を伝える
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
// type guard typeof演算子
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase()
  }
  return x;
}
interface TmpFunc {
  (x: string): number,
  (x: number): number
}
const upperHello: TmpFunc = function (x: string | number) { return 0 }
// interface FuncA {
//   (a: number, b: string): number;
//   (a: string, b: number): number;
// }
// interface FuncB {
//   (a: string): number;
// }
// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function (a: number | string, b?: number | string) { return 0 }
interface FuncA {
  (a: number): number;
}
interface FuncB {
  (a: string): string;
}
let unionFunc: FuncA | FuncB;
unionFunc = function (a: string) { return 'hi' }

// type guard in演算子
type NomadWorker = Engineer | Bloger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name)
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role)
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower)
  }
}
// type guard instanceof演算子
class Dog {
  kind: 'dog' = 'dog'
  speak() {
    console.log('bow-bow')
  }
}
class Bird {
  kind: 'bird' = 'bird'
  speak() {
    console.log('tweet-tweet')
  }
  fly() {
    console.log('flutter')
  }
}
type Pet = Dog | Bird
function havePet(pet: Pet) {
  pet.speak()
  switch (pet.kind) {
    case 'bird':
      pet.fly()
  }
  if (pet instanceof Bird) {
    pet.fly()
  }
}
havePet(new Bird())

// 型アサーションを使用して型を上書きする
const input = <HTMLInputElement>document.getElementById('input')! //Non-null assertion operator
input.value = 'initial input value'


interface Designer {
  name: string
  // インデックスシグネチャの定義
  [index: string]: string
  // インデックスシグネチャの制約でstring以外の型は定義できない
  // age: number
}
const designer: Designer = {
  name: 'abc',
  role: 'web'
}
interface DownloadesData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedData: DownloadesData = {
  id: 1
}
// Optional Chaining
console.log(downloadedData.user?.name?.first)
// Nullish Coalescing
const userData = downloadedData.user ?? 'no-user'
// LookUp型を用いたオブジェクトメンバーの型を取得
type id = DownloadesData["id"]
// 型の互換性
let target = 'hello'
let source: 'hello' = 'hello'
target = source