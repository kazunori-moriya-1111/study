let a = 0
console.log(a)

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1
    reject(a)
  }, 2000)
}).then((b) => {
  console.log(b)
}).catch((c) => {
  console.log('catchが実行', c)
})
