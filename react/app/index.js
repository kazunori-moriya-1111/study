var val1 = "var変数"
console.log(val1)

//var変数は上書き可能
val1 = "var変数を上書き"
console.log(val1)

// //var変数は再宣言可能
var val1 = "val変数を再宣言"
console.log(val1)

let val2 = "let変数"
console.log(val2)

// //letは上書きが可能
val2 = "let変数を上書き"
console.log(val2)

//letは再宣言が不可能
//let val2 = "let変数を上書き"

const val3 = "const変数"
console.log(val3)

//const変数は上書き不可能
// val3 = "const変数を上書き"

//const変数は再宣言不可能
// const val3 = "const変数を再宣言"

//constでもオブジェクトの中身の変更・追加は可能
const val4 = {
    name:"j",
    age:31,
}
console.log(val4)

val4.name = "k"
console.log(val4)

val4.address = "NY"
console.log(val4)

//constでも配列の中身の変更・追加は可能
const val5 = ['dog', 'cat']
console.log(val5)

val5[0] = 'bird'
console.log(val5)

val5.push("monkey")
console.log(val5)

//テンプレート文字列
const name = "J";
const age = 28

//「私の名前はJです。年齢は28歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
console.log(message1)

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2)

//アロー関数

//従来の関数
// function func1(str){
//     return str;
// }
const func1 = function(str){
    return str;
}
console.log(func1("func1です"))

//アロー関数
const func2 = (str) => str;
console.log(func2("func2です"))

const func3 = (num1, num2) => {
    return num1 + num2
}
console.log(func3(10,20))

//分割代入
const myProfile = {
    name1: "J",
    age1:28,
}
const message3 = `名前は${myProfile.name1}です。年齢は${myProfile.age1}歳です。`
console.log(message3)

const { name1, age1 } = myProfile;
const message4 = `名前は${name1}です。年齢は${age1}歳です。`
console.log(message4)

const myProfile1 = ["J", 28];
const message5 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}歳です。`
console.log(message5)

//配列の分割代入は順番が重要
const [name2, age2] = myProfile1;
const message6 = `名前は${name2}です。年齢は${age2}歳です。`
console.log(message6)

//デフォルト値、引数など
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`)
sayHello("J")
sayHello()

//スプレッド構文

//配列の展開
const arr1 = [1,2]
console.log(arr1)
console.log(...arr1)

const sumFunc = (num1, num2) => console.log(num1 + num2)
sumFunc(arr1[0], arr1[1]) 
sumFunc(...arr1)

//まとめるとき
const arr2 = [1,2,3,4,5]
const [num1, num2, ...arr3] = arr2
console.log(num1)
console.log(num2)
console.log(arr3)

//配列のコピー、結合
const arr4 = [10,20]
const arr5 = [30,40]

//スプレッド構文でコピーすると値私になる
const arr6 = [...arr4]
console.log(arr6)
arr6[0] = 100
console.log(arr6)
console.log(arr4)

const arr7 = [...arr4, ...arr5]
console.log(arr7)

//イコールでコピーすると参照渡しになる
const arr8 = arr4
console.log(arr8)
arr8[0] = 100
console.log(arr8)
console.log(arr4)

//mapやfilterを使った配列の処理
const nameArr = ["田中","山田","J"]
for (let index = 0; index < nameArr.length; index++){
    console.log(`${index + 1}番目は${nameArr[index]}`)
}

const nameArr2 = nameArr.map((name)=>{
    return name
})
console.log("nameArr2: " + nameArr2)

//一つ目の引数は配列の値、二つ目の引数はインデックス
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`))

const numArr = [1,2,3,4,5]
const newNumArr = numArr.filter((num) => {
    return num % 2 === 1 
})
console.log(newNumArr)

//J以外はさんを付与して返却
const newNameArr = nameArr.map((name) => {
    if (name === "J"){
        return name
    }else{
        return `${name}さん`
    }
})
console.log(newNameArr)

//三項演算子

//ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val6 = 1 > 0 ? 'trueです' : 'falseです'
console.log(val6)

const num = "1300"
console.log(num.toLocaleString())

const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
console.log(formattedNum)

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です'
}
console.log(checkSum(50,40))
console.log(checkSum(50,60))