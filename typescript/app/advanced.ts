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
// type guard typeof演算子
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase()
  }
  return '';
}
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
  speak() {
    console.log('bow-bow')
  }
}
class Bird {
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
  if (pet instanceof Bird) {
    pet.fly()
  }
}