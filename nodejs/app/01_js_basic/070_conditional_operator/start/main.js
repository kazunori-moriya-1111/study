// 三項演算子（ ? : ）

const a = true;
let resultA = a ? 10 : 20;

// if (a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }
console.log(resultA);

function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());
