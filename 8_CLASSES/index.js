"use strict";
// 1 - CAMPOS EM CLASSES 
class User {
}
const ediberto = new User();
console.log(ediberto);
ediberto.name = "Ediberto";
console.log(ediberto);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("Joao", 22);
console.log(joao);
// 3 - campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const Fusca = new Car("Fusca");
console.log(Fusca);
console.log(Fusca.wheels);
Fusca.name = 'Fusca Turbo';
// Fusca.wheels = 4
// 4 - heranca e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("hey stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy);
jimmy.greeting();
// 6 - this
class Truck {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O caminhão ${this.name}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck('Volvo', 400);
const scania = new Truck('Scania', 400);
volvo.showDetails();
scania.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const EdibertoAlves = new Person("Ediberto", "Alves");
console.log(EdibertoAlves.fullName);
// 8 - setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('X inserido com sucesso');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Y inserido com sucesso');
    }
    get getCoords() {
        return `o valor de X é ${this.x} e o valor de Y é ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 10;
myCoords.fillY = 50;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `o título do post é ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `o título do teste de interface é ${this.title}`;
    }
}
const myPostTestingInterface = new TestingInterface("Hello World");
console.log(myPostTestingInterface.itemTitle());
// 10 - override de método
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('testando outra coisa');
    }
}
const objectNova = new Nova().someMethod();
// 11 - public
class C {
    constructor() {
        this.X = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.X);
const dInstance = new D();
console.log(dInstance.X);
// 12 - protected
class E {
    constructor() {
        this.X = 10;
    }
    protectedMethod() {
        console.log("este método é protegido.");
    }
}
class F extends E {
    showX() {
        console.log("valor de X(classe F) é: " + this.X);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - private
class PrivateClass {
    constructor() {
        this.Name = "Private";
    }
    showName() {
        return this.Name;
    }
    privateMethod() {
        console.log("método privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//     myMethod(){
//         this.privateMethod()
//     }
// }
// 14 - static members
class StaticMembers {
    static staticMethod() {
        console.log("este é um método estático");
    }
}
StaticMembers.prop = "teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic classes
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd Total: ${this.qty}`;
    }
    get showPrice() {
        return `Preço Total: ${this.qty}`;
    }
}
const newShirt = new ParameterProperties("camisa", 5, 9.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17- class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const Pessoa = new myClass("Jones");
console.log(Pessoa);
console.log(Pessoa.name);
// 18 - Abstract Class
class AbstractClass {
    constructor() {
    }
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`o nome é ${this.name}`);
    }
}
const newAbstractObj = new AbstractExample("Jose").showName();
// 19 - relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
