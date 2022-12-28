function Logging(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logging
class User {
  name = 'abc';
  constructor() {
    console.log('User was created')
  }
}