var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logging(message) {
    return function Logging(constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selector) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super();
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1').textContent = instance.name;
                }
            }
        };
    };
}
function PropertyLogging(target, propertyKey) {
    console.log('propertyLogging');
    console.log(target);
    console.log(propertyKey);
}
function MethodLogging(target, propertyKey, descriptor) {
    console.log('MethodLogging');
    console.log(descriptor);
    console.log(target);
    console.log(propertyKey);
}
function enumerable(isEnumerable) {
    return function (target, propertyKey, descriptor) {
        return {
            enumerable: isEnumerable
        };
    };
}
function AccessorLogging(target, propertyKey, descriptor) {
    console.log('AccessorLogging');
    console.log(descriptor);
    console.log(target);
    console.log(propertyKey);
}
let User = class User {
    constructor(_age) {
        this._age = _age;
        this.name = 'abc';
        console.log('User was created');
    }
    get age() {
        return this._age;
    }
    set set(value) {
        this._age = value;
    }
    greeting() {
        console.log('Hello');
    }
};
User.name2 = 'def';
__decorate([
    AccessorLogging
], User.prototype, "age", null);
__decorate([
    enumerable(false),
    MethodLogging
], User.prototype, "greeting", null);
__decorate([
    PropertyLogging
], User, "name2", void 0);
User = __decorate([
    Component('<h1>{{ name }}</h1>', '#app'),
    Logging('Logging User')
], User);
const user1 = new User(32);
