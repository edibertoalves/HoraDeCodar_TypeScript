// 1 - tipo de objeto para função de interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O produto é ${product.name} e o seu preço é R$ ${product.price}`)
    if (product.isAvailable) {
        console.log(`o produto se encontra disponível`)
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129.99, isAvailable: false })


// 2 - propriedade opcional em interface
interface User {
    email: string,
    role?: String
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o email ${user.email}`)

    if (user.role) {
        console.log(`A função do usuário é ${user.role}`)
    }
}

const u1: User = {
    email: "ediberto@gmail.com",
}

const u2: User = {
    email: "ediberto@gmail.com",
    role: "An. de Sistemas"
}

showUserDetails(u1);
showUserDetails(u2);

// 3 - propriedades readonly
interface Car {
    brand: string
    readonly wheels: number
}

const Fusca: Car = {
    brand: "VW",
    wheels: 4
}
console.log(Fusca);
// Fusca.wheels = 5;


// 4 - index signature
interface CoordObject {
    [index: string]: number
}
let coords: CoordObject = {
    x: 10
}
coords.y = 15;
console.log(coords);

//coords.z = "teste";


// 5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const ediberto: Human = {
    name: "Ediberto",
    age: 44
}
console.log(ediberto);

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: ["kamehameha", "genki dama"]
}
console.log(goku);
console.log(goku.superpowers[1])


// 6 - interssection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const Arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(Arnold);
console.log(Arnold.caliber);


// 7 - readonly array
// A ALTERAÇÃO DO ARRAY É SOMENTE POR LEITURA, COMO O FOREACH ou POR MÉTODO.
let myArray: ReadonlyArray<string> = ["laranja", "maçã", "banana"]
//myArray[3] = "Mamao";

myArray.forEach(item => {
    console.log("Fruta: " + item)
});
console.log(myArray);

myArray = myArray.map((item) => { return `Fruta: ${item}` });
console.log(myArray);


// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray6: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const myNumberArray6: fiveNumbers = [1, "2", true, 4, 5, 6]
console.log(myNumberArray);

type NameAndAge = [string, number]
const anotherUser: NameAndAge = ["Ediberto", 44]
console.log(anotherUser);
console.log(anotherUser[0]);
anotherUser[0] = "João"
console.log(anotherUser)


// 9 - tupla com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}
showNumbers([1, 2])

