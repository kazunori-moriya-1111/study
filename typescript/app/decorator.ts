function Logging(message: string) {
  return function Logging(constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}
function Component(template: string, selector: string) {
  return function (constructor: { new(): { name: string } }) {
    const mountedElement = document.querySelector(selector)
    const instance = new constructor()
    if (mountedElement) {
      mountedElement.innerHTML = template
      mountedElement.querySelector('h1')!.textContent = instance.name
    }
  }
}

@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging User')
class User {
  name = 'abc';
  constructor() {
    console.log('User was created')
  }
}