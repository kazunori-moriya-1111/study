const obj ={
  first_name : 'm',
  last_name : 'k',
  printFullName: () => {
    console.log('hello')
  }
}

class MyObj {
  constructor(){
    this.first_name = 'm'
    this.last_name = 'k'
  }
  printFullName() {
    console.log(this.first_name, this.last_name)
  }
}

const obj2  = new MyObj()
obj.printFullName()
obj2.printFullName()