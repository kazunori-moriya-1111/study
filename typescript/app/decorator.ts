function Logging(message: string) {
  return function Logging(constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}
function Component(template: string, selector: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super()
        const mountedElement = document.querySelector(selector)
        const instance = new constructor()
        if (mountedElement) {
          mountedElement.innerHTML = template
          mountedElement.querySelector('h1')!.textContent = instance.name
        }
      }
    }
  }
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('propertyLogging')
  console.log(target)
  console.log(propertyKey)
}
function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('MethodLogging')
  console.log(descriptor)
  console.log(target)
  console.log(propertyKey)
}
function enumerable(isEnumerable: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    return {
      enumerable: isEnumerable
    }
  }
}
function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('AccessorLogging')
  console.log(descriptor)
  console.log(target)
  console.log(propertyKey)
}
function ParameterLogging(target: any, propertyKey: string, parameterIndex: number) {
  console.log('ParameterLogging')
  console.log(parameterIndex)
  console.log(target)
  console.log(propertyKey)
}
@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging User')
class User {
  @PropertyLogging
  static name2 = 'def'
  name = 'abc';
  constructor(public _age: number) {
    console.log('User was created')
  }
  @AccessorLogging
  get age() {
    return this._age
  }
  set set(value) {
    this._age = value
  }
  @enumerable(false)
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    console.log('Hello')
  }
}
const user1 = new User(32)