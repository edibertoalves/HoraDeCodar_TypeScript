// 1 - exemplo decorator
function myDecorator() {
    console.log('iniciando decorator!')

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log('executando descriptor')
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class myClass {
    @myDecorator()
    testing() {
        console.log("terminando execução do método")
    }
}
const myObj = new myClass();
myObj.testing()


// 2 - multiplos decorators
// OBS - Executa primeiro a função que estiver mais próxima a função de classe
function a() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou a")
    }
}

function b() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou b")
    }
}

function c() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou c")
    }
}

class MultipleDecorators {
    @b()
    @a()
    @c()
    testing() {
        console.log("terminando execução")
    }
}
const multiple = new MultipleDecorators();
multiple.testing();


// 3 - class decorator
function classDecorator(constructor: Function) {
    console.log(constructor.name)

    if (constructor.name == "User") {
        console.log("criando usuário")
    }
}

@classDecorator
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const ediberto = new User('Ediberto')


// 4 - method decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}


class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        console.log(this)
        return `o nome da máquina é ${this.name}`
    }
}

const trator = new Machine("Trator")
console.log(trator);


// 5 - accessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `o nome dele é ${this.name}`
    }

    @enumerable(false)
    get showAge() {
        return `a idade do monstro é ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)
console.log(charmander);


// 6 - property decorator
// fazer uma função para decorar 5 casas
// 1 => 00001 
function formatNumber() {
    return function (target: any, propertyKey: string) {
        let value: string

        const getter = function () { return value }

        const setter = function (newVal: string) { value = newVal.padStart(5, "0") }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID("1")
console.log(newItem)
console.log("o id é: " + newItem.id)


// 7 - exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)
const newPen = new Pen(55)

console.log(newBook)
console.log(newPen)

console.log(newBook.createdAt)
console.log(newBook)


// 8 - exemplo real method decorator
function checkIfUserPosted() {
    return function (target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction)
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log("usuario já postou! ")
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do Usuário: ${content}`)
    }
}

const newPost = new Post()
newPost.post("meu primero post!", newPost.alreadyPosted)
newPost.post("meu segundo post!", newPost.alreadyPosted)


// 9  - exemplo real com property decorator
function Max(limit: number) {
    return function (target: Object, propertyKey: string) {
        let value: string

        const getter = function() { return value }

        const setter = function(newVal: string) {
            if (newVal.length > limit) {
                console.log(`o valor deve ter no máximo ${limit} digitos`)
                return
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class Admin {
    @Max(10)
    username

    constructor(username: string) {
        this.username = username
    }
}

let pedro = new Admin("pedroAdmin12345")

let lee = new Admin("lee")
console.log(lee)
