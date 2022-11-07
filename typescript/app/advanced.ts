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