function Logging(message: string) {
  return function Logging(constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}

@Logging('Logging User')
class User {
  name = 'abc';
  constructor() {
    console.log('User was created')
  }
}