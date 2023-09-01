// 1 - var, let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(b)
}

console.log(a)

let i = 100
console.log(i)

for (let i = 0; i < 5; i++) {
    console.log(i)
}

const name = "Ediberto"

function logName() {
    const name = "João"
    console.log(name)
}
logName()

console.log(name)


// 2 - arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        console.log('Olá ' + name + '!')
    } else {
        console.log('Olá')
    }
}
greeting("Ediberto")
greeting()

const testouArrow = () => console.log("testou!")
testouArrow()

const user = {
    name: "Maria",
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log(self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("username: " + this.name)
        }, 700)
    },
}
// user.sayUserName();
// user.sayUserNameArrow();


// 3 - filter
const arr = [1, 2, 3, 4, 5]
console.log(arr)

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})
console.log(highNumbers);

const users = [
    { name: "Ediberto", available: true },
    { name: "João", available: false },
    { name: "José", available: false },
    { name: "Maria", available: true },
]

const availableUsers = users.filter((u) => u.available)
const notAvailableUsers = users.filter((u) => !u.available)
console.log(availableUsers)
console.log(notAvailableUsers)


// 4 - Map
const products = [
    { name: "Camisa", price: 19.99, category: 'Roupas' },
    { name: "Chaleira Elétrica", price: 49.99, category: 'Eletro' },
    { name: "Fogão", price: 399.99, category: 'Eletro' },
    { name: "Calça Jeans", price: 59.99, category: 'Roupas' }
]
products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})
console.log(products)


// 5 - template literals
const userName = "Ediberto"
const age = 44

console.log(`o nome do usuário é ${userName} e a idade é ${age} anos.`)


// 6 - Destructuring
// COM ARRAYS
const fruits = ["Maçã", "Banana", "Mamão"]
const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

// COM OBJETOS
const productDetails = {
    name: "Mouse",
    price: 29.99,
    category: "Perifércos",
    color: "Cinza"
}

const { name: productName, price, category: productCategory, color } = productDetails
console.log(`o nome do produto ${productName} custa R$ ${price}, pertencente a categoria ${productCategory} e é da cor ${color} `)


// 7 - spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]
console.log(a3)

const a4 = [0, ...a1, 4]
console.log(a4)

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const otherInfos = { km: 100000, price: 49000 }
const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 }
console.log(car);


// 8 - classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa Gola V", 20)
console.log(shirt.name);
console.log(shirt.productWithDiscount(10));

const tenis = new Product("tenis", 120)
console.log(tenis.name);
console.log(tenis.productWithDiscount(10));

// 9 - herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price, colors)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        });
    }
}
const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])
console.log(hat.name)
console.log(hat.productWithDiscount(10))
hat.showColors()
