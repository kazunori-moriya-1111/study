const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

function changeColor(){
  this.style.color = 'red'
}

function changeBgColor(){
  h1.style.backgroundColor = 'green'
}

btn.addEventListener('click', changeColor)
btn.addEventListener('click', changeBgColor)