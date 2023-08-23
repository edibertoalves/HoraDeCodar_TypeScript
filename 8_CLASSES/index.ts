// 1 - CAMPOS EM CLASSES 
class User {
    name!: string
    age!: number

}

const ediberto = new User()
console.log(ediberto);

ediberto.name = "Ediberto"
console.log(ediberto);


// 2 - constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("Joao", 22)
console.log(joao);


// 3 - campos readonly
class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const Fusca = new Car("Fusca")
console.log(Fusca);
console.log(Fusca.wheels)

Fusca.name = 'Fusca Turbo'
// Fusca.wheels = 4


// 4 - heranca e super
class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("destroyer", 4)

console.log(trator);
console.log(destroyer);


// 5 - métodos
class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("hey stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")
console.log(jimmy);
jimmy.greeting();


// 6 - this
class Truck {
    name
    hp

    constructor(name: string, hp: number) {
        this.name = name
        this.hp = hp
    }

    showDetails() {
        console.log(`O caminhão ${this.name}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck('Volvo', 400)
const scania = new Truck('Scania', 400)

volvo.showDetails()
scania.showDetails()


// 7 - getters
class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }


    public get fullName(): string {
        return this.name + ' ' + this.surname;
    }
}

const EdibertoAlves = new Person("Ediberto", "Alves")
console.log(EdibertoAlves.fullName);


// 8 - setters
class Coords {
    x!: number
    y!: number


    public set fillX(x: number) {
        if (x === 0) {
            return
        }

        this.x = x;

        console.log('X inserido com sucesso')
    }


    public set fillY(y: number) {
        if (y === 0) {
            return
        }

        this.y = y;

        console.log('Y inserido com sucesso')
    }


    public get getCoords() {
        return `o valor de X é ${this.x} e o valor de Y é ${this.y}`
    }

}

const myCoords = new Coords();
myCoords.fillX = 10
myCoords.fillY = 50

console.log(myCoords)
console.log(myCoords.getCoords)


// 9 - herança de interface (implements)
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `o título do post é ${this.title}`
    }
}

const myPost = new blogPost("Hello World")
console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `o título do teste de interface é ${this.title}`
    }
}
const myPostTestingInterface = new TestingInterface("Hello World")
console.log(myPostTestingInterface.itemTitle())


// 10 - override de método
class Base {
    someMethod() {
        console.log('alguma coisa')
    }
}

class Nova extends Base {
    override someMethod() {
        console.log('testando outra coisa')
    }
}

const objectNova = new Nova().someMethod();


// 11 - public
class C {
    public X = 10
}

class D extends C {

}

const cInstance = new C();
console.log(cInstance.X);

const dInstance = new D();
console.log(dInstance.X);


// 12 - protected
class E {
    protected X = 10

    protected protectedMethod() {
        console.log("este método é protegido.")
    }
}

class F extends E {

    showX() {
        console.log("valor de X(classe F) é: " + this.X)
    }

    showProtectedMethod() {
        this.protectedMethod();
    }

}

const fInstance = new F()
fInstance.showX();
fInstance.showProtectedMethod()


// 13 - private
class PrivateClass {
    private Name = "Private"

    showName() {
        return this.Name;
    }

    private privateMethod() {
        console.log("método privado");
    }

    showPrivateMethod() {
        this.privateMethod();
    }
}

const pObj = new PrivateClass()
console.log(pObj.showName());
pObj.showPrivateMethod();

// class TestingPrivate extends PrivateClass {
//     myMethod(){
//         this.privateMethod()
//     }
// }


// 14 - static members
class StaticMembers {
    static prop = "teste static"

    static staticMethod(){
        console.log("este é um método estático")
    }
}
console.log(StaticMembers.prop)
StaticMembers.staticMethod()  


// 15 - generic classes
class Item<T, U>{
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second        
    }

    
    public get showFirst() {
        return `O first é ${this.first}`
    }
    
}

const newItem = new Item("caixa", "surpresa")
console.log(newItem.showFirst)
console.log(typeof newItem.first)

const secondItem = new Item(12, true)
console.log(secondItem.showFirst)
console.log(typeof secondItem.first)


// 16 - parameters properties
class ParameterProperties {
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty(){
        return `Qtd Total: ${this.qty}`
    }

    get showPrice(){
        return `Preço Total: ${this.qty}`
    }
}
const newShirt = new ParameterProperties("camisa", 5, 9.99)
console.log(newShirt.name);
console.log(newShirt.showQty)
console.log(newShirt.showPrice)


// 17- class expressions
 const myClass = class<T> {
    name

    constructor(name: T) {
        this.name = name
    }
 }

 const Pessoa = new myClass("Jones")
 console.log(Pessoa)
 console.log(Pessoa.name)


 // 18 - Abstract Class
 abstract class AbstractClass {

    abstract showName(): void

    constructor() {
        
    }
 }

 class AbstractExample extends AbstractClass {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    showName(): void {
        console.log(`o nome é ${this.name}`)
    }
 }

 const newAbstractObj = new AbstractExample("Jose").showName()


 // 19 - relações entre classes
 class Dog {
    name!: string
 }

 class Cat {
    name!: string
 }

 const doguinho: Dog = new Cat()
 console.log(doguinho)