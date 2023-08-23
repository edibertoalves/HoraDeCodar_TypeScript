// 1 - Generics
function showData<T>(arg: T): string {
    return `o dado é ${arg}`
}
console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(showData([]))
console.log(showData(["teste"]))


// 2 - constraints em generics
function showProductName<T extends {name: string}>(obj: T) {
    return `o nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", color: "Branca"}
const myObj2 = {name: "Carro", wheels: 4, engine: 1.0}
const myObj3 = {price: 19.9, category: "Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(myObj2))
// console.log(showProductName(myObj3))


// 3 - generics com interfaces
interface myObject<T, U, Q> {
    name : string
    wheels : T
    engine: U
    color: Q
}

type Car = myObject<number, number, string>
type Pen = myObject<boolean, boolean, string>

const myCar = {name: "Fusca",  wheels: 4, engine: 1.0, color: "Branco"}
const myPen = {name: "Caneta BIC", wheels: false, engine: false, color: "azul"}

console.log(myCar)
console.log(myPen)


// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "32 GB"
}

console.log(getSomeKey(server, "ram"))
// console.log(getSomeKey(server, "teste"))


// 5 - keyof type operator
type Character = { name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, key: C): string {
    return `${obj[key]}`
}

const myChar: Character = {
    name: "Ediberto",
    age: 44, 
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))


// 6 - typeof type operator
const userName: string = "Ediberto"

const userName2: typeof userName = "Joao"
console.log(userName2);

type x = typeof userName
const userName3: x = "Maria"
console.log(userName3);


// 7 - indexed access type
type Truck = {km: number, kg: number, description?: string} // literal type
type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem a KM de: ${km}`)
}
showKm(newTruck.km)

const newCar = {
    km: 2500,
    kg: 3000
}
showKm(newCar.km)


// 8 - condititonal types
interface A {}

interface Teste {
    showName(): string
}

interface B extends A {}

type myType =  B extends A ? number: string 

const someVar:  myType = 5
// const someVar2:  myType = "teste"

type myTypeB =  Teste extends {showNumber(): number} ? string: boolean


// 9 - template literal types
type testA = "text"
type CustomType = `some ${testA}`

const testing: CustomType = "some text"

type a1 = "testando"
type a2 = "union"

type a3 = `${a1}` | `${a2}`


