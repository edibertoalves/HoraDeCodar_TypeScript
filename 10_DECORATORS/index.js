"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - exemplo decorator
function myDecorator() {
    console.log('iniciando decorator!');
    return (target, propertyKey, descriptor) => {
        console.log('executando descriptor');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - multiplos decorators
// OBS - Executa primeiro a função que estiver mais próxima a função de classe
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou a");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou b");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou c");
    };
}
class MultipleDecorators {
    testing() {
        console.log("terminando execução");
    }
}
__decorate([
    b(),
    a(),
    c()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
// 3 - class decorator
function classDecorator(constructor) {
    console.log(constructor.name);
    if (constructor.name == "User") {
        console.log("criando usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const ediberto = new User('Ediberto');
// 4 - method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `o nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator);
// 5 - accessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `o nome dele é ${this.name}`;
    }
    get showAge() {
        return `a idade do monstro é ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// 6 - property decorator
// fazer uma função para decorar 5 casas
// 1 => 00001 
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () { return value; };
        const setter = function (newVal) { value = newVal.padStart(5, "0"); };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
console.log("o id é: " + newItem.id);
// 7 - exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(55);
console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);
console.log(newBook);
// 8 - exemplo real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("usuario já postou! ");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do Usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("meu primero post!", newPost.alreadyPosted);
newPost.post("meu segundo post!", newPost.alreadyPosted);
// 9  - exemplo real com property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () { return value; };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`o valor deve ter no máximo ${limit} digitos`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin("pedroAdmin12345");
let lee = new Admin("lee");
console.log(lee);
